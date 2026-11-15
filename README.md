# rehanzo.com

Personal site (homepage, blog, CV) built with [Astro](https://astro.build).

## Development

```sh
npm install        # install dependencies
npm run dev        # dev server with live reload at http://localhost:4321
npm run build      # build the static site into dist/
npm run preview    # serve the built dist/ locally
```

## Layout

- `src/pages/` — every file here becomes a page; the path is the URL
  (`src/pages/index.astro` → `/`, `src/pages/cv.astro` → `/cv`).
- `public/` — copied to the site as-is (favicons, images, fonts).
- `astro.config.mjs` — site-wide Astro configuration.

## Deployment

Migrating from GitHub Pages to Cloudflare. Until the switch-over, GitHub Pages
still publishes the repository root from `master`, so do not merge this work into
`master` before Cloudflare serves the site.
