'use client'

import { motion, useInView } from 'motion/react'
import { useRef, useEffect, useState } from 'react'
import ScrollReveal from './scroll-reveal'
import { HomeMission } from '@/payload-types'
import HighlightedTitle from '../common/hilight-text'
import RichTextRenderer from '../common/rich-text-renderer'

function AnimatedCounter({ target, suffix = '' }: { target: number; suffix?: string }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!isInView) return
    let start = 0
    const duration = 2000
    const increment = target / (duration / 16)
    const timer = setInterval(() => {
      start += increment
      if (start >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start))
      }
    }, 16)
    return () => clearInterval(timer)
  }, [isInView, target])

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  )
}

interface AboutProps {
  data: HomeMission
}

const About: React.FC<AboutProps> = ({ data }) => {
  if (!data || !data.title) return null;
  return (
    <section id="about" className="relative py-24 sm:py-32 bg-white">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <ScrollReveal className="text-center max-w-3xl mx-auto">
          <span className="inline-block rounded-full bg-linear-to-r from-primary-light to-primary px-4 py-1.5 text-sm font-semibold text-white mb-4">
            {data.badge}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
            <HighlightedTitle text={data.title} highlight={data.titleTextToHilight as string} />
          </h2>
        </ScrollReveal>

        <div className="mt-16 grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Content */}
          <ScrollReveal direction="left" className="">
            <p className="text-lg text-gray-600 leading-relaxed">
              <RichTextRenderer content={data.description} />
            </p>
            {data?.href && (
              <div className="mt-8">
                <a
                  href={data.href}
                  className="group inline-flex items-center gap-2 text-primary font-semibold hover:text-primary-dark transition-colors"
                >
                  {data.hrefText}
                  <svg
                    className="h-4 w-4 transition-transform group-hover:translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </a>
              </div>
            )}
          </ScrollReveal>

          {/* Right: Stats cards */}
          <ScrollReveal direction="right">
            <div className="grid grid-cols-2 gap-4">
              {data.stats?.map((stat) => (
                <motion.div
                  key={stat.label}
                  whileHover={{ y: -4 }}
                  className="rounded-2xl bg-white border border-gray-100 p-6 shadow-lg shadow-gray-100/50 text-center"
                >
                  <div
                    className={`text-3xl sm:text-4xl font-bold bg-linear-to-r from-primary-light bg-clip-text text-transparent`}
                  >
                    <AnimatedCounter target={Number(stat.value)} suffix={String(stat.surfix)} />
                  </div>
                  <div className="mt-2 text-sm text-gray-500">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}

export default About
