/**
 * Home Page Structured Content Constants.
 * Source: SAPHELON-Content-Master.md Section 1.
 */

import { ROUTES } from '../routes';

export const HOME_CONTENT = {
  hero: {
    eyebrow: 'INDUSTRIAL TECHNOLOGY. DIGITAL SOLUTIONS.',
    titlePrefix: 'Engineering ',
    titleAccent: 'Confidence.',
    subtitle:
      'Industrial automation, connected operations, AI and software, engineered for manufacturing and regulated pharmaceutical environments.',
    primaryCtaText: 'Discuss Your Project',
    primaryCtaHref: ROUTES.contact,
    secondaryCtaText: 'Explore Our Services',
    secondaryCtaHref: ROUTES.services,
  },
  about: {
    eyebrow: 'WHO WE ARE',
    title: 'Technology that works where it matters.',
    p1: 'SAPHELON is an engineering and technology company in Pune. We help organisations address industrial, operational and digital challenges with practical, thoughtfully designed solutions.',
    p2: 'Our work brings together industrial automation, connectivity, software engineering and AI. For pharmaceutical organisations, we also offer computerised system validation support.',
    p3: 'We understand your environment before we recommend a solution, because technology creates value only when it solves a real business need.',
    linkText: 'Learn More About Us',
    linkHref: ROUTES.about,
  },
  services: {
    eyebrow: 'OUR CORE SERVICES',
    title: 'Integrated Engineering and Digital Solutions',
    subtitle:
      'Four service pillars to help you operate efficiently, make better use of data and prepare for what comes next.',
    exploreText: 'Explore All Services',
    exploreHref: ROUTES.services,
  },
  pipeline: {
    eyebrow: 'FROM PLANT FLOOR TO DECISION',
    title: 'From Machine Signal to Business Decision',
    subtitle:
      'Automation, connectivity, software and AI work best as one connected path. We can help at any step, or across all of them.',
    steps: [
      {
        id: '01',
        name: 'Control',
        description:
          'Controllers, supervisory systems and operator screens that run your process reliably.',
      },
      {
        id: '02',
        name: 'Connect',
        description:
          'Sensors, gateways and edge data collection that bring machine data out of the plant.',
      },
      {
        id: '03',
        name: 'Visualise',
        description:
          'Dashboards, alerts and performance views that make operations visible.',
      },
      {
        id: '04',
        name: 'Analyse',
        description:
          'AI-assisted analysis that helps teams spot patterns and anomalies earlier.',
      },
    ],
    note: 'Start with a single step. Grow as your priorities and budget allow.',
  },
  csv: {
    eyebrow: 'PHARMACEUTICAL CSV CAPABILITY',
    title: 'Pharmaceutical & CSV Solutions',
    tagline: 'Automation that is built to be validated.',
    description:
      'We provide Computer System Validation (CSV) support for pharmaceutical and regulated environments, focused on documented evidence, intended use and risk-based testing.',
    chips: [
      'Validation Planning',
      'Requirements & Traceability',
      'Risk-Based Testing',
      'Documentation & Handover',
    ],
    ctaText: 'Explore Pharmaceutical & CSV Solutions',
    ctaHref: ROUTES.pharmaceuticalCsv,
  },
  industries: {
    eyebrow: 'INDUSTRIES WE SUPPORT',
    title: 'Built Around Your Industry’s Challenges',
    subtitle:
      'From pharmaceuticals to manufacturing, our solutions start from the challenges of your sector.',
    linkText: 'View All Industries',
    linkHref: ROUTES.industries,
  },
  why: {
    eyebrow: 'WHY SAPHELON',
    title: 'A Practical Partner for Technical Work',
    points: [
      {
        id: '01',
        title: 'Problem first',
        description: 'We understand the requirement before proposing a solution.',
      },
      {
        id: '02',
        title: 'Engineering and digital, together',
        description:
          'Control systems, connectivity, software and AI coordinated around your operating goals.',
      },
      {
        id: '03',
        title: 'Scope-driven delivery',
        description:
          'Deliverables, responsibilities and acceptance criteria agreed up front.',
      },
      {
        id: '04',
        title: 'Documentation you can trace',
        description:
          'Requirements, tests, decisions and handover records kept clear.',
      },
      {
        id: '05',
        title: 'Start small, scale with evidence',
        description:
          'Begin with an assessment or pilot, then grow by priority and budget.',
      },
    ],
  },
  approach: {
    eyebrow: 'OUR APPROACH',
    title: 'A Structured Path from Idea to Impact',
    subtitle:
      'A collaborative and transparent approach that turns your requirements into reliable, scalable solutions.',
    ctaText: 'Learn More About Our Approach',
    ctaHref: ROUTES.approach,
  },
  cta: {
    eyebrow: "LET'S BUILD TOGETHER",
    title: 'Have an Engineering or Digital Challenge to Solve?',
    description:
      'Tell us about your requirements. Our team will discuss the context, the outcomes you expect and a practical way forward.',
    primaryCtaText: 'Start a Conversation',
    primaryCtaHref: ROUTES.contact,
  },
};
