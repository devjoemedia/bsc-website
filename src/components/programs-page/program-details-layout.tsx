'use client'

import { Program } from '@/payload-types'
import { motion } from 'motion/react'
import { MapPin, Mail, Phone, Quote, CheckCircle2, Clock } from 'lucide-react'
import RichTextRenderer from '../common/rich-text-renderer'
import moment from 'moment'
import Link from 'next/link'
import TestimonialSlider from './testimonial-slider'

export default function ProgramDetailsLayout({ content }: { content: Program }) {
  if (!content) return null
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 lg:pt-40 lg:pb-32 overflow-hidden bg-primary text-white">
        <div className="absolute inset-0 bg-black/10 opacity-30 bg-[url('https://www.transparenttextures.com/patterns/diagonal-stripes.png')]"></div>
        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-primary-light/50 rounded-full blur-3xl"></div>
        <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center text-balance">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm font-medium text-white backdrop-blur-sm">
              {content?.badge}
            </span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-6xl font-recoleta font-bold text-white mb-6"
          >
            {content?.title}
          </motion.h1>
          {content.href && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Link
                href={content.href}
                className="group inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-base font-semibold text-primary-light shadow-xl shadow-primary/20 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/30 hover:-translate-y-1"
              >
                {content.hrefText}
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
          )}
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-24 relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
          {/* Left Content */}
          <div className="lg:col-span-2 space-y-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-recoleta font-bold text-gray-900 mb-6">
                Program Overview
              </h2>
              <div className="text-lg text-gray-700 leading-relaxed mb-6">
                <RichTextRenderer content={content.fullDescription} />
              </div>
              <div className="bg-primary/5 border-l-4 border-primary p-6 rounded-r-2xl">
                <p className="text-gray-800 font-medium italic">{content.problemStatement}</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-recoleta font-bold text-gray-900 mb-6">
                Tracks & Impacts
              </h2>
              <div className="space-y-4">
                {content.tracks?.map((impact, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-green-500 shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-lg">{impact.text}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-3xl p-8 border border-gray-100"
            >
              <p className="text-center text-primary font-bold text-lg mb-6">{content.ctaText}</p>
              <div className="flex justify-center gap-4">
                <a
                  href="/donate"
                  className="px-6 py-3 bg-primary text-white rounded-xl font-bold hover:bg-primary-light transition-colors shadow-md"
                >
                  Donate
                </a>
                <a
                  href="/volunteer"
                  className="px-6 py-3 bg-white text-primary rounded-xl font-bold border border-primary/20 hover:bg-primary/5 transition-colors shadow-sm"
                >
                  Partner / Mentor
                </a>
              </div>
            </motion.div>
          </div>

          {/* Right Sidebar */}
          <div className="space-y-8">
            {/* Testimonials */}
            <TestimonialSlider testimonials={content.testimonials || []} />

            {/* Logistics */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-3xl p-8 border border-gray-100"
            >
              <h3 className="text-xl font-recoleta font-bold text-gray-900 mb-6">
                Contact & Logistics
              </h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shrink-0 shadow-sm border border-gray-100">
                    <MapPin className="text-primary w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-gray-900 mb-1">Location</p>
                    <p className="text-sm text-gray-600 leading-relaxed">{content.location}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shrink-0 shadow-sm border border-gray-100">
                    <Clock className="text-primary w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-gray-900 mb-1">Date</p>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {moment(content.startDate).format('Do MMMM, YYYY')}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shrink-0 shadow-sm border border-gray-100">
                    <Mail className="text-primary w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-gray-900 mb-1">Email</p>
                    <a
                      href={`mailto:${content.email}`}
                      className="text-sm text-primary hover:underline"
                    >
                      {content.email}
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shrink-0 shadow-sm border border-gray-100">
                    <Phone className="text-primary w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-gray-900 mb-1">Phone</p>
                    <a
                      href={`tel:${content.phone}`}
                      className="text-sm text-primary hover:underline"
                    >
                      {content.phone}
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
