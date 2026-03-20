'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'motion/react'
import { HomeHero as IHomeHero } from '@/payload-types'
import Image from 'next/image'

interface ProgramDetailsHeroProps {
  items?: IHomeHero[]
}

const ProgramDetailsHero: React.FC<ProgramDetailsHeroProps> = ({ items }) => {
  console.log(items)
  return (
    <section className="relative w-full min-h-[90vh] md:min-h-[60vh] overflow-hidden">
      {/* Background slides */}
      <div className="absolute inset-0 transition-opacity duration-700 ease-in-out">
        <Image
          src={`/images/bg.png`}
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
          loading={'lazy'}
          width={1920}
          height={1080}
        />
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-linear-to-r from-black/90 via-black/60 to-black/80" />

      {/* Content */}
      <div className="relative font-recoleta z-10 flex flex-col items-center justify-center min-h-[90vh] md:min-h-[60vh] px-4 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-5 py-2 text-sm font-medium text-white backdrop-blur-sm">
            <span className="inline-block h-2 w-2 rounded-full bg-gold-400 animate-pulse" />
            Fellowship
          </span>
        </motion.div>

        {/* Main heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-4xl font-recoleta sm:text-5xl md:text-6xl font-bold text-white leading-tight tracking-tight"
        >
          Annual Mentorship Program 2025 - Cohort IV
        </motion.h1>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href={'/'}
            className="group h-full w-full inline-flex items-center gap-2 rounded-full bg-linear-to-r from-primary to-primary px-8 py-4 text-base font-semibold text-white shadow-xl shadow-purple-900/20 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-900/30 hover:-translate-y-1"
          >
            Register Now
            <svg
              className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default React.memo(ProgramDetailsHero)
