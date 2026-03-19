import type { CollectionConfig } from 'payload'

export const AboutFounders: CollectionConfig = {
  slug: 'about-founders',
  access: {
    read: () => true,
  },
  fields: [
    { name: 'title', type: 'text', required: true },
    { name: 'subtitle', type: 'text', required: true },
    {
      name: 'founders',
      type: 'array',
      fields: [
        { name: 'name', type: 'text', required: true },
        { name: 'role', type: 'text', required: true },
        { name: 'workTitle', type: 'text', required: true },
        { name: 'bio', type: 'richText', required: true },
        { name: 'linkedin', type: 'text' },
        { name: 'photo', type: 'upload', relationTo: 'media', required: true },
      ],
    },
  ],
}
