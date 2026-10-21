/**
 * Content data types for Saphelon website components, sections, and pages.
 * Aligned with SAPHELON-Content-Master.md and SAPHELON-Content-Plan.md specifications.
 */

export interface NavServiceDropdownItem {
  name: string;
  slug: string;
  href: string;
  isSpecialised?: boolean;
}

export interface NavLinkItem {
  label: string;
  href: string;
  dropdown?: NavServiceDropdownItem[];
}

export interface BrandConstants {
  brandName: string;
  legalName: string;
  tagline: string;
  descriptor: string;
  eyebrow: string;
  location: string;
  email: string;
  phone: string;
  website: string | null;
  address: string | null;
  cin: string | null;
  gstin: string | null;
  companyProfilePdf: string | null;
  linkedin: string | null;
  youtube: string | null;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  linkText: string;
  href: string;
  slug?: string;
  animatedIconUrl?: string | null;
  imageUrl?: string;
}

export interface ServiceRegistryItem {
  id: string;
  name: string;
  slug: string;
  href: string;
  cardText: string;
  isSpecialised?: boolean;
  keyAreas?: string[];
  animatedIconUrl?: string | null;
  imageUrl?: string;
}

export interface ServiceAreaItem {
  title: string;
  description: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface ServiceDetailContent {
  slug: string;
  serviceNumber: string;
  eyebrow: string;
  title: string;
  titleAccent: string;
  imageUrl?: string;
  promise: string;
  intro: string;
  areasHeading: string;
  areas: ServiceAreaItem[];
  subSections?: Array<{
    heading: string;
    subheading?: string;
    items: ServiceAreaItem[];
  }>;
  principles?: string[];
  deliverablesHeading: string;
  deliverablesNote?: string;
  deliverables: string[];
  outcomesHeading: string;
  outcomes: string[];
  standardsNote?: string;
  scopeNotes?: string[];
  faqHeading: string;
  faq: FaqItem[];
  ctaHeading: string;
  ctaText: string;
  ctaButtonText: string;
}

export interface IndustryItem {
  title: string;
  description: string;
}

export interface IndustrySector {
  id: string;
  title: string;
  intro: string;
  challenges: string[];
  howWeHelp: string[];
  services: string[];
}

export interface CsvStepItem {
  id: string;
  title: string;
}

export interface ApproachStepItem {
  id: string;
  title: string;
  description: string;
}

export interface ApproachStage {
  stageNumber: number;
  title: string;
  description: string;
}

export interface ApproachPhase {
  phaseId: string;
  name: string;
  summary: string;
  stages: ApproachStage[];
}

export interface EngagementModel {
  title: string;
  description: string;
}

export interface GlossaryItem {
  term: string;
  expansion: string;
}

export interface SeoMeta {
  title: string;
  description: string;
}

export interface ContactFormData {
  name: string;
  company: string;
  email: string;
  phone: string;
  industry: string;
  service: string;
  preferredContactMethod: 'email' | 'phone';
  message: string;
  consent: boolean;
  botField?: string;
  // Legacy aliases for backward compatibility
  fullName?: string;
  companyName?: string;
  businessEmail?: string;
  serviceOfInterest?: string;
  requirementDescription?: string;
}
