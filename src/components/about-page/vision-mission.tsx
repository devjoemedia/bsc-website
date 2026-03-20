'use client'

import { motion } from 'motion/react'
import { Target, Heart, Eye, Users } from 'lucide-react'
import { AboutVisionAndMission } from '@/payload-types'

interface VisionMissionProps {
  vision_mission_data: AboutVisionAndMission
}

export default function VisionMission({ vision_mission_data }: VisionMissionProps) {
  if (!vision_mission_data) return null;
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: 'spring' as const, stiffness: 100 } },
  }

  return (
    <section className="py-24 bg-bsc-yellow/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {/* Mission */}
          <motion.div
            variants={item}
            className="md:col-span-2 relative overflow-hidden rounded-3xl bg-white p-8 md:p-12 shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 group"
          >
            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:scale-110 transition-transform duration-500">
              <Target size={120} />
            </div>
            <div className="relative z-10">
              <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary mb-6">
                {vision_mission_data.mission.badge}
              </span>
              <h2 className="text-3xl md:text-4xl font-recoleta font-bold text-gray-900 leading-tight mb-4">
                {vision_mission_data.mission.title}
              </h2>
            </div>
          </motion.div>

          {/* Diversity */}
          <motion.div
            variants={item}
            className="relative overflow-hidden rounded-3xl bg-primary text-white p-8 md:p-10 shadow-lg hover:shadow-primary/30 transition-all duration-300 group"
          >
            <Users className="text-yellow-400 mb-6" size={40} />
            <h3 className="text-2xl font-recoleta font-bold mb-3">
              {vision_mission_data.diversity.title}
            </h3>
            <p className="text-white/80 leading-relaxed text-sm">
              {vision_mission_data.diversity.description}
            </p>
          </motion.div>

          {/* Vision */}
          <motion.div
            variants={item}
            className="relative overflow-hidden rounded-3xl bg-primary text-white p-8 md:p-10 shadow-lg hover:shadow-primary-light/30 transition-all duration-300 group"
          >
            <Eye className="text-red-300 mb-6" size={40} />
            <h3 className="text-2xl font-recoleta font-bold mb-3">
              {vision_mission_data.vision.title}
            </h3>
            <p className="text-white/90 leading-relaxed text-sm">
              {vision_mission_data.vision.description}
            </p>
          </motion.div>

          {/* Values */}
          <motion.div
            variants={item}
            className="md:col-span-2 relative overflow-hidden rounded-3xl bg-white p-8 md:p-12 shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300"
          >
            <div className="flex items-center gap-4 mb-8">
              <Heart className="text-bsc-red" size={32} />
              <h3 className="text-3xl font-recoleta font-bold text-gray-900">
                {vision_mission_data.vision.title}
              </h3>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
              {vision_mission_data.coreValues?.values?.map((val, idx) => (
                <div
                  key={val.id}
                  className="group relative pl-4 border-l-2 border-transparent hover:border-primary transition-colors duration-300 cursor-default"
                >
                  <span className="text-xs font-mono text-gray-400 mb-1 block">0{idx + 1}</span>
                  <span className="font-semibold text-gray-800 group-hover:text-primary transition-colors">
                    {val.name}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
