/**
 * ApproachPage route component detailing the 4 phases, 6 stages,
 * project success criteria, delivery principles, and engagement models.
 * Source: SAPHELON-Content-Master.md Section 10.
 */

import React from 'react';
import styles from './ApproachPage.module.css';
import {
  Header,
  PageHero,
  Button,
  Footer,
  ThemeSwitcher,
} from '../../components';
import { APPROACH_PAGE_CONTENT, ROUTES } from '../../constants';
import type { ThemeMode } from '../../types';

export interface ApproachPageProps {
  theme?: ThemeMode;
  setTheme?: (theme: ThemeMode) => void;
}

export const ApproachPage: React.FC<ApproachPageProps> = ({
  theme = 'contour',
  setTheme = () => {},
}) => {
  const {
    hero,
    phases,
    successTitle,
    successCriteria,
    principlesTitle,
    deliveryPrinciples,
    engagementTitle,
    engagementModels,
    cta,
  } = APPROACH_PAGE_CONTENT;

  const breadcrumbs = [
    { label: 'Home', href: ROUTES.home },
    { label: 'Our Approach' },
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

        {/* 2. 4 Phases, 6 Stages Flow */}
        <section className={styles.section}>
          <div className={styles.container}>
            <div className={styles.phasesFlow}>
              {phases.map((phase) => (
                <div key={phase.phaseId} className={styles.phaseCard}>
                  <div className={styles.phaseHeader}>
                    <span className={styles.phaseNumber}>{phase.phaseId}</span>
                    <h2 className={styles.phaseName}>{phase.name}</h2>
                    <span className={styles.phaseSummary}>{phase.summary}</span>
                  </div>

                  <div className={styles.stagesGrid}>
                    {phase.stages.map((stage) => (
                      <div key={stage.stageNumber} className={styles.stageCard}>
                        <span className={styles.stageLabel}>
                          Stage {stage.stageNumber}
                        </span>
                        <h3 className={styles.stageTitle}>{stage.title}</h3>
                        <p className={styles.stageDesc}>{stage.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 3. Success Criteria & Delivery Principles */}
        <section className={styles.altSection}>
          <div className={styles.container}>
            <div className={styles.splitGrid}>
              {/* How We Define Success */}
              <div className={styles.listBox}>
                <h3 className={styles.listHeading}>{successTitle}</h3>
                <ul className={styles.checkList}>
                  {successCriteria.map((item, idx) => (
                    <li key={idx} className={styles.checkItem}>
                      <span className={styles.checkIcon} aria-hidden="true">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Delivery Principles */}
              <div className={styles.listBox}>
                <h3 className={styles.listHeading}>{principlesTitle}</h3>
                <ul className={styles.checkList}>
                  {deliveryPrinciples.map((item, idx) => (
                    <li key={idx} className={styles.checkItem}>
                      <span className={styles.checkIcon} aria-hidden="true">◆</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 4. Engagement Models */}
        <section className={styles.section}>
          <div className={styles.container}>
            <div className={styles.sectionHeader}>
              <div className={styles.sectionOverline}>FLEXIBLE STRUCTURES</div>
              <h2 className={styles.sectionTitle}>{engagementTitle}</h2>
            </div>

            <div className={styles.modelsGrid}>
              {engagementModels.map((mod, idx) => (
                <div key={idx} className={styles.modelCard}>
                  <h3 className={styles.modelTitle}>{mod.title}</h3>
                  <p className={styles.modelDesc}>{mod.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. Closing CTA */}
        <section className={styles.ctaSection}>
          <div className={styles.ctaContainer}>
            <h2 className={styles.ctaTitle}>{cta.heading}</h2>
            <p className={styles.ctaSubtitle}>{cta.subtitle}</p>
            <Button href={cta.buttonHref} size="lg" variant="primary" hasArrow>
              {cta.buttonText}
            </Button>
          </div>
        </section>
      </main>

      <Footer />
      <ThemeSwitcher currentTheme={theme} onThemeChange={setTheme} />
    </div>
  );
};
