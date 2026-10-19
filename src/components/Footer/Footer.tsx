/**
 * Footer component providing site navigation, company legal address, services directory,
 * contact communication channels, social media links, and copyright notices.
 * Aligned with SAPHELON-Content-Master.md Section 0.3.
 */

import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Footer.module.css';
import { BrandMark } from '../BrandMark';
import { FOOTER_CONTENT } from '../../constants';

export const Footer: React.FC = () => {
  return (
    <footer className={styles.footer} data-part="footer">
      <div className={styles.container}>
        <div className={styles.grid}>
          {/* Column 1: Brand & Office */}
          <div className={styles.brandCol}>
            <Link to="/" className={styles.brandLink} aria-label="SAPHELON Home">
              <BrandMark variant="color" width={30} height={38} />
              <span className={styles.brandWordmark}>{FOOTER_CONTENT.brandName}</span>
            </Link>
            <p className={styles.text}>{FOOTER_CONTENT.descriptor}</p>
            <p className={styles.text}>
              {FOOTER_CONTENT.company}
              <br />
              {FOOTER_CONTENT.location}
            </p>

            {/* Hidden until supplied slots */}
            {FOOTER_CONTENT.registeredOffice && (
              <p className={styles.text}>{FOOTER_CONTENT.registeredOffice}</p>
            )}
            {(FOOTER_CONTENT.cin || FOOTER_CONTENT.gstin) && (
              <p className={styles.text}>
                {FOOTER_CONTENT.cin && `CIN: ${FOOTER_CONTENT.cin}`}
                {FOOTER_CONTENT.cin && FOOTER_CONTENT.gstin && ' · '}
                {FOOTER_CONTENT.gstin && `GSTIN: ${FOOTER_CONTENT.gstin}`}
              </p>
            )}
          </div>

          {/* Column 2: Quick Links */}
          <div className={styles.column}>
            <div className={styles.colHeading}>{FOOTER_CONTENT.quickLinksTitle}</div>
            {FOOTER_CONTENT.quickLinks.map((link) => (
              <Link key={link.label} to={link.href} className={styles.link}>
                {link.label}
              </Link>
            ))}
          </div>

          {/* Column 3: Our Services */}
          <div className={styles.column}>
            <div className={styles.colHeading}>{FOOTER_CONTENT.servicesTitle}</div>
            {FOOTER_CONTENT.servicesLinks.map((service) => (
              <Link key={service.label} to={service.href} className={styles.link}>
                {service.label}
              </Link>
            ))}
          </div>

          {/* Column 4: Get in Touch */}
          <div className={styles.column}>
            <div className={styles.colHeading}>{FOOTER_CONTENT.contactTitle}</div>
            <span className={styles.text}>{FOOTER_CONTENT.location}</span>
            <a href={FOOTER_CONTENT.emailLink} className={styles.link}>
              {FOOTER_CONTENT.email}
            </a>
            <a href={FOOTER_CONTENT.phoneLink} className={styles.link}>
              {FOOTER_CONTENT.phone}
            </a>

            {/* Render social icons only if real URLs exist */}
            {(FOOTER_CONTENT.linkedin || FOOTER_CONTENT.youtube) && (
              <div className={styles.socialRow}>
                {FOOTER_CONTENT.linkedin && (
                  <a
                    href={FOOTER_CONTENT.linkedin}
                    className={styles.socialLink}
                    target="_blank"
                    rel="noreferrer"
                  >
                    LinkedIn
                  </a>
                )}
                {FOOTER_CONTENT.youtube && (
                  <a
                    href={FOOTER_CONTENT.youtube}
                    className={styles.socialLink}
                    target="_blank"
                    rel="noreferrer"
                  >
                    YouTube
                  </a>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className={styles.bottomBar}>
          <span>{FOOTER_CONTENT.copyright}</span>
          <div className={styles.legalLinks}>
            <Link to={FOOTER_CONTENT.privacyPolicyHref} className={styles.legalLink}>
              {FOOTER_CONTENT.privacyPolicyText}
            </Link>
            <Link to={FOOTER_CONTENT.termsHref} className={styles.legalLink}>
              {FOOTER_CONTENT.termsText}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
