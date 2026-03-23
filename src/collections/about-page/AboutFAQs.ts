import type { CollectionConfig } from 'payload'

export const AboutFAQs: CollectionConfig = {
  slug: 'about-faq',
  access: {
    read: () => true,
  },
  fields: [
    { name: 'title', type: 'text', required: true },
    { name: 'description', type: 'text', required: true },
    { name: 'contactEmail', type: 'text', required: true },
    {
      type: "upload",
      name: "companies",
      relationTo: "media",
      required: true,
      hasMany: true
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
