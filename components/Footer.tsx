"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FaLinkedin, FaFacebookF, FaInstagram, FaEnvelope } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="py-6 md:py-8 px-4 border-t border-foreground/10 mt-12 md:mt-20">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <Link href="/">
            <Image
              src="/logo-white.png"
              alt="Dafon Logo"
              width={150}
              height={50}
              className="h-8 md:h-12 w-auto cursor-pointer"
            />
          </Link>
          
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6 lg:gap-8">
            <motion.a
              href="mailto:dafondeveloper@gmail.com"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="glass rounded-full p-4 hover:bg-white/20 transition-all"
              aria-label="Email"
            >
              <FaEnvelope className="text-xl md:text-2xl text-foreground" />
            </motion.a>
            <motion.a
              href="https://br.linkedin.com/company/dafon-sistemas"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="glass rounded-full p-4 hover:bg-white/20 transition-all"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="text-xl md:text-2xl text-foreground" />
            </motion.a>
            <motion.a
              href="https://www.facebook.com/dafonsistemas"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="glass rounded-full p-4 hover:bg-white/20 transition-all"
              aria-label="Facebook"
            >
              <FaFacebookF className="text-xl md:text-2xl text-foreground" />
            </motion.a>
            <motion.a
              href="https://www.instagram.com/dafonsistema"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="glass rounded-full p-4 hover:bg-white/20 transition-all"
              aria-label="Instagram"
            >
              <FaInstagram className="text-xl md:text-2xl text-foreground" />
            </motion.a>
          </div>

          <p className="text-xs md:text-sm text-foreground/60 text-center md:text-left">
            © {new Date().getFullYear()} Dafon. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
