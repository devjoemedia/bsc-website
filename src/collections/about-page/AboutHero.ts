import type { CollectionConfig } from 'payload'

export const AboutHero: CollectionConfig = {
  slug: 'about-hero',
  access: {
    read: () => true,
  },
  fields: [
    {
      type: "text",
      name: "badge",
      required: true
    },
    {
      type: "text",
      name: "title",
      required: true
    },
    {
      type: "text",
      name: "subtitle",
      required: true
    },
    {
      type: "text",
      name: "href",
      required: true
    },
    {
      type: "text",
      name: "hrefText",
      required: true
    },
    {
      type: "upload",
      name: "photo",
      relationTo: "media",
      required: true,
      hasMany: false
    },
  ],
}
