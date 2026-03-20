'use client'

import { motion } from 'motion/react'
import { HeartHandshake, Users, Globe, Building2, ArrowRight } from 'lucide-react'
import { GetInvolvedOpportunity } from '@/payload-types'
import Link from 'next/link'

const styleConfig = [
  { icon: HeartHandshake, color: 'text-primary', bgColor: 'bg-bsc-yellow/30' },
  { icon: Users, color: 'text-primary', bgColor: 'bg-primary/5' },
  { icon: Globe, color: 'text-primary', bgColor: 'bg-purple-50' },
  { icon: Building2, color: 'text-primary', bgColor: 'bg-gray-50' },
]

export default function Opportunities({
  opportunities_data,
}: {
  opportunities_data: GetInvolvedOpportunity
}) {
  if (!opportunities_data) return null;
  return (
    <section className="py-24 bg-white relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold tracking-wider uppercase text-sm mb-2 block">
            Make an Impact
          </span>
          <h2 className="text-4xl md:text-5xl font-recoleta font-bold text-gray-900 mb-6">
            {opportunities_data?.title || 'Ways to Get Involved'}
          </h2>
          <p className="max-w-2xl mx-auto text-gray-600 text-lg">
            {opportunities_data?.subtitle ||
              "Whether you're a tech professional, educator, partner, or advocate, there's a role for you at Because She Can. Discover how you can contribute to a more inclusive tech future."}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {opportunities_data?.opportunities?.map((item, idx) => {
            const config = styleConfig[idx % styleConfig.length]
            const Icon = config.icon

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95, y: 30 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className={`rounded-3xl p-8 md:p-12 ${config.bgColor} border border-black/5 hover:border-primary/20 hover:shadow-xl transition-all duration-300 flex flex-col h-full group`}
              >
                <div className="w-16 h-16 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                  <Icon className={`w-8 h-8 ${config.color}`} />
                </div>

                <h3 className="text-2xl md:text-3xl font-recoleta font-bold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <span className="text-primary font-medium text-sm md:text-base mb-4 block">
                  {item.subtitle}
                </span>

                <p className="text-gray-700 leading-relaxed mb-8 flex-grow">{item.description}</p>

                <div>
                  <Link
                    href={item.link}
                    target={item.link.startsWith('http') ? '_blank' : undefined}
                    rel={item.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-primary font-semibold shadow-sm hover:shadow-md hover:bg-primary/5 transition-all group/btn w-fit"
                  >
                    {item.linkText}
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
