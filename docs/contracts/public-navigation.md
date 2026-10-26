# Public navigation contract

Keep `/`, `/programming-classes`, `/contact`, `/our-process`, and `/services/` paths
`web-development`, `software-development`, `mobile-apps`, `m-pesa-integration`, `graphics-design`.
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
Rollback: revert this feature commit; existing baseline routes/assets remain available.
