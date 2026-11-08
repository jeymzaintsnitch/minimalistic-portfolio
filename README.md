# Minimalist Portfolio — James Rolmer V. Catalan

Single-page minimalist portfolio built with React 19, Vite, and custom typography design.

## Features
- **Clean Editorial Aesthetic**: Monochromatic dark mode (`#121212`) and warm cream light mode (`#FBF9F5`).
- **Typography**: Instrument Serif, Alumni Serif, and Geist/GeistMono stacks.
- **Tabs & Sections**: James (About & Now), Work, Hobbies, Projects.
- **Keyboard Navigation**: Press `1–4` to switch tabs, `T` to toggle theme.

## Scripts

```bash
npm install      # install dependencies
npm run dev      # start dev server on port 3000
npm run build    # production build to dist/
npm run preview  # preview production build
npm run lint     # run oxlint
```

## Customising

All content (name, roles, bio, skills, projects, experience, links) lives in
`src/data/portfolio.js` and `src/data/projects.json`.
Colors, fonts, and spacing tokens are in `src/styles/variables.css`.
