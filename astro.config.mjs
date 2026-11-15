// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // The site's public address. Astro uses it to build absolute URLs,
  // e.g. links in the RSS feed and canonical <link> tags.
  site: 'https://rehanzo.com',

  // Content Security Policy: tells browsers what each page may load. Astro adds
  // a <meta> tag to every page, allowing only the scripts and styles it built
  // itself (by hash). Everything not listed here is blocked.
  // Only applies to `npm run build` output, not the dev server.
  security: {
    csp: {
      directives: [
        "default-src 'none'",
        "img-src 'self'",
        "base-uri 'none'",
        "form-action 'none'",
      ],
    },
  },
});
