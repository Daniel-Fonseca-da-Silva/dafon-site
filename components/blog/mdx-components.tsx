import Link from "next/link";
import type { MDXComponents } from "mdx/types";
import { ProjectCTA } from "./ProjectCTA";

export function getMDXComponents(): MDXComponents {
  return {
    h2: ({ children }) => (
      <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-10 mb-4">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-xl md:text-2xl font-semibold text-foreground mt-8 mb-3">
        {children}
      </h3>
    ),
    p: ({ children }) => (
      <p className="text-base md:text-lg text-foreground/85 leading-relaxed mb-5">
        {children}
      </p>
    ),
    ul: ({ children }) => (
      <ul className="list-disc list-inside space-y-2 mb-5 text-foreground/85 text-base md:text-lg">
        {children}
      </ul>
    ),
    ol: ({ children }) => (
      <ol className="list-decimal list-inside space-y-2 mb-5 text-foreground/85 text-base md:text-lg">
        {children}
      </ol>
    ),
    li: ({ children }) => <li className="leading-relaxed">{children}</li>,
    a: ({ href, children }) => {
      if (href?.startsWith("http")) {
        return (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-purple-300 underline underline-offset-2 hover:text-purple-200 transition-colors"
          >
            {children}
          </a>
        );
      }
      return (
        <Link
          href={href ?? "#"}
          className="text-purple-300 underline underline-offset-2 hover:text-purple-200 transition-colors"
        >
          {children}
        </Link>
      );
    },
    strong: ({ children }) => (
      <strong className="font-semibold text-foreground">{children}</strong>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-purple-500 pl-4 my-6 text-foreground/70 italic">
        {children}
      </blockquote>
    ),
    hr: () => <hr className="border-foreground/15 my-8" />,
    ProjectCTA,
  };
}
