# Build method

- User authorized a local-only website refresh and source migration to career-ops on 2026-10-30.
- Source revision: e0126b731255e66aa1089783fcc117cc7118c448; selected-input snapshot: 107c40b3768988cab0da765cf128bc7b2927ce78d041ffeff38dd86e63d85c8a. Ignored user-layer files are individually hashed; the Git revision alone is not the content version.
- Read cv.md, article-digest.md, profile and custom rules. No interview-derived claims were used.
- Selected current public professional facts. Omitted private application/identity information, unapproved evaluations, and nonpublic project evidence. Approved email was replaced exactly. Existing approved portrait retained unchanged.
- Rewrote the homepage and project narrative in English; separated project purpose, contribution, method and evidence. Updated dates, authorship markers and supported links.
- Preserved Astro, existing layout and dependencies. Added typed project highlights, a distinct homepage question, section spacing, responsive wrapping and visible keyboard focus.
- Presentation follow-up: user requested a longer, more spacious resume without requiring extra claims. Increased body 10.1pt to 11pt, compact text 9.2pt to 10.1pt, paragraph leading 0.52em to 0.65em, section spacing 4.6pt to 8pt, and supporting type sizes. Rebuilt and visually inspected the one-page A4 resume. Factual Markdown/Typst input is unchanged from the preceding draft; extracted text matches after whitespace and discretionary-hyphen normalization.
- Recorded claim mappings at field/paragraph level. Resume Markdown and Typst are editorial equivalents; PDF compiled from Typst. No full private source was copied.
- npm run build passed. Browser checks covered five routes at 1440, 390 and 320px, internal links, approved contact link, image loading, overflow and page errors. Initial bundled browser revision was unavailable; reran successfully with installed Chrome in an isolated headless context.
- External networking was blocked for browser checks; external link reachability and downloaded Google Fonts were not checked. Screenshots use the font fallback.
- Tools: Node, Astro, Typst, Poppler, Python, Playwright with installed Chrome. Model identifier not recorded. Generating-agent self-review is not independent/human approval.
- Selected source files and tracked diff unchanged. Concurrent browser logs/snapshots appeared in the source checkout; reported to the user, who explicitly approved completion from the locked snapshot. These unrelated files were not read or modified. Published artifacts and prior build/review history unchanged. No commit, push, deployment or persistent preview service.

## Publication preparation

User approved the spacious one-page resume and website for deployment, then explicitly authorized removing unrelated source working-tree path inventories from public records. This publication build preserves the exact approved website and PDF hashes, retains selected-source hashes plus inventory digests/counts, and does not publish local-only intermediate records. No factual or visual content changed.
