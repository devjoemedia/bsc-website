import type { CollectionConfig } from 'payload'

export const HomeMemberSpotlight: CollectionConfig = {
  slug: 'home-member-spotlight',
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
      required: false,
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
      name: 'memberToSpotlight',
      type: 'relationship',
      relationTo: 'community-member',
      required: true,
      hasMany: false
    },
    {
      name: 'members',
      type: 'relationship',
      relationTo: 'community-member',
      required: true,
      hasMany: true
    },
  ],
}
