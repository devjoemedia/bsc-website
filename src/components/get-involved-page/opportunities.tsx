"use client";

import { motion } from "framer-motion";
import { HeartHandshake, Users, Globe, Building2, ArrowRight } from "lucide-react";

const opportunities = [
  {
    title: "Become a Volunteer",
    subtitle: "Share Your Skills, Shape the Future!",
    description: "We're always looking for dedicated individuals for remote and hybrid volunteer positions. All genders are encouraged to apply and be part of a movement empowering women and girls in tech. Contribute your knowledge and build greater invaluable skills by being a part of our team.",
    icon: <HeartHandshake className="w-8 h-8 text-primary" />,
    cta: "Apply today",
    link: "https://www.becauseshecan.tech/volunteer",
    bgColor: "bg-bsc-yellow/30"
  },
  {
    title: "Join Our Team of Mentors",
    subtitle: "Passionate people make impact",
    description: "Our pool of global mentors are skilled in the areas of Data Science/Analytics, Software Development, Project/Product Management, and various soft skills. We are looking for passionate women and men who want to give back to their society and create a lasting impact in the lives of African women.",
    icon: <Users className="w-8 h-8 text-primary" />,
    cta: "Become a Mentor",
    link: "https://www.becauseshecan.tech/volunteer",
    bgColor: "bg-primary/5"
  },
  {
    title: "Join the Community",
    subtitle: "Discover, Build, Connect",
    description: "Join the Because She Can Community to discover and build your Tech skills, connect with seasoned professionals, and network with other like-minded women who will inspire you to reach your goals.",
    icon: <Globe className="w-8 h-8 text-primary" />,
    cta: "Join Now",
    link: "https://forms.gle/nVYxCLdGhBKvuxQ96",
    bgColor: "bg-purple-50"
  },
  {
    title: "Partner With Us",
    subtitle: "Empower more women together",
    description: "Calling on organizations, companies, and individuals to partner with us on our mission. Working together can empower more women and girls to thrive in Tech careers. Together, we can build a more inclusive and diverse Tech industry.",
    icon: <Building2 className="w-8 h-8 text-primary" />,
    cta: "Read More",
    link: "/partnership",
    bgColor: "bg-gray-50"
  }
];

export default function Opportunities() {
  return (
    <section className="py-24 bg-white relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold tracking-wider uppercase text-sm mb-2 block">Make an Impact</span>
          <h2 className="text-4xl md:text-5xl font-recoleta font-bold text-gray-900 mb-6">Ways to Get Involved</h2>
          <p className="max-w-2xl mx-auto text-gray-600 text-lg">
            Whether you&apos;re a tech professional, educator, partner, or advocate, there&apos;s a role for you at Because She Can. Discover how you can contribute to a more inclusive tech future.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {opportunities.map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className={`rounded-3xl p-8 md:p-12 ${item.bgColor} border border-black/5 hover:border-primary/20 hover:shadow-xl transition-all duration-300 flex flex-col h-full group`}
            >
              <div className="w-16 h-16 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                {item.icon}
              </div>

              <h3 className="text-2xl md:text-3xl font-recoleta font-bold text-gray-900 mb-2">
                {item.title}
              </h3>
              <span className="text-primary font-medium text-sm md:text-base mb-4 block">
                {item.subtitle}
              </span>

              <p className="text-gray-700 leading-relaxed mb-8 flex-grow">
                {item.description}
              </p>

              <div>
                <a 
                  href={item.link} 
                  target={item.link.startsWith("http") ? "_blank" : undefined}
                  rel={item.link.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-primary font-semibold shadow-sm hover:shadow-md hover:bg-primary/5 transition-all group/btn w-fit"
                >
                  {item.cta}
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
