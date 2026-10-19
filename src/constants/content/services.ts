/**
 * Services Registry, Hub Content, and Individual Service Page Content.
 * Source: SAPHELON-Content-Master.md Sections 0.4, 3, 4, 5, 6, 7, 8.
 */

import { ROUTES } from '../routes';
import type {
  ServiceRegistryItem,
  ServiceDetailContent,
} from '../../types';

export const SERVICES_REGISTRY: ServiceRegistryItem[] = [
  {
    id: '01',
    name: 'Industrial Automation',
    slug: 'industrial-automation',
    href: ROUTES.industrialAutomation,
    imageUrl: '/images/service-industrial-automation.jpg',
    cardText:
      'Control system engineering, integration and commissioning support for industrial environments.',
    keyAreas: [
      'PLC, SCADA and HMI engineering',
      'Control system integration & fieldbus networking',
      'FAT, SAT and commissioning support',
    ],
  },
  {
    id: '02',
    name: 'IIoT & Industry 4.0',
    slug: 'iiot-industry-4-0',
    href: ROUTES.iiotIndustry40,
    imageUrl: '/images/service-iiot-industry40.jpg',
    cardText:
      'Industrial Internet of Things (IIoT) connectivity, real-time dashboards and smart-manufacturing foundations that make plant data useful.',
    keyAreas: [
      'Sensor and edge gateway data collection',
      'Real-time operational dashboards & alerts',
      'OEE tracking and MES system integration',
    ],
  },
  {
    id: '03',
    name: 'Artificial Intelligence',
    slug: 'artificial-intelligence',
    href: ROUTES.artificialIntelligence,
    imageUrl: '/images/service-artificial-intelligence.jpg',
    cardText:
      'Practical AI for equipment data, documents and workflows, chosen by use case, not by trend.',
    keyAreas: [
      'Use-case discovery and feasibility analysis',
      'Equipment pattern analytics & anomaly detection',
      'Document processing & knowledge search assistants',
    ],
  },
  {
    id: '04',
    name: 'Software Solutions',
    slug: 'software-solutions',
    href: ROUTES.softwareSolutions,
    imageUrl: '/images/service-software-solutions.jpg',
    cardText:
      'Custom web applications, dashboards and workflow tools built around how your teams really work.',
    keyAreas: [
      'Custom web applications tailored to operations',
      'Operational dashboards & business reporting',
      'Workflow digitisation and plant-to-IT integrations',
    ],
  },
  {
    id: '05',
    name: 'Pharmaceutical & CSV Solutions',
    slug: 'pharmaceutical-csv',
    href: ROUTES.pharmaceuticalCsv,
    imageUrl: '/images/service-pharmaceutical-csv.jpg',
    isSpecialised: false,
    cardText:
      'Structured Computer System Validation (CSV) support for computerised systems in pharmaceutical and regulated environments.',
    keyAreas: [
      'Validation planning & requirements traceability',
      'Risk-based testing protocols (FAT/SAT/Commissioning)',
      'GAMP 5 & 21 CFR Part 11 guidance alignment',
    ],
  },
];

export const SERVICES_HUB_CONTENT = {
  hero: {
    eyebrow: 'OUR SERVICES',
    title: 'Integrated Engineering and ',
    titleAccent: 'Digital Solutions',
    subtitle:
      'From the plant floor to the dashboard, our services address technical challenges across industrial operations and business workflows. Four core pillars are supported by pharmaceutical computer system validation capability.',
  },
  whereToStart: {
    heading: 'Not Sure Where to Start?',
    subtitle: 'Find the right service entry point based on your immediate operational challenge:',
    scenarios: [
      {
        trigger: 'Your equipment needs better control or integration',
        serviceName: 'Industrial Automation',
        href: ROUTES.industrialAutomation,
      },
      {
        trigger: 'You want to see what your machines and plant are doing',
        serviceName: 'IIoT & Industry 4.0',
        href: ROUTES.iiotIndustry40,
      },
      {
        trigger: 'You have data or documents that people spend too long searching',
        serviceName: 'Artificial Intelligence',
        href: ROUTES.artificialIntelligence,
      },
      {
        trigger: 'You need a tool built around your own workflow',
        serviceName: 'Software Solutions',
        href: ROUTES.softwareSolutions,
      },
      {
        trigger: 'You operate in a regulated environment',
        serviceName: 'Pharmaceutical & CSV',
        href: ROUTES.pharmaceuticalCsv,
      },
    ],
    note: 'Still unsure? Tell us what you are trying to achieve and we will point you in the right direction.',
  },
  engagement: {
    heading: 'How We Can Work Together',
    subtitle: 'Engagements are structured around clarity, control, and mutual commitment:',
    models: [
      {
        title: 'Assessment or consultation',
        description: 'Review of requirements, feasibility, existing architecture, and solution options.',
      },
      {
        title: 'Project-based engagement',
        description: 'Defined scope, milestones, deliverables, and acceptance criteria agreed up front.',
      },
      {
        title: 'Pilot, then scale',
        description: 'A focused, measurable pilot on a single line or process before scaling.',
      },
      {
        title: 'Ongoing support',
        description: 'Tailored support and maintenance arrangements to ensure continued reliability.',
      },
    ],
  },
  cta: {
    heading: 'Tell Us What You Need.',
    subtitle: 'Share your technical challenge with our engineering team.',
    buttonText: 'Discuss Your Project',
    buttonHref: ROUTES.contact,
  },
};

export const AUTOMATION_SERVICE_PAGE: ServiceDetailContent = {
  slug: 'industrial-automation',
  serviceNumber: '01',
  eyebrow: 'SERVICE 01',
  title: 'Industrial ',
  titleAccent: 'Automation',
  promise: 'Improve Control. Strengthen Operations.',
  intro:
    'Industrial automation helps businesses run processes more consistently, control equipment reliably and support efficient operations. SAPHELON works with you to understand your automation requirements and define the right engineering solution.',
  areasHeading: 'What We Do',
  areas: [
    {
      title: 'PLC, SCADA and HMI engineering',
      description:
        'Programming, configuration and operator screens for programmable logic controllers (PLCs), supervisory control and data acquisition (SCADA) systems, and human-machine interfaces (HMIs).',
    },
    {
      title: 'Control system integration',
      description:
        'Bringing machines, electrical panels and field devices together into one unified, controlled system.',
    },
    {
      title: 'Equipment communication',
      description:
        'Connecting controllers, variable frequency drives, instruments and third-party equipment to exchange reliable data.',
    },
    {
      title: 'Process monitoring and alarms',
      description:
        'Status views, alarm handling, event logging and operator information for day-to-day running.',
    },
    {
      title: 'FAT, SAT and commissioning support',
      description:
        'Structured factory and site acceptance testing (FAT, SAT) and start-up support with clear records.',
    },
    {
      title: 'Upgrades, troubleshooting and optimisation',
      description:
        'Modifying existing systems, investigating faults, retrofitting obsolete controllers and improving line performance.',
    },
  ],
  deliverablesHeading: 'Typical Deliverables',
  deliverablesNote: 'Deliverables vary depending on the agreed scope of work:',
  deliverables: [
    'Functional descriptions & design specifications',
    'Control logic files & PLC source code',
    'Configured HMI and SCADA screens',
    'I/O schedules & alarm configuration lists',
    'FAT and SAT test records & sign-offs',
    'Commissioning notes & site handover logs',
    'As-built electrical and control documentation',
  ],
  outcomesHeading: 'Outcomes We Aim For',
  outcomes: [
    'More consistent and repeatable process execution',
    'Clearer control requirements and documented logic',
    'Less reliance on manual intervention where appropriate',
    'Automation architectures that are easier to service and maintain',
  ],
  faqHeading: 'Frequently Asked Questions',
  faq: [
    {
      question: 'Can you work with our existing PLC or SCADA platform?',
      answer:
        'We review your current platform and constraints first. Platform compatibility, licensing, and integration scope are evaluated and confirmed during discovery.',
    },
    {
      question: 'Do you supply hardware?',
      answer:
        'Hardware supply depends on the specific project and is agreed in the detailed scope of work.',
    },
    {
      question: 'Do you support FAT and SAT?',
      answer:
        'Yes. Structured testing support, verification protocols, and testing records are core parts of our delivery approach within agreed scope.',
    },
  ],
  ctaHeading: 'Ready to Modernise Your Control Systems?',
  ctaText: 'Speak with our automation engineers about your equipment and line requirements.',
  ctaButtonText: 'Discuss an Automation Project',
};

export const IIOT_SERVICE_PAGE: ServiceDetailContent = {
  slug: 'iiot-industry-4-0',
  serviceNumber: '02',
  eyebrow: 'SERVICE 02',
  title: 'IIoT & Industry ',
  titleAccent: '4.0',
  promise: 'Connect Equipment. Make Data Useful.',
  intro:
    'Connecting equipment creates the chance to see how your plant is really performing and decide with better information. SAPHELON helps you assess how IIoT (the Industrial Internet of Things) and Industry 4.0 approaches could fit your existing operations, without starting over.',
  areasHeading: 'What We Do',
  areas: [], // Built via subSections below
  subSections: [
    {
      heading: 'Part 1: Industrial IoT (Connect)',
      subheading: 'Get data out of machines and into a form people can use.',
      items: [
        {
          title: 'Sensor and gateway integration',
          description:
            'Adding or using industrial sensors and edge gateways to read equipment signals accurately.',
        },
        {
          title: 'Edge data collection',
          description:
            'Collecting machine data close to the equipment, reliably, securely, and buffered during network dropouts.',
        },
        {
          title: 'Machine connectivity assessment',
          description:
            'Reviewing what telemetry and communications your existing equipment can already provide.',
        },
        {
          title: 'Cloud or on-premise data transfer',
          description:
            'Moving operational data to the destination that matches your enterprise IT and security requirements.',
        },
        {
          title: 'Real-time dashboards',
          description:
            'Live, browser-based views of operating status, line speeds, temperatures, and production counts.',
        },
        {
          title: 'Alerts and notifications',
          description:
            'Rule-based triggers that notify maintenance and operators via SMS or email when parameters breach thresholds.',
        },
      ],
    },
    {
      heading: 'Part 2: Industry 4.0 (Use)',
      subheading: 'Turn connected data into visibility, KPIs and a clear roadmap.',
      items: [
        {
          title: 'Smart-manufacturing assessment',
          description:
            'A thorough current-state review to uncover the highest-value digital opportunities for your plant.',
        },
        {
          title: 'MES and enterprise-system integration support',
          description:
            'Linking plant-floor data with Manufacturing Execution Systems (MES) and ERP enterprise platforms.',
        },
        {
          title: 'Production visibility',
          description:
            'Clear, shared shift-by-shift views of what is happening across the entire shop floor.',
        },
        {
          title: 'OEE and performance dashboards',
          description:
            'Calculating Overall Equipment Effectiveness (OEE) by tracking availability, performance rate, and quality.',
        },
        {
          title: 'Digital workflows',
          description:
            'Replacing manual paper logs and shift handovers with digital checklists and automated time-stamps.',
        },
        {
          title: 'Analytics-ready data foundations and phased roadmap',
          description:
            'Structuring, contextualising, and storing plant data properly so future AI and analytics can succeed.',
        },
      ],
    },
  ],
  principles: [
    'Start Small. Scale with Evidence — We recommend starting with an assessment or a focused pilot on one line or one machine group. You see real results, and the next phase is planned from evidence, budget and business priorities.',
  ],
  deliverablesHeading: 'Typical Deliverables',
  deliverablesNote: 'Deliverables vary depending on the agreed scope of work:',
  deliverables: [
    'Connectivity assessment & equipment readiness matrix',
    'Signal mapping & telemetry definitions',
    'Gateway configuration & network architecture diagram',
    'Dashboard views (live plant and executive overview)',
    'Alert rules and notification matrix',
    'Current-state digital maturity assessment',
    'MES integration design & data bridge documentation',
    'OEE KPI definitions & automated reporting templates',
    'Pilot implementation plan & phased scaling roadmap',
    'Operational handover & training documentation',
  ],
  outcomesHeading: 'Outcomes We Aim For',
  outcomes: [
    'Immediate visibility into selected production operations',
    'More accessible operational information for operators and plant managers',
    'Better-informed maintenance and production scheduling decisions',
    'A scalable, secure foundation for future digital initiatives',
  ],
  faqHeading: 'Frequently Asked Questions',
  faq: [
    {
      question: 'What is Industry 4.0 in plain terms?',
      answer:
        'It means connecting machines, data, and systems so people can see and act on what is happening in operations, and then building on that foundation step by step.',
    },
    {
      question: 'Do we have to replace our machines?',
      answer:
        'Not necessarily. We assess what your existing equipment can already provide and where an edge gateway or non-invasive sensor can unlock critical data.',
    },
    {
      question: 'Where is our data stored?',
      answer:
        'Either on-premise on your local server or in the cloud. We determine the architecture during the design phase based strictly on your IT, security, and governance requirements.',
    },
  ],
  ctaHeading: 'Ready to Connect Your Plant Floor?',
  ctaText: 'Discover how machine connectivity and real-time dashboards can improve your operations.',
  ctaButtonText: 'Explore IIoT Solutions',
};

export const AI_SERVICE_PAGE: ServiceDetailContent = {
  slug: 'artificial-intelligence',
  serviceNumber: '03',
  eyebrow: 'SERVICE 03',
  title: 'Artificial ',
  titleAccent: 'Intelligence',
  promise: 'Apply AI Where It Creates Value.',
  intro:
    'AI can help teams work with equipment data, documents and repetitive workflows. SAPHELON approaches AI through use-case discovery, feasibility assessment and solution design, so you invest only where it makes sense.',
  areasHeading: 'What We Do',
  principles: [
    'Start with the problem, not the model — We define what business decision needs improvement before selecting any algorithms.',
    'Check the data first — Feasibility depends on what data exists, how clean it is, and whether it represents reality.',
    'Pilot before you commit — We prove tangible value on a tight scope before recommending enterprise deployment.',
  ],
  areas: [
    {
      title: 'Use-case discovery and feasibility',
      description:
        'Identify which industrial and business problems suit AI, which do not, and what data prerequisites are required.',
    },
    {
      title: 'Equipment analytics and predictive maintenance',
      description:
        'Pattern and anomaly analysis on machine and process sensor data to flag potential mechanical issues earlier.',
    },
    {
      title: 'Vision-based quality checks',
      description:
        'Image-based inspection concepts and feasibility testing for automated defect identification in production.',
    },
    {
      title: 'Document processing and information extraction',
      description:
        'Pulling structured records, test figures, and metadata from batch records, technical reports, and vendor sheets.',
    },
    {
      title: 'Knowledge search and question-answering',
      description:
        'Enabling technical teams to query standard operating procedures, manuals, and internal documentation quickly.',
    },
    {
      title: 'Workflow automation and AI integration',
      description:
        'Embedding AI capabilities directly into the software tools and dashboards your engineering teams already use.',
    },
  ],
  deliverablesHeading: 'Typical Deliverables',
  deliverablesNote: 'Deliverables vary depending on the agreed scope of work:',
  deliverables: [
    'Use-case assessment & ROI prioritization matrix',
    'Data readiness & quality review report',
    'Proof-of-concept (PoC) scope & test parameters',
    'Solution architecture & technical design document',
    'Integration and deployment plan',
  ],
  outcomesHeading: 'Outcomes We Aim For',
  outcomes: [
    'Faster access to critical operational and procedure information',
    'Reduced manual effort for document-heavy and repetitive tasks',
    'Earlier visibility of abnormal equipment behaviour and parameter drift',
    'Structured foundations for data-assisted engineering decisions',
  ],
  faqHeading: 'Frequently Asked Questions',
  faq: [
    {
      question: 'Do we need a lot of data?',
      answer:
        'It depends on the specific use case. Our initial feasibility assessment checks data availability, history, and quality before any build begins.',
    },
    {
      question: 'Can AI be used in regulated environments?',
      answer:
        'Yes, but it requires careful controls around data integrity, traceability, and validation boundaries. We evaluate these requirements together during discovery.',
    },
    {
      question: 'How is our data handled and protected?',
      answer:
        'Hosting, access rights, and data confidentiality are agreed during the design stage according to your enterprise security standards.',
    },
  ],
  ctaHeading: 'Explore Practical AI for Your Operations',
  ctaText: 'Discuss your use case with our team to evaluate feasibility and return on investment.',
  ctaButtonText: 'Explore AI Opportunities',
};

export const SOFTWARE_SERVICE_PAGE: ServiceDetailContent = {
  slug: 'software-solutions',
  serviceNumber: '04',
  eyebrow: 'SERVICE 04',
  title: 'Software ',
  titleAccent: 'Solutions',
  promise: 'Software Designed Around Real Workflows.',
  intro:
    'Every business has processes that depend on accurate information, clear coordination and accessible systems. We turn defined requirements into practical digital applications, including the dashboards and tools that connect to your automation and industrial IoT work.',
  areasHeading: 'What We Do',
  areas: [
    {
      title: 'Custom web applications',
      description:
        'Tailored applications built around your exact operational workflows, rather than rigid off-the-shelf templates.',
    },
    {
      title: 'Dashboards and reporting',
      description:
        'Clean, clear visualisations of operational metrics, shift totals, and performance indicators used daily.',
    },
    {
      title: 'Workflow and task management',
      description:
        'Digital approvals, work orders, audit-trailed checklists, logs, and maintenance request tracking.',
    },
    {
      title: 'Data-driven internal tools',
      description:
        'Robust applications that eliminate fragile spreadsheets, manual copy-pasting, and communication bottlenecks.',
    },
    {
      title: 'API and system integration',
      description:
        'Connecting plant-floor databases, edge gateways, cloud services, and third-party enterprise tools.',
    },
    {
      title: 'Modernisation and enhancement',
      description:
        'Refactoring, updating, and extending legacy internal software tools that your business depends upon.',
    },
  ],
  deliverablesHeading: 'Typical Deliverables',
  deliverablesNote: 'Deliverables vary depending on the agreed scope of work:',
  deliverables: [
    'User requirements & technical specification document',
    'Responsive interface wireframes & interactive prototypes',
    'Working web application with clean, maintainable code',
    'API documentation & database schema diagrams',
    'Deployment documentation & administrator handover notes',
  ],
  outcomesHeading: 'Outcomes We Aim For',
  outcomes: [
    'More organised, coordinated workflows across engineering teams',
    'Instant access to operational data without spreadsheet friction',
    'Reduction in administrative data re-entry and human error',
    'Full transparency across tracked business and technical processes',
  ],
  faqHeading: 'Frequently Asked Questions',
  faq: [
    {
      question: 'Can you build on top of what we already use?',
      answer:
        'Yes. We review your existing tools, databases, and APIs, and integrate or extend them wherever technically and economically feasible.',
    },
    {
      question: 'Who owns the software and source code?',
      answer:
        'Ownership, licensing terms, and IP rights are explicitly defined and agreed in the statement of work before development begins.',
    },
    {
      question: 'Will we get documentation and source handover?',
      answer:
        'Yes. Complete handover documentation, architectural diagrams, and administrator runbooks are standard project deliverables.',
    },
  ],
  ctaHeading: 'Need Software Built for Your Engineers?',
  ctaText: 'Let us build a web tool or dashboard tailored to your exact process requirements.',
  ctaButtonText: 'Discuss a Software Requirement',
};

export const CSV_SERVICE_PAGE: ServiceDetailContent = {
  slug: 'pharmaceutical-csv',
  serviceNumber: '05',
  eyebrow: 'PHARMACEUTICAL CSV',
  title: 'Pharmaceutical & ',
  titleAccent: 'CSV Solutions',
  promise: 'Structured Validation Support for Computerised Systems.',
  intro:
    'Computer System Validation (CSV) helps demonstrate that a computerised system is suitable for its intended use and meets applicable requirements. SAPHELON offers this support for pharmaceutical and other regulated environments.',
  areasHeading: 'What We Do',
  areas: [
    {
      title: 'Validation planning and lifecycle support',
      description:
        'Developing a validation master plan (VMP) and deliverables matrix matched to system complexity and risk classification.',
    },
    {
      title: 'Requirements and traceability',
      description:
        'Formulating User Requirements Specifications (URS) and Functional Specifications linked to a traceability matrix.',
    },
    {
      title: 'Risk assessment',
      description:
        'Conducting risk-based analyses to determine the depth of testing and documentation required for each system feature.',
    },
    {
      title: 'Test protocols and evidence',
      description:
        'Authoring Installation, Operational, and Performance Qualification (IQ, OQ, PQ) scripts, and supervising test execution.',
    },
    {
      title: 'Gap assessment',
      description:
        'Evaluating existing legacy or newly installed computerised systems against prevailing regulatory guidelines.',
    },
    {
      title: 'Audit trail and electronic-record controls review',
      description:
        'Reviewing user access controls, audit trail configuration, and data integrity safeguards.',
    },
    {
      title: 'Acceptance testing support',
      description:
        'Supporting Factory and Site Acceptance Testing (FAT and SAT) with rigorous documentation standards.',
    },
    {
      title: 'Deviations, summary report and handover',
      description:
        'Recording deviations, root-cause analyses, the validation summary report (VSR), and final documentation packages.',
    },
  ],
  deliverablesHeading: 'Typical Deliverables',
  deliverablesNote: 'Deliverables vary depending on the agreed scope of work:',
  deliverables: [
    'Validation Plan (VP) & Deliverables Matrix',
    'User Requirement Specification (URS) & Traceability Matrix (TM)',
    'System Risk Assessment (RA) protocol & report',
    'Qualification protocols (IQ/OQ/PQ) & executed test evidence',
    'Deviation logs & CAPA resolution records',
    'Validation Summary Report (VSR)',
    'Complete validated handover dossier',
  ],
  standardsNote:
    'Our work can reference frameworks such as GAMP 5 (risk-based guidance for computerised systems in regulated industries) and 21 CFR Part 11 (US rules on electronic records and electronic signatures). These are areas we support. They do not imply certification, guaranteed compliance or regulatory approval. Applicability is decided for each client and system.',
  scopeNotes: [
    'The scope of CSV work depends on the system, its intended use, applicable regulations and guidance, and your quality management system. Responsibilities, deliverables and approval authority are agreed before work begins.',
    'SAPHELON does not claim that a system is compliant simply because validation documents have been prepared. Compliance decisions and approvals follow your own quality processes.',
  ],
  outcomesHeading: 'Outcomes We Aim For',
  outcomes: [
    'Clear, auditable documentation demonstrating fitness for intended use',
    'Traceability from user requirements through testing protocols to final evidence',
    'Consistent documentation standards matching your internal SOPs',
    'Seamless coordination between automation engineering and validation deliverables',
  ],
  faqHeading: 'Frequently Asked Questions',
  faq: [
    {
      question: 'Do you certify our systems?',
      answer:
        'No. We prepare, execute, and support validation work packages. Final approval, compliance endorsement, and release decisions remain strictly with your Quality Assurance unit.',
    },
    {
      question: 'Can you work to our SOPs and templates?',
      answer:
        'Yes. Our validation support is designed to adopt your internal quality procedures, document templates, and change control standards.',
    },
    {
      question: 'Do you also handle the automation side?',
      answer:
        'Yes. Our industrial automation and IIoT capabilities can be coordinated with validation documentation for the same system, saving time and eliminating vendor gaps.',
    },
  ],
  ctaHeading: 'Need Validation Support for Regulated Systems?',
  ctaText: 'Speak with our CSV team about your upcoming qualification package.',
  ctaButtonText: 'Discuss CSV Support',
};

export const SERVICE_PAGES_MAP: Record<string, ServiceDetailContent> = {
  'industrial-automation': AUTOMATION_SERVICE_PAGE,
  'iiot-industry-4-0': IIOT_SERVICE_PAGE,
  'artificial-intelligence': AI_SERVICE_PAGE,
  'software-solutions': SOFTWARE_SERVICE_PAGE,
  'pharmaceutical-csv': CSV_SERVICE_PAGE,
};
