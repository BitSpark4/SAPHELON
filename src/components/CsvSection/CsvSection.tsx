/**
 * CsvSection component highlighting Saphelon's specialized Computerized System
 * Validation (CSV) capability for regulated pharmaceutical environments.
 */

import React from 'react';
import styles from './CsvSection.module.css';
import { Button } from '../Button';
import { CSV_CONTENT } from '../../constants';

export const CsvSection: React.FC = () => {
  return (
    <section id="csv" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.leftCol}>
          <div className={styles.overline}>{CSV_CONTENT.overline}</div>
          <h2 className={styles.title}>{CSV_CONTENT.title}</h2>
          <p className={styles.description}>{CSV_CONTENT.description}</p>
          <div className={styles.buttonWrapper}>
            <Button href={CSV_CONTENT.ctaHref} variant="primary" hasArrow>
              {CSV_CONTENT.ctaText}
            </Button>
          </div>
        </div>

        <div className={styles.rightWrap}>
          <div className={styles.imageCard}>
            <img
              src="/images/pharma-csv-facility.jpg"
              alt="Automated pharmaceutical validation cleanroom and bioreactor packaging line"
              className={styles.csvImage}
              loading="lazy"
            />
            <div className={styles.imageBadge}>
              <span className={styles.badgeDot} />
              <span>GAMP 5 & 21 CFR Part 11 Aligned</span>
            </div>
          </div>

          <div className={styles.card}>
            {CSV_CONTENT.steps.map((step) => (
              <div key={step.id} className={styles.item}>
                <span className={styles.itemNumber}>{step.id}</span>
                <span className={styles.itemText}>{step.title}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
