# Research inputs

Source PDFs and upstream briefs that feed planning. Planning-only files —
they never ship runtime code.

## Files

- `404HubSpot_Service_Architecture_Playbook.pdf` — 12 pages, A4, 71,401 bytes
  (ReportLab, 2026-10-15 EAT). Title: *404HubSpot Service Architecture &
  Growth Playbook*. Subject: *Competitor research, pricing and service paths*.
  Source of truth for: five service pillars (BUILD / INTEGRATE / APPS &
  SYSTEMS / ACADEMY / CARE), four-rung ladder per pillar, Kenya-market price
  bands, worked Commerce quote (KSh 125,000 / 5 weeks / 50-30-20), Academy
  ladder (Spark 3.5k → Marathon 85k), team-role mapping (§08), website update
  plan (§09: home split, services hub, 5 service pages, pricing page,
  academy, case studies, team skill tags, guides/blog, contact), crawlability
  warning (SPA shell — confirm Search Console, plan SSR/prerender),
  90-day roadmap (Decide 1-7 → Publish 8-21 → Prove 22-45 → Scale 46-90),
  weekly metrics (enquiries, quote-to-win, avg project value, cohort fill,
  care attach), and 16 public sources (Bonnie, Moringa, McTaba, Achi, TecIT,
  Hostiko, Kolonell, Mackdish, CMARIX, Nakuru County). All figures marked
  *Proposed* are recommendations, not quotes — re-check before publishing.
  Extracted text: `research/404HubSpot_Service_Architecture_Playbook.txt`
  (generated via `pdftotext -layout`, deterministic). Full gap analysis:
  `docs/planning/35-SERVICE-PLAYBOOK-ACCOMPLISHMENT-REPORT.md`.
- `Brevo-Email-Setup-Guide.pdf` — transactional-mail setup reference for
  spec 19 (server-side only; browser never holds `BREVO_API_KEY`).
- `project-brief.md` — original landing-revamp request (baseline adoption,
  Griot references, one feature per branch).

## Rules

- Research PDFs are inputs only. Implementation happens only via an owning
  feature spec on its own branch after owner merge of dependencies.
- Prices marked *Proposed* in the Playbook stay provisional until spec 02
  owner confirmation — never publish as fixed quotes.
- Team role slots (§08) were role-based (page could not be auto-read);
  names are filled from `src/data/site.js` (5 verified members) in the
  accomplishment report — do not invent members.
