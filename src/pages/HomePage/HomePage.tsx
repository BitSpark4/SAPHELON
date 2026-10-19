/**
 * HomePage route component rendering the full Saphelon landing page experience.
 * Connects the intro dock animation, theme state, and all primary page sections.
 * Aligned with SAPHELON-Content-Master.md Section 1.
 */

import React from 'react';
import styles from './HomePage.module.css';
import {
  Header,
  Hero,
  AboutSection,
  ServicesSection,
  PipelineSection,
  CsvSection,
  IndustriesSection,
  WhySection,
  ApproachSection,
  ContactSection,
  Footer,
  ThemeSwitcher,
  IntroOverlay,
} from '../../components';
import { useIntroAnimation } from '../../hooks';
import type { ThemeMode } from '../../types';

export interface HomePageProps {
  theme: ThemeMode;
  setTheme: (theme: ThemeMode) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ theme, setTheme }) => {
  const {
    isPlaying,
    finishIntro,
    navMarkRef,
    navWordRef,
    navLinksRef,
    heroContentRef,
    ovBgRef,
    ovMarkRef,
    ovRingsRef,
  } = useIntroAnimation(true);

  // If theme is switched, stop the intro animation early
  const handleThemeChange = (newTheme: ThemeMode) => {
    finishIntro();
    setTheme(newTheme);
  };

  return (
    <div className={styles.page}>
      {/* Header and Navigation */}
      <Header
        theme={theme}
        navMarkRef={navMarkRef}
        navWordRef={navWordRef}
        navLinksRef={navLinksRef}
      />

      {/* Main Page Flow per Blueprint */}
      <main>
        {/* 1. Hero with Contour rings and dock target */}
        <Hero theme={theme} heroContentRef={heroContentRef} />

        {/* 2. Who We Are snapshot */}
        <AboutSection />

        {/* 3. Core Services 01-04 */}
        <ServicesSection />

        {/* 4. Plant Floor to Decision connected pipeline */}
        <PipelineSection />

        {/* 5. Pharmaceutical CSV Solutions */}
        <CsvSection />

        {/* 6. Industries We Support */}
        <IndustriesSection />

        {/* 7. Why SAPHELON (5 points) */}
        <WhySection />

        {/* 8. Our Approach (4 steps) */}
        <ApproachSection />

        {/* 9. Closing Action CTA */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Theme Switcher */}
      <ThemeSwitcher
        currentTheme={theme}
        onThemeChange={handleThemeChange}
      />

      {/* Opening Intro Animation Overlay (plays once on home page only) */}
      {isPlaying && (
        <IntroOverlay
          ovBgRef={ovBgRef}
          ovRingsRef={ovRingsRef}
          ovMarkRef={ovMarkRef}
        />
      )}
    </div>
  );
};
