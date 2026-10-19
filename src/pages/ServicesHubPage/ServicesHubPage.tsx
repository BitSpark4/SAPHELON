/**
 * ServicesHubPage route component rendering the comprehensive services portfolio,
 * "Where to Start" decision matrix, and engagement models.
 * Source: SAPHELON-Content-Master.md Section 3.
 */

import React from 'react';
import { Link } from 'react-router-dom';
import styles from './ServicesHubPage.module.css';
import {
  Header,
  PageHero,
  Button,
  Footer,
  ThemeSwitcher,
  AnimatedServiceIcon,
} from '../../components';
import {
  SERVICES_HUB_CONTENT,
  SERVICES_REGISTRY,
  ROUTES,
} from '../../constants';
import type { ThemeMode } from '../../types';

export interface ServicesHubPageProps {
  theme?: ThemeMode;
  setTheme?: (theme: ThemeMode) => void;
}

export const ServicesHubPage: React.FC<ServicesHubPageProps> = ({
  theme = 'contour',
  setTheme = () => {},
}) => {
  const { hero, whereToStart, engagement, cta } = SERVICES_HUB_CONTENT;

  const breadcrumbs = [
    { label: 'Home', href: ROUTES.home },
    { label: 'Services' },
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

        {/* 2. Full-Width Service Registry Cards */}
        <section className={styles.section}>
          <div className={styles.container}>
            <div className={styles.servicesStack}>
              {SERVICES_REGISTRY.map((service, sIdx) => (
                <div
                  key={service.slug}
                  className={`${styles.serviceCard} service-card`}
                >
                  <div className={styles.cardImageCol}>
                    {service.imageUrl && (
                      <img
                        src={service.imageUrl}
                        alt={service.name}
                        className={styles.registryImg}
                        loading="lazy"
                      />
                    )}
                    <div className={styles.imageOverlayBar}>
                      <AnimatedServiceIcon
                        slug={service.slug}
                        customIconUrl={service.animatedIconUrl}
                        size={46}
                        index={sIdx}
                      />
                      <span className={styles.cardNumber}>{service.id}</span>
                    </div>
                  </div>

                  <div className={styles.cardMain}>
                    <h2 className={styles.cardTitle}>{service.name}</h2>
                    <p className={styles.cardText}>{service.cardText}</p>
                  </div>

                  {service.keyAreas && (
                    <ul className={styles.cardFeatures}>
                      {service.keyAreas.map((area, aIdx) => (
                        <li key={aIdx} className={styles.featureItem}>
                          <span className={styles.featureBullet} aria-hidden="true">◆</span>
                          <span>{area}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  <div>
                    <Button href={service.href} variant="primary" size="md" hasArrow>
                      Learn More
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 3. Not Sure Where to Start? Decision Matrix */}
        <section className={styles.altSection}>
          <div className={styles.container}>
            <div className={styles.sectionHeader}>
              <div className={styles.sectionOverline}>RECOMMENDED PATHS</div>
              <h2 className={styles.sectionTitle}>{whereToStart.heading}</h2>
              <p className={styles.sectionSubtitle}>{whereToStart.subtitle}</p>
            </div>

            <div className={styles.matrixGrid}>
              {whereToStart.scenarios.map((sc, sIdx) => (
                <div key={sIdx} className={styles.matrixCard}>
                  <p className={styles.matrixTrigger}>{sc.trigger}</p>
                  <Link to={sc.href} className={styles.matrixLink}>
                    <span>{sc.serviceName}</span>
                    <span aria-hidden="true">→</span>
                  </Link>
                </div>
              ))}
            </div>

            <p
              style={{
                marginTop: '36px',
                fontSize: '14.5px',
                color: 'var(--color-text-muted)',
              }}
            >
              {whereToStart.note}
            </p>
          </div>
        </section>

        {/* 4. How We Can Work Together (Engagement Models) */}
        <section className={styles.section}>
          <div className={styles.container}>
            <div className={styles.sectionHeader}>
              <div className={styles.sectionOverline}>COLLABORATION</div>
              <h2 className={styles.sectionTitle}>{engagement.heading}</h2>
              <p className={styles.sectionSubtitle}>{engagement.subtitle}</p>
            </div>

            <div className={styles.engagementGrid}>
              {engagement.models.map((mod, mIdx) => (
                <div key={mIdx} className={styles.engagementCard}>
                  <h3 className={styles.engagementTitle}>{mod.title}</h3>
                  <p className={styles.engagementDesc}>{mod.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. Closing CTA */}
        <section className={styles.ctaSection}>
          <div className={styles.ctaContainer}>
            <h2 className={styles.ctaTitle}>{cta.heading}</h2>
            <p className={styles.sectionSubtitle}>{cta.subtitle}</p>
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
