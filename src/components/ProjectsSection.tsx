"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Portal",
    category: "B2B SaaS Marketplace",
    link: "https://www.myportalgh.com",
    displayLink: "myportalgh.com",
    description: "Engineered the core database architecture for a scalable platform serving the Ghanaian market, utilizing Next.js and Supabase.",
  },
  {
    title: "captrd",
    category: "Mobile Photo-Sharing App",
    link: "https://www.captrd.live",
    displayLink: "captrd.live",
    description: "A specialized mobile application tailored for high-end events, small social gatherings, and parties. Available for iOS and Android.",
  },
  {
    title: "RateMyHostel",
    category: "Directory Website",
    link: "https://www.ratemyhostel.co",
    displayLink: "ratemyhostel.co",
    description: "Built and deployed a comprehensive directory website targeting university students to find and review accommodations.",
  },
];

export default function ProjectsSection() {
  return (
    <section id="work" className="py-24 md:py-32 relative">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 md:mb-24 flex items-center justify-between"
        >
          <div>
            <h2 className="text-3xl md:text-5xl font-medium tracking-tight mb-4">Selected Work</h2>
            <div className="w-12 h-[1px] bg-foreground/20" />
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <motion.a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`group glass rounded-3xl p-8 md:p-10 flex flex-col justify-between hover:bg-foreground/[0.02] transition-colors h-[400px] ${
                index === 0 ? "md:col-span-2" : ""
              }`}
            >
              <div className="flex justify-between items-start">
                <span className="text-xs font-medium uppercase tracking-wider text-foreground/50">
                  {project.category}
                </span>
                <div className="w-10 h-10 rounded-full border border-foreground/10 flex items-center justify-center group-hover:bg-foreground group-hover:text-background transition-colors duration-300">
                  <ArrowUpRight size={18} />
                </div>
              </div>
              
              <div>
                <h3 className="text-3xl md:text-4xl font-medium tracking-tight mb-4 group-hover:translate-x-2 transition-transform duration-300">
                  {project.title}
                </h3>
                <p className="text-foreground/70 font-light leading-relaxed mb-6 max-w-xl">
                  {project.description}
                </p>
                <div className="inline-flex items-center text-sm font-medium border-b border-foreground/20 pb-1 group-hover:border-foreground/50 transition-colors">
                  View Project
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 flex justify-center"
        >
          <a
            href="https://github.com/kofie1990"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center text-lg font-medium tracking-tight border-b border-foreground/20 pb-1 hover:border-foreground/50 transition-colors"
          >
            More on GitHub
            <ArrowUpRight size={20} className="ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
