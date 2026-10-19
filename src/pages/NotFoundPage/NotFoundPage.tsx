/**
 * NotFoundPage (404) route component rendering branded error message and recovery links.
 * Source: SAPHELON-Content-Master.md Section 12.
 */

import React from 'react';
import styles from './NotFoundPage.module.css';
import { Header, Button, Footer, ThemeSwitcher } from '../../components';
import { NOT_FOUND_CONTENT } from '../../constants';
import type { ThemeMode } from '../../types';

export interface NotFoundPageProps {
  theme?: ThemeMode;
  setTheme?: (theme: ThemeMode) => void;
}

export const NotFoundPage: React.FC<NotFoundPageProps> = ({
  theme = 'contour',
  setTheme = () => {},
}) => {
  const { eyebrow, title, titleAccent, description, links } = NOT_FOUND_CONTENT;

  return (
    <div className={styles.page}>
      <Header theme={theme} />

      <main className={styles.section}>
        <div className={styles.container}>
          <span className={styles.errorBadge}>{eyebrow}</span>
          <h1 className={styles.title}>
            {title}
            <span className={styles.accent}>{titleAccent}</span>
          </h1>
          <p className={styles.description}>{description}</p>
          <div className={styles.linksGroup}>
            {links.map((link, idx) => (
              <Button
                key={link.label}
                href={link.href}
                variant={idx === 0 ? 'primary' : 'secondary'}
                size="md"
                hasArrow={idx === 0}
              >
                {link.label}
              </Button>
            ))}
          </div>
        </div>
      </main>

      <Footer />
      <ThemeSwitcher currentTheme={theme} onThemeChange={setTheme} />
    </div>
  );
};
