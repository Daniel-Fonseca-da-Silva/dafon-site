"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FaMapMarkerAlt } from "react-icons/fa";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PulseBeams } from "@/components/ui/pulse-beams";
import { backgroundBeams, backgroundGradientColors } from "@/lib/backgroundBeamsConfig";

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

export default function LocationsPage() {
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
        <section id="locations" className="pt-32 md:pt-40 pb-12 md:pb-20 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-8 md:mb-12"
            >
              <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 md:mb-4">
                Our <span className="text-gradient-purple">Locations</span>
              </h2>
              <p className="text-base md:text-lg text-foreground/70 max-w-2xl mx-auto">
                Serving clients across multiple continents with a global presence.
              </p>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="grid sm:grid-cols-2 gap-4 md:gap-6 max-w-4xl mx-auto"
            >
              <motion.div variants={fadeInUp}>
                <Card className="glass-strong border-0 overflow-hidden h-full group cursor-pointer">
                  <div className="relative h-40 md:h-48">
                    <Image
                      src="/company/dafon-sao-paulo.jpg"
                      alt="São Paulo, Brazil"
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                      sizes="(max-width: 640px) 100vw, 50vw"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle className="text-foreground flex items-center gap-2">
                      <FaMapMarkerAlt className="text-purple-400" />
                      São Paulo
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-foreground/80">
                      Brazil
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <Card className="glass-strong border-0 overflow-hidden h-full group cursor-pointer">
                  <div className="relative h-40 md:h-48">
                    <Image
                      src="/company/dafon-portugal.jpg"
                      alt="Lisboa, Portugal"
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                      sizes="(max-width: 640px) 100vw, 50vw"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle className="text-foreground flex items-center gap-2">
                      <FaMapMarkerAlt className="text-purple-400" />
                      Lisboa
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-foreground/80">
                      Portugal
                    </CardDescription>
                  </CardContent>
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
