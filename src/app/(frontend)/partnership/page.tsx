import React from 'react'

import Navbar from '@/components/common/navbar'
import Hero from '@/components/partnership-page/hero'
import PartnershipOptions from '@/components/partnership-page/partnership-options'
import Footer from '@/components/common/footer'

export default async function PartnershipPage() {
  return (
    <div className="">
      <Navbar />
      <main>
        <Hero />
        <PartnershipOptions />
      </main>
      <Footer />
    </div>
  )
}
