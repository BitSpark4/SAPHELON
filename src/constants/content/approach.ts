/**
 * Approach, Process, Principles, and Engagement Models Constants.
 * Source: SAPHELON-Content-Master.md Section 0.6 & Section 10.
 */

import { ROUTES } from '../routes';
import type { ApproachPhase, EngagementModel } from '../../types';

export const APPROACH_STRIP_STEPS = [
  {
    id: '01',
    title: 'Understand',
    description: 'Discuss and analyse requirements',
  },
  {
    id: '02',
    title: 'Design',
    description: 'Plan the right solution',
  },
  {
    id: '03',
    title: 'Implement',
    description: 'Execute with focus and quality',
  },
  {
    id: '04',
    title: 'Support',
    description: 'Ensure long-term value',
  },
];

export const APPROACH_PHASES: ApproachPhase[] = [
  {
    phaseId: '01',
    name: 'Understand',
    summary: 'Discovery and rigorous scope definition before recommending any technology.',
    stages: [
      {
        stageNumber: 1,
        title: 'Discovery and requirement understanding',
        description:
          'We discuss the current situation, business objectives, technical environment, constraints and expected outcomes.',
      },
      {
        stageNumber: 2,
        title: 'Scope and solution definition',
        description:
          'We set out the work, deliverables, dependencies, responsibilities, assumptions and acceptance criteria.',
      },
    ],
  },
  {
    phaseId: '02',
    name: 'Design',
    summary: 'Architectural planning aligned with operational constraints and long-term maintainability.',
    stages: [
      {
        stageNumber: 3,
        title: 'Technical planning and design',
        description:
          'We shape an approach that fits the project, considering compatibility, operational needs, risk and maintainability.',
      },
    ],
  },
  {
    phaseId: '03',
    name: 'Implement',
    summary: 'Focused engineering execution followed by traceable verification testing.',
    stages: [
      {
        stageNumber: 4,
        title: 'Implementation and development',
        description:
          'We carry out the agreed engineering, integration, documentation or software work.',
      },
      {
        stageNumber: 5,
        title: 'Verification and review',
        description:
          'We review completed work against agreed requirements and record issues or outstanding items.',
      },
    ],
  },
  {
    phaseId: '04',
    name: 'Support',
    summary: 'Controlled handover, knowledge transfer, and sustainable lifecycle arrangements.',
    stages: [
      {
        stageNumber: 6,
        title: 'Handover and next steps',
        description:
          'We provide the agreed deliverables and discuss operational handover, maintenance or further development.',
      },
    ],
  },
];

export const SUCCESS_CRITERIA: string[] = [
  'Completion of agreed deliverables within defined timelines',
  'Conformance with defined functional and technical requirements',
  'Clear, auditable project documentation and as-built records',
  'Successful review or acceptance testing (FAT/SAT sign-offs)',
  'Direct alignment with your operational and business objectives',
];

export const DELIVERY_PRINCIPLES: string[] = [
  'Risk-based planning and clear acceptance criteria established up front',
  'Traceable requirements, testing and documentation across every project phase',
  'Security, access control and data integrity considered from day one',
  'Practical integration with existing plant systems and operating procedures',
  'Transparent communication, structured change control and defined handover',
];

export const ENGAGEMENT_MODELS: EngagementModel[] = [
  {
    title: 'Assessment or consultation',
    description:
      'Structured technical review of requirements, system feasibility, and architectural options.',
  },
  {
    title: 'Project-based engagement',
    description:
      'Defined scope, deliverables, and milestones. Covers turnkey implementations, validation work packages, integration engagements, or commissioning support.',
  },
  {
    title: 'Pilot, then scale',
    description:
      'A small, measurable start on a single line or process, expanded according to verified evidence, budget, and business priorities.',
  },
  {
    title: 'Ongoing support',
    description:
      'Arrangements agreed according to your operational requirements, service scope, and available resources.',
  },
];

export const APPROACH_PAGE_CONTENT = {
  hero: {
    eyebrow: 'OUR APPROACH',
    title: 'A Clear Process. A Defined Scope. A Practical ',
    titleAccent: 'Outcome.',
    subtitle:
      'Every project begins with a requirement. Our approach aligns expectations, establishes technical clarity and gives you a structured path from first conversation to agreed delivery.',
  },
  phases: APPROACH_PHASES,
  successTitle: 'How We Define Project Success',
  successCriteria: SUCCESS_CRITERIA,
  principlesTitle: 'Delivery Principles',
  deliveryPrinciples: DELIVERY_PRINCIPLES,
  engagementTitle: 'Engagement Models',
  engagementModels: ENGAGEMENT_MODELS,
  cta: {
    heading: 'Ready to Define Your Project?',
    subtitle: 'Let us discuss your technical requirements and outline a practical way forward.',
    buttonText: 'Start a Conversation',
    buttonHref: ROUTES.contact,
  },
};
