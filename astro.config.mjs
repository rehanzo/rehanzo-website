// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  integrations: [mdx()],

  // The site's public address. Astro uses it to build absolute URLs,
  // e.g. links in the RSS feed and canonical <link> tags.
  site: 'https://rehanzo.com',

  // Build each page as a file (blog/on-online-chess.html) rather than a folder
  // (blog/on-online-chess/index.html). The host serves it at both
  // /blog/on-online-chess and /blog/on-online-chess.html, so links to the old
  // Jekyll blog keep working either way.
  build: {
    format: 'file',
    // MDX combines component styles after CSP hashes are collected. External
    // stylesheets keep those styles covered by the existing 'self' policy.
    inlineStylesheets: 'never',
  },

  // Prism highlights code with CSS classes (styled in src/styles/prism.css).
  // Astro's default, Shiki, uses inline styles, which the CSP below would block.
  markdown: {
    syntaxHighlight: 'prism',
  },

  // Content Security Policy: tells browsers what each page may load. Astro adds
  // a <meta> tag to every page, allowing only the scripts and styles it built
  // itself (by hash). Everything not listed here is blocked.
  // Only applies to `npm run build` output, not the dev server.
  security: {
    csp: {
      directives: [
        "default-src 'none'",
        // Wikipedia: the album cover in the Gil Scott-Heron post.
        "img-src 'self' https://upload.wikimedia.org",
        // YouTube embeds (privacy-enhanced domain).
        "frame-src https://www.youtube-nocookie.com",
        "base-uri 'none'",
        "form-action 'none'",
      ],
    },
  },
});
