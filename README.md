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

## Writing a blog post

Add a Markdown file to `src/content/blog/`. Its filename becomes the URL
(`my-post.md` → `/blog/my-post`). Front matter:

```yaml
---
title: My Post
date: 2026-11-15
categories: [tech] # any of: tech, life, music, collections
---
```

Put images in `src/content/blog/images/` and reference them relatively
(`![alt text](./images/photo.jpg)`); Astro converts them to WebP at build time.
Keep them at most ~1200px on their longest side. Images float left beside the
text on wide screens; wrap one in `<div class="centered">` (with blank lines
around the Markdown inside) to centre it instead.

## Deployment

Hosted on Cloudflare Workers (static assets), configured in `wrangler.jsonc`.

```sh
npm run deploy     # build, then upload dist/ to Cloudflare
```

`public/_headers` sets HTTP security headers Cloudflare adds to every response.
The Content Security Policy itself is generated per page by Astro (see
`security.csp` in `astro.config.mjs`).
