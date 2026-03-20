import { getPayload } from 'payload'
import React from 'react'

import config from '@/payload.config'
import Navbar from '@/components/common/navbar'
import Hero from '@/components/get-involved-page/hero'
import Opportunities from '@/components/get-involved-page/opportunities'
import Footer from '@/components/common/footer'

export default async function GetInvolvedPage() {
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })

  const get_involved_hero_response = await payload.find({
    collection: 'get-involved-hero', // required
    depth: 2,
    page: 1,
    limit: 10,
    pagination: false,
    overrideAccess: false,
    showHiddenFields: true,
  })
  const opportunities_response = await payload.find({
    collection: 'get-involved-opportunities', // required
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
        <Hero hero_data={get_involved_hero_response.docs[0]} />
        <Opportunities opportunities_data={opportunities_response.docs[0]} />
      </main>
      <Footer />
    </div>
  )
}
