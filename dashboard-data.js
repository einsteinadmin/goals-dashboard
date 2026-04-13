const DASHBOARD_DATA = {
  "meta": {
    "quarter": "Q1 2026",
    "quarterStart": "2026-02-01",
    "quarterEnd": "2026-04-19",
    "lastRefreshed": "2026-04-12T20:00:00-05:00",
    "refreshedBy": "Albert (/retro — deep refresh)"
  },
  "companyCriticalNumbers": [
    {
      "department": "Movers/Managers",
      "numbers": [
        {
          "name": "Fleet Safety",
          "target": "80+ avg, <10% at-risk",
          "actual": "WK6: Zero claims, high-risk 44→8, phone -80%, braking -56%",
          "status": "supergreen",
          "note": "82% reduction in high-risk drivers. Zero insurance claims in 6+ weeks. Safety automations live (3/23). Samsara QA brief written (4/12): three-way weight mismatch discovered across attendance policy, Mike's Enhanced Scoring Protocol, and bonus calculator code — routed to Paul first, then Mike/Brian/Matisen. ~35/74 unsigned Samsara warnings (4/9). Mike completed camera audit, dismissed alerts review, trip assignment audit this week. Samsara consolidation EOQ."
        },
        {
          "name": "Hiring Budgets",
          "target": "105% budget all periods",
          "actual": "Brian hired 19 in 2 weeks, 7 more pending",
          "status": "green",
          "note": "Brian's region hired 19 people in 2 weeks with 7 more offers pending (3/20 huddle). Anne tracking across all regions. I-9/E-verify training completed, Clear Company templates being updated. Mike (4/1): Samsara consolidation on hold until EOQ — data integrity issue (safety data wouldn't transfer in merge)."
        }
      ]
    },
    {
      "department": "CET Sales",
      "numbers": [
        {
          "name": "Estimate Accuracy",
          "target": "62.5% within 20% variance",
          "actual": "New goals: Green at 54%, Super Green at 56%",
          "status": "green",
          "note": "Roundtable (3/23) set new estimate accuracy targets: green at 54%, super green at 56%. Finalize receipts + sales block participation tracker tied to manager reports. Dashboard date selector bug workaround via URL parameters. Investigate 'other emails' affecting accuracy."
        },
        {
          "name": "$ Conversions",
          "target": "40% conversion $",
          "actual": "Baseline broken — not apples-to-apples post-VP rollout",
          "status": "unknown",
          "note": "4/10 huddle: VP rollout pushed contact-capture earlier in funnel. Leads up 58% (1,387 vs 876), bookings flat — company-wide conversion drop is explained by denominator growth. BUT team-level conversion rates ALSO dropped ~10% (was 38%, now Leander at 6.98%, Daniel at 15%) which the denominator theory doesn't explain. Matisen flagged a possible filtering/attribution bug on top of the baseline change — Fort Worth creation-date filter not matching company-wide filter when searching by Leander. Matisen owns the investigation. Cameron: need apples-to-apples before scoring anyone on conversion (including variable pay). Pulse 11712899643 tracks."
        }
      ]
    },
    {
      "department": "CET Claims",
      "numbers": [
        {
          "name": "Magic Moments",
          "target": "20-30% wall damage reduction",
          "actual": "Program active, weekly roundups",
          "status": "supergreen",
          "note": "Jaci + Claims Team doing weekly Magic Moments roundups (3/23): flowers for grieving customer, cookies for referral partner, welcome basket for two widows moving in together. Culture embodied. Claims RAG tool piloting this week. Third claims team member interviews happening."
        },
        {
          "name": "Claim Time to Close",
          "target": "5 days (Super Green), 6-8 days (Green)",
          "actual": "Stephanie avg 3.6 days, Jaci avg 2.5 days (wk 3/19)",
          "status": "supergreen",
          "note": "CET Tracker (3/23): Stephanie weekly avg 3.6 days, Jaci 2.5 days (week of 3/19). Both well under the 5-day Super Green threshold. Trending down consistently since February. Source: CET Quarterly Tracker Google Sheet."
        }
      ]
    },
    {
      "department": "Marketing/IT",
      "numbers": [
        {
          "name": "Smart Move System Rollout",
          "target": "4 components rolled out",
          "actual": "Phase 1 live, full day-of-week rollout training 4/9, go-live Tuesday 4/14 — VP bug red flag",
          "status": "green",
          "note": "⚠️ VP REGRESSION (4/10): Multi-day VP features regressed in production — active price variable deleted from code. Bobby pushing fix. Tuesday 4/14 go-live at risk if not resolved. Day-of-week rollout training launched 4/9 — all BMs walked through, everyone trained by Monday. Quick Quote Reference Sheet built + deployed to GitHub Pages (Brian using). Nhel ran extended sales practice Friday AM. Amanda's delegation board poll going out. Pricing changes push Monday night → live Tuesday. 3-month auto-booking bug patched (365-day window, not root fix). Quote form Google Ads tracking broken (Matisen + Jeff)."
        },
        {
          "name": "Omni Channel Marketing",
          "target": "Mailers + billboards in 1+ market, ROAS identified",
          "actual": "Awards page LIVE, mailers DONE all cities, billboards 4/6",
          "status": "green",
          "note": "Awards page LIVE on site (4/1). Mailers DONE all cities — QR codes + tracking URLs live. Billboards launching April 6, on target. Marketing dashboard DONE with walkthrough + FAQ. Design system proposal from Laura coming EOD/EOW. BBB listings: Elizabeth finalizing pricing. Apple Maps: team handling directly (external partner can't help). ROAS mapping still needed for Super Green."
        }
      ]
    },
    {
      "department": "Accounting",
      "numbers": [
        {
          "name": "QuickBooks to NetSuite",
          "target": "On schedule",
          "actual": "ON HOLD",
          "status": "red",
          "note": "Migration paused. Prosper VCFO confirmed — kickoff call completed 4/10. Joselle + Mike S severance terms confirmed (30 days + 4-day workweek + severance) but conversation NOT yet delivered — Paul taking lead, ~2 weeks out. Will be Red at EOQ — no migration this quarter."
        },
        {
          "name": "Time to Close Books",
          "target": "Numbers 3 days before margin meeting",
          "actual": "Joselle/Mike S tracking",
          "status": "green",
          "note": "No complaints about late numbers in recent syncs. Controller monthly rankings launching April 1. ROAS review pushed to next week — controllers verifying revenue numbers. Paul out April 15-17 (brother's surgery). Assume on track unless flagged."
        }
      ]
    },
    {
      "department": "IT",
      "numbers": [
        {
          "name": "3 Critical Projects",
          "target": "Variable Pricing + Dashboard/KPIs + EMMA QoL",
          "actual": "VP Phase 1 live, Option A confirmed 4/7, QoL in QA",
          "status": "green",
          "note": "Option A confirmed (4/7). EMMA wild quotes RESOLVED — per-floor multiplier issue, temp fix 1.5x in place. Quote form Google Ads tracking broken — Matisen + Jeff fixing (critical). CI/CD investigation ongoing. Domain purchased. MongoDB 4 days remaining. Games fix deployed. QoL email templates in QA, mobile-friendly pages rolling."
        },
        {
          "name": "EMMA Bug Count",
          "target": "Reduce sprints/bug backlog",
          "actual": "QoL projects identified, sequenced after major deploys",
          "status": "green",
          "note": "Dev bottleneck easing — Fabian now doing code reviews (Einstein Games). QoL sprints identified and will ship after Variable Pricing and Dashboard KPIs deploy. Green trajectory by EOQ."
        }
      ]
    }
  ],
  "cameronKPIs": [
    {
      "name": "Truck Utilization Rate",
      "target": "65%",
      "actual": null,
      "status": "unknown",
      "note": "Need EMMA data. Q1 budget target 66.3%. This is the #1 gap an EMMA API endpoint would fill."
    },
    {
      "name": "Conversion Rate $",
      "target": "40%",
      "actual": null,
      "status": "unknown",
      "note": "Need EMMA data or sales reports. No number has surfaced in any meeting this quarter."
    },
    {
      "name": "eNPS",
      "target": "45+",
      "actual": "Survey running Apr 8-14",
      "status": "unknown",
      "note": "Mover engagement survey launched 4/8, closes 4/14. Results pending. Anne checking statuses."
    }
  ],
  "cameronRocks": [
    {
      "number": 1,
      "name": "Fleet Safety - QT Management",
      "critical": true,
      "status": "supergreen",
      "assessment": "All training complete 6+ weeks early. Zero insurance claims in 6 weeks (vs. 4 last year). High-risk drivers down 82% (44\u21928). Expanding to fuel efficiency. Super Green trajectory locked.",
      "superGreen": "80+ avg, <10% at-risk, weekly dashboard, monthly BM meetings, accountability during sync ups",
      "green": "All trained by March 31, 75+ avg, <20% below 70",
      "lastUpdated": "2026-03-19"
    },
    {
      "number": 2,
      "name": "Smart Move System - Phase 1",
      "critical": true,
      "status": "green",
      "assessment": "VP Phase 1 LIVE. Day-of-week rollout training completed 4/9 — all BMs walked through. Go-live Tuesday 4/14. ⚠️ VP regression: multi-day features broke in production, Bobby pushing fix. Quick Quote Reference Sheet deployed to GitHub Pages. Nhel ran extended sales practice 4/10. Conversion baseline broken — Matisen investigating. Green unless regression blocks go-live.",
      "superGreen": "All 4 components: landing pages, pricing page, emails, scripts",
      "green": "3 out of 4 completed",
      "lastUpdated": "2026-04-12"
    },
    {
      "number": 3,
      "name": "Branch Visits",
      "critical": false,
      "status": "supergreen",
      "assessment": "Super Green confirmed by Cameron (4/12). 3 of 3 visits done (S. Austin + Philippines + Waco Conference). Listen & learn lunches and ride alongs completed.",
      "superGreen": "Visit 3, listen and learn lunches at all 3, 3 ride alongs",
      "green": "Visit 2, 3 ride alongs",
      "lastUpdated": "2026-04-12"
    },
    {
      "number": 4,
      "name": "Omni Channel Marketing",
      "critical": false,
      "status": "green",
      "assessment": "Awards page LIVE. Mailers DONE all cities. Billboards launched 4/6. Marketing dashboard DONE. KP sync completed 4/8. BBB accreditation in progress (Matisen). Laura's design system proposal reviewed. ROAS mapping still the Super Green blocker.",
      "superGreen": "Mailers + billboards in 1+ market each, ROAS identified",
      "green": "1 of 2 in place, ROAS fuzzy OK if both in place",
      "lastUpdated": "2026-04-12"
    },
    {
      "number": 5,
      "name": "Content Creation - Value Transparency",
      "critical": false,
      "status": "green",
      "assessment": "CHOICES training fully polished + deployed to GitHub Pages (einsteinadmin/choices-training). 18 scenarios, 15 quiz questions, 3 culture videos, full accessibility + mobile pass. Anne hasn't reviewed yet — Cameron wants to intro in person first. Austin L v2 price comparison draft reviewed. Green — need Austin's final cuts + Anne review for Super Green.",
      "superGreen": "2 of 3 videos done (culture, value transparency, claims)",
      "green": "1 of 3 videos done",
      "lastUpdated": "2026-04-12"
    },
    {
      "number": 6,
      "name": "AI Education - Workshop Hosting",
      "critical": false,
      "status": "supergreen",
      "assessment": "CONFERENCE DELIVERED (April 2-4). Full keynote + AI build race completed at All Manager Conference in Waco. ~95% complete — post-conference TLDR still needs drafting and sending. Super Green — exceeded original workshop scope with full conference keynote.",
      "superGreen": "5 workshops with BMs (2-hr live builds)",
      "green": "3 workshops with BMs",
      "lastUpdated": "2026-04-07"
    }
  ],
  "leadership": [
    {
      "name": "Amanda Ware",
      "title": "Dir. of CX",
      "goals": [
        { "name": "Smart Move System Rollout", "critical": true, "status": "green", "assessment": "VP training is Amanda's #1 priority — working on it 4/8 with Nhel, hoping EOD, target readiness Monday. Email quote redesign underway (Amanda mockups done, Matisen tech, KP design). Out Friday 4/11 through potentially Thursday 4/17 (Harlowe surgery). Must get training videos + sales script to team before she leaves.", "superGreen": "All 4 components: landing pages, pricing page, emails, scripts drafted for Q2", "green": "3 out of 4 completed" },
        { "name": "Omni Channel Marketing", "critical": true, "status": "green", "assessment": "Billboards April 6. Mailers in Austin. Remaining city swaps and ROAS mapping are the open items. ROAS review pushed to next week — controllers verifying revenue numbers.", "superGreen": "Mailers + billboards in 1+ market each, ROAS identified", "green": "1 of 2 in place, ROAS fuzzy OK if both in place" },
        { "name": "Claims/Sales QT Management", "critical": false, "status": "green", "assessment": "CET team active. Nhel coaching, Tet auditing. No red flags raised in huddles. Assume Green unless QT scores say otherwise.", "superGreen": "Sales, Claims, ROs average Super Green", "green": "Sales, Claims, ROs average Green" },
        { "name": "Concierge Research (MBA)", "critical": false, "status": "supergreen", "assessment": "Capstone reviewed and exceeded expectations. Scope expanded to acquisition option (Austin Home Transitions). Clear actionable next steps.", "superGreen": "A on project with clear actionable insights and next steps for Q2", "green": "B on project" },
        { "name": "Lead Triage (Low Priority)", "critical": false, "status": "green", "assessment": "AI phone agent research doc completed and shared. Caltrain demo pending. Process mocked up.", "superGreen": "Process mocked up + training ready for rollout", "green": "Process outlined + training materials started" }
      ]
    },
    {
      "name": "Brian Herzig",
      "title": "CTXH Regional Mgr",
      "goals": [
        { "name": "Fleet Safety (BBE)", "critical": true, "status": "green", "assessment": "Training complete but CTXH branches slipping in Week 10: N. Austin 0, Leander 16, S. Austin 39, San Antonio 91, Houston 66. Cameron told Brian to stay on coaching (4/6 sync). Likely recoverable — may be Games Score submission issue, not actual safety regression. Verify next week.", "superGreen": "80+ avg, <10% at-risk, weekly dashboard, monthly BM meetings, accountability during sync ups + 1:1 if in red", "green": "All trained by March 31, 75+ avg, <20% below 70" },
        { "name": "Scrum Accountability Pt 3", "critical": true, "status": "green", "assessment": "Scorecard app built and ready (4/6 sync). No dependency on Cameron — Brian testing and tweaking independently. Will start using for sync-ups. On track for Green.", "superGreen": "Sync-up grading scorecard developed, cert developed, grade for all locations + OB training module built", "green": "Grading scorecard for SCRUM/Monday org, basic certification built, all managers/branches have a score" },
        { "name": "Branch Visits/Audits", "critical": false, "status": "green", "assessment": "Confirmed 3 visits including conference (4/6 sync). Austin visit scheduled for the 24th. Green locked.", "superGreen": "5 locations, scores avg 4.5+, 1 audit/branch + follow-up, 3 circle-up audits, 3 huddle audits", "green": "3 locations, scores avg 4.0+, 1 audit/branch + follow-up, 3 circle-up audits, 3 huddle audits" },
        { "name": "Legends Book Pt 2", "critical": false, "status": "green", "assessment": "Online version exists. Print version NOT done yet — in Brian's This Week (4/6 sync). Still Green but needs to get printed before EOQ.", "superGreen": "Redesign completed, approved, printed and in branch hands by EOQ (Legends, Events, Dream Team, HQ Pics)", "green": "Template drafted with pics/org ready for print. Improved legends collection process in place." },
        { "name": "Swag/Training Day Calendar", "critical": false, "status": "red", "assessment": "Swag done. Training Day Calendar still no progress — Brian will check the Replit app this week but marked as low priority (4/6 sync). Red with 13 days left.", "superGreen": "Dashboard app formatted, designed and live for rest of year company-wide, TD slides + stations linked", "green": "Dashboard app formatted, designed and live for next 6 months company-wide" }
      ]
    },
    {
      "name": "Mike Vandenbroader",
      "title": "DFWT Regional Mgr",
      "goals": [
        { "name": "Fleet Safety", "critical": true, "status": "supergreen", "assessment": "DFWT branches crushing it. Mike completed Samsara camera audit, dismissed alerts review, trip assignment audit this week. Weekly scoring updates active. Gerald AI contributing data analysis. Super Green.", "superGreen": "80+ avg, <10% at-risk, weekly dashboard, monthly BM meetings, accountability during sync ups", "green": "All trained by March 31, 75+ avg, <20% below 70" },
        { "name": "Mover Training Catalog/App", "critical": true, "status": "green", "assessment": "Gerald COS set up with permissions + GitHub auto-updates (4/6). Agent-to-agent comms active — Gerald responded to first data exchange. Mover Super App specs on Sky Board. Fleet damage tracking app close to beta. Green.", "superGreen": "Functional MVP completed and reviewed by leadership team", "green": "Scaffold fully built with mock ups and planned KPI integration" },
        { "name": "Regional Growth (Tampa/Garland OMs)", "critical": false, "status": "green", "assessment": "Tampa: Stephen Anderson onboarding progressing — 3 days field/2 office, training boards assigned, Brandon 1:1 completed (task allocation review). Garland: opening to internal + external candidates. Truck sales RED (1 of 3 sold, Adam ghosted). Green.", "superGreen": "OM hired and trained for Tampa AND Garland", "green": "OM hired and trained for Tampa" },
        { "name": "Branch Visits/Audits", "critical": false, "status": "green", "assessment": "Mike travels between DFWT branches regularly. Likely on track but need specific audit count.", "superGreen": "5 locations, branch scores avg 4.5+, audits + circle-up/huddle audits complete", "green": "3 locations, branch scores avg 4.0+, audits complete" },
        { "name": "Sell 3 Older Trucks", "critical": false, "status": "red", "assessment": "Mike sync 4/7: still RED. 1 of 3 sold, others not getting traction. Reducing price and reposting.", "superGreen": "3 trucks sold", "green": "2 trucks sold" }
      ]
    },
    {
      "name": "Matisen Harper",
      "title": "Dir. of IT",
      "goals": [
        { "name": "Variable Pricing", "critical": true, "status": "green", "assessment": "Phase 1 live. Option A confirmed (4/7). EMMA wild quotes RESOLVED — per-floor multiplier (algorithm) issue, temp fix 1.5x in place. Day-of-week rollout gated on Amanda training. Quote form Google Ads tracking broken — critical fix, Matisen + Jeff on it. Domain purchased. CI/CD investigation ongoing.", "superGreen": "Launch within timeline budget, one sprint push allowed", "green": "Launch within timeline budget, two sprint pushes allowed" },
        { "name": "Dashboard/KPIs in EMMA", "critical": true, "status": "green", "assessment": "Einstein Games validation + rollout with Bobby this week (4/6 sync). Dashboard data validation this week. Revenue dashboard in QA. Need 2-3 weeks reliable Games data before Q2 rollout. PL migration: Denis has script for Google Sheets → Rippling, checking with Anne and dev.", "superGreen": "Branch KPI Scorecards, Einstein Games migrated from Glide + download and chat feature", "green": "Branch KPI Scorecards, Einstein Games migrated from Glide + download" },
        { "name": "EMMA QoL Sprints", "critical": false, "status": "green", "assessment": "Email templates in QA. Mobile-friendly Move Manager + customer pages rolling (4/6 sync). Easier than VP. VP After Action Review end of this week. On track for Green.", "superGreen": "2 QoL feature sprints including design improvements", "green": "1 QoL feature sprint" },
        { "name": "Mobile App", "critical": false, "status": "red", "assessment": "Accepted Red (4/6 sync). Too many higher priorities. Gathering limited UX feedback and latest version to start minimal UX work. No path to Green this quarter.", "superGreen": "UX rework, E2E testing setup, mobile app in UAT", "green": "UX rework, working through E2E coverage" },
        { "name": "Mongo Schema Roadmap", "critical": false, "status": "green", "assessment": "Renamed to C4 + BPMN Architecture Maps (4/6 sync). Week LOW 21 — big scope. Building structural (C4) and behavioral (BPMN) models for agent comprehension. MongoDB 4 days remaining. Definition of done: maps ready to share with Daniel. Ties into World Model and AI-native architecture.", "superGreen": "Next-gen architecture defined with systems, system IDs, service calls + roadmap for next steps", "green": "Next-gen architecture defined with system IDs, still scoping service calls" }
      ]
    },
    {
      "name": "Anne Bosse",
      "title": "Dir. of Employee Experience",
      "goals": [
        { "name": "ClearCo Audits / Hiring Funnel", "critical": true, "status": "green", "assessment": "ClearCo API + Webhooks docs reviewed (4/10). Verdict: take bundled $3K deal. Open questions for Shealyn before signing (HMAC, sandbox, replay logs, trigger list). Don't start contract clock until VP regression + conversion baseline land. Maria Yangson hired (PH claims, starts 4/14). HR Generalist posting approved. Green.", "superGreen": "Green + hiring funnel visualized (cost per hire, time to fill, stage %) + all hired candidates have completed scorecards", "green": "100% of managers recertified on ClearCo recruiting basics" },
        { "name": "Hiring Targets (105% budget)", "critical": true, "status": "green", "assessment": "Brian + Mike now tagging Anne on bi-weekly hiring pulse updates (4/9). Maria Yangson hired 4/14 start. Mover engagement survey running Apr 8-14. Green.", "superGreen": "≤1 period below 105% hiring budget", "green": "≤1 period below 100% hiring budget" },
        { "name": "Onboarding Video Development", "critical": false, "status": "red", "assessment": "Anne delivered feedback — Cameron confirmed her QG contribution is successful. But module wiring is Cameron's bottleneck. Austin reworking Video 3 (core values + B-roll). Cameron targeting end of week to finish modules. Hold on Rippling integration until done. 11 days left — tight but possible for Green if Cameron delivers.", "superGreen": "4 out of 5 video priorities completed", "green": "3 out of 5 video priorities completed" },
        { "name": "Culture Add Hiring Beta", "critical": false, "status": "red", "assessment": "Beta tested with Tampa managers (4/8 confirmed) but NOT tested at branch level for movers yet. Video pre-screener agreed upon (3-4 questions). Pausing mover-level culture-add rollout until HR Generalist is hired — branch managers aren't recruiters. 11 days left, no mover-level beta. Red.", "superGreen": "Green + 1 new hire per branch by EOQ", "green": "100% managers recertified + new process + at least 1 new hire with new process" },
        { "name": "Annual Comp Review", "critical": false, "status": "green", "assessment": "Anne + Paul meeting Thu 4/10 and Fri 4/11 to finalize manager promotions this month. Including spot bonus budgeting for exceptional performers. Sticking to last year's process. Jack Davis comp/career development conversation this week. On track for Green.", "superGreen": "Green + promo process video recorded and part of onboarding", "green": "Promotion metrics identified and communicated to movers" }
      ]
    },
    {
      "name": "Nhel",
      "title": "Sales Team Lead",
      "goals": [
        { "name": "Sales Coaching - Conversions", "critical": true, "status": "green", "assessment": "Targets updated (3/23): green 54%, super green 56%. On pace for Green but most time spent on Sales Class Level 1 (first class shipped, second starting this week). Need to monitor new reps' conversion targets. Team +6%. Daniel 240%/65%. Training cohort set for Cameron Kleppinger and Rance. Nhel on leave Friday 3/28.", "superGreen": "Above 56% within 20% variance companywide", "green": "54% within 20% variance companywide" },
        { "name": "Sales Class Level 1", "critical": true, "status": "green", "assessment": "First sales class completely shipped. Second class starting this week. Majority of Nhel/Tet's time has gone here. Level 1 comp structure still in flux (Ralph retention risk). Monitor new reps' conversion targets for Green.", "superGreen": "New Level 1 CERs/Managers trained meeting sales target with 40% conversion $", "green": "New Level 1 CERs/Managers with 40% conversion $" },
        { "name": "Manager Accountability", "critical": false, "status": "green", "assessment": "Nhel reporting to RMs. BM check-in process being established. On track for Green.", "superGreen": "Reporting progress to RMs weekly + established regular BM check-ins", "green": "Reporting progress to RMs weekly + plan for BM check-in process" },
        { "name": "Training Tet", "critical": false, "status": "green", "assessment": "Tet doing call quality audits and sales enablement work. Independence growing. On track for Green (can conduct training for new hires independently).", "superGreen": "Tet can independently conduct training for new hires AND FMs + 1 call quality audit for everyone", "green": "Tet can independently conduct training for new hires AND FMs + audits for half the team" }
      ]
    },
    {
      "name": "Carly",
      "title": "Claims Manager (CET)",
      "goals": [
        { "name": "Magic Moments Rollout", "critical": true, "status": "supergreen", "assessment": "Crushing it. Carly 3/3, Jaci 2/3, Stephanie 2/3 on Magic Moments goal (3 each). Weekly roundups active — flowers for grieving customer, cookies for referral, welcome baskets. CET Praise Count: 105 total (Zhang 15 Super Green, June 24). Super Green.", "superGreen": "1 MM for manager + 5 standard MMs set", "green": "85% MM for managers + 3 standard MMs set" },
        { "name": "Damage Accountability & Coaching", "critical": true, "status": "green", "assessment": "Team-based damage accountability per job is live. A&D Scorecard audits: Stephanie 7/14 done (avg ~97%), Jaci 7/14 done (avg 100%). Wall damages: 25 current vs 41 goal to beat — on pace. Accuracy & Documentation: Stephanie 97%, Jaci 100% (both Super Green on 95% target).", "superGreen": "System in place and rolled out to all branches", "green": "System in place and beta testing" },
        { "name": "Hire & Train Maternity Replacement", "critical": false, "status": "green", "assessment": "Final interviews for third claims team member (3/23 roundtable). Decision expected soon, coordinating with Anne's schedule. Carly's maternity leave expected ~April. Need to get hired and trained before then.", "superGreen": "New hire fully trained and ready", "green": "New hire, semi trained" },
        { "name": "Claims Time to Close", "critical": false, "status": "supergreen", "assessment": "CET Tracker confirms Super Green: Stephanie avg 3.6 days, Jaci avg 2.5 days (week of 3/19). Both well under 5-day target. Trending down consistently since February.", "superGreen": "Average of 5 business days or less", "green": "Average of 6-8 business days" },
        { "name": "Take Over Remote Operators", "critical": false, "status": "green", "assessment": "Confirmed (3/23): ROs (currently Nhel's directs, including Mel) will transition to report to Carly. Not started yet but transition planned soon. Planning around Carly's maternity leave (~April).", "superGreen": "ROs fully taken over", "green": "RO responsibilities semi taken over" }
      ]
    },
    {
      "name": "Paul Morin",
      "title": "CFO/COO (Co-Owner)",
      "goals": [
        { "name": "N. Austin Office / Leander Lease", "critical": true, "status": "green", "assessment": "Leander lease done. N. Austin: final permit resubmission tomorrow (3/25, last comment addressed). Interiors start immediately after approval — 4-6 weeks, subcontractors have materials on hand. Targeting May occupancy. Infrastructure (cables, pipes) installed. Detail decisions locked: corner guards, window shades, fan controller, water spigot. Still open: cab lights (2-3 wks to decide), property line verification for dog boxes, security vendor, insurance policy renewal (expires 3/27). Green — on track for early May move-in.", "superGreen": "Construction a week or less behind schedule", "green": "Construction less than two weeks behind schedule. New lease signed for Leander." },
        { "name": "Branch Visits", "critical": false, "status": "red", "assessment": "Only 1 visit done (Philippines). Needs 2 for Green. Less than half the quarter left. Red.", "superGreen": "Visit 3, listen and learn lunch at all 3 w/ managers, 3 onsite eval ride alongs", "green": "Visit 2, do 2 ride alongs" },
        { "name": "Acquisition Case Study vs. Houston Branch", "critical": false, "status": "red", "assessment": "No case studies started. Red.", "superGreen": "Complete both by end of March", "green": "Complete both" },
        { "name": "Annual Manager Comp Review", "critical": true, "status": "green", "assessment": "Leadership comp review decided 4/9 — margin-based framework, Matisen + Anne getting larger bumps. Anne + Paul meeting Thu/Fri 4/10-4/11 to finalize manager promotions. Spot bonus budgeting included. Green.", "superGreen": "Messaging complete and out to team to start in action for next quarter", "green": "Hiring/pay docs updated, individual scorecards created, performance targets set" },
        { "name": "Evaluate CFO Needs/Budget", "critical": false, "status": "green", "assessment": "Prosper VCFO confirmed — kickoff call completed 4/10. Joselle + Mike S severance confirmed but conversation not yet delivered — Paul leading, ~2 weeks out. Green — decision made, execution underway." }
      ]
    },
    {
      "name": "Austin LeLievre",
      "title": "Videographer/Content",
      "goals": [
        { "name": "Training Videos in YouTube Courses", "critical": true, "status": "red", "assessment": "Strong pipeline but no confirmed uploads to YouTube Courses yet. 6 training categories in progress (walkthrough, contract, driving, truck check, dispatch com, equipment). Bed, packing, washer targeting final drafts EOW. 4 weeks left — needs to start finishing and uploading fast to hit 12. Red until uploads start landing.", "superGreen": "16-25 uploaded and getting ~70 views per video", "green": "12-16 uploaded and getting ~30 views/month per video" },
        { "name": "3 Core Quarterly Videos", "critical": true, "status": "green", "assessment": "Core Values/Culture: done and approved (3/26), uploading to training modules. Price Comparison: all 1st drafts done (15/30/60/90-sec), graphics by 3/31, 2nd drafts by 4/6. Interview Process (What to Expect): on board but no visible progress. 1 of 3 finalized, 2nd on track for early April. Green — Price Comparison finishing pushes to Super Green.", "superGreen": "Finalized versions of all 3 core quarterly videos (Core Values, Price Comparison, Interview Process)", "green": "Finalized versions of 2 of 3 core videos" },
        { "name": "Short Form Video Content", "critical": false, "status": "green", "assessment": "Two short form videos in progress ('How to Set Up Your Place', 'Interstellar' Booking). Need to check Instagram engagement metrics for published content. Producing at roughly bi-weekly pace. Green.", "superGreen": "1 weekly short form finished with 35+ likes on Instagram", "green": "1 bi-weekly video finished with ~10-35 likes on Instagram" },
        { "name": "Long Form Videos", "critical": false, "status": "green", "assessment": "Core values video + price comparison drafts count toward long form output. Training videos also qualify. Producing content consistently. Green.", "superGreen": "3+ monthly internal videos", "green": "2 monthly long form videos" },
        { "name": "Testimonial Videos", "critical": false, "status": "red", "assessment": "Shawna Hickman being scheduled but not filmed yet. No testimonials completed this quarter. Target is 1 bi-monthly — need at least 1-2 by EOQ. Red.", "superGreen": "1 monthly testimonial video with ~200+ views", "green": "1 bi-monthly testimonial video with ~100 views" }
      ]
    }
  ]
}
;