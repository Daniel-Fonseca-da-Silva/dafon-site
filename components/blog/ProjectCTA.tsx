import Link from "next/link";
import { FaExternalLinkAlt } from "react-icons/fa";

type Props = {
  url: string;
  label?: string;
};

export function ProjectCTA({ url, label = "Visit the project" }: Props) {
  return (
    <div className="my-10 flex justify-center">
      <Link
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-3 px-8 py-4 rounded-xl glass-strong text-foreground font-semibold text-base hover:bg-white/20 transition-all group"
      >
        <span className="text-gradient-purple">{label}</span>
        <FaExternalLinkAlt
          className="text-purple-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
          aria-hidden="true"
        />
      </Link>
    </div>
  );
}
