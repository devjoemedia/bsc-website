'use client'
import React from 'react'
import {motion} from 'framer-motion'
import { Stat  } from '@/payload-types'

interface StatProps {
  stats: Stat[]
}
const HomeStats: React.FC<StatProps> = ({ stats }) => {
  return (
    <div className='mx-auto max-w-7xl '>
      {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.9 }}
          className="mt-20 grid grid-cols-2 sm:grid-cols-3 gap-8 border-t border-white/10 pt-5"
        >
          {stats.map((stat) => (
            <div key={stat.id} className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-primary">
                {stat.title}
              </div>
              <div className="mt-1 text-sm text-primary">
                {stat.subtitle}
              </div>
            </div>
          ))}
        </motion.div>
    </div>
  )
}

export default HomeStats