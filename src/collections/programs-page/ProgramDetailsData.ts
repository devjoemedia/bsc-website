import type { CollectionConfig } from 'payload'

export const ProgramDetailsData: CollectionConfig = {
  slug: 'program-details-data',
  access: {
    read: () => true,
  },
  fields: [
    { name: 'title', type: 'text', required: true },
    { name: 'subtitle', type: 'text', required: true },
    { name: 'overview', type: 'text', required: true },
    { name: 'problemStatement', type: 'text', required: true },
    { name: 'impacts', type: 'array', fields: [{ name: 'impact', type: 'text', required: true }] },
    { name: 'ctaText', type: 'text', required: true },
    {
      name: 'testimonials',
      type: 'array',
      fields: [
        { name: 'quote', type: 'text', required: true },
        { name: 'author', type: 'text', required: true },
      ],
    },
    { name: 'address', type: 'text', required: true },
    { name: 'email', type: 'text', required: true },
    { name: 'phone', type: 'text', required: true },
  ],
}
