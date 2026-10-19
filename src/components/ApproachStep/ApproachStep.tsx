/**
 * ApproachStep component rendering an indexed milestone circle, optional horizontal connector,
 * step title, and brief description.
 */

import React from 'react';
import styles from './ApproachStep.module.css';
import type { ApproachStepItem } from '../../types';

export interface ApproachStepProps {
  step: ApproachStepItem;
  isLast?: boolean;
}

export const ApproachStep: React.FC<ApproachStepProps> = ({ step, isLast = false }) => {
  return (
    <div className={styles.step}>
      <div className={styles.stepHeader}>
        <span className={styles.circle}>{step.id}</span>
        {!isLast && <span className={styles.line} aria-hidden="true" />}
      </div>
      <h3 className={styles.title}>{step.title}</h3>
      <p className={styles.description}>{step.description}</p>
    </div>
  );
};
