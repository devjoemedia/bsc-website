import React from 'react'
import Navbar from '@/components/common/navbar'
import DonateLayout from '@/components/donate-page/donate-layout'
import Footer from '@/components/common/footer'
import { getPayload } from 'payload'
import config from '@/payload.config'

export default async function DonatePage() {
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })

  const donate_page_response = await payload.find({
    collection: 'donate-page', // required
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
        <DonateLayout content={donate_page_response.docs[0]} />
      </main>
      <Footer />
    </div>
  )
}
