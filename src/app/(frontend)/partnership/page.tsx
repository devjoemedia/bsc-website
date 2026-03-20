import React from 'react'

import Navbar from '@/components/common/navbar'
import Hero from '@/components/partnership-page/hero'
import PartnershipOptions from '@/components/partnership-page/partnership-options'
import Footer from '@/components/common/footer'
import config from '@/payload.config'
import { getPayload } from 'payload'

export default async function PartnershipPage() {
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })

  const partnership_hero_response = await payload.find({
    collection: 'partnership-hero', // required
    depth: 2,
    page: 1,
    limit: 10,
    pagination: false,
    overrideAccess: false,
    showHiddenFields: true,
  })

  const partnership_options_response = await payload.find({
    collection: 'partnership-options', // required
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
        <Hero content={partnership_hero_response.docs[0]} />
        <PartnershipOptions content={partnership_options_response.docs[0]} />
      </main>
      <Footer />
    </div>
  )
}
