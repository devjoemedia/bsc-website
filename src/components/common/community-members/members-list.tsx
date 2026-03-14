'use client'
import React, { FC, useState } from 'react'
import { CommunityMember } from '@/payload-types';
import CommunityMemberB from './community-member-b';
import { MemberDetails } from './member-details';

interface MembersListProps {
  members: CommunityMember[]
}
const MembersList: FC<MembersListProps> = ({ members }: MembersListProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const [memberData, setMemberData] = useState<CommunityMember | null>()

  const handleMember = (data: CommunityMember) => {
    setMemberData(data)
    setIsOpen(true)
  }
  return (
    <div className="container mx-auto px-5 lg:px-0 ">
      <div className="grid grid-cols-1 gap-5 md:gap-10 md:grid-cols-2 lg:grid-cols-3  lg:max-w-5xl lg:mx-auto">
        {members.slice(0, 3).map((item, i) => (
          <div className="" key={i} onClick={() => handleMember(item)}>
            <CommunityMemberB {...item} />
          </div>
        ))}
      </div>
      <MemberDetails member={memberData as CommunityMember} setIsOpen={setIsOpen} isOpen={isOpen} />
    </div>
  )
}

export default MembersList

