"use client";

import { motion } from "framer-motion";
import { ArrowRight, Users, Target } from "lucide-react";

const programs = [
  {
    title: "CodeBridge Fellowship 2026",
    subtitle: "Cohort III",
    category: "Fellowship",
    description: "An intensive fellowship designed to bridge the gap between theoretical knowledge and practical skills for aspiring female developers. Dive into real-world projects, receive expert guidance, and prepare for a successful career in tech.",
    status: "Upcoming",
    icon: <Target className="w-6 h-6 text-primary" />,
    link: "https://www.becauseshecan.tech/programs/codebridge-fellowship-2026-cohort-iii"
  },
  {
    title: "Annual Mentorship Program 2025",
    subtitle: "Cohort IV",
    category: "Mentorship",
    description: "A personalized mentorship program matching aspiring women in tech with experienced professionals. Gain invaluable insights, career advice, and build a network that will support your growth in the technology sector.",
    status: "Upcoming",
    icon: <Users className="w-6 h-6 text-primary" />,
    link: "https://www.becauseshecan.tech/programs/annual-mentorship-program-2025-cohort-iv"
  }
];

export default function ProgramsList() {
  return (
    <section className="py-24 bg-gray-50 relative z-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold tracking-wider uppercase text-sm mb-2 block">Our Initiatives</span>
          <h2 className="text-4xl md:text-5xl font-recoleta font-bold text-gray-900 mb-6">Programs & Events</h2>
          <p className="max-w-2xl mx-auto text-gray-600 text-lg">
            Discover our programs designed to train, mentor, and support African women in tech—from digital literacy workshops to career readiness through personalized mentorship.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {programs.map((program, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="group bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-2xl hover:border-primary/20 transition-all duration-500 relative overflow-hidden flex flex-col h-full"
            >
              {/* Status Badge */}
              <div className="absolute top-8 right-8">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-green-50 px-3 py-1 text-xs font-semibold text-green-700">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                  {program.status}
                </span>
              </div>

              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
                {program.icon}
              </div>

              <div className="mb-4">
                <span className="text-sm font-bold tracking-wider text-gray-400 uppercase mb-2 block">{program.category}</span>
                <h3 className="text-2xl font-recoleta font-bold text-gray-900 group-hover:text-primary transition-colors mb-1 pr-16">
                  {program.title}
                </h3>
                <span className="text-primary font-medium">{program.subtitle}</span>
              </div>

              <p className="text-gray-600 leading-relaxed mb-8 flex-grow">
                {program.description}
              </p>

              <div className="mt-auto pt-6 border-t border-gray-100">
                <a href={program.link} className="inline-flex items-center gap-2 text-primary font-semibold hover:text-primary-light transition-colors group/link">
                  Learn More
                  <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
