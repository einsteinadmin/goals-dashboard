#!/usr/bin/env python3
"""
sync-network-roster.py — turn "Stale reports: N" into a queue.

WHY THIS EXISTS
The COS network panel rendered two numbers: agents reporting (7/7) and stale reports (N).
Meanwhile the daily pull already knew exactly WHICH agent was stale and by how many days,
and threw that away before it reached the dashboard. A count tells you a problem exists;
a queue tells you whose it is. This copies the pull's own health table onto the dashboard.

It also fixes a quieter bug: network.lastRefreshed was hand-set (stuck at 2026-07-31 while
the pull ran daily), so the panel could claim a clean network from three-week-old evidence.
That date now comes from the pull that actually ran.

SOURCE OF TRUTH
  _shared/cos-network-v2/pull-log/last-run.log  — the health table the pull prints.
Nothing here re-derives freshness; it only carries the pull's verdict forward. If the pull
did not run, this makes no claim rather than a stale one.

USAGE
  python3 sync-network-roster.py [--dry-run]
"""

import json
import os
import re
import sys
from datetime import date, datetime

HERE = os.path.dirname(os.path.abspath(__file__))
DATA_JSON = os.path.join(HERE, "dashboard-data.json")
DATA_JS = os.path.join(HERE, "dashboard-data.js")

# NOTE: _shared/goals-dashboard is a SYMLINK into ~/git/goals-dashboard, so walking ".."
# from this file lands in ~/git, not in the workspace. Resolve by candidates instead.
_CANDIDATES = [
    os.environ.get("COS_PULL_LOG"),
    os.path.expanduser("~/Desktop/EMC Projects/_shared/cos-network-v2/pull-log/last-run.log"),
    os.path.abspath(os.path.join(HERE, "..", "cos-network-v2", "pull-log", "last-run.log")),
]
LAST_RUN = next((p for p in _CANDIDATES if p and os.path.exists(p)), _CANDIDATES[1])

DRY = "--dry-run" in sys.argv

ROW = re.compile(
    r"^(Albert|Gerald|Clark|CoS-MH1|Vera|Gary|Linda)\s+(\S+)\s+(\S+)\s+(\d+)\s+(\d+)\s+(yes ✓|no ✗|\(host\))\s+(.*?)\s*$",
    re.M,
)


def main():
    if not os.path.exists(LAST_RUN):
        print("no pull log at {} — leaving network panel untouched".format(LAST_RUN))
        return 0

    log = open(LAST_RUN, encoding="utf-8", errors="replace").read()
    rows = []
    for m in ROW.finditer(log):
        cos, repo, state, age, goals, wrap, principal = m.groups()
        rows.append({
            "cos": cos,
            "repo": repo,
            "state": state,
            "ageDays": int(age),
            "goals": int(goals),
            "wrapStep": wrap.split()[0],
            "principal": principal,
        })

    if not rows:
        print("health table not found in pull log — leaving network panel untouched")
        return 0

    # Mirror the pull's own threshold: anything not LIVE is a row that needs a human.
    stale = [r for r in rows if r["state"] != "LIVE"]

    # Freshness of the EVIDENCE, not of the agents: when did the pull that produced
    # this table actually run?
    try:
        ran = datetime.fromtimestamp(os.path.getmtime(LAST_RUN)).date().isoformat()
    except OSError:
        ran = date.today().isoformat()

    with open(DATA_JSON) as f:
        data = json.load(f)

    net = data.setdefault("network", {})
    net["agents"] = rows
    net["agentsReporting"] = sum(1 for r in rows if r["state"] == "LIVE")
    net["agentsTotal"] = len(rows)
    net["staleCount"] = len(stale)
    net["lastRefreshed"] = ran
    net["rosterSource"] = "cos-network-pull-daily (last-run.log)"

    if DRY:
        print("DRY RUN — no files written")
        print("{} rows · {} live · {} needing attention · pull ran {}".format(
            len(rows), net["agentsReporting"], len(stale), ran))
        for r in rows:
            print("  {:<9} {:<20} {:<8} {}d".format(r["cos"], r["principal"], r["state"], r["ageDays"]))
        return 0

    with open(DATA_JSON, "w") as f:
        json.dump(data, f, indent=1, ensure_ascii=False)
        f.write("\n")

    with open(DATA_JS, "w") as f:
        f.write("const DASHBOARD_DATA = ")
        json.dump(data, f, indent=2, ensure_ascii=False)
        f.write(";\n")

    print("Network roster synced: {} agents, {} needing attention (pull ran {}).".format(
        len(rows), len(stale), ran))
    return 0


if __name__ == "__main__":
    sys.exit(main())
