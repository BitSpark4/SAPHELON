/**
 * SEO Meta Titles and Descriptions.
 * Source: SAPHELON-Content-Master.md Section 13.
 * Strictly adheres to character limits (Title <= 60 chars, Meta <= 155 chars).
 */

import type { SeoMeta } from '../../types';

export const SEO_DATA: Record<string, SeoMeta> = {
  home: {
    title: 'SAPHELON | Industrial Automation, IIoT, Industry 4.0 & AI',
    description:
      'SAPHELON in Pune delivers industrial automation, IIoT, Industry 4.0, AI and software solutions, with CSV support for pharma.',
  },
  about: {
    title: 'About SAPHELON | Engineering Confidence',
    description:
      'Learn about SAPHELON Lab Private Limited, our focus, our working principles and our approach to industrial and digital solutions.',
  },
  services: {
    title: 'Engineering & Digital Services | SAPHELON',
    description:
      'Explore industrial automation, IIoT and Industry 4.0, AI, software development and pharmaceutical CSV services from SAPHELON.',
  },
  industrialAutomation: {
    title: 'Industrial Automation: PLC, SCADA, HMI | SAPHELON',
    description:
      'PLC, SCADA and HMI engineering, control integration, FAT/SAT and commissioning support for industrial environments in India.',
  },
  iiotIndustry40: {
    title: 'IIoT & Industry 4.0 Solutions | SAPHELON',
    description:
      'Machine connectivity, real-time dashboards, OEE and MES integration support for smarter, more visible manufacturing operations.',
  },
  artificialIntelligence: {
    title: 'Industrial & Business AI Solutions | SAPHELON',
    description:
      'Use-case-driven AI for equipment data, documents and workflows: discovery, feasibility, solution design and integration.',
  },
  softwareSolutions: {
    title: 'Custom Software & Dashboards | SAPHELON',
    description:
      'Custom web applications, dashboards, workflow tools and integrations built around how your teams actually work.',
  },
  pharmaceuticalCsv: {
    title: 'Pharmaceutical CSV Support | SAPHELON',
    description:
      'Computer System Validation support for pharmaceutical and regulated environments: planning, traceability, testing and documentation.',
  },
  industries: {
    title: 'Industries We Support | SAPHELON',
    description:
      'Technology and engineering services for pharmaceutical, manufacturing, engineering and digitally transforming businesses.',
  },
  approach: {
    title: 'Our Project Delivery Approach | SAPHELON',
    description:
      'See how SAPHELON handles requirements, planning, implementation, verification and handover on every project.',
  },
  contact: {
    title: 'Contact SAPHELON | Business Enquiries',
    description:
      'Contact SAPHELON in Pune, India, to discuss automation, IIoT, AI, software or CSV requirements.',
  },
  privacyPolicy: {
    title: 'Privacy Policy | SAPHELON',
    description:
      'Privacy Policy for Saphelon Lab Private Limited, outlining personal data processing under the DPDP Act 2023.',
  },
  termsOfUse: {
    title: 'Terms of Use | SAPHELON',
    description:
      'Terms of Use governing access to the website of Saphelon Lab Private Limited.',
  },
  notFound: {
    title: 'Page Not Found | SAPHELON',
    description: 'The requested page could not be found. Navigate back to SAPHELON home or services.',
  },
};
