/**
 * AnimatedServiceIcon component.
 * Delivers crisp, theme-aware animated vector icons for each core service offering,
 * with viewport-triggered "approach" entrance motion and subtle continuous micro-animation.
 * Also supports custom external Flaticon animated icons (GIF / SVG / WebP) when provided.
 */

import React, { useEffect, useRef, useState } from 'react';
import styles from './AnimatedServiceIcon.module.css';
import { cn } from '../../utils';

export interface AnimatedServiceIconProps {
  /** Service identifier slug (e.g. 'industrial-automation', 'iiot-industry-4-0') */
  slug: string;
  /** Size in pixels (width & height), defaults to 56 */
  size?: number;
  /** Optional custom animated image URL (e.g. downloaded Flaticon GIF / SVG) */
  customIconUrl?: string | null;
  /** Card index for staggered entrance timing */
  index?: number;
  /** Additional CSS class names */
  className?: string;
}

export const AnimatedServiceIcon: React.FC<AnimatedServiceIconProps> = ({
  slug,
  size = 56,
  customIconUrl,
  index = 0,
  className,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    // Use IntersectionObserver to trigger the "approach" animation when scrolled into view
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const delayStyle: React.CSSProperties = {
    animationDelay: `${index * 90}ms`,
    width: `${size}px`,
    height: `${size}px`,
    minWidth: `${size}px`,
    minHeight: `${size}px`,
    padding: `${Math.round(size * 0.16)}px`,
  };

  const renderIconContent = () => {
    // If a custom external icon (e.g., Flaticon GIF or SVG asset) is provided, render it
    if (customIconUrl) {
      return (
        <img
          src={customIconUrl}
          alt={slug}
          className={styles.customImg}
          loading="lazy"
        />
      );
    }

    // Default: High-fidelity theme-adaptive animated SVGs
    switch (slug) {
      case 'industrial-automation':
        return (
          <svg
            className={styles.svgIcon}
            viewBox="0 0 64 64"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <defs>
              <linearGradient id="ia-gear-grad" x1="12" y1="10" x2="28" y2="26" gradientUnits="userSpaceOnUse">
                <stop stopColor="var(--color-text-highlight)" />
                <stop offset="1" stopColor="var(--brand-saphelon-blue)" />
              </linearGradient>
              <linearGradient id="ia-arm-grad" x1="26" y1="46" x2="48" y2="18" gradientUnits="userSpaceOnUse">
                <stop stopColor="var(--brand-saphelon-blue)" />
                <stop offset="1" stopColor="var(--brand-innovation-violet)" />
              </linearGradient>
            </defs>

            {/* Industrial Pedestal Base */}
            <rect x="14" y="52" width="36" height="5" rx="2.5" fill="var(--color-card-border)" />
            <path d="M22 52 L26 44 L38 44 L42 52 Z" fill="var(--color-card-border)" opacity="0.6" />

            {/* Rotating Precision Gear */}
            <g className={styles.gearRotate}>
              <path
                d="M 20 12 L 21 14 A 6 6 0 0 1 24 15.5 L 26 14.5 L 27.5 16 L 26.5 18 A 6 6 0 0 1 28 21 L 30 22 L 29 24.5 L 27 24.5 A 6 6 0 0 1 25.5 27 L 26.5 29 L 24 30 L 22.5 28 A 6 6 0 0 1 20 28 L 19 30 L 16.5 29 L 17.5 27 A 6 6 0 0 1 15 24.5 L 13 24 L 14 21.5 L 16 21 A 6 6 0 0 1 16 18 L 14.5 16 L 16 14.5 L 18 15.5 A 6 6 0 0 1 20 12 Z"
                fill="none"
                stroke="url(#ia-gear-grad)"
                strokeWidth="2.2"
                strokeLinejoin="round"
              />
              <circle cx="20" cy="20" r="3" fill="var(--color-text-highlight)" />
            </g>

            {/* Articulating Robotic Arm */}
            <g className={styles.armTilt}>
              {/* Joint 1 Pivot */}
              <circle cx="32" cy="42" r="4.5" fill="var(--brand-saphelon-blue)" />
              {/* Beam */}
              <line x1="32" y1="42" x2="38" y2="28" stroke="url(#ia-arm-grad)" strokeWidth="4" strokeLinecap="round" />
              {/* Elbow Joint 2 */}
              <circle cx="38" cy="28" r="3.5" fill="var(--brand-innovation-violet)" />
              {/* Tool Hand Forearm */}
              <line x1="38" y1="28" x2="48" y2="22" stroke="var(--color-text-highlight)" strokeWidth="3" strokeLinecap="round" />
              {/* Tool Manipulator / Nozzle */}
              <path d="M 46 19 L 51 22 L 47 25" stroke="var(--brand-saphelon-blue)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
              {/* Laser / Spark Pulse */}
              <circle cx="53" cy="21" r="3" fill="var(--color-text-highlight)" className={styles.laserPulse} />
            </g>
          </svg>
        );

      case 'iiot-industry-4-0':
        return (
          <svg
            className={styles.svgIcon}
            viewBox="0 0 64 64"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <defs>
              <linearGradient id="iiot-chassis-grad" x1="20" y1="26" x2="44" y2="52" gradientUnits="userSpaceOnUse">
                <stop stopColor="var(--brand-saphelon-blue)" />
                <stop offset="1" stopColor="var(--brand-indigo)" />
              </linearGradient>
            </defs>

            {/* Concentric Radiating Signal Waves */}
            <path
              d="M 23 14 A 12 12 0 0 1 41 14"
              stroke="var(--color-text-highlight)"
              strokeWidth="2.2"
              strokeLinecap="round"
              fill="none"
              className={styles.wave1}
            />
            <path
              d="M 18 9 A 18 18 0 0 1 46 9"
              stroke="var(--brand-saphelon-blue)"
              strokeWidth="2"
              strokeLinecap="round"
              fill="none"
              className={styles.wave2}
            />
            <path
              d="M 13 4 A 24 24 0 0 1 51 4"
              stroke="var(--brand-innovation-violet)"
              strokeWidth="1.6"
              strokeLinecap="round"
              fill="none"
              className={styles.wave3}
            />

            {/* Edge Gateway Transmitter Mast */}
            <line x1="32" y1="26" x2="32" y2="15" stroke="var(--color-text-highlight)" strokeWidth="2.8" strokeLinecap="round" />
            <circle cx="32" cy="14" r="3" fill="var(--color-text-highlight)" className={styles.beaconBlink} />

            {/* Gateway Chassis Box */}
            <rect x="20" y="26" width="24" height="26" rx="5" fill="url(#iiot-chassis-grad)" />
            <rect x="22" y="28" width="20" height="22" rx="4" stroke="var(--brand-white)" strokeOpacity="0.25" strokeWidth="1" />

            {/* LED Status Indicators */}
            <circle cx="26" cy="34" r="1.5" fill="var(--color-text-highlight)" />
            <circle cx="32" cy="34" r="1.5" fill="var(--brand-accent-glow)" />
            <circle cx="38" cy="34" r="1.5" fill="#27C93F" />

            {/* Circuit Traces & Dynamic Data Packet */}
            <line x1="26" y1="42" x2="38" y2="42" stroke="var(--brand-white)" strokeOpacity="0.4" strokeWidth="1.5" strokeLinecap="round" />
            <line x1="32" y1="42" x2="32" y2="48" stroke="var(--brand-white)" strokeOpacity="0.4" strokeWidth="1.5" strokeLinecap="round" />

            {/* Traversing Telemetry Packet */}
            <circle cx="32" cy="56" r="2.5" fill="var(--color-text-highlight)" className={styles.dataPacket} />
            <line x1="32" y1="52" x2="32" y2="60" stroke="var(--color-card-border)" strokeWidth="1.5" strokeDasharray="2 2" />
          </svg>
        );

      case 'artificial-intelligence':
        return (
          <svg
            className={styles.svgIcon}
            viewBox="0 0 64 64"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <defs>
              <linearGradient id="ai-core-grad" x1="20" y1="20" x2="44" y2="44" gradientUnits="userSpaceOnUse">
                <stop stopColor="var(--brand-innovation-violet)" />
                <stop offset="1" stopColor="var(--brand-saphelon-blue)" />
              </linearGradient>
            </defs>

            {/* Synaptic Interconnect Lines */}
            <line x1="15" y1="18" x2="26" y2="27" stroke="var(--brand-saphelon-blue)" strokeWidth="1.8" className={styles.synapsePulse} />
            <line x1="49" y1="18" x2="38" y2="27" stroke="var(--color-text-highlight)" strokeWidth="1.8" className={styles.synapsePulse} />
            <line x1="12" y1="36" x2="23" y2="35" stroke="var(--brand-indigo)" strokeWidth="1.8" className={styles.synapsePulse} />
            <line x1="52" y1="36" x2="41" y2="35" stroke="var(--brand-innovation-violet)" strokeWidth="1.8" className={styles.synapsePulse} />
            <line x1="19" y1="50" x2="28" y2="41" stroke="var(--color-text-highlight)" strokeWidth="1.8" className={styles.synapsePulse} />
            <line x1="45" y1="50" x2="36" y2="41" stroke="var(--brand-saphelon-blue)" strokeWidth="1.8" className={styles.synapsePulse} />

            {/* Floating Outer Neural Nodes */}
            <g className={styles.nodeFloatA}>
              <circle cx="15" cy="18" r="3.5" fill="var(--brand-saphelon-blue)" />
              <circle cx="52" cy="36" r="3" fill="var(--color-text-highlight)" />
              <circle cx="19" cy="50" r="3.5" fill="var(--brand-innovation-violet)" />
            </g>
            <g className={styles.nodeFloatB}>
              <circle cx="49" cy="18" r="3.5" fill="var(--color-text-highlight)" />
              <circle cx="12" cy="36" r="3" fill="var(--brand-indigo)" />
              <circle cx="45" cy="50" r="3.5" fill="var(--brand-saphelon-blue)" />
            </g>

            {/* Central Neural Processor Hexagon */}
            <g className={styles.aiCore}>
              <polygon
                points="32,20 42,26 42,38 32,44 22,38 22,26"
                fill="url(#ai-core-grad)"
                stroke="var(--color-text-highlight)"
                strokeWidth="1.8"
                strokeLinejoin="round"
              />
              <circle cx="32" cy="32" r="4.5" fill="var(--brand-white)" opacity="0.9" />
              <circle cx="32" cy="32" r="2.5" fill="var(--brand-saphelon-blue)" />
            </g>
          </svg>
        );

      case 'software-solutions':
        return (
          <svg
            className={styles.svgIcon}
            viewBox="0 0 64 64"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <defs>
              <linearGradient id="soft-bg-grad" x1="12" y1="12" x2="52" y2="48" gradientUnits="userSpaceOnUse">
                <stop stopColor="var(--brand-card-dark-bg)" />
                <stop offset="1" stopColor="var(--brand-section-dark-bg)" />
              </linearGradient>
            </defs>

            {/* Application Base Shadow Plate */}
            <rect x="18" y="52" width="28" height="4" rx="2" fill="var(--color-card-border)" opacity="0.5" />

            {/* Browser / Code Window Container */}
            <rect
              x="12"
              y="12"
              width="40"
              height="38"
              rx="6"
              fill="var(--color-card-bg)"
              stroke="var(--color-card-border)"
              strokeWidth="2"
            />

            {/* Window Header Bar */}
            <line x1="12" y1="23" x2="52" y2="23" stroke="var(--color-card-border)" strokeWidth="1.5" />
            <circle cx="18" cy="18" r="1.8" fill="#FF5F56" />
            <circle cx="23" cy="18" r="1.8" fill="#FFBD2E" />
            <circle cx="28" cy="18" r="1.8" fill="#27C93F" />

            {/* Code Brackets `< / >` */}
            <path
              d="M 23 29 L 18 35 L 23 41"
              stroke="var(--color-text-highlight)"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
              className={styles.bracketLeft}
            />

            <line
              x1="33"
              y1="28"
              x2="29"
              y2="42"
              stroke="var(--brand-saphelon-blue)"
              strokeWidth="2.5"
              strokeLinecap="round"
            />

            <path
              d="M 39 29 L 44 35 L 39 41"
              stroke="var(--brand-innovation-violet)"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
              className={styles.bracketRight}
            />

            {/* Blinking Typing Cursor Prompt */}
            <line
              x1="47"
              y1="31"
              x2="47"
              y2="39"
              stroke="var(--color-text-highlight)"
              strokeWidth="2"
              strokeLinecap="round"
              className={styles.cursorBlink}
            />
          </svg>
        );

      case 'pharmaceutical-csv':
        return (
          <svg
            className={styles.svgIcon}
            viewBox="0 0 64 64"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <defs>
              <linearGradient id="pharma-shield-grad" x1="16" y1="12" x2="48" y2="50" gradientUnits="userSpaceOnUse">
                <stop stopColor="var(--brand-saphelon-blue)" stopOpacity="0.18" />
                <stop offset="1" stopColor="var(--brand-innovation-violet)" stopOpacity="0.08" />
              </linearGradient>
            </defs>

            {/* Validation Shield Contour */}
            <path
              d="M 32 10 L 48 16 C 48 31 38 44 32 48 C 26 44 16 31 16 16 Z"
              fill="url(#pharma-shield-grad)"
              stroke="var(--color-card-border)"
              strokeWidth="2"
              strokeLinejoin="round"
            />

            {/* Subtle Clinical Cross Grid */}
            <line x1="32" y1="18" x2="32" y2="40" stroke="var(--brand-saphelon-blue)" strokeWidth="1.5" strokeOpacity="0.25" strokeLinecap="round" />
            <line x1="21" y1="28" x2="43" y2="28" stroke="var(--brand-saphelon-blue)" strokeWidth="1.5" strokeOpacity="0.25" strokeLinecap="round" />

            {/* Automated Validation Audit Scan Wave */}
            <line
              x1="20"
              y1="22"
              x2="44"
              y2="22"
              stroke="var(--color-text-highlight)"
              strokeWidth="1.8"
              strokeLinecap="round"
              className={styles.auditBeam}
            />

            {/* Energetic Validation Verified Checkmark */}
            <path
              d="M 23 29 L 29 36 L 42 20"
              stroke="var(--color-text-highlight)"
              strokeWidth="3.2"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
              className={styles.checkmarkDraw}
            />

            {/* GAMP 5 / Integrity Compliance Sparkle */}
            <g className={styles.sparklePulse}>
              <path
                d="M 47 11 L 48.5 13.5 L 51 15 L 48.5 16.5 L 47 19 L 45.5 16.5 L 43 15 L 45.5 13.5 Z"
                fill="var(--color-text-highlight)"
              />
            </g>
          </svg>
        );

      default:
        // Generic fallback symbol
        return (
          <svg
            className={styles.svgIcon}
            viewBox="0 0 64 64"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <circle cx="32" cy="32" r="16" stroke="var(--color-text-highlight)" strokeWidth="2.5" />
            <circle cx="32" cy="32" r="5" fill="var(--brand-saphelon-blue)" />
          </svg>
        );
    }
  };

  return (
    <div
      ref={containerRef}
      className={cn(
        styles.iconWrapper,
        isInView && styles.approachIn,
        className
      )}
      style={delayStyle}
      aria-hidden="true"
    >
      <div className={styles.iconGlow} />
      {renderIconContent()}
    </div>
  );
};
