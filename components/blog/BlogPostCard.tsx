import Link from "next/link";
import Image from "next/image";
import type { PostFrontmatter } from "@/lib/blog";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type Props = {
  post: PostFrontmatter;
};

export function BlogPostCard({ post }: Props) {
  const formattedDate = new Date(post.publishedAt).toLocaleDateString("en-GB", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <Link href={`/blog/${post.slug}`} className="block h-full group">
      <Card className="glass-strong border-0 overflow-hidden h-full cursor-pointer hover:bg-white/10 transition-all">
        <div className="relative h-52 md:h-64 bg-linear-to-br from-purple-900/20 to-blue-900/20">
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            className="object-contain p-4 group-hover:scale-105 transition-transform duration-300"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
        <CardHeader className="pb-2">
          <div className="flex flex-wrap gap-2 mb-2">
            {post.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="text-xs px-2 py-0.5 rounded-full glass text-purple-300 border-purple-500/30 border"
              >
                {tag}
              </span>
            ))}
          </div>
          <CardTitle className="text-lg md:text-xl text-foreground leading-snug group-hover:text-purple-300 transition-colors">
            {post.title}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm md:text-base text-foreground/70 leading-relaxed line-clamp-3 mb-3">
            {post.description}
          </p>
          <div className="flex items-center justify-between text-xs text-foreground/50">
            <span>{post.author}</span>
            <time dateTime={post.publishedAt}>{formattedDate}</time>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
