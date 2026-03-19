"use client";

import { motion } from "framer-motion";

const timelineEvents = [
  { date: "January 2021", title: "BSC was founded", desc: "Because She Can was founded by two friends with lived experience in the Ghanaian Tech ecosystem." },
  { date: "December 2021", title: "First DFWWC Donation", desc: "Launched the first CodeBridge Program (formerly DfWWC) with donations to 5 girls." },
  { date: "June - August 2022", title: "First Mentorship Cohort", desc: "Launched the first cohort of the annual mentorship program." },
  { date: "December 2022", title: "Second DFWWC Donation", desc: "Launched the second CodeBridge Program with donations to 5 girls." },
  { date: "June 2023", title: "Second Mentorship Cohort", desc: "Launched the second cohort with 3 laptop donations." },
  { date: "September 2023", title: "Girls in Tech Partnership", desc: "Partnership with Play and Learn Foundation providing training on basic computer skills." },
  { date: "December 2023", title: "Tap into Tech Ghana Event", desc: "Organized in partnership with Black Girls in Tech at the Google Office, Accra." },
  { date: "February 2024", title: "Career Retreat", desc: "With Women Talk UK at SN Incubator." },
  { date: "May - July 2024", title: "Third Mentorship Cohort", desc: "Launched the third cohort of the annual mentorship program." },
];

export default function OurStory() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold tracking-wider uppercase text-sm mb-2 block">Our Journey</span>
          <h2 className="text-4xl md:text-5xl font-recoleta font-bold text-gray-900">Our Story</h2>
        </motion.div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 transform md:-translate-x-1/2" />

          {timelineEvents.map((event, index) => {
            const isEven = index % 2 === 0;
            return (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30, x: isEven ? -10 : 10 }}
                whileInView={{ opacity: 1, y: 0, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, type: "spring" }}
                className={`relative flex items-center justify-between mb-12 md:mb-8 w-full ${
                  isEven ? "md:flex-row-reverse" : "md:flex-row"
                } flex-row-reverse`}
              >
                {/* Space for the other side */}
                <div className="hidden md:block md:w-[45%]" />
                
                {/* Center dot */}
                <div className="absolute left-[20px] md:left-1/2 w-4 h-4 rounded-full bg-primary border-4 border-white transform -translate-x-1/2 shadow-sm z-10" />

                {/* Content Card */}
                <div className="w-[calc(100%-50px)] md:w-[45%] bg-gray-50 rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow group">
                  <span className="text-xs font-bold text-primary mb-2 block tracking-wider uppercase">{event.date}</span>
                  <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">{event.title}</h3>
                  <p className="text-gray-600 text-sm md:text-base leading-relaxed">{event.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
