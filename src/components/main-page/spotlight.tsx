'use client'

import { motion } from 'motion/react'
import ScrollReveal, { StaggerContainer, staggerChildVariants } from './scroll-reveal'
import { MemberDetails } from '../common/community-members/member-details'
import { useState } from 'react'
import { CommunityMember, HomeMemberSpotlight, Media } from '@/payload-types'
import HighlightedTitle from '../common/hilight-text'
import Image from 'next/image'
import RichTextRenderer from '../common/rich-text-renderer'
import MembersList from '../common/community-members/members-list'

interface SpotlightProps {
  data: HomeMemberSpotlight
}

const Spotlight: React.FC<SpotlightProps> = ({ data }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedMember, setSelectedMember] = useState<CommunityMember | null>(null)

  if (!data || !data.title) return null;

  const member_spotlight = data.memberToSpotlight as CommunityMember
  const members = data.members as CommunityMember[]

  const handleMemberSelect = (selected_member: CommunityMember) => {
    setSelectedMember(selected_member)
    setIsOpen(true)
  }

  return (
    <section
      id="spotlight"
      className="relative py-24 sm:py-32 bg-linear-to-b from-gray-50 to-white"
    >
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-100 rounded-full blur-3xl opacity-30" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center max-w-3xl mx-auto mb-16">
          <span className="bg-linear-to-r from-primary-light via-primary-dark to-primary inline-block rounded-full bg-gold-400/20 px-4 py-1.5 text-sm font-semibold  text-white mb-4">
            {data.badge}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
            <HighlightedTitle text={data.title} highlight={data.titleTextToHilight as string} />
          </h2>
        </ScrollReveal>

        {/* Featured spotlight - Ethel */}
        <ScrollReveal>
          <div className="relative rounded-3xl bg-white border border-gray-100 shadow-2xl shadow-gray-200/40 overflow-hidden">
            <div className="grid lg:grid-cols-5 gap-0">
              {/* Left: avatar placeholder */}
              <div className="lg:col-span-2 bg-linear-to-br from-primary-light to-primary p-10 flex flex-col justify-center items-center text-center">
                <div className="h-32 w-32 rounded-full bg-white/10 backdrop-blur-sm  flex items-center justify-center mb-6">
                  <Image
                    alt={(member_spotlight.photo as Media).alt as string}
                    src={(member_spotlight.photo as Media).url as string}
                    height={100}
                    width={1200}
                    className="h-32 w-32 object-cover rounded-full"
                  />
                  {/* <span className="text-5xl font-bold text-white">EA</span> */}
                </div>
                <h3 className="text-2xl font-bold text-white">{member_spotlight.name}</h3>
                <p className="text-purple-200 mt-1 font-medium">{member_spotlight.role}</p>
                <div className="mt-4 flex items-center gap-2">
                  <span className="inline-block h-2 w-2 rounded-full bg-gold-400 animate-pulse" />
                  <span className="text-sm text-purple-200">BSC Alumni</span>
                </div>
              </div>

              {/* Right: Story */}
              <div className="lg:col-span-3 p-8 sm:p-10 lg:p-12 flex flex-col justify-center">
                <div className="flex items-center gap-2 mb-4">
                  <svg className="h-8 w-8 text-primary" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>
                {member_spotlight.description && (
                  <div className="text-gray-600 leading-relaxed">
                    <RichTextRenderer content={member_spotlight.description} />
                  </div>
                )}
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Community Members */}
        <div className="mt-20">
          <ScrollReveal className="text-center mb-10">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">{data.titleTwo}</h3>
            <p className="mt-2 text-gray-600">{data.descriptionTwo}</p>
          </ScrollReveal>

          {/* <StaggerContainer className="grid sm:grid-cols-3 gap-6">
            {members.map((member) => (
              <motion.button
                key={member.id}
                variants={staggerChildVariants}
                whileHover={{ y: -6, transition: { duration: 0.3 } }}
                className="group relative rounded-2xl bg-white border border-gray-100 p-8 shadow-lg shadow-gray-100/50 text-center transition-shadow hover:shadow-xl"
              >
                <div className="mx-auto h-20 w-20 rounded-full bg-linear-to-br from-primary-light to-primary flex items-center justify-center mb-4">
                  <Image
                    alt={(member.photo as Media).alt as string}
                    src={(member.photo as Media).url as string}
                    height={100}
                    width={1200}
                    className="h-20 w-20 object-cover rounded-full"
                  />
                </div>
                <h4 className="text-lg font-bold text-gray-900">
                  {member?.name}
                </h4>
                <p className="text-sm text-primary font-medium">
                  {member.role}
                </p>
                <button className="mt-4 cursor-pointer" onClick={() => handleMemberSelect(member)}>
                  <span className="inline-flex items-center gap-1 text-xs text-gray-400 group-hover:text-primary transition-colors">
                    View Story
                    <svg
                      className="h-3 w-3"
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
                  </span>
                </button>
              </motion.button>
            ))}
          </StaggerContainer> */}

          <StaggerContainer className="">
            <div className=" mx-auto container">
              <MembersList members={members} />
            </div>
          </StaggerContainer>
        </div>
      </div>

      <MemberDetails isOpen={isOpen} setIsOpen={setIsOpen} member={selectedMember} />
    </section>
  )
}

export default Spotlight
