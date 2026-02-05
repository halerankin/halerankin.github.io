# Portfolio — Hale Rankin

Senior front-end engineer portfolio. Built with Vite + React + TypeScript, deployed to GitHub Pages.

**Live site:** [https://halerankin.github.io/](https://halerankin.github.io/)

---

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173). The app uses **HashRouter**, so in dev you’ll see URLs like `http://localhost:5173/#/work`.

---

## Build

```bash
npm run build
```

Output is in `dist/`. To preview the production build locally:

```bash
npm run preview
```

---

## GitHub Pages setup

This repo is set up as a **user site** (`halerankin.github.io`). The site is served at the root: **https://halerankin.github.io/**.

1. **Enable Pages**
   - Repo **Settings → Pages**
   - Under **Build and deployment**, set **Source** to **GitHub Actions**.

2. **Deploy**
   - Pushing to `main` runs the workflow in `.github/workflows/deploy.yml`.
   - It runs `npm ci`, `npm run build`, then uploads `dist` and deploys to Pages.

3. **Base path**
   - Base is `/` (no subpath). No environment variable is needed for this user site.

---

## Custom domain (optional)

In **Settings → Pages**, add your custom domain and follow GitHub’s instructions (CNAME, DNS). The app does not assume a custom domain; it works with the default `*.github.io` URL.

---

## Troubleshooting

| Issue | Cause | Fix |
|-------|--------|-----|
| Assets not loading (broken CSS/JS) | Base path mismatch | This user site uses `base: "/"` in `vite.config.ts`. If you switch to a project site, set `base: "/REPO_NAME/"`. |
| Blank page | Wrong base or router | Ensure `base: '/'` and that you’re using **HashRouter** (not BrowserRouter) for Pages. |
| 404 on refresh on a deep route | GitHub Pages serves one `index.html`; client routes need hash routing | We use **HashRouter** so the path lives in the hash (`#/work`). Refreshing keeps the same document and avoids 404s. |
| `public/404.html` | Fallback for direct requests to missing paths | Vite copies it to `dist/404.html`. Useful for non-SPA requests. |

---

## Project structure

- **`src/content/projects.ts`** — Typed project/case study data (drives Work + Case Study pages).
- **`src/components/`** — Layout (AppShell, SkipToContent), Typography (Section), Cards (ProjectCard), Buttons (ButtonLink).
- **`src/pages/`** — Home, Work, CaseStudy, About, Resume, NotFound.
- **`src/styles/`** — `globals.css` (variables, resets, focus), `layout.css` (shell).
- **`public/404.html`** — Fallback 404 page (copied to `dist`).

---

## Commands

| Command | Description |
|--------|-------------|
| `npm run dev` | Start dev server |
| `npm run build` | Type-check + production build |
| `npm run preview` | Serve `dist` locally |
| `npm run lint` | Run ESLint |
