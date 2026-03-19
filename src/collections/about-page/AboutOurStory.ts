import type { CollectionConfig } from 'payload'

export const AboutOurStory: CollectionConfig = {
  slug: 'about-our-story',
  access: {
    read: () => true,
  },
  fields: [
    { name: 'title', type: 'text', required: true }, { name: 'timelineItems', type: 'array', fields: [{ name: 'year', type: 'text', required: true }, { name: 'title', type: 'text', required: true }, { name: 'description', type: 'text', required: true }] }
  ],
}
