"use client";

import { motion } from "framer-motion";
import Image from "next/image";
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

export const About = () => {
  return (
    <section id="about" className="py-12 md:py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 md:mb-12"
        >
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 md:mb-4">
            About <span className="text-gradient-purple">Dafon</span>
          </h2>
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
            <Card className="glass-strong border-0 overflow-hidden h-full group cursor-pointer">
              <div className="relative h-48 md:h-64">
                <Image
                  src="/company/office-dafon.jpg"
                  alt="Dafon Office"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-foreground">Our Headquarters</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-foreground/80">
                  A modern workspace designed to foster creativity and collaboration.
                </CardDescription>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <Card className="glass-strong border-0 overflow-hidden h-full group cursor-pointer">
              <div className="relative h-48 md:h-64">
                <Image
                  src="/company/dafon-office-space.jpg"
                  alt="Office Space"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-foreground">Modern Workspace</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-foreground/80">
                  State-of-the-art facilities that inspire innovation and productivity.
                </CardDescription>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={fadeInUp} className="sm:col-span-2 lg:col-span-1">
            <Card className="glass-strong border-0 overflow-hidden h-full group cursor-pointer">
              <div className="relative h-48 md:h-64">
                <Image
                  src="/company/meeting-day.jpg"
                  alt="Team Meeting"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-foreground">Our Team</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-foreground/80">
                  A dedicated team of experts working together to achieve excellence.
                </CardDescription>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

