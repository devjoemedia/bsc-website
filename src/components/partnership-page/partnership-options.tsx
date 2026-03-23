'use client'

import { Media, PartnershipOption } from '@/payload-types'
import { motion } from 'motion/react'
import { Handshake, Heart, Briefcase, FileDown, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { ReactNode } from 'react'

interface OptionConfigItem {
  num: string
  color: string
  icon: ReactNode
}

const optionConfig: Record<number, OptionConfigItem> = {
  0: {
    num: '01',
    color: 'bg-primary',
    icon: <Handshake className="w-8 h-8 text-white" />,
  },
  1: {
    num: '02',
    color: 'bg-primary-light',
    icon: <Heart className="w-8 h-8 text-white" />,
  },
  2: {
    num: '03',
    color: 'bg-[#b80018]',
    icon: <Briefcase className="w-8 h-8 text-white" />,
  },
}
export default function PartnershipOptions({ content }: { content: PartnershipOption }) {
  if (!content) return null;

  return (
    <section className="py-24 bg-gray-50 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {content.options?.map((opt, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2, duration: 0.6 }}
              className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 relative overflow-hidden group"
            >
              <div className="absolute -right-6 -top-6 text-9xl font-bold text-gray-50 font-recoleta group-hover:text-primary/5 transition-colors duration-500 pointer-events-none">
                0{idx + 1}
              </div>
              <div
                className={`w-16 h-16 rounded-2xl ${optionConfig[idx].color} flex items-center justify-center mb-8 relative shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500`}
              >
                {optionConfig[idx].icon}
              </div>
              <h3 className="text-2xl font-recoleta font-bold text-gray-900 mb-4 relative">
                {opt.title}
              </h3>
              <p className="text-gray-600 leading-relaxed relative">{opt.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Brochure Download Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-primary rounded-3xl p-8 md:p-16 text-center text-white relative overflow-hidden shadow-2xl"
        >
          <div className="absolute inset-0 bg-white/5 opacity-50 bg-[url('https://www.transparenttextures.com/patterns/diagonal-stripes.png')]"></div>
          <div className="relative z-10 max-w-3xl mx-auto">
            <div className="w-20 h-20 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-8 backdrop-blur-md border border-white/20">
              <FileDown className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-3xl md:text-5xl font-recoleta font-bold mb-6">
              {content.brochureTitle}
            </h2>
            <p className="text-lg text-white/80 mb-10 leading-relaxed">
              {content.brochureDescription}
            </p>
            <Link
              href={(content.brochureFile as Media).url as string}
              download
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-primary font-bold text-lg hover:scale-105 active:scale-95 transition-all shadow-xl hover:shadow-2xl"
            >
              Download Brochure
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
