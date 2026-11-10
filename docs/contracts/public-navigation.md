# Public navigation contract

Keep `/`, `/programming-classes`, `/contact`, `/our-process`, and `/services/` paths
`web-development`, `software-development`, `mobile-apps`, `m-pesa-integration`, `graphics-design`.
Portfolio routes are `/work` (discovery) and `/work/:slug` (case study). `Work` appears in the
shared nav after Services and in the footer Explore column.
Landing anchors: services, learning, process, team. Router hash navigation offsets sticky header;
new routes start at the top; browser history restores saved scroll positions.

Shared nav uses ordinary links inside disclosures (not application menu roles).
Enter/Space toggle buttons; Tab follows links; Escape closes and returns focus to trigger;
outside pointer/focus and route changes close disclosures. Mobile nav is an inline, scrollable
panel, not a modal; it does not trap focus or lock body scroll. Breakpoint changes reset it.

Inquiry number remains 254708345963; email remains hubspot861@gmail.com. New link messages
are encoded with encodeURIComponent once. New external tabs use noopener noreferrer.
Existing service detail and contact page integrations are preserved.
The contact page accepts `?service=software-development` as a presentation-only prefill for
the existing Software Development form option. It does not submit the form or bypass validation.

Home service data feeds navbar, footer and ServiceCard so destinations cannot drift.

## Portfolio contract (specs 10, 11)

`/work` lists only entries with `published: true` in `src/data/projects.js`. The selected filter
lives in `?service=<service-slug>` (`web-development`, `software-development`, `mobile-apps`,
`m-pesa-integration`, `graphics-design`); no query means all work. Unknown values fall back to
all work with a visible notice, and filter changes push history so Back restores the previous
selection. A category with no published work shows the empty state with a reset action.

`/work/:slug` renders only published entries. Held-back or unknown slugs render the
"not published" state with `noindex`; they are never linked from `/work`. Case-study inquiry
links use `/contact?service=<first service slug>` and a WhatsApp message naming the project.
Slugs are stable: retiring one requires an explicit redirect or it becomes a not-published page.
Rollback: revert this feature commit; existing baseline routes/assets remain available.
