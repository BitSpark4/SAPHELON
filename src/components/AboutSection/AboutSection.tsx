/**
 * AboutSection component for the Home page providing an executive snapshot
 * of who SAPHELON is, with a link to the full About Us page.
 * Source: SAPHELON-Content-Master.md Section 1 home.about.
 */

import React from 'react';
import { Link } from 'react-router-dom';
import styles from './AboutSection.module.css';
import { HOME_CONTENT } from '../../constants';

export const AboutSection: React.FC = () => {
  const { about } = HOME_CONTENT;

  return (
    <section className={styles.section} data-part="home-about">
      <div className={styles.container}>
        <div className={styles.leftCol}>
          <div className={styles.overline}>{about.eyebrow}</div>
          <h2 className={styles.title}>{about.title}</h2>

          <div className={styles.imageCard}>
            <img
              src="/images/about-team-collaboration.jpg"
              alt="SAPHELON engineering team analyzing IIoT architecture in engineering lab"
              className={styles.aboutImage}
              loading="lazy"
            />
            <div className={styles.imageBadge}>
              <span className={styles.badgeDot} />
              <span>Multi-Disciplinary Engineering Lab</span>
            </div>
          </div>
        </div>

        <div className={styles.rightCol}>
          <p className={styles.paragraph}>{about.p1}</p>
          <p className={styles.paragraph}>{about.p2}</p>
          <p className={styles.paragraph}>{about.p3}</p>
          <div>
            <Link to={about.linkHref} className={styles.link}>
              {about.linkText} →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
