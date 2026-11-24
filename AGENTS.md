# Repository Agent Instructions

## Source of truth and publishing

- The `main` branch of `BlackNubi/Canis-Lupus` is the active source of truth.
- For user-requested work in this project, make changes directly on GitHub `main` through the connected GitHub integration whenever available. Do not leave completed work only in a local or offline worktree.
- The user has given standing authorization for routine project changes to be committed and pushed directly to `main`, without asking for approval on each change.
- After implementing a requested change, deploy it to the live Vercel production project when the connected deployment access and project configuration permit it. Verify the commit and deployment status before saying the change is live, and include the live URL when available.
- The user has also authorized routine Vercel project/deployment configuration needed to publish requested work. This does not override tool or platform approval gates, missing permissions, or safeguards for destructive actions and account security, access, privacy, or billing settings.
- Read the current remote files and branch state before every write. Preserve existing content and remote changes. Never force-push or overwrite unexpected edits.
- If direct GitHub writes are unavailable, stop before making local-only changes and report the specific blocker. If deployment is unavailable or blocked, still complete and push authorized changes to GitHub when possible, then report the precise deployment blocker. Never claim work is live unless GitHub confirms the resulting commit and Vercel confirms the deployment.
- This standing authorization applies to routine work in this repository. It does not authorize destructive history rewrites, deleting unrelated data, changing account or repository security/access/billing settings, or writing to other repositories; obtain approval for those actions.
