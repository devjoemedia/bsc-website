'use client'
import React, { FC, useState } from 'react'
import Image from "next/image";
import Link from 'next/link';
import { CommunityMember as ICommunityMember, Media } from '@/payload-types';


interface CardProps {
  index: number;
  id: number
  name: string
  role: string
  photo: string
  bio?: string
  fbUrl?: string
  txUrl?: string
  linkedinUrl?: string
  igUrl?: string
}

const CommunityMember: FC<ICommunityMember> = ({ photo }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className={``}>
      <div
        className={`w-54 h-96 bg-gray-100 rounded-lg flex items-center justify-center shadow-lg transition-transform duration-300
      transform `}
        onClick={() => setIsOpen(!isOpen)}
      >
        <Image
          width={1200}
          height={100}
          src={(photo as Media).url as string}
          style={{ objectFit: "cover" }}
          alt={(photo as Media).alt}
          className={` w-full h-full grayscale cursor-pointer  rounded-md`}
        />
      </div>
    </div>
  )
}

export default CommunityMember