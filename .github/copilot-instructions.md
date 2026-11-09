# Portfolio coding instructions

This is a Vite + React portfolio. Preserve the existing JavaScript structure and
npm scripts.

## Project conventions

- Keep the visual language minimal, editorial, warm, and personal.
- Use semantic HTML, keyboard-accessible controls, responsive layouts, and
  reduced-motion support.
- Keep profile content in `src/data/portfolio.js` and project content in
  `src/data/projects.json`.
- Reuse existing components, hooks, CSS variables, and styles before adding new
  patterns.
- Do not copy another portfolio's personal content, branding, assets, or exact
  implementation. Use references only as visual inspiration and make the result
  original.

## Skills and reviews

When applicable, read and apply:

- `.agents/skills/vercel-react-best-practices/SKILL.md` for React implementation,
  refactoring, and performance work.
- `.agents/skills/web-design-guidelines/SKILL.md` for UI, UX, accessibility, and
  visual design reviews. Fetch its latest guidelines source before a review.
- `.agents/skills/find-skills/SKILL.md` when a task may benefit from an
  installable agent skill.

## Validation

Run `npm run build` and `npm run lint` after code changes. Do not commit
credentials, private data, generated `dist/` output, or dependency lockfiles
created by a different package manager.
