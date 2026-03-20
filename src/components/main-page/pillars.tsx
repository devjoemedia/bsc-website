'use client'

import { motion } from 'motion/react'
import ScrollReveal, { StaggerContainer, staggerChildVariants } from './scroll-reveal'
import { HomePillar } from '@/payload-types'
import HighlightedTitle from '../common/hilight-text'
import { Shield } from 'lucide-react'
import RichTextRenderer from '../common/rich-text-renderer'

interface PillarsProps {
  data: HomePillar
}

const HomePillars: React.FC<PillarsProps> = ({ data }) => {
  if (!data || !data.title) return null;
  return (
    <section className="relative py-24 sm:py-32 bg-gray-50">
      {/* Decorative */}
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-purple-100 rounded-full blur-3xl opacity-40" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block rounded-full bg-linear-to-r from-primary-light  to-primary px-4 py-1.5 text-sm font-semibold text-white mb-4">
            {data.badge}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
            <HighlightedTitle text={data.title} highlight={data.titleTextToHilight as string} />
          </h2>
        </ScrollReveal>

        <StaggerContainer className="grid md:grid-cols-3 gap-8">
          {data.pillars?.map((pillar) => (
            <motion.div
              key={pillar.title}
              variants={staggerChildVariants}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group relative rounded-3xl bg-white p-8 shadow-lg shadow-gray-200/50 border border-gray-100 transition-shadow hover:shadow-xl"
            >
              {/* Top accent line */}
              <div
                className={`absolute top-0 left-8 right-8 h-1 rounded-b-full bg-linear-to-r from-primary-light to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
              />

              <div
                className={`inline-flex items-center justify-center h-14 w-14 rounded-2xl bg-linear-to-r from-primary-light to-primary mb-6`}
              >
                <Shield size={34} />
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-3">{pillar.title}</h3>
              <p className="text-gray-600 leading-relaxed">
                <RichTextRenderer content={pillar.subtitle} />
              </p>
            </motion.div>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}

export default HomePillars
