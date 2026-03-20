'use client'
import React from 'react'
import Marquee from 'react-fast-marquee'
import Image from 'next/image'

const PartnersA = () => {
  const { partners_section } = {
    partners_section: {
      title: 'Driving Change Together',
      // subtitle: "Our strategic partners share our vision of bridging the digital gender divide in Africa. Together, we provide our community with the best resources, tools, and opportunities to succeed.",
      subtitle:
        'At Because She Can, we believe that collaboration is the key to creating meaningful and lasting impact. Our strategic partners are organizations that share our vision of bridging the digital gender divide in Africa. Together, we work to provide our community with the best resources, tools, and opportunities to succeed ',
      images: [
        '/images/WOMEN-logo.jpg',
        '/images/Techies4Impact.png',
        '/images/pnl.png',
        '/images/Twelve-Football.png',
      ],
    },
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-7 gap-10">
      <div className="space-y-10  lg:col-start-1 lg:col-end-4">
        <div className=" space-y-5">
          <h2 className=" font-bold text-2xl md:text-3xl text-primary ">
            {partners_section?.title}
          </h2>
          <p className="text-sm!">{partners_section?.subtitle}</p>
        </div>
      </div>

      <div className=" lg:col-start-4 lg:col-end-8 space-y-5">
        <Marquee
          autoFill={true}
          direction="left"
          gradientWidth={100}
          gradient={true}
          speed={40}
          className="flex gap-5"
        >
          {partners_section?.images?.map((item: string, idx: number) => (
            <Image
              alt="partners"
              width={1200}
              height={100}
              src={`${item}`}
              key={idx}
              className="space-y-2 h-22 w-[90px] ml-3"
            />
          ))}
        </Marquee>
        {/* <Marquee autoFill={true} direction='right' gradient={true} speed={40} className='flex gap-5'>
          {partners.map((item, idx) => (
            <Image alt="partners" width={1200} height={100} src={item} key={idx} className='space-y-2 h-28 w-32 ml-3' />
          ))}
        </Marquee> */}
      </div>
    </div>
  )
}

export default PartnersA
