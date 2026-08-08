# Validation report

Build ID: `20260808T005013Z-site-4f01fd6`

Overall status: `needs-review`.

The Astro build passed and the generated output is not published. One qualified partial-evidence item remains: OmniExtract is present in the Wiki as an archived-profile citation but does not have a fuller authoritative publication record. It is explicitly qualified as a preprint record and remains reviewable before publication.

## Required checks

- Source paths: passed. Every path in `source.lock.yaml` exists.
- Selected source hashes: passed. Per-file hashes and the snapshot digest are recorded.
- Artifact containment: passed. Source and artifact roots are disjoint; all writes are under the artifact root.
- Source mutation: passed. No writes were issued to the knowledge-source root; `git diff --name-only -- wiki raw` is empty.
- Required run files: passed. Manifest, source lock, resolved inputs, evidence plan, method, claim map, validation, review, and artifact snapshot exist.
- Claim provenance: passed. 24 public claims are mapped; private and unverified exclusions are recorded.
- Unsupported claims: passed with qualification. No unsupported claim was detected; OmniExtract is marked partial/low confidence and qualified.
- Current-status supersession: passed. Stale `Expected 2026`, `Present`, and prior `under review` wording is absent from public content.
- Privacy: passed. Application contact fields, referee data, address, phone, date of birth, citizenship, GPA/rank, and unpublished metrics are absent from public content and the production output.
- Astro production build: passed with `npm run build`.
- Formatting and whitespace: passed with `git diff --check`.
- Claim target existence: passed. All mapped artifact files exist.

## Review and publication checks

- Human review: not run. The run-local review is `pending`.
- Publication: not run. No write to `published/` was authorized.

## Source state

The source Git tree was observed with two `.pi/hindsight/` bookkeeping paths dirty. The selected factual files were individually hashed and the build used `snapshot-hash` mode. The builder did not mutate the source.

## Residual gaps

- Chrona start date, exact role/title, quantified outcomes, collaborators, and adoption/deployment evidence remain unknown and were not invented.
- Complete authoritative citation details for OmniExtract remain missing; review or source correction is needed before publication.
- GPA and rank remain absent from official transcript evidence and are intentionally not shown.
