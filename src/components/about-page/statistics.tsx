'use client'

import { motion, useInView } from 'motion/react'
import { useRef, useEffect, useState } from 'react'
import { AboutStatistic } from '@/payload-types'

const Counter = ({ value, label }: { value: string; label: string }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })
  const [count, setCount] = useState(0)

  const target = parseInt(value.replace(/[^0-9]/g, ''))
  const suffix = value.replace(/[0-9]/g, '')

  useEffect(() => {
    if (isInView) {
      let start = 0
      const duration = 2000
      const increment = Math.max(1, Math.floor(target / (duration / 16)))

      const timer = setInterval(() => {
        start += increment
        if (start >= target) {
          setCount(target)
          clearInterval(timer)
        } else {
          setCount(start)
        }
      }, 16)
      return () => clearInterval(timer)
    }
  }, [isInView, target])

  return (
    <div
      ref={ref}
      className="flex flex-col items-center p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-colors"
    >
      <div className="text-4xl sm:text-5xl font-recoleta font-bold text-white mb-2">
        {count}
        {/* {suffix} */}+
      </div>
      <div className="text-sm sm:text-base font-medium text-white/70 uppercase tracking-wider text-center">
        {label}
      </div>
    </div>
  )
}

interface StatisticsProps {
  statistics_data: AboutStatistic
}

export default function Statistics({ statistics_data }: StatisticsProps) {
  const stats = [
    { value: '1000+', label: 'Women Impacted' },
    { value: '77+', label: 'Girls Mentored' },
    { value: '15+', label: 'Countries' },
    { value: '13+', label: 'Laptops Donated' },
  ]

  return (
    <section className="relative py-24 overflow-hidden bg-primary text-white">
      {/* Decorative gradient */}
      <div className="absolute inset-0 bg-linear-to-tr from-primary-light/40 to-transparent"></div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-recoleta font-bold mb-6 text-white/90">
            {statistics_data.title}
          </h2>
          <p className="text-lg text-white/80 leading-relaxed">{statistics_data.subtitle}</p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          {statistics_data.metrics?.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Counter value={String(stat.value)} label={stat.label} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
