import type { CollectionConfig } from 'payload'

export const HomePillars: CollectionConfig = {
  slug: 'home-pillars',
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
      name: 'titleTextToHilight',
      type: 'text',
      required: false,
    },
    {
      type: "text",
      name: "description",
      required: false
    },
    {
      type: "array",
      name: "pillars",
      fields: [
        { type: "text", name: "title", required: true },
        { type: "richText", name: "subtitle", required: true }
      ],
    }
  ],
}
