'use client'
import React, { FC, useState } from 'react'
import Image from "next/image";
import { EyeIcon } from 'lucide-react';
import { CommunityMember, Media } from '@/payload-types';

const CommunityMemberB: FC<CommunityMember> = ({ photo, name }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className={``}>
      <div
        className={`relative h-96 bg-gray-100 rounded-lg flex items-center justify-center shadow-lg transition-transform duration-300
      transform `}
        onClick={() => setIsOpen(!isOpen)}
      >
        <Image
          width={1200}
          height={100}
          src={(photo as Media).url as string}
          style={{ objectFit: "cover" }}
          alt={(photo as Media).alt}
          className={` w-full h-full  cursor-pointer  rounded-md`}
        />

        <div className="w-full items-center gap-3 flex p-5 bg-linear-to-t from-black/60 to-black/0 absolute bottom-0 z-30">
          <div className="w-7 h-7 cursor-pointer rounded-full flex items-center justify-center bg-white">
            <EyeIcon color='black' size={20} />
          </div>
          <h1 className='uppercase cursor-pointer text-white'>{name}</h1>
        </div>
      </div>
    </div>
  )
}

export default CommunityMemberB