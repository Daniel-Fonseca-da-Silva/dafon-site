"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { FaEnvelope, FaUser, FaPaperPlane } from "react-icons/fa";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PulseBeams } from "@/components/ui/pulse-beams";
import { backgroundBeams, backgroundGradientColors } from "@/lib/backgroundBeamsConfig";

declare global {
  interface Window {
    turnstile?: {
      render: (element: HTMLElement, options: {
        sitekey: string;
        callback: (token: string) => void;
        theme?: string;
      }) => string;
      reset: (widgetId: string) => void;
    };
  }
}

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  subject: z.string().min(3, "Subject must be at least 3 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [turnstileToken, setTurnstileToken] = useState<string>("");
  const [turnstileError, setTurnstileError] = useState<string>("");
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const turnstileRef = useRef<HTMLDivElement>(null);
  const widgetIdRef = useRef<string>("");
  const siteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  useEffect(() => {
    const initTurnstile = () => {
      if (window.turnstile && turnstileRef.current && !widgetIdRef.current) {
        
        if (!siteKey) {
          console.log('sitekey!', siteKey)
          console.error("TURNSTILE_SITE_KEY is not configured");
          setTurnstileError("Security verification is not configured");
          return;
        }

        widgetIdRef.current = window.turnstile.render(turnstileRef.current, {
          sitekey: siteKey,
          callback: (token: string) => {
            setTurnstileToken(token);
            setTurnstileError("");
          },
          theme: "dark",
        });
      }
    };

    if (window.turnstile) {
      initTurnstile();
    } else {
      const checkTurnstile = setInterval(() => {
        if (window.turnstile) {
          initTurnstile();
          clearInterval(checkTurnstile);
        }
      }, 100);

      return () => clearInterval(checkTurnstile);
    }
  }, []);

  const onSubmit = async (data: ContactFormData) => {
    if (!turnstileToken) {
      setTurnstileError("Please complete the security verification");
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...data,
          turnstileToken,
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Failed to send message");
      }

      setSubmitStatus({
        type: "success",
        message: "Message sent successfully! We'll get back to you soon.",
      });
      reset();
      
      if (window.turnstile && widgetIdRef.current) {
        window.turnstile.reset(widgetIdRef.current);
        setTurnstileToken("");
      }
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message: error instanceof Error ? error.message : "Failed to send message. Please try again.",
      });
      
      if (window.turnstile && widgetIdRef.current) {
        window.turnstile.reset(widgetIdRef.current);
        setTurnstileToken("");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

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
        
        <section id="contact" className="pt-24 md:pt-32 pb-12 md:pb-20 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-8 md:mb-12"
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4">
                Get In Touch
              </h2>
              <p className="text-base md:text-lg text-foreground/70 max-w-2xl mx-auto">
                Have a project in mind? Let's discuss how we can help transform your business.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="glass-strong rounded-xl md:rounded-2xl px-4 py-6 md:px-8 md:py-10 max-w-3xl mx-auto"
            >
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="flex items-center gap-2 text-sm md:text-base">
                    <FaUser className="text-purple-500" />
                    Name
                  </Label>
                  <input
                    id="name"
                    type="text"
                    {...register("name")}
                    className="w-full px-4 py-3 rounded-lg bg-background/50 border border-foreground/20 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 outline-none transition-all"
                    placeholder="Your name"
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm">{errors.name.message}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="flex items-center gap-2 text-sm md:text-base">
                    <FaEnvelope className="text-purple-500" />
                    Email
                  </Label>
                  <input
                    id="email"
                    type="email"
                    {...register("email")}
                    className="w-full px-4 py-3 rounded-lg bg-background/50 border border-foreground/20 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 outline-none transition-all"
                    placeholder="your.email@example.com"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm">{errors.email.message}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject" className="text-sm md:text-base">
                    Subject
                  </Label>
                  <input
                    id="subject"
                    type="text"
                    {...register("subject")}
                    className="w-full px-4 py-3 rounded-lg bg-background/50 border border-foreground/20 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 outline-none transition-all"
                    placeholder="What's this about?"
                  />
                  {errors.subject && (
                    <p className="text-red-500 text-sm">{errors.subject.message}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-sm md:text-base">
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    {...register("message")}
                    className="w-full px-4 py-3 rounded-lg bg-background/50 border border-foreground/20 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 outline-none transition-all min-h-[150px] resize-y"
                    placeholder="Tell us about your project..."
                  />
                  {errors.message && (
                    <p className="text-red-500 text-sm">{errors.message.message}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <div ref={turnstileRef} className="flex justify-center"></div>
                  {turnstileError && (
                    <p className="text-red-500 text-sm text-center">{turnstileError}</p>
                  )}
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting || !turnstileToken}
                  className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-6 rounded-lg transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <span className="animate-spin">⏳</span>
                      Sending...
                    </>
                  ) : (
                    <>
                      <FaPaperPlane />
                      Send Message
                    </>
                  )}
                </Button>

                {submitStatus.type && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`p-4 rounded-lg text-center ${
                      submitStatus.type === "success"
                        ? "bg-green-500/20 text-green-300 border border-green-500/30"
                        : "bg-red-500/20 text-red-300 border border-red-500/30"
                    }`}
                  >
                    {submitStatus.message}
                  </motion.div>
                )}
              </form>
            </motion.div>
          </div>
        </section>

        <Footer />
      </div>
    </main>
  );
}
