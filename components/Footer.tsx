"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FaLinkedin, FaFacebookF, FaInstagram, FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="py-8 md:py-12 px-4 border-t border-foreground/10 mt-12 md:mt-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-8">
          <div className="flex flex-col items-center md:items-start">
            <Link href="/" className="mb-4">
              <Image
                src="/logo-white.png"
                alt="Dafon Logo"
                width={150}
                height={50}
                className="h-10 md:h-12 w-auto"
              />
            </Link>
            <p className="text-sm text-foreground/70 text-center md:text-left">
              Innovative solutions for your business transformation.
            </p>
          </div>

          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-lg font-semibold text-foreground mb-4">Contact</h3>
            <div className="space-y-3 text-sm text-foreground/70">
              <a href="mailto:dafondeveloper@gmail.com" className="flex items-center gap-2 hover:text-purple-400 transition-colors">
                <FaEnvelope className="text-purple-400" />
                <span>dafondeveloper@gmail.com</span>
              </a>
              <a href="https://wa.me/351913619053" className="flex items-center gap-2 hover:text-purple-400 transition-colors">
                <FaPhone className="text-purple-400" />
                <span>+351 913-619-053</span>
              </a>
            </div>
          </div>

          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-lg font-semibold text-foreground mb-4">Location</h3>
            <div className="space-y-3 text-sm text-foreground/70">
              <div className="flex items-start gap-2">
                <FaMapMarkerAlt className="text-purple-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium text-foreground">USA</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <FaMapMarkerAlt className="text-purple-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium text-foreground">Portugal</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-lg font-semibold text-foreground mb-4">Follow Us</h3>
            <div className="flex gap-3">
              <motion.a
                href="mailto:dafondeveloper@gmail.com"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="glass rounded-full p-3 hover:bg-white/20 transition-all"
                aria-label="Email"
              >
                <FaEnvelope className="text-lg text-foreground" />
              </motion.a>
              <motion.a
                href="https://br.linkedin.com/company/dafon-sistemas"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="glass rounded-full p-3 hover:bg-white/20 transition-all"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="text-lg text-foreground" />
              </motion.a>
              <motion.a
                href="https://www.facebook.com/dafonsistemas"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="glass rounded-full p-3 hover:bg-white/20 transition-all"
                aria-label="Facebook"
              >
                <FaFacebookF className="text-lg text-foreground" />
              </motion.a>
              <motion.a
                href="https://www.instagram.com/dafonsistema"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="glass rounded-full p-3 hover:bg-white/20 transition-all"
                aria-label="Instagram"
              >
                <FaInstagram className="text-lg text-foreground" />
              </motion.a>
            </div>
          </div>
        </div>

        <div className="pt-6 border-t border-foreground/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs md:text-sm text-foreground/60 text-center md:text-left">
              © {new Date().getFullYear()} Dafon. All rights reserved.
            </p>
            <div className="flex gap-4 text-xs md:text-sm text-foreground/60">
              <Link href="/privacy" className="hover:text-purple-400 transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-purple-400 transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
