import Footer from '@/components/common/footer'
import Navbar from '@/components/common/navbar'
import ProgramDetailsLayout from '@/components/programs-page/program-details-layout'
import React from 'react'

export default async function ProgramDetails({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params;
  
  return (
    <div className=''>
      <Navbar />
      <main>
        <ProgramDetailsLayout />
      </main>
      <Footer />
    </div>
  )
}