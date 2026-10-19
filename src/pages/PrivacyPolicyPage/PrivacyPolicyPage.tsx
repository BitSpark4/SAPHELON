/**
 * PrivacyPolicyPage route component rendering personal data handling disclosures
 * conforming with the Digital Personal Data Protection Act, 2023 (India).
 * Source: SAPHELON-Content-Master.md Section 12.
 */

import React from 'react';
import styles from './PrivacyPolicyPage.module.css';
import {
  Header,
  PageHero,
  Footer,
  ThemeSwitcher,
} from '../../components';
import { PRIVACY_POLICY_CONTENT, ROUTES } from '../../constants';
import type { ThemeMode } from '../../types';

export interface PrivacyPolicyPageProps {
  theme?: ThemeMode;
  setTheme?: (theme: ThemeMode) => void;
}

export const PrivacyPolicyPage: React.FC<PrivacyPolicyPageProps> = ({
  theme = 'contour',
  setTheme = () => {},
}) => {
  const { eyebrow, title, titleAccent, lastUpdated, intro, sections } =
    PRIVACY_POLICY_CONTENT;

  const breadcrumbs = [
    { label: 'Home', href: ROUTES.home },
    { label: 'Privacy Policy' },
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
