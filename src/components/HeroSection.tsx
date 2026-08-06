"use client";

import { motion } from "framer-motion";
import { ArrowDownRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] md:w-[30vw] md:h-[30vw] bg-neutral-200/40 dark:bg-neutral-800/20 blur-[120px] rounded-full -z-10" />

      <div className="max-w-4xl mx-auto px-6 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-8"
        >
          <span className="inline-block py-1 px-3 rounded-full border border-foreground/10 text-xs md:text-sm font-medium tracking-wide uppercase text-foreground/60">
            Available for new opportunities
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        >
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-medium tracking-tight leading-tight mb-6">
            Hi, I'm Nana. A Software Developer engineering elegant, high-performance digital experiences.
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row md:items-center justify-between w-full mt-12 border-t border-foreground/10 pt-8"
        >
          <div className="max-w-lg mb-8 md:mb-0">
            <p className="text-base md:text-lg text-foreground/60 leading-relaxed font-light">
              I specialize in building scalable web and mobile applications with a focus on Apple-like precision and luxury design aesthetics.
            </p>
            <p className="text-sm font-medium text-foreground/80 mt-4">
              Currently an Information Technology Intern at SLB.
            </p>
          </div>

          <a
            href="#work"
            className="group flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-full border border-foreground/20 hover:border-foreground/50 transition-colors shrink-0"
          >
            <ArrowDownRight
              size={24}
              className="text-foreground/70 group-hover:text-foreground transition-transform group-hover:translate-x-1 group-hover:translate-y-1"
            />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
