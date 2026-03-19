import type { CollectionConfig } from 'payload'

export const ProgramsHero: CollectionConfig = {
  slug: 'programs-hero',
  access: {
    read: () => true,
  },
  fields: [
    { name: 'badge', type: 'text', required: true },
    { name: 'title', type: 'text', required: true },
    { name: 'subtitle', type: 'text', required: true },
  ],
}
