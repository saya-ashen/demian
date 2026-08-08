# Personal Site

A static personal website built with Astro.

## Repository structure

```text
content/                   Public site content
├── profile.json           Profile and singleton page content
├── projects/*.md          Project entries
└── publications/*.md      Publication entries

src/                       Generic presentation code
├── content.config.ts      Content Collection schemas
├── layouts/               Page layouts
├── pages/                 Routes
└── styles/                Shared styles

public/template-assets/    Generic static assets
```

All tracked files are considered public. Personal facts belong in `content/`, not in templates. See `AGENTS.md` for the complete maintenance and privacy rules.

## Commands

```bash
npm install
npm run dev
npm run build
npm run preview
```

The production build is written to `dist/` and is not committed.

## Deployment

GitHub Pages deploys through `.github/workflows/publish-website.yml` on pushes to `main`.

The site is configured for the project URL:

`https://saya-ashen.github.io/demian/`
