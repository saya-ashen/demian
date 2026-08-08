# Build method

Build ID: `20260808T005013Z-site-4f01fd6`

The LLM Wiki at `/home/saya/workspace/llm-wiki-agent` was treated as the sole factual authority and was read without writes. The source was locked using `snapshot-hash` because the observed Git working tree contained only Hindsight bookkeeping changes under `.pi/hindsight/`; all selected factual files were individually hashed and recorded in `source.lock.yaml`.

The website repository at `/home/saya/workspace/personal-site` was treated as the artifact project. Existing website files were inspected for structure and style only. The update regenerated public content into the existing Astro content collections, added the missing Chrona and EWAS publication records, corrected stale current-status wording, added the verified EWAS DOI/PubMed links, and extended the publication schema/page to render links.

Selectors excluded private application data, stale `Present`/`Expected`/`under review` wording, transcript-unverified GPA/rank, unpublished thesis performance metrics, and Chrona facts explicitly marked as missing. The current-status update was used to bound historical NGDC, Dingent, and EWAS involvement and to present Chrona as active development without inventing a title, start date, employer, users, or adoption.

Validation used `npm run build`, `git diff --check`, targeted content searches for stale/private/unverified wording, and source status/hash checks. The run-local review remains `pending`; publication was not requested or performed.
