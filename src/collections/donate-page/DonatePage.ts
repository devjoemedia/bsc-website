import type { CollectionConfig } from 'payload'

export const DonatePage: CollectionConfig = {
  slug: 'donate-page',
  access: {
    read: () => true,
  },
  fields: [
    { name: 'badge', type: 'text', required: true },
    { name: 'heroTitle', type: 'text', required: true },
    { name: 'heroDescription', type: 'text', required: true },
    { name: 'impacts', type: 'array', fields: [{ name: 'impact', type: 'text', required: true }] },
    { name: 'allocationTitle', type: 'text', required: true },
    {
      name: 'allocationItems',
      type: 'array',
      fields: [
        { name: 'name', type: 'text', required: true },
        { name: 'icon', type: 'text', required: true },
      ],
    },
    {
      name: 'methods',
      type: 'array',
      fields: [
        { name: 'title', type: 'text', required: true },
        { name: 'description', type: 'text', required: true },
        {
          name: 'details',
          type: 'array',
          fields: [
            { name: 'label', type: 'text', required: true },
            { name: 'value', type: 'text', required: true },
          ],
        },
        { name: 'actionLink', type: 'text' },
        { name: 'actionText', type: 'text' },
        { name: 'iconType', type: 'text', required: true },
      ],
    },
    {
      name: 'faqs',
      type: 'array',
      fields: [
        { name: 'question', type: 'text', required: true },
        { name: 'answer', type: 'text', required: true },
      ],
    },
  ],
}
