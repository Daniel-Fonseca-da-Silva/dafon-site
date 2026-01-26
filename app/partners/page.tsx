"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PulseBeams } from "@/components/ui/pulse-beams";
import { backgroundBeams, backgroundGradientColors } from "@/lib/backgroundBeamsConfig";
import { FaHandshake, FaCheckCircle } from "react-icons/fa";

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

export default function PartnersPage() {
  return (
    <main className="min-h-screen relative">
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <PulseBeams
          beams={backgroundBeams}
          gradientColors={backgroundGradientColors}
          width={1920}
          height={1080}
          baseColor="rgba(168, 85, 247, 0.15)"
          accentColor="rgba(168, 85, 247, 0.25)"
          className="w-full h-full opacity-40"
        />
      </div>

      <div className="relative z-10">
        <Header />

        <section id="partners" className="pt-32 md:pt-40 pb-12 md:pb-20 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-8 md:mb-12"
            >
              <motion.h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 md:mb-4">
                Our <motion.span
                  className="text-gradient-purple inline-block"
                  animate={{
                    scale: [1, 1.05, 1],
                    rotate: [0, 2, -2, 0]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatDelay: 1
                  }}
                >
                  Partners
                </motion.span>
              </motion.h2>
              <p className="text-base md:text-lg text-foreground/70 max-w-2xl mx-auto">
                Strategic partnerships that strengthen our global presence and enhance our service delivery.
              </p>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="grid sm:grid-cols-2 gap-4 md:gap-6 lg:gap-8 max-w-4xl mx-auto"
            >
              <motion.div variants={fadeInUp}>
                <Card className="glass-strong border-0 h-full group cursor-pointer hover:bg-white/5 transition-all relative overflow-hidden">
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute inset-0 rounded-lg animate-[spin_2s_linear_infinite]" 
                         style={{
                           background: 'conic-gradient(from 0deg, rgba(168, 85, 247, 1) 0%, rgba(139, 92, 246, 1) 5%, transparent 15%, transparent 85%, rgba(139, 92, 246, 1) 95%, rgba(168, 85, 247, 1) 100%)',
                           filter: 'blur(4px)'
                         }}>
                    </div>
                    <div className="absolute inset-[1px] bg-[#0a0a0a] rounded-lg"></div>
                  </div>
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute inset-0 rounded-lg shadow-[0_0_30px_rgba(168,85,247,0.6)]"></div>
                  </div>
                  <div className="relative z-10">
                    <CardHeader className="text-center pb-4 pt-6">
                      <div className="mx-auto mb-4 w-16 h-16 rounded-full bg-purple-500/20 flex items-center justify-center group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(168,85,247,0.8)] transition-all">
                        <FaHandshake className="text-3xl text-purple-400" />
                      </div>
                      <CardTitle className="text-foreground text-xl mb-2">Brazil Partnership</CardTitle>
                      <p className="text-sm text-foreground/70 px-2">
                        Our strategic partnership in Brazil enables us to deliver exceptional services across Latin America with local expertise and global standards.
                      </p>
                    </CardHeader>
                    <CardContent className="pb-6">
                      <ul className="space-y-2 text-sm text-foreground/80">
                        <li className="flex items-start gap-2">
                          <FaCheckCircle className="text-purple-400 mt-1 flex-shrink-0" />
                          <span>Latin American market access</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <FaCheckCircle className="text-purple-400 mt-1 flex-shrink-0" />
                          <span>Local expertise & support</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <FaCheckCircle className="text-purple-400 mt-1 flex-shrink-0" />
                          <span>Regional innovation hub</span>
                        </li>
                      </ul>
                    </CardContent>
                  </div>
                </Card>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <Card className="glass-strong border-0 h-full group cursor-pointer hover:bg-white/5 transition-all relative overflow-hidden">
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute inset-0 rounded-lg animate-[spin_2s_linear_infinite]" 
                         style={{
                           background: 'conic-gradient(from 0deg, rgba(168, 85, 247, 1) 0%, rgba(139, 92, 246, 1) 5%, transparent 15%, transparent 85%, rgba(139, 92, 246, 1) 95%, rgba(168, 85, 247, 1) 100%)',
                           filter: 'blur(4px)'
                         }}>
                    </div>
                    <div className="absolute inset-[1px] bg-[#0a0a0a] rounded-lg"></div>
                  </div>
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute inset-0 rounded-lg shadow-[0_0_30px_rgba(168,85,247,0.6)]"></div>
                  </div>
                  <div className="relative z-10">
                    <CardHeader className="text-center pb-4 pt-6">
                      <div className="mx-auto mb-4 w-16 h-16 rounded-full bg-purple-500/20 flex items-center justify-center group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(168,85,247,0.8)] transition-all">
                        <FaHandshake className="text-3xl text-purple-400" />
                      </div>
                      <CardTitle className="text-foreground text-xl mb-2">Canada Partnership</CardTitle>
                      <p className="text-sm text-foreground/70 px-2">
                        Our Canadian partnership provides access to North American markets and connects us with leading technology companies and innovation centers.
                      </p>
                    </CardHeader>
                    <CardContent className="pb-6">
                      <ul className="space-y-2 text-sm text-foreground/80">
                        <li className="flex items-start gap-2">
                          <FaCheckCircle className="text-purple-400 mt-1 flex-shrink-0" />
                          <span>North American expansion</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <FaCheckCircle className="text-purple-400 mt-1 flex-shrink-0" />
                          <span>Tech ecosystem integration</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <FaCheckCircle className="text-purple-400 mt-1 flex-shrink-0" />
                          <span>Collaborative innovation</span>
                        </li>
                      </ul>
                    </CardContent>
                  </div>
                </Card>
              </motion.div>
            </motion.div>
          </div>
        </section>

        <Footer />
      </div>
    </main>
  );
}
