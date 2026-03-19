import { headers as getHeaders } from 'next/headers.js'
import { getPayload } from 'payload'
import React from 'react'

import config from '@/payload.config'
import Navbar from '@/components/common/navbar'
import Hero from '@/components/get-involved-page/hero'
import Opportunities from '@/components/get-involved-page/opportunities'
import Footer from '@/components/common/footer'

export default async function GetInvolvedPage() {
  return (
    <div className="">
      <Navbar />
      <main>
        <Hero />
        <Opportunities />
      </main>
      <Footer />
    </div>
  )
}
