import { getAllPosts } from "@/lib/blog";
import { siteUrl, siteName } from "@/lib/site";

function escapeXml(str: string) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export async function GET() {
  const posts = getAllPosts();

  const items = posts
    .map(
      (p) => `
  <item>
    <title>${escapeXml(p.title)}</title>
    <link>${siteUrl}/blog/${p.slug}</link>
    <guid isPermaLink="true">${siteUrl}/blog/${p.slug}</guid>
    <description>${escapeXml(p.description)}</description>
    <pubDate>${new Date(p.publishedAt).toUTCString()}</pubDate>
    <author>${escapeXml(p.author)}</author>
    ${p.tags.map((t) => `<category>${escapeXml(t)}</category>`).join("\n    ")}
  </item>`
    )
    .join("");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${escapeXml(siteName)} Project Stories</title>
    <link>${siteUrl}/blog</link>
    <description>Behind-the-scenes stories from the teams building DafonCV and TechCuisine.</description>
    <language>en-gb</language>
    <atom:link href="${siteUrl}/feed.xml" rel="self" type="application/rss+xml"/>
    ${items}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, stale-while-revalidate",
    },
  });
}
