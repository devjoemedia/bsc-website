'use client'

import { AboutHero, Program, ProgramsSection } from '@/payload-types'
import { motion } from 'motion/react'
import { ArrowRight, Users, Target } from 'lucide-react'

interface DateStatus {
  status: 'past' | 'upcoming'
  date: Date
}

function checkDateStatus(dateString: string): DateStatus {
  const date = new Date(dateString)

  // Check if date is invalid
  if (isNaN(date.getTime())) {
    throw new Error('Invalid date string')
  }

  const today = new Date()
  today.setHours(0, 0, 0, 0) // Normalize to start of today
  const inputDate = new Date(date.getTime())
  inputDate.setHours(0, 0, 0, 0) // Normalize input date

  const status: 'past' | 'upcoming' = inputDate < today ? 'past' : 'upcoming'

  return {
    status,
    date,
  }
}

export default function ProgramsList({
  programs,
  content,
}: {
  programs: Program[]
  content: ProgramsSection
}) {
  if (!content) return null;
  return (
    <section className="py-24 bg-gray-50 relative z-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold tracking-wider uppercase text-sm mb-2 block">
            {content.badge}
          </span>
          <h2 className="text-4xl md:text-5xl font-recoleta font-bold text-gray-900 mb-6">
            {content.title}
          </h2>
          <p className="max-w-2xl mx-auto text-gray-600 text-lg">{content.subtitle}</p>
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
                <span
                  className={`inline-flex capitalize items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold ${
                    checkDateStatus(program.startDate).status === 'past'
                      ? 'bg-red-50 text-red-700'
                      : 'bg-green-50 text-green-700'
                  }`}
                >
                  <span
                    className={`w-1.5 h-1.5 rounded-full ${
                      checkDateStatus(program.startDate).status === 'past'
                        ? 'bg-red-500'
                        : 'bg-green-500'
                    } animate-pulse`}
                  ></span>
                  {checkDateStatus(program.startDate).status}
                </span>
              </div>

              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
                {program.badge.toLowerCase().includes('fellowship') ? (
                  <Target className="w-6 h-6 text-primary" />
                ) : (
                  <Users className="w-6 h-6 text-primary" />
                )}
              </div>

              <div className="mb-4">
                <span className="text-sm font-bold tracking-wider text-gray-400 uppercase mb-2 block">
                  {program.badge}
                </span>
                <h3 className="text-2xl font-recoleta font-bold text-gray-900 group-hover:text-primary transition-colors mb-1 pr-16">
                  {program.title}
                </h3>
                <span className="text-primary font-medium">{program.cohort}</span>
              </div>

              <p className="text-gray-600 leading-relaxed mb-8 flex-grow">{program.description}</p>

              <div className="mt-auto pt-6 border-t border-gray-100">
                <a
                  href={`/programs/${program.id}`}
                  className="inline-flex items-center gap-2 text-primary font-semibold hover:text-primary-light transition-colors group/link"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
