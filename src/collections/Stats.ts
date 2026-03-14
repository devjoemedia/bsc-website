import type { CollectionConfig } from 'payload'

export const Stats: CollectionConfig = {
  slug: 'stats',
  access: {
    read: () => true,
  },
  fields: [
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
  ],
}
