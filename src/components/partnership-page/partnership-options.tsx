"use client";

import { motion } from "framer-motion";
import { Handshake, Heart, Briefcase, FileDown, ArrowRight } from "lucide-react";

const options = [
  {
    num: "01",
    title: "Join Our Mission",
    desc: "Calling on organizations, companies, and individuals to partner with us in our mission. Let's pool our resources, knowledge, and passion to break barriers, provide opportunities, and create a tech world where everyone's voice is heard.",
    icon: <Handshake className="w-8 h-8 text-white" />,
    color: "bg-primary"
  },
  {
    num: "02",
    title: "Sponsor our Programs",
    desc: "Partner with us by sponsoring our programs and events. Your monetary support will provide laptops, mentorship, and vital training to women and girls, opening doors to tech careers they may have never dreamed of.",
    icon: <Heart className="w-8 h-8 text-white" />,
    color: "bg-primary-light"
  },
  {
    num: "03",
    title: "Recruit a talent",
    desc: "Partner with us and tap into a pool of exceptional individuals from our thriving tech community. Our community members are highly skilled and holistically trained to be fantastic additions to your team, locally and internationally.",
    icon: <Briefcase className="w-8 h-8 text-white" />,
    color: "bg-[#b80018]"
  }
];

export default function PartnershipOptions() {
  return (
    <section className="py-24 bg-gray-50 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {options.map((opt, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2, duration: 0.6 }}
              className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 relative overflow-hidden group"
            >
              <div className="absolute -right-6 -top-6 text-9xl font-bold text-gray-50 font-recoleta group-hover:text-primary/5 transition-colors duration-500 pointer-events-none">
                {opt.num}
              </div>
              <div className={`w-16 h-16 rounded-2xl ${opt.color} flex items-center justify-center mb-8 relative shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500`}>
                {opt.icon}
              </div>
              <h3 className="text-2xl font-recoleta font-bold text-gray-900 mb-4 relative">{opt.title}</h3>
              <p className="text-gray-600 leading-relaxed relative">
                {opt.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Brochure Download Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-primary rounded-3xl p-8 md:p-16 text-center text-white relative overflow-hidden shadow-2xl"
        >
          <div className="absolute inset-0 bg-white/5 opacity-50 bg-[url('https://www.transparenttextures.com/patterns/diagonal-stripes.png')]"></div>
          <div className="relative z-10 max-w-3xl mx-auto">
            <div className="w-20 h-20 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-8 backdrop-blur-md border border-white/20">
              <FileDown className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-3xl md:text-5xl font-recoleta font-bold mb-6">Because She Can Brochure</h2>
            <p className="text-lg text-white/80 mb-10 leading-relaxed">
              Download our company brochure to get detailed information and metrics of the work we are doing in building the biggest pipeline of African women. Learn how you can support too.
            </p>
            <button className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-primary font-bold text-lg hover:scale-105 active:scale-95 transition-all shadow-xl hover:shadow-2xl">
              Download Brochure
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
