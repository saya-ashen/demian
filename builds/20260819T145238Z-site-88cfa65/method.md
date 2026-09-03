# Build method

Build ID: `20260819T145238Z-site-88cfa65`

Purpose: add the exact email address the user approved for public Git history and website display. Audience and existing visual system remain unchanged.

The factual address was matched against `wiki/entities/DemianKong.md` at source revision `88cfa6560b91dc2dc51539febeb32df64fa046e1`. The user's current instruction supplied publication approval, not factual evidence. All other contact and identity fields in the source remained excluded. The LLM Wiki stayed read-only.

The prior generated website was used only for style and diff continuity. The build added one `Email` item with a native `mailto:` link to `content/profile.json`, updated the generated summary, and narrowed website privacy rules to allow only exact-address user approval. No Astro template or client JavaScript changed.

Validation used `npm run build`, `git diff --check`, claim-target and source-hash checks, a generated-output check for the email link, and a targeted privacy scan confirming that unrelated source contact fields did not enter tracked website content. This build remains pending human review and is not published by the artifact workflow.
