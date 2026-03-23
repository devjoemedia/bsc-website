import { getPayload } from 'payload'
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

  const hero_response = await payload.find({
    collection: 'about-hero', // required
    depth: 2,
    page: 1,
    limit: 10,
    pagination: false,
    overrideAccess: false,
    showHiddenFields: true,
  })

  const vision_mission_response = await payload.find({
    collection: 'about-vision-and-mission', // required
    depth: 2,
    page: 1,
    limit: 10,
    pagination: false,
    overrideAccess: false,
    showHiddenFields: true,
  })

  const statistics_response = await payload.find({
    collection: 'about-statistics', // required
    depth: 2,
    page: 1,
    limit: 10,
    pagination: false,
    overrideAccess: false,
    showHiddenFields: true,
  })

  const our_story_response = await payload.find({
    collection: 'about-our-story', // required
    depth: 2,
    page: 1,
    limit: 10,
    pagination: false,
    overrideAccess: false,
    showHiddenFields: true,
  })

  const founders_response = await payload.find({
    collection: 'about-founders', // required
    depth: 2,
    page: 1,
    limit: 10,
    pagination: false,
    overrideAccess: false,
    showHiddenFields: true,
  })

  return (
    <div className="">
      <Navbar />
      <main>
        <Hero hero_data={hero_response.docs[0]} />
        <VisionMission vision_mission_data={vision_mission_response.docs[0]} />
        <Statistics statistics_data={statistics_response.docs[0]} />
        <OurStory our_story_data={our_story_response.docs[0]} />
        <Founders founders_data={founders_response.docs[0]} />
      </main>
      <Footer />
    </div>
  )
}
