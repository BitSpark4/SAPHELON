/**
 * Typography constants defining font families, sizes, line heights, weights, and letter-spacings.
 * Extracted directly from Saphelon Design Guidelines.
 */

export const TYPOGRAPHY = {
  fontFamily: {
    primary: "'Manrope', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
  },
  fontWeight: {
    regular: 400,
    medium: 500,
    semiBold: 600,
    bold: 700,
    extraBold: 800,
  },
  fontSize: {
    heroTitle: 'clamp(44px, 6.6vw, 96px)',
    sectionTitle: 'clamp(30px, 3.4vw, 46px)',
    ctaTitle: 'clamp(34px, 4.2vw, 58px)',
    cardTitle: '21px',
    industryTitle: '20px',
    approachTitle: '19px',
    csvItem: '18px',
    bodyLg: '19px',
    bodyMd: '17px',
    bodySm: '15px',
    navLink: '14px',
    badge: '12px',
    meta: '13px',
    footerMeta: '14px',
    footerLegal: '13px',
  },
  lineHeight: {
    hero: '1.02',
    heading: '1.12',
    cta: '1.08',
    card: '1.25',
    subheading: '1.3',
    body: '1.6',
    bodyRelaxed: '1.65',
    single: '1',
  },
  letterSpacing: {
    tighter: '-0.02em',
    tight: '-0.015em',
    normal: '0',
    wide: '0.04em',
    wider: '0.08em',
    overline: '0.2em',
    heroOverline: '0.24em',
    tagline: '0.34em',
  },
} as const;
