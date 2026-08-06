"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    role: "Information Technology Intern",
    company: "SLB",
    period: "Oct 2025 – Present",
    description: "Providing technical support across enterprise systems, closed 70+ IT tickets. Supervised deployment of office UPS system. Built and deployed a digital cloud platform utilizing Microsoft PowerApps for robust record-keeping.",
  },
  {
    role: "Frontend Developer",
    company: "SuperMuse",
    period: "Aug 2024 – Oct 2025",
    description: "Developed interactive web-based games using React to help users learn music theory. Implemented engaging UI components and animations to improve the learning experience.",
  },
  {
    role: "Lead Web Developer",
    company: "Project ReL",
    period: "Aug 2024 – Aug 2025",
    description: "Led the development of user interfaces for Ghana’s first sign-language-based virtual learning platform supporting hearing-impaired students.",
  },
  {
    role: "Tax Intern",
    company: "Deloitte Ghana",
    period: "Nov 2023 – Dec 2023",
    description: "Supported the preparation of tax documentation and compliance. Deployed a Python script to extract data from client PDFs into an Excel template, saving over 5 hours of manual data transfer monthly.",
  }
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-24 md:py-32 relative">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 md:mb-24"
        >
          <h2 className="text-3xl md:text-5xl font-medium tracking-tight mb-4">Experience</h2>
          <div className="w-12 h-[1px] bg-foreground/20" />
        </motion.div>

        <div className="space-y-12 md:space-y-20">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 group"
            >
              <div className="md:col-span-3">
                <p className="text-sm font-medium text-foreground/50 tabular-nums">{exp.period}</p>
              </div>
              
              <div className="md:col-span-9 relative">
                {/* Minimal line indicator */}
                <div className="hidden md:block absolute -left-6 top-2 w-[1px] h-full bg-foreground/10 group-hover:bg-foreground/40 transition-colors" />
                
                <h3 className="text-xl md:text-2xl font-medium tracking-tight mb-2">
                  {exp.role} <span className="text-foreground/40">— {exp.company}</span>
                </h3>
                <p className="text-base text-foreground/70 leading-relaxed font-light max-w-2xl">
                  {exp.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
