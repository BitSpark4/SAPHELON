/**
 * WhySection component highlighting the 5 reasons to choose SAPHELON
 * without fictitious claims or inflated metrics.
 * Source: SAPHELON-Content-Master.md Section 1 home.why.
 */

import React from 'react';
import styles from './WhySection.module.css';
import { HOME_CONTENT } from '../../constants';

export const WhySection: React.FC = () => {
  const { why } = HOME_CONTENT;

  return (
    <section className={styles.section} data-part="why">
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.overline}>{why.eyebrow}</div>
          <h2 className={styles.title}>{why.title}</h2>
        </div>

        <div className={styles.grid}>
          {why.points.map((pt) => (
            <div key={pt.id} className={styles.card}>
              <div className={styles.number}>{pt.id}</div>
              <h3 className={styles.pointTitle}>{pt.title}</h3>
              <p className={styles.pointDesc}>{pt.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
