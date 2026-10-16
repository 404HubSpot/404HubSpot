# Content register

Owner: Francis Masila. Review date: 2026-10-16.

This register distinguishes owner-confirmed public content from facts that remain
unverified. Approval is based on the owner's guided content review on 2026-10-16;
it is not external verification. Do not treat an open item as approved.

## Brand and contact

| ID | Public value | Source | Approved by / reviewed | Status |
|---|---|---|---|---|
| brand.name | 404HubSpot | Owner confirmation in guided review | Francis Masila / 2026-10-16 | Approved |
| contact.phone-whatsapp | +254 708 345963 | Owner confirmation; matches `src/data/site.js` | Francis Masila / 2026-10-16 | Approved |
| contact.email | hubspot861@gmail.com | Owner confirmation; matches `src/data/site.js` | Francis Masila / 2026-10-16 | Approved |
| social.instagram | https://instagram.com/404hubspot | Owner confirmed to keep current profile | Francis Masila / 2026-10-16 | Approved |
| social.tiktok | https://tiktok.com/@404.hubspot | Owner confirmed to keep profile; tracking parameters omitted | Francis Masila / 2026-10-16 | Approved |
| site.canonical-domain | Not confirmed | Owner explicitly left canonical domain undecided | Francis Masila / 2026-10-16 | Open gate; do not treat Vercel preview or `.co.ke` fallback as owner-approved |

## Service summaries and prices

The owner confirmed that current service descriptions checked out and approved the
prices below on 2026-10-16. Prices are in KES. “From” is a starting price, not a
fixed quote. Existing scope/features remain as currently described in
`src/data/site.js`; confirm scope per inquiry.

| ID | Service summary currently published | Approved public price | Source | Approved by / reviewed | Status |
|---|---|---|---|---|---|
| service.web | Fast, thoughtful websites that turn visitors into customers | Landing page: 20,000–35,000; business website: 40,000–75,000; e-commerce: from 85,000 | Owner confirmation; `src/data/site.js` | Francis Masila / 2026-10-16 | Approved |
| service.software | Custom tools built around the business | Small business system: 280,000–650,000; enterprise: from 650,000 | Owner confirmed current draft bands; `src/data/site.js` | Francis Masila / 2026-10-16 | Approved |
| service.mobile | Intuitive iOS and Android experiences | Basic: 400,000–700,000; cross-platform: 750,000–1,500,000; enterprise: from 1,500,000 | Owner confirmed current draft bands; `src/data/site.js` | Francis Masila / 2026-10-16 | Approved |
| service.mpesa | Safaricom Daraja API payment integration | STK Push: 25,000–40,000; Full Daraja: from 100,000 | Owner confirmation; `src/data/site.js` | Francis Masila / 2026-10-16 | Approved |
| service.graphics | Brand identity and visual design | Logo: 25,000–55,000; brand identity: 85,000–200,000; marketing pack: from 35,000 | Owner confirmed current draft bands; `src/data/site.js` | Francis Masila / 2026-10-16 | Approved |
| service.classes | Practical programming classes and mentorship | No course prices published until each fee is confirmed | Owner instruction; `src/data/courses.js` | Francis Masila / 2026-10-16 | Copy approved; individual fees open |

## Course catalog

The owner approved the current course information as accurate, but stated that
fees vary by course and chose to hold course prices until confirmed individually.
The following course fees are therefore intentionally absent from public output.
Current course descriptions, levels, durations, mentor links, and public GitHub
references remain in `src/data/courses.js`.

| ID | Course | Fee status |
|---|---|---|
| course.python-foundations | Python Foundations | Held; confirm individually |
| course.javascript-fullstack | JavaScript Fullstack | Held; confirm individually |
| course.typescript-express-apis | TypeScript & Express APIs | Held; confirm individually |
| course.vue-frontend | Vue.js Frontend | Held; confirm individually |
| course.html-css-foundations | HTML & CSS Foundations | Held; confirm individually |
| course.gsap-motion | GSAP Motion & Interaction | Held; confirm individually |
| course.flutter-dart-mobile | Flutter & Dart Mobile | Held; confirm individually |
| course.flask-rest-apis | Flask REST APIs | Held; confirm individually |
| course.git-dev-tools | Git & Dev Tools | Held; confirm individually |
| course.ml-foundations | Machine Learning Foundations | Held; confirm individually |
| course.sql-databases | SQL & Databases | Held; confirm individually |
| course.scratch-beginners | Scratch for Beginners | Held; confirm individually |

## Decisions still needed

- Confirm the production canonical domain before changing SEO canonical URLs,
  sitemap, or robots metadata; this is tracked under spec 14.
- Confirm each course's current fee before adding a public amount.
- Obtain publication permission and attribution evidence for team portraits and
  any media; see the [asset register](./ASSET-REGISTER.md).
- Keep client names, testimonials, awards, performance metrics, and case studies
  unpublished unless supporting evidence and publication permission are recorded.
