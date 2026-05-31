import Image from "next/image";
import Link from "next/link";
import type { Post } from "@/lib/blog";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getMDXComponents } from "./mdx-components";

type Props = {
  post: Post;
};

export function BlogArticle({ post }: Props) {
  const formattedDate = new Date(post.publishedAt).toLocaleDateString("en-GB", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const updatedDate =
    post.updatedAt !== post.publishedAt
      ? new Date(post.updatedAt).toLocaleDateString("en-GB", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })
      : null;

  return (
    <article className="max-w-3xl mx-auto px-4 py-8 md:py-12">
      {/* Back link */}
      <Link
        href="/blog"
        className="inline-flex items-center gap-1 text-sm text-foreground/60 hover:text-foreground/90 transition-colors mb-8"
      >
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
        All stories
      </Link>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-4">
        {post.tags.map((tag) => (
          <span
            key={tag}
            className="text-xs px-2 py-0.5 rounded-full glass text-purple-300 border-purple-500/30 border"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Title */}
      <h1 className="text-2xl md:text-4xl font-bold text-foreground leading-tight mb-4">
        {post.title}
      </h1>

      {/* Meta */}
      <div className="flex flex-wrap items-center gap-3 text-sm text-foreground/60 mb-8 pb-8 border-b border-foreground/10">
        <span className="font-medium text-foreground/80">{post.author}</span>
        <span aria-hidden="true">·</span>
        <time dateTime={post.publishedAt}>{formattedDate}</time>
        {updatedDate && (
          <>
            <span aria-hidden="true">·</span>
            <span>Updated {updatedDate}</span>
          </>
        )}
      </div>

      {/* Cover image */}
      <div className="relative w-full h-56 md:h-80 rounded-xl overflow-hidden mb-10 bg-linear-to-br from-purple-900/20 to-blue-900/20">
        <Image
          src={post.coverImage}
          alt={post.title}
          fill
          className="object-contain p-4"
          sizes="(max-width: 768px) 100vw, 768px"
          priority
        />
      </div>

      {/* MDX content */}
      <div className="prose-blog">
        <MDXRemote source={post.content} components={getMDXComponents()} />
      </div>

      {/* Author footer */}
      <div className="mt-12 pt-8 border-t border-foreground/10 flex items-center gap-4">
        <div>
          <p className="font-semibold text-foreground text-sm">{post.author}</p>
          <p className="text-xs text-foreground/60">CEO, Dafon</p>
        </div>
      </div>
    </article>
  );
}
