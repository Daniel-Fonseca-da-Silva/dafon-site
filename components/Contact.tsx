"use client";

import { motion } from "framer-motion";
import { FaLinkedin, FaFacebookF, FaInstagram, FaEnvelope } from "react-icons/fa";
import { Card } from "@/components/ui/card";

export const Contact = () => {
  return (
    <section id="contact" className="py-12 md:py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 md:mb-12"
        >
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 md:mb-4">
            Get in <span className="text-gradient-purple">Touch</span>
          </h2>
          <p className="text-base md:text-lg text-foreground/70">
            Ready to transform your business? Let&apos;s start a conversation.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Card className="glass-strong border-0 p-6 md:p-8 lg:p-12">
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
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

