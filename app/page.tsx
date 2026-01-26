"use client";

import { useState } from "react";
import { PulseBeams } from "@/components/ui/pulse-beams";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Welcome } from "@/components/Welcome";
import { CompanyModal } from "@/components/CompanyModal";
import { backgroundBeams, backgroundGradientColors } from "@/lib/backgroundBeamsConfig";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

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
        <Welcome onLearnMoreClick={() => setIsModalOpen(true)} />
        <Footer />
        <CompanyModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      </div>
    </main>
  );
}
