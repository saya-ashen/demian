# Website build specification

## Authority and audience

The public English-language site serves prospective Ph.D. supervisors, research collaborators, and engineering collaborators. The user authorized a source migration on 2026-10-30: career-ops primary files (`cv.md`, `article-digest.md`, `config/profile.yml`, `modes/_profile.md`) are now the factual authority. `modes/_custom.md` supplies style and procedure only. The source is read-only; current selected-file hashes, including ignored user-layer files, define the snapshot. Prior website and Wiki builds are historical artifacts, not evidence for this build.

## Selection and framing

Lead with growing platforms for humans and agents, verified scientific tool use, and reusable capabilities. Present Chrona's current module-based implementation, not its historical v0.3.1 release. Verification and approval mechanisms support platform growth rather than replacing its purpose. Separate research questions from demonstrated features.

Preserve role, authorship, dates, and project boundaries. Dingent development ran from 2025 through June 2026, with technical support thereafter. EWAS AI Assistant development ran during 2024–2025. Mark the Dingent paper as a preprint and co-first authorship explicitly. Do not imply acceptance of a manuscript under revision.

## Public privacy policy

Use only selected public professional information; do not copy source documents into this public repository. The user explicitly approved `demian.kong.ai@gmail.com` for the website and public resume on 2026-10-30. Exclude other contact records, referee records, addresses, birth dates, application status/strategy, verification identifiers, GPA/rank, and unapproved unpublished evaluations. Pi Mesh and Chrona prototype experiment findings are excluded pending separate disclosure approval. Do not disclose the manuscript's private revision status. Omit language-test scores because they do not strengthen this research overview.

Retain only previously approved project metrics when useful. This build foregrounds method and evaluation design rather than raw accuracy/latency. The EWAS 30-question reference-SQL benchmark is project/thesis evidence, not a journal-reported performance result.

## Required content

- Home: concise identity, a distinct research question, and evidence-backed highlights.
- About: education, research trajectory, research interests, and selected technical preparation; no transcript administration details.
- Experience: bounded project contributions and education/research timeline.
- Research: Chrona, Dingent, EWAS, selected complementary public work, and source-supported publications.
- Contact: approved email, GitHub, and Ph.D./research collaboration direction.
- Public resume: one-page English PDF, synchronized with the selected website claims. User requested a more spacious presentation: 11pt body, 10.1pt publication text, increased line/paragraph spacing, and 8pt section spacing; retain the factual content rather than padding it.

## Local delivery and validation

Update `content/`, necessary templates, `generated/`, and the local website resume asset. Preserve `published/`, all previous builds, and review events. Do not commit, push, or deploy. A later publication requires exact-build human approval.

Run `npm run build`, `git diff --check`, source-snapshot comparison, claim/source checks, public-content privacy and stale-wording checks, PDF extraction/render review, and desktop/mobile browser checks. Record skipped or failed checks honestly.
