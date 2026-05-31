import { ImageResponse } from "next/og";
import { getAllPosts, getPostBySlug } from "@/lib/blog";

export const runtime = "nodejs";
export const alt = "Dafon Blog Post";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((p) => ({ slug: p.slug }));
}

export default async function BlogOGImage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  const title = post?.title ?? "Dafon Project Stories";
  const date = post
    ? new Date(post.publishedAt).toLocaleDateString("en-GB", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : "";

  return new ImageResponse(
    (
      <div
        style={{
          width: 1200,
          height: 630,
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          padding: "60px",
          background: "linear-gradient(135deg, #0d0b1a 0%, #1a0f2e 50%, #0f1626 100%)",
          fontFamily: "sans-serif",
        }}
      >
        {/* Purple accent bar */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: 6,
            background: "linear-gradient(90deg, #9333ea, #a855f7, #9333ea)",
          }}
        />

        {/* Site name */}
        <div
          style={{
            position: "absolute",
            top: 40,
            left: 60,
            fontSize: 24,
            color: "rgba(255,255,255,0.5)",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
          }}
        >
          Dafon · Project Stories
        </div>

        {/* Title */}
        <div
          style={{
            fontSize: title.length > 60 ? 42 : 52,
            fontWeight: 700,
            color: "#ffffff",
            lineHeight: 1.2,
            marginBottom: 24,
            maxWidth: 900,
          }}
        >
          {title}
        </div>

        {/* Date + author */}
        {date && (
          <div
            style={{
              display: "flex",
              gap: 16,
              fontSize: 20,
              color: "rgba(255,255,255,0.55)",
            }}
          >
            <span>{post?.author}</span>
            <span>·</span>
            <span>{date}</span>
          </div>
        )}
      </div>
    ),
    { ...size }
  );
}
