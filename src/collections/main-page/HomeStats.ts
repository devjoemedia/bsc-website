import type { CollectionConfig } from 'payload'

export const HomeStats: CollectionConfig = {
  slug: 'home-stats',
  access: {
    read: () => true,
  },
  fields: [
    {
      type: "text",
      name: "badge",
    },
    {
      type: "text",
      name: "title",
    },
    {
      type: "richText",
      name: "subtitle",
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
      type: "relationship",
      name: "stats",
      relationTo: "stats",
      required: true,
      hasMany: true
    },
  ],
}
