/**
 * Reusable PageHero component for all inner pages.
 * Supports breadcrumbs, eyebrow, Title Case H1 with single accent word, and descriptive subtitle.
 */

import React from 'react';
import styles from './PageHero.module.css';
import { Breadcrumb, type BreadcrumbItem } from '../Breadcrumb';

export interface PageHeroProps {
  eyebrow?: string;
  title: string;
  titleAccent?: string;
  subtitle?: string;
  breadcrumbs?: BreadcrumbItem[];
  className?: string;
}

export const PageHero: React.FC<PageHeroProps> = ({
  eyebrow,
  title,
  titleAccent,
  subtitle,
  breadcrumbs,
  className,
}) => {
  return (
    <div className={`${styles.pageHero} ${className || ''}`} data-part="page-hero">
      <div className={styles.container}>
        {breadcrumbs && <Breadcrumb items={breadcrumbs} />}
        {eyebrow && <div className={styles.eyebrow}>{eyebrow}</div>}
        <h1 className={styles.title}>
          {title}
          {titleAccent && <span className={styles.accent}>{titleAccent}</span>}
        </h1>
        {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
      </div>
    </div>
  );
};
