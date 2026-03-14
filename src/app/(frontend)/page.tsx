import { getPayload } from 'payload'
import React from 'react'

import config from '@/payload.config'
import HomeHero from '@/components/main-page/home-hero'
import Navbar from '@/components/common/navbar'
import About from '@/components/main-page/about'
import HomePillars from '@/components/main-page/pillars'
import Programs from '@/components/main-page/programs'
import Spotlight from '@/components/main-page/spotlight'
import Partnerships from '@/components/main-page/partnerships'
import Footer from '@/components/common/footer'
import HomeStats from '@/components/main-page/home-stats'
import { Stat } from '@/payload-types'

export default async function HomePage() {
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })

  const hero_response = await payload.find({
    collection: 'home-hero', // required
    depth: 2,
    page: 1,
    limit: 10,
    pagination: false,
    overrideAccess: false,
    showHiddenFields: true,
  })

  const stats_response = await payload.find({
    collection: 'home-stats', // required
    depth: 2,
    page: 1,
    limit: 10,
    pagination: false,
    overrideAccess: false,
    showHiddenFields: true,
  })

  const about_response = await payload.find({
    collection: 'home-mission', // required
    depth: 2,
    page: 1,
    limit: 10,
    pagination: false,
    overrideAccess: false,
    showHiddenFields: true,
  })

  const pillars_response = await payload.find({
    collection: 'home-pillars', // required
    depth: 2,
    page: 1,
    limit: 10,
    pagination: false,
    overrideAccess: false,
    showHiddenFields: true,
  })
  const programs_response = await payload.find({
    collection: 'programs', // required
    depth: 2,
    page: 1,
    limit: 10,
    pagination: false,
    overrideAccess: false,
    showHiddenFields: true,
  })

  const programs_section_response = await payload.find({
    collection: 'home-upcoming-programs-sections', // required
    depth: 2,
    page: 1,
    limit: 10,
    pagination: false,
    overrideAccess: false,
    showHiddenFields: true,
  })

  const spotlight_response = await payload.find({
    collection: 'home-member-spotlight', // required
    depth: 2,
    page: 1,
    limit: 10,
    pagination: false,
    overrideAccess: false,
    showHiddenFields: true,
  })

  const partnership_response = await payload.find({
    collection: 'home-partnership', // required
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
        <HomeHero items={hero_response?.docs} />
        <HomeStats stats={stats_response?.docs[0].stats as Stat[]} />
        <About data={about_response?.docs[0]} />
        <HomePillars data={pillars_response?.docs[0]} />
        <Programs programs={programs_response.docs} data={programs_section_response?.docs[0]} />
        <Spotlight data={spotlight_response?.docs[0]} />
        <Partnerships data={partnership_response?.docs[0]} />
      </main>
      <Footer />
    </div>
  )
}
