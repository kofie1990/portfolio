"use client";

import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Frontend",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
  },
  {
    title: "Backend & Data",
    skills: ["Python", "Flask", "PostgreSQL", "Go", "Supabase", "SQL"],
  },
  {
    title: "Tools & Concepts",
    skills: ["System Architecture", "API Integration", "Git", "UI/UX Design", "Microsoft PowerApps"],
  },
];

export default function SkillsSection() {
  return (
    <section className="py-24 md:py-32 bg-foreground/[0.02]">
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <h3 className="text-sm font-medium tracking-wider uppercase text-foreground/50 mb-6">
                {category.title}
              </h3>
              <ul className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <li key={skillIndex} className="text-lg md:text-xl font-medium tracking-tight">
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
