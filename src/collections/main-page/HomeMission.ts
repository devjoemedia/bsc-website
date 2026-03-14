import type { CollectionConfig } from 'payload'

export const HomeMission: CollectionConfig = {
  slug: 'home-mission',
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
      type: "richText",
      name: "description",
      required: true
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
      type: "array",
      name: "stats",
      fields: [
        { type: "number", name: "value" },
        { type: "text", name: "surfix" },
        { type: "text", name: "label" }
      ],
    }
  ],
}
