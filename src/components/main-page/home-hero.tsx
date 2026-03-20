'use client'

import React, { useState, useEffect, useRef, useCallback } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import Link from 'next/link'
import { motion } from 'motion/react'
import { HomeHero as IHomeHero, Media } from '@/payload-types'
import RichTextRenderer from '../common/rich-text-renderer'

interface HomeHeroProps {
  items: IHomeHero[]
}

const HomeHero: React.FC<HomeHeroProps> = ({ items }) => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const timerRef = useRef<NodeJS.Timeout | null>(null)
  const isPausedRef = useRef(false)

  if (!items || items.length === 0) return null;

  const startAutoSlide = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current)
    timerRef.current = setInterval(() => {
      if (!isPausedRef.current) {
        setIsTransitioning(true)
        setTimeout(() => {
          setCurrentSlide((prev) => (prev + 1) % items.length)
          setIsTransitioning(false)
        }, 300)
      }
    }, 6000)
  }, [])

  useEffect(() => {
    startAutoSlide()
    return () => {
      if (timerRef.current) clearInterval(timerRef.current)
    }
  }, [startAutoSlide])

  const goToSlide = useCallback(
    (index: number) => {
      setIsTransitioning(true)
      setTimeout(() => {
        setCurrentSlide(index)
        setIsTransitioning(false)
      }, 300)
      startAutoSlide()
    },
    [startAutoSlide],
  )

  const nextSlide = useCallback(() => {
    goToSlide((currentSlide + 1) % items.length)
  }, [currentSlide, goToSlide])

  const prevSlide = useCallback(() => {
    goToSlide((currentSlide - 1 + items.length) % items.length)
  }, [currentSlide, goToSlide])

  const slide = items[currentSlide]

  return (
    <section className="relative w-full min-h-[90vh] md:min-h-[90vh] overflow-hidden">
      {/* Background slides */}
      {items.map((s, i) => (
        <div
          key={i}
          className="absolute inset-0 transition-opacity duration-700 ease-in-out"
          style={{ opacity: i === currentSlide && !isTransitioning ? 1 : 0 }}
        >
          <img
            src={(s.photo as Media).url as string}
            alt=""
            className="absolute inset-0 w-full h-full object-cover"
            loading={i === 0 ? 'eager' : 'lazy'}
          />
        </div>
      ))}

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-linear-to-r from-black/90 via-black/60 to-black/80" />

      {/* Content */}
      <div className="relative font-recoleta z-10 flex flex-col items-center justify-center min-h-[90vh] md:min-h-[90vh] px-4 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-5"
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-5 py-2 text-sm font-medium text-white backdrop-blur-sm">
            <span className="inline-block h-2 w-2 rounded-full bg-gold-400 animate-pulse" />
            Empowering Women in Tech Across Africa
          </span>
        </motion.div>

        {/* Main heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-4xl font-recoleta sm:text-5xl md:text-6xl font-bold text-white leading-tight tracking-tight"
        >
          {slide.title}
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mx-auto mt-0 md:mt-5 max-w-2xl text-lg sm:text-xl text-purple-100/90 leading-relaxed"
        >
          <RichTextRenderer content={slide.subtitle} />
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="mt-5 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href={slide.href}
            className="group h-full w-full inline-flex items-center gap-2 rounded-full bg-linear-to-r from-primary to-primary px-8 py-4 text-base font-semibold text-white shadow-xl shadow-purple-900/20 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-900/30 hover:-translate-y-1"
          >
            {slide.hrefText}
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

      {/* Navigation arrows - desktop only */}
      <button
        onClick={prevSlide}
        className="hidden md:flex absolute cursor-pointer left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 bg-white/20 backdrop-blur-sm hover:bg-white/30 rounded-full items-center justify-center transition-colors"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-5 h-5 text-white" />
      </button>
      <button
        onClick={nextSlide}
        className="hidden md:flex absolute cursor-pointer right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 bg-white/20 backdrop-blur-sm hover:bg-white/30 rounded-full items-center justify-center transition-colors"
        aria-label="Next slide"
      >
        <ChevronRight className="w-5 h-5 text-white" />
      </button>

      {/* Slide indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {items.map((_, i) => (
          <button
            key={i}
            onClick={() => goToSlide(i)}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              i === currentSlide ? 'w-8 bg-white' : 'w-1.5 bg-white/50 hover:bg-white/70'
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  )
}

export default React.memo(HomeHero)
