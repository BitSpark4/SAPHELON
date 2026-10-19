/**
 * Abbr component rendering an accessible abbreviation with a tooltip expansion
 * looked up from the central glossary.
 * Source: SAPHELON-Content-Master.md Section 0.7.
 */

import React from 'react';
import styles from './Abbr.module.css';
import { GLOSSARY } from '../../constants';

export interface AbbrProps {
  term: string;
  expansion?: string;
  children?: React.ReactNode;
}

export const Abbr: React.FC<AbbrProps> = ({ term, expansion, children }) => {
  const definition = expansion || GLOSSARY[term] || term;

  return (
    <abbr
      className={styles.abbrWrapper}
      title={definition}
      tabIndex={0}
      aria-label={`${term}: ${definition}`}
    >
      {children || term}
      <span className={styles.tooltip} role="tooltip" aria-hidden="true">
        {definition}
      </span>
    </abbr>
  );
};
