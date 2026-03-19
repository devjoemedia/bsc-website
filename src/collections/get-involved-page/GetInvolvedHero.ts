import type { CollectionConfig } from 'payload'

export const GetInvolvedHero: CollectionConfig = {
  slug: 'get-involved-hero',
  access: {
    read: () => true,
  },
  fields: [
    { name: 'badge', type: 'text', required: true },
    { name: 'title', type: 'text', required: true },
    { name: 'subtitle', type: 'text', required: true },
    { name: 'href', type: 'text', required: false },
    { name: 'hrefText', type: 'text', required: false },
  ],
}
