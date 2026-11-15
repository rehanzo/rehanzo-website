// Content collections: tells Astro where the blog posts are and what their
// front matter must look like. A post with a missing title or an unknown
// category fails the build instead of silently rendering wrong.
import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const blog = defineCollection({
  // Each .md file is one post; its filename (minus .md) is the URL slug.
  loader: glob({ pattern: "*.md", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    categories: z.array(z.enum(["tech", "life", "music", "collections"])),
  }),
});

export const collections = { blog };
