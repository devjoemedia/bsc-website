'use client'

import { AboutFounder, Media } from '@/payload-types'
import { motion } from 'motion/react'
import { Linkedin } from 'lucide-react'
import RichTextRenderer from '../common/rich-text-renderer'
import Image from 'next/image'

const founders = [
  {
    name: 'Otema Yirenkyi',
    role: 'Co-Founder & Operations Director',
    title: 'Data Scientist',
    linkedin: 'https://www.linkedin.com/in/otemayirenkyi/',
    bio: "My lived experiences as an African woman striving to use Technology as a medium in solving my community and continent's issues is why Because She Can was born. I saw first-hand how conditions were oftentimes not favorable to me and other women alike. I did not want other women to have to go through what I went through before coming out as success stories.",
    image: 'https://ui-avatars.com/api/?name=Otema+Yirenkyi&background=723b69&color=fff&size=256',
  },
  {
    name: 'Kweyakie Afi Blebo',
    role: 'Co-Founder & Programs Director',
    title: 'Data Scientist',
    linkedin: 'https://www.linkedin.com/in/kweyakieblebo/',
    bio: "It is one thing to read statistics about the underrepresentation of women in technology and it's an entirely different experience to confront the reality that you are a walking statistic. The work we do at Because She Can is deeply personal, and a bigger achievement for me is creating opportunities and advocating for policy changes.",
    image:
      'https://ui-avatars.com/api/?name=Kweyakie+Afi+Blebo&background=723b69&color=fff&size=256',
  },
]

interface FoundersProps {
  founders_data: AboutFounder
}

export default function Founders({ founders_data }: FoundersProps) {
  if (!founders_data) return null;
  return (
    <section className="py-24 bg-bsc-yellow/20 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold tracking-wider uppercase text-sm mb-2 block">
            {founders_data.subtitle}
          </span>
          <h2 className="text-4xl md:text-5xl font-recoleta font-bold text-gray-900">
            {founders_data.title}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {founders_data.founders?.map((founder, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="bg-white rounded-3xl p-8 md:p-10 shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 flex flex-col h-full"
            >
              <div className="flex items-center gap-6 mb-8">
                <div className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden  shrink-0 relative">
                  <Image
                    alt={(founder.photo as Media).alt as string}
                    src={(founder.photo as Media).url as string}
                    height={100}
                    width={1200}
                    className="h-32 w-32 object-cover rounded-full"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-recoleta font-bold text-gray-900 mb-1">
                    {founder.name}
                  </h3>
                  <p className="text-primary font-medium text-sm md:text-base mb-1">
                    {founder.role}
                  </p>
                  <p className="text-gray-500 text-sm flex items-center gap-2">
                    {founder.workTitle}
                    {founder.linkedin && (
                      <a
                        href={founder.linkedin as string}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-[#0a66c2] transition-colors"
                      >
                        <Linkedin size={18} />
                      </a>
                    )}
                  </p>
                </div>
              </div>

              <div className="relative flex-grow">
                <span className="absolute top-0 left-0 -translate-x-4 -translate-y-4 text-6xl text-primary/10 font-recoleta">
                  &ldquo;
                </span>
                <p className="text-gray-600 leading-relaxed relative z-10 italic">
                  <RichTextRenderer content={founder.bio} />
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
