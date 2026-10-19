/**
 * IntroOverlay component displaying the initial fullscreen brand dock animation.
 * Coordinates SVG ring expansion and S-mark scaling into the navbar position.
 */

import React, { forwardRef } from 'react';
import styles from './IntroOverlay.module.css';
import { HERO_RINGS } from '../Hero';

export interface IntroOverlayProps {
  ovBgRef?: React.Ref<HTMLDivElement>;
  ovRingsRef?: React.Ref<SVGSVGElement>;
  ovMarkRef?: React.Ref<HTMLDivElement>;
}

export const IntroOverlay = forwardRef<HTMLDivElement, IntroOverlayProps>(
  ({ ovBgRef, ovRingsRef, ovMarkRef }, _ref) => {
    return (
      <div className={styles.overlay} aria-hidden="true">
        {/* Background Scrim & Rings */}
        <div ref={ovBgRef} className={styles.background}>
          <svg
            ref={ovRingsRef}
            className={styles.rings}
            viewBox="0 0 960 540"
            preserveAspectRatio="xMidYMid slice"
          >
            <defs>
              <linearGradient
                id="ov-str"
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
            <g transform="rotate(25.88 480 270)" fill="none" stroke="url(#ov-str)">
              {HERO_RINGS.map(([x, y, w, h, rx, strokeWidth, strokeOpacity], i) => (
                <rect
                  key={i}
                  x={x}
                  y={y}
                  width={w}
                  height={h}
                  rx={rx}
                  strokeWidth={strokeWidth}
                  strokeOpacity={strokeOpacity}
                  className={styles.ringRect}
                />
              ))}
            </g>
          </svg>
          <div className={styles.scrim} />
        </div>

        {/* Center scaling Mark */}
        <div ref={ovMarkRef} className={styles.centerMark}>
          <svg className={styles.markSvg}>
            <use href="#sm" />
          </svg>
        </div>
      </div>
    );
  }
);

IntroOverlay.displayName = 'IntroOverlay';
