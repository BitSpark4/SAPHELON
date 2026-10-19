/**
 * ServiceDetailPage route component rendering any of the five SAPHELON service pages
 * via slug resolution or explicit service prop injection.
 * Single unified implementation adhering to SAPHELON-Content-Plan.md Section 5.
 */

import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import styles from './ServiceDetailPage.module.css';
import { Header, ServicePageTemplate, Footer, ThemeSwitcher } from '../../components';
import { SERVICE_PAGES_MAP, ROUTES } from '../../constants';
import type { ThemeMode, ServiceDetailContent } from '../../types';

export interface ServiceDetailPageProps {
  theme?: ThemeMode;
  setTheme?: (theme: ThemeMode) => void;
  service?: ServiceDetailContent;
  slug?: string;
}

export const ServiceDetailPage: React.FC<ServiceDetailPageProps> = ({
  theme = 'contour',
  setTheme = () => {},
  service: explicitService,
  slug: explicitSlug,
}) => {
  const params = useParams<{ slug: string }>();
  const activeSlug = explicitSlug || params.slug || explicitService?.slug;

  const serviceData = explicitService || (activeSlug ? SERVICE_PAGES_MAP[activeSlug] : null);

  if (!serviceData) {
    return <Navigate to={ROUTES.services} replace />;
  }

  return (
    <div className={styles.page}>
      <Header theme={theme} />
      <main>
        <ServicePageTemplate service={serviceData} />
      </main>
      <Footer />
      <ThemeSwitcher currentTheme={theme} onThemeChange={setTheme} />
    </div>
  );
};
