# Khadija Saeed — Portfolio

A React + TypeScript + Tailwind CSS (Vite) personal portfolio.

## Run it locally

This project was built in a sandbox without network access, so dependencies
have **not** been installed and the build has **not** been run here. On your
own machine, with Node.js 18+ installed:

```bash
npm install
npm run dev       # start the dev server
npm run build     # production build (also type-checks)
npm run preview   # preview the production build
```

## Where to edit content

All real content lives in a few structured data files — you shouldn't need
to touch component code to update text or links:

- `src/data/site.ts` — name, tagline, about text, education, social/contact
  links, "Why Work With Me" points, services list.
- `src/data/skills.ts` — skill categories and tags.
- `src/data/projects.ts` — LifeLens and Data Drift Monitor details
  (summary, problem, solution, features, technologies, links).

## Placeholders to replace

Search for `"#"` and `TODO` in `src/data/site.ts` and `src/data/projects.ts`:

- `site.links.github`
- `site.links.linkedin`
- `site.links.fiverr`
- `site.links.email` (left empty on purpose — no email was provided)
- `projects[].liveUrl` and `projects[].githubUrl` for both LifeLens and
  Data Drift Monitor

Project screenshots are in `src/assets/` and mapped to each project by slug
in `src/data/projectImages.ts`. To add or swap a screenshot: drop the image
in `src/assets/`, import it in `projectImages.ts`, and add/update its entry
in the `projectImages` object (keyed by the project's `slug` from
`src/data/projects.ts`).

## Notes

- Dark/light mode is a real toggle (top right of the nav), stored in
  `localStorage`, defaulting to the visitor's OS preference. No flash of
  the wrong theme on load.
- Mobile nav is a proper collapsing menu, not just a hidden desktop menu.
- No backend, auth, database, or AI API — matches the brief.
