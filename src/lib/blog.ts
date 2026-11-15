import { getCollection, type CollectionEntry } from "astro:content";

export type Post = CollectionEntry<"blog">;
export type Category = Post["data"]["categories"][number];

/** All posts, newest first; only those in `category` if given. */
export async function getPosts(category?: Category): Promise<Post[]> {
  const posts = await getCollection(
    "blog",
    (post) => category === undefined || post.data.categories.includes(category),
  );
  return posts.toSorted((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

/** d/m/yy, matching the old Jekyll blog. */
export function formatDate(date: Date): string {
  return `${date.getUTCDate()}/${date.getUTCMonth() + 1}/${String(date.getUTCFullYear()).slice(2)}`;
}
