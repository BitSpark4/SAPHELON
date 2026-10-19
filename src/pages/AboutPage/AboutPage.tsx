/**
 * AboutPage route component rendering the full company story, values,
 * mark geometry, and operational principles.
 * Source: SAPHELON-Content-Master.md Section 2.
 */

import React from 'react';
import { Link } from 'react-router-dom';
import styles from './AboutPage.module.css';
import {
  Header,
  PageHero,
  BrandMark,
  Button,
  Footer,
  ThemeSwitcher,
} from '../../components';
import { ABOUT_CONTENT, ROUTES } from '../../constants';
import type { ThemeMode } from '../../types';

export interface AboutPageProps {
  theme?: ThemeMode;
  setTheme?: (theme: ThemeMode) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({
  theme = 'contour',
  setTheme = () => {},
}) => {
  const { hero, overview, missionVision, values, nameAndMark, principles, leadership, cta } =
    ABOUT_CONTENT;

  const breadcrumbs = [
    { label: 'Home', href: ROUTES.home },
    { label: 'About Us' },
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

        {/* 2. Who We Are */}
        <section className={styles.section}>
          <div className={styles.container}>
            <div className={styles.overviewGrid}>
              <div className={styles.overviewText}>
                <div className={styles.sectionHeader}>
                  <div className={styles.sectionOverline}>OVERVIEW</div>
                  <h2 className={styles.sectionTitle}>{overview.title}</h2>
                </div>
                <p className={styles.bodyText}>{overview.p1}</p>
                <p className={styles.bodyText}>{overview.p2}</p>

                <div className={styles.highlightsRow}>
                  <div className={styles.highlightPill}>
                    <span className={styles.highlightNum}>5+</span>
                    <span className={styles.highlightLabel}>Core Disciplines</span>
                  </div>
                  <div className={styles.highlightPill}>
                    <span className={styles.highlightNum}>Pune</span>
                    <span className={styles.highlightLabel}>Engineering Hub</span>
                  </div>
                  <div className={styles.highlightPill}>
                    <span className={styles.highlightNum}>GAMP 5</span>
                    <span className={styles.highlightLabel}>Validation Rigor</span>
                  </div>
                </div>
              </div>

              <div className={styles.overviewImageWrap}>
                <img
                  src="/images/about-team-collaboration.jpg"
                  alt="SAPHELON engineering team gathered in modern tech office analyzing system schematics"
                  className={styles.overviewImg}
                  loading="lazy"
                />
                <div className={styles.overviewCaption}>
                  <strong>Engineering Confidence:</strong> Cross-disciplinary engineers collaborating in our lab on plant floor automation, edge connectivity, and enterprise software.
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Mission & Vision */}
        <section className={styles.altSection}>
          <div className={styles.container}>
            <div className={styles.missionVisionGrid}>
              <div className={styles.missionCard}>
                <span className={styles.cardLabel}>{missionVision.mission.label}</span>
                <p className={styles.cardText}>{missionVision.mission.text}</p>
              </div>
              <div className={styles.visionCard}>
                <span className={styles.cardLabel}>{missionVision.vision.label}</span>
                <p className={styles.cardText}>{missionVision.vision.text}</p>
              </div>
            </div>
          </div>
        </section>

        {/* 4. Values (What We Stand For) */}
        <section className={styles.section}>
          <div className={styles.container}>
            <div className={styles.sectionHeader}>
              <div className={styles.sectionOverline}>OUR VALUES</div>
              <h2 className={styles.sectionTitle}>{values.title}</h2>
            </div>
            <div className={styles.valuesGrid}>
              {values.items.map((val) => (
                <div key={val.id} className={styles.valueCard}>
                  <div className={styles.valueNumber}>{val.id}</div>
                  <h3 className={styles.valueTitle}>{val.title}</h3>
                  <p className={styles.valueDesc}>{val.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. The Name and The Mark */}
        <section className={styles.altSection}>
          <div className={styles.container}>
            <div className={styles.markLayout}>
              <div>
                <div className={styles.sectionOverline}>{nameAndMark.eyebrow}</div>
                <h2 className={styles.sectionTitle}>{nameAndMark.title}</h2>
                <p className={styles.bodyText}>{nameAndMark.p1}</p>
                <p className={styles.bodyText}>{nameAndMark.p2}</p>
              </div>

              <div className={styles.markGraphicWrapper}>
                <BrandMark variant="color" width={96} height={120} />
                <span className={styles.markAngleLabel}>
                  Forward Angle: {nameAndMark.markAngle}
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* 6. How We Work & Leadership */}
        <section className={styles.section}>
          <div className={styles.container}>
            <div className={styles.sectionHeader}>
              <div className={styles.sectionOverline}>METHODOLOGY</div>
              <h2 className={styles.sectionTitle}>{principles.title}</h2>
              <p className={styles.bodyText}>{principles.p}</p>
              <Link
                to={principles.linkHref}
                style={{
                  color: 'var(--brand-clarity-cyan)',
                  fontWeight: 700,
                  fontSize: '15px',
                  textDecoration: 'none',
                }}
              >
                {principles.linkText} →
              </Link>
            </div>

            <div className={styles.leadershipBox}>
              <h3 className={styles.sectionTitle} style={{ fontSize: '22px' }}>
                {leadership.title}
              </h3>
              <p className={styles.bodyText} style={{ margin: 0 }}>
                {leadership.p}
              </p>
            </div>
          </div>
        </section>

        {/* 7. Closing CTA */}
        <section className={styles.ctaSection}>
          <div className={styles.ctaContainer}>
            <h2 className={styles.ctaTitle}>{cta.heading}</h2>
            <p className={styles.bodyText}>{cta.subtitle}</p>
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
