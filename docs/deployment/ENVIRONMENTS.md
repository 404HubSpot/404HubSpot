# Environment design

## Provider decision (resolved — spec 16)

**Vercel free tier** is the chosen hosting provider for production and branch previews.
`vercel.json` is the canonical deploy config (`buildCommand: npm run build`,
`outputDirectory: dist`, SPA rewrite to `/index.html`). `netlify.toml` is retained only as a
historical reference and is not used for deployment.

## Environments

- **Local:** existing Vite dev server (`npm run dev`). No production mail, MCP/AI secrets, or
  database credentials.
- **Preview:** branch builds with test data. Deployed to Vercel preview URL on every pull
  request to `main`. Preview identifies the revision and environment (Vercel preview URL
  embeds the commit SHA and branch). No production mail, MCP/AI secrets, or database
  credentials. No copying live lead data to preview.
- **Production:** reviewed artifact and scoped runtime secrets. Published only through the
  accepted release process (merge to `main` after CI passes). Future API gets isolated
  preview/prod database identities; no copying live lead data to preview.

## CI policy (`.github/workflows/ci.yml`)

On every push to feature branches and every pull request to `main`:
1. `npm ci` — install from lockfile.
2. `git diff --check` — reject whitespace errors.
3. `npm run build` — Vite production build must exit 0.
4. Start Vite preview server on port 4173; run `scripts/verify-ui.cjs` against it
   (Chromium, headless). UI failures exit non-zero and block promotion.
5. On PRs: deploy preview to Vercel via `amondnet/vercel-action@v25` only after all
   checks pass. Failed checks block promotion under repository policy.

## Credentials

Store credentials in provider/CI secrets (`VERCEL_TOKEN`, `VERCEL_ORG_ID`,
`VERCEL_PROJECT_ID`), never in `VITE_` variables or repository files. Workflow logs must
not print secret values. Domain, budget, region, retention and provider choices are no
longer open gates — resolved by this spec.

## Verification record (spec 16)

- `npm run build`: PASS (exit 0), fresh checkout of `feature/infra/16-ci-and-preview`
  from `origin/main` at `5c0193c`.
- `git diff --check`: PASS (exit 0).
- `scripts/verify-ui.cjs` against local preview server: PASS — all route/viewport
  checks and approved-price assertions pass; `docs/design/evidence/browser-results.json`
  written.
- Intentionally failing check: PASS (a deliberately broken assertion exits non-zero,
  confirming failed checks block promotion); reverted immediately.
- Secrets absent: no secret values appear in workflow files, artifacts, or browser bundles.
