"use client";

import { motion } from "framer-motion";
import { MapPin, Mail, Phone, Quote, CheckCircle2 } from "lucide-react";

export interface Testimonial {
  quote: string;
  author: string;
}

export interface ProgramDetailsData {
  title: string;
  subtitle: string;
  overview: string;
  problemStatement: string;
  impacts: string[];
  ctaText: string;
  testimonials: Testimonial[];
  logistics: {
    address: string;
    email: string;
    phone: string;
  };
}

const defaultData: ProgramDetailsData = {
  title: "CodeBridge Fellowship 2026",
  subtitle: "Cohort III",
  overview: "Formerly known as December for Women Who Code, the CodeBridge Fellowship is a nine-month program designed to empower African women to thrive in the digital age. This fellowship is more than a training initiative; it's a movement to dismantle financial barriers, a core obstacle preventing women from fully participating in technology.",
  problemStatement: "Did you know that African women are significantly less likely than men to own a computer or have consistent internet access? At Because She Can, we are bridging this gap, one girl, one laptop at a time.",
  impacts: [
    "Laptops provided to 13 economically disadvantaged women.",
    "Access to dedicated mentors who guide their professional and personal growth.",
    "Workshops in partnership with industry leaders, focusing on résumé building, crafting compelling cover letters, and developing a personal brand."
  ],
  ctaText: "Applications for Cohort III open soon. If you share our vision of empowering women to lead in the digital age, we invite you to partner with us whether as a donor, mentor, or advocate for this cause.",
  testimonials: [
    {
      quote: "I never thought tech was for me, but this event changed my mind. I built my first website and met amazing girls who share my interests. It made me realize I belong in tech.",
      author: "Ubaida Abdullai"
    }
  ],
  logistics: {
    address: "785 15h Street, Office 478, Berlin, De 81566",
    email: "info@becauseshecan.com",
    phone: "+1 840 841 25 69"
  }
};

export default function ProgramDetailsLayout({ data = defaultData }: { data?: ProgramDetailsData }) {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 lg:pt-40 lg:pb-32 overflow-hidden bg-primary text-white">
         <div className="absolute inset-0 bg-black/10 opacity-30 bg-[url('https://www.transparenttextures.com/patterns/diagonal-stripes.png')]"></div>
         <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-primary-light/50 rounded-full blur-3xl"></div>
         <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center text-balance">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-6">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm font-medium text-white backdrop-blur-sm">
                {data.subtitle}
              </span>
            </motion.div>
            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-4xl sm:text-5xl md:text-6xl font-recoleta font-bold text-white mb-6">
              {data.title}
            </motion.h1>
         </div>
      </section>

      {/* Main Content Area */}
      <section className="py-24 relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
           
           {/* Left Content */}
           <div className="lg:col-span-2 space-y-12">
             <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
               <h2 className="text-3xl font-recoleta font-bold text-gray-900 mb-6">Program Overview</h2>
               <p className="text-lg text-gray-700 leading-relaxed mb-6">{data.overview}</p>
               <div className="bg-primary/5 border-l-4 border-primary p-6 rounded-r-2xl">
                 <p className="text-gray-800 font-medium italic">
                   {data.problemStatement}
                 </p>
               </div>
             </motion.div>

             <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
               <h2 className="text-3xl font-recoleta font-bold text-gray-900 mb-6">Impacts So Far</h2>
               <div className="space-y-4">
                 {data.impacts.map((impact, idx) => (
                   <div key={idx} className="flex items-start gap-3">
                     <CheckCircle2 className="w-6 h-6 text-green-500 shrink-0 mt-0.5" />
                     <span className="text-gray-700 text-lg">{impact}</span>
                   </div>
                 ))}
               </div>
             </motion.div>

             <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-gray-50 rounded-3xl p-8 border border-gray-100">
                <p className="text-center text-primary font-bold text-lg mb-6">{data.ctaText}</p>
                <div className="flex justify-center gap-4">
                  <a href="/donate" className="px-6 py-3 bg-primary text-white rounded-xl font-bold hover:bg-primary-light transition-colors shadow-md">Donate</a>
                  <a href="/volunteer" className="px-6 py-3 bg-white text-primary rounded-xl font-bold border border-primary/20 hover:bg-primary/5 transition-colors shadow-sm">Partner / Mentor</a>
                </div>
             </motion.div>
           </div>

           {/* Right Sidebar */}
           <div className="space-y-8">
             {/* Testimonials */}
             <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="bg-bsc-yellow/20 rounded-3xl p-8 border border-bsc-yellow/30 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-10">
                  <Quote className="w-24 h-24 text-primary" />
                </div>
                <h3 className="text-xl font-recoleta font-bold text-gray-900 mb-6 flex items-center gap-2 relative z-10">
                  <Quote className="text-primary w-5 h-5" /> What Attendees Say
                </h3>
                <div className="space-y-6 relative z-10">
                  {data.testimonials.map((test, idx) => (
                    <div key={idx} className="relative">
                      <p className="text-gray-700 italic leading-relaxed mb-4 text-sm">&ldquo;{test.quote}&rdquo;</p>
                      <p className="font-bold text-gray-900 text-sm">— {test.author}</p>
                    </div>
                  ))}
                </div>
             </motion.div>

             {/* Logistics */}
             <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="bg-gray-50 rounded-3xl p-8 border border-gray-100">
                <h3 className="text-xl font-recoleta font-bold text-gray-900 mb-6">Contact & Logistics</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shrink-0 shadow-sm border border-gray-100">
                      <MapPin className="text-primary w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-gray-900 mb-1">Location</p>
                      <p className="text-sm text-gray-600 leading-relaxed">{data.logistics.address}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shrink-0 shadow-sm border border-gray-100">
                      <Mail className="text-primary w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-gray-900 mb-1">Email</p>
                      <a href={`mailto:${data.logistics.email}`} className="text-sm text-primary hover:underline">{data.logistics.email}</a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shrink-0 shadow-sm border border-gray-100">
                      <Phone className="text-primary w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-gray-900 mb-1">Phone</p>
                      <a href={`tel:${data.logistics.phone}`} className="text-sm text-primary hover:underline">{data.logistics.phone}</a>
                    </div>
                  </div>
                </div>
             </motion.div>

           </div>

        </div>
      </section>
    </div>
  );
}
