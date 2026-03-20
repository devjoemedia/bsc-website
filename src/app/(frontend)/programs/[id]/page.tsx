import Footer from '@/components/common/footer'
import Navbar from '@/components/common/navbar'
import ProgramDetailsLayout from '@/components/programs-page/program-details-layout'
import { getPayload } from 'payload'
import config from '@/payload.config'
import React from 'react'

export default async function ProgramDetails({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params

  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })

  const program_response = await payload.findByID({
    id: id,
    collection: 'programs',
  })

  return (
    <div className="">
      <Navbar />
      <main>
        <ProgramDetailsLayout content={program_response} />
      </main>
      <Footer />
    </div>
  )
}
