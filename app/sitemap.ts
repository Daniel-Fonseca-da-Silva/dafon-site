import { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/blog";

// Stable build-time constant; update manually on major homepage changes
const HOMEPAGE_LAST_MODIFIED = "2026-05-31";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL;

  if (!baseUrl) {
    throw new Error("NEXT_PUBLIC_SITE_URL environment variable is required");
  }

  const posts = getAllPosts();

  const postEntries: MetadataRoute.Sitemap = posts.map((p) => ({
    url: `${baseUrl}/blog/${p.slug}`,
    lastModified: new Date(p.updatedAt),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(HOMEPAGE_LAST_MODIFIED),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: posts[0] ? new Date(posts[0].updatedAt) : new Date(HOMEPAGE_LAST_MODIFIED),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    ...postEntries,
  ];
}
