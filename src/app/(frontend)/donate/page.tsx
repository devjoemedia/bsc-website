import React from 'react'
import Navbar from '@/components/common/navbar'
import DonateLayout from '@/components/donate-page/donate-layout'
import Footer from '@/components/common/footer'

export default async function DonatePage() {
  return (
    <div className="">
      <Navbar />
      <main>
        {/* Pass props here when connecting to Payload CMS */}
        <DonateLayout />
      </main>
      <Footer />
    </div>
  )
}
