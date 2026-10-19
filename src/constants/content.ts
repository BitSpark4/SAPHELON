/**
 * Central Content Module re-exporting all structured content from ./content/
 * and maintaining full backward-compatibility with updated copy from SAPHELON-Content-Master.md.
 */

export * from './content';

import { HOME_CONTENT } from './content/home';
import { SERVICES_REGISTRY } from './content/services';
import { ROUTES } from './routes';
import { APPROACH_STRIP_STEPS } from './content/approach';
import { BRAND } from './content/brand';
import { INDUSTRIES_LIST } from './content/industries';

// Backward-compatible adapters mapped to new Content Master data
export const NAV_LINKS = [
  { label: 'Home', href: ROUTES.home },
  { label: 'About Us', href: ROUTES.about },
  { label: 'Services', href: ROUTES.services },
  { label: 'Industries', href: ROUTES.industries },
  { label: 'Our Approach', href: ROUTES.approach },
  { label: 'Contact Us', href: ROUTES.contact },
] as const;

export const HERO_CONTENT = {
  overline: HOME_CONTENT.hero.eyebrow,
  titlePrefix: HOME_CONTENT.hero.titlePrefix,
  titleAccent: HOME_CONTENT.hero.titleAccent,
  subtitle: HOME_CONTENT.hero.subtitle,
  primaryCtaText: HOME_CONTENT.hero.secondaryCtaText,
  primaryCtaHref: HOME_CONTENT.hero.secondaryCtaHref,
  secondaryCtaText: HOME_CONTENT.hero.primaryCtaText,
  secondaryCtaHref: HOME_CONTENT.hero.primaryCtaHref,
} as const;

export const SERVICES_CONTENT = {
  overline: HOME_CONTENT.services.eyebrow,
  title: HOME_CONTENT.services.title,
  subtitle: HOME_CONTENT.services.subtitle,
  exploreText: 'Explore All Services →',
  exploreHref: ROUTES.services,
  items: SERVICES_REGISTRY.slice(0, 4).map((s) => ({
    id: s.id,
    title: s.name,
    description: s.cardText,
    linkText: 'Learn More →',
    href: s.href,
    slug: s.slug,
    animatedIconUrl: s.animatedIconUrl || null,
    imageUrl: s.imageUrl,
  })),
} as const;

export const CSV_CONTENT = {
  overline: HOME_CONTENT.csv.eyebrow,
  title: HOME_CONTENT.csv.title,
  tagline: HOME_CONTENT.csv.tagline,
  description: HOME_CONTENT.csv.description,
  ctaText: HOME_CONTENT.csv.ctaText,
  ctaHref: HOME_CONTENT.csv.ctaHref,
  chips: HOME_CONTENT.csv.chips,
  steps: [
    { id: '01', title: 'Validation Planning' },
    { id: '02', title: 'Requirements & Traceability' },
    { id: '03', title: 'Risk-Based Testing' },
    { id: '04', title: 'Documentation & Handover' },
  ],
} as const;

export const INDUSTRIES_CONTENT = {
  overline: HOME_CONTENT.industries.eyebrow,
  title: HOME_CONTENT.industries.title,
  description: HOME_CONTENT.industries.subtitle,
  linkText: HOME_CONTENT.industries.linkText,
  linkHref: HOME_CONTENT.industries.linkHref,
  items: INDUSTRIES_LIST.map((ind) => ({
    title: ind.title,
    description: ind.intro,
  })),
} as const;

export const APPROACH_CONTENT = {
  overline: HOME_CONTENT.approach.eyebrow,
  title: HOME_CONTENT.approach.title,
  description: HOME_CONTENT.approach.subtitle,
  ctaText: HOME_CONTENT.approach.ctaText,
  ctaHref: HOME_CONTENT.approach.ctaHref,
  steps: APPROACH_STRIP_STEPS,
} as const;

export const CONTACT_CONTENT = {
  overline: HOME_CONTENT.cta.eyebrow,
  title: HOME_CONTENT.cta.title,
  description: HOME_CONTENT.cta.description,
  primaryCtaText: HOME_CONTENT.cta.primaryCtaText,
  secondaryCtaText: 'Contact Us',
} as const;

export const FOOTER_CONTENT = {
  brandName: BRAND.brandName,
  subtitle: BRAND.descriptor,
  company: BRAND.legalName,
  location: BRAND.location,
  quickLinksTitle: 'Quick Links',
  servicesTitle: 'Our Services',
  contactTitle: 'Get in Touch',
  copyright: '© 2026 SAPHELON Lab Private Limited. All rights reserved.',
  privacyPolicyText: 'Privacy Policy',
  termsText: 'Terms of Use',
} as const;
