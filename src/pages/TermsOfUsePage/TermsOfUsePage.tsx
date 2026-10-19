/**
 * TermsOfUsePage route component rendering website terms, IP rights,
 * and governing jurisdiction disclosures.
 * Source: SAPHELON-Content-Master.md Section 12.
 */

import React from 'react';
import styles from './TermsOfUsePage.module.css';
import {
  Header,
  PageHero,
  Footer,
  ThemeSwitcher,
} from '../../components';
import { TERMS_OF_USE_CONTENT, ROUTES } from '../../constants';
import type { ThemeMode } from '../../types';

export interface TermsOfUsePageProps {
  theme?: ThemeMode;
  setTheme?: (theme: ThemeMode) => void;
}

export const TermsOfUsePage: React.FC<TermsOfUsePageProps> = ({
  theme = 'contour',
  setTheme = () => {},
}) => {
  const { eyebrow, title, titleAccent, lastUpdated, intro, sections } =
    TERMS_OF_USE_CONTENT;

  const breadcrumbs = [
    { label: 'Home', href: ROUTES.home },
    { label: 'Terms of Use' },
  ];

  return (
    <div className={styles.page}>
      <Header theme={theme} />

      <main>
        <PageHero
          breadcrumbs={breadcrumbs}
          eyebrow={eyebrow}
          title={title}
          titleAccent={titleAccent}
          subtitle={`Effective Date: ${lastUpdated}`}
        />

        <section className={styles.section}>
          <div className={styles.container}>
            <div className={styles.card}>
              <p className={styles.intro}>{intro}</p>

              {sections.map((sec, idx) => (
                <div key={idx} className={styles.legalSection}>
                  <h2 className={styles.heading}>{sec.heading}</h2>
                  <p className={styles.body}>{sec.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <ThemeSwitcher currentTheme={theme} onThemeChange={setTheme} />
    </div>
  );
};
