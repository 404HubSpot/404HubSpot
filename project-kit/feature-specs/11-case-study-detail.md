# 11 — Evidence-backed case study pages

Status: PLANNED; not implemented in feature 01. Owner: frontend.
Branch: `feature/frontend/11-case-study-detail` — create from freshly fetched `origin/main` only after dependencies merge.
One root spec, one feature branch, one PR; affected layers share this vertical outcome.

## Problem and outcome

Present a complete project story that supports a prospective client decision.

## Dependencies and readiness

Required merged specs: 10. Read [architecture](../../docs/architecture/SYSTEM-DESIGN.md),
[roadmap](../../docs/planning/IMPLEMENTATION-ROADMAP.md), root tracker and affected contracts.
Before code: Approved customer story and media permission. Unresolved external facts remain explicit gates; never fabricate them.
Confirm current provider/library versions from official sources at implementation and record date.

## Owned files and layer boundaries

Proposed files: src/views/CaseStudy.vue; src/data/projects.js; src/router/index.js; docs/content/CONTENT-REGISTER.md.
Create only files needed by this outcome. Preserve existing source layout and public URLs.
Owner/consumer documents update together; do not introduce unrelated layer scaffolding.

## Behavior and implementation sequence

1. Add /work/:slug with context, challenge, team role, implementation, outcomes and relevant inquiry.
2. Attribute measured results to evidence and dates; label qualitative outcomes accurately.
3. Use accessible galleries and a missing/unpublished case-study state; avoid loading private drafts.

## Data, contracts and permissions

Published case-study fields follow the future CaseStudy entity; stable slug redirects on changes.
Record schema/interface changes in the canonical contract and update consumers in the same PR.
No secrets or production user data in fixtures. All privileged actions authorize on the server.

## Acceptance criteria

- [ ] Each outcome has evidence or is explicitly qualitative.
- [ ] Unknown and draft slugs show a proper not-found experience.
- [ ] Gallery controls work without hover and images have captions/alt text.
- [ ] Related service and inquiry links carry useful context.

## Verification and evidence

Build; valid/invalid/draft slug tests; gallery keyboard checks; metadata/content review.
Before implementation, register exact executable commands for newly introduced tooling in the
stack contract and this spec. Run existing `npm run build` and `git diff --check` where frontend
changes apply. Record revision, environment, pass/fail/skip counts and unavailable operator gates.
For visible UI, capture relevant mobile/desktop states including failures; for APIs/tools, include
negative access and failure tests. Do not claim unrun integration or provider checks as passed.

## Rollout, rollback and completion

Unpublish by explicit content status; preserve public redirects when a slug is retired.
Update the root tracker and any changed layer responsibility/contract before pushing this branch.
Present concrete evidence for review; do not merge or begin the next spec without the user's decision.

## Implementation record — 2026-11-10

Status: **IMPLEMENTED** on `feature/frontend/10-11-portfolio-and-case-studies` (same branch as
spec 10, at the user's explicit request; deviation recorded in the root tracker).

### What changed

- `src/views/CaseStudy.vue` — `/work/:slug` with context, challenge, role, implementation steps,
  outcomes (each with its evidence basis), an explicit "what this does not claim" block, a facts
  panel, an evidence panel (repository, language, README retrieval date, permission basis) and
  service + inquiry links.
- `src/data/projects.js` — case-study fields per project, following the future `CaseStudy`
  entity's shape (slug, challenge, work, outcomes, publication status).
- `src/lib/seo.js` — per-case-study title/description; unpublished or unknown slugs are `noindex`.
- `docs/content/PORTFOLIO-EVIDENCE.md` — evidence trail, attributed measurements, held-back list.
- `docs/content/CONTENT-REGISTER.md` — portfolio rows and the remaining approval gates.

### Acceptance criteria

| Criterion | Result | Evidence |
|---|---|---|
| Each outcome has evidence or is explicitly qualitative | Met | Every outcome carries a `basis` string rendered under it; the only quantitative claims are the author's README measurements, labelled "not independently reproduced" |
| Unknown and draft slugs show a proper not-found experience | Met | `/work/gitswitch` (held back) and `/work/no-such-project-404-check` render the not-published state with `noindex`; asserted in `verify-ui.cjs` |
| Gallery controls work without hover and images have captions/alt text | **Not applicable yet** | No approved screenshots exist, so no gallery ships. Covers are generated compositions with alt text. Gallery is deferred to spec 23 media work |
| Related service and inquiry links carry useful context | Met | Service link → `/services/<slug>`; quote link → `/contact?service=<slug>` (prefill asserted); WhatsApp message names the project |

### Verification

- `npm run build` PASS; `git diff --check` PASS.
- `BASE_URL=http://127.0.0.1:4173 node scripts/verify-ui.cjs` PASS — 220 grouped checks,
  0 runtime errors. Per-slug assertions: facts panel, ≥5 story sections, ≥2 outcomes, GitHub
  evidence link with `rel=noopener`, and a `retrieved 2026-11-10` basis on every entry.
- Evidence captures: `docs/design/evidence/case-study-{360,1440}.png`.

### Deviations and open gates

- **Gallery not built.** Building gallery controls with no approved images would be scaffolding
  for content that does not exist; the acceptance criterion is recorded as not applicable until
  media permission lands.
- **Slug redirects not implemented.** No slug has been retired yet; the contract in
  `docs/contracts/public-navigation.md` requires an explicit redirect when one is.
- **Agency-portfolio approval** remains open (same gate as spec 10).
