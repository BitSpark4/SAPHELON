/**
 * Structured content and specifications from Saphelon Logo Explanation & Guidelines.
 */

export const GUIDELINES_CONTENT = {
  cover: {
    badgeLeft: 'SAPHELON',
    badgeRight: 'BRAND IDENTITY',
    title: 'SAPHELON',
    tagline: 'TRUSTED ENGINEERING PARTNER',
    subtitle: 'Logo Explanation & Guidelines',
    company: 'Saphelon Technologies Private Limited',
    version: 'Version 1.0 · October 2026',
  },
  theMark: {
    sectionNum: '01 — THE MARK',
    headline: 'Engineering Confidence, in one form',
    description:
      'The Saphelon mark is a geometric S built from two identical ribbons. It turns our brand essence into a shape: precise construction softened by human curves, with a clear path running through the middle.',
    points: [
      {
        letter: 'A',
        title: 'The letter S',
        description:
          'The initial of Saphelon and of sapere: to know, understand and apply wisdom. The mark reads as a letter first, so it stays recognisable at any size.',
      },
      {
        letter: 'B',
        title: 'Two halves, one form',
        description:
          'The upper and lower ribbons are the same shape, rotated 180°. They stand for the two sides of every partnership, human understanding and engineering precision: equal in weight and made to fit together.',
      },
      {
        letter: 'C',
        title: 'The clear path',
        description:
          'The channel between the ribbons is the space we create by removing complexity. It keeps a constant width, because clarity is engineered, not accidental.',
      },
      {
        letter: 'D',
        title: 'Rounded geometry',
        description:
          'Every outer corner is generously radiused. Sophisticated structure underneath, an approachable experience on the surface: Human First and Simplicity.',
      },
      {
        letter: 'E',
        title: 'The forward incline',
        description:
          'A consistent 25.9° incline gives the mark momentum: steady, purposeful progress rather than speed for its own sake.',
      },
      {
        letter: 'F',
        title: 'The gradient',
        description:
          'Cyan to Saphelon Blue to Violet: clarity, trust and purposeful innovation. It moves through the mark the way a client moves from complexity to confidence.',
      },
    ],
    wordmarkNote: {
      title: 'THE WORDMARK',
      description:
        "Set in Manrope Bold, all caps, with 8% tracking. Its geometric skeleton carries precision; its humanist details and rounded terminals echo the mark's corners, so mark and name read as one confident, approachable voice.",
    },
  },
  construction: {
    sectionNum: '02 — CONSTRUCTION',
    headline: 'Built on one module',
    description:
      'All proportions derive from x, the width of the channel between the ribbons. The lower ribbon is the upper one rotated 180° about the centre point.',
    specs: [
      { label: 'Symmetry', value: '180° rotational' },
      { label: 'Incline', value: '25.9°' },
      { label: 'Module', value: 'x = channel width' },
      { label: 'Ribbon thickness', value: '3.3x' },
      { label: 'Proportion (w : h)', value: '7 : 9' },
      { label: 'Outer radius, acute', value: '1.3x' },
      { label: 'Outer radius, obtuse', value: '1.15x' },
      { label: 'Inner radius', value: '1.1x' },
      { label: 'Tail curve', value: '1.6x' },
    ],
    warning:
      'Never redraw or approximate the mark. Always reproduce it from the master artwork files.',
  },
  lockups: {
    sectionNum: '03 — LOGO LOCKUPS',
    headline: 'Mark and name, fixed together',
    description:
      'Use the primary horizontal lockup wherever possible. The spacing and scale between mark and wordmark never change.',
  },
  clearSpace: {
    sectionNum: '04 — CLEAR SPACE & MINIMUM SIZE',
    headline: 'Room to be understood',
    description:
      "Keep a minimum clear space of 4x on every side, about 37% of the mark's height. No text, image or edge may enter it.",
  },
  colour: {
    sectionNum: '05 — COLOUR',
    headline: 'From clarity to confidence',
    description:
      'The gradient belongs to the mark only. The wordmark is always solid: Ink on light backgrounds, White on dark ones.',
  },
  typography: {
    sectionNum: '06 — TYPOGRAPHY',
    headline: 'One family, every touchpoint',
    description:
      'Manrope is used for the wordmark and for all brand communication. It is open source (SIL Open Font License) and free on Google Fonts.',
  },
  misuse: {
    sectionNum: '07 — MISUSE',
    headline: 'Protect the precision',
    description:
      'Precision creates trust. Any change to the artwork, however small, weakens recognition. Never do the following.',
    filter:
      'Does this use increase confidence, reduce complexity, and meet the precision we want SAPHELON to represent? If not, do not use it.',
  },
} as const;
