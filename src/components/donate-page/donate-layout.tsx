"use client";

import { motion } from "framer-motion";
import { Laptop, GraduationCap, ArrowRight, Heart, CreditCard, HelpCircle } from "lucide-react";

export interface DonationMethod {
  title: string;
  description: string;
  details?: { label: string; value: string }[];
  actionLink?: string;
  actionText?: string;
  iconType: "mobile" | "card" | "gofundme";
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface DonateData {
  hero: {
    title: string;
    description: string;
    impacts: string[];
  };
  allocation: {
    title: string;
    items: { name: string; icon: "laptop" | "cap" }[];
  };
  methods: DonationMethod[];
  faqs: FAQ[];
}

const defaultData: DonateData = {
  hero: {
    title: "Make a Lasting Impact",
    description: "Donating to Because She Can means supporting economically disadvantaged women in tech. Participants of our CodeBridge Fellowship and Cohort Mentorship programs will greatly benefit from your generous support. We are procuring laptops for women and girls who ordinarily have little to no access to working equipment. It is not just a donation.",
    impacts: [
      "A girl pursuing a degree in Tech will be able to graduate",
      "A girl will secure her first job in Tech"
    ]
  },
  allocation: {
    title: "Where Your Donation Goes",
    items: [
      { name: "CodeBridge Fellowship Program", icon: "laptop" },
      { name: "BSC Cohort Mentorship Program", icon: "cap" }
    ]
  },
  methods: [
    {
      title: "Donate Using Mobile Money",
      description: "Direct mobile transfer within Ghana.",
      details: [
        { label: "Name", value: "Because She Can LBG" },
        { label: "Network", value: "Telecel" },
        { label: "Phone Number", value: "050 690 0543" }
      ],
      iconType: "mobile"
    },
    {
      title: "Donate Using GoFundMe",
      description: "Support our international crowdfunding campaign.",
      actionLink: "#", // Add the real GoFundMe link via Payload later
      actionText: "Visit GoFundMe",
      iconType: "gofundme"
    }
  ],
  faqs: [
    { question: "Can my company sponsor Because She Can?", answer: "Yes, we welcome corporate sponsorships. Please reach out to our partnerships team." },
    { question: "Do you accept cryptocurrencies?", answer: "Currently, we do not accept cryptocurrency donations, but we are looking into adding more payment methods." },
    { question: "Can I dedicate my donation in honour of someone?", answer: "Absolutely! Please include a note with your donation and we will acknowledge it accordingly." },
    { question: "Who do I contact for press inquiries?", answer: "Please email info@becauseshecan.com for all press-related questions." }
  ]
};

export default function DonateLayout({ data = defaultData }: { data?: DonateData }) {
  return (
    <div className="bg-white">
       {/* Hero Section */}
       <section className="relative pt-32 pb-24 lg:pt-40 lg:pb-32 overflow-hidden bg-primary text-white">
         <div className="absolute inset-0 bg-black/10 opacity-30 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
         <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm font-medium border border-white/20 mb-6 backdrop-blur-sm">
                <Heart className="w-4 h-4 text-bsc-red" /> Donate Now
              </span>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-recoleta font-bold leading-tight mb-6">
                {data.hero.title}
              </h1>
              <p className="text-lg text-white/80 leading-relaxed mb-8">
                {data.hero.description}
              </p>
              
              <div className="space-y-4">
                <p className="font-semibold text-white">Because of your donation:</p>
                {data.hero.impacts.map((impact, i) => (
                  <div key={i} className="flex items-center gap-3 bg-white/5 rounded-xl p-4 border border-white/10 backdrop-blur-sm">
                    <div className="w-8 h-8 rounded-full bg-yellow-400/20 flex items-center justify-center shrink-0">
                      <span className="text-yellow-400 font-bold">{i+1}</span>
                    </div>
                    <span className="text-white/90">{impact}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="bg-white rounded-3xl p-8 shadow-2xl text-gray-900 border border-gray-100">
               <h3 className="text-2xl font-recoleta font-bold mb-6 text-center">Select Your Donation Method</h3>
               <div className="space-y-6">
                 {data.methods.map((method, idx) => (
                   <div key={idx} className="p-6 rounded-2xl border-2 border-gray-100 hover:border-primary/20 hover:bg-gray-50 transition-colors group">
                     {method.details ? (
                       <div>
                         <div className="flex items-center gap-3 mb-4">
                           <CreditCard className="text-primary w-6 h-6" />
                           <h4 className="font-bold text-lg">{method.title}</h4>
                         </div>
                         <div className="space-y-2 mb-4 text-sm bg-white p-4 rounded-xl border border-gray-200">
                           {method.details.map((detail, dIdx) => (
                             <div key={dIdx} className="flex justify-between border-b last:border-0 border-gray-100 pb-2 last:pb-0">
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
                           <a href={method.actionLink} className="w-full py-4 rounded-xl bg-primary text-white font-bold hover:bg-primary-light transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-md hover:shadow-lg">
                             {method.actionText}
                             <ArrowRight className="w-4 h-4" />
                           </a>
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
           <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
             <h2 className="text-3xl font-recoleta font-bold text-gray-900 mb-8">{data.allocation.title}</h2>
             <div className="space-y-4">
               {data.allocation.items.map((item, idx) => (
                 <div key={idx} className="flex items-center gap-4 bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:border-primary/20 transition-all group">
                   <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0 group-hover:scale-110 transition-transform">
                     {item.icon === "laptop" ? <Laptop /> : <GraduationCap />}
                   </div>
                   <span className="text-lg font-semibold text-gray-800">{item.name}</span>
                 </div>
               ))}
             </div>
           </motion.div>

           {/* FAQs */}
           <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
             <div className="flex items-center gap-3 mb-8">
               <HelpCircle className="w-8 h-8 text-bsc-red" />
               <h2 className="text-3xl font-recoleta font-bold text-gray-900">Frequently Asked Questions</h2>
             </div>
             <div className="space-y-4">
               {data.faqs.map((faq, idx) => (
                 <div key={idx} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md cursor-pointer hover:border-primary/30 transition-all group">
                   <h4 className="font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">{faq.question}</h4>
                   <p className="text-gray-600 text-sm leading-relaxed">{faq.answer}</p>
                 </div>
               ))}
             </div>
           </motion.div>

         </div>
       </section>
    </div>
  );
}
