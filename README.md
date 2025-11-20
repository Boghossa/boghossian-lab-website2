
# Boghossian Lab Website (Deployment-Ready) **Stack:** Vite + React + React Router + Tailwind + Framer Motion **Color Scheme:** black / green / cyan ## Quickstart
```bash
npm install
npm run dev
# build
npm run build
npm run preview
``` ## Hosting
- **Vercel / Netlify / GitHub Pages**: use the `dist/` output of `npm run build`.
- Ensure the site is deployed with SPA fallback (serve `index.html` for unknown routes). ## Content Files
- `public/data/news.json` – array of `{title, date, link, summary}`
- `public/data/publications.json` – array of citation strings (newest first) ## Assets
All images and videos referenced by the site live under `public/` with exact filenames.
"# boghossian-lab-website2" 
