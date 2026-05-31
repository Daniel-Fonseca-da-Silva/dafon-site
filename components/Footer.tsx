"use client";

import Image from "next/image";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="py-6 md:py-8 px-4 border-t border-foreground/10 mt-12 md:mt-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <Link href="/" aria-label="Dafon home">
          <Image
            src="/logo-white.png"
            alt="Dafon Logo"
            width={150}
            height={50}
            className="h-8 md:h-12 w-auto"
          />
        </Link>

        <nav className="flex flex-wrap justify-center gap-4 text-sm text-foreground/60">
          <Link href="/blog" className="hover:text-foreground/90 transition-colors">
            Blog
          </Link>
          <Link href="/blog/how-we-built-dafoncv" className="hover:text-foreground/90 transition-colors">
            DafonCV Story
          </Link>
          <Link href="/blog/how-we-built-techcuisine" className="hover:text-foreground/90 transition-colors">
            TechCuisine Story
          </Link>
          <Link href="/#contact" className="hover:text-foreground/90 transition-colors">
            Contact
          </Link>
        </nav>

        <p className="text-xs md:text-sm text-foreground/60 text-center md:text-right">
          © {new Date().getFullYear()} Dafon. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
