// Portfolio catalogue — spec 10 (discovery) and spec 11 (case study detail).
//
// Every entry is grounded in a public repository owned by a named team member,
// and each claim below traces to that repository's README or structure, read on
// the retrieval date recorded per project. There are deliberately NO client
// names, testimonials, screenshots, revenue figures or outcome metrics beyond
// what a repository states, because none of that has recorded permission.
//
// Cover visuals are generated compositions (tone + monogram), not screenshots —
// media permission for project screenshots is an open gate (see
// docs/content/PORTFOLIO-EVIDENCE.md).

export const portfolioSnapshot = {
  source: "Public GitHub repositories and their READMEs",
  retrievedAt: "2026-11-10",
  note:
    "Links are to the public repository. Descriptions were written from the " +
    "repository README on the retrieval date; they are not client engagements.",
};

// Filters map to public service slugs so a card, a filter and an inquiry route
// all speak the same vocabulary (/services/<slug>, /contact?service=<slug>).
export const portfolioFilters = [
  { id: "all", label: "All work" },
  { id: "web-development", label: "Web development" },
  { id: "software-development", label: "Software development" },
  { id: "mobile-apps", label: "Mobile apps" },
  { id: "m-pesa-integration", label: "M-Pesa integration" },
  { id: "graphics-design", label: "Graphics design" },
];

export const projects = [
  {
    id: 1,
    slug: "sycx",
    title: "SycX",
    subtitle: "An AI study companion for long academic reading",
    owner: "don-artkins",
    role: "Engineer — Flutter client and Flask API",
    services: ["mobile-apps"],
    published: true,
    publishedDetail: true,
    summary:
      "A Flutter app that turns an uploaded document into a summary with visual aids — and a separate Flask API that does the summarising.",
    cover: {
      tone: "lilac",
      mark: "SX",
      alt: "Generated cover for SycX: the monogram SX on a lilac panel with a document outline.",
    },
    repos: [
      {
        name: "DonArtkins/SycX",
        url: "https://github.com/DonArtkins/SycX",
        language: "Dart",
        readmeRetrieved: "2026-11-10",
      },
      {
        name: "DonArtkins/SycX-API",
        url: "https://github.com/DonArtkins/SycX-API",
        language: "Python",
        readmeRetrieved: "2026-11-10",
      },
    ],
    stack: ["Flutter", "Dart", "Python", "Flask", "REST"],
    permissionBasis:
      "Both repositories are public work published by the team member credited. No client material, private data or third-party media is republished here.",
    context:
      "University students work through far more reading than a week allows: lecture notes, PDFs and long academic articles. SycX takes the reading side of that problem — accept a document, return something shorter, and show the student why the shorter version is usable.",
    challenge:
      "Summarising cannot happen on the phone, so the product is two codebases: a cross-platform client and a service that owns the AI work. The client also has to carry a real document flow — upload, wait, read, respond — rather than a single text box, and the API has to survive being called by an app on a slow connection.",
    implementation: [
      "Flutter client split into config, models, screens, services, utils and widgets so screens stay thin.",
      "Document upload and management, then an async request to the summarisation service.",
      "Summary and generated visual aids rendered in one reading view.",
      "A feedback step so students can rate what came back and improve later runs.",
      "Companion Flask REST API with configurable rate limiting and CORS, structured for ML model integration.",
      "One Dart codebase targeting iOS and Android.",
    ],
    outcomes: [
      {
        text: "A working cross-platform app with a documented module layout and a Flutter test setup.",
        basis: "Qualitative — repository README and project structure, retrieved 2026-11-10.",
      },
      {
        text: "A reusable API template with rate limiting and CORS that is ready for an ML model to be dropped in.",
        basis: "Qualitative — SycX-API README, retrieved 2026-11-10.",
      },
    ],
    limits:
      "No store listing, adoption figures or measured summarisation quality are published here. This is an open-source build, not a client engagement with results attached.",
  },
  {
    id: 2,
    slug: "resusensei",
    title: "ResuSensei",
    subtitle: "A resume analyzer that explains the score",
    owner: "glory-kinya",
    role: "Fullstack developer — Vue interface and Python API",
    services: ["web-development"],
    published: true,
    publishedDetail: true,
    summary:
      "Upload a CV and get a score, a section-by-section breakdown and a list of fixes — instead of finding out after the rejection.",
    cover: {
      tone: "mint",
      mark: "RS",
      alt: "Generated cover for ResuSensei: the monogram RS on a mint panel with a score ring.",
    },
    repos: [
      {
        name: "kiki-glow/ResuSensei",
        url: "https://github.com/kiki-glow/ResuSensei",
        language: "Python",
        readmeRetrieved: "2026-11-10",
      },
    ],
    stack: ["Vue", "Tailwind CSS", "Python", "REST", "Chart.js"],
    permissionBasis:
      "Public repository published by the team member credited. The repository's own screenshots are not copied onto this site.",
    context:
      "Most candidates find out their CV is weak after the rejection, when the feedback is already unavailable. ResuSensei puts the check first: upload a resume, get a score, see which sections lost points, and read what to change.",
    challenge:
      "The difficult parts sit upstream of the AI. Uploaded files have to become clean text before anything can be scored, the scoring has to mean something across very different resumes, and the upload endpoint has to fail safely on the wrong file type or size.",
    implementation: [
      "Vue and Tailwind upload interface with one clear analyse action.",
      "POST /analyze accepts a PDF or text file and returns structured feedback: score, breakdown and recommendations.",
      "Text extraction and normalisation pipeline before scoring.",
      "Weighted scoring across keyword relevance, resume structure and content quality.",
      "Chart.js doughnut for the overall score, with the section breakdown underneath.",
      "Axios client for the browser-to-API call, plus file type and size validation.",
    ],
    outcomes: [
      {
        text: "An end-to-end flow from upload to a scored, explained result, documented with an explicit request and response contract for /analyze.",
        basis: "Qualitative — README API section, retrieved 2026-11-10.",
      },
      {
        text: "A named and honest backlog: authentication and dashboards, deeper NLP, and containerised deployment are listed as future work, not delivered features.",
        basis: "Stated future work in the README, retrieved 2026-11-10.",
      },
    ],
    limits:
      "The score comes from a weighted heuristic described in the README, not a published model evaluation. Treat it as guidance, not an official ATS verdict — and the README does not claim otherwise.",
  },
  {
    id: 3,
    slug: "word-of-truth",
    title: "Word of Truth",
    subtitle: "Serving a large text corpus without getting in the reader's way",
    owner: "glory-kinya",
    role: "Fullstack developer — monorepo, API and deployment",
    services: ["web-development"],
    published: true,
    publishedDetail: true,
    summary:
      "A Bible reading web app built as a TypeScript monorepo: React front end, Express API over extracted JSON, Docker deployment.",
    cover: {
      tone: "sand",
      mark: "WT",
      alt: "Generated cover for Word of Truth: the monogram WT on a sand panel with stacked page rules.",
    },
    repos: [
      {
        name: "kiki-glow/Word-Of-Truth",
        url: "https://github.com/kiki-glow/Word-Of-Truth",
        language: "TypeScript",
        readmeRetrieved: "2026-11-10",
      },
    ],
    stack: ["TypeScript", "React", "Vite", "Node.js", "Express", "Docker"],
    permissionBasis:
      "Public repository published by the team member credited. Scripture text is not republished on this site.",
    context:
      "A reading app is really one problem in a nice coat: serve a large, structured corpus quickly and keep the interface out of the way while someone reads.",
    challenge:
      "Scripture data arrives as source text rather than an API. Someone has to extract it into a queryable shape, serve it, and keep configuration sane across development, staging and production — without the reader waiting on any of that machinery.",
    implementation: [
      "Monorepo with backend/ (Node, Express, TypeScript) and frontend/ (React, Vite, TypeScript).",
      "Bible routes and a health endpoint, with a service layer between routes and data.",
      "An extract-bible script that turns source text into JSON data files the API serves.",
      "An environment loader so development, staging and production read configuration the same way.",
      "Multi-stage Dockerfile and docker-compose for a repeatable deployment.",
      "CORS configured for cross-origin calls; both apps run together in development.",
    ],
    outcomes: [
      {
        text: "A documented REST API for verse access, with API.md kept alongside the code.",
        basis: "Qualitative — repository README and file index, retrieved 2026-11-10.",
      },
      {
        text: "One containerised build that can ship the front end and the API together.",
        basis: "Qualitative — Dockerfile and docker-compose in the repository.",
      },
    ],
    limits:
      "The corpus ships with the application and there are no user accounts or sync between devices. Performance is not benchmarked in the repository, so none is claimed here.",
  },
  {
    id: 4,
    slug: "parrot-blackbox",
    title: "parrot-blackbox",
    subtitle: "Backups that survive the reasons backups fail",
    owner: "don-artkins",
    role: "Engineer — CLI, daemon and storage-pool logic",
    services: ["software-development"],
    published: true,
    publishedDetail: true,
    summary:
      "A Node CLI and background daemon for Parrot OS: scheduled snapshots, multi-cloud storage, resumable uploads and a documented restore path.",
    cover: {
      tone: "rose",
      mark: "PB",
      alt: "Generated cover for parrot-blackbox: the monogram PB on a rose panel with a flight-recorder waveform.",
    },
    repos: [
      {
        name: "DonArtkins/parrot-blackbox",
        url: "https://github.com/DonArtkins/parrot-blackbox",
        language: "JavaScript",
        readmeRetrieved: "2026-11-10",
      },
    ],
    stack: ["Node.js", "BTRFS", "rclone", "Timeshift", "systemd", "zstd"],
    permissionBasis:
      "Public repository published by the team member credited. The README contains the author's own machine-specific measurements, which are attributed as such.",
    context:
      "A working Linux install is a lot of unpaid configuration, and losing it means rebuilding from memory. parrot-blackbox is the black-box recorder for that machine: snapshot the system, keep the copy somewhere other than the laptop, and make recovery a documented sequence instead of panic.",
    challenge:
      "Backups fail in boring, realistic ways. The laptop is asleep or offline at the scheduled hour. The upload dies with the power. One cloud account fills up. A snapshot cannot read root-owned files. The tool has to handle all of that without anyone watching.",
    implementation: [
      "An install wizard that checks for rclone, timeshift, git and curl and installs whatever is missing.",
      "A scheduled weekly Timeshift snapshot, uploaded to the cloud storage pool.",
      "v2 backups use native BTRFS send/receive streams, compressed with zstd and optionally AES-256 encrypted, piped directly to rclone with no intermediate temp files.",
      "Incremental runs send block-level differences after the first full stream.",
      "Journalled jobs: runs missed while offline execute oldest-first once the network returns, and interrupted uploads resume instead of restarting.",
      "A lock file and atomic state writes so two jobs cannot collide.",
      "A storage pool where each backup gets a manifest, placement picks the account with the lowest projected usage, and files split at chunk boundaries when they do not fit.",
      "Retention rules that keep the pool from filling, plus a restore path that applies incrementals in parent-chain order.",
    ],
    outcomes: [
      {
        text: "First BTRFS backup: a 17.4 GiB subvolume sent as roughly 13 GiB compressed, in about two minutes.",
        basis:
          "Author-reported measurement in the README, retrieved 2026-11-10. Not independently reproduced by 404HubSpot.",
      },
      {
        text: "Incremental backups in the 100 MB to 2 GB range instead of 35+ GiB — the README states 10–50× less bandwidth per backup.",
        basis:
          "Author-reported measurement in the README, retrieved 2026-11-10. Not independently reproduced by 404HubSpot.",
      },
      {
        text: "Recovery is a written command sequence, including downloading incremental chains in order.",
        basis: "Qualitative — README restore section, retrieved 2026-11-10.",
      },
    ],
    limits:
      "Those figures come from one machine on Parrot OS with a BTRFS root. Other filesystems fall back to the v1 file-copy mode, where the same numbers do not apply.",
  },
  {
    id: 5,
    slug: "pet-shelter-api",
    title: "Pet Shelter API",
    subtitle: "A small API where the boring parts are done properly",
    owner: "glory-kinya",
    role: "Developer — API design and validation",
    services: ["software-development"],
    published: true,
    publishedDetail: true,
    summary:
      "A TypeScript and Express API for a shelter catalogue: combinable filters, a guarded detail route and explicit status codes.",
    cover: {
      tone: "mint",
      mark: "PS",
      alt: "Generated cover for Pet Shelter API: the monogram PS on a mint panel with a request path diagram.",
    },
    repos: [
      {
        name: "kiki-glow/pet_shelter_api",
        url: "https://github.com/kiki-glow/pet_shelter_api",
        language: "TypeScript",
        readmeRetrieved: "2026-11-10",
      },
    ],
    stack: ["TypeScript", "Express", "Node.js"],
    permissionBasis:
      "Public repository published by the team member credited. No real shelter or adopter data is involved; the catalogue is sample data.",
    context:
      "A deliberately small domain used to get the unglamorous parts right: routing, filtering, validation, authorisation and honest error responses. Shelter staff need to find animals by species, age and adoption status without learning a query language.",
    challenge:
      "Filters multiply — species, adoption status, minimum age and maximum age in any combination — and a detail lookup has its own rules for bad IDs and unauthorised reads. Every failure should return the right status instead of a generic 500.",
    implementation: [
      "Layered structure: controllers, data, middleware, routes and a single application entry point.",
      "GET /pets with species, adopted, minAge and maxAge, all combinable in one query.",
      "GET /pets/:id that validates the numeric ID and requires an access parameter.",
      "401 for a failed access check, 400 for a non-numeric ID, 404 when nothing matches.",
      "An in-memory catalogue, documented as non-persistent rather than pretending otherwise.",
    ],
    outcomes: [
      {
        text: "A written endpoint contract that states the exact status code for each failure case.",
        basis: "Qualitative — README endpoint section, retrieved 2026-11-10.",
      },
      {
        text: "A layered Express structure small enough for a junior developer to read end to end.",
        basis: "Qualitative — repository structure, retrieved 2026-11-10.",
      },
    ],
    limits:
      "The access parameter is a teaching guard, not authentication, and data resets when the process restarts. This is a pattern demonstration, not a template for protected production data.",
  },
];

// Held back on purpose. These slugs are recognised so the router can refuse
// them explicitly, and so nobody publishes an unevidenced story by accident.
export const heldBack = [
  {
    slug: "jcsm",
    title: "JCSM",
    owner: "christine-jemutai",
    reason:
      "Church ministry site. The repository and live demo are public, but written permission from the ministry to feature it as agency work is not recorded.",
  },
  {
    slug: "gitswitch",
    title: "gitswitch",
    owner: "don-artkins",
    reason:
      "No README or usage documentation in the repository, so there is no written evidence to build a case study from yet.",
  },
  {
    slug: "wildlife-gurdians",
    title: "Wildlife Guardians",
    owner: "eric-njuki",
    reason:
      "The repository still carries the default Vue starter README, so its scope and outcomes cannot be documented from evidence.",
  },
];

export const publishedProjects = projects.filter((project) => project.published);

export const findProject = (slug) =>
  publishedProjects.find((project) => project.slug === slug) || null;

export const isHeldBack = (slug) => heldBack.some((entry) => entry.slug === slug);

// Unknown or absent filter values fall back to "all" so a stale or hand-edited
// URL never produces an empty page by accident.
export const normaliseFilter = (raw) => {
  const value = Array.isArray(raw) ? raw[0] : raw;
  return portfolioFilters.some((filter) => filter.id === value) ? value : "all";
};

export const projectsFor = (filterId) =>
  filterId === "all"
    ? publishedProjects
    : publishedProjects.filter((project) => project.services.includes(filterId));

export const filterLabel = (filterId) =>
  portfolioFilters.find((filter) => filter.id === filterId)?.label || "All work";
