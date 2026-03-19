import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'

import { Users } from './collections/Users'
import { Media } from './collections/Media'
import { CommunityMember } from './collections/CommunityMember'
import { HomeHero } from './collections/main-page/HomeHero'
import { HomeMemberSpotlight } from './collections/main-page/HomeMemberSpotlight'
import { HomeMission } from './collections/main-page/HomeMission'
import { HomePartnership } from './collections/main-page/HomePartnership'
import { HomePillars } from './collections/main-page/HomePillars'
import { HomeStats } from './collections/main-page/HomeStats'
import { HomeUpcomingProgramsSections } from './collections/main-page/HomeUpcomingPrograms'
import { Programs } from './collections/Programs'
import { Stats } from './collections/Stats'
import { AboutStatistics } from './collections/about-page/AboutStatistics'
import { AboutOurStory } from './collections/about-page/AboutOurStory'
import { AboutFounders } from './collections/about-page/AboutFounders'
import { ProgramsHero } from './collections/programs-page/ProgramsHero'
import { ProgramsSection } from './collections/programs-page/ProgramsSection'
import { GetInvolvedHero } from './collections/get-involved-page/GetInvolvedHero'
import { GetInvolvedOpportunities } from './collections/get-involved-page/GetInvolvedOpportunities'
import { PartnershipHero } from './collections/partnership-page/PartnershipHero'
import { PartnershipOptions } from './collections/partnership-page/PartnershipOptions'
import { VolunteerPage } from './collections/volunteer-page/VolunteerPage'
import { DonatePage } from './collections/donate-page/DonatePage'
import { ProgramDetailsData } from './collections/programs-page/ProgramDetailsData'
import { AboutHero } from './collections/about-page/AboutHero'
import { AboutVisionAndMission } from './collections/about-page/AboutVisionAndMission'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  collections: [
    Users,
    Media,
    HomeHero,
    HomeMemberSpotlight,
    HomeMission,
    HomePartnership,
    HomePillars,
    HomeStats,
    HomeUpcomingProgramsSections,
    Programs,
    Stats,
    CommunityMember,
    AboutStatistics,
    AboutOurStory,
    AboutFounders,
    ProgramsHero,
    ProgramsSection,
    GetInvolvedHero,
    GetInvolvedOpportunities,
    PartnershipHero,
    PartnershipOptions,
    VolunteerPage,
    DonatePage,
    ProgramDetailsData,
    AboutHero,
    AboutVisionAndMission,
  ],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: mongooseAdapter({
    url: process.env.DATABASE_URL || '',
  }),
  sharp,
  plugins: [],
})
