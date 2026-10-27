# Progress tracker — 404HubSpot

## 0. Execution chain

Current: 01, 02b, 35, 02 (PR #7), 03 (PR #8), and 04 (PR #9) are merged to `main`.
Spec 05 is complete on `feature/frontend/05-mobile-service-page` (build + diff-check PASS;
Playwright browser checks unavailable locally — owner authorized automerge 2026-10-27).
Next after spec 05: Don continues with specs 08 (contact + estimator + Nakuru info) and
16 (CI/previews), the only other Don-owned specs whose dependencies are merged; specs 13,
14, 15, 19, 20, 24, 25, 30, 31, 32, 34 (Don-owned) stay blocked on unmerged dependencies.
Spec 14 owns the canonical-domain decision; spec 07 owns per-course fee decisions.
Don-owned specs 06, 07, 09, 10, 11, 12, 33 belong to other members — never touched from this session.
One spec/branch/PR normally; 02b is a documented single exception — do not batch further without approval.

## 1. Status board — every feature, one by one, no batching

| ID | Feature | State | Evidence | Open gates |
|---|---|---|---|---|
| 01 | Landing/shared shell redesign + workflow/architecture planning | MERGED | main `cb5d263`; 57 checks green at merge | Done |
| 02b | Unified site revamp (owner-approved bundle exception) | MERGED | PR #5; merged to main | Remaining production/provider gates tracked below |
| 02 | Content, brand and asset truth | MERGED | PR #7; merged to main | Domain, course fees, portrait/media permission and provenance gates remain tracked |
| 03 | Web development service redesign | MERGED | PR #8; merged to main | Done |
| 04 | Software development service redesign | MERGED | PR #9; merged to main `cbb14f1` | Done |
| 05 | Mobile app development service redesign | IN PROGRESS | Complete on `feature/frontend/05-mobile-service-page` from main `cbb14f1`; `npm run build` PASS (0 errors; CSS 49.74 kB, JS 340.42 kB); `git diff --check` PASS; approved mobile bands `KES 400,000 – 700,000`, `KES 750,000 – 1,500,000`, `From KES 1,500,000` preserved via `pricing.mobile`; store-approval/timeline no-guarantee disclosures added; inquiry route preserved (WhatsApp + `/contact?service=mobile-apps`) | PR open; owner pre-authorized automerge; browser checks not run because Playwright is not installed locally |
| 05 | Mobile app development service redesign | PLANNED | Depends 02,03 | — |
| 06 | M-Pesa integration service redesign | PLANNED | Depends 02,03 | — |
| 07 | Programming classes and learning paths | PLANNED | Depends 01,02 | Class format/fee gate OPEN |
| 08 | Contact and inquiry experience | PLANNED | Depends 01,02 | Form/meeting config gate OPEN |
| 09 | Delivery process and collaboration page | PLANNED | Depends 01,02 | — |
| 10 | Portfolio discovery and filtering | PLANNED | Depends 01,02 | Claims/permission gate OPEN |
| 11 | Evidence-backed case study pages | PLANNED | Depends 10 | Claims/permission gate OPEN |
| 12 | Company story and team profiles | PLANNED | Depends 01,02 | Portrait/profile gate OPEN |
| 13 | Sitewide accessibility and navigation completion | PLANNED | Depends 03,04,05,06,07,08,09,10,11,12,33 | — |
| 14 | Search metadata, structured data and sharing | PLANNED | Depends 02,10,11,12 | Domain gate OPEN |
| 15 | Performance budgets and media delivery | PLANNED | Depends 03,04,05,06,07,08,09,10,11,12,14,33 | — |
| 16 | Reproducible checks and branch previews | PLANNED | Depends 01 | Hosting/budget/owner gate OPEN |
| 17 | Backend API foundation and contracts | PLANNED | Depends 02,16 | Hosting gate OPEN |
| 18 | Relational data foundation and migrations | PLANNED | Depends 17 | — |
| 19 | Durable inquiry capture and notifications | PLANNED | Depends 08,17,18 | Brevo sender/key/inbox gate OPEN |
| 20 | Staff identity and authorization | PLANNED | Depends 17,18 | Identity gate OPEN |
| 21 | Staff inquiry workspace | PLANNED | Depends 19,20 | — |
| 22 | Content editing and controlled publishing | PLANNED | Depends 10,11,12,18,20 | — |
| 23 | Managed portfolio media | PLANNED | Depends 18,20,22 | — |
| 24 | Private MCP read tools and resources | PLANNED | Depends 17,20,21,22 | Client/transport gate OPEN |
| 25 | MCP proposed writes with explicit approval | PLANNED | Depends 24 | — |
| 26 | Published knowledge retrieval for AI | PLANNED | Depends 22 | Provider/budget/data gate OPEN |
| 27 | Staff inquiry drafting assistant | PLANNED | Depends 21,26 | — |
| 28 | Optional public FAQ assistant pilot | PLANNED | Depends 13,26,27 | Demand gate OPEN |
| 29 | Inquiry retention, export and deletion operations | PLANNED | Depends 19,20,21 | Privacy/consent gate OPEN |
| 30 | Full-stack deployment, backups and recovery | PLANNED | Depends 17,18,19,20,29 | — |
| 31 | Operational visibility and AI/MCP cost controls | PLANNED | Depends 19,24,27,30 | — |
| 32 | Scaling and extraction decision review | PLANNED | Depends 15,30,31 | May conclude no new runtime needed |
| 33 | Graphics design service redesign | PLANNED | Depends 02,03 | — |
| 34 | Customer accounts & password auth (Clerk) | PLANNED | Depends 17,18,20 | App linked at build; secret-key gate OPEN |
| 35 | Service playbook sync & planning (accomplishment report, team assignments, contract sync) | MERGED | PR #6 | Done |

Rule: implement strictly in dependency order, one spec per branch. 02b is the single documented exception.

## 2. Delivered scope

- Baseline existing-project generator created only missing project-owned planning; original source
  layout, package manifest/lockfile and hosting configs remain intact.
- Redesigned hero, navigation, six service cards, M-Pesa feature, training, process, four-person
  team, closing CTA and footer. Existing nine routes and detail-page bodies preserved.
- Shared service/inquiry data, accessible disclosures, cleanup on unmount, skip links, hash/top
  scrolling, safe external-link attributes, initials for absent team portraits, existing logo favicon.
- Copied 23 supplied images and four upstream design reference documents; authored project-specific
  catalogue, design system, tokens, UI rules/registry and editable desktop/mobile HTML design board.
- User follow-ups expanded supporting documentation to 33 feature specs, eight logical ownership
  kits, modular full-stack architecture, data model, API/MCP/AI contracts, threat model and operations.
- Backend, database, admin, AI, MCP, hosting provisioning, mobile and microservices are NOT built.

## 3. Verification

### 3a. Feature 01 (merged to main `cb5d263`) — historical record

Tested source based on fetched origin/main `16f9a7a72351f2b4226b200aed1b6587f820586e`.
Exact working-source fingerprint: `af24480e670ea51a1e10a6437c8439ae9a34a76ace61179ac1edd08b0e67d19a`.
Per-file hashes: docs/design/evidence/source-snapshot.json; the feature commit contains this snapshot.

- `npm run build`: PASS; 48 modules; 0 errors; CSS 41.69 kB (8.94 gzip), JS 187.77 kB
  (54.28 gzip), HTML 1.03 kB. Two existing warning categories: caniuse-lite age and module-type inference.
- `PLAYWRIGHT_MODULE=/home/artkins/sababisha/node_modules/playwright CHROMIUM_PATH=/home/artkins/.cache/ms-playwright/chromium-1140/chrome-linux/chrome node scripts/verify-ui.cjs`:
  PASS, 57 grouped checks, including 45 combinations of nine routes × 360/768/1024/1440/1920px.
  Zero runtime page errors; no horizontal overflow; landing images loaded; menu keyboard/Escape/
  outside-click/route-close/resize, skip links, anchors and reduced motion verified.
- Playwright 1.63.0 with installed Chromium 130.0.6723.31. No project dependency installed.
- Seven primary text contrast pairs: PASS, minimum 5.22:1; not a full accessibility certification.
- Planning audit: 193 local links resolved; 33 specs; eight layer kits; dependency graph acyclic.
- Inspiration audit: 23 images byte-identical to provided source (SHA-256).
- `git diff --check`: PASS. Manifest, lockfile and hosting configuration diffs: empty.
- Browser captures: docs/design/evidence/landing-{360,768,1024,1440,1920}.png.

### 3b. Feature 02b unified revamp (this branch, 2026-09-30)
- `npm run build`: PASS; 102 modules; 0 errors. Warnings only: caniuse-lite age, lottie eval notice (module-type warning fixed via `"type": "module"`).
- `verify-ui.cjs`: PASS, 75 grouped checks (60 route×viewport: 12 routes × 360/768/1024/1440/1920 + theme/contrast/interaction). Zero runtime errors; no overflow; skip links, menu/disclosure keyboard, anchors, reduced motion (robust wait), theme toggle UI verified.
- Team detail fix: App.vue transition close-tag + TeamDetail import paths corrected after dev-server report; stale Vite processes killed so `:5173` is the tested server.
- GitHub verify 2026-09-30 (api.github.com): DonArtkins 69 repos/63 followers; masila002 35/21; kiki-glow 46/10 + portfolio URL; Ericnjuki254 6/20; chemii933 10/14.
- Favicon set (owner-supplied, public/favicon/) moved to public/ root so Vercel serves /favicon.ico, /apple-touch-icon.png, /site.webmanifest; manifest rebranded 404HubSpot; vercel.json SPA rewrites added. Per-route SEO via src/lib/seo.js (title/desc/canonical/OG/Twitter, auth noindex, JSON-LD); sitemap.xml + robots.txt; domain provisional (VITE_SITE_URL).
- Visibility/theme (bugs/UI-VISIBILITY.png): flow-bottom pair declared (#f8faf4 on #314d42); full theme token remap + fixed illustration palette; `verify-ui.cjs` asserts 7 pairs ≥ 4.5 in light AND dark via the real toggle UI. Measured — light min 5.22, dark min 8.80.
- Auth RETIRED 2026-09-30 per owner order: nav link, plugin, routes, pages, dep removed; `.env` Clerk keys removed; plan + lessons in spec 34 (fullstack phase).
- Contact + newsletter are BACKEND (owner order 2026-09-30): runtime Brevo code removed (`brevo.js`, `NewsletterForm`, `ResultModal`); Contact validates + hands prefilled inquiries to WhatsApp. Plan lives in spec 19 + `docs/integrations/BREVO*.md` + `emails/` templates.
- Courses from GitHub evidence: 12 tracks in `src/data/courses.js`, `/classes/:slug` detail pages (syllabus, mentor, repo evidence, prev/next); class index links every track. All 6 services cross-linked on every service detail page. 404 page with Lottie + actions, noindex.
- 404 page (`/:pathMatch(.*)*`): landing-styled lost-and-found with Lottie (`src/assets/lottie/notfound.json`), action buttons + popular destinations, noindex.
- Pricing bands provisional (search integration down, no Context7) — owner confirmation gates quotes.
- Evidence refresh 2026-09-30: `docs/design/evidence/landing-{360,768,1024,1440,1920}.png` regenerated; `npm run build` PASS (69 modules, 0 errors; CSS 38.54 kB / JS 325.19 kB + lottie 307.91 kB); `git diff --check` PASS.
- Owner-ordered addition 2026-09-30: vendored external IDE/agent skill packs under `.agents/skills/` (clerk-testing, clerk-vue-patterns, gsap-*, vue; 23 files, ~140K, docs/templates only, no secrets) per explicit `COMMIT AND PUSH THAT ONE TOO`. Not part of 02b spec scope; recorded here as deviation with owner approval.
- 2026-10-16: PR #5 (02b) and PR #6 (35) are merged to main. Spec 02 owner review confirmed brand name, phone/WhatsApp, email, Instagram/TikTok, current service descriptions, and listed service prices. Contact data already matched source; approved prices updated in the shared catalog. Course fees are removed from all public output until confirmed per course. Content and asset registers added; domain and media permission/provenance remain open.
- 2026-10-16 spec 02 verification: `npm run build` PASS (69 modules; existing caniuse-lite, lottie eval, and mixed static/dynamic import warnings); direct Node assertions PASS (contact values, all 13 approved service price entries, 12 unpublished course fees); `git diff --check` PASS. `scripts/verify-ui.cjs` was extended to check approved prices and ensure course fees are absent from listing, detail, and SEO output, but browser execution was not completed because Playwright is not installed/configured in this environment. No live form/social validation or permission clearance claimed.

### 3b2. Feature 05 mobile app development service redesign (branch, 2026-10-27)

- Branch cut from fetched `origin/main` at `cbb14f1` (includes merged PR #9 / spec 04).
- `npm run build`: PASS; 0 errors. Vite warnings unchanged (courses.js static/dynamic import note; caniuse-lite age; lottie eval notice). CSS 49.74 kB (10.08 gzip); JS 340.42 kB (120.00 gzip); HTML 3.00 kB. Built in ~2m.
- `git diff --check`: PASS.
- Content gates respected: only owner-approved mobile bands published (`KES 400,000 – 700,000`, `KES 750,000 – 1,500,000`, `From KES 1,500,000` — rendered from `pricing.mobile`); no course fees; no fabricated case studies — concept art visibly labelled "An illustrative concept — not a client project or app screenshot"; store approval and release timelines explicitly not guaranteed (hero copy, testing section note, pricing note, FAQ).
- Team-capability framing: cross-platform Flutter is the evidenced approach (built + taught); native Android (Kotlin) and native iOS (Swift) presented as scoped options; approach decided in discovery. No unsupported platform promise; no native app or `mobile/` runtime tree created.
- Accessibility structure: semantic `ol` process, `ul` feature lists, `details/summary` FAQ, `aria-hidden` decorative art with the illustrative disclosure kept as real text, inquiry links keep `noopener noreferrer` with messages encoded by the shared `whatsappUrl`.
- Inquiry route preserved: WhatsApp deep link + `Request a scoped quote` → `/contact?service=mobile-apps` (confirm-only prefill; Contact.vue mapping lands with spec 08, this session).
- Browser checks NOT run: Playwright not installed in this environment (same limitation recorded for spec 04). `scripts/verify-ui.cjs` price assertions for `/services/mobile-apps` remain satisfied by construction (exact `pricing.mobile` strings), but this is a code-level statement, not a browser run — recorded as an open operator gate.
- Tracker rows 04→MERGED (correction: PR #9 merged `cbb14f1` proves it; not Francis's code — status-board bookkeeping only) and 05→complete; execution chain updated.

## 4. Contract synchronization and deviations

Updated public-navigation contract, canonical UI tokens/rules/registry, owner and consumer context,
feature spec and README. Source paths/services/contact destinations synchronized via src/data/site.js.
Route shapes unchanged; new scroll behavior documented. Existing detail styles remain scoped apart.
Future platform contracts are explicitly drafts, not implemented APIs. Layer kits route status here.
2026-10-16: service-playbook sync branch `docs/web/35-service-playbook-sync` recorded — report,
team assignments, planning spec 35, tracker row, AGENTS hard rules R1–R4; NO CODE changed.
No baseline .baseline/Husky/CI workflow tree injected; baseline tooling remains in its source repo.
No Figma file created: editable local HTML board and actual screenshots provide review artifacts.
Official documentation fallback used because no Context7 MCP tool was available; sources are in spec.

## 5. Open limits and next action

Spec 02 open gates: confirm production canonical domain (spec 14); confirm course-specific fees (spec 07); obtain team portrait/avatar permissions and provenance for all media before asserting clearance. Do not treat the Vercel preview or `.co.ke` fallback as owner-confirmed canonical domain.
Production/provider gates remain: Brevo sender/key/inbox + Meet ID; `CLERK_SECRET_KEY` + `clerk auth login`/`clerk link` (spec 19/34); production deployment not run.
Existing Contact form/meeting placeholders remain (demo until IDs set); LanguageCard phone mismatch FIXED in 02b via shared whatsappUrl.
External social destinations not live-verified; manual screen-reader/Firefox/WebKit checks not run.
No backend, database, MCP, AI, retention, security or deployment tests are claimed as passing.
