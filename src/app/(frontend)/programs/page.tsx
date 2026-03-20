import { getPayload } from 'payload'
import React from 'react'

import config from '@/payload.config'
import Navbar from '@/components/common/navbar'
import Hero from '@/components/programs-page/hero'
import ProgramsList from '@/components/programs-page/programs-list'
import Footer from '@/components/common/footer'

export default async function ProgramsPage() {
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
    collection: 'programs-section', // required
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
        <Hero hero={hero_response.docs[0]} />
        <ProgramsList
          content={programs_section_response.docs[0]}
          programs={programs_response.docs}
        />
      </main>
      <Footer />
    </div>
  )
}
