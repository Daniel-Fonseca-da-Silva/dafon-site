import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page Not Found",
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-4 text-center">
      <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-4">404</h1>
      <p className="text-lg text-foreground/70 mb-8">This page does not exist.</p>
      <Link
        href="/"
        className="glass-strong px-6 py-3 rounded-xl font-semibold text-foreground hover:bg-white/20 transition-all"
      >
        Back to Dafon
      </Link>
    </main>
  );
}
