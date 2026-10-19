/**
 * LogoGuidelinesPage route component presenting the 8-page brand guidelines document
 * with complete typography, geometry, color palette, and clear space rules.
 */

import React from 'react';
import styles from './LogoGuidelinesPage.module.css';
import { BrandMark } from '../../components/BrandMark';
import { GUIDELINES_CONTENT, APP_ROUTES } from '../../constants';
import { cn } from '../../utils';

export const LogoGuidelinesPage: React.FC = () => {
  return (
    <div className={styles.desk}>
      {/* Top Navigation Bar */}
      <div className={styles.topBar}>
        <a href={APP_ROUTES.home} className={styles.backLink}>
          ← Back to Homepage
        </a>
        <span style={{ fontSize: '13px', color: '#4A5268', fontWeight: 600 }}>
          Saphelon Brand Identity Guidelines v1.0
        </span>
      </div>

      {/* Page 1: Cover */}
      <section className={cn(styles.pageCard, styles.darkPage)} id="page-1">
        <div className={styles.pageHeader}>
          <span>{GUIDELINES_CONTENT.cover.badgeLeft}</span>
          <span>{GUIDELINES_CONTENT.cover.badgeRight}</span>
        </div>
        <div className={styles.centerHero}>
          <BrandMark variant="color" width={219} height={280} />
          <div>
            <div className={styles.coverWordmark}>{GUIDELINES_CONTENT.cover.title}</div>
            <div className={styles.coverTagline}>{GUIDELINES_CONTENT.cover.tagline}</div>
          </div>
        </div>
        <div className={styles.coverFooter}>
          <h1 className={styles.coverTitle}>{GUIDELINES_CONTENT.cover.subtitle}</h1>
          <div className={styles.coverMeta}>
            <span>{GUIDELINES_CONTENT.cover.company}</span>
            <span>{GUIDELINES_CONTENT.cover.version}</span>
          </div>
        </div>
      </section>

      {/* Page 2: The Mark */}
      <section className={styles.pageCard} id="page-2">
        <div className={styles.sectionOverline}>{GUIDELINES_CONTENT.theMark.sectionNum}</div>
        <h2 className={styles.pageTitle}>{GUIDELINES_CONTENT.theMark.headline}</h2>
        <p className={styles.pageDescription}>{GUIDELINES_CONTENT.theMark.description}</p>

        <div className={styles.pointsGrid}>
          {GUIDELINES_CONTENT.theMark.points.map((p) => (
            <div key={p.letter} className={styles.pointItem}>
              <span className={styles.pointLetter}>{p.letter}</span>
              <h3 className={styles.pointTitle}>{p.title}</h3>
              <p className={styles.pointDesc}>{p.description}</p>
            </div>
          ))}
        </div>

        <div className={styles.wordmarkBox}>
          <div style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.12em', color: '#004EFC' }}>
            {GUIDELINES_CONTENT.theMark.wordmarkNote.title}
          </div>
          <p style={{ margin: 0, fontSize: '14px', lineHeight: 1.6, color: '#2A3248' }}>
            {GUIDELINES_CONTENT.theMark.wordmarkNote.description}
          </p>
        </div>

        <div className={styles.pageFooter}>
          <span>SAPHELON · LOGO GUIDELINES</span>
          <span>02</span>
        </div>
      </section>
    </div>
  );
};
