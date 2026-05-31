import type { Metadata } from "next";
import { getAllPosts } from "@/lib/blog";
import { siteUrl, siteName } from "@/lib/site";
import { BlogPostCard } from "@/components/blog/BlogPostCard";
import { BlogStructuredData } from "@/components/blog/BlogStructuredData";

const title = "Project Stories";
const description =
  "Behind-the-scenes stories from the teams building DafonCV and TechCuisine — the decisions, challenges, and lessons from shipping real AI-powered products.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: `${siteUrl}/blog`,
  },
  openGraph: {
    type: "website",
    url: `${siteUrl}/blog`,
    title: `${title} | ${siteName}`,
    description,
    siteName,
    locale: "en_GB",
    images: [
      {
        url: `${siteUrl}/blog/opengraph-image`,
        width: 1200,
        height: 630,
        alt: `${title} | ${siteName}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${title} | ${siteName}`,
    description,
    images: [`${siteUrl}/blog/opengraph-image`],
  },
};

export default function BlogIndexPage() {
  const posts = getAllPosts();

  return (
    <>
      <BlogStructuredData variant="index" posts={posts} />
      <section className="py-12 md:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10 md:mb-14">
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3">
              Project{" "}
              <span className="text-gradient-purple">Stories</span>
            </h1>
            <p className="text-base md:text-lg text-foreground/70 max-w-2xl mx-auto">
              The decisions, challenges, and lessons from building real products
              at Dafon.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {posts.map((post) => (
              <BlogPostCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
