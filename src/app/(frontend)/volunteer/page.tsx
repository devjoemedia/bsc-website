import React from 'react'

import Navbar from '@/components/common/navbar'
import VolunteerLayout from '@/components/volunteer-page/volunteer-layout'
import Footer from '@/components/common/footer'

export default async function VolunteerPage() {
  return (
    <div className="">
      <Navbar />
      <main>
        {/* Pass props here when connecting to Payload CMS */}
        <VolunteerLayout />
      </main>
      <Footer />
    </div>
  )
}
