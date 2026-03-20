'use client'

import { AboutOurStory } from '@/payload-types'
import { motion } from 'motion/react'

interface OurStoryProps {
  our_story_data: AboutOurStory
}

export default function OurStory({ our_story_data }: OurStoryProps) {
  if (!our_story_data) return null
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold tracking-wider uppercase text-sm mb-2 block">
            Our Journey
          </span>
          <h2 className="text-4xl md:text-5xl font-recoleta font-bold text-gray-900">
            {our_story_data.title}
          </h2>
        </motion.div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 transform md:-translate-x-1/2" />

          {our_story_data.timelineItems?.map((event, index) => {
            const isEven = index % 2 === 0
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30, x: isEven ? -10 : 10 }}
                whileInView={{ opacity: 1, y: 0, x: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, type: 'spring' }}
                className={`relative flex items-center justify-between mb-12 md:mb-8 w-full ${
                  isEven ? 'md:flex-row-reverse' : 'md:flex-row'
                } flex-row-reverse`}
              >
                {/* Space for the other side */}
                <div className="hidden md:block md:w-[45%]" />

                {/* Center dot */}
                <div className="absolute left-[20px] md:left-1/2 w-4 h-4 rounded-full bg-primary border-4 border-white transform -translate-x-1/2 shadow-sm z-10" />

                {/* Content Card */}
                <div className="w-[calc(100%-50px)] md:w-[45%] bg-gray-50 rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow group">
                  <span className="text-xs font-bold text-primary mb-2 block tracking-wider uppercase">
                    {event.year}
                  </span>
                  <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                    {event.title}
                  </h3>
                  <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                    {event.description}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
