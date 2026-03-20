'use client'

import { DonatePage } from '@/payload-types'
import { motion } from 'motion/react'
import { Laptop, GraduationCap, ArrowRight, Heart, CreditCard, HelpCircle } from 'lucide-react'
import Link from 'next/link'

export default function DonateLayout({ content }: { content: DonatePage }) {
  if (!content) return null;
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 lg:pt-40 lg:pb-32 overflow-hidden bg-primary text-white">
        <div className="absolute inset-0 bg-black/10 opacity-30 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm font-medium border border-white/20 mb-6 backdrop-blur-sm">
              <Heart className="w-4 h-4 text-bsc-red" /> Donate Now
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-recoleta font-bold leading-tight mb-6">
              {content.heroTitle}
            </h1>
            <p className="text-lg text-white/80 leading-relaxed mb-8">{content.heroDescription}</p>

            <div className="space-y-4">
              <p className="font-semibold text-white">Because of your donation:</p>
              {content.impacts?.map((impact, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 bg-white/5 rounded-xl p-4 border border-white/10 backdrop-blur-sm"
                >
                  <div className="w-8 h-8 rounded-full bg-yellow-400/20 flex items-center justify-center shrink-0">
                    <span className="text-yellow-400 font-bold">{i + 1}</span>
                  </div>
                  <span className="text-white/90">{impact.impact}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-3xl p-8 shadow-2xl text-gray-900 border border-gray-100"
          >
            <h3 className="text-2xl font-recoleta font-bold mb-6 text-center">
              Select Your Donation Method
            </h3>
            <div className="space-y-6">
              {content.methods?.map((method, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl border-2 border-gray-100 hover:border-primary/20 hover:bg-gray-50 transition-colors group"
                >
                  {method.details && method.details.length > 0 ? (
                    <div>
                      <div className="flex items-center gap-3 mb-4">
                        <CreditCard className="text-primary w-6 h-6" />
                        <h4 className="font-bold text-lg">{method.title}</h4>
                      </div>
                      <div className="space-y-2 mb-4 text-sm bg-white p-4 rounded-xl border border-gray-200">
                        {method.details.map((detail, dIdx) => (
                          <div
                            key={dIdx}
                            className="flex justify-between border-b last:border-0 border-gray-100 pb-2 last:pb-0"
                          >
                            <span className="text-gray-500">{detail.label}:</span>
                            <span className="font-semibold text-gray-900">{detail.value}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <div className="flex flex-col items-center text-center">
                      <Heart className="text-primary w-8 h-8 mb-4 group-hover:scale-110 transition-transform" />
                      <h4 className="font-bold text-lg mb-2">{method.title}</h4>
                      <p className="text-gray-600 text-sm mb-6">{method.description}</p>
                      {method.actionLink && (
                        <Link
                          target="_blank"
                          href={method.actionLink}
                          className="w-full py-4 rounded-xl bg-primary text-white font-bold hover:bg-primary-light transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-md hover:shadow-lg"
                        >
                          {method.actionText}
                          <ArrowRight className="w-4 h-4" />
                        </Link>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Allocation & FAQs */}
      <section className="py-24 bg-gray-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 relative z-10">
          {/* Allocation */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-recoleta font-bold text-gray-900 mb-8">
              {content.allocationTitle}
            </h2>
            <div className="space-y-4">
              {content.allocationItems?.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-4 bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:border-primary/20 transition-all group"
                >
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0 group-hover:scale-110 transition-transform">
                    {item.icon === 'laptop' ? <Laptop /> : <GraduationCap />}
                  </div>
                  <span className="text-lg font-semibold text-gray-800">{item.name}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* FAQs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <HelpCircle className="w-8 h-8 text-bsc-red" />
              <h2 className="text-3xl font-recoleta font-bold text-gray-900">
                Frequently Asked Questions
              </h2>
            </div>
            <div className="space-y-4">
              {content.faqs?.map((faq, idx) => (
                <div
                  key={idx}
                  className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md cursor-pointer hover:border-primary/30 transition-all group"
                >
                  <h4 className="font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                    {faq.question}
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
