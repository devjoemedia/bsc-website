import type { CollectionConfig } from 'payload'

export const Programs: CollectionConfig = {
  slug: 'programs',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'badge',
      type: 'text',
      required: true,
    },
    {
      name: 'cohort',
      type: 'text',
      required: true,
    },
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      type: 'text',
      name: 'href',
      required: true,
    },
    {
      type: 'text',
      name: 'hrefText',
      required: true,
    },
    {
      type: 'date',
      name: 'startDate',
      required: true,
      defaultValue: new Date().toISOString(),
    },
    {
      name: 'location',
      type: 'text',
      required: true,
    },
    {
      name: 'email',
      type: 'text',
      required: true,
    },
    {
      name: 'phone',
      type: 'text',
      required: true,
    },
    {
      name: 'ctaText',
      type: 'text',
      required: true,
    },
    {
      name: 'problemStatement',
      type: 'text',
      required: true,
    },
    {
      name: 'description',
      type: 'text',
      required: true,
    },
    {
      name: 'fullDescription',
      type: 'richText',
      required: true,
    },
    {
      name: 'tracks',
      type: 'array',
      fields: [{ type: 'text', name: 'text' }],
    },
    {
      name: 'testimonials',
      type: 'array',
      fields: [
        { type: 'text', name: 'quote', required: true },
        { type: 'text', name: 'author', required: true },
      ],
    },
    {
      name: 'thumbnail',
      type: 'upload',
      relationTo: 'media',
      required: true,
      hasMany: false,
    },
  ],
}
