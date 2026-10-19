/**
 * IndustryCard component representing an industry sector served by Saphelon.
 */

import React from 'react';
import styles from './IndustryCard.module.css';
import type { IndustryItem } from '../../types';

export interface IndustryCardProps {
  industry: IndustryItem;
}

export const IndustryCard: React.FC<IndustryCardProps> = ({ industry }) => {
  return (
    <div className={styles.card}>
      <h3 className={styles.title}>{industry.title}</h3>
      <p className={styles.description}>{industry.description}</p>
    </div>
  );
};
