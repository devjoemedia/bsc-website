import { headers as getHeaders } from 'next/headers.js'
import { getPayload } from 'payload'
import React from 'react'
import { fileURLToPath } from 'url'

import config from '@/payload.config'
import HomeHero from '@/components/main-page/home-hero'
import Navbar from '@/components/common/navbar'
import Hero from '@/components/main-page/hero'
import About from '@/components/main-page/about'
import Pillars from '@/components/main-page/pillars'
import Programs from '@/components/main-page/programs'
import Spotlight from '@/components/main-page/spotlight'
import Partnerships from '@/components/main-page/partnerships'
import Footer from '@/components/common/footer'

export default async function AboutPage() {
  const headers = await getHeaders()
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })
  const { user } = await payload.auth({ headers })

  const fileURL = `vscode://file/${fileURLToPath(import.meta.url)}`

  return (
    <div className="">
      <Navbar />
      <main>
        <Hero />
      </main>
      <Footer />
    </div>
  )
}
