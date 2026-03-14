import type { CollectionConfig } from 'payload'

export const CommunityMember: CollectionConfig = {
  slug: 'community-member',
  access: {
    read: () => true,
  },
  fields: [
    {
      type: "text",
      name: "name",
    },
    {
      type: "text",
      name: "role",
    },
    {
      type: "richText",
      name: "description",
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
