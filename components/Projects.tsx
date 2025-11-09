"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FaExternalLinkAlt } from "react-icons/fa";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export const Projects = () => {
  return (
    <section id="projects" className="py-12 md:py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 md:mb-12"
        >
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 md:mb-4">
            Our <span className="text-gradient-purple">Projects</span>
          </h2>
          <p className="text-base md:text-lg text-foreground/70 max-w-2xl mx-auto">
            Explore some of our recent work and innovative solutions.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-6 md:gap-8 lg:gap-12"
        >
          <motion.article variants={fadeInUp}>
            <motion.a
              href="https://www.dafoncv.online"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="block h-full"
            >
              <Card className="glass-strong border-0 overflow-hidden h-full group cursor-pointer hover:bg-white/10 transition-all">
                <div className="relative h-64 md:h-80 lg:h-96 bg-linear-to-br from-purple-900/20 to-blue-900/20">
                  <Image
                    src="/projects/dafoncv-banner.jpg"
                    alt="Dafoncv - AI-powered CV creation platform developed by Dafon"
                    fill
                    className="object-contain p-4 group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl md:text-2xl text-foreground flex items-center justify-between gap-2">
                    <h3>Dafoncv - Creation customized CV With AI</h3>
                    <FaExternalLinkAlt className="text-purple-400 opacity-0 group-hover:opacity-100 transition-opacity" aria-hidden="true" />
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm md:text-base text-foreground/80 leading-relaxed">
                    Developed in Portugal by Dafon, this innovative SaaS platform was built from the ground up using cutting-edge 
                    technologies including Golang and Next.js, following European quality standards and best practices. Designed 
                    with a robust architecture by our qualified professionals, this project was born from a humanitarian vision 
                    to empower unemployed individuals and career changers, providing them with the tools they need to create 
                    professional CVs and access new opportunities in the job market.
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.a>
          </motion.article>

          <motion.article variants={fadeInUp}>
            <motion.a
              href="https://github.com/Daniel-Fonseca-da-Silva/Dafon-PDF-Extractor-API"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="block h-full"
            >
              <Card className="glass-strong border-0 overflow-hidden h-full group cursor-pointer hover:bg-white/10 transition-all">
                <div className="relative h-64 md:h-80 lg:h-96 bg-linear-to-br from-purple-900/20 to-blue-900/20">
                  <Image
                    src="/projects/dafon-pdf-extractor-api-banner.jpg"
                    alt="Dafon PDF Extractor API - Python-based PDF data extraction solution for European market"
                    fill
                    className="object-contain p-4 group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl md:text-2xl text-foreground flex items-center justify-between gap-2">
                    <h3>Dafon PDF Extractor - Extract data from PDF</h3>
                    <FaExternalLinkAlt className="text-purple-400 opacity-0 group-hover:opacity-100 transition-opacity" aria-hidden="true" />
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm md:text-base text-foreground/80 leading-relaxed">
                    Recognizing a critical need in the European market for robust PDF data processing solutions, Dafon developed 
                    a comprehensive API built with Python to extract and identify company names, NIFs (Portuguese Tax Identification 
                    Numbers), and related business data from PDF documents. As a company committed to creating high-quality products 
                    that adhere to industry standards and best practices, Dafon designed this API with enterprise-grade reliability, 
                    comprehensive documentation, and complete open access for developers and businesses seeking efficient document 
                    processing capabilities.
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.a>
          </motion.article>
        </motion.div>
      </div>
    </section>
  );
};

