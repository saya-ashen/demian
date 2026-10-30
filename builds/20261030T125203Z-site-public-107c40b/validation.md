# Validation Report

- Build: 20261030T125203Z-site-public-107c40b
- Result: passed-with-warnings
- Mapped claim entries: 205
- Unsupported claims found in semantic review: 0
- Private-content findings in new output: 0
- Human review: pending

## Check ledger

| Check | Required | Status | Evidence |
| --- | --- | --- | --- |
| source-containment | yes | passed | Canonical disjoint roots; every output checked against symlink escapes |
| source-snapshot | yes | passed | All selected input hashes and tracked diff match preflight; concurrent browser artifacts reported and user approved proceeding from locked snapshot |
| claim-provenance | yes | passed | 205 mapped field/paragraph claims; semantic review against primary files |
| privacy | yes | passed | Selected public professional text only; exact email approved; private records and unapproved findings excluded |
| production-build | yes | passed | Astro built all 5 routes |
| browser | yes | passed | 15 viewport/route combinations; local hrefs, image, headings, overflow and runtime errors |
| pdf | yes | passed | 1 A4 page; text and metadata inspected; rendered image reviewed |
| visual-review | yes | passed | Desktop homepage/research and mobile homepage screenshots inspected |
| history-preservation | yes | passed | No changes to published/, earlier builds/ or reviews/ |
| diff-whitespace | yes | passed | git diff --check |
| External links / Google Fonts | no | not-run | Offline browser checks; no current external reachability claim |

## Review boundaries

This is generating-agent validation, not an independent audit or human publication approval. Primary-file evidence is accepted under the repository source contract; no external credential verification was performed. New facts supersede older site wording. Prior historical artifacts remain untouched.

## Reproduction

Run npm run build and git diff --check. Compile generated/public-resume-en.typ with typst compile --root .; inspect with pdfinfo, pdftotext and pdftoppm. Browser smoke-check evidence is in browser-checks.json. Source revision is snapshot-hash, not a clean commit.

## Publication privacy check

Public source lock contains only selected input paths, state digests and inventory counts. Full unrelated path inventories and intermediate builds are excluded from Git publication with explicit user authorization. Approved artifact/output hashes match the reviewed local draft.
