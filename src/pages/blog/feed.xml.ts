// The blog's RSS feed, at /blog/feed.xml. A .ts file in src/pages is an
// "endpoint": instead of HTML, it returns whatever GET() produces.
import rss from "@astrojs/rss";
import { render } from "astro:content";
import { experimental_AstroContainer as AstroContainer } from "astro/container";
import { loadRenderers } from "astro:container";
import { getContainerRenderer } from "@astrojs/mdx/container-renderer";
import { getPosts, type Post } from "../../lib/blog";

const site = import.meta.env.SITE;

// Render a post's full body to HTML. Going through Astro (rather than the raw
// Markdown output) resolves images to their real optimised files.
async function renderHtml(container: AstroContainer, post: Post): Promise<string> {
  const { Content } = await render(post);
  const html = await container.renderToString(Content, { locals: { blogFeed: true } });
  // The container emits hoisted browser scripts even for RSS alternatives.
  // Remove those generated tags: they are unusable in feeds and contain source
  // module paths. This is trusted, locally authored HTML, not sanitization.
  const feedHtml = html.replaceAll(/<script\b[^>]*>[\s\S]*?<\/script\s*>/gi, "");
  // Feed readers fetch from elsewhere, so site-relative links need the domain.
  return feedHtml.replaceAll(/(src|href)="\//g, `$1="${site}/`);
}

export async function GET() {
  const renderers = await loadRenderers([getContainerRenderer()]);
  const container = await AstroContainer.create({ renderers });
  const posts = await getPosts();
  return rss({
    title: "rehanzo",
    description: "rehanzo's blog",
    site,
    // Pages are built as files (see build.format), so no trailing slash.
    trailingSlash: false,
    items: await Promise.all(
      posts.map(async (post) => ({
        title: post.data.title,
        pubDate: post.data.date,
        link: `/blog/${post.id}`,
        content: await renderHtml(container, post),
      })),
    ),
  });
}
