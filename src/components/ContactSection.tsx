"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function ContactSection() {
  return (
    <section id="contact" className="py-24 md:py-40 relative">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row justify-between items-start md:items-end mb-24"
        >
          <div>
            <h2 className="text-5xl md:text-8xl font-medium tracking-tighter leading-[0.9] mb-6">
              Let's create <br /> something <span className="text-foreground/40">great.</span>
            </h2>
            <div className="w-12 h-[1px] bg-foreground/20" />
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.a
            href="mailto:kuofien@gmail.com"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="group block"
          >
            <p className="text-sm font-medium tracking-wider uppercase text-foreground/50 mb-2">Email</p>
            <div className="flex items-center text-xl md:text-2xl font-medium tracking-tight">
              kuofien@gmail.com
              <ArrowUpRight size={24} className="ml-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 -translate-x-4 transition-all duration-300" />
            </div>
          </motion.a>

          <motion.a
            href="https://linkedin.com/in/nana-kum-kuofie-9582622a8/"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="group block"
          >
            <p className="text-sm font-medium tracking-wider uppercase text-foreground/50 mb-2">LinkedIn</p>
            <div className="flex items-center text-xl md:text-2xl font-medium tracking-tight">
              Nana Kum Kuofie
              <ArrowUpRight size={24} className="ml-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 -translate-x-4 transition-all duration-300" />
            </div>
          </motion.a>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-32 pt-8 border-t border-foreground/10 flex flex-col md:flex-row justify-between items-center text-sm font-medium text-foreground/50"
        >
          <p>© {new Date().getFullYear()} Nana Kum Kuofie. All rights reserved.</p>
          <p className="mt-4 md:mt-0">Designed & Built with precision.</p>
        </motion.div>
      </div>
    </section>
  );
}
