/**
 * ContactPage route component rendering contact channels, expectation roadmap,
 * enquiry tips, and the complete ContactForm component.
 * Source: SAPHELON-Content-Master.md Section 11.
 */

import React from 'react';
import styles from './ContactPage.module.css';
import {
  Header,
  PageHero,
  ContactForm,
  Button,
  Footer,
  ThemeSwitcher,
} from '../../components';
import { CONTACT_CONTENT, ROUTES } from '../../constants';
import type { ThemeMode } from '../../types';

export interface ContactPageProps {
  theme?: ThemeMode;
  setTheme?: (theme: ThemeMode) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({
  theme = 'contour',
  setTheme = () => {},
}) => {
  const { hero, details, download, expect, tips } = CONTACT_CONTENT;

  const breadcrumbs = [
    { label: 'Home', href: ROUTES.home },
    { label: 'Contact Us' },
  ];

  return (
    <div className={styles.page}>
      <Header theme={theme} />

      <main>
        {/* 1. Page Hero */}
        <PageHero
          breadcrumbs={breadcrumbs}
          eyebrow={hero.eyebrow}
          title={hero.title}
          titleAccent={hero.titleAccent}
          subtitle={hero.subtitle}
        />

        {/* 2. Main Contact Grid */}
        <section className={styles.section}>
          <div className={styles.container}>
            <div className={styles.grid}>
              {/* Left Column: Direct Info & Guidelines */}
              <div className={styles.infoColumn}>
                {/* Direct Details */}
                <div className={styles.detailsCard}>
                  <h2 className={styles.cardHeading}>Company Information</h2>
                  <div className={styles.infoList}>
                    <div className={styles.infoItem}>
                      <span className={styles.infoLabel}>Company</span>
                      <span className={styles.infoValue}>{details.company}</span>
                    </div>

                    <div className={styles.infoItem}>
                      <span className={styles.infoLabel}>Location</span>
                      <span className={styles.infoValue}>{details.location}</span>
                    </div>

                    <div className={styles.infoItem}>
                      <span className={styles.infoLabel}>Email</span>
                      <a href={details.emailLink} className={styles.infoValue}>
                        {details.email}
                      </a>
                    </div>

                    <div className={styles.infoItem}>
                      <span className={styles.infoLabel}>Phone</span>
                      <a href={details.phoneLink} className={styles.infoValue}>
                        {details.phone}
                      </a>
                    </div>
                  </div>

                  {download.href && (
                    <div style={{ marginTop: '12px' }}>
                      <Button href={download.href} variant="secondary" size="sm">
                        {download.label}
                      </Button>
                    </div>
                  )}
                </div>

                {/* What Happens Next */}
                <div className={styles.stepsCard}>
                  <h3 className={styles.cardHeading}>{expect.title}</h3>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                    {expect.steps.map((st) => (
                      <div key={st.id} className={styles.stepRow}>
                        <span className={styles.stepNum}>{st.id}</span>
                        <div className={styles.stepText}>
                          <span className={styles.stepTitle}>{st.title}</span>
                          <span className={styles.stepDesc}>{st.description}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Helpful to Include */}
                <div className={styles.tipsCard}>
                  <h4 className={styles.tipsHeading}>{tips.title}</h4>
                  <ul className={styles.tipsList}>
                    {tips.items.map((tip, idx) => (
                      <li key={idx}>{tip}</li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Right Column: Interactive Form */}
              <div>
                <ContactForm />
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <ThemeSwitcher currentTheme={theme} onThemeChange={setTheme} />
    </div>
  );
};
