"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PulseBeams } from "@/components/ui/pulse-beams";
import { backgroundBeams, backgroundGradientColors } from "@/lib/backgroundBeamsConfig";
import { FaCheckCircle } from "react-icons/fa";

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

export default function AboutPage() {
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

        <section id="about" className="pt-32 md:pt-40 pb-12 md:pb-20 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-8 md:mb-12"
            >
              <motion.h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 md:mb-4">
                About <motion.span
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
                  Dafon
                </motion.span>
              </motion.h2>
              <p className="text-base md:text-lg text-foreground/70 max-w-2xl mx-auto">
                We are a forward-thinking company dedicated to excellence and innovation in everything we do.
              </p>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8"
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
                        <svg className="w-8 h-8 text-purple-400" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5zm0 18c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6zm0-10c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4z"/>
                          <circle cx="12" cy="14" r="2"/>
                        </svg>
                      </div>
                      <CardTitle className="text-foreground text-xl mb-2">AI-Powered Solutions</CardTitle>
                      <p className="text-sm text-foreground/70 px-2">
                        Transform your workflows with cutting-edge ML/LLM integration. We automate repetitive tasks, enhance decision-making, and unlock new possibilities for your business.
                      </p>
                    </CardHeader>
                    <CardContent className="pb-6">
                      <ul className="space-y-2 text-sm text-foreground/80">
                        <li className="flex items-start gap-2">
                          <FaCheckCircle className="text-purple-400 mt-1 flex-shrink-0" />
                          <span>Advanced Machine Learning & Deep Learning</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <FaCheckCircle className="text-purple-400 mt-1 flex-shrink-0" />
                          <span>Generative AI & LLM Integration</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <FaCheckCircle className="text-purple-400 mt-1 flex-shrink-0" />
                          <span>Cutting-edge automation & intelligent systems</span>
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
                        <svg className="w-8 h-8 text-purple-400" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9zM17 15.99l-5 2.73-5-2.73v-3.72L12 15l5-2.73v3.72z"/>
                        </svg>
                      </div>
                      <CardTitle className="text-foreground text-xl mb-2">Education & Mentorship</CardTitle>
                      <p className="text-sm text-foreground/70 px-2">
                        Accelerate your career with expert-led courses and personalized mentorship. Learn cutting-edge technologies and best practices from industry professionals.
                      </p>
                    </CardHeader>
                    <CardContent className="pb-6">
                      <ul className="space-y-2 text-sm text-foreground/80">
                        <li className="flex items-start gap-2">
                          <FaCheckCircle className="text-purple-400 mt-1 flex-shrink-0" />
                          <span>1-on-1 mentorship programs</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <FaCheckCircle className="text-purple-400 mt-1 flex-shrink-0" />
                          <span>Premium courses & workshops</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <FaCheckCircle className="text-purple-400 mt-1 flex-shrink-0" />
                          <span>Career guidance & technical consulting</span>
                        </li>
                      </ul>
                    </CardContent>
                  </div>
                </Card>
              </motion.div>

              <motion.div variants={fadeInUp} className="sm:col-span-2 lg:col-span-1">
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
                        <svg className="w-8 h-8 text-purple-400" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
                        </svg>
                      </div>
                      <CardTitle className="text-foreground text-xl mb-2">Collaborative Culture</CardTitle>
                      <p className="text-sm text-foreground/70 px-2">
                        Building strong teams through open communication and shared goals. We foster an environment where innovation thrives and every voice matters.
                      </p>
                    </CardHeader>
                    <CardContent className="pb-6">
                      <ul className="space-y-2 text-sm text-foreground/80">
                        <li className="flex items-start gap-2">
                          <FaCheckCircle className="text-purple-400 mt-1 flex-shrink-0" />
                          <span>Building strong teams</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <FaCheckCircle className="text-purple-400 mt-1 flex-shrink-0" />
                          <span>Open communication</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <FaCheckCircle className="text-purple-400 mt-1 flex-shrink-0" />
                          <span>Shared goals and vision</span>
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
