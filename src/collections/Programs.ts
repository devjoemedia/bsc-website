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
      type: "text",
      name: "href",
    },
    {
      type: "text",
      name: "hrefText",
    },
    {
      type: "date",
      name: "startDate",
      required: true
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
      name: "tracks",
      type: "array",
      fields: [{ type: "text", name: "text" }]
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
