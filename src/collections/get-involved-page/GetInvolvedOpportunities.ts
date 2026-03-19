import type { CollectionConfig } from 'payload'

export const GetInvolvedOpportunities: CollectionConfig = {
  slug: 'get-involved-opportunities',
  access: {
    read: () => true,
  },
  fields: [
    { name: 'title', type: 'text', required: true },
    { name: 'subtitle', type: 'text', required: true },
    {
      name: 'opportunities',
      type: 'array',
      fields: [
        { name: 'title', type: 'text', required: true },
        { name: 'subtitle', type: 'text', required: true },
        { name: 'description', type: 'text', required: true },
        { name: 'iconName', type: 'text', required: true },
        { name: 'link', type: 'text', required: true },
        { name: 'linkText', type: 'text', required: true },
      ],
    },
  ],
}
