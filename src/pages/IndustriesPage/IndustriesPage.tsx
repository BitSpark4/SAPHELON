/**
 * IndustriesPage route component rendering sector profiles, operational challenges,
 * and service alignments for pharmaceuticals, manufacturing, engineering, and digital businesses.
 * Source: SAPHELON-Content-Master.md Section 9.
 */

import React from 'react';
import styles from './IndustriesPage.module.css';
import {
  Header,
  PageHero,
  Button,
  Footer,
  ThemeSwitcher,
} from '../../components';
import { INDUSTRIES_CONTENT, ROUTES } from '../../constants';
import type { ThemeMode } from '../../types';

export interface IndustriesPageProps {
  theme?: ThemeMode;
  setTheme?: (theme: ThemeMode) => void;
}

const SECTOR_IMAGES: Record<string, { src: string; alt: string; badge: string }> = {
  pharma: {
    src: '/images/pharma-csv-facility.jpg',
    alt: 'Pharmaceutical validation cleanroom and automated packaging facility',
    badge: 'Regulated Cleanroom & CSV Facility',
  },
  'heavy-engineering': {
    src: '/images/iiot-smart-factory.jpg',
    alt: 'Smart factory robotic automation cell and IIoT sensor telemetry',
    badge: 'Industry 4.0 Discrete Manufacturing Cell',
  },
};

export const IndustriesPage: React.FC<IndustriesPageProps> = ({
  theme = 'contour',
  setTheme = () => {},
}) => {
  const { hero, sectors, cta } = INDUSTRIES_CONTENT;

  const breadcrumbs = [
    { label: 'Home', href: ROUTES.home },
    { label: 'Industries' },
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

        {/* 2. Sector Deep Dives */}
        <section className={styles.section}>
          <div className={styles.container}>
            <div className={styles.sectorList}>
              {sectors.map((sector) => (
                <article key={sector.id} className={styles.sectorCard}>
                  {SECTOR_IMAGES[sector.id] && (
                    <div className={styles.sectorImageBanner}>
                      <img
                        src={SECTOR_IMAGES[sector.id].src}
                        alt={SECTOR_IMAGES[sector.id].alt}
                        className={styles.sectorImg}
                        loading="lazy"
                      />
                      <div className={styles.sectorImageBadge}>
                        <span className={styles.badgeDot} />
                        <span>{SECTOR_IMAGES[sector.id].badge}</span>
                      </div>
                    </div>
                  )}

                  <div className={styles.sectorHeader}>
                    <h2 className={styles.sectorTitle}>{sector.title}</h2>
                    <p className={styles.sectorIntro}>{sector.intro}</p>
                  </div>

                  <div className={styles.columnsGrid}>
                    {/* Common Challenges */}
                    <div className={styles.columnBox}>
                      <h3 className={styles.columnHeading}>Common Challenges</h3>
                      <ul className={styles.bulletList}>
                        {sector.challenges.map((ch, idx) => (
                          <li key={idx} className={styles.bulletItem}>
                            <span className={styles.bulletIcon} aria-hidden="true">✕</span>
                            <span>{ch}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* How We Help */}
                    <div className={styles.columnBox}>
                      <h3 className={styles.columnHeading}>How SAPHELON Helps</h3>
                      <ul className={styles.bulletList}>
                        {sector.howWeHelp.map((help, idx) => (
                          <li key={idx} className={styles.bulletItem}>
                            <span className={styles.bulletIcon} aria-hidden="true">✓</span>
                            <span>{help}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Relevant Services */}
                  <div className={styles.servicesBar}>
                    <span className={styles.servicesLabel}>Aligned Services:</span>
                    {sector.services.map((srv, idx) => (
                      <span key={idx} className={styles.serviceChip}>
                        {srv}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* 3. Closing CTA */}
        <section className={styles.ctaSection}>
          <div className={styles.ctaContainer}>
            <h2 className={styles.ctaTitle}>{cta.heading}</h2>
            <p className={styles.ctaText}>{cta.subtitle}</p>
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
