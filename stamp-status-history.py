#!/usr/bin/env python3
"""
stamp-status-history.py — give the goals dashboard a memory.

WHY THIS EXISTS
The dashboard has always rendered target + actual + color. A yellow goal that is
climbing looked identical to a yellow goal that was sliding, which is the one thing
the reader actually needs to know. This script keeps a ledger of status CHANGES so
the dashboard can show movement ("was At Risk") and tenure ("Green · 12d").

HOW IT WORKS
  status-history.json  = the ledger. Append-only. One entry per observed CHANGE.
  dashboard-data.json  = gets prevStatus / statusSince / statusDays injected for render.
  dashboard-data.js    = rewritten from the .json so the page (which loads the .js) matches.

An entry is appended ONLY when the status differs from the last recorded one. Re-running
on unchanged data is a no-op, so this is safe to call on every refresh.

HONESTY NOTE
On the first run every goal gets a baseline entry and NOTHING shows movement — because
nothing has been observed to move yet. That is correct. Movement accrues from the first
run forward; it is never back-filled or guessed. `sourceUpdated` is when the source last
PUSHED, not when the status last CHANGED, so it is rendered separately as freshness
("last heard") and never as tenure.

USAGE
  python3 stamp-status-history.py            # stamp + write
  python3 stamp-status-history.py --dry-run  # show what would change
"""

import json
import os
import sys
from datetime import date, datetime

HERE = os.path.dirname(os.path.abspath(__file__))
DATA_JSON = os.path.join(HERE, "dashboard-data.json")
DATA_JS = os.path.join(HERE, "dashboard-data.js")
HISTORY = os.path.join(HERE, "status-history.json")

DRY = "--dry-run" in sys.argv


def tracked_items(data):
    """Yield (key, item) for everything that carries a status worth tracking."""
    for rock in data.get("cameronRocks", []):
        yield ("cameron::rock::" + str(rock.get("number")) + "::" + rock.get("name", ""), rock)

    for kpi in data.get("cameronKPIs", []):
        yield ("cameron::kpi::" + kpi.get("name", ""), kpi)

    for leader in data.get("leadership", []):
        owner = leader.get("name", "?")
        for goal in leader.get("goals", []):
            yield ("leader::" + owner + "::" + goal.get("name", ""), goal)


def main():
    with open(DATA_JSON) as f:
        data = json.load(f)

    history = {}
    if os.path.exists(HISTORY):
        with open(HISTORY) as f:
            history = json.load(f)

    today = date.today().isoformat()
    first_run = not history
    changes = []

    for key, item in tracked_items(data):
        status = item.get("status") or "unknown"
        entries = history.setdefault(key, [])

        if not entries or entries[-1]["status"] != status:
            if entries:
                changes.append((key, entries[-1]["status"], status))
            entries.append({"status": status, "date": today})

        # Inject render fields. prevStatus stays absent until a real change is observed,
        # so the dashboard can tell "no movement yet" from "genuinely unchanged".
        if len(entries) >= 2:
            item["prevStatus"] = entries[-2]["status"]
        else:
            item.pop("prevStatus", None)

        since = entries[-1]["date"]
        item["statusSince"] = since
        try:
            d0 = datetime.fromisoformat(since).date()
            item["statusDays"] = (date.today() - d0).days
        except ValueError:
            item.pop("statusDays", None)

    data.setdefault("meta", {})["statusHistoryStamped"] = today

    if DRY:
        print("DRY RUN — no files written")
        print("tracked items:", sum(1 for _ in tracked_items(data)))
        print("baseline run:" if first_run else "changes this run:", len(changes))
        for k, a, b in changes:
            print("  {} : {} -> {}".format(k, a, b))
        return

    with open(HISTORY, "w") as f:
        json.dump(history, f, indent=1)
        f.write("\n")

    with open(DATA_JSON, "w") as f:
        json.dump(data, f, indent=1, ensure_ascii=False)
        f.write("\n")

    with open(DATA_JS, "w") as f:
        f.write("const DASHBOARD_DATA = ")
        json.dump(data, f, indent=2, ensure_ascii=False)
        f.write(";\n")

    n = sum(1 for _ in tracked_items(data))
    if first_run:
        print("Baseline stamped for {} items. Movement accrues from here forward.".format(n))
    else:
        print("Stamped {} items. {} status change(s) this run.".format(n, len(changes)))
        for k, a, b in changes:
            print("  {} : {} -> {}".format(k, a, b))


if __name__ == "__main__":
    main()
