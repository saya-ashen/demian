# Validation Report

- Build: `20260903T014001Z-site-ecc1a1f`
- Result: `passed-with-warnings`
- Material claims: 32
- Mapped claims: 32
- Unsupported claims: 0
- Source conflicts: 0
- Private-content findings: 0

## Blocking findings

None.

## Warnings

- The knowledge source is dirty and is locked by selected-input snapshot hash `ecc1a1f032d2840252eaee0d495a410b4a5cbc5c54c67448b0bbcf5c0fef9ed6`, not by a clean commit.
- Semantic inference during knowledge-graph rebuild was skipped because `litellm` is not installed; deterministic Wiki health checks passed.
- The candidate public resume passed validation, but `public/content-assets/resume-en.pdf` remains the prior PDF until a human approves this exact build. The current site navigation therefore continues to resolve to the prior PDF in a normal production build until publication.

## Check ledger

| Check ID | Required | Status | Evidence | Reason if not run |
| --- | --- | --- | --- | --- |
| source-containment | yes | passed | Canonical roots `/home/saya/workspace/personal-site` and `/home/saya/workspace/llm-wiki-agent` are disjoint; all artifact writes resolve inside the artifact root. | |
| source-lock-hashes | yes | passed | 29 selected inputs/indexes hashed into `source.lock.yaml`; recomputation matched. | |
| source-unchanged | yes | passed | Pre/post snapshot, Git status, and tracked-diff SHA-256 fingerprints matched. | |
| claim-provenance | yes | passed | JSON/YAML parse and source-lock join validated all 32 claim entries. | |
| numeric-and-date-consistency | yes | passed | Dates matched source; 23/30 → 76.7% and 25/30 → 83.3%. | |
| privacy | yes | passed | Candidate content, generated resume source/text, and `dist/` were scanned for excluded private values; none found. | |
| stale-wording | yes | passed | No `0.2.0`, `under review`, or `Expected 2026` in candidate public content or generated HTML. | |
| astro-production-build | yes | passed | `npm run build`: five static pages built successfully with Astro 7.2.0. | |
| generated-output-inspection | yes | passed | Required public claims appear in generated HTML; excluded private values do not. | |
| typst-compilation | yes | passed | Typst 0.15.1 compiled `generated/public-resume-en.typ`. | |
| resume-page-count | yes | passed | Ghostscript rendered exactly one A4 page. | |
| resume-text-inspection | yes | passed | Extracted text includes v0.3.1, approved metrics, IELTS, Dingent DOI, and NGDC 2026 DOI; no excluded private values. | |
| resume-visual-inspection | yes | passed | 144-DPI page render inspected for clipping, overlap, hierarchy, and legibility. | |
| prior-run-preservation | yes | passed | Existing committed run directories are unchanged; the untracked 2026-08-19 run was not modified. | |
| diff-hygiene | yes | passed | `git diff --check` passed; `.gitattributes` marks PDF files binary. | |
| output-snapshots | yes | passed | Current generated website and resume files byte-match the run snapshots. | |
| output-hashes | yes | passed | Hashes recorded and rechecked before manifest creation. | |

## Requirement coverage

| Requirement | Evidence | Status | Notes |
| --- | --- | --- | --- |
| Current home/about profile | `content/profile.json` | passed | Includes current direction, degree status, v0.3.1, and publication highlights. |
| Bounded experience timeline | `content/profile.json` | passed | NGDC/EWAS end June 2026; Dingent handover retained. |
| Chrona v0.3.1 | `content/projects/chrona.md` | passed | Public alpha release link included. |
| Strong project evidence | Dingent and EWAS project pages | passed | Includes user-approved resource and evaluation claims with qualifications. |
| Latest verified publications | `content/publications/` | passed | Adds Dingent preprint, official iDog correction link, and NGDC 2026 record. |
| Public contact and IELTS | profile/contact/resume | passed | Exact facts approved on 2026-09-03. |
| One-page English public resume | `resume-en.pdf` | passed | One A4 page, searchable text, visually inspected. |
| Privacy boundary | all candidate outputs | passed | GPA and unrelated application/identity/referee data excluded. |

## Claim checks

All 32 material claims have at least one locked knowledge source. User-confirmed project metrics map to `source.public-profile-update-2026-09`; official publication assertions map to the EWAS and 2026-09 official publication evidence records. No claim uses a prior artifact or application package as factual evidence.

## Privacy checks

- Included by exact public approval: primary email, IELTS 7.0, specified EWAS/Dingent project evaluations.
- Excluded: GPA/rank, school email, phone, address, date of birth, citizenship, student ID, referee records, mobility declarations, and other private application data.
- Dingent wording explicitly avoids implying post-handover control of the project or CNCB resources.
- Evaluation metrics are labeled as project/thesis evidence, not journal-reported results.

## Reproducibility

- Revision mode: `snapshot-hash`
- Source clean: `false`
- Selected snapshot: `ecc1a1f032d2840252eaee0d495a410b4a5cbc5c54c67448b0bbcf5c0fef9ed6`
- Exact model determinism guaranteed: `false`

## Residual risks

- Human presentation review is pending.
- The public resume replacement and deployment must wait for an approved append-only review event referencing this build ID.
- Older NGDC/BioKA contribution descriptions remain abbreviated where the knowledge source lacks more precise role evidence.
