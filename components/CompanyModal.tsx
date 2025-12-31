"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { FaTimes } from "react-icons/fa";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface CompanyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CompanyModal = ({ isOpen, onClose }: CompanyModalProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-100"
            onClick={onClose}
          />
          
          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.3, type: "spring", damping: 25 }}
            className="fixed inset-0 z-101 flex items-center justify-center p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <Card className="glass-strong border-0 max-w-3xl w-full max-h-[90vh] overflow-y-auto">
              <CardHeader className="relative">
                <button
                  onClick={onClose}
                  className="absolute top-4 right-4 text-foreground/80 hover:text-foreground transition-colors p-2 rounded-full hover:bg-white/10 z-10"
                  aria-label="Close modal"
                >
                  <FaTimes className="w-5 h-5" />
                </button>
                
                {/* Logo Dafon */}
                <div className="flex justify-center mb-6">
                  <Image
                    src="/logo-white.png"
                    alt="Dafon Logo"
                    width={300}
                    height={100}
                    className="h-16 md:h-24 w-auto"
                  />
                </div>
              </CardHeader>
              
              <CardContent className="space-y-6">
                {/* Company History Section */}
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3">
                    Our <span className="text-gradient-purple">Story</span>
                  </h3>
                  <div className="space-y-4 text-foreground/90 leading-relaxed">
                    <p>
                      Dafon was founded with a vision to transform businesses through innovative technology solutions 
                      and strategic consulting. From our humble beginnings, we have grown into a trusted partner for 
                      organisations seeking to navigate the complexities of the digital age and achieve sustainable growth.
                    </p>
                    <p>
                      Our journey began with a simple yet powerful mission: to deliver exceptional value to our clients 
                      by combining cutting-edge technology with deep industry expertise. Over the years, we have 
                      expanded our presence across multiple continents, establishing offices in São Paulo, Lisboa, 
                      and strategic partnerships in Canada and Toronto.
                    </p>
                    <p>
                      At the heart of Dafon lies our commitment to excellence, innovation, and client success. We 
                      believe that every business, regardless of size or industry, deserves access to world-class 
                      solutions that drive real results. This philosophy has guided our growth and shaped our approach 
                      to every project we undertake.
                    </p>
                    <p>
                      Today, Dafon stands as a leader in delivering transformative business solutions. Our team of 
                      experts brings together diverse perspectives and deep technical knowledge to solve complex 
                      challenges and unlock new opportunities for our clients. We pride ourselves on building lasting 
                      relationships based on trust, transparency, and mutual success.
                    </p>
                    <p>
                      As we look to the future, Dafon remains committed to staying at the forefront of technological 
                      innovation whilst maintaining our core values of integrity, excellence, and client-centricity. 
                      We continue to invest in our people, our processes, and our partnerships to ensure we can deliver 
                      the best possible outcomes for the businesses we serve.
                    </p>
                  </div>
                </div>

                {/* CEO Section */}
                <div className="pt-6 border-t border-foreground/10">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="relative w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden shrink-0">
                      <Image
                        src="/company/daniel-fonseca-da-silva-ceo.jpg"
                        alt="Daniel Fonseca da Silva"
                        width={96}
                        height={96}
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <div>
                      <CardTitle className="text-xl md:text-2xl text-foreground mb-1">
                        <span className="text-gradient-purple">Daniel Fonseca da Silva</span>
                      </CardTitle>
                      <CardDescription className="text-base md:text-lg text-foreground/70">
                        Chief Executive Officer
                      </CardDescription>
                    </div>
                  </div>
                  
                  <h3 className="text-lg md:text-xl font-bold text-foreground mb-3">
                    Professional Journey
                  </h3>
                  <div className="space-y-4 text-foreground/90 leading-relaxed">
                    <p>
                      Daniel Fonseca da Silva has built an impressive career spanning more than two decades in systems engineering, innovation, and business leadership. His professional journey began in the field of information systems, where he developed deep technical expertise and a strategic vision for how technology can drive business transformation. With a solid background in engineering and system development many projects designed and implemented under his direct guidance, Daniel has established himself as a leader who seamlessly combines technical excellence with forward-thinking strategy.
                    </p>
                    <p>
                      As the CEO of Dafon, Daniel is now at the forefront of the company&apos;s strategic direction, overseeing its evolution and ensuring that technological innovation remains at the heart of all operations. Throughout his career, he has demonstrated exceptional ability to identify opportunities and turn challenges into strategic advantages. He has led numerous successful initiatives that have driven significant growth and innovation across various sectors, from technology to consulting and beyond.
                    </p>
                    <p>
                      His leadership philosophy is centred on fostering collaborative environments where creativity and strategic thinking converge. Under his guidance, teams have consistently delivered transformative solutions that exceed client expectations and set new industry standards.
                    </p>
                    <p>
                      Daniel&apos;s commitment to excellence and innovation has been instrumental in positioning Dafon as a leader in delivering cutting-edge business solutions. His vision extends beyond immediate success, focusing on building sustainable, long-term value for clients and stakeholders alike.
                    </p>
                  </div>
                  
                  <div className="pt-4 mt-4 border-t border-foreground/10">
                    <h4 className="text-base md:text-lg font-bold text-foreground mb-2">
                      Key Achievements
                    </h4>
                    <ul className="space-y-2 text-foreground/90">
                      <li className="flex items-start gap-2">
                        <span className="text-purple-400 mt-1">•</span>
                        <span>Led multiple successful business transformations across international markets</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-purple-400 mt-1">•</span>
                        <span>Established strategic partnerships that expanded global presence</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-purple-400 mt-1">•</span>
                        <span>Developed innovative solutions that have driven measurable client success</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-purple-400 mt-1">•</span>
                        <span>Built and led high-performing teams that consistently exceed expectations</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

