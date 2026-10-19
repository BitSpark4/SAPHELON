/**
 * Route paths, page destinations, and navigation targets used across the website.
 * Aligned with SAPHELON-Content-Master.md and SAPHELON-Content-Plan.md.
 */

export const ROUTES = {
  home: '/',
  about: '/about',
  services: '/services',
  industrialAutomation: '/services/industrial-automation',
  iiotIndustry40: '/services/iiot-industry-4-0',
  artificialIntelligence: '/services/artificial-intelligence',
  softwareSolutions: '/services/software-solutions',
  pharmaceuticalCsv: '/services/pharmaceutical-csv',
  csv: '/services/pharmaceutical-csv', // Backward-compatible alias
  industries: '/industries',
  approach: '/our-approach',
  contact: '/contact',
  privacyPolicy: '/privacy-policy',
  termsOfUse: '/terms-of-use',
  guidelines: '/guidelines',
} as const;

export const APP_ROUTES = {
  home: ROUTES.home,
  about: ROUTES.about,
  services: ROUTES.services,
  industrialAutomation: ROUTES.industrialAutomation,
  iiotIndustry40: ROUTES.iiotIndustry40,
  artificialIntelligence: ROUTES.artificialIntelligence,
  softwareSolutions: ROUTES.softwareSolutions,
  pharmaceuticalCsv: ROUTES.pharmaceuticalCsv,
  csv: ROUTES.csv,
  industries: ROUTES.industries,
  approach: ROUTES.approach,
  contact: ROUTES.contact,
  privacyPolicy: ROUTES.privacyPolicy,
  termsOfUse: ROUTES.termsOfUse,
  guidelines: ROUTES.guidelines,
} as const;

export const EXTERNAL_LINKS = {
  email: 'mailto:info@saphelon.com',
  phone: 'tel:+9170282422253',
  displayPhone: '+91 70282422253',
  displayEmail: 'info@saphelon.com',
  location: 'Pune, Maharashtra, India',
  companyName: 'Saphelon Lab Private Limited',
  // Social link placeholders - hidden in upgraded Footer
  linkedin: '#',
  youtube: '#',
} as const;
