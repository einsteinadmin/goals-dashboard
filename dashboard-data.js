const DASHBOARD_DATA = {
  "meta": {
    "quarter": "Q1 2026",
    "quarterStart": "2026-02-01",
    "quarterEnd": "2026-04-19",
    "lastRefreshed": "2026-03-20T17:30:00-05:00",
    "refreshedBy": "Albert (digest — Mike/Anne Tampa sync + Matisen sync)"
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
          "note": "82% reduction in high-risk drivers. Zero insurance claims in 6 weeks vs. 4 same period last year. 80% drop in phone usage. 56% decrease in harsh braking. Incentive structure (one phone use = lose entire bonus) extremely effective. Expanding to fuel efficiency."
        },
        {
          "name": "Hiring Budgets",
          "target": "105% budget all periods",
          "actual": "Brian hired 19 in 2 weeks, 7 more pending",
          "status": "green",
          "note": "Brian's region hired 19 people in 2 weeks with 7 more offers pending (3/20 huddle). Anne tracking across all regions. I-9/E-verify training completed, Clear Company templates being updated."
        }
      ]
    },
    {
      "department": "CET Sales",
      "numbers": [
        {
          "name": "Estimate Accuracy",
          "target": "62.5% within 20% variance",
          "actual": "Audits happening, no number reported yet",
          "status": "green",
          "note": "Nhel and Tet actively doing call quality audits. Process exists but no company-wide accuracy number has been reported. Need to ask for it."
        },
        {
          "name": "$ Conversions",
          "target": "40% conversion $",
          "actual": "No current number available",
          "status": "unknown",
          "note": "Blocked: need EMMA data or sales report. Level 1 comp structure in flux (Ralph risk). This is a key gap — EMMA API would solve it."
        }
      ]
    },
    {
      "department": "CET Claims",
      "numbers": [
        {
          "name": "Magic Moments",
          "target": "20-30% wall damage reduction",
          "actual": "Program active, no % reported",
          "status": "green",
          "note": "Carly/Stephanie/Jaci running Magic Moments program. No wall damage reduction % reported yet. Ask Carly at next touchpoint."
        },
        {
          "name": "Claim Time to Close",
          "target": "Improve from baseline",
          "actual": "No baseline or current data",
          "status": "unknown",
          "note": "Neither baseline nor current metric has surfaced. This may not be actively tracked yet. Flag for Amanda."
        }
      ]
    },
    {
      "department": "Marketing/IT",
      "numbers": [
        {
          "name": "Smart Move System Rollout",
          "target": "4 components rolled out",
          "actual": "Var Pricing QA, lead form target 3/30",
          "status": "green",
          "note": "Variable Pricing launch 3/30. Kickpoint integration this week. Lead form target 3/30. 3/4 components on track."
        },
        {
          "name": "Omni Channel Marketing",
          "target": "Mailers + billboards in 1+ market, ROAS identified",
          "actual": "Billboards launching 4/6, mailers in Austin",
          "status": "green",
          "note": "Billboards confirmed for April 6. Austin mailers done. Remaining cities need logo/URL swaps. ROAS mapping underway but not finalized."
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
          "note": "Migration paused pending Prosper/finance decision. If Prosper chosen, shifts to Sage Intacct. No path forward until Paul decides. Will be Red at EOQ unless decision happens soon."
        },
        {
          "name": "Time to Close Books",
          "target": "Numbers 3 days before margin meeting",
          "actual": "Joselle/Mike S tracking",
          "status": "green",
          "note": "No complaints about late numbers in recent syncs. Controller monthly rankings launching April 1. Assume on track unless flagged."
        }
      ]
    },
    {
      "department": "IT",
      "numbers": [
        {
          "name": "3 Critical Projects",
          "target": "Variable Pricing + Dashboard/KPIs + EMMA QoL",
          "actual": "Einstein Games deploying today, Var Pricing 3/30, QoL identified",
          "status": "green",
          "note": "Einstein Games code complete, in Fabian's code review, deployment today. Variable Pricing launch 3/30. QoL projects identified, sequenced after other deployments. All 3 on track for Green."
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
      "actual": null,
      "status": "unknown",
      "note": "Need latest survey from Anne/Rippling. Ask at Friday O3."
    }
  ],
  "cameronRocks": [
    {
      "number": 1,
      "name": "Fleet Safety - QT Management",
      "critical": true,
      "status": "supergreen",
      "assessment": "All training complete 6+ weeks early. Zero insurance claims in 6 weeks (vs. 4 last year). High-risk drivers down 82% (44→8). Expanding to fuel efficiency. Super Green trajectory locked.",
      "superGreen": "80+ avg, <10% at-risk, weekly dashboard, monthly BM meetings, accountability during sync ups",
      "green": "All trained by March 31, 75+ avg, <20% below 70",
      "lastUpdated": "2026-03-19"
    },
    {
      "number": 2,
      "name": "Smart Move System - Phase 1",
      "critical": true,
      "status": "green",
      "assessment": "Variable Pricing in QA, launching 3/30. Lead form target 3/30. Kickpoint integration this week. Packing supply price update needed. 3 of 4 components on track — tight but achievable.",
      "superGreen": "All 4 components: landing pages, pricing page, emails, scripts",
      "green": "3 out of 4 completed",
      "lastUpdated": "2026-03-19"
    },
    {
      "number": 3,
      "name": "Branch Visits",
      "critical": false,
      "status": "green",
      "assessment": "2 of 3 visits done (S. Austin + Philippines). Green locked. Need 1 more visit for Super Green — don't let it drift, quarter ends April 19.",
      "superGreen": "Visit 3, listen and learn lunches at all 3, 3 ride alongs",
      "green": "Visit 2, 3 ride alongs",
      "lastUpdated": "2026-03-19"
    },
    {
      "number": 4,
      "name": "Omni Channel Marketing",
      "critical": false,
      "status": "green",
      "assessment": "Billboards launching April 6 (payment confirmed). Austin mailers done, remaining cities need swaps. ROAS mapping underway but not finalized — that's the Super Green blocker.",
      "superGreen": "Mailers + billboards in 1+ market each, ROAS identified",
      "green": "1 of 2 in place, ROAS fuzzy OK if both in place",
      "lastUpdated": "2026-03-19"
    },
    {
      "number": 5,
      "name": "Content Creation - Value Transparency",
      "critical": false,
      "status": "green",
      "assessment": "CHOICES v2 built with full overhaul. Video 3 feedback given to Austin. Tracking Green. Need Austin's final cuts + hosting decision for Super Green.",
      "superGreen": "2 of 3 videos done (culture, value transparency, claims)",
      "green": "1 of 3 videos done",
      "lastUpdated": "2026-03-19"
    },
    {
      "number": 6,
      "name": "AI Education - Workshop Hosting",
      "critical": false,
      "status": "green",
      "assessment": "Evolved to full conference keynote. 4-act arc designed, 10 real use cases documented. Conference April 2-4 (2.5 weeks out). Need to build Act 1 + Act 3 slides and test Replit build. Tight timeline but on track for Green.",
      "superGreen": "5 workshops with BMs (2-hr live builds)",
      "green": "3 workshops with BMs",
      "lastUpdated": "2026-03-19"
    }
  ],
  "leadership": [
    {
      "name": "Amanda Ware",
      "title": "Dir. of CX",
      "goals": [
        { "name": "Smart Move System Rollout", "critical": true, "status": "green", "assessment": "3/4 components on track. Var Pricing launching 3/30. Lead form 3/30. Scripts still need drafting for Q2 training.", "superGreen": "All 4 components: landing pages, pricing page, emails, scripts drafted for Q2", "green": "3 out of 4 completed" },
        { "name": "Omni Channel Marketing", "critical": true, "status": "green", "assessment": "Billboards April 6. Mailers in Austin. Remaining city swaps and ROAS mapping are the open items.", "superGreen": "Mailers + billboards in 1+ market each, ROAS identified", "green": "1 of 2 in place, ROAS fuzzy OK if both in place" },
        { "name": "Claims/Sales QT Management", "critical": false, "status": "green", "assessment": "CET team active. Nhel coaching, Tet auditing. No red flags raised in huddles. Assume Green unless QT scores say otherwise.", "superGreen": "Sales, Claims, ROs average Super Green", "green": "Sales, Claims, ROs average Green" },
        { "name": "Concierge Research (MBA)", "critical": false, "status": "supergreen", "assessment": "Capstone reviewed and exceeded expectations. Scope expanded to acquisition option (Austin Home Transitions). Clear actionable next steps.", "superGreen": "A on project with clear actionable insights and next steps for Q2", "green": "B on project" },
        { "name": "Lead Triage (Low Priority)", "critical": false, "status": "green", "assessment": "AI phone agent research doc completed and shared. Caltrain demo pending. Process mocked up.", "superGreen": "Process mocked up + training ready for rollout", "green": "Process outlined + training materials started" }
      ]
    },
    {
      "name": "Brian Herzig",
      "title": "CTXH Regional Mgr",
      "goals": [
        { "name": "Fleet Safety (BBE)", "critical": true, "status": "supergreen", "assessment": "Training complete, accountability strong. CTXH results extraordinary. Weekly dashboard updates consistent.", "superGreen": "80+ avg, <10% at-risk, weekly dashboard, monthly BM meetings, accountability during sync ups + 1:1 if in red", "green": "All trained by March 31, 75+ avg, <20% below 70" },
        { "name": "Scrum Accountability Pt 3", "critical": true, "status": "red", "assessment": "Pushed to Brian's back burner. He's tagging Cameron with what he's gathered so far. Dependency on Cameron + Albert to help organize and accelerate. Still Red — Critical # needs momentum.", "superGreen": "Sync-up grading scorecard developed, cert developed, grade for all locations + OB training module built", "green": "Grading scorecard for SCRUM/Monday org, basic certification built, all managers/branches have a score" },
        { "name": "Branch Visits/Audits", "critical": false, "status": "green", "assessment": "Brian has been visiting branches for BBE accountability. Likely on track for Green (3 locations) but need specific count.", "superGreen": "5 locations, scores avg 4.5+, 1 audit/branch + follow-up, 3 circle-up audits, 3 huddle audits", "green": "3 locations, scores avg 4.0+, 1 audit/branch + follow-up, 3 circle-up audits, 3 huddle audits" },
        { "name": "Legends Book Pt 2", "critical": false, "status": "green", "assessment": "Online Legends app created (basic version hosted). Now working on print mock-up design. Won't be printed for conference (April 2-4) but hoping to have online version + mock-up ready to show at conference, print shortly after.", "superGreen": "Redesign completed, approved, printed and in branch hands by EOQ (Legends, Events, Dream Team, HQ Pics)", "green": "Template drafted with pics/org ready for print. Improved legends collection process in place." },
        { "name": "Swag/Training Day Calendar", "critical": false, "status": "red", "assessment": "Swag side done — ordered Driver's Ed sweatshirts, lightweight hoodies, branded tees, patched hats, Nike hats. All delivered. But no progress on training day calendar. Red for the calendar half.", "superGreen": "Dashboard app formatted, designed and live for rest of year company-wide, TD slides + stations linked", "green": "Dashboard app formatted, designed and live for next 6 months company-wide" }
      ]
    },
    {
      "name": "Mike Vandenbroader",
      "title": "DFWT Regional Mgr",
      "goals": [
        { "name": "Fleet Safety", "critical": true, "status": "supergreen", "assessment": "DFWT branches crushing it (Dallas 96, Tampa 100). Training complete. Weekly accountability strong.", "superGreen": "80+ avg, <10% at-risk, weekly dashboard, monthly BM meetings, accountability during sync ups", "green": "All trained by March 31, 75+ avg, <20% below 70" },
        { "name": "Mover Training Catalog/App", "critical": true, "status": "green", "assessment": "Digital handbook reviewed. Full blueprint posted with Gerald (2/25). Scaffold progressing. On track for Green.", "superGreen": "Functional MVP completed and reviewed by leadership team", "green": "Scaffold fully built with mock ups and planned KPI integration" },
        { "name": "Regional Growth (Tampa/Garland OMs)", "critical": false, "status": "green", "assessment": "Tampa OM: 4 finalists (Shane, Zachary, Stephen, Andra). Digital interviews Tue 3/25 (after 2:30 PM). Mike + Anne conducting, Cameron/Paul/Brandon listening in. Hiring 1 role (not 2 — can't afford 3 managers until Brandon's lease ends Feb 2027). Top projects: Zachary and Stephen. May fly to Tampa mid-week for in-person with final candidate(s). Dallas: ~30 applicants. External hires do 6 weeks as movers.", "superGreen": "OM hired and trained for Tampa AND Garland", "green": "OM hired and trained for Tampa" },
        { "name": "Branch Visits/Audits", "critical": false, "status": "green", "assessment": "Mike travels between DFWT branches regularly. Likely on track but need specific audit count.", "superGreen": "5 locations, branch scores avg 4.5+, audits + circle-up/huddle audits complete", "green": "3 locations, branch scores avg 4.0+, audits complete" },
        { "name": "Sell 3 Older Trucks", "critical": false, "status": "red", "assessment": "1 of 3 selling today. Other 2 not getting traction at current pricing — reducing price and reposting. Only 1 of 3 with less than half the quarter left. Trending Red.", "superGreen": "3 trucks sold", "green": "2 trucks sold" }
      ]
    },
    {
      "name": "Matisen Harper",
      "title": "Dir. of IT",
      "goals": [
        { "name": "Variable Pricing", "critical": true, "status": "green", "assessment": "QA underway. Launch target 3/30. Kickpoint integration this week. On track.", "superGreen": "Launch within timeline budget, one sprint push allowed", "green": "Launch within timeline budget, two sprint pushes allowed" },
        { "name": "Dashboard/KPIs in EMMA", "critical": true, "status": "green", "assessment": "Marketing dashboard MVP built (branch capacity, availability, crew capacity, rolling 7-day lookback). Branch KPIs, move maps, heat maps scaffolded — awaiting QA. Sharing marketing dashboard with Brittany (Kickpoint) next week. Einstein Games migration code complete. TUR/conversion/NPS gaps identified — need canonical data sources. Strong Super Green trajectory.", "superGreen": "Branch KPI Scorecards, Einstein Games migrated from Glide + download and chat feature", "green": "Branch KPI Scorecards, Einstein Games migrated from Glide + download" },
        { "name": "EMMA QoL Sprints", "critical": false, "status": "green", "assessment": "QoL projects identified. Held off while Variable Pricing and Dashboard KPIs ship first. Should be able to hit Green by EOQ once those deploy.", "superGreen": "2 QoL feature sprints including design improvements", "green": "1 QoL feature sprint" },
        { "name": "Mobile App", "critical": false, "status": "green", "assessment": "UX rework and E2E testing in progress per Playbook V2 review. Working through it.", "superGreen": "UX rework, E2E testing setup, mobile app in UAT", "green": "UX rework, working through E2E coverage" },
        { "name": "Mongo Schema Roadmap", "critical": false, "status": "green", "assessment": "Playbook V2 reviewed with Cameron. Next-gen architecture defined. Customer/Move schema key blocker. Claude issues paused process map work (3/20 huddle) — Matisen troubleshooting.", "superGreen": "Next-gen architecture defined with systems, system IDs, service calls + roadmap for next steps", "green": "Next-gen architecture defined with system IDs, still scoping service calls" }
      ]
    },
    {
      "name": "Anne Bosse",
      "title": "Dir. of Employee Experience",
      "goals": [
        { "name": "ClearCo Audits / Hiring Funnel", "critical": true, "status": "green", "assessment": "ClearCo recertification process underway. Hiring funnel visualization (cost per hire, time to fill) is the stretch for Super Green. Ask at Friday O3.", "superGreen": "Green + hiring funnel visualized (cost per hire, time to fill, stage %) + all hired candidates have completed scorecards", "green": "100% of managers recertified on ClearCo recruiting basics" },
        { "name": "Hiring Targets (105% budget)", "critical": true, "status": "green", "assessment": "No periods below budget flagged in recent syncs. Anne actively managing hiring pipeline. Indeed V2 draft ready.", "superGreen": "≤1 period below 105% hiring budget", "green": "≤1 period below 100% hiring budget" },
        { "name": "Onboarding Video Development", "critical": false, "status": "red", "assessment": "5 video priorities (EMC history, values, comp/benefits, perf mgmt, QG metrics). Austin L is producing content but no completed onboarding videos confirmed. Needs 3/5 for Green.", "superGreen": "4 out of 5 video priorities completed", "green": "3 out of 5 video priorities completed" },
        { "name": "Culture Add Hiring Beta", "critical": false, "status": "red", "assessment": "Beta requires new process in 3 branches + at least 1 new hire. No evidence of beta launch. 4 weeks left.", "superGreen": "Green + 1 new hire per branch by EOQ", "green": "100% managers recertified + new process + at least 1 new hire with new process" },
        { "name": "Annual Comp Review", "critical": false, "status": "green", "assessment": "Tied to Paul's comp review. Promotion metrics discussion happening. Level 1 sales comp under active review (Ralph situation accelerated this).", "superGreen": "Green + promo process video recorded and part of onboarding", "green": "Promotion metrics identified and communicated to movers" }
      ]
    },
    {
      "name": "Nhel",
      "title": "Sales Team Lead",
      "goals": [
        { "name": "Sales Coaching - Conversions", "critical": true, "status": "green", "assessment": "Call quality audits underway. Nhel actively coaching. Reviewing individual bookings. Need company-wide accuracy number to confirm.", "superGreen": "Above 62.5% within 20% variance companywide", "green": "60% within 20% variance companywide" },
        { "name": "Sales Class Level 1", "critical": true, "status": "green", "assessment": "Training happening but Level 1 comp structure in flux after Ralph retention risk. Amanda + Nhel developing options. May not hit 40% conversion target.", "superGreen": "New Level 1 CERs/Managers trained meeting sales target with 40% conversion $", "green": "New Level 1 CERs/Managers with 40% conversion $" },
        { "name": "Manager Accountability", "critical": false, "status": "green", "assessment": "Nhel reporting to RMs. BM check-in process being established. On track for Green.", "superGreen": "Reporting progress to RMs weekly + established regular BM check-ins", "green": "Reporting progress to RMs weekly + plan for BM check-in process" },
        { "name": "Training Tet", "critical": false, "status": "green", "assessment": "Tet doing call quality audits and sales enablement work. Independence growing. On track for Green (can conduct training for new hires independently).", "superGreen": "Tet can independently conduct training for new hires AND FMs + 1 call quality audit for everyone", "green": "Tet can independently conduct training for new hires AND FMs + audits for half the team" }
      ]
    },
    {
      "name": "Carly",
      "title": "Claims Manager (CET)",
      "goals": [
        { "name": "Magic Moments Rollout", "critical": true, "status": "supergreen", "assessment": "Crushing it. Process approved, rolled out to team. Members actively surfacing Magic Moments and posting to Slack. On track for target count per manager. Super Green.", "superGreen": "1 MM for manager + 5 standard MMs set", "green": "85% MM for managers + 3 standard MMs set" },
        { "name": "Damage Accountability & Coaching", "critical": true, "status": "green", "assessment": "Team-based damage accountability per job is live (3/20 huddle). Individual accountability blocked by Monday.com limitations — Phase 3 TBD. Team approach encourages ownership. Current system is an improvement over company-wide scoring.", "superGreen": "System in place and rolled out to all branches", "green": "System in place and beta testing" },
        { "name": "Hire & Train Maternity Replacement", "critical": false, "status": "green", "assessment": "Found a couple great options for additional CET hire. Tracking Green — need to get hired and trained before Carly's maternity leave.", "superGreen": "New hire fully trained and ready", "green": "New hire, semi trained" },
        { "name": "Claims Time to Close", "critical": false, "status": "supergreen", "assessment": "Tracking Super Green on updated metrics. Carly posts weekly metrics to Monday notifications — use those to stay current.", "superGreen": "Average of 5 business days or less", "green": "Average of 6-8 business days" },
        { "name": "Take Over Remote Operators", "critical": false, "status": "unknown", "assessment": "No updates yet. Ask Amanda about RO transition in next sync.", "superGreen": "ROs fully taken over", "green": "RO responsibilities semi taken over" }
      ]
    },
    {
      "name": "Paul Morin",
      "title": "CFO/COO (Co-Owner)",
      "goals": [
        { "name": "N. Austin Office / Leander Lease", "critical": true, "status": "green", "assessment": "Leander lease completed and set. N. Austin office construction moving along — slated for April or early May. Waiting on city of Austin comments (hopefully resolved this week or early next). Green trajectory.", "superGreen": "Construction a week or less behind schedule", "green": "Construction less than two weeks behind schedule. New lease signed for Leander." },
        { "name": "Branch Visits", "critical": false, "status": "red", "assessment": "Only 1 visit done (Philippines). Needs 2 for Green. Less than half the quarter left. Red.", "superGreen": "Visit 3, listen and learn lunch at all 3 w/ managers, 3 onsite eval ride alongs", "green": "Visit 2, do 2 ride alongs" },
        { "name": "Acquisition Case Study vs. Houston Branch", "critical": false, "status": "red", "assessment": "No case studies started. Red.", "superGreen": "Complete both by end of March", "green": "Complete both" },
        { "name": "Annual Manager Comp Review", "critical": true, "status": "red", "assessment": "Not started yet. Needs to get underway — manager comp review needs to be done by EOQ. Unlikely to get to tying mover promotions to performance this quarter. Red.", "superGreen": "Messaging complete and out to team to start in action for next quarter", "green": "Hiring/pay docs updated, individual scorecards created, performance targets set" },
        { "name": "Evaluate CFO Needs/Budget", "critical": false, "status": "green", "assessment": "Multiple conversations in flight. Several meetings scheduled next week. Targeting fractional CFO identified by end of next week or early the following week. Green." }
      ]
    }
  ]
};
