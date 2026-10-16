# 35 — Service Playbook Accomplishment Report (planning only, no code)

Date: 2026-10-16 · Branch: `docs/web/35-service-playbook-sync` from `origin/main` (`57da375`).
Source: `research/404HubSpot_Service_Architecture_Playbook.pdf` (12 pp, 71,401 bytes,
ReportLab 2026-10-15 EAT) + extracted text `research/404HubSpot_Service_Architecture_Playbook.txt`
(`pdftotext -layout`, 628 lines). Subject: competitor research, Kenya-market pricing,
concrete service/course paths, team-role mapping, website update plan.
All *Proposed* prices are recommendations, not quotes.

> PLANNING ONLY. No `src/`, `public/`, `backend/`, `infra/`, manifest, migration,
> or config change in this branch. Every gap below is assigned to an owning spec
> + named owner + its own future branch. Implementation waits for owner merge
> order and PR review.

## 1. What the playbook asks for (12 sections)

| § | Playbook section | Core demand |
|---|---|---|
| 01 | Executive summary — clients buy a path | One page + one price band + one timeline per path; KSh 10k–500k+ website spread; 2–5x agency-vs-freelancer; 3–6 days STK Push dev; ~200k bootcamp fees |
| 02 | Pricing benchmarks | Basic site ~10k; e-commerce 80–300k+; web app from 150–200k; systems 80–160k; cross-platform app 220k + 30–50% backend; M-Pesa from 15k / 25–60k in-store; upkeep 10k/mo or 10–50k/yr; courses 2k–120k, Moringa 174–200k; domain+hosting 2–10k/yr; SEO 5–20k; Daraja approval 2–10 days |
| 03 | Competitor teardown | Steal: visible from-prices, fixed-scope quotes, 2-week demos, internship, M-Pesa instalments, WhatsApp-first. Avoid: unready tracks, near-identical pages, skill-less team page, quoting before scoping, bottom pricing. Own: build+integrate+teach, M-Pesa/African Stack headline, Nakuru presence, TS/React/Next/Node/Postgres, graduates-to-bench |
| 04 | Service architecture — 5 pillars x 4 rungs | BUILD (audit free / Sprint 5k credited / Launch 20–35k / Business 40–75k / Commerce 85–150k / Platform from 150k / Care 2.5–12k); INTEGRATE (readiness free / STK 25–45k / full Daraja from 60k / yearly upkeep); APPS (workshop 5k / systems 90–200k / MVP+admin 150–250k / care 10–15k/mo); ACADEMY (Spark 3.5k / Frontend-or-Backend 25k / Marathon 85k / alumni); CARE (30–60d included / Lite 2.5k / Plus 6k / Pro 12k). Ladder: visit → WhatsApp/estimator → discovery → build w/ demos → launch+train → care |
| 05 | Path 1 — Web zero-to-hero | 4 tiers (Launch 7–10d / Business 2–3w / Commerce 4–6w / Platform 8–16w), 5 phases (Discover 1–3d → Design w1 → Build w2–4 → Launch → Grow), add-ons (STK 25–45k, SEO 10–20k, page from 3k, training 5k), care (2.5k/6k/12k) |
| 06 | Worked quote + Path 2 | Retail Commerce: Sprint 5k + build 110k + SEO 15k = 125k total, 5 weeks, 50/30/20 schedule, Care Plus 6k from month 3. M-Pesa 25–45k/1–2w; systems 90–200k/4–10w; app MVP 150–250k/8–14w. Rules: discovery week, Figma, 2-week sprints, weak-network design, backend +30–50% warning, Daraja paperwork week 1, publish from-prices |
| 07 | Path 3 — Academy ladder | Spark 3.5k/2w → Frontend 25k/6w → Backend 25k/6w → Flutter 35k/8w → African-Stack 15k/4w → Marathon 85k/24w (Foundations 1–4 / Frontend 5–9 / Backend 10–15 / African 16–19 / Capstone 20–24). Undercuts McTaba 100–120k + Moringa 174–200k; 15x85k = 1.275M/cohort illustration |
| 08 | Team mapping (7 roles) | Founder/Lead, Frontend/UI, Backend/Payments, Mobile, Designer, Academy Lead, Growth — each owns services + teaches + shows skill tags. Fill-in: top-3 skills, match-to-role, billable hrs (junior 500–1k/hr, agency 2–5x), publish tags + courses. Scheduling: max 2 tracks/quarter + client work; backup per single-point role |
| 09 | Website update plan | Home split (Build vs Learn) + proof strip + 3 CTAs; services hub (5 pillars, from-prices, tier compare); 5 service pages (who-for/included/timeline/from-price/process/FAQ/CTA); pricing page (tiers/add-ons/care/schedule/WhatsApp estimator); academy (tracks/fees/instalments/cohort date/apply); case studies (3–5: problem/stack/result/link); team (role/skill tags/courses); guides/blog (Kenya cost, M-Pesa how-to, bootcamp compare); contact (WhatsApp-first, short form, Nakuru address/hours). CRAWLABILITY WARNING: home/services/team returned title+description only — SPA shell; confirm Search Console, plan SSR/prerender. Quick wins: per-service WhatsApp buttons, 4 tiers + 3 care plans on one pricing page, 5 pillar cards, M-Pesa + Nakuru-learn headline, one cost guide, only dated tracks |
| 10 | 90-day roadmap | Days 1–7 Decide (roster, floors, launch tiers, 1-page tier descriptions); 8–21 Publish (pricing page, hub, WhatsApp CTAs, estimator v1, crawlability fix); 22–45 Prove (2 case studies, Spark pilot, academy+apply, first guides); 46–90 Scale (Marathon enrolment, testimonials, win-rate review, hire/train gaps). Weekly metrics: enquiries, quote-to-win, avg value, cohort fill, care attach |
| 11 | Sources (16 links) | Bonnie hub/services/academy/team; Achi Nairobi cost; TecIT pricing; McTaba x5; Moringa Scribd; Hostiko Daraja; Kolonell gateway pricing; Mackdish x2; CMARIX Flutter cost; Nakuru County x2. Re-check before publishing; competitor pages indicative |

(PART 1/4 — continued in sections below.)

(PART 2/4 — implemented vs gap.)

## 2. Implemented vs gap (comparison)

### 2a. IMPLEMENTED (in `origin/main` `57da375`, incl. merged 02b)

| Playbook demand | Implemented state | Evidence |
|---|---|---|
| 6 service cards + 5 detail routes | 6 cards (Web, Software, Mobile, M-Pesa, Graphics, Classes); 5 detail views + classes + process + contact + home | `src/data/site.js` services[6]; `src/router/index.js` 12 routes |
| Per-service WhatsApp CTA (quick win) | Shared `whatsappUrl(msg)` + encodeURIComponent once; service-specific CTA strings per tier | `src/data/site.js` contact 254708345963; pricing[].cta |
| Provisional KES bands on every service | Web 45–85k/95–250k/250k+; Software 280–650k/650k+; Mobile 400–700k/750k–1.5M/1.5M+; M-Pesa 80–150k/160k+; Graphics 25–55k/85–200k/35k+; Classes 12–20k/level | `src/data/site.js` pricing |
| Academy ladder exists (12 tracks, detail pages, mentors, repo evidence) | 12 tracks, `/classes/:slug`, mentor links, GitHub evidence, prev/next | `src/data/courses.js`; `CourseDetail.vue` |
| 5-person team, GitHub-verified stats/repos | Francis 35/21; Don 69/63 Nakuru; Eric 6/20; Christine 10/14; Glory 46/10+portfolio | `src/data/site.js` team[5]; `/team/:slug` |
| Contact: validation + honest WhatsApp handoff | Local validation, prefilled WhatsApp handoff, no fake sent-state; Brevo server contract only | `Contact.vue`; `docs/integrations/BREVO.md` |
| Home split Build vs Learn + proof strip + CTAs | Hero + capability strip (no fake logos) + 6 cards + M-Pesa feature + training + process + team + CTA + footer | `Home.vue`; `MASTER-DESIGN-SYSTEM.md` |
| Responsive 360–1920, a11y shell, theme, motion guards | 12 routes x 5 widths + keyboard/Escape/skip-links/reduced-motion + contrast 4.5+ + SEO lib + sitemap/robots + 404 Lottie | `verify-ui.cjs` 75 checks; build 69 modules PASS |
| Full-stack plan (modular monolith, Postgres, outbox, OIDC, MCP/AI, scaling gates) | SYSTEM-DESIGN + LAYER-MAP + DATA-MODEL + SCALING-PATH + FUTURE-PLATFORM + THREAT-MODEL + 33 specs + 8 kits + roadmap | `docs/architecture/*`; `project-kit/*` |
| Research filed | Playbook PDF + TXT + this report + research README | `research/*`; `docs/planning/35-*` |

### 2b. GAPS (nothing here is implemented — each row owns spec + owner + branch)

| # | Gap vs playbook | Owning spec | Owner | Future branch |
|---|---|---|---|---|
| G1 | No dedicated pricing page (tiers + add-ons + care + schedule + WhatsApp estimator) | 02 then 03 | Christine (Frontend/UI) | `feature/content/02-*` then `feature/frontend/03-*` |
| G2 | No services hub (5 pillars, from-prices, tier comparison) | 02 then 03 | Christine | same as G1 |
| G3 | Service pages lack close-structure (who-for/included/timeline/from-price/process/FAQ/CTA); prices provisional; no Discovery Sprint 5k or 50/30/20 schedule | 02 then 03/04/05/06/33 | Christine 03; Francis 04+06; Don 05; Glory 33 | one branch per spec |
| G4 | Academy lacks playbook ladder (Spark 3.5k / Frontend 25k / Backend 25k / Flutter 35k / African-Stack 15k / Marathon 85k, instalments, cohort date, apply form) | 07 | Glory (Academy Lead) | `feature/frontend/07-*` |
| G5 | Team pages lack skill tags + courses-taught per person (s08 differentiator) | 12 (needs 02) | Eric (Designer) | `feature/frontend/12-*` |
| G6 | No case studies / portfolio (need 3–5: problem/stack/result/link + permissions) | 10 then 11 | Eric | `10-*` then `11-*` |
| G7 | No guides/blog (Kenya cost, M-Pesa how-to, bootcamp compare) | 22 (needs 10/11/12/18/20) | Francis (final review) | `feature/backend/22-*` |
| G8 | Crawlability: SPA shell — playbook fetched title+description only; need Search Console + SSR/prerender decision (keep Vue; evaluate Vite SSR/prerender in spec) | 14 (needs 02/10/11/12) | Don (Architect) | `feature/frontend/14-*` |
| G9 | Care plans not attachable products (Lite 2.5k / Plus 6k / Pro 12k) | 02 then 03–06 | Christine then service owners | same as G3 |
| G10 | No estimator v1 (rough range in minutes, sends WhatsApp message) | 08 (needs 02) | Don | `feature/frontend/08-*` |
| G11 | Contact lacks Nakuru address/hours, meeting link, privacy copy; no durable capture | 08 then 19 (needs 17/18) | Don 08+19; Francis 17+19-review | `08-*` then `19-*` |
| G12 | Process page lacks 5-phase playbook process (Discover / Design / Build demos / Launch+train / Grow+care) | 09 | Christine | `feature/frontend/09-*` |
| G13 | Weekly metrics not tracked (enquiries, quote-to-win, avg value, cohort fill, care attach) | 31 (needs 19/24/27/30) | Don | `feature/infra/31-*` |
| G14 | 90-day Decide-Publish-Prove-Scale not scheduled; roster/floors/tiers undecided | 02 (Decide) | Francis (Decide gate) | `02-*` first |
| G15 | Backend/data/staff/MCP/AI/infra (16–32, 34) planned, none deployed | 16-32, 34 in order | Francis 17/19; Don 16/30/31+24/25; Glory 18/29; Eric 21-UX; Christine 22-UX | one branch per spec |
| G16 | Academy economics unvalidated (15x85k illustration; capacity/mode unknown) | 07 + OPEN-QUESTIONS | Glory; Francis sign-off | `07-*` |

Price reconciliation: site bands sit ABOVE playbook entry tiers (site Landing 45–85k vs Launch 20–35k; site STK 80–150k vs playbook 25–45k; classes 10–25k vs Spark 3.5k). Direction set in spec 02: reposition to middle-market OR keep premium bands with scope justification. Never publish either as fixed quotes until 02 signs off.

## 3. Planning-file updates in this branch (contract sync, no code)

| File | Change (this branch) | Why (playbook section) |
|---|---|---|
| `research/404HubSpot_Service_Architecture_Playbook.pdf` | Staged (was untracked) | all — source of truth |
| `research/404HubSpot_Service_Architecture_Playbook.txt` | Extracted text, 628 lines via `pdftotext -layout` | deterministic audit trail |
| `research/README.md` | New: playbook provenance, 12-section index, Proposed-price + role-slot rules | all |
| `docs/planning/35-SERVICE-PLAYBOOK-ACCOMPLISHMENT-REPORT.md` | New: this report (implemented vs gap, benefits, assignments) | user order |
| `docs/planning/IMPLEMENTATION-ROADMAP.md` | Playbook 90-day overlay (s10) + pricing-page/estimator/crawlability order; phase letters unchanged; one-spec-per-branch reaffirmed | s09–s10 |
| `docs/planning/OPEN-QUESTIONS.md` | 4 new playbook-gated rows: price floors + launch tiers; cohort capacity/mode; crawlability SSR decision; weekly-metrics owner | s04–s10 |
| `docs/planning/TEAM-ASSIGNMENTS.md` | New: 5 named owners, spec-to-owner table, hard no-cross-implementation rule, handoff protocol, deadlock-escalation path | user order (PM) |
| `docs/architecture/SYSTEM-DESIGN.md` | Version note: playbook s09 crawlability warning as spec-14 decision (Vue SSR/prerender evaluation, not framework swap); care/estimator/M-Pesa-week-1 flows to owning specs | s06, s09 |
| `docs/contracts/FUTURE-PLATFORM.md` | Estimator + care-attach + cohort-apply DRAFT semantics (query params, WhatsApp handoff, no fixed-quote claim) for specs 08/07/19 | s04–s07, s09 |
| `docs/architecture/DATA-MODEL.md` | Cohort/CarePlan/PriceTier/CaseStudy-permission entities flagged PROPOSED for specs 07/10/11/18 (no schema installed) | s04, s07, s09 |
| `project-kit/context/progress-tracker.md` | s0 chain: 35 planning branch recorded; board row 35 PLANNING; s4 sync note; s5 next action: await PR review before implementation | workflow rule 5 |
| `project-kit/feature-specs/README.md` | Index: spec 35 planning-only row; dependency note unchanged | discoverability |
| `project-kit/feature-specs/35-service-playbook-sync.md` | New planning spec: scope = docs/research/trackers only; NO-CODE allowlist; gates; acceptance = report + sync + green checks | one-spec rule |
| `project-kit/layers/*/README.md` (8) | Playbook-ownership pointer: each kit names its playbook gaps + owning specs; status routes to root tracker | s08 mapping |
| `AGENTS.md` | Hard rules appended: R1 no-cross-implementation; R2 dependency-handoff (report blocker+holder, never blind); R3 dependent specs share one owner; R4 planning-only branches touch docs/research/trackers/spec-md only | user order (PM) |
| `docs/README.md` | Reading map: playbook report + team assignments entries | discoverability |
| `docs/decisions/README.md` | 2026-10-16 entries: playbook adoption, provisional-price stance, Vue-retention vs SSR evaluation, 5-owner assignment | audit trail |

## 4. Architectural benefit of these planning updates

1. **Paths, not lists (s01, s04).** The site lists 6 services today; the plan
   converts each into a buyable path (entry→core→premium→recurring) with
   from-prices, timelines, and next steps — raising quote-to-win without
   custom negotiation per enquiry. Benefit: higher average project value,
   measurable via G13 metrics.
2. **Fixed-scope discipline (s05–s06).** Discovery Sprint (5k credited) +
   5-phase process + 2-week demos + 50/30/20 schedule de-risks both sides;
   Daraja paperwork week-1 avoids the classic 2–10-day Safaricom stall.
   Benefit: fewer scope disputes, faster launch, auditable delivery.
3. **Recurring revenue (s04 CARE).** 30–60d included → Lite/Plus/Pro attach
   on every launch turns one-off builds into upkeep income. Benefit:
   predictable cashflow; tracked as care-attach rate.
4. **Academy→bench loop (s07–s08).** Spark→Frontend/Backend→Flutter→
   African-Stack→Marathon ladder with internship + capstone on real client
   briefs feeds graduates into the delivery bench. Benefit: hiring pipeline
   + Nakuru presence moat.
5. **Crawlability before spend (s09).** Recording the SPA-shell warning as a
   spec-14 decision prevents pouring copy into uncrawlable pages. Benefit:
   search + link previews work before the Prove phase.
6. **Single-owner dependency chains (s10 + TEAM-ASSIGNMENTS).** Grouping
   dependent specs under one owner (e.g. Don holds 08→19; Francis holds
   17→19-review) eliminates cross-agent blind implementation and deadlocks.
   Benefit: the 90-day roadmap stays sequential and reviewable.
7. **Modular-monolith restraint preserved.** Playbook demands no new runtime
   (no Next.js swap, no microservices, no mobile app) — the plan records
   SSR/prerender as an evaluation inside spec 14 and keeps backend as the
   staged modular monolith (17→18→19…). Benefit: architecture grows only on
   evidence (SCALING-PATH gates intact).

## 5. Verification (this branch — planning gates only)

- `npm run build` — PASS, 69 modules, 0 errors (baseline unchanged; warnings
  only: caniuse-lite age, lottie eval, dynamic-import chunk notes). Proves no
  runtime file was touched.
- `git diff --check` — PASS (run before push; whitespace clean).
- `node scripts/verify-ui.cjs` — NOT re-run (no `src/` change; last green:
  75 checks on 02b branch). Re-run ordered at next implementation spec.
- Scope audit: `git status --short` shows only `research/*`, `docs/*`,
  `project-kit/*`, `AGENTS.md` paths — zero `src/`, `public/`, `backend/`,
  `infra/`, manifest, or config diffs.

## 6. Open gates (owner decisions blocking implementation)

1. Price floors + launch tiers + tier-1-pagers (G14 → spec 02).
2. Cohort capacity/mode/internships (G16 → spec 07).
3. Crawlability: Search Console confirm + Vue SSR/prerender choice (G8 → spec 14).
4. Weekly-metrics owner + tooling (G13 → spec 31).
5. All pre-existing gates in `docs/planning/OPEN-QUESTIONS.md` (Brevo sender/key/inbox, domain, hosting, identities, retention…).
6. **PR review on this branch — no implementation branch may start until this
   planning PR is reviewed/merged** (user order).

## 7. Team crosswalk (playbook s08 roles → verified members → spec ownership)

| Playbook role | Member (verified `src/data/site.js`) | Specs owned | Depends on (holder) |
|---|---|---|---|
| Founder / Lead Engineer | Francis Masila (Fullstack+Designer, 35 repos) | 02-Decide gate, 04, 06, 17, 19-review, 22-publish-review | 02 ← 01 merged ✓; 17 ← 02+16; 19 ← 08+17+18 |
| Backend / Payments Engineer | Francis Masila (M-Pesa + Daraja) | 06, 17, 19-review | as above |
| Frontend / UI Engineer | Christine Jemutai (Frontend, Vue, 10 repos) | 02-content, 03 (+hub), 09, 22-UX | 03 ← 01+02; 09 ← 01+02 |
| Mobile Engineer | Don Artkins (Fullstack+Mobile/Dart, 69 repos, Nakuru) | 05, 08, 16, 24, 25, 30, 31 | 05 ← 02+03; 08 ← 01+02; 16 ← 01 |
| Product Designer | Eric Njuki (UI/UX+GSAP, 6 repos) | 10, 11, 12-team-UX, 21-UX | 10 ← 01+02; 11 ← 10; 12 ← 01+02; 21 ← 19+20 |
| Instructor / Academy Lead | Glory Kinya (Fullstack+Design+ML, 46 repos) | 07, 18, 29 | 07 ← 01+02; 18 ← 17; 29 ← 19+20+21 |
| Client Success / Growth | Don Artkins (Architect+growth) + Francis (final review) | 13, 14, 15 (Don); guides/blog 22-review (Francis) | 13 ← 12 specs; 14 ← 02+10+11+12; 15 ← 12 specs |
| Staff workspace + AI/MCP | Eric (21-UX) + Don (24/25) + Glory-backed data (26 needs 22) + Christine (22-UX) | 20 (Francis+Don), 21, 26, 27, 28-opt, 32, 34 | 20 ← 17+18; 21 ← 19+20; 26 ← 22; 27 ← 21+26 |

Full table + hard rules: `docs/planning/TEAM-ASSIGNMENTS.md`. Protocol: an
agent holding a spec whose dependency is unmerged reports `BLOCKED:<spec> held
by <owner>` to the user and stops — never implements blind. Cross-owner
dependent specs are grouped under one owner (table above) so deadlocks cannot form.

(PART 4/4 — end of report.)
