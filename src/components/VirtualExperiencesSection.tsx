"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const experiences = [
  {
    title: "Software Engineering Virtual Experience",
    issuer: "Quantium",
    platform: "Forage",
    date: "Aug 2026",
    skills: ["Python", "CSS", "Dash", "Data Analysis"],
    link: "https://www.theforage.com/completion-certificates/32A6DqtsbF7LbKdcq/jhiG2W9K8KLZK8nXP_32A6DqtsbF7LbKdcq_6911c6509c0596e22d03abec_1785848196490_completion_certificate.pdf",
    description: "Created a dashboard to track the profitability of top-performing products. Developed practical skills in data processing, visualization, and testing workflows.",
  }
];

export default function VirtualExperiencesSection() {
  return (
    <section id="virtual-experiences" className="py-24 md:py-32 relative bg-foreground/[0.01]">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 md:mb-24"
        >
          <h2 className="text-3xl md:text-5xl font-medium tracking-tight mb-4">Virtual Experiences</h2>
          <div className="w-12 h-[1px] bg-foreground/20" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group glass rounded-3xl p-8 flex flex-col justify-between hover:bg-foreground/[0.02] transition-colors h-full min-h-[300px]"
            >
              <div>
                <div className="flex justify-between items-start mb-6">
                  <span className="text-xs font-medium uppercase tracking-wider text-foreground/50">
                    {exp.issuer}
                  </span>
                  <span className="text-xs font-medium text-foreground/40 tabular-nums">
                    {exp.date}
                  </span>
                </div>
                
                <h3 className="text-2xl font-medium tracking-tight mb-3">
                  {exp.title}
                </h3>
                <p className="text-foreground/70 font-light leading-relaxed mb-6 text-sm">
                  {exp.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {exp.skills.map((skill, i) => (
                    <span key={i} className="px-3 py-1 rounded-full border border-foreground/10 text-xs font-medium text-foreground/60">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <a
                href={exp.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-sm font-medium border-b border-foreground/20 pb-1 w-max hover:border-foreground/50 transition-colors"
              >
                View Certificate
                <ArrowUpRight size={16} className="ml-1 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
