'use client'

import { VolunteerPage } from '@/payload-types'
import { motion } from 'motion/react'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import Link from 'next/link'

// export interface VolunteerRole {
//   title: string;
//   description: string;
//   requirements: string[];
// }

// export interface VolunteerData {
//   hero: {
//     badge: string;
//     title: string;
//     description: string;
//   };
//   mission: {
//     title: string;
//     content: string;
//   };
//   empowerment: {
//     title: string;
//     content: string;
//   };
//   roles: VolunteerRole[];
// }

// const defaultData: VolunteerData = {
//   hero: {
//     badge: "Volunteer With Us",
//     title: "Give, Care, Impact",
//     description: "Join us as a volunteer and be part of a movement empowering the next generation of African women in technology. Support mentorship, workshops, content, and community initiatives."
//   },
//   mission: {
//     title: "Partnering for the Future",
//     content: "Partnering is more than just collaboration; it's a commitment to fostering a diverse and inclusive future in technology. By joining forces with us, you are helping to break down barriers and create pathways for young women to excel in STEM fields. Your support provides invaluable resources, mentorship, and hands-on learning experiences that empower girls to discover their potential and pursue careers in technology."
//   },
//   empowerment: {
//     title: "Empower Tech Leaders Through Volunteering",
//     content: "Volunteering in a girl tech community offers a unique opportunity to empower young women in technology, helping them develop essential skills and confidence. By sharing your expertise and time, you contribute to a supportive network that fosters innovation, leadership, and growth. It's not just about giving back—it's about inspiring the next generation of female tech leaders while growing personally and professionally in a dynamic, collaborative environment."
//   },
//   roles: [
//     {
//       title: "Technical Mentor",
//       description: "Guide aspiring developers through standard technical challenges, portfolio reviews, and career advice over our 9-month cohort.",
//       requirements: ["3+ years industry experience", "Availability of 2hrs/week", "Passion for mentoring"]
//     },
//     {
//       title: "Workshop Facilitator",
//       description: "Host specialized, one-off virtual or in-person workshops instructing girls on specific tech skills (e.g., Python, UI/UX, Cloud).",
//       requirements: ["Deep expertise in the topic", "Basic public speaking skills", "Ability to create learning materials"]
//     },
//     {
//       title: "Community Ambassador",
//       description: "Help us manage our vast online community, foster engagement, organize local events, and act as a representative of Because She Can.",
//       requirements: ["Strong communication skills", "Active on social platforms", "Community building experience"]
//     }
//   ]
// };

export default function VolunteerLayout({ content }: { content: VolunteerPage }) {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden bg-linear-to-br from-primary via-primary-light to-primary">
        <div className="absolute inset-0 bg-black/10 opacity-30 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center pt-24 pb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm font-medium text-white backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-yellow-400 animate-pulse" />
              {content.heroBadge}
            </span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-6xl font-recoleta font-bold text-white mb-6"
          >
            {content.heroTitle}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-lg text-white/90 leading-relaxed max-w-2xl mx-auto"
          >
            {content.heroDescription}
          </motion.p>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-recoleta font-bold text-gray-900 mb-6">
                {content.missionTitle}
              </h2>
              <p className="text-gray-600 leading-relaxed text-lg">{content.missionContent}</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-3xl p-10 border border-gray-100 shadow-sm relative overflow-hidden"
            >
              <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-primary/5 rounded-full blur-3xl"></div>
              <h2 className="text-3xl font-recoleta font-bold text-primary mb-6 relative z-10">
                {content.empowermentTitle}
              </h2>
              <p className="text-gray-700 leading-relaxed relative z-10">
                {content.empowermentContent}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Roles Section */}
      <section className="py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-recoleta font-bold text-gray-900 mb-4">
              {content.opportunitiesTitle}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              {content.opportunitiesContent}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {content.roles?.map((role, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col h-full"
              >
                <h3 className="text-2xl font-recoleta font-bold text-gray-900 mb-4 group-hover:text-primary transition-colors">
                  {role.title}
                </h3>
                <p className="text-gray-600 mb-8 flex-grow">{role.description}</p>

                <div className="bg-gray-50 rounded-2xl p-6 mb-8 mt-auto">
                  <h4 className="text-sm font-bold tracking-wider text-gray-900 uppercase mb-4">
                    Requirements
                  </h4>
                  <ul className="space-y-3">
                    {role.requirements?.map((req, rIdx) => (
                      <li key={rIdx} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                        <span className="text-gray-600 text-sm">{req.requirement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  href={role.link}
                  className="w-full py-4 rounded-xl bg-primary text-white font-bold hover:bg-primary-light transition-colors flex items-center justify-center gap-2 group/btn cursor-pointer"
                >
                  {role.linkText}
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
