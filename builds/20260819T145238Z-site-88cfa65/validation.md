# Validation Report

- Build: `20260819T145238Z-site-88cfa65`
- Result: `passed-with-warnings`
- Material claims: 24
- Mapped claims: 24
- Unsupported claims: 0
- Source conflicts: 0
- Private-content findings: 0

## Blocking findings

None.

## Warnings

- The source still groups the approved address under a private application profile. This build records exact-address user approval; future rebuilds must preserve that approval or update source visibility through a separate knowledge workflow.
- Human review remains pending.

## Check ledger

| Check ID | Required | Status | Evidence | Reason if not run |
| --- | --- | --- | --- | --- |
| source-containment | yes | passed | Canonical roots are disjoint; temporary and final run paths are inside artifact root. | |
| source-hashes | yes | passed | 22 selected file hashes and aggregate snapshot digest matched. | |
| source-unchanged | yes | passed | Git status and diff digests matched preflight values. | |
| prior-run-immutable | yes | passed | Prior artifact hash remained `82fbae6e0c1643cc5b3b5d79f423bcd50ac7f87cff83d1e07fe4d54304d31b18`. | |
| claim-provenance | yes | passed | 24 unique claims mapped to locked source paths. | |
| unsupported-claims | yes | passed | Every material claim has at least one locked source. | |
| exact-email-only | yes | passed | Built contact page contains the approved address and native `mailto:` link. | |
| privacy | yes | passed | Unapproved values from the source private-profile section are absent from content, templates, generated draft, and `dist/`. | |
| astro-build | yes | passed | `npm run build` completed successfully. | |
| generated-output | yes | passed | `dist/contact/index.html` contains expected visible address and link. | |
| diff-check | yes | passed | `git diff --check` returned no errors. | |
| required-run-files | yes | passed | Source lock, resolved inputs, evidence plan, method, claim map, validation, review, artifact snapshot, and diff exist. | |

## Requirement coverage

| Requirement | Evidence | Status | Notes |
| --- | --- | --- | --- |
| Show public email on Contact page | `content/profile.json`, built Contact HTML | passed | Address displayed before GitHub. |
| Make email actionable | Built `mailto:` link | passed | No template or JavaScript change needed. |
| Preserve unrelated privacy | Targeted source-value scan | passed | Only exact approved address released. |
| Preserve content/template boundary | `content/profile.json` only | passed | Personal fact not hard-coded in `src/`. |

## Claim checks

- `contact.email`: verified against `wiki/entities/DemianKong.md`; publication approved by current user for exact address.
- `contact.github`: retained and re-anchored to `profile.contact.items[1]`.
- Remaining 22 claims: retained from prior artifact and revalidated against current locked source files.

## Privacy checks

Exact approved address is public by explicit user instruction. All other application emails, school emails, phone, date of birth, address, citizenship, mobility, and referee fields remain excluded.

## Reproducibility

- Revision mode: `snapshot-hash`
- Source base revision: `88cfa6560b91dc2dc51539febeb32df64fa046e1`
- Source clean: `false`; dirty paths limited to recorded Hindsight bookkeeping.
- Exact model determinism guaranteed: `false`

## Residual risks

- Public email can receive spam after deployment.
- Source visibility metadata still needs separate reconciliation if this approval should become durable outside this artifact run.
