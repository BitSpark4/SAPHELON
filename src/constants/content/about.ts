/**
 * About Us Page Content Constants.
 * Source: SAPHELON-Content-Master.md Section 2.
 */

import { ROUTES } from '../routes';

export const ABOUT_CONTENT = {
  hero: {
    eyebrow: 'ABOUT SAPHELON',
    title: 'Built on Engineering. Driven by ',
    titleAccent: 'Possibility.',
    subtitle:
      'We bring together industrial engineering, digital technology and a forward-looking approach to problem-solving, to support reliable operations, better information flow and continuous improvement.',
  },
  overview: {
    title: 'Who We Are',
    p1: 'Saphelon Lab Private Limited is a Pune-based company focused on industrial technology and digital solutions. Our services span industrial automation, IIoT (Industrial Internet of Things) and Industry 4.0, AI and software solutions, complemented by Computer System Validation capabilities for pharmaceutical environments.',
    p2: 'We believe successful technology starts with understanding how a business operates. By connecting technical requirements with operational priorities, we aim to build solutions that are relevant, usable and aligned with your objectives.',
  },
  missionVision: {
    mission: {
      label: 'Our Mission',
      text: 'To help businesses address engineering and digital challenges through practical, reliable and thoughtfully designed technology solutions.',
    },
    vision: {
      label: 'Our Vision',
      text: 'To be a trusted technology partner for industrial and pharmaceutical organisations as they modernise operations, connect systems and adopt new possibilities.',
    },
  },
  values: {
    title: 'What We Stand For',
    items: [
      {
        id: '01',
        title: 'Engineering Integrity',
        description:
          'Decisions based on technical requirements, sound engineering practice and clear expectations.',
      },
      {
        id: '02',
        title: 'Practical Innovation',
        description:
          'Technology chosen for a defined need, never for its own sake.',
      },
      {
        id: '03',
        title: 'Accountability',
        description:
          'Clear deliverables, open communication and ownership of agreed commitments.',
      },
      {
        id: '04',
        title: 'Continuous Improvement',
        description:
          'Better processes, usability and long-term maintainability for every solution delivered.',
      },
    ],
  },
  nameAndMark: {
    eyebrow: 'THE NAME AND THE MARK',
    title: 'Why SAPHELON',
    p1: 'The name draws on sapere, the Latin verb meaning to know, understand and apply wisdom. It reflects how we work: understand first, then build.',
    p2: 'Our mark is a geometric S built from two identical halves. One stands for human understanding, the other for engineering precision, and the channel between them is the clear path we create by removing complexity.',
    markAngle: '25.9°',
  },
  principles: {
    title: 'How We Work',
    p: 'We start from your process and your constraints, agree scope and acceptance criteria up front, and keep requirements, tests and decisions traceable through to handover.',
    linkText: 'See Our Approach',
    linkHref: ROUTES.approach,
  },
  leadership: {
    title: 'Leadership',
    p: "SAPHELON's leadership focuses on developing practical engineering and technology solutions, building long-term customer relationships and creating a foundation for sustainable growth.",
    showFounderCards: false, // Rule: no person names or photos; flag enables future profiles
  },
  cta: {
    heading: "Let's Build the Right Solution for Your Business.",
    subtitle: 'Share your operational or digital requirements with our engineering team.',
    buttonText: 'Discuss Your Project',
    buttonHref: ROUTES.contact,
  },
};
