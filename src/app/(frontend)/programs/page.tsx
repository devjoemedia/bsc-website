import { headers as getHeaders } from 'next/headers.js'
import { getPayload } from 'payload'
import React from 'react'

import config from '@/payload.config'
import Navbar from '@/components/common/navbar'
import Hero from '@/components/programs-page/hero'
import ProgramsList from '@/components/programs-page/programs-list'
import Footer from '@/components/common/footer'

export default async function ProgramsPage() {
  return (
    <div className="">
      <Navbar />
      <main>
        <Hero />
        <ProgramsList />
      </main>
      <Footer />
    </div>
  )
}
