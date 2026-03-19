"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[90vh] md:min-h-[60vh] flex items-center justify-center overflow-hidden bg-linear-to-br from-primary via-primary-light to-primary"
    >
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-purple-600/30 blur-3xl"
        />
        <motion.div
          animate={{ scale: [1.2, 1, 1.2], rotate: [0, -90, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-gold-500/20 blur-3xl"
        />
        <motion.div
          animate={{ y: [0, -30, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 right-1/4 h-64 w-64 rounded-full bg-purple-500/20 blur-2xl"
        />
        {/* Grid pattern overlay */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center pt-16 md:pt-2">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm font-medium text-white backdrop-blur-sm">
            <span className="inline-block h-2 w-2 rounded-full bg-bsc-yellow animate-pulse" />
            Get involved
          </span>
        </motion.div>

        {/* Main heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight tracking-tight"
        >
          Share Your Skills, Shape the Future!
        </motion.h1>

        {/* Subtitle */}
        {/* <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mx-auto mt-2 md:mt-6 max-w-2xl text-sm sm:text-lg text-purple-100/90 leading-relaxed"
        >
          We're always looking for dedicated individuals for remote and hybrid volunteer positions. All genders are encouraged to apply and be part of a movement empowering women and girls in tech. Contribute your knowledge and building greater invaluable skills being a part of the Because She Can team of volunteers. Contribute to a cause that matters and make a real difference.
          Apply today and make a lasting impact!
        </motion.p> */}

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-base font-semibold text-primary-light shadow-xl shadow-primary/20 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/30 hover:-translate-y-1"
          >
            Become a Volunteer
            <svg
              className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
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
          {/* <a
            href="#about"
            className="inline-flex items-center gap-2 rounded-full border-2 border-white/30 px-8 py-4 text-base font-semibold text-white transition-all duration-300 hover:bg-white/10 hover:border-white/50"
          >
            Learn More
          </a> */}
        </motion.div>

        {/* Stats row */}
        {/* <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.9 }}
          className="mt-20 grid grid-cols-2 sm:grid-cols-4 gap-8 border-t border-white/10 pt-10"
        >
          {[
            { value: "77+", label: "Mentees" },
            { value: "67+", label: "Mentors" },
            { value: "15+", label: "Countries" },
            { value: "13+", label: "Laptops Donated" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-white">
                {stat.value}
              </div>
              <div className="mt-1 text-sm text-purple-200/70">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div> */}
      </div>
    </section>
  );
}
