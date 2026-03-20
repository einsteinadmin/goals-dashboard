const DASHBOARD_DATA = {
  "meta": {
    "quarter": "Q1 2026",
    "quarterStart": "2026-02-01",
    "quarterEnd": "2026-04-19",
    "lastRefreshed": "2026-03-20T13:30:00-05:00",
    "refreshedBy": "Albert (digest — Friday huddle + Tampa OM meeting)"
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
        { "name": "Smart Move System Rollout", "critical": true, "status": "green", "assessment": "3/4 components on track. Var Pricing launching 3/30. Lead form 3/30. Scripts still need drafting for Q2 training." },
        { "name": "Omni Channel Marketing", "critical": true, "status": "green", "assessment": "Billboards April 6. Mailers in Austin. Remaining city swaps and ROAS mapping are the open items." },
        { "name": "Claims/Sales QT Management", "critical": false, "status": "green", "assessment": "CET team active. Nhel coaching, Tet auditing. No red flags raised in huddles. Assume Green unless QT scores say otherwise." },
        { "name": "Concierge Research (MBA)", "critical": false, "status": "supergreen", "assessment": "Capstone reviewed and exceeded expectations. Scope expanded to acquisition option (Austin Home Transitions). Clear actionable next steps." },
        { "name": "Lead Triage (Low Priority)", "critical": false, "status": "green", "assessment": "AI phone agent research doc completed and shared. Caltrain demo pending. Process mocked up." }
      ]
    },
    {
      "name": "Brian Herzig",
      "title": "CTXH Regional Mgr",
      "goals": [
        { "name": "Fleet Safety (BBE)", "critical": true, "status": "supergreen", "assessment": "Training complete, accountability strong. CTXH results extraordinary. Weekly dashboard updates consistent." },
        { "name": "Scrum Accountability Pt 3", "critical": true, "status": "red", "assessment": "Pushed to Brian's back burner. He's tagging Cameron with what he's gathered so far. Dependency on Cameron + Albert to help organize and accelerate. Still Red — Critical # needs momentum." },
        { "name": "Branch Visits/Audits", "critical": false, "status": "green", "assessment": "Brian has been visiting branches for BBE accountability. Likely on track for Green (3 locations) but need specific count." },
        { "name": "Legends Book Pt 2", "critical": false, "status": "green", "assessment": "Online Legends app created (basic version hosted). Now working on print mock-up design. Won't be printed for conference (April 2-4) but hoping to have online version + mock-up ready to show at conference, print shortly after." },
        { "name": "Swag/Training Day Calendar", "critical": false, "status": "red", "assessment": "Swag side done — ordered Driver's Ed sweatshirts, lightweight hoodies, branded tees, patched hats, Nike hats. All delivered. But no progress on training day calendar. Red for the calendar half." }
      ]
    },
    {
      "name": "Mike Vandenbroader",
      "title": "DFWT Regional Mgr",
      "goals": [
        { "name": "Fleet Safety", "critical": true, "status": "supergreen", "assessment": "DFWT branches crushing it (Dallas 96, Tampa 100). Training complete. Weekly accountability strong." },
        { "name": "Mover Training Catalog/App", "critical": true, "status": "green", "assessment": "Digital handbook reviewed. Full blueprint posted with Gerald (2/25). Scaffold progressing. On track for Green." },
        { "name": "Regional Growth (Tampa/Garland OMs)", "critical": false, "status": "green", "assessment": "Tampa OM: 4 finalists (Shane + 3 external). Digital interviews next week (Tue 3/25). Projects graded, blind evaluation complete. Hiring for 1 role (was 2). Dallas: ~30 applicants. New policy: external hires do 6 weeks as movers." },
        { "name": "Branch Visits/Audits", "critical": false, "status": "green", "assessment": "Mike travels between DFWT branches regularly. Likely on track but need specific audit count." },
        { "name": "Sell 3 Older Trucks", "critical": false, "status": "red", "assessment": "1 of 3 selling today. Other 2 not getting traction at current pricing — reducing price and reposting. Only 1 of 3 with less than half the quarter left. Trending Red." }
      ]
    },
    {
      "name": "Matisen Harper",
      "title": "Dir. of IT",
      "goals": [
        { "name": "Variable Pricing", "critical": true, "status": "green", "assessment": "QA underway. Launch target 3/30. Kickpoint integration this week. On track." },
        { "name": "Dashboard/KPIs in EMMA", "critical": true, "status": "green", "assessment": "Einstein Games migration from Glide: all code written by Matisen, passed to Fabian for final code review after some QA failures. Hoping for deployment today (3/20). On pace for Green or Super Green." },
        { "name": "EMMA QoL Sprints", "critical": false, "status": "green", "assessment": "QoL projects identified. Held off while Variable Pricing and Dashboard KPIs ship first. Should be able to hit Green by EOQ once those deploy." },
        { "name": "Mobile App", "critical": false, "status": "green", "assessment": "UX rework and E2E testing in progress per Playbook V2 review. Working through it." },
        { "name": "Mongo Schema Roadmap", "critical": false, "status": "green", "assessment": "Playbook V2 reviewed with Cameron. Next-gen architecture defined. Customer/Move schema key blocker. Claude issues paused process map work (3/20 huddle) — Matisen troubleshooting." }
      ]
    },
    {
      "name": "Anne Bosse",
      "title": "Dir. of Employee Experience",
      "goals": [
        { "name": "ClearCo Audits / Hiring Funnel", "critical": true, "status": "green", "assessment": "ClearCo recertification process underway. Hiring funnel visualization (cost per hire, time to fill) is the stretch for Super Green. Ask at Friday O3." },
        { "name": "Hiring Targets (105% budget)", "critical": true, "status": "green", "assessment": "No periods below budget flagged in recent syncs. Anne actively managing hiring pipeline. Indeed V2 draft ready." },
        { "name": "Onboarding Video Development", "critical": false, "status": "red", "assessment": "5 video priorities (EMC history, values, comp/benefits, perf mgmt, QG metrics). Austin L is producing content but no completed onboarding videos confirmed. Needs 3/5 for Green." },
        { "name": "Culture Add Hiring Beta", "critical": false, "status": "red", "assessment": "Beta requires new process in 3 branches + at least 1 new hire. No evidence of beta launch. 4 weeks left." },
        { "name": "Annual Comp Review", "critical": false, "status": "green", "assessment": "Tied to Paul's comp review. Promotion metrics discussion happening. Level 1 sales comp under active review (Ralph situation accelerated this)." }
      ]
    },
    {
      "name": "Nhel",
      "title": "Sales Team Lead",
      "goals": [
        { "name": "Sales Coaching - Conversions", "critical": false, "status": "green", "assessment": "Call quality audits underway. Nhel actively coaching. Reviewing individual bookings. Need company-wide accuracy number to confirm." },
        { "name": "Sales Class Level 1", "critical": false, "status": "green", "assessment": "Training happening but Level 1 comp structure in flux after Ralph retention risk. Amanda + Nhel developing options. May not hit 40% conversion target." },
        { "name": "Manager Accountability", "critical": false, "status": "green", "assessment": "Nhel reporting to RMs. BM check-in process being established. On track for Green." },
        { "name": "Training Tet", "critical": false, "status": "green", "assessment": "Tet doing call quality audits and sales enablement work. Independence growing. On track for Green (can conduct training for new hires independently)." }
      ]
    },
    {
      "name": "Carly",
      "title": "Claims Manager (CET)",
      "goals": [
        { "name": "Magic Moments Rollout", "critical": true, "status": "supergreen", "assessment": "Crushing it. Process approved, rolled out to team. Members actively surfacing Magic Moments and posting to Slack. On track for target count per manager. Super Green." },
        { "name": "Damage Accountability & Coaching", "critical": true, "status": "green", "assessment": "Team-based damage accountability per job is live (3/20 huddle). Individual accountability blocked by Monday.com limitations — Phase 3 TBD. Team approach encourages ownership. Current system is an improvement over company-wide scoring." },
        { "name": "Hire & Train Maternity Replacement", "critical": false, "status": "green", "assessment": "Found a couple great options for additional CET hire. Tracking Green — need to get hired and trained before Carly's maternity leave." },
        { "name": "Claims Time to Close", "critical": false, "status": "supergreen", "assessment": "Tracking Super Green on updated metrics. Carly posts weekly metrics to Monday notifications — use those to stay current." },
        { "name": "Take Over Remote Operators", "critical": false, "status": "unknown", "assessment": "No updates yet. Ask Amanda about RO transition in next sync." }
      ]
    },
    {
      "name": "Paul Morin",
      "title": "CFO/COO (Co-Owner)",
      "goals": [
        { "name": "N. Austin Office / Leander Lease", "critical": true, "status": "green", "assessment": "Leander lease completed and set. N. Austin office construction moving along — slated for April or early May. Waiting on city of Austin comments (hopefully resolved this week or early next). Green trajectory." },
        { "name": "Branch Visits", "critical": false, "status": "red", "assessment": "Only 1 visit done (Philippines). Needs 2 for Green. Less than half the quarter left. Red." },
        { "name": "Acquisition Case Study vs. Houston Branch", "critical": false, "status": "red", "assessment": "No case studies started. Red." },
        { "name": "Annual Manager Comp Review", "critical": true, "status": "red", "assessment": "Not started yet. Needs to get underway — manager comp review needs to be done by EOQ. Unlikely to get to tying mover promotions to performance this quarter. Red." },
        { "name": "Evaluate CFO Needs/Budget", "critical": false, "status": "green", "assessment": "Multiple conversations in flight. Several meetings scheduled next week. Targeting fractional CFO identified by end of next week or early the following week. Green." }
      ]
    }
  ]
};
