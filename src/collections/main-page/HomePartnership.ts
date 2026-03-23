import type { CollectionConfig } from 'payload'

export const HomePartnership: CollectionConfig = {
  slug: 'home-partnership',
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
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'titleTextToHilight',
      type: 'text',
      required: false,
    },
    {
      name: 'description',
      type: 'text',
      required: true,
    },
    {
      name: 'titleTwo',
      type: 'text',
      required: true,
    },
    {
      name: 'descriptionTwo',
      type: 'text',
      required: true,
    },
    {
      name: 'href',
      type: 'text',
      required: true,
    },
    {
      name: 'hrefText',
      type: 'text',
      required: true,
    },
    {
      name: 'hrefTwo',
      type: 'text',
      required: true,
    },
    {
      name: 'hrefTwoText',
      type: 'text',
      required: true,
    },
    {
      type: "upload",
      name: "companies",
      relationTo: "media",
      required: true,
      hasMany: true
    },
  ],
}
