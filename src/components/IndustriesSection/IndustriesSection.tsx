/**
 * IndustriesSection component highlighting key industry sectors supported by Saphelon,
 * with a link to the dedicated Industries deep-dive page.
 * Source: SAPHELON-Content-Master.md Section 1 home.industries.
 */

import React from 'react';
import { Link } from 'react-router-dom';
import styles from './IndustriesSection.module.css';
import { IndustryCard } from '../IndustryCard';
import { HOME_CONTENT, INDUSTRIES_LIST, ROUTES } from '../../constants';

export const IndustriesSection: React.FC = () => {
  const { industries } = HOME_CONTENT;

  return (
    <section id="industries" className={styles.section} data-part="industries">
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.intro}>
            <div className={styles.overline}>{industries.eyebrow}</div>
            <h2 className={styles.title}>{industries.title}</h2>
          </div>
          <p className={styles.description}>{industries.subtitle}</p>
        </div>

        <div className={styles.grid}>
          {INDUSTRIES_LIST.map((sector) => (
            <IndustryCard
              key={sector.id}
              industry={{
                title: sector.title,
                description: sector.intro,
              }}
            />
          ))}
        </div>

        <div style={{ marginTop: '36px', textAlign: 'center' }}>
          <Link
            to={ROUTES.industries}
            style={{
              color: 'var(--brand-clarity-cyan)',
              fontWeight: 700,
              fontSize: '15px',
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
            }}
          >
            {industries.linkText} →
          </Link>
        </div>
      </div>
    </section>
  );
};
