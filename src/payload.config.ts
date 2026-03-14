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

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  collections: [Users, Media, HomeHero, HomeMemberSpotlight, HomeMission, HomePartnership, HomePillars, HomeStats, HomeUpcomingProgramsSections, Programs, Stats, CommunityMember],
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
