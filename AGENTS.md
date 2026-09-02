<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

## Project-specific agent guidance

This portfolio is being built primarily by hand by the repo owner, with AI agents (Claude Code, etc.) acting as guidance/review — not as the primary author. Default to explaining concepts and pointing to what needs to change, rather than writing full implementations, unless explicitly asked to write code directly.

This project is a deliberate learning exercise, specifically for:
- Editing in Neovim (not delegating editing to an agent's own tools where avoidable)
- Developing on a remote Ubuntu server over SSH, rather than locally
- Next.js itself, and its deployment tooling (Vercel, Cloudflare DNS)

Living project doc: `~/vaults/obsidian/01-Projects/Hermes/portfolio.md` — tracks planned features, stack decisions, and prior decisions/history. Check it for fuller context than fits here.

### Dev environment gotcha
Development happens over SSH on the homelab server, viewed from a separate machine on the same LAN — so:
- Run the dev server bound to all interfaces: `next dev --turbo -H 0.0.0.0`
- `next.config.ts` needs `allowedDevOrigins` set to the LAN IP viewing the site, or the page loads but hot-reload silently breaks (Next.js 16 blocks cross-origin HMR requests by default, logged as a warning in the dev server output, not the browser).
