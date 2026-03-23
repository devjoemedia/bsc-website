import type { CollectionConfig } from 'payload'

export const PartnershipOptions: CollectionConfig = {
  slug: 'partnership-options',
  access: {
    read: () => true,
  },
  fields: [
    { name: 'title', type: 'text', required: true },
    { name: 'subtitle', type: 'text', required: true },
    {
      name: 'options',
      type: 'array',
      fields: [
        { name: 'title', type: 'text', required: true },
        { name: 'description', type: 'text', required: true },
        {
          name: 'benefits',
          type: 'array',
          fields: [{ name: 'benefit', type: 'text', required: true }],
        },
      ],
    },
    { name: 'brochureTitle', type: 'text', required: true },
    { name: 'brochureDescription', type: 'text', required: true },
    { name: 'brochureFile', type: 'upload', relationTo: 'media', required: true, hasMany: false },
  ],
}
