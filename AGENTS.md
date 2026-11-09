# Portfolio AI instructions

These instructions are intended for Codex and other agents that support
`AGENTS.md`. VS Code Copilot uses the equivalent
`.github/copilot-instructions.md`.

Use the local skills in `.agents/skills/` when they apply:

- `vercel-react-best-practices`: use for React implementation, refactoring, and performance work.
- `web-design-guidelines`: use for UI, UX, accessibility, and visual design reviews. Fetch the latest guidelines before a review.
- `find-skills`: use when a task may benefit from an installable agent skill.

## Project context

- This is a Vite + React portfolio. Preserve the existing JavaScript structure and npm scripts.
- Keep the visual language minimal, editorial, warm, and personal rather than copying another portfolio literally.
- Prefer accessible semantic HTML, keyboard navigation, responsive layouts, and reduced-motion support.
- Keep profile content in `src/data/portfolio.js` and project content in `src/data/projects.json`.
- Run `npm run build` and `npm run lint` after code changes.
- Do not add credentials, private data, generated `dist/` output, or dependency lockfiles created by a different package manager.
