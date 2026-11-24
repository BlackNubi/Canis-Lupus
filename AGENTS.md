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


## Application framework standard

- Use Next.js 16 App Router with React and TypeScript for application routes and new product UI. Put routes in `app/`, shared UI in `components/`, and reusable domain/data logic in `lib/`. Do not add another frontend framework or new standalone HTML app pages.
- Prefer React Server Components. Add client components only where browser interaction or browser APIs require them.
- The current hubs in `public/prototypes/` are same-origin compatibility views that preserve the existing browser workflows while they are migrated. Do not add new features to these legacy files; implement new functionality in Next.js and migrate existing interactions incrementally without dropping behavior or changing shared storage contracts unintentionally.
- `outputs/*.html` are archival snapshots, not production routes. Keep them available as reference while the compatibility UI remains.
- Keep the Next.js app deployable from the repository root through the Git-connected Vercel project. Verify a production deployment before describing a change as live.
