# Portfolio evidence register

Owner: Eric Njuki (spec 10/11). Review date: 2026-11-10.
Companion to the [content register](./CONTENT-REGISTER.md). This file records
what each `/work` entry is based on and what is still unapproved.

## Method

Every published entry was written from the project's own public repository —
its README, file structure and stated measurements — read on **2026-11-10**.
Nothing is written from memory, and no client name, testimonial, revenue figure
or screenshot is republished.

The rule used for publication:

1. the repository is public and owned by the named team member;
2. there is enough written documentation to describe the problem, the build and
   the outcome without inventing either;
3. any number is either quoted as the author's own figure or left out.

## Published entries

| Slug | Project | Builder | Repository | Language | Permission basis |
|---|---|---|---|---|---|
| `sycx` | SycX | Don Artkins (`DonArtkins`) | `DonArtkins/SycX`, `DonArtkins/SycX-API` | Dart, Python | Public repositories published by the credited team member; no third-party media republished |
| `resusensei` | ResuSensei | Glory Kinya (`kiki-glow`) | `kiki-glow/ResuSensei` | Python | Public repository published by the credited team member |
| `word-of-truth` | Word of Truth | Glory Kinya (`kiki-glow`) | `kiki-glow/Word-Of-Truth` | TypeScript | Public repository published by the credited team member |
| `parrot-blackbox` | parrot-blackbox | Don Artkins (`DonArtkins`) | `DonArtkins/parrot-blackbox` | JavaScript | Public repository published by the credited team member |
| `pet-shelter-api` | Pet Shelter API | Glory Kinya (`kiki-glow`) | `kiki-glow/pet_shelter_api` | TypeScript | Public repository published by the credited team member; sample data only |

## Attributed measurements

Only one entry contains figures. They are the author's own README measurements
and are labelled as such on the page; 404HubSpot did not reproduce them.

| Project | Claim as published | Source |
|---|---|---|
| `parrot-blackbox` | 17.4 GiB subvolume sent as ~13 GiB compressed in about two minutes; incrementals 100 MB–2 GB instead of 35+ GiB; "10–50× less bandwidth" | Repository README, retrieved 2026-11-10 |

No other outcome on `/work` is quantitative. Every other outcome is labelled
qualitative with its source and retrieval date.

## Held back (and why)

| Slug | Project | Builder | Reason |
|---|---|---|---|
| `jcsm` | JCSM | Christine Jemutai | Church ministry site. Repository and live demo are public, but written permission from the ministry to feature it as agency work is not recorded. |
| `gitswitch` | gitswitch | Don Artkins | No README or usage documentation, so there is no written evidence to build a case study from. |
| `wildlife-gurdians` | Wildlife Guardians | Eric Njuki | Repository still carries the default Vue starter README; scope and outcomes cannot be documented from evidence. |

Held-back slugs are recognised by the router and render the "not published"
state with `noindex`. They are never listed on `/work`.

## Facts to re-check before any claim changes

- **Repository descriptions can change.** The Word of Truth entry describes a
  web PWA with an Express API (per its README). The team-page summary still
  calls it an offline desktop app; the team profile copy is owned by spec 12 and
  was deliberately not edited here.
- **Live demos were not visited.** Only repository documentation was read, so no
  entry claims a working deployment or uptime.
- **Star/fork counts were not republished.** The earlier team-profile snapshot
  in `src/data/site.js` is dated 2026-09-30 and drifts; the portfolio avoids
  live counts entirely.

## Open gates

1. **Agency-portfolio approval.** Written approval to feature these repositories
   as 404HubSpot portfolio work is not recorded. The current publication basis
   is public authorship plus attribution. If the owner wants stricter consent,
   unpublish the affected slugs in `src/data/projects.js` (`published: false`).
2. **Screenshots and media.** No project screenshots are copied onto this site;
   the covers are generated compositions. Real screenshots need media permission
   and an accessible gallery, tracked with spec 23's managed media work.
3. **Client/third-party work.** Entries that imply a client relationship (JCSM)
   stay unpublished until that client's permission is recorded here.
