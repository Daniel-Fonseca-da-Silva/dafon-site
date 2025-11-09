"use client";

import { motion } from "framer-motion";
import Image from "next/image";

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

interface WelcomeProps {
  onLearnMoreClick: () => void;
}

export const Welcome = ({ onLearnMoreClick }: WelcomeProps) => {
  return (
    <section className="pt-24 pb-12 md:pt-32 md:pb-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="flex flex-col md:grid md:grid-cols-2 gap-8 md:gap-12 items-center"
        >
          {/* CEO Image - Mobile First */}
          <motion.div
            variants={fadeInUp}
            className="w-full order-1 md:order-2"
          >
            <div className="glass-strong rounded-2xl md:rounded-3xl p-4 md:p-8 shadow-2xl">
              <div className="relative aspect-3/4 md:aspect-4/5 rounded-xl md:rounded-2xl overflow-hidden">
                <Image
                  src="/company/daniel-fonseca-da-silva-ceo.jpg"
                  alt="Daniel Fonseca da Silva - CEO of Dafon"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="mt-4 md:mt-6">
                <h3 className="text-xl md:text-3xl font-bold text-foreground mb-2">
                  <span className="text-gradient-purple">Daniel Fonseca da Silva</span>
                </h3>
                <p className="text-base md:text-lg text-foreground/70 mb-3 md:mb-4">Chief Executive Officer</p>
                <p className="text-sm md:text-base text-foreground/80 leading-relaxed">
                  With extensive experience in business strategy and innovation, Daniel leads Dafon 
                  with a vision to deliver transformative solutions that drive measurable results for our clients. 
                  His leadership combines strategic thinking with a passion for excellence, ensuring Dafon 
                  remains at the forefront of innovation in our industry.
                </p>
              </div>
            </div>
          </motion.div>
          
          {/* Hero Content */}
          <motion.div variants={fadeInUp} className="w-full order-2 md:order-1 text-center md:text-left">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 md:mb-6 leading-tight">
              Welcome to{" "}
              <span className="text-gradient-purple">Dafon</span>
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-foreground/80 mb-6 md:mb-8 leading-relaxed">
              We deliver innovative solutions and exceptional service to transform your business. 
              Our expert team combines cutting-edge technology with strategic insight to drive your success.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center md:justify-start">
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="glass-strong px-6 py-3 rounded-xl font-semibold text-foreground hover:bg-white/20 transition-all text-center"
              >
                Get Started
              </motion.a>
              <motion.button
                onClick={onLearnMoreClick}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="glass px-6 py-3 rounded-xl font-semibold text-foreground hover:bg-white/15 transition-all text-center"
              >
                Learn More
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

