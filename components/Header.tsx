"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export const Header = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-4 py-3 md:px-8 md:py-4">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="glass-strong rounded-xl md:rounded-2xl px-4 py-3 md:px-6 md:py-4 max-w-7xl mx-auto flex items-center justify-between"
      >
        <Image
          src="/logo-white.png"
          alt="Dafon Logo"
          width={100}
          height={33}
          className="h-6 md:h-8 w-auto"
          priority
        />
        <div className="hidden md:flex items-center gap-6">
          <a href="#about" className="text-foreground/80 hover:text-foreground transition-colors font-medium">
            About
          </a>
          <a href="#locations" className="text-foreground/80 hover:text-foreground transition-colors font-medium">
            Locations
          </a>
          <a href="#partners" className="text-foreground/80 hover:text-foreground transition-colors font-medium">
            Partners
          </a>
          <a href="#projects" className="text-foreground/80 hover:text-foreground transition-colors font-medium">
            Projects
          </a>
          <a href="#contact" className="text-foreground/80 hover:text-foreground transition-colors font-medium">
            Contact
          </a>
        </div>
        <button className="md:hidden text-foreground/80">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </motion.div>
    </nav>
  );
};

