const fs = require('fs');
const path = require('path');

const collections = [
  { folder: 'about-page', name: 'AboutStatistics', slug: 'about-statistics', fields: "{ name: 'title', type: 'text', required: true }, { name: 'subtitle', type: 'text', required: true }, { name: 'metrics', type: 'array', fields: [{ name: 'value', type: 'number', required: true }, { name: 'label', type: 'text', required: true }, { name: 'suffix', type: 'text' }] }" },
  { folder: 'about-page', name: 'AboutOurStory', slug: 'about-our-story', fields: "{ name: 'title', type: 'text', required: true }, { name: 'timelineItems', type: 'array', fields: [{ name: 'year', type: 'text', required: true }, { name: 'title', type: 'text', required: true }, { name: 'description', type: 'text', required: true }] }" },
  { folder: 'about-page', name: 'AboutFounders', slug: 'about-founders', fields: "{ name: 'title', type: 'text', required: true }, { name: 'subtitle', type: 'text', required: true }, { name: 'founders', type: 'array', fields: [{ name: 'name', type: 'text', required: true }, { name: 'role', type: 'text', required: true }, { name: 'bio', type: 'text', required: true }, { name: 'linkedin', type: 'text' }, { name: 'photo', type: 'upload', relationTo: 'media', required: true }] }" },
  { folder: 'programs-page', name: 'ProgramsHero', slug: 'programs-hero', fields: "{ name: 'badge', type: 'text', required: true }, { name: 'title', type: 'text', required: true }, { name: 'subtitle', type: 'text', required: true }" },
  { folder: 'programs-page', name: 'ProgramsListCollection', slug: 'programs-list-collection', fields: "{ name: 'title', type: 'text', required: true }, { name: 'subtitle', type: 'text', required: true }, { name: 'programs', type: 'array', fields: [{ name: 'title', type: 'text', required: true }, { name: 'status', type: 'text', required: true }, { name: 'description', type: 'text', required: true }, { name: 'link', type: 'text', required: true }, { name: 'image', type: 'upload', relationTo: 'media', required: true }] }" },
  { folder: 'get-involved-page', name: 'GetInvolvedHero', slug: 'get-involved-hero', fields: "{ name: 'badge', type: 'text', required: true }, { name: 'title', type: 'text', required: true }, { name: 'subtitle', type: 'text', required: true }" },
  { folder: 'get-involved-page', name: 'GetInvolvedOpportunities', slug: 'get-involved-opportunities', fields: "{ name: 'title', type: 'text', required: true }, { name: 'subtitle', type: 'text', required: true }, { name: 'opportunities', type: 'array', fields: [{ name: 'title', type: 'text', required: true }, { name: 'description', type: 'text', required: true }, { name: 'iconName', type: 'text', required: true }, { name: 'link', type: 'text', required: true }, { name: 'linkText', type: 'text', required: true }] }" },
  { folder: 'partnership-page', name: 'PartnershipHero', slug: 'partnership-hero', fields: "{ name: 'badge', type: 'text', required: true }, { name: 'title', type: 'text', required: true }, { name: 'subtitle', type: 'text', required: true }" },
  { folder: 'partnership-page', name: 'PartnershipOptions', slug: 'partnership-options', fields: "{ name: 'title', type: 'text', required: true }, { name: 'subtitle', type: 'text', required: true }, { name: 'options', type: 'array', fields: [{ name: 'title', type: 'text', required: true }, { name: 'description', type: 'text', required: true }, { name: 'benefits', type: 'array', fields: [{ name: 'benefit', type: 'text', required: true }] }] }, { name: 'brochureTitle', type: 'text', required: true }, { name: 'brochureDescription', type: 'text', required: true }, { name: 'brochureFile', type: 'upload', relationTo: 'media', required: true }" },
  { folder: 'volunteer-page', name: 'VolunteerData', slug: 'volunteer-data', fields: "{ name: 'heroBadge', type: 'text', required: true }, { name: 'heroTitle', type: 'text', required: true }, { name: 'heroDescription', type: 'text', required: true }, { name: 'missionTitle', type: 'text', required: true }, { name: 'missionContent', type: 'text', required: true }, { name: 'empowermentTitle', type: 'text', required: true }, { name: 'empowermentContent', type: 'text', required: true }, { name: 'roles', type: 'array', fields: [{ name: 'title', type: 'text', required: true }, { name: 'description', type: 'text', required: true }, { name: 'requirements', type: 'array', fields: [{ name: 'requirement', type: 'text', required: true }] }] }" },
  { folder: 'donate-page', name: 'DonateData', slug: 'donate-data', fields: "{ name: 'heroTitle', type: 'text', required: true }, { name: 'heroDescription', type: 'text', required: true }, { name: 'impacts', type: 'array', fields: [{ name: 'impact', type: 'text', required: true }] }, { name: 'allocationTitle', type: 'text', required: true }, { name: 'allocationItems', type: 'array', fields: [{ name: 'name', type: 'text', required: true }, { name: 'icon', type: 'text', required: true }] }, { name: 'methods', type: 'array', fields: [{ name: 'title', type: 'text', required: true }, { name: 'description', type: 'text', required: true }, { name: 'details', type: 'array', fields: [{ name: 'label', type: 'text', required: true }, { name: 'value', type: 'text', required: true }] }, { name: 'actionLink', type: 'text' }, { name: 'actionText', type: 'text' }, { name: 'iconType', type: 'text', required: true }] }, { name: 'faqs', type: 'array', fields: [{ name: 'question', type: 'text', required: true }, { name: 'answer', type: 'text', required: true }] }" },
  { folder: 'programs-page', name: 'ProgramDetailsData', slug: 'program-details-data', fields: "{ name: 'title', type: 'text', required: true }, { name: 'subtitle', type: 'text', required: true }, { name: 'overview', type: 'text', required: true }, { name: 'problemStatement', type: 'text', required: true }, { name: 'impacts', type: 'array', fields: [{ name: 'impact', type: 'text', required: true }] }, { name: 'ctaText', type: 'text', required: true }, { name: 'testimonials', type: 'array', fields: [{ name: 'quote', type: 'text', required: true }, { name: 'author', type: 'text', required: true }] }, { name: 'address', type: 'text', required: true }, { name: 'email', type: 'text', required: true }, { name: 'phone', type: 'text', required: true }" }
];

const basePath = '/Users/josephnartey/Documents/iamjdnartey/because-she-can/bsc-website/src/collections';

const uniqueFolders = [...new Set(collections.map(c => c.folder))];
uniqueFolders.forEach(folder => {
  const dirPath = path.join(basePath, folder);
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
});

collections.forEach(c => {
  const fileContent = "import type { CollectionConfig } from 'payload'\n\nexport const " + c.name + ": CollectionConfig = {\n  slug: '" + c.slug + "',\n  access: {\n    read: () => true,\n  },\n  fields: [\n    " + c.fields + "\n  ],\n}\n";
  fs.writeFileSync(path.join(basePath, c.folder, c.name + '.ts'), fileContent);
});

const configPath = '/Users/josephnartey/Documents/iamjdnartey/because-she-can/bsc-website/src/payload.config.ts';
let configContent = fs.readFileSync(configPath, 'utf8');

const imports = collections.map(c => "import { " + c.name + " } from './collections/" + c.folder + "/" + c.name + "'").join('\n');
const collectionNames = collections.map(c => c.name).join(', ');

if (!configContent.includes('import { AboutHero }')) {
  configContent = configContent.replace("import { Stats } from './collections/Stats'", "import { Stats } from './collections/Stats'\n" + imports + "\nimport { AboutHero } from './collections/about-page/AboutHero'\nimport { AboutVisionAndMission } from './collections/about-page/AboutVisionAndMission'\nimport { CommunityMember } from './collections/CommunityMember'");
} else {
  // if AboutHero is included but new collections are not, insert them
  if (!configContent.includes(collections[0].name)) {
    configContent = configContent.replace("import { AboutHero }", imports + "\nimport { AboutHero }");
  }
}

const arrayMatch = configContent.match(/collections: \[[^\]]+\]/);
if (arrayMatch) {
  let inner = arrayMatch[0];
  if (!inner.includes(collections[0].name)) {
    let newInner = inner.replace(/]$/, ", " + collectionNames + "]");
    if (!inner.includes('AboutHero')) {
      newInner = newInner.replace(/]$/, ", AboutHero, AboutVisionAndMission]");
    }
    configContent = configContent.replace(arrayMatch[0], newInner);
  }
}

fs.writeFileSync(configPath, configContent);
console.log('Successfully generated schemas and updated config.');
