const DASHBOARD_DATA = {
  "meta": {
    "quarter": "Q2 2026",
    "quarterStart": "2026-05-01",
    "quarterEnd": "2026-07-31",
    "themeDeadline": "2026-07-19",
    "themeDeadlineLabel": "Theme Deadline: Jul 19",
    "lastRefreshed": "2026-05-28T10:00:00-05:00",
    "refreshedBy": "Albert (/gm sweep)",
    "archive": {
      "quarter": "Q1 2026",
      "file": "dashboard-data-q1-2026.json",
      "note": "Q1 final state with self-grades, AAR notes, and divergence summary preserved for reference."
    },
    "pendingFinalization": [
      "Carly \u2014 only Maternity Transition rock confirmed (other 3 moved to Alternates per 4/14 \u2014 she's on leave 80% of Q2)",
      "Amanda's CX Q2 Theme rock \u2014 pending decision (gates Nhel + Carly's theme rocks too, tracked off-dashboard)"
    ],
    "criticalNumbersConfirmed": "Cameron Rocks #1 (Einstein Dojo + COS scaling) and #2 (AI Wedge Audit + QG Support) confirmed as Critical Numbers per 5/7.",
    "scopeNote": "Dashboard tracks Cameron's directs only. Non-direct contributors (Nhel, Tet, Fabian, LiftUp, Claims team, ROs) are kept in line on the Cascading Goals spreadsheet for visibility but cascade through their managers \u2014 Cameron doesn't meet with them regularly enough to keep dashboard status fresh.",
    "lastRefreshNote": "5/28 /gm sweep — Fixed two rendering bugs (status values that produced empty circles): Anne HR Generalist 'super-green' → 'supergreen' (now shows the SG dot); Rock #6 ITP 'yellow' flagged to Cameron (dashboard has no yellow state — SG/G/R only — pending his call to map green vs red). Rock #1 COS refreshed: Vera-Brian live (5 of 6 COS active, Amanda last). Rock #5 + KP + Smart Move tile: website design proposal SIGNED 5/28, Ben looped for payment calendar. Einstein Games tile: S3 launched 5/23, week 1 in flight. PRIOR (5/22 /retro): ", "_archivedRefreshNote": "5/22 /retro deep refresh + /wrap velocity correction \u2014 week 5/18-5/22 closed. Velocity 33 pulses / 122 LOW / 10 praise / happiness 4 (corrected at /wrap from earlier ~95 LOW estimate \u2014 Hold for Sync Up + Done 2026 dated this week combined). Roughly tied with last week's 32/121 modeler-sprint frenzy. Huddle facilitation jumped one full letter grade from last week (C/3.1 three-day \u2192 B+ this week). HOF Path B initially shipped differentiated (conditional A-player ultimatum) then REVERSED to uniform via Roundtable + 6-author consultant council, all six convergent \u2014 philosophy v2.2 added 'pay corrections are not performance ultimatums' principle. VP rates LIVE clean overnight Wed 5/20. Einstein Games S3 launches Sat 5/23, public brief page live. Lead Triage scoping approved for Fabian Phase 1 (broke 2-week stall). N. Austin onsite visit 5/19 banked (1/3 toward Branch Visits rock). Cameron's COS rollout for Brian decoupled from Anthropic Org setup (Brian first now, Tue 5/26 target \u2014 breaks 3-week slip pattern). HR Generalist hire: Saturday interview added to land by Mon PM. Performance-pay system framed as Anne + Paul Q2 Rock. Friction-remover pattern flagged \u2014 Cameron's rocks underperforming because day fills supporting everyone else."
  },
  "companyCriticalNumbers": [
    {
      "department": "Movers / Frontline Managers",
      "numbers": [
        {
          "name": "Einstein Games \u2014 Season 3 Scorecards",
          "target": "Company score 8+ SG / 7+ G, all branches above floor",
          "actual": "Season 3 LAUNCHED 5/23 — week 1 in flight. Manual Claude-based scoring running in parallel while Matisen QA's the new Games API (reconciling rounding errors). N. Austin played multiplier card vs Dallas. 8-week structure (6 regular + 2 playoffs), national champ 7/11.",
          "status": "green",
          "note": "Brian Critical Rock #1 (CTXH 8+ SG / 7+ G) + Mike Critical Rock #2 (DFWT 8+ SG / 7+ G). Per-branch scorecards live (Q1 packet shipped). Weekly games scoreboard depends on Robert's MCP + OpenSearch DB cutover (replaces Glide app)."
        },
        {
          "name": "Personnel Budget %",
          "target": "All branches avg 100%+ staffing for quarter (G+SG threshold), eNPS cleared by end of May (SG) or end of June (G)",
          "actual": "Anne running HR Generalist hire (4-5 candidates this week). Brian + Mike both have personnel budget as Critical # in their rocks.",
          "status": "green",
          "note": "Brian Critical Rock #2 (CTXH) + Mike Critical Rock #1 (DFWT) + Anne Critical Rock #1 (HR Generalist unlocks bandwidth). All BMs also carry Hiring Targets in their branch rocks. Cascade is fully wired."
        }
      ]
    },
    {
      "department": "Claims",
      "numbers": [
        {
          "name": "CX Q2 Theme + Objectives \u2014 Claims",
          "target": "TBD \u2014 pending Amanda + Carly working session post Carly's maternity return",
          "actual": "Placeholder. Theme decision gates Carly's CX Theme rock + maintenance plan during her leave.",
          "status": "unknown",
          "note": "Carly on maternity leave 80% of Q2. Amanda Rock #6 covers maintenance. Theme + objectives flesh-out is the missing piece."
        },
        {
          "name": "Magic Moments Delivered (counter)",
          "target": "TBD \u2014 Q2 baseline pending",
          "actual": "Placeholder \u2014 auto-pull from Carly's MM tracker spreadsheet pending. Spreadsheet ID TBD (Cameron to confirm during /gm dashboard refresh).",
          "status": "unknown",
          "note": "Cumulative counter. /gm dashboard refresh should pull MM count from Carly's tracker once URL is confirmed. Q1 carry-over momentum: MM program active company-wide."
        }
      ]
    },
    {
      "department": "Sales",
      "numbers": [
        {
          "name": "CX Q2 Theme + Objectives \u2014 Sales",
          "target": "TBD \u2014 pending Amanda + Nhel working session",
          "actual": "Placeholder. Theme decision gates Nhel Rock #1 + Amanda Rock #4 + Tet's training alignment.",
          "status": "unknown",
          "note": "CX Q2 theme is the unifying frame for sales + claims + reviews. Decision pending. Tracked off-dashboard until locked, then tile populates with theme metrics."
        },
        {
          "name": "Estimate Accuracy / $ Conversions",
          "target": "54%+ accuracy G / 56%+ SG \u00b7 40%+ $ conv G / 42%+ SG",
          "actual": "5/20 KP sync: VP form analytics show >100% submission rate on some funnel steps (users navigating back/forward triggering multiple form-submit events; 'Inestimable form submit' deprecated). Jamie + Liz reviewing this week, report 5/27. Likely explains part of the conversion-baseline weirdness. Cameron removed from ownership on the dashboard pulse \u2014 Kick Point owns the analysis.",
          "status": "unknown",
          "note": "Amanda Rock #1 (AI Call Grading) + Nhel R3 (30+ documented coaching incidents SG / 20+ G) + Tet R5 (focused estimate-accuracy coaching on bottom 4 performers). Pulse 11712899643."
        }
      ]
    },
    {
      "department": "Marketing/IT",
      "numbers": [
        {
          "name": "Smart Move System Phase 2 / Website Redesign",
          "target": "New site live, copy refreshed for Smart Move + VP, KP design system implemented",
          "actual": "Cameron Rock #5 (Cameron owns since Amanda's plate is full). Design proposal SIGNED 5/28 — design process kicking off, Ben Young looped for payment calendar.",
          "status": "green",
          "note": "Phase 1 (VP) shipped Q1. Q2 = freshen the site to sell Smart Move + VP. Kickpoint dependency on design system proposal."
        },
        {
          "name": "Marketing ROAS Measurement",
          "target": "ROAS dashboard live by channel, budget reallocation decisions",
          "actual": "Kickpoint Rock 1 \u2014 currently DEFER (Hold for Rob).",
          "status": "unknown",
          "note": "Rob Lynch input dependency. Recommend move to Amanda (per sheet note). Rob's 2027 roadmap puts ROAS as priority \u2014 Q2 may stay scoping-only."
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
          "note": "Matisen Critical # Rock 1 (audit) + Rock 3 (Build #1 = Call Grading + Claims RAG, paired with Nhel/Carly). Cameron Rock #2 oversees + audits 7+ supporting QGs go Green."
        },
        {
          "name": "EMMA v3 \u2192 v4 Unification + Mobile App",
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
      "note": "Baseline still broken from VP rollout \u2014 Matisen owns apples-to-apples investigation before scoring."
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
      "name": "Build Einstein Dojo + Scale AI COS to All Roundtable",
      "critical": true,
      "status": "green",
      "assessment": "Cameron's personal Q2 thesis. 5 of 6 COS active (Albert, Gerald-Mike, Matisen's, Clark-Paul, and now Vera-Brian — onboarded 5/26, day-2 health check 5/27 clean). Critical # = 6 active COS instances with weekly usage; Amanda is the last (onboarding prep underway, target this week). Network governance maturing: repo consolidated to one private template, github-pages-publishing + stub-prompt patterns pushed via SCB and acknowledged by Gerald/Clark/Vera. Three legs: (1) MCP config generator HTML form, (2) synthesis pipelines as scheduled Claude Code Routines (shipped 4/14), (3) Dojo = renamed skills repo + /dojo recommender skill.",
      "superGreen": "50+ Dojo skills, 2+ leaders contributing skills unprompted, 2+ nightly synthesis pipelines, AI-fluency interview question, weekly huddle AI demo 4+ weeks",
      "green": "Dojo with 40+ skills, /dojo recommender + MCP config generator built, all 6 Roundtable members have active COS, 1 nightly synthesis pipeline, skill PR template in repo",
      "lastUpdated": "2026-05-28"
    },
    {
      "number": 2,
      "name": "AI Wedge Audit and QG Support",
      "critical": true,
      "status": "green",
      "assessment": "Co-owned with Matisen R1. Cameron oversight; Matisen execution. Audit complete by 5/15 (SG) or 5/30 (G). 7+ supporting QG dependencies go Green by EOQ for SG, 5+ for G.",
      "superGreen": "Audit complete by 5/15; all 10 supporting QG dependencies mapped; 7+ supporting QGs Green by EOQ; AI Wedge requirements documented + approved",
      "green": "Audit complete by 5/30; supporting QG dependencies mapped; 5+ supporting QGs Green by EOQ; requirements drafted",
      "lastUpdated": "2026-05-07"
    },
    {
      "number": 3,
      "name": "Variable Pricing Full Rollout + Weekly Review Cadence",
      "critical": false,
      "status": "green",
      "assessment": "Carry from Q1. Phase 1 LIVE. Q2 = full day-of-week VP live, no regression, weekly conversion/TUR review cadence + baseline reset, VP 2.0 scoped. CEO audit flagged this as 'first to drop' \u2014 consider folding to Amanda or Website Redesign rock.",
      "superGreen": "Full day-of-week VP live + weekly review cadence running",
      "green": "Day-of-week VP live + cadence in place",
      "lastUpdated": "2026-05-07"
    },
    {
      "number": 4,
      "name": "Branch Visits + O3s",
      "critical": false,
      "status": "green",
      "assessment": "Carry from Q1. Cameron's time only \u2014 no external dependencies. 5/19 N. Austin onsite visit with Rance banked (Workstream A FM ride-along + Workstream B app consolidation review). 1/3 visits toward Green threshold.",
      "superGreen": "5 branch visits + 5 listen-and-learns + 5 O3s with all directs",
      "green": "3 branch visits + 3 listen-and-learns + quarterly O3s",
      "lastUpdated": "2026-05-07"
    },
    {
      "number": 5,
      "name": "Oversee Website Redesign \u2014 Smart Move System Part 2",
      "critical": false,
      "status": "green",
      "assessment": "Cameron owns since Amanda's plate is full. CMS decision LOCKED 5/11 \u2014 staying on WordPress, building new FSE block theme. PROPOSAL SIGNED 5/28 \u2014 Cameron + Paul reviewed KP's design proposal, both good to go, Cameron signed. Design process kicking off; Ben Young looped to budget the payment calendar. Albert via WP REST API as editor-AI layer. Next: KP design-system build + Smart Move copy refresh.",
      "superGreen": "New site live, copy updated for Smart Move System, KP design system implemented, mobile-optimized",
      "green": "Site redesign scoped, KP design system decided, copy refreshed for Smart Move narrative",
      "lastUpdated": "2026-05-28"
    },
    {
      "number": 6,
      "name": "Ideal Team Player Reading",
      "critical": false,
      "status": "yellow",
      "assessment": "Bonus rock. Read by 5/30 (G) or EOQ + 1-page reflection on personal Humility/Hunger/Smarts gaps (SG). Behind — no movement in last 2 weeks. 5/30 deadline is 8 days out.",
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
          "assessment": "5/20: Manager comp final review LOCKED \u2014 Stephanie 3%, Amanda 10%, Carly 5%, Jespah matched to Terrel at $62K, Joel + Sergio bumped to 5%. Grant pending \u2014 Cameron needs justification from Mike before approving above standard. HOF grandfathered group LOCKED at $23 base + $3.75 variable = $26.75 max (Path B, self-sunsetting, no new entrants). Paul owns 10 1:1 calls + manager brief. HOF title decoupled from pay \u2014 separate revamp project (metric-based selection). Earlier: Mover comp LOCKED 5/14 (Ben validated 5/13). $20 flat Lead in Training + Lead $1.50 base/$0.50 var. Co-Pilot retired. HOF retired as paid position. ~$600K annual increase, under 40% mover/rev ceiling. Anne reposted all postings 5/15. Rippling rates updated 5/16. Announcement shipped 5/18.",
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
          "assessment": "Red Q1 carry. Q2 quarter just starting \u2014 Paul's time only.",
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
          "assessment": "Hold-for-Rob. Prosper-owned delivery \u2014 Paul oversees. Rob Lynch framework dependency.",
          "superGreen": "3-5 year capital plan (path to 150 trucks), debt capacity, reinvestment model, PE readiness",
          "green": "Capital plan framework drafted with Rob Lynch input"
        },
        {
          "name": "Geographic Expansion \u2014 Acquisition Models + LOI",
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
          "assessment": "Bonus rock \u2014 definition pending."
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
          "assessment": "5/18 PM: Tonight's working session reframed the gap. Mike pushed 110-115% target (plan for attrition); Cameron's pushback: target inflation is Goodhart \u2014 every level adds buffer and the number stops meaning anything. Real fix = attrition-aware pipeline sizing behind a stable 105% net target. New disciplines locked: 3:30 PM applicant/lead cutoff doctrine (queue clears before EOD), EOD sign-off concept (BMs publicly confirm clear queues), pause Tampa + Garland sourcing (146 + 64 applicants stalled with no open seats). Bandwidth-model framework pending (combined sales + hiring capacity per role).",
          "superGreen": "All CTXH branches avg 100%+ staffing, People Analyzer reviewed, C players cleared/action plans, eNPS cleared by end of May",
          "green": "All CTXH 100%+ staffing, PA reviewed, C plans, eNPS cleared by end of June"
        },
        {
          "name": "Scrum Accountability Pt 4 \u2014 Manager Certification",
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
          "name": "Personnel Mgmt \u2014 Manager Hiring + New Manager Development (Garland + Tampa)",
          "critical": true,
          "status": "green",
          "assessment": "5/18 PM: Pause Tampa hiring sourcing (Stephen + Shane staffed up; 64 applicants stalled). Same for Garland (146 applicants, no open seats). Mike researching Texas contingent hiring legality \u2014 confirmed legal; pair with 4-panel drug test (no marijuana) to drop 5-day waiting period. 9 FM candidates in DFW pipeline, last screener Wed 5/20. Beatty needed to run more trial days per Mike's coaching ('you need 10 in pipeline, not 3'). Combined sales + hiring bandwidth model in design.",
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
          "name": "Fleet Safety Pt 2 \u2014 Resolidifying Habits, Training, Reweighting, Sample Sizes",
          "critical": false,
          "status": "green",
          "assessment": "5/18: Refining scoring + negating model with Gerald this week. Coaching model rollout needs team alignment first (won't affect Games scoring). Pattern of backup incidents continues \u2014 most recent N. Austin (camera working, no ground guide); backup sensor evaluation owner not yet assigned.",
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
          "name": "Fleet Damage Tracking App \u2014 Beta (Bonus)",
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
          "name": "ClearCo + Rippling API \u2192 Anne's Hiring Funnel Dashboard (Wedge Build #2)",
          "critical": false,
          "status": "green",
          "assessment": "NEW 4/30. Replaces 'Anne asks Matisen for a pull' pattern. Pairs with Anne R1 HR Generalist hire.",
          "superGreen": "Both APIs hooked up, Anne self-serve dashboard live with cost-per-hire/time-to-fill/stage % per branch/campaign perf, weekly auto-refresh",
          "green": "Both APIs hooked up, dashboard live with core funnel metrics, manual refresh OK"
        },
        {
          "name": "Production Line Cleanup \u2014 8 Loose Threads",
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
      "name": "Anne Bosse",
      "title": "Dir. of Employee Experience",
      "goals": [
        {
          "name": "Hire HR Generalist",
          "critical": true,
          "status": "supergreen",
          "assessment": "✅ CLOSED 5/26. Offer letter to Jalissa accepted at $75K. Official start date June 8. ~8 yrs experience including hiring physical laborers, Philippine CORs, ATS implementation, strong cultural fit. Anne ran extended slate (4 Fri 5/22 + Saturday interview + Emery 5/25 + Misty 5/26 no-go) to land the right hire. Super Green track: hire closed BEFORE end of May — well ahead of EOQ Green threshold.",
          "superGreen": "Hired by end of May, fully onboarded + ramped, taking recruiting volume off Anne",
          "green": "Hired + onboarding started by EOQ"
        },
        {
          "name": "Hiring for Culture / Extended Trial Period + 100-Point Behavioral System",
          "critical": true,
          "status": "green",
          "assessment": "5/18: Trial days reduced to 1 day immediately, sunset 6/1 when HPEs roll out. HPE materials in active build this week. Concentra response loop in progress \u2014 Anne escalates to VP if no response in 2 days. 100-Point system still parked until Cameron in-person intro.",
          "superGreen": "100-point system live across all branches, interview process updated to hire for culture, extended trial in beta one region, Rippling Performance Module live",
          "green": "Interview process updated to hire for culture + Rippling Performance Module live"
        },
        {
          "name": "ClearCo Hiring Funnel Visualization",
          "critical": false,
          "status": "green",
          "assessment": "5/18 PM: Tension flag \u2014 Brian/Mike want BMs to screen directly (R&O&S as support, not gatekeeper); Anne's read is that loose screening creates downstream HR problems with people who shouldn't have made it through. Both positions valid. Cameron talks to Anne Tue 5/19 to land a new policy. Also: combined sales + hiring bandwidth model in early design \u2014 Anne owns the funnel-conversion + attrition data we need to size pipelines properly. ClearCo API access still pending Anne \u2014 biggest unlock for funnel visualization.",
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
          "assessment": "5/18: Offer letter expiration cut from 7 days to 48 hours this week. Physical + drug screen language added to offer letter, ClearCo e-passport 48-hr request going out. COBRA filing reference removing from new handbook. Copilot \u2192 Lead in Training cleanup across ClearCo + handbook + offer letters in progress.",
          "superGreen": "CHOICES + Comp/Benefits + Performance Mgmt modules integrated into onboarding via Rippling, \u226590% completion in first 30 days",
          "green": "CHOICES live in onboarding, \u226575% completion in first 30 days"
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
          "assessment": "Decision pending \u2014 see CX Themes tab. Decide with Nhel + Carly.",
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
      "name": "Carly",
      "title": "Claims Manager",
      "pendingFinalization": true,
      "pendingNote": "On maternity leave 80% of Q2. Per 4/14: only Maternity Transition rock (#1) is active. Other 3 rocks (CX Theme, Damage Accountability, Magic Moments Phase 2) moved to Alternates \u2014 directs + Amanda cover maintenance.",
      "goals": [
        {
          "name": "Maternity Leave Transition \u2014 Clean Handoff + Return Plan",
          "critical": true,
          "status": "green",
          "assessment": "ONLY active rock per 4/14. Q1 Super Green momentum carries. Carly due mid-May.",
          "superGreen": "New hire fully trained + independent, handoff documented, ready for leave",
          "green": "Semi-trained, handoff in progress"
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
          "assessment": "DEFER \u2014 Hold for Rob. Recommend move to Amanda. Rob's 2027 roadmap puts ROAS as priority.",
          "superGreen": "ROAS dashboard live by channel, budget reallocation decided, KP design system decided, Phase 2 Smart Move kicked off",
          "green": "First real ROAS dashboard + KP design system decision"
        },
        {
          "name": "Oversee Website Redesign \u2014 Smart Move Part 2",
          "critical": true,
          "status": "green",
          "assessment": "Cameron Rock 5 \u2014 KP delivers design system. Design proposal SIGNED 5/28; KP to kick off design-system build. Cameron owns since Amanda's plate is full.",
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
          "assessment": "Bonus rock \u2014 definition pending."
        }
      ]
    },
    {
      "name": "Austin LeLievre",
      "title": "Videographer/Content",
      "goals": [
        {
          "name": "YouTube Training Course \u2014 16+ Videos",
          "critical": true,
          "status": "green",
          "assessment": "Red Q1 carry \u2014 summer push.",
          "superGreen": "25+ videos uploaded, avg 70+ views per video",
          "green": "16+ uploaded, avg 30+ views"
        },
        {
          "name": "Price Comparison Video \u2014 Final Version",
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