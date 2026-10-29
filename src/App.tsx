/**
 * Root Application component providing global SVG definitions,
 * theme management context, automatic scroll-to-top on route changes,
 * and comprehensive multi-page declarative routing.
 * Aligned with SAPHELON-Content-Plan.md Section 2.
 */

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import styles from './App.module.css';
import { BrandDefs, ScrollToTop, PageSeo } from './components';
import {
  HomePage,
  AboutPage,
  ServicesHubPage,
  ServiceDetailPage,
  IndustriesPage,
  ApproachPage,
  ContactPage,
  PrivacyPolicyPage,
  TermsOfUsePage,
  NotFoundPage,
  LogoGuidelinesPage,
} from './pages';
import { useTheme } from './hooks';
import { ROUTES } from './constants';

export const App: React.FC = () => {
  const { theme, setTheme } = useTheme('contour');

  return (
    <BrowserRouter>
      <ScrollToTop />
      <PageSeo />
      <div className={styles.app}>
        {/* Global SVG Symbol Definitions for S Logo and Gradients */}
        <BrandDefs />

        {/* Declarative Multi-Page Route Definitions */}
        <Routes>
          {/* 01 Home */}
          <Route
            path={ROUTES.home}
            element={<HomePage theme={theme} setTheme={setTheme} />}
          />

          {/* 02 About Us */}
          <Route
            path={ROUTES.about}
            element={<AboutPage theme={theme} setTheme={setTheme} />}
          />

          {/* 03 Services Hub */}
          <Route
            path={ROUTES.services}
            element={<ServicesHubPage theme={theme} setTheme={setTheme} />}
          />

          {/* 04 Industrial Automation */}
          <Route
            path={ROUTES.industrialAutomation}
            element={
              <ServiceDetailPage
                slug="industrial-automation"
                theme={theme}
                setTheme={setTheme}
              />
            }
          />

          {/* 05 IIoT & Industry 4.0 */}
          <Route
            path={ROUTES.iiotIndustry40}
            element={
              <ServiceDetailPage
                slug="iiot-industry-4-0"
                theme={theme}
                setTheme={setTheme}
              />
            }
          />

          {/* 06 Artificial Intelligence */}
          <Route
            path={ROUTES.artificialIntelligence}
            element={
              <ServiceDetailPage
                slug="artificial-intelligence"
                theme={theme}
                setTheme={setTheme}
              />
            }
          />

          {/* 07 Software Solutions */}
          <Route
            path={ROUTES.softwareSolutions}
            element={
              <ServiceDetailPage
                slug="software-solutions"
                theme={theme}
                setTheme={setTheme}
              />
            }
          />

          {/* 08 Pharmaceutical & CSV Solutions */}
          <Route
            path={ROUTES.pharmaceuticalCsv}
            element={
              <ServiceDetailPage
                slug="pharmaceutical-csv"
                theme={theme}
                setTheme={setTheme}
              />
            }
          />

          {/* Dynamic Service Sub-route */}
          <Route
            path="/services/:slug"
            element={<ServiceDetailPage theme={theme} setTheme={setTheme} />}
          />

          {/* 09 Industries */}
          <Route
            path={ROUTES.industries}
            element={<IndustriesPage theme={theme} setTheme={setTheme} />}
          />

          {/* 10 Our Approach */}
          <Route
            path={ROUTES.approach}
            element={<ApproachPage theme={theme} setTheme={setTheme} />}
          />

          {/* 11 Contact Us */}
          <Route
            path={ROUTES.contact}
            element={<ContactPage theme={theme} setTheme={setTheme} />}
          />

          {/* Legal Pages */}
          <Route
            path={ROUTES.privacyPolicy}
            element={<PrivacyPolicyPage theme={theme} setTheme={setTheme} />}
          />
          <Route
            path={ROUTES.termsOfUse}
            element={<TermsOfUsePage theme={theme} setTheme={setTheme} />}
          />

          {/* Brand Logo Guidelines */}
          <Route path={ROUTES.guidelines} element={<LogoGuidelinesPage />} />

          {/* 404 Catch-All */}
          <Route
            path="*"
            element={<NotFoundPage theme={theme} setTheme={setTheme} />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
