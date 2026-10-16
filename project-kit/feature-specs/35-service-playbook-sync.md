# 35 — Service Playbook sync (planning only)

Status: PLANNING · Branch: `docs/web/35-service-playbook-sync` from `origin/main` `57da375`.
Owner: PM (this session). One spec, one branch, one PR; implementation = NO CODE.

## Outcome
Sync the `404HubSpot_Service_Architecture_Playbook.pdf` (research/) against every
planning file, produce an accomplishment report with implemented-vs-gap
comparison, update docs/trackers/specs, run gates, push branch + PR, wait for
review. Zero runtime code changes.

## Files allowed (NO-CODE allowlist)
- `research/*` — playbook PDF + extracted TXT + README only
- `docs/planning/*` — report, team assignments, roadmap overlay, open-questions rows
- `docs/architecture/SYSTEM-DESIGN.md`, `docs/contracts/FUTURE-PLATFORM.md`, `docs/architecture/DATA-MODEL.md` — contract sync notes only
- `project-kit/context/progress-tracker.md` — status board + chain rows
- `project-kit/feature-specs/README.md` + `35-service-playbook-sync.md` — spec index
- `project-kit/layers/*/README.md` — ownership pointers
- `AGENTS.md` — hard rules R1–R4
- `docs/README.md`, `docs/decisions/README.md` — reading map + decision record

## Dependencies
None (planning-only). No runtime dependency.

## Acceptance criteria
- [ ] Playbook PDF staged in `research/`
- [ ] Extracted TXT audit trail present (`pdftotext -layout`)
- [ ] Report `docs/planning/35-SERVICE-PLAYBOOK-ACCOMPLISHMENT-REPORT.md` with:
    implemented vs gap comparison (G1–G16) + architectural benefit + open gates
- [ ] Team assignments `docs/planning/TEAM-ASSIGNMENTS.md` with 5 owners +
    hard rules R1–R4 + deadlock protocol
- [ ] Planning spec this file + spec index row
- [ ] Tracker chain + status board row recorded
- [ ] `npm run build` PASS (69 modules baseline unchanged)
- [ ] `git diff --check` PASS
- [ ] Branch pushed to GitHub as `docs/web/35-service-playbook-sync`
- [ ] Pull request opened; awaiting owner review before any implementation

## Verification commands
- `npm run build` — production build (expected PASS, 69 modules, 0 errors)
- `git diff --check` — whitespace check (expected PASS)
- `git status --short` — scope audit (only docs/research/project-kit/AGENTS.md)

## Open gates (block implementation)
1. Price floors + launch tiers (spec 02 Decide gate)
2. Cohort capacity/mode/internships (spec 07)
3. Crawlability Search-Console confirm + Vue SSR/prerender choice (spec 14)
4. Weekly-metrics owner (spec 31)
5. PR review on this branch — no implementation branch starts until merged
