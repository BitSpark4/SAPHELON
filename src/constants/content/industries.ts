/**
 * Industries Registry and Page Content.
 * Source: SAPHELON-Content-Master.md Section 0.5 & Section 9.
 */

import { ROUTES } from '../routes';
import type { IndustrySector } from '../../types';

export const INDUSTRIES_LIST: IndustrySector[] = [
  {
    id: 'pharma',
    title: 'Pharmaceuticals & Life Sciences',
    intro:
      'Pharmaceutical environments depend on controlled processes, reliable computerised systems and documented quality practice.',
    challenges: [
      'Showing that computerised systems are fit for their intended use, with evidence',
      'Data integrity, audit trails and access control across manufacturing systems',
      'Paper-based, fragmented or disconnected quality records',
      'Keeping automation changes rigorously controlled and documented',
    ],
    howWeHelp: [
      'Automation and control system engineering',
      'Industrial IoT (IIoT) and operational data visibility',
      'Software for defined quality and engineering workflows',
      'Computer System Validation (CSV) and documentation support',
      'AI use-case assessment where appropriate',
    ],
    services: [
      'Industrial Automation',
      'IIoT & Industry 4.0',
      'Pharmaceutical & CSV Solutions',
      'Software Solutions',
      'Artificial Intelligence',
    ],
  },
  {
    id: 'manufacturing',
    title: 'Manufacturing & Industrial Operations',
    intro:
      'Manufacturers continually look for better process consistency, equipment visibility and access to operational information.',
    challenges: [
      'Limited visibility of real-time machine status and root causes of downtime',
      'Manual, delayed end-of-shift production reporting',
      'Older equipment with limited built-in connectivity',
      'Data siloed in disconnected machines and proprietary systems',
    ],
    howWeHelp: [
      'Industrial automation and PLC retrofits',
      'Equipment connectivity and non-invasive sensor monitoring',
      'IIoT and Industry 4.0 initiatives',
      'Production and overall equipment effectiveness (OEE) dashboards',
      'Software-based workflow improvements',
    ],
    services: [
      'Industrial Automation',
      'IIoT & Industry 4.0',
      'Software Solutions',
      'Artificial Intelligence',
    ],
  },
  {
    id: 'engineering',
    title: 'Engineering & Industrial Technology',
    intro:
      'Engineering teams often need help connecting technical systems, organising operational data or improving existing digital tools.',
    challenges: [
      'Integrating equipment, drives, and instruments from multiple vendors',
      'Technical drawings, sensor data, and test records scattered across files',
      'Legacy control systems that are difficult or risky to extend',
      'Ad hoc spreadsheets and macros that are fragile to maintain',
    ],
    howWeHelp: [
      'Control and automation engineering support',
      'System integration planning and protocol conversion',
      'Technical data visibility and operator interface design',
      'Custom web applications and workflow tools',
      'Practical, phased digitalisation initiatives',
    ],
    services: [
      'Industrial Automation',
      'IIoT & Industry 4.0',
      'Software Solutions',
    ],
  },
  {
    id: 'digital',
    title: 'Digitally Transforming Businesses',
    intro:
      'Organisations modernising their processes can explore digital tools and AI that fit their workflows.',
    challenges: [
      'Heavy reliance on spreadsheet-based and manual coordination',
      'Information fragmented across disjointed departmental tools',
      'No clear, practical starting point for evaluating AI opportunities',
      'Difficulty judging which digital investments will provide actual returns',
    ],
    howWeHelp: [
      'Workflow digitisation and internal tool engineering',
      'Modern web applications and real-time operational dashboards',
      'API integrations connecting legacy systems to cloud services',
      'AI-assisted information extraction and document processing',
      'Use-case discovery and feasibility assessments',
    ],
    services: [
      'Software Solutions',
      'Artificial Intelligence',
      'IIoT & Industry 4.0',
    ],
  },
];

export const INDUSTRIES_CONTENT = {
  hero: {
    eyebrow: 'INDUSTRIES WE SUPPORT',
    title: 'Technology for Industry-Specific ',
    titleAccent: 'Challenges',
    subtitle:
      'Different industries face different operational, technical and compliance requirements. We begin by understanding your environment, your intended outcomes and your constraints.',
  },
  sectors: INDUSTRIES_LIST,
  cta: {
    heading: 'Tell Us About Your Industry and Your Challenge.',
    subtitle:
      'We will review your requirements and discuss which services may be relevant.',
    buttonText: 'Get in Touch',
    buttonHref: ROUTES.contact,
  },
};
