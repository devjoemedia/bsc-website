import React from 'react'

import Navbar from '@/components/common/navbar'
import VolunteerLayout from '@/components/volunteer-page/volunteer-layout'
import Footer from '@/components/common/footer'
import config from '@/payload.config'
import { getPayload } from 'payload'

export default async function VolunteerPage() {
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })

  const volunteer_page_response = await payload.find({
    collection: 'volunteer-page', // required
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
        <VolunteerLayout content={volunteer_page_response.docs[0]} />
      </main>
      <Footer />
    </div>
  )
}
