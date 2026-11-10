# 10 — Portfolio discovery and filtering

Status: PLANNED; not implemented in feature 01. Owner: frontend.
Branch: `feature/frontend/10-portfolio-index` — create from freshly fetched `origin/main` only after dependencies merge.
One root spec, one feature branch, one PR; affected layers share this vertical outcome.

## Problem and outcome

Let prospects explore real work by service category without fabricated portfolio entries.

## Dependencies and readiness

Required merged specs: 01,02. Read [architecture](../../docs/architecture/SYSTEM-DESIGN.md),
[roadmap](../../docs/planning/IMPLEMENTATION-ROADMAP.md), root tracker and affected contracts.
Before code: At least one approved publishable project, otherwise hold release. Unresolved external facts remain explicit gates; never fabricate them.
Confirm current provider/library versions from official sources at implementation and record date.

## Owned files and layer boundaries

Proposed files: src/views/Work.vue; src/components/portfolio/ProjectCard.vue; src/data/projects.js; src/router/index.js.
Create only files needed by this outcome. Preserve existing source layout and public URLs.
Owner/consumer documents update together; do not introduce unrelated layer scaffolding.

## Behavior and implementation sequence

1. Introduce /work with approved project cards, cover images, role/scope and service filters.
2. Keep filter state in URL query parameters; show all/filtered-empty states with a reset action.
3. Unknown filters fall back safely; avoid clickable case-study links until a published detail exists.

## Data, contracts and permissions

Project summary: id, slug, title, services, approved cover/alt, summary, published detail flag. Navbar/footer additions synchronize public-navigation contract.
Record schema/interface changes in the canonical contract and update consumers in the same PR.
No secrets or production user data in fixtures. All privileged actions authorize on the server.

## Acceptance criteria

- [ ] Every card corresponds to approved evidence and publication permission.
- [ ] Filter URLs are shareable and browser-back restores selection.
- [ ] Empty results provide a clear recovery action.
- [ ] Grid and images are responsive and keyboard accessible.

## Verification and evidence

Build; filter/query/back-navigation tests; empty-state test; asset permission audit.
Before implementation, register exact executable commands for newly introduced tooling in the
stack contract and this spec. Run existing `npm run build` and `git diff --check` where frontend
changes apply. Record revision, environment, pass/fail/skip counts and unavailable operator gates.
For visible UI, capture relevant mobile/desktop states including failures; for APIs/tools, include
negative access and failure tests. Do not claim unrun integration or provider checks as passed.

## Rollout, rollback and completion

Keep /work unpublished until content readiness; route rollback preserves redirects if already public.
Update the root tracker and any changed layer responsibility/contract before pushing this branch.
Present concrete evidence for review; do not merge or begin the next spec without the user's decision.

## Implementation record — 2026-11-10

Status: **IMPLEMENTED** on `feature/frontend/10-11-portfolio-and-case-studies` (cut from
`origin/main` at `4ed6850`). Specs 10 and 11 shipped in one branch at the user's explicit
request; recorded as a deviation in the root tracker. Owner: Eric (frontend).

### What changed

- `src/data/projects.js` — project summaries (`id`, `slug`, `title`, `services`, `cover` +
  `cover.alt`, `summary`, `published`, `publishedDetail`) plus `heldBack` slugs, filter list,
  `normaliseFilter`/`projectsFor`/`findProject` helpers. Five published entries, three held back.
- `src/views/Work.vue` — `/work` with service filters bound to `?service=`, live result count,
  unknown-filter notice, filtered-empty state with reset, and a "what we publish" panel.
- `src/components/portfolio/ProjectCard.vue` — cover composition, builder attribution, service
  tags, repository link, case-study link only when a published detail exists.
- `src/router/index.js` — `/work` and `/work/:slug`; `src/lib/seo.js` — Work metadata.
- `src/components/GlobalNav.vue`, `src/components/Footer.vue`, `docs/contracts/public-navigation.md`
  — "Work" entry point and the portfolio route/filter contract.
- `src/styles/portfolio.css` — page-scoped styles on existing theme tokens.

### Acceptance criteria

| Criterion | Result | Evidence |
|---|---|---|
| Every card corresponds to approved evidence and publication permission | Met as attributed public authorship | Each card links to the repository it was written from; basis and open consent gate recorded in [portfolio evidence register](../../docs/content/PORTFOLIO-EVIDENCE.md) |
| Filter URLs are shareable and browser-back restores selection | Met | `verify-ui.cjs`: filter click → `?service=software-development` with 2 cards; `goBack()` → `/work` with 5 cards; direct load of a filtered URL selects it |
| Empty results provide a clear recovery action | Met | `?service=graphics-design` renders `.work-empty` and "Show all work" returns to `/work`; unknown `?service=design` falls back to all work with a notice |
| Grid and images are responsive and keyboard accessible | Met | 5 viewports × routes cover `/work`; filters are `<button aria-pressed>` activated by Enter; covers are `role="img"` with alt text |

### Not done, on purpose

- No screenshots or product imagery: covers are generated compositions. Media permission and an
  accessible gallery remain open (tracked with spec 23).
- No client names, testimonials or metrics. Only one entry carries numbers, quoted as the
  author's own README measurements.

### Verification

- `npm run build` PASS; `git diff --check` PASS.
- `BASE_URL=http://127.0.0.1:4173 node scripts/verify-ui.cjs` PASS — 220 grouped checks,
  155 route×viewport, 0 runtime errors (Chromium 138.0.7204.23, Playwright 1.53.1).
- Evidence captures: `docs/design/evidence/work-{360,1440}.png`, `work-empty-{360,1440}.png`.

### Open gate

Written approval to feature these repositories as 404HubSpot portfolio work is not recorded.
Publication currently rests on public authorship plus attribution; see the evidence register for
the exact basis and how to unpublish.
