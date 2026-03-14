import type { CollectionConfig } from 'payload'

export const HomeUpcomingProgramsSections: CollectionConfig = {
  slug: 'home-upcoming-programs-sections',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'badge',
      type: 'text',
      required: true,
    },
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'titleTextToHilight',
      type: 'text',
      required: false,
    },
    {
      name: 'description',
      type: 'richText',
      required: false,
    },
    
  ],
}
