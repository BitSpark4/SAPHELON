/**
 * ContactSection component offering a prominent call-to-action banner with watermark S-mark,
 * leading to the dedicated Contact page.
 * Source: SAPHELON-Content-Master.md Section 1 home.cta.
 */

import React from 'react';
import styles from './ContactSection.module.css';
import { Button } from '../Button';
import { HOME_CONTENT, EXTERNAL_LINKS } from '../../constants';

export const ContactSection: React.FC = () => {
  const { cta } = HOME_CONTENT;

  return (
    <section id="contact" className={styles.section} data-part="cta">
      <svg className={styles.watermark} aria-hidden="true">
        <use href="#sm" />
      </svg>

      <div className={styles.container}>
        <div className={styles.overline}>{cta.eyebrow}</div>
        <h2 className={styles.title}>{cta.title}</h2>
        <p className={styles.description}>{cta.description}</p>
        <div className={styles.actions}>
          <Button
            href={cta.primaryCtaHref}
            variant="primary"
            size="lg"
            hasArrow
          >
            {cta.primaryCtaText}
          </Button>
          <Button
            href={EXTERNAL_LINKS.email}
            variant="secondary"
            size="lg"
          >
            Email Us Directly
          </Button>
        </div>
      </div>
    </section>
  );
};
