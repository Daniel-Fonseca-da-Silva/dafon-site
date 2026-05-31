import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { cache } from "react";

export type PostFrontmatter = {
  title: string;
  description: string;
  slug: string;
  publishedAt: string;
  updatedAt: string;
  author: string;
  coverImage: string;
  projectUrl: string;
  tags: string[];
};

export type Post = PostFrontmatter & {
  content: string;
};

const postsDir = path.join(process.cwd(), "content/blog");

export const getAllPosts = cache((): PostFrontmatter[] => {
  const files = fs.readdirSync(postsDir).filter((f) => f.endsWith(".mdx"));
  return files
    .map((file) => {
      const raw = fs.readFileSync(path.join(postsDir, file), "utf-8");
      const { data } = matter(raw);
      return data as PostFrontmatter;
    })
    .sort(
      (a, b) =>
        new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
    );
});

export const getPostBySlug = cache((slug: string): Post | null => {
  const filePath = path.join(postsDir, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;
  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);
  return { ...(data as PostFrontmatter), content };
});
