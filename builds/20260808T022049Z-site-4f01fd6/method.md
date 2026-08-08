# Build method

Build ID: `20260808T022049Z-site-4f01fd6`

The user's request to remove OmniExtract was applied to the derived website only. The LLM Wiki remained read-only. A controlled proposal was written under `proposals/20260808T022049Z-remove-omniextract.yaml` listing the Wiki and raw-profile references that require a separate source-owner edit.

The prior generated website was used only for diff continuity. OmniExtract was removed from the publication collection, generated summary, and profile publication note. The remaining public content and provenance were regenerated against the same locked Wiki snapshot. No private application data, stale wording, unverified GPA/rank, or unpublished thesis metrics were added.

Validation used `npm run build`, `git diff --check`, targeted absence checks for OmniExtract/private/stale content, claim-target checks, and source status/hash checks. This build is generated and remains pending human review; it is not published.
