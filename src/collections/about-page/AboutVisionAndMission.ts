import type { CollectionConfig } from 'payload'

export const AboutVisionAndMission: CollectionConfig = {
  slug: 'about-vision-and-mission',
  access: {
    read: () => true,
  },
  fields: [
    {
      type: "group",
      name: "mission",
      fields: [
        { name: "badge", type: "text", required: true },
        { name: "title", type: "text", required: true }
      ]
    },
    {
      type: "group",
      name: "diversity",
      fields: [
        { name: "title", type: "text", required: true },
        { name: "description", type: "textarea", required: true }
      ]
    },
    {
      type: "group",
      name: "vision",
      fields: [
        { name: "title", type: "text", required: true },
        { name: "description", type: "textarea", required: true }
      ]
    },
    {
      type: "group",
      name: "coreValues",
      fields: [
        { name: "title", type: "text", required: true },
        {
          name: "values",
          type: "array",
          fields: [
            { name: "name", type: "text", required: true }
          ]
        }
      ]
    }
  ],
}
