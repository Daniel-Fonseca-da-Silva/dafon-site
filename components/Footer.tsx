"use client";

import Image from "next/image";

export const Footer = () => {
  return (
    <footer className="py-6 md:py-8 px-4 border-t border-foreground/10 mt-12 md:mt-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <Image
          src="/logo-white.png"
          alt="Dafon Logo"
          width={150}
          height={50}
          className="h-8 md:h-12 w-auto"
        />
        <p className="text-xs md:text-sm text-foreground/60 text-center md:text-left">
          © {new Date().getFullYear()} Dafon. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

