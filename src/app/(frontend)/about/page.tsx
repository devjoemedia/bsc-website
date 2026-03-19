import { headers as getHeaders } from 'next/headers.js'
import { getPayload } from 'payload'
import React from 'react'
import { fileURLToPath } from 'url'

import config from '@/payload.config'
import Navbar from '@/components/common/navbar'
import Hero from '@/components/about-page/hero'
import VisionMission from '@/components/about-page/vision-mission'
import Statistics from '@/components/about-page/statistics'
import OurStory from '@/components/about-page/our-story'
import Founders from '@/components/about-page/founders'
import Footer from '@/components/common/footer'

export default async function AboutPage() {
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })

  return (
    <div className="">
      <Navbar />
      <main>
        <Hero />
        <VisionMission />
        <Statistics />
        <OurStory />
        <Founders />
      </main>
      <Footer />
    </div>
  )
}
