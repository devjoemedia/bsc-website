import type { CollectionConfig } from 'payload'

export const AboutStatistics: CollectionConfig = {
  slug: 'about-statistics',
  access: {
    read: () => true,
  },
  fields: [
    { name: 'title', type: 'text', required: true }, { name: 'subtitle', type: 'text', required: true }, { name: 'metrics', type: 'array', fields: [{ name: 'value', type: 'number', required: true }, { name: 'label', type: 'text', required: true }, { name: 'suffix', type: 'text' }] }
  ],
}
