# rehanzo.com

Personal site (homepage, blog, CV) built with [Astro](https://astro.build).

## Development

```sh
npm install        # install dependencies
npm run dev -- --background # dev server with live reload at http://localhost:4321
npm run build      # build the static site into dist/
npm run preview    # serve the built dist/ locally
```

## Layout

- `src/pages/` — every file here becomes a page; the path is the URL
  (`src/pages/index.astro` → `/`, `src/pages/cv.astro` → `/cv`).
- `public/` — copied to the site as-is (favicons, images, fonts).
- `astro.config.mjs` — site-wide Astro configuration.

## Writing a blog post

Add a Markdown (`.md`) or MDX (`.mdx`) file to `src/content/blog/`. Its filename
without the extension becomes the URL (`my-post.mdx` → `/blog/my-post`). Use a
unique filename across both formats. Front matter:

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

Use MDX when a post needs custom components. For example, create a component at
`src/components/Diagram.astro`, import it after the post's front matter, and
place it between paragraphs:

```mdx
import Diagram from '../../components/Diagram.astro';

Some writing explaining the diagram.

<Diagram />
```

Component scripts and styles are built by Astro and only loaded on pages that
use them. Existing `.md` posts keep working unchanged.

Interactive components should provide an RSS alternative when
`Astro.locals.blogFeed` is true: render explanatory text or a static image with a
link to the post instead of interactive controls. The feed removes browser
scripts from the rendered HTML. Keep scripts in Astro `<script>` blocks and
styles in `<style>` blocks so the production Content Security Policy can
authorize them. Check the built site with `npm run preview`, since the policy
is not enforced by the dev server.

## Deployment

Hosted on Cloudflare Workers (static assets), configured in `wrangler.jsonc`.

```sh
npm run deploy     # build, then upload dist/ to Cloudflare
```

`public/_headers` sets HTTP security headers Cloudflare adds to every response.
The Content Security Policy itself is generated per page by Astro (see
`security.csp` in `astro.config.mjs`).
