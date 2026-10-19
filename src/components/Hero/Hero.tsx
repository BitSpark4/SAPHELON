/**
 * Hero component presenting the main brand value proposition, interactive background
 * artwork (contour rings or watermark), and primary action buttons.
 * Source: SAPHELON-Content-Master.md Section 1 home.hero.
 */

import React from 'react';
import styles from './Hero.module.css';
import { Button } from '../Button';
import { HOME_CONTENT } from '../../constants';
import { cn } from '../../utils';
import type { ThemeMode } from '../../types';

export interface HeroProps {
  theme?: ThemeMode;
  heroContentRef?: React.Ref<HTMLDivElement>;
}

export const HERO_RINGS = [
  [135, 90, 690, 360, 82, 2, 0.35],
  [80, 55, 800, 430, 96, 4, 0.45],
  [25, 20, 910, 500, 110, 6, 0.55],
  [-30, -15, 1020, 570, 124, 9, 0.65],
  [-85, -50, 1130, 640, 138, 12, 0.72],
  [-140, -85, 1240, 710, 152, 15, 0.8],
  [-195, -120, 1350, 780, 166, 18, 0.86],
  [-250, -155, 1460, 850, 180, 21, 0.9],
  [-305, -190, 1570, 920, 194, 24, 0.94],
  [-360, -225, 1680, 990, 208, 27, 0.97],
  [-415, -260, 1790, 1060, 222, 30, 1],
] as const;

export const Hero: React.FC<HeroProps> = ({ theme = 'contour', heroContentRef }) => {
  const { hero } = HOME_CONTENT;

  return (
    <section id="top" className={styles.hero} data-part="hero">
      {/* 1. Contour Theme Background Art (Angled Gradient Rings & Scrim) */}
      {theme === 'contour' && (
        <>
          <svg
            className={styles.ringsArt}
            data-art="rings"
            viewBox="0 0 960 540"
            preserveAspectRatio="xMidYMid slice"
            aria-hidden="true"
          >
            <defs>
              <linearGradient
                id="h-str"
                gradientUnits="userSpaceOnUse"
                x1="-300"
                y1="800"
                x2="1260"
                y2="-260"
              >
                <stop offset="0" stopColor="#A416FC" />
                <stop offset="0.3" stopColor="#4D38FC" />
                <stop offset="0.55" stopColor="#004EFC" />
                <stop offset="0.8" stopColor="#0097FC" />
                <stop offset="1" stopColor="#1BE0FD" />
              </linearGradient>
            </defs>
            <g transform="rotate(25.88 480 270)" fill="none" stroke="url(#h-str)">
              {HERO_RINGS.map(([x, y, w, h, rx, strokeWidth, strokeOpacity], idx) => (
                <rect
                  key={idx}
                  x={x}
                  y={y}
                  width={w}
                  height={h}
                  rx={rx}
                  strokeWidth={strokeWidth}
                  strokeOpacity={strokeOpacity}
                />
              ))}
            </g>
          </svg>
          <div className={styles.scrim} data-art="scrim" />
        </>
      )}

      {/* 2. Mist Theme Background Art (Subtle Color Mark Watermark) */}
      {theme === 'mist' && (
        <svg
          className={cn(styles.markWatermark, styles.markWatermarkMist)}
          data-art="mark"
          aria-hidden="true"
        >
          <use href="#sm" />
        </svg>
      )}

      {/* 3. Blue Theme Background Art (Subtle White Mono Mark Watermark) */}
      {theme === 'blue' && (
        <svg
          className={cn(styles.markWatermark, styles.markWatermarkBlue)}
          data-art="mark"
          aria-hidden="true"
        >
          <use href="#sm-mono" />
        </svg>
      )}

      {/* Foreground Content */}
      <div ref={heroContentRef} className={styles.content}>
        <div className={styles.overline}>{hero.eyebrow}</div>
        <h1 className={styles.title}>
          {hero.titlePrefix}
          <span className={styles.accent}>{hero.titleAccent}</span>
        </h1>
        <p className={styles.subtitle}>{hero.subtitle}</p>
        <div className={styles.actions}>
          <Button
            href={hero.primaryCtaHref}
            variant="primary"
            size="lg"
            hasArrow
          >
            {hero.primaryCtaText}
          </Button>
          <Button
            href={hero.secondaryCtaHref}
            variant="secondary"
            size="lg"
          >
            {hero.secondaryCtaText}
          </Button>
        </div>
      </div>
    </section>
  );
};
