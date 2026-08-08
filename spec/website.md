# Website build specification

This website is a public, English-language derivative of the read-only LLM Wiki. The Wiki is the sole factual authority. Existing website files may guide layout and continuity only; they are not evidence.

## Selection

Include current and historical facts explicitly recorded in the Wiki's entity, concept, and reviewed source pages. Current-status updates supersede historical CV wording. Preserve exact distinctions between current development, completed work, transferred ownership, technical support, contribution, and authorship.

## Public privacy policy

Only use public professional links and public-facing project or publication facts. Exclude application emails, school emails, phone numbers, date of birth, address, citizenship, referee records, mobility information, and other private application data. Exclude unpublished thesis metrics and unverified GPA/rank from public pages. Do not infer Chrona's start date, formal title, employer, users, deployment, or adoption.

## Required content coverage

- Home: current identity, current research/engineering direction, and current project.
- About: completed education, transcript-backed course/credit summary, trajectory, and research interests.
- Experience: current post-graduation status and bounded historical timeline.
- Research: Chrona, Dingent, EWAS AI Assistant, and the verified publication record plus the source-supported publication list.
- Contact: public GitHub and collaboration/application direction without private contact fields.

## Validation commands

- `npm run build`
- `git diff --check`
- `rg` checks for stale status, private fields, and source-only warnings in public content.
