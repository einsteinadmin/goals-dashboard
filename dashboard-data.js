const DASHBOARD_DATA = {
  "meta": {
    "quarter": "Q2 2026",
    "quarterStart": "2026-05-01",
    "quarterEnd": "2026-07-31",
    "themeDeadline": "2026-07-19",
    "themeDeadlineLabel": "Theme Deadline: Jul 19",
    "lastRefreshed": "2026-05-07T10:45:00-05:00",
    "refreshedBy": "Albert (Q2 rebuild from Cascading Goals + Q2 Roundtable Rocks tab)",
    "archive": {
      "quarter": "Q1 2026",
      "file": "dashboard-data-q1-2026.json",
      "note": "Q1 final state with self-grades, AAR notes, and divergence summary preserved for reference."
    },
    "pendingFinalization": [
      "Nhel — pending CX Q2 theme decision (rock #1)",
      "Tet — sales class + estimate accuracy rocks pending CX theme alignment",
      "Carly — only Maternity Transition rock confirmed (other 3 moved to Alternates per 4/14 — she's on leave 80% of Q2)",
      "Stephanie/Jaci/Maria (Claims team) — rock topics named, Super Green/Green/Red criteria not filled",
      "ROs (June/Nessa/Donna) — rock topics named, criteria not filled"
    ],
    "criticalNumbersTBD": "Cameron's Q2 Critical # designations not yet locked — likely Rock #1 (VP Rollout) + Rock #3 (Dojo/COS) but pending confirmation."
  },
  "companyCriticalNumbers": [
    {
      "department": "Movers/Managers",
      "numbers": [
        {
          "name": "Fleet Safety (BBE Pt 2)",
          "target": "<10% at-risk SG / <15% G, 95% retraining SG / 90% G",
          "actual": "Q1 closed at 19.8% at-risk (Green threshold). Q2 baseline reset.",
          "status": "green",
          "note": "Mike's Q2 Critical Rock. Reweighting Samsara + retraining + Understanding Samsara + Common Scenario modules. Q1 BBE wins to make stick. Branch-level miles-driven normalization in flight (Gerald query open on SCB pulse 11895901210)."
        },
        {
          "name": "Hiring + Personnel Budgets + People Analyzer",
          "target": "100%+ staffing all branches, eNPS cleared by end of May (SG) or June (G)",
          "actual": "Anne running HR Generalist hire (4-5 candidates this week). Brian + Mike Critical Rocks paired with Anne pipeline.",
          "status": "green",
          "note": "Brian + Mike both have this as Critical #. Anne R1 (HR Generalist hire) is the unblocker — bandwidth for Anne to clean eNPS + 100-point system + culture interview rollout."
        }
      ]
    },
    {
      "department": "CET Sales",
      "numbers": [
        {
          "name": "Estimate Accuracy",
          "target": "54%+ Green / 56%+ Super Green (within 20% variance)",
          "actual": "Q2 baseline reset post VP rollout. Conversion baseline still under investigation.",
          "status": "green",
          "note": "Amanda Rock 1 (AI Call Grading) + Tet Rock 5 (focused estimate accuracy coaching on bottom 4 performers). Aligned with Nhel R3 sales coaching (30+ documented incidents SG / 20+ G)."
        },
        {
          "name": "$ Conversions",
          "target": "40%+ Green / 42%+ Super Green",
          "actual": "Q1 baseline broken — VP rollout pushed contact-capture earlier in funnel. Apples-to-apples investigation owned by Matisen.",
          "status": "unknown",
          "note": "Need apples-to-apples baseline before scoring. Matisen flagged possible filtering/attribution bug on top of denominator change. Pulse 11712899643. Performance matrix updates pending."
        }
      ]
    },
    {
      "department": "CET Claims",
      "numbers": [
        {
          "name": "Magic Moments / Damage Accountability",
          "target": "Phase 2 rollout deferred — Carly maternity 80% Q2",
          "actual": "Maintenance only during Carly's leave. JC + Stephanie hold the line.",
          "status": "unknown",
          "note": "Carly's Magic Moments + Damage Accountability rocks moved to Alternates per 4/14. Amanda Rock 6 (Claims Oversight) covers maintenance. Phase 2 rollout pushed to Q3."
        },
        {
          "name": "Claims Time to Close",
          "target": "5 days SG / 6-8 days Green",
          "actual": "Q1 closed Super Green: Stephanie 3.6d, Jaci 2.5d, team avg 4.7d.",
          "status": "supergreen",
          "note": "Carry-over momentum. Source: CET Quarterly Tracker Sheet 1b_GYrrot60fZivVTjLjKXoE7-ru0zGTN2wLEuEjqnuY."
        }
      ]
    },
    {
      "department": "Marketing/IT",
      "numbers": [
        {
          "name": "Smart Move System Phase 2 / Website Redesign",
          "target": "New site live, copy refreshed for Smart Move + VP, KP design system implemented",
          "actual": "Cameron Rock 4 (Cameron owns since Amanda's plate is full). KP design system proposal pending review.",
          "status": "green",
          "note": "Phase 1 (VP) shipped Q1. Q2 = freshen the site to sell Smart Move + VP. Kickpoint dependency on design system proposal."
        },
        {
          "name": "Marketing ROAS Measurement",
          "target": "ROAS dashboard live by channel, budget reallocation decisions",
          "actual": "Kickpoint Rock 1 — currently DEFER (Hold for Rob).",
          "status": "unknown",
          "note": "Rob Lynch input dependency. Recommend move to Amanda (per sheet note). Rob's 2027 roadmap puts ROAS as priority — Q2 may stay scoping-only."
        }
      ]
    },
    {
      "department": "Accounting/Finance",
      "numbers": [
        {
          "name": "Prosper VCFO Integration",
          "target": "Book close <5 days SG / <7 days G + flash reports + branch P&Ls",
          "actual": "Prosper kickoff 4/10. Joselle + Mike S 30-day notice. Replacing 54% historical completion rate.",
          "status": "green",
          "note": "Ben Young (Prosper VCFO) Critical Rock #1. Includes Power-of-1%, monthly board package, PE readiness."
        },
        {
          "name": "Capital Plan / Growth Financing",
          "target": "3-5 year capital plan to 150 trucks, debt capacity, reinvestment model",
          "actual": "Hold-for-Rob. Prosper-owned delivery. Paul oversees.",
          "status": "green",
          "note": "Ben Young Critical Rock #2. Rob Lynch framework dependency. PE readiness included."
        }
      ]
    },
    {
      "department": "IT / AI Wedge",
      "numbers": [
        {
          "name": "AI Wedge Builds (Call Grading + Claims RAG + Hiring Funnel)",
          "target": "First build kicked off by 5/30 (SG) or EOQ (G), 3 MVPs scoped",
          "actual": "NEW 4/30. Audit validates 3 pre-selected builds + scopes MVPs + surfaces 4-6 additional wedges.",
          "status": "green",
          "note": "Matisen Critical # Rock 1 (audit) + Rock 3 (Build #1 = Call Grading + Claims RAG, paired with Nhel/Carly). Cameron Rock 5 oversees + audits 7+ supporting QGs go Green."
        },
        {
          "name": "EMMA v3 → v4 Unification + Mobile App",
          "target": "Automailer/Mobile/Cron migrated to v4, mobile app launched within timeline budget",
          "actual": "Fabian Rock 1 + Rock 2. LiftUp Rock 1 (Mobile build + QA). Tight timeline.",
          "status": "green",
          "note": "Required for Database + EMMA upgrades. Mobile app launch identified by 5/2."
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
      "note": "Q2 budget target 81.08% (financial sheet). Need EMMA data. #1 gap an EMMA API endpoint would fill."
    },
    {
      "name": "Conversion Rate $",
      "target": "40%",
      "actual": null,
      "status": "unknown",
      "note": "Baseline still broken from VP rollout — Matisen owns apples-to-apples investigation before scoring."
    },
    {
      "name": "eNPS",
      "target": "45+",
      "actual": null,
      "status": "unknown",
      "note": "Q1 mover survey closed mid-April. Q2 results pending. Carry-target."
    }
  ],
  "cameronRocks": [
    {
      "number": 1,
      "name": "Variable Pricing Full Rollout + Weekly Review Cadence",
      "critical": false,
      "status": "green",
      "assessment": "Carry from Q1. Phase 1 LIVE. Q2 = full day-of-week VP live, no regression, weekly conversion/TUR review cadence + baseline reset, VP 2.0 scoped. CEO audit flagged this as 'first to drop' — consider folding to Amanda or Website Redesign rock.",
      "superGreen": "Full day-of-week VP live + weekly review cadence running",
      "green": "Day-of-week VP live + cadence in place",
      "lastUpdated": "2026-05-07"
    },
    {
      "number": 2,
      "name": "Branch Visits + O3s",
      "critical": false,
      "status": "green",
      "assessment": "Carry from Q1. Cameron's time only — no external dependencies. Quarter just kicking off.",
      "superGreen": "5 branch visits + 5 listen-and-learns + 5 O3s with all directs",
      "green": "3 branch visits + 3 listen-and-learns + quarterly O3s",
      "lastUpdated": "2026-05-07"
    },
    {
      "number": 3,
      "name": "Build Einstein Dojo + Scale AI COS to All Roundtable",
      "critical": true,
      "status": "green",
      "assessment": "Cameron's personal Q2 thesis. 4 of 6 COS active (Albert, Gerald-Mike, Matisen's, Clark-Paul). Critical # = 6 active COS instances with weekly usage. Three legs: (1) MCP config generator HTML form, (2) synthesis pipelines as scheduled Claude Code Routines (shipped 4/14), (3) Dojo = renamed skills repo + /dojo recommender skill.",
      "superGreen": "50+ Dojo skills, 2+ leaders contributing skills unprompted, 2+ nightly synthesis pipelines, AI-fluency interview question, weekly huddle AI demo 4+ weeks",
      "green": "Dojo with 40+ skills, /dojo recommender + MCP config generator built, all 6 Roundtable members have active COS, 1 nightly synthesis pipeline, skill PR template in repo",
      "lastUpdated": "2026-05-07"
    },
    {
      "number": 4,
      "name": "Oversee Website Redesign — Smart Move System Part 2",
      "critical": false,
      "status": "green",
      "assessment": "Cameron owns since Amanda's plate is full. Copy already written — Q2 about freshening the site to sell Smart Move System + VP better. KP design system proposal pending.",
      "superGreen": "New site live, copy updated for Smart Move System, KP design system implemented, mobile-optimized",
      "green": "Site redesign scoped, KP design system decided, copy refreshed for Smart Move narrative",
      "lastUpdated": "2026-05-07"
    },
    {
      "number": 5,
      "name": "AI Wedge Audit and QG Support",
      "critical": true,
      "status": "green",
      "assessment": "Co-owned with Matisen R1. Cameron oversight; Matisen execution. Audit complete by 5/15 (SG) or 5/30 (G). 7+ supporting QG dependencies go Green by EOQ for SG, 5+ for G.",
      "superGreen": "Audit complete by 5/15; all 10 supporting QG dependencies mapped; 7+ supporting QGs Green by EOQ; AI Wedge requirements documented + approved",
      "green": "Audit complete by 5/30; supporting QG dependencies mapped; 5+ supporting QGs Green by EOQ; requirements drafted",
      "lastUpdated": "2026-05-07"
    },
    {
      "number": 6,
      "name": "Ideal Team Player Reading",
      "critical": false,
      "status": "green",
      "assessment": "Bonus rock. Read by 5/30 (G) or EOQ + 1-page reflection on personal Humility/Hunger/Smarts gaps (SG).",
      "superGreen": "Read by EOQ + 1-page reflection on personal Humility/Hunger/Smarts gaps",
      "green": "Read by 5/30",
      "lastUpdated": "2026-05-07"
    }
  ],
  "leadership": [
    {
      "name": "Paul Morin",
      "title": "CFO/COO (Co-Owner)",
      "goals": [
        {
          "name": "Annual Mover Comp Review",
          "critical": true,
          "status": "green",
          "assessment": "Red Q1 carry — renamed 4/14. Manager comp wrapping up, pivot to mover comp structure. Anne co-owns. V2 Compensation Philosophy in flight (Paul completed pressure-test 5/3 via Clark, Cameron+Paul collab meeting today 2pm).",
          "superGreen": "Pay bands updated, promotions tied to performance, promo process video, communicated",
          "green": "Updated pay finalized, pay docs updated, scorecards created, targets set + communicated"
        },
        {
          "name": "N. Austin Office Move-In",
          "critical": true,
          "status": "green",
          "assessment": "Permit approved 4/10/2026. Construction underway. Targeting June 15 move-in (SG) or end of June (G).",
          "superGreen": "Moved in by June 15th",
          "green": "Moved in by end of June"
        },
        {
          "name": "Branch Visits",
          "critical": false,
          "status": "green",
          "assessment": "Red Q1 carry. Q2 quarter just starting — Paul's time only.",
          "superGreen": "3 visits + 3 ride-alongs + listen-and-learn lunches",
          "green": "2 visits + 2 ride-alongs"
        },
        {
          "name": "Geographic Expansion Strategy + 5-7 Acquisition Evaluations",
          "critical": false,
          "status": "green",
          "assessment": "4/14 Cameron + Rob: pivot from hypothetical case study to active eval. Albert to help draft research questions + source opportunities. May need brokers.",
          "superGreen": "7 acquisition opportunities evaluated, clear deepen vs. widen stance documented",
          "green": "5 opportunities evaluated, deepen vs. widen stance defined, Houston organic vs acquisition case study complete"
        },
        {
          "name": "Ideal Team Player Reading",
          "critical": false,
          "status": "green",
          "assessment": "Read by 5/30 (G) or EOQ + reflection (SG).",
          "superGreen": "Read by 5/30",
          "green": "Read by EOQ + 1-page reflection on personal H/H/S gaps"
        },
        {
          "name": "Easy Wins on Money Collection (Bonus)",
          "critical": false,
          "status": "green",
          "assessment": "Bonus rock. Monthly branch rankings, Live Swipe % improvements, automated invoice-late pulse.",
          "superGreen": "Monthly branch rankings + LiveSwipe % rankings + coaching process documented + manual vs swipe cost quantified + automated pulse for late invoice emails",
          "green": "Less than all 3 green improvements completed"
        }
      ]
    },
    {
      "name": "Ben Young",
      "title": "Prosper VCFO (NEW)",
      "goals": [
        {
          "name": "Prosper VCFO Integration",
          "critical": true,
          "status": "green",
          "assessment": "Replaces Joselle/Mike S. Addresses 54% historical completion rate. Kickoff 4/10.",
          "superGreen": "Prosper fully onboarded, book close under 5 days, flash reports, branch P&Ls, Power-of-1%, monthly board package",
          "green": "Prosper onboarded, book close under 7 days, first flash report cycle"
        },
        {
          "name": "Capital Plan / Growth Financing",
          "critical": true,
          "status": "green",
          "assessment": "Hold-for-Rob. Prosper-owned delivery — Paul oversees. Rob Lynch framework dependency.",
          "superGreen": "3-5 year capital plan (path to 150 trucks), debt capacity, reinvestment model, PE readiness",
          "green": "Capital plan framework drafted with Rob Lynch input"
        },
        {
          "name": "Geographic Expansion — Acquisition Models + LOI",
          "critical": false,
          "status": "green",
          "assessment": "4/14 Cameron + Rob: aligned with Paul R4. Pivot from hypothetical to active eval.",
          "superGreen": "7 opportunities evaluated in Houston/SA, 2 full financial models built, LOI drafted on 1+, deepen vs widen stance",
          "green": "5 opportunities evaluated, stance defined, Houston case study complete"
        },
        {
          "name": "Tying Financing and Marketing Together (Bonus)",
          "critical": false,
          "status": "green",
          "assessment": "Bonus rock — definition pending."
        }
      ]
    },
    {
      "name": "Brian Herzig",
      "title": "CTXH Regional Mgr",
      "goals": [
        {
          "name": "Einstein Games Season 3 Launch (CTXH)",
          "critical": true,
          "status": "green",
          "assessment": "Depends on Matisen EMMA migration. Season 3 launches 5/23, 8-week structure, national champ 7/11. Brief deployed with Rewards & Recognition section.",
          "superGreen": "Company-wide score 8+, all SCTX branches at 7+",
          "green": "Company-wide score 7+, all SCTX branches at 7+"
        },
        {
          "name": "Hiring + Personnel Budgets + People Analyzer",
          "critical": true,
          "status": "green",
          "assessment": "Recurring regional. Pairs with Anne hiring pipeline. 4/14 Cameron: scope includes supporting Anne's culture interview + extended trial + 100-point system rollout at CTXH.",
          "superGreen": "All CTXH branches avg 100%+ staffing, People Analyzer reviewed, C players cleared/action plans, eNPS cleared by end of May",
          "green": "All CTXH 100%+ staffing, PA reviewed, C plans, eNPS cleared by end of June"
        },
        {
          "name": "Scrum Accountability Pt 4 — Manager Certification",
          "critical": false,
          "status": "green",
          "assessment": "Scorecard app built Q1.",
          "superGreen": "All managers certified, grading cadence live, performance tie-in, OB training module",
          "green": "All managers scored, grading cadence established, cert framework built"
        },
        {
          "name": "Branch Visits/Audits",
          "critical": false,
          "status": "green",
          "assessment": "Carry from Q1.",
          "superGreen": "5 locations + scorecard audits + 3 circle-up + 3 huddle audits + follow-ups",
          "green": "3 locations + scorecard audits + 3 circle-up + 3 huddle audits"
        },
        {
          "name": "Training Day Overhaul + Calendar Organization",
          "critical": false,
          "status": "green",
          "assessment": "Supports Q2 theme. Formalized TD flow with stations, quizzes, scorecards + Games integration.",
          "superGreen": "Formalized TD flow with updated stations/quizzes/scorecards + TD Calendar live + Games integration",
          "green": "TD flow documented + first 3 overhauled stations live"
        },
        {
          "name": "Ideal Team Player Reading (Bonus)",
          "critical": false,
          "status": "green",
          "superGreen": "Read by EOQ + 1-page reflection on personal H/H/S gaps",
          "green": "Read by 5/30"
        }
      ]
    },
    {
      "name": "Mike Vandenbroader",
      "title": "DFWT Regional Mgr",
      "goals": [
        {
          "name": "Personnel Mgmt — Manager Hiring + New Manager Development (Garland + Tampa)",
          "critical": true,
          "status": "green",
          "assessment": "Garland BM transition (Jack/Landon/Terrel). Tampa OM (Stephen) onboarding. 4/14 Cameron: scope includes supporting Anne's culture interview + extended trial + 100-point system rollout at DFWT.",
          "superGreen": "All DFWT 100%+ staffing, all 4 new-in-role managers at B+ rating by EOQ, monthly PA, 100% C-player action plans or replaced",
          "green": "DFWT 95%+ staffing, all 4 new managers at B rating by EOQ, monthly PA + check-ins documented, C-player action plans drafted"
        },
        {
          "name": "Einstein Games Season 4 Launch (DFWT)",
          "critical": true,
          "status": "green",
          "assessment": "Paired with Brian.",
          "superGreen": "DFWT branches at 8+, all DFWT above 7",
          "green": "DFWT at 7+, all DFWT above 6"
        },
        {
          "name": "Fleet Safety Pt 2 — Resolidifying Habits, Training, Reweighting, Sample Sizes",
          "critical": false,
          "status": "green",
          "assessment": "4/14 Cameron: promoted from note to formal rock. Mike's focus stays on making Q1 BBE stick, not new programs. Brian paired. Samsara consolidation EOQ.",
          "superGreen": "95% retraining completion, Samsara reweighted with validated samples, at-risk <10%, Understanding Samsara + Common Scenario modules in place",
          "green": "90% retraining, Samsara reweighted with validated samples, at-risk <15%, Common Scenario module in place"
        },
        {
          "name": "Mover Training Handbook / Training Video Library",
          "critical": false,
          "status": "green",
          "assessment": "May split app build to Matisen/Fabian. Open question: how to incorporate training videos without building Mover Super App.",
          "superGreen": "Full video library + digital training handbook app in beta at 3 branches + manager dashboard with completion velocity + Mover Super App structure with placeholder data",
          "green": "Full video library + digital training handbook app in beta at 1 branch"
        },
        {
          "name": "Ideal Team Player Reading",
          "critical": false,
          "status": "green",
          "superGreen": "Read by EOQ + 1-page reflection on personal H/H/S gaps",
          "green": "Read by 5/30"
        },
        {
          "name": "Fleet Damage Tracking App — Beta (Bonus)",
          "critical": false,
          "status": "green",
          "assessment": "Mike's Replit build.",
          "superGreen": "Live in 3+ branches with dashboard visibility for BMs + RMs",
          "green": "Beta in 2 branches with feedback loop"
        }
      ]
    },
    {
      "name": "Matisen Harper",
      "title": "Dir. of IT",
      "goals": [
        {
          "name": "AI Wedge Audit + MVP Scoping",
          "critical": true,
          "status": "green",
          "assessment": "NEW 4/30. Audit validates 3 pre-selected builds (Call Grading, Claims RAG, Anne's Hiring Funnel Dashboard) + scopes MVPs + surfaces 4-6 additional wedges. Sweep covers branch ops/claims/sales/HR/marketing.",
          "superGreen": "Audit by 5/30, 3 builds validated, MVPs scoped with effort estimates, sweep surfaces 4-6 additional wedges, first build kicked off by 5/30",
          "green": "Audit by 5/30, 3 builds validated + MVP-scoped, sweep surfaces 4+ wedges, first build kicked off by EOQ"
        },
        {
          "name": "Variable Pricing Full Rollout + Weekly Review Cadence + Pricing Strategy",
          "critical": true,
          "status": "green",
          "assessment": "Carry from Q1. CEO audit: first-to-drop candidate.",
          "superGreen": "TUR Capacity tool + Dynamic pricing model to inform weekly cadences + skill for long-term mgmt surfacing bottlenecks earlier",
          "green": "TUR Capacity tool + regular pricing cadences in place"
        },
        {
          "name": "AI Call Grading + Claims RAG (Wedge Build #1)",
          "critical": false,
          "status": "green",
          "assessment": "NEW 4/30. Wedge Build #1. Co-piloted by Nhel (sales coaching) + Carly (claims). Highest-leverage AI build.",
          "superGreen": "100% sales + claims calls auto-graded weekly, RAG live surfacing magic-moment + early-claim signals, weekly coaching loop with Nhel + Carly",
          "green": "80%+ sales calls auto-graded weekly, RAG live for claims, coaching loop established"
        },
        {
          "name": "ClearCo + Rippling API → Anne's Hiring Funnel Dashboard (Wedge Build #2)",
          "critical": false,
          "status": "green",
          "assessment": "NEW 4/30. Replaces 'Anne asks Matisen for a pull' pattern. Pairs with Anne R1 HR Generalist hire.",
          "superGreen": "Both APIs hooked up, Anne self-serve dashboard live with cost-per-hire/time-to-fill/stage % per branch/campaign perf, weekly auto-refresh",
          "green": "Both APIs hooked up, dashboard live with core funnel metrics, manual refresh OK"
        },
        {
          "name": "Production Line Cleanup — 8 Loose Threads",
          "critical": false,
          "status": "green",
          "assessment": "NEW 4/30. Reframed from Critical # to non-critical. Bulletproofs existing dashboards. Threads: Sales Review, Branch KPIs, Einstein Games, Scorecards, Marketing Dashboard, Zip Zone Map, Relocation Trend Data, Documentation/Handbook.",
          "superGreen": "All 8 shipped or formally archived by EOQ",
          "green": "5+ of 8 shipped or archived, remaining 3 have clear ship dates"
        },
        {
          "name": "Ideal Team Player Reading (Bonus)",
          "critical": false,
          "status": "green",
          "superGreen": "Read by EOQ + 1-page reflection on personal H/H/S gaps",
          "green": "Read by 5/30"
        }
      ]
    },
    {
      "name": "Fabian",
      "title": "Sr. Developer (NEW)",
      "goals": [
        {
          "name": "EMMA v3 → v4 Unification",
          "critical": true,
          "status": "green",
          "assessment": "Mongo upgrade may slip to Q3 acceptable for Green.",
          "superGreen": "Automailer + Mobile App + Cron Service migrated to v4, returned to app.einsteinmoving.com, Mongo upgraded to 8.27, zero v3 artifacts",
          "green": "Automailer + Mobile App + Cron migrated to v4 (Mongo upgrade may slip)"
        },
        {
          "name": "Mobile App UX Rework + Build",
          "critical": true,
          "status": "green",
          "assessment": "Required for Database + EMMA upgrades. Launch identified by 5/2.",
          "superGreen": "Launch within timeline budget, one sprint push allowed",
          "green": "Launch within timeline budget, two sprint pushes allowed"
        },
        {
          "name": "EMMA Lead Scoring + Lead Triage",
          "critical": false,
          "status": "green",
          "superGreen": "Launch within timeline budget, one sprint push allowed",
          "green": "Launch within timeline budget, two sprint pushes allowed"
        },
        {
          "name": "EMMA Email Templates Updated on Production",
          "critical": false,
          "status": "green",
          "superGreen": "All updated email templates live by 5/2, ≤1 sprint push",
          "green": "Updated email templates live by EOQ, ≤2 sprint pushes"
        },
        {
          "name": "Sage + Rippling Support",
          "critical": false,
          "status": "green",
          "superGreen": "PL, Schedule, Jobs migrated to Rippling, support scoping integrations",
          "green": "PL migrated to Rippling, support scoping integrations"
        }
      ]
    },
    {
      "name": "LiftUp (Software/QA Team)",
      "title": "Dev / Dev Ops / QA (NEW)",
      "goals": [
        {
          "name": "Mobile App Build + QA",
          "critical": true,
          "status": "green",
          "assessment": "Considering rollout without UX rework. Required for Database + EMMA upgrades.",
          "superGreen": "Launch within timeline budget (5/2), one sprint push",
          "green": "Launch within timeline budget, two sprint pushes"
        },
        {
          "name": "EMMA API Support for COS",
          "critical": true,
          "status": "green",
          "assessment": "Supporting COS + Dashboard/Skill migrations.",
          "superGreen": "Branches connect Claude to Games, Sales dash by end of June + each loose-thread dashboard gets MCP/data connector",
          "green": "Branches connect Claude to Games, Sales dash by end of July + each loose-thread dashboard gets MCP/data connector"
        },
        {
          "name": "Clean Up Loose Threads (Production Line)",
          "critical": false,
          "status": "green",
          "assessment": "NEW 4/27. Bulletproofs existing dashboards/features.",
          "superGreen": "All 8 listed loose threads shipped or formally archived by EOQ",
          "green": "5+ of 8 shipped or archived, remaining 3 have clear ship dates"
        }
      ]
    },
    {
      "name": "Anne Bosse",
      "title": "Dir. of Employee Experience",
      "goals": [
        {
          "name": "Hire HR Generalist",
          "critical": true,
          "status": "green",
          "assessment": "Anne's #1 — unblocks bandwidth. 4-5 candidates in consideration as of 5/7. Final interviews pending Amanda input.",
          "superGreen": "Hired by end of May, fully onboarded + ramped, taking recruiting volume off Anne",
          "green": "Hired + onboarding started by EOQ"
        },
        {
          "name": "Hiring for Culture / Extended Trial Period + 100-Point Behavioral System",
          "critical": true,
          "status": "green",
          "assessment": "Depends on Matisen R5 (PL → Rippling). 4/14 Cameron: split from original Mover Performance Mgmt rock. Paired with Culture Interview + Extended Trial Day work. Cameron to introduce 100-point system to Anne in person (target 2-3 weeks).",
          "superGreen": "100-point system live across all branches, interview process updated to hire for culture, extended trial in beta one region, Rippling Performance Module live",
          "green": "Interview process updated to hire for culture + Rippling Performance Module live"
        },
        {
          "name": "ClearCo Hiring Funnel Visualization",
          "critical": false,
          "status": "green",
          "assessment": "Carry from Q1. Pairs with Matisen Wedge Build #2.",
          "superGreen": "Full funnel dashboard (cost per hire, time to fill, stage % per branch) + all hired candidates have scorecards",
          "green": "Funnel visualized with cost per hire + time to fill + stage %"
        },
        {
          "name": "Mover Promotion Guidance Metrics",
          "critical": false,
          "status": "green",
          "superGreen": "Promotion metrics tied to Einstein Games KPIs, first cohort promoted under new framework, pay docs updated",
          "green": "Promotion metrics framework built"
        },
        {
          "name": "Einstein Onboarding Experience (CHOICES + Comp/Benefits + Performance Mgmt)",
          "critical": false,
          "status": "green",
          "assessment": "CHOICES app v2 shipped Q1. Q2: get into onboarding pipeline so every new hire goes through it.",
          "superGreen": "CHOICES + Comp/Benefits + Performance Mgmt modules integrated into onboarding via Rippling, ≥90% completion in first 30 days",
          "green": "CHOICES live in onboarding, ≥75% completion in first 30 days"
        },
        {
          "name": "Ideal Team Player Reading (Bonus)",
          "critical": false,
          "status": "green",
          "superGreen": "Read by EOQ + 1-page reflection on personal H/H/S gaps",
          "green": "Read by 5/30"
        }
      ]
    },
    {
      "name": "Amanda Ware",
      "title": "Dir. of CX",
      "goals": [
        {
          "name": "AI Call Grading + Regular Reporting (Conversions/Estimate Accuracy)",
          "critical": true,
          "status": "green",
          "assessment": "Aligned with Nhel + CX theme. Pairs with Matisen Wedge Build #1.",
          "superGreen": "56%+ accuracy, $ conversions 42%+, weekly call audit cadence, BM accountability live",
          "green": "54%+ accuracy, $ conversions 40%+, weekly call audit cadence running"
        },
        {
          "name": "Replace Leadferno with Chatbot (80% deflection)",
          "critical": true,
          "status": "green",
          "assessment": "Chatbot deflects FAQ, job applications, standard inquiries. Quoting/estimating stays human.",
          "superGreen": "Replacement chatbot live, deflecting 80%+ of Leadferno volume, Leadferno fully sunset by EOQ",
          "green": "Replacement chatbot selected, contracted, AI configuration in progress"
        },
        {
          "name": "New Email Design + Copy Polish + Rollout (KP-owned)",
          "critical": false,
          "status": "green",
          "assessment": "Matisen dependency.",
          "superGreen": "Rolled out company-wide with measurable impact",
          "green": "Houston test complete, company-wide decision made"
        },
        {
          "name": "CX Q2 Theme Rollout",
          "critical": false,
          "status": "unknown",
          "assessment": "Decision pending — see CX Themes tab. Decide with Nhel + Carly.",
          "superGreen": "Theme fully rolled out with measurable outcomes + weekly rhythm",
          "green": "Theme launched and adopted with defined metrics"
        },
        {
          "name": "Ideal Team Player Reading",
          "critical": false,
          "status": "green",
          "superGreen": "Read by EOQ + 1-page reflection on personal H/H/S gaps",
          "green": "Read by 5/30"
        }
      ]
    },
    {
      "name": "Nhel",
      "title": "Sales Team Lead",
      "pendingFinalization": true,
      "pendingNote": "Rocks drafted/confirmed in sheet. Pending CX Q2 theme decision (Rock #1) which gates several others.",
      "goals": [
        {
          "name": "CX Q2 Theme Rollout",
          "critical": true,
          "status": "unknown",
          "assessment": "Decision pending — see CX Themes tab. Decide with Amanda + Carly.",
          "superGreen": "Theme fully rolled out with measurable outcomes + weekly rhythm",
          "green": "Theme launched and adopted with defined metrics"
        },
        {
          "name": "Sales Class Level (1 or 2 New Classes)",
          "critical": true,
          "status": "green",
          "assessment": "Level 1 shipped Q1.",
          "superGreen": "New Level 1 cohort certified + meeting individual sales targets AND at/above company avg $-conversion within 60 days of cert",
          "green": "New Level 1 cohort certified + meeting individual sales targets within 60 days"
        },
        {
          "name": "Sales Coaching — Estimate Accuracy + Sales",
          "critical": false,
          "status": "green",
          "assessment": "Aligned with Amanda Rock 1.",
          "superGreen": "30+ documented coaching incidents (call review or live ride-along), each with measurable estimate-accuracy or conversion follow-up",
          "green": "20+ documented coaching incidents with measurable follow-up"
        },
        {
          "name": "Primary: Sales Block Management + Accountability",
          "critical": false,
          "status": "green",
          "assessment": "Carry from Q1.",
          "superGreen": "Over 90% participation",
          "green": "80% participation"
        },
        {
          "name": "Liveswitch Improvements + Implementation",
          "critical": false,
          "status": "green",
          "superGreen": "Request Content + Sparky AI + Projects rolled out to team",
          "green": "Request Content + Sparky AI rolled out to team"
        }
      ]
    },
    {
      "name": "Tet",
      "title": "Sales Trainer (NEW)",
      "pendingFinalization": true,
      "pendingNote": "Rocks drafted/confirmed in sheet. Tied to Nhel + CX theme decision.",
      "goals": [
        {
          "name": "Sales Training Materials Refresh",
          "critical": true,
          "status": "green",
          "assessment": "Collect feedback from past 3 sales classes + GM input on main complaints for new sales reps. Make meaningful changes.",
          "superGreen": "4 meaningful changes shipped to address gaps",
          "green": "3 meaningful changes shipped"
        },
        {
          "name": "Sales Class Level 2 + New Class",
          "critical": true,
          "status": "green",
          "superGreen": "New Level 1 CERs/Managers trained meeting sales target + within company avg conversion $",
          "green": "New Level 1 CERs/Managers within company avg conversion $"
        },
        {
          "name": "Sales Goal",
          "critical": false,
          "status": "green",
          "superGreen": "110% Sales",
          "green": "100% Sales"
        },
        {
          "name": "Support: Sales Block Management + Accountability",
          "critical": false,
          "status": "green",
          "superGreen": "Over 90% participation",
          "green": "80% participation"
        },
        {
          "name": "Focused Estimate Accuracy — Bottom 4 Performers",
          "critical": false,
          "status": "green",
          "assessment": "Identify 4 bottom performers, weekly missed estimate analysis + 1:1 follow-up coaching. 8% estimate-accuracy improvement on said reps.",
          "superGreen": "8% improvement on 4 of 4 reps",
          "green": "8% improvement on 3 of 4 reps"
        }
      ]
    },
    {
      "name": "Carly",
      "title": "Claims Manager",
      "pendingFinalization": true,
      "pendingNote": "On maternity leave 80% of Q2. Per 4/14: only Maternity Transition rock (#1) is active. Other 3 rocks (CX Theme, Damage Accountability, Magic Moments Phase 2) moved to Alternates — directs + Amanda cover maintenance.",
      "goals": [
        {
          "name": "Maternity Leave Transition — Clean Handoff + Return Plan",
          "critical": true,
          "status": "green",
          "assessment": "ONLY active rock per 4/14. Q1 Super Green momentum carries. Carly due mid-May.",
          "superGreen": "New hire fully trained + independent, handoff documented, ready for leave",
          "green": "Semi-trained, handoff in progress"
        }
      ]
    },
    {
      "name": "Stephanie / Jaci / Maria",
      "title": "Claims Team (Pending)",
      "pendingFinalization": true,
      "pendingNote": "Rock topics named (Magic Moments, Improve TTC + Claims/Rep, Praise, Accuracy & Documentation) but Super Green/Green/Red criteria NOT filled in yet.",
      "goals": [
        {
          "name": "Magic Moments",
          "critical": true,
          "status": "unknown",
          "assessment": "Criteria pending"
        },
        {
          "name": "Improve Claims Time to Close + Claims Per Rep",
          "critical": true,
          "status": "unknown",
          "assessment": "Criteria pending"
        },
        {
          "name": "Praise",
          "critical": false,
          "status": "unknown",
          "assessment": "Criteria pending"
        },
        {
          "name": "Accuracy + Documentation",
          "critical": false,
          "status": "unknown",
          "assessment": "Criteria pending"
        }
      ]
    },
    {
      "name": "Remote Operators (June, Nessa, Donna)",
      "title": "ROs (Pending)",
      "pendingFinalization": true,
      "pendingNote": "Rock topics named but criteria NOT filled in.",
      "goals": [
        {
          "name": "Payroll Accuracy + Efficiency",
          "critical": true,
          "status": "unknown",
          "assessment": "Criteria pending"
        },
        {
          "name": "Plotting EMMA Schedules",
          "critical": true,
          "status": "unknown",
          "assessment": "Criteria pending"
        },
        {
          "name": "ClearCo — Screen applicants with CAT scores within 24 hrs",
          "critical": false,
          "status": "unknown",
          "assessment": "Criteria pending"
        },
        {
          "name": "Submit 12 Quick Praise forms (1/week)",
          "critical": false,
          "status": "unknown",
          "assessment": "Criteria pending"
        }
      ]
    },
    {
      "name": "Kickpoint",
      "title": "Marketing Partner (External)",
      "goals": [
        {
          "name": "Marketing ROI / ROAS Measurement",
          "critical": true,
          "status": "unknown",
          "assessment": "DEFER — Hold for Rob. Recommend move to Amanda. Rob's 2027 roadmap puts ROAS as priority.",
          "superGreen": "ROAS dashboard live by channel, budget reallocation decided, KP design system decided, Phase 2 Smart Move kicked off",
          "green": "First real ROAS dashboard + KP design system decision"
        },
        {
          "name": "Oversee Website Redesign — Smart Move Part 2",
          "critical": true,
          "status": "green",
          "assessment": "Cameron Rock 4 — KP delivers design system. Cameron owns since Amanda's plate is full.",
          "superGreen": "New site live, copy updated for Smart Move System, design system from KP implemented, mobile-optimized",
          "green": "Site redesign scoped, KP design system decided, copy refreshed for Smart Move narrative"
        },
        {
          "name": "New Email Design + Copy Polish + Rollout",
          "critical": false,
          "status": "green",
          "assessment": "Matisen dependency. KP owns design + copy.",
          "superGreen": "Rolled out company-wide with measurable impact",
          "green": "Houston test complete, company-wide decision made"
        },
        {
          "name": "Branded Boxes (Bonus)",
          "critical": false,
          "status": "green",
          "assessment": "Bonus rock — definition pending."
        }
      ]
    },
    {
      "name": "Austin LeLievre",
      "title": "Videographer/Content",
      "goals": [
        {
          "name": "YouTube Training Course — 16+ Videos",
          "critical": true,
          "status": "green",
          "assessment": "Red Q1 carry — summer push.",
          "superGreen": "25+ videos uploaded, avg 70+ views per video",
          "green": "16+ uploaded, avg 30+ views"
        },
        {
          "name": "Price Comparison Video — Final Version",
          "critical": true,
          "status": "green",
          "assessment": "Drafts done Q1.",
          "superGreen": "All finalized (15/30/60/90-sec), graphics done, published, distributed",
          "green": "Final cut approved + published + distributed"
        },
        {
          "name": "Einstein Games S4 Content",
          "critical": false,
          "status": "green",
          "assessment": "Theme-tied. Brian dependency on Games S4 launch.",
          "superGreen": "Full promo campaign + matchup graphics + celebration content + weekly drops + highlights",
          "green": "Launch promo + matchup graphics + 4+ in-season drops"
        },
        {
          "name": "Client Testimonials",
          "critical": false,
          "status": "green",
          "assessment": "Red Q1 carry.",
          "superGreen": "3+ filmed + published, avg 200+ views",
          "green": "2 filmed + published"
        },
        {
          "name": "Short Form / Social Media",
          "critical": false,
          "status": "green",
          "assessment": "Maintenance rock.",
          "superGreen": "Bi-weekly short form, 35+ likes avg on Instagram",
          "green": "1 monthly short form, 10-35 likes avg"
        }
      ]
    }
  ]
};
