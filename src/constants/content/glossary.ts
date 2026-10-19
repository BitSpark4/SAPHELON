/**
 * Central Technical Glossary and Acronym Expansions.
 * Powers the interactive <Abbr> tooltip component and assists first-use definitions.
 * Source: SAPHELON-Content-Master.md Section 0.7
 */

export const GLOSSARY: Record<string, string> = {
  PLC: 'Programmable logic controller',
  SCADA: 'Supervisory control and data acquisition',
  HMI: 'Human-machine interface',
  IIoT: 'Industrial Internet of Things',
  OEE: 'Overall equipment effectiveness',
  MES: 'Manufacturing execution system',
  CSV: 'Computer System Validation',
  'FAT / SAT': 'Factory acceptance testing / Site acceptance testing',
  'GAMP 5': 'Risk-based guidance for computerised systems in regulated industries',
  '21 CFR Part 11': 'US rules on electronic records and electronic signatures',
};

export const getAcronymExpansion = (term: string): string | undefined => {
  return GLOSSARY[term];
};
