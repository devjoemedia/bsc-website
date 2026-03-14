'use client'
import React from 'react'
import Marquee from 'react-fast-marquee';
import Image from 'next/image';
import { Media } from '@/payload-types';

interface PartnersBProps {
  companies: Media[]
}

const PartnersB:React.FC<PartnersBProps> = ({ companies }) => {
  return (
    <div className='grid grid-cols-1 gap-10'>
      <div className='  space-y-5'>
        <Marquee autoFill={true} direction='left' gradientWidth={100} gradient={true} speed={40} className='flex gap-5'>
          {companies.map((item, idx) => (
            <Image alt={item.alt} width={1200} height={100} src={item.url as string} key={idx} className=' w-[90px] ml-3' />
          ))}
        </Marquee>
      </div>
    </div>
  )
}

export default PartnersB


const partners = [
  '/images/WOMEN-logo.jpg',
  '/images/Techies4Impact.png',
  '/images/pnl.png',
  '/images/Twelve-Football.png',
]