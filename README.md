# Personal Site

A static personal website built with Astro. Public content is selected from the read-only career-ops primary records; `artifact.yaml` and `spec/website.md` define the source and disclosure boundary. Never copy the private source files into this repository.

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

The production build is written to `dist/` and is not committed. For a local preview, run `npm run dev -- --host 127.0.0.1` and open `/demian/` at the printed address.

`provenance/latest.yaml` points to the latest local draft and its source lock, claim map, validation, and pending review. Previous deployed artifacts remain under `published/`; a local refresh does not authorize deployment.

## Deployment

GitHub Pages deploys through `.github/workflows/publish-website.yml` on pushes to `main`.

The site is configured for the project URL:

`https://saya-ashen.github.io/demian/`
