# Validation report

Build ID: `20260808T022049Z-site-4f01fd6`

Overall status: `needs-review`.

The Astro build passed. OmniExtract is absent from the current public derivative. A controlled proposal records the requested source cleanup, but the LLM Wiki itself was not modified.

## Required checks

- Source paths and selected hashes: passed. The source lock is unchanged from the prior build snapshot.
- Artifact containment: passed. Source and artifact roots are disjoint; all writes are under the artifact root.
- Source mutation: passed. No writes were issued to the knowledge-source root; factual source files remain unchanged.
- Required run files: passed. Manifest, source lock, resolved inputs, evidence plan, method, claim map, validation, review, and artifact snapshot exist.
- Claim provenance: passed. 23 public claims are mapped; OmniExtract is recorded as an explicit exclusion.
- Unsupported claims: passed. No unsupported claim was detected.
- OmniExtract absence: passed. The publication file, generated content, source content collection, and production output no longer contain OmniExtract.
- Current-status supersession: passed. Stale `Expected 2026`, `Present`, and prior `under review` wording remains absent from public content.
- Privacy: passed. Private application fields, GPA/rank, and unpublished metrics remain excluded.
- Astro production build: passed with `npm run build`.
- Formatting and whitespace: passed with `git diff --check`.
- Claim target existence: passed. All mapped artifact files exist.

## Review and publication checks

- Human review: not run. The run-local review is `pending`.
- Publication: not run. No write to `published/` was authorized.
- Source proposal: pending source-owner review at `proposals/20260808T022049Z-remove-omniextract.yaml`.

## Residual gaps

- The OmniExtract references still exist in the LLM Wiki until the proposal is manually applied through the knowledge-base maintenance workflow.
- Chrona start date, exact role/title, quantified outcomes, collaborators, and adoption/deployment evidence remain unknown and were not invented.
