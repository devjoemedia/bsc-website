import type { CollectionConfig } from 'payload'

export const PartnershipHero: CollectionConfig = {
  slug: 'partnership-hero',
  access: {
    read: () => true,
  },
  fields: [
    { name: 'badge', type: 'text', required: true },
    { name: 'title', type: 'text', required: true },
    { name: 'subtitle', type: 'text', required: true },
  ],
}
