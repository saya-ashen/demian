# Build Method

## Purpose and audience

This build updates the public Astro personal website and produces a matching one-page English public resume for research collaborators, Ph.D. admissions readers, and AI engineering collaborators.

## Knowledge source

- Repository: `https://github.com/saya-ashen/llm-wiki-agent.git`
- Local read-only build path: `/home/saya/workspace/llm-wiki-agent`
- Base revision: `88cfa6560b91dc2dc51539febeb32df64fa046e1`
- Revision mode: `snapshot-hash`
- Selected-input snapshot: `ecc1a1f032d2840252eaee0d495a410b4a5cbc5c54c67448b0bbcf5c0fef9ed6`

Before artifact generation, a separate user-approved knowledge-ingest workflow admitted the 2026-09-03 public-release decisions and official publication records. The artifact build then treated the resulting knowledge-source snapshot as read-only.

## Selection and exclusions

Selected content includes current public professional facts, exact public contact and IELTS approval, Chrona v0.3.1, qualified EWAS and Dingent evaluation evidence, the Dingent preprint, official iDog correction, EWAS publication record, and NGDC 2026 consortium record. GPA, school email, phone, address, date of birth, citizenship, student ID, referee records, mobility data, and unsupported adoption claims were excluded.

## Inputs and templates

- `artifact.yaml` and `spec/website.md` define audience, content, privacy, and review requirements.
- Existing Astro layouts and collections were retained.
- `templates/public-resume-layout.typ` is a generic presentation-only Typst template.
- The 2026-08-19 site artifact and prior public PDF were used only for style/diff continuity, never as factual evidence.

## Generation method

1. Re-resolved every retained material claim against selected Wiki sources.
2. Updated structured content under `content/` and the current narrative draft at `generated/site-content.md`.
3. Generated a fact-equivalent public resume in Markdown and Typst.
4. Rendered the PDF with Typst 0.15.1.
5. Kept the previously published public PDF unchanged pending review of this exact build.

## Validation

- Ran Wiki structural health checks and rebuilt its graph before source locking.
- Checked canonical source/artifact roots and write containment.
- Recomputed every selected source hash and the dirty-tree snapshot digest.
- Built the Astro site with `npm run build`.
- Inspected generated HTML for required claims, stale wording, and disallowed private patterns.
- Compiled and visually inspected the resume PDF; Ghostscript confirmed one page and extracted searchable text.
- Reproduced EWAS percentages from 23/30 and 25/30.
- Ran `git diff --check`; `.gitattributes` marks PDFs binary to avoid false text-whitespace diagnostics.
- Rechecked the knowledge-source status and selected hashes after generation.

## Tools

- Builder: `knowledge-artifact-builder` skill, version 1
- Model: `openai-codex/unknown`
- Astro: 7.2.0
- Typst: 0.15.1
- Ghostscript: local configured version

## Limitations

- The knowledge source is dirty and therefore locked by selected-file snapshot hashes rather than a clean commit.
- Semantic graph inference was skipped because `litellm` is not installed; deterministic Wiki health checks passed.
- This is a model-generated candidate. Human review of the exact build is still pending.
- `public/content-assets/resume-en.pdf` is not replaced until an approved review event authorizes publication.
