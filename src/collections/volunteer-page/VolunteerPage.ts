import type { CollectionConfig } from 'payload'

export const VolunteerPage: CollectionConfig = {
  slug: 'volunteer-page',
  access: {
    read: () => true,
  },
  fields: [
    { name: 'heroBadge', type: 'text', required: true },
    { name: 'heroTitle', type: 'text', required: true },
    { name: 'heroDescription', type: 'text', required: true },
    { name: 'missionTitle', type: 'text', required: true },
    { name: 'missionContent', type: 'text', required: true },
    { name: 'empowermentTitle', type: 'text', required: true },
    { name: 'empowermentContent', type: 'text', required: true },
    { name: 'opportunitiesTitle', type: 'text', required: true },
    { name: 'opportunitiesContent', type: 'text', required: true },
    {
      name: 'roles',
      type: 'array',
      fields: [
        { name: 'title', type: 'text', required: true },
        { name: 'description', type: 'text', required: true },
        { name: 'link', type: 'text', required: true },
        { name: 'linkText', type: 'text', required: true },
        {
          name: 'requirements',
          type: 'array',
          fields: [{ name: 'requirement', type: 'text', required: true }],
        },
      ],
    },
  ],
}
