import Script from "next/script";
import { siteUrl, siteName } from "@/lib/site";
import type { Post, PostFrontmatter } from "@/lib/blog";

function buildBreadcrumbList(post?: Post) {
  const items = [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: siteUrl,
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Project Stories",
      item: `${siteUrl}/blog`,
    },
  ];

  if (post) {
    items.push({
      "@type": "ListItem",
      position: 3,
      name: post.title,
      item: `${siteUrl}/blog/${post.slug}`,
    });
  }

  return {
    "@type": "BreadcrumbList",
    itemListElement: items,
  };
}

function buildBlogPostingSchema(post: Post) {
  const canonicalUrl = `${siteUrl}/blog/${post.slug}`;

  const schema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting",
        "@id": `${canonicalUrl}/#blogposting`,
        headline: post.title,
        description: post.description,
        datePublished: post.publishedAt,
        dateModified: post.updatedAt,
        author: {
          "@type": "Person",
          name: post.author,
          jobTitle: "Chief Executive Officer",
          worksFor: {
            "@type": "Organization",
            name: siteName,
            url: siteUrl,
          },
        },
        publisher: {
          "@type": "Organization",
          name: siteName,
          url: siteUrl,
          logo: {
            "@type": "ImageObject",
            url: `${siteUrl}/logo-white.png`,
          },
        },
        image: {
          "@type": "ImageObject",
          url: `${siteUrl}${post.coverImage}`,
        },
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": canonicalUrl,
        },
        keywords: post.tags.join(", "),
        inLanguage: "en-GB",
        ...(post.projectUrl
          ? {
              mentions: {
                "@type": "SoftwareApplication",
                url: post.projectUrl,
                operatingSystem: "Web",
              },
              isRelatedTo: {
                "@type": "SoftwareApplication",
                url: post.projectUrl,
              },
            }
          : {}),
      },
      buildBreadcrumbList(post),
    ],
  };

  return schema;
}

function buildBlogSchema(posts: PostFrontmatter[]) {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Blog",
        "@id": `${siteUrl}/blog/#blog`,
        name: `${siteName} Project Stories`,
        description:
          "Behind-the-scenes stories from the teams building DafonCV and TechCuisine — AI applications and SaaS products built by Dafon.",
        url: `${siteUrl}/blog`,
        publisher: {
          "@type": "Organization",
          name: siteName,
          url: siteUrl,
        },
        blogPost: posts.map((p) => ({
          "@type": "BlogPosting",
          headline: p.title,
          url: `${siteUrl}/blog/${p.slug}`,
          datePublished: p.publishedAt,
        })),
        inLanguage: "en-GB",
      },
      buildBreadcrumbList(),
    ],
  };
}

type Props =
  | { variant: "post"; post: Post }
  | { variant: "index"; posts: PostFrontmatter[] };

export function BlogStructuredData(props: Props) {
  const data =
    props.variant === "post"
      ? buildBlogPostingSchema(props.post)
      : buildBlogSchema(props.posts);

  return (
    <Script
      id="blog-structured-data"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
