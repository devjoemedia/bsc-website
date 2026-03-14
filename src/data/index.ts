/**
 * Mock Data — structured to match future Payload CMS collections.
 *
 * Each top-level key maps to a Payload collection (or global):
 *   - homepage   → Global (single document)
 *   - aboutPage  → Global (single document)
 *   - programs   → Collection (many documents)
 *   - spotlights → Collection (many documents)
 *   - teamMembers→ Collection (many documents)
 *   - partners   → Collection (many documents)
 *   - faqs       → Collection (many documents)
 *   - timeline   → Collection (many documents)
 *   - values     → Collection (many documents)
 *   - siteConfig → Global (single document)
 */

// ─── Shared Types ────────────────────────────────────────────────

export interface Stat {
  value: string;
  label: string;
}

export interface HeroContent {
  titleStart: string;
  titleHighlight: string;
  subtitle: string;
  ctaPrimary: string;
  ctaSecondary: string;
}

export interface Pillar {
  id: string;
  title: string;
  description: string;
  iconName: string; // icon identifier — maps to component
}

export interface Program {
  id: string;
  slug: string;
  badge: string;
  title: string;
  subtitle: string;
  description: string;
  highlights: string[];
  cta: string;
  accentColor: "primary" | "red";
  status: "open" | "coming-soon" | "closed";
}

export interface SpotlightMember {
  id: string;
  slug: string;
  name: string;
  role: string;
  organization?: string;
  initials: string;
  story: string[];
  quote?: string;
  featured: boolean;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  initials: string;
  bio?: string;
}

export interface Partner {
  id: string;
  name: string;
  logoUrl?: string; // empty until real assets are added
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
  order: number;
}

export interface TimelineEvent {
  id: string;
  year: string;
  date: string;
  title: string;
  description: string;
  order: number;
}

export interface Value {
  id: string;
  number: string;
  title: string;
  description: string;
  order: number;
}

export interface FounderQuote {
  id: string;
  name: string;
  title: string;
  quote: string;
}

// ─── Site Data ───────────────────────────────────────────────────

export const siteData = {
  // ── Site Config (Global) ──────────────────────────────────────
  siteConfig: {
    name: "Because She Can",
    shortName: "BSC",
    email: "info@becauseshecan.tech",
    phone: "(+233) 50 690 0543",
    address: "AD7 Community 11 Tema",
    tagline:
      "Because She Can is on a mission to encourage & empower women to excel in technology disciplines and roles.",
    socialLinks: {
      twitter: "#",
      linkedin: "#",
      instagram: "#",
    },
  },

  // ── Homepage (Global) ─────────────────────────────────────────
  homepage: {
    hero: {
      titleStart: "Showing Her That",
      titleHighlight: "She Can",
      subtitle:
        "Because She Can is building Africa's biggest pipeline of Women in Technology. We are committed to empowering women to succeed in their chosen areas of Tech.",
      ctaPrimary: "Join the Community",
      ctaSecondary: "Learn More",
    } as HeroContent,

    stats: [
      { value: "77+", label: "Mentees" },
      { value: "67+", label: "Mentors" },
      { value: "15+", label: "Countries" },
      { value: "13+", label: "Laptops Donated" },
    ] as Stat[],

    mission: {
      heading: "Because She Can, So Can I",
      body: [
        "The gender gap in technology is not just a global issue — it's a crisis, particularly for women in Africa. Africa has the widest gender gap in internet usage globally, with only 34% of women using the internet compared to 45% of men.",
        "This digital divide is just the tip of the iceberg. Beneath it lie systemic issues such as financial constraints, limited access to resources, and deeply rooted cultural biases that prevent women from accessing, pursuing, and thriving in technology careers.",
      ],
      statCards: [
        { value: 34, suffix: "%", label: "Women using internet in Africa" },
        { value: 45, suffix: "%", label: "Men using internet in Africa" },
        { value: 77, suffix: "+", label: "Mentees Empowered" },
        { value: 15, suffix: "+", label: "Countries Reached" },
      ],
    },

    pillars: [
      {
        id: "access",
        title: "Intentional Focus on Access",
        description:
          "From providing laptops to mentorship and technical training, we address the financial and systemic barriers preventing women from participating in tech.",
        iconName: "laptop",
      },
      {
        id: "advocacy",
        title: "Intersectional Advocacy",
        description:
          "We recognize that women in tech face unique challenges based on their identities. Our programs support women across different economic, cultural, and social contexts.",
        iconName: "people",
      },
      {
        id: "community",
        title: "Community-Driven Empowerment",
        description:
          "Through initiatives like the CodeBridge Fellowship and our Mentorship Program, we're not just building skills — we're creating a community of women who lift as they climb.",
        iconName: "heart",
      },
    ] as Pillar[],

    partnersCta: {
      heading: "Narrow the Digital Gender Divide in Africa",
      body: "Because She Can is on a mission to encourage & empower women to excel in technology disciplines and roles.",
      ctaPrimary: "Partner with Us",
      ctaSecondary: "Get in Touch",
    },
  },

  // ── About Page (Global) ───────────────────────────────────────
  aboutPage: {
    hero: {
      heading:
        "Empowering Women and Girls to Lead, Create, and Collaborate in Tech",
    },

    vision:
      "Our Vision is to bridge the gap between women in Technology on the job and aspiring girls. We aim to grow a community of successful African girls in the field of technology who will in turn provide solutions to challenges around them and encourage others into the field of tech.",

    mission:
      "Because She Can is on a mission to encourage and empower women and girls to excel in technology disciplines and roles.",

    stats: [
      { value: "1K+", label: "African women impacted" },
      { value: "77+", label: "Girls Mentored" },
      { value: "15+", label: "Countries Represented" },
      { value: "13+", label: "Laptops Donated" },
      { value: "10+", label: "Collaborations Globally" },
      { value: "5+", label: "Educational Institutions Served" },
    ] as Stat[],

    statsFooter:
      "Because She Can is working to make sure no girl interested in tech is left behind. Together we build a strong, efficient, and competent girl tech nation.",

    diversity: {
      heading: "Diversity & Inclusion",
      body: "At Because She Can, we appreciate diversity — we celebrate it, we support it, and we thrive on it for the benefit of our employees and our community. We are an equal opportunity organization and do not condone harassment or discrimination. You are welcome to join us as a member, to volunteer with us, and to mentor our girls irrespective of your race, ethnicity, gender, social status, religion, disability, or age.",
      stat: "WOMEN MAKE UP 30% OF THE TECH WORKSPACE IN AFRICA",
      cta: "Your contribution will empower young girls through scholarships, mentorship programs, helping to bridge the gender gap in Technology fields. Together, we can inspire confidence, ignite passion, and pave the way for a brighter future in tech.",
    },
  },

  // ── Values (Collection) ───────────────────────────────────────
  values: [
    {
      id: "val-1",
      number: "01",
      title: "Authenticity",
      description:
        "As a community of women who have faced real-life challenges, we are here to support growth through all the highs and lows.",
      order: 1,
    },
    {
      id: "val-2",
      number: "02",
      title: "Continuous Growth",
      description:
        "Our commitment ensures tech careers and personal journeys consistently progress towards greater fulfilment and achievement.",
      order: 2,
    },
    {
      id: "val-3",
      number: "03",
      title: "Inclusivity",
      description:
        "We wholeheartedly embrace and celebrate the richness of our varied experiences, backgrounds, and perspectives.",
      order: 3,
    },
    {
      id: "val-4",
      number: "04",
      title: "Focus on Excellence",
      description:
        "Our dedication is centred on our members, ensuring they receive the utmost value from our community.",
      order: 4,
    },
    {
      id: "val-5",
      number: "05",
      title: "Accessibility",
      description:
        "We are readily available and approachable, always here to provide personal assistance whenever needed.",
      order: 5,
    },
    {
      id: "val-6",
      number: "06",
      title: "Education",
      description:
        "Our commitment to knowledge-sharing, fostering curiosity, and acquiring new skills creates an environment that nurtures learning and enlightenment.",
      order: 6,
    },
  ] as Value[],

  // ── Programs (Collection) ─────────────────────────────────────
  programs: [
    {
      id: "prog-1",
      slug: "codebridge-fellowship-2026",
      badge: "Fellowship",
      title: "CodeBridge Fellowship 2026",
      subtitle: "Cohort III",
      description:
        "A nine-month program designed to empower African women to thrive in the digital age. This fellowship is more than a training initiative — it's a movement to dismantle financial barriers preventing women from fully participating in technology.",
      highlights: [
        "Laptops provided to 13 economically disadvantaged women",
        "Dedicated mentors for professional and personal growth",
        "Workshops on résumé building, cover letters & personal branding",
        "Partnerships with industry leaders",
      ],
      cta: "Applications Opening Soon",
      accentColor: "primary",
      status: "coming-soon",
    },
    {
      id: "prog-2",
      slug: "mentorship-program-2025",
      badge: "Mentorship",
      title: "Annual Mentorship Program 2025",
      subtitle: "Cohort IV",
      description:
        "A fully virtual, one-on-one mentorship initiative that has grown into a global network of 77 mentees and 67 mentors spanning over 15 countries.",
      highlights: [
        "Software Development track",
        "Data Science & Analytics track",
        "Product & Project Management track",
        "Soccer Analytics workshops with TwelveFootball (Sweden)",
      ],
      cta: "Applications Open Q2 2025",
      accentColor: "red",
      status: "coming-soon",
    },
  ] as Program[],

  // ── Spotlights (Collection) ───────────────────────────────────
  spotlights: [
    {
      id: "spot-1",
      slug: "ethel-akrasi",
      name: "Ethel Akrasi",
      role: "Engineer",
      organization: "Huawei Technologies",
      initials: "EA",
      story: [
        "Ethel's journey with Because She Can started during her second year at the University of Ghana. She joined as a mentee in Cohort I, choosing Front-End Development and Product Design tracks. By program end, she had built her first website.",
        "In 2023, she returned for Cohort II focusing on Back-End Development, then volunteered as a computing instructor for the BSC × YAGEP initiative, teaching pre-teen and teenage girls.",
        "Her hard work earned her the Huawei Technologies Global ICT Academy Award — 1st Place in the Network Track at Regional Level (2023/24). Today, Ethel works as an Engineer at Huawei Technologies after graduating with honors.",
      ],
      quote:
        "Ethel's story exemplifies what we stand for: building a pipeline where women are empowered to learn, grow, lead, and turn around to lift others.",
      featured: true,
    },
    {
      id: "spot-2",
      slug: "ubaida-abdulai",
      name: "Ubaida Abdulai",
      role: "Community Member",
      initials: "UA",
      story: [],
      featured: false,
    },
    {
      id: "spot-3",
      slug: "samira-awal",
      name: "Samira Awal",
      role: "Community Member",
      initials: "SA",
      story: [],
      featured: false,
    },
    {
      id: "spot-4",
      slug: "dorcas-laryea",
      name: "Dorcas Laryea",
      role: "Community Member",
      initials: "DL",
      story: [],
      featured: false,
    },
  ] as SpotlightMember[],

  // ── Team Members (Collection) ─────────────────────────────────
  teamMembers: [
    {
      id: "team-1",
      name: "Otema Yirenkyi",
      role: "Co-Founder & Operations Director",
      initials: "OY",
    },
    {
      id: "team-2",
      name: "Kweyakie Afi Blebo",
      role: "Co-Founder & Programs Director",
      initials: "KB",
    },
    {
      id: "team-3",
      name: "Ubaida Napari Abdulai",
      role: "Programs Manager",
      initials: "UA",
    },
  ] as TeamMember[],

  // ── Founders Quotes (Collection) ──────────────────────────────
  founderQuotes: [
    {
      id: "fq-1",
      name: "Kweyakie Afi Blebo",
      title: "Co-Founder & Programs Director, Data Scientist",
      quote:
        "It is one thing to read statistics about the underrepresentation of women in technology and it's an entirely different experience to confront the reality that you are a walking statistic. It was difficult for me to reconcile the fact that being either the only woman or one of the very few in the spaces I entered was considered an achievement. The work we do at Because She Can is deeply personal, and a bigger achievement for me is creating opportunities and advocating for policy changes so that women after me can thrive in technology careers. To our incredible community members, dedicated staff, supportive partners, and tireless volunteers, you are the lifeblood of this mission. Together, we are not just imagining a more inclusive future, we are building it.",
    },
  ] as FounderQuote[],

  // ── Partners (Collection) ─────────────────────────────────────
  partners: [
    { id: "part-1", name: "Partner 1" },
    { id: "part-2", name: "Partner 2" },
    { id: "part-3", name: "Partner 3" },
    { id: "part-4", name: "Partner 4" },
  ] as Partner[],

  // ── Timeline (Collection) ─────────────────────────────────────
  timeline: [
    {
      id: "tl-1",
      year: "2021",
      date: "January 2021",
      title: "BSC was founded",
      description:
        "Because She Can was founded by two friends with lived experience in the Ghanaian Tech ecosystem.",
      order: 1,
    },
    {
      id: "tl-2",
      year: "2021",
      date: "December 2021",
      title: "First DFWWC donation to 5 girls",
      description:
        "Launched the first CodeBridge Program (formerly DfWWC).",
      order: 2,
    },
    {
      id: "tl-3",
      year: "2022",
      date: "June - August 2022",
      title: "First Mentorship Cohort",
      description:
        "Launched the first cohort of the annual mentorship program.",
      order: 3,
    },
    {
      id: "tl-4",
      year: "2022",
      date: "December 2022",
      title: "Second DFWWC donation to 5 girls",
      description:
        "Launched the second CodeBridge Program (formerly DfWWC).",
      order: 4,
    },
    {
      id: "tl-5",
      year: "2023",
      date: "June 2023",
      title: "Second Mentorship Cohort (3 laptop donations)",
      description:
        "Launched the second cohort of the annual mentorship program.",
      order: 5,
    },
    {
      id: "tl-6",
      year: "2023",
      date: "September 2023",
      title: "Girls in Tech partnership",
      description:
        "Partnership with Play and Learn Foundation. We gave training on basic computer skills.",
      order: 6,
    },
    {
      id: "tl-7",
      year: "2023",
      date: "December 2023",
      title: "Tap into Tech Ghana Event",
      description:
        "Organized in partnership with Black Girls in Tech at the Google Office, Accra.",
      order: 7,
    },
    {
      id: "tl-8",
      year: "2024",
      date: "February 2024",
      title: "Career Retreat",
      description:
        "Career Retreat with Women Talk UK at SN Incubator.",
      order: 8,
    },
    {
      id: "tl-9",
      year: "2024",
      date: "May - July 2024",
      title: "Third Mentorship Cohort",
      description:
        "Launched the third cohort of the annual mentorship program.",
      order: 9,
    },
  ] as TimelineEvent[],

  // ── FAQs (Collection) ─────────────────────────────────────────
  faqs: [
    {
      id: "faq-1",
      question: "How can I donate to Because She Can?",
      answer:
        "You can support our mission by donating through our website's secure donation portal. We accept donations via credit/debit cards, mobile money. For other means, corporate sponsorships or in-kind donations, please contact us directly through our email or phone number provided on the website.",
      order: 1,
    },
    {
      id: "faq-2",
      question: "Who can join the organization?",
      answer:
        "We welcome women and girls passionate about technology, regardless of their experience level. This includes students, early-career professionals, and seasoned tech experts. Men who support our mission can also join as mentors in our annual mentorship program.",
      order: 2,
    },
    {
      id: "faq-3",
      question: "How can I apply for a mentorship program?",
      answer:
        "To apply, fill out the mentorship application form. You'll need to provide your background, interests, and specific areas where you seek guidance. Applications are reviewed yearly for our cohort mentorship program. Dates will be announced when applications open.",
      order: 3,
    },
    {
      id: "faq-4",
      question: "How can I get involved?",
      answer:
        "You can get involved by joining our programs as a participant, mentor, or volunteer. Attend our events, share your expertise, or help us organize workshops and outreach activities. You can also support us by becoming a sponsor, advocating for gender diversity in tech, or simply spreading the word about our initiatives.",
      order: 4,
    },
    {
      id: "faq-5",
      question: "Are there opportunities for corporate partnerships?",
      answer:
        "Yes, we collaborate with companies to provide internships, job placements, and sponsorships for our programs. Interested organizations can contact us to discuss partnership opportunities.",
      order: 5,
    },
    {
      id: "faq-6",
      question: "What countries in Africa do you operate in?",
      answer:
        "We are headquartered in Ghana. However, our services, such as our virtual cohort mentorship program, are accessible across the continent.",
      order: 6,
    },
  ] as FAQ[],
};
