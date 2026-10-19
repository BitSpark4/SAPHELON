/**
 * Footer Content and Structure Constants.
 * Source: SAPHELON-Content-Master.md Section 0.3
 */

import { ROUTES, EXTERNAL_LINKS } from '../routes';
import { BRAND } from './brand';

export const FOOTER_CONTENT = {
  brandName: BRAND.brandName,
  tagline: BRAND.tagline,
  descriptor: BRAND.descriptor,
  company: BRAND.legalName,
  location: BRAND.location,
  email: BRAND.email,
  phone: BRAND.phone,
  phoneLink: EXTERNAL_LINKS.phone,
  emailLink: EXTERNAL_LINKS.email,

  quickLinksTitle: 'Quick Links',
  quickLinks: [
    { label: 'Home', href: ROUTES.home },
    { label: 'About Us', href: ROUTES.about },
    { label: 'Services', href: ROUTES.services },
    { label: 'Industries', href: ROUTES.industries },
    { label: 'Our Approach', href: ROUTES.approach },
    { label: 'Contact Us', href: ROUTES.contact },
  ],

  servicesTitle: 'Our Services',
  servicesLinks: [
    { label: 'Industrial Automation', href: ROUTES.industrialAutomation },
    { label: 'IIoT & Industry 4.0', href: ROUTES.iiotIndustry40 },
    { label: 'Artificial Intelligence', href: ROUTES.artificialIntelligence },
    { label: 'Software Solutions', href: ROUTES.softwareSolutions },
    { label: 'Pharmaceutical & CSV Solutions', href: ROUTES.pharmaceuticalCsv },
  ],

  contactTitle: 'Get in Touch',
  copyright: '© 2026 SAPHELON Lab Private Limited. All rights reserved.',
  privacyPolicyText: 'Privacy Policy',
  privacyPolicyHref: ROUTES.privacyPolicy,
  termsText: 'Terms of Use',
  termsHref: ROUTES.termsOfUse,

  // Pending items stored as null; hidden in UI until provided
  registeredOffice: BRAND.address,
  cin: BRAND.cin,
  gstin: BRAND.gstin,
  linkedin: BRAND.linkedin,
  youtube: BRAND.youtube,
};
