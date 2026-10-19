/**
 * Barrel export for all structured content constants.
 * Single source of truth corresponding to SAPHELON-Content-Master.md.
 */

export * from './brand';
export * from './navigation';
export * from './glossary';
export * from './footer';
export * from './services';
export * from './industries';
export * from './approach';
export * from './home';
export * from './about';
export * from './contact';
export * from './legal';
export * from './seo';

import { HOME_CONTENT } from './home';
import { SERVICES_REGISTRY } from './services';
import { APPROACH_STRIP_STEPS } from './approach';
import { ROUTES } from '../routes';

// Section adapters for Home & shared components
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
};

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
};

export const APPROACH_CONTENT = {
  overline: HOME_CONTENT.approach.eyebrow,
  title: HOME_CONTENT.approach.title,
  description: HOME_CONTENT.approach.subtitle,
  ctaText: HOME_CONTENT.approach.ctaText,
  ctaHref: HOME_CONTENT.approach.ctaHref,
  steps: APPROACH_STRIP_STEPS,
};
