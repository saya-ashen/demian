# AGENTS.md

## Purpose

This repository is an Astro personal website maintained with help from AI agents.
Keep the implementation simple, static, auditable, and safe to publish.

## Public-repository invariant

Treat every tracked file and the entire Git history as public.

- The repository must contain only information approved for public disclosure.
- Never add private notes, private variants, hidden personal fields, raw source material, credentials, tokens, internal URLs, unpublished information, or other sensitive data.
- Do not create a private-content directory, private-content repository, public/private field system, sanitization/export layer, CMS, or database unless the user explicitly changes this architecture.
- A filename, comment, commit diff, image metadata, PDF metadata, config file, and test fixture can leak information just as page content can.
- If suspected private information appears, stop. Do not commit, push, deploy, or repeat the full value in a report. Identify its file and location with the sensitive value redacted, then ask the user what to do.

## Architecture: templates and content

Keep presentation and personal content strictly separated.

```text
src/                       # Generic templates and presentation logic
├── components/
├── layouts/
├── pages/
├── styles/
└── content.config.ts

content/                   # Public personal content only
├── profile.json
├── updates/*.md
├── projects/*.md
└── publications/*.md

public/
├── template-assets/       # Generic site assets
└── content-assets/        # Reviewed, public content media
```

These are target boundaries. Existing pages may still contain hard-coded content; do not add more. Move such content into `content/` when refactoring the relevant page.

### `src/` rules

- `src/` defines how content is displayed, not whose content is displayed.
- Do not hard-code personal facts in Astro components, layouts, pages, styles, comments, tests, or configuration.
- Personal facts include names, biographies, affiliations, locations, contact details, experience, projects, publications, links, and updates.
- Generic UI text such as navigation labels, accessibility labels, and error messages may remain in templates.
- Pages should obtain personal content through Astro Content Collections or imports from `content/`.
- Keep Astro as the primary framework. Do not replace it with bare React.
- Add React only for a specific interactive island that cannot reasonably be implemented with Astro and minimal browser JavaScript.

### `content/` rules

- All content must already be approved for public viewing before it enters the repository.
- Use JSON for structured singleton data such as the profile.
- Use plain Markdown for updates, projects, publications, and long-form text.
- Do not use MDX unless explicitly requested; executable components and expressions weaken the content/template boundary.
- Define and validate content fields with Astro Content Collections schemas.
- Do not add `private`, `internal`, `secret`, or equivalent fields. Private information does not belong in this repository at all.

### Asset rules

- Add generic design assets under `public/template-assets/`.
- Add personal/content media under `public/content-assets/` only after confirming it is public.
- Inspect images, PDFs, and other media for metadata and hidden or embedded content before adding them.
- Do not commit raw originals when a reviewed, publication-ready derivative is sufficient.

## Privacy review

Content separation narrows the main review surface but is not a security boundary. Before proposing a commit or deployment:

1. Review every added and changed file, not only `content/`.
2. Give extra semantic scrutiny to `content/` and `public/content-assets/`.
3. Check filenames, source comments, configuration, logs, fixtures, links, and media metadata.
4. Check for credentials, secrets, personal contact data, precise locations, internal identifiers, unpublished work, and accidental local paths.
5. Run the production build.
6. Review the generated `dist/` output for unexpected content. `dist/` remains generated and must not be committed.

Useful baseline commands:

```bash
git status --short
git diff --check
git diff -- .
npm run build
```

If reviewing staged changes, also inspect:

```bash
git diff --cached -- .
```

Automated secret or PII detection is supplementary. It cannot prove that content is safe to publish; semantic review is still required.

## Change discipline

- Make the smallest working change.
- Do not introduce a CMS, database, SSR, content API, or remote content source without a demonstrated requirement.
- Do not fetch private or unreviewed material during the build.
- Keep generated files and dependencies out of Git according to `.gitignore`.
- Preserve the template/content boundary when adding pages or features.
- Validate with `npm run build` before declaring a change complete.
