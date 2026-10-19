/**
 * BrandMark component representing the Saphelon S-monogram logo.
 * Supports full-color gradient and monochrome variations.
 */

import React, { forwardRef } from 'react';
import styles from './BrandMark.module.css';
import { cn } from '../../utils';

export interface BrandMarkProps extends React.SVGProps<SVGSVGElement> {
  variant?: 'color' | 'mono';
  width?: number | string;
  height?: number | string;
  className?: string;
}

/**
 * Global SVG Definitions for the Saphelon Ribbon S Logo.
 * Render once at the root level of the application.
 */
export function BrandDefs(): JSX.Element {
  return (
    <svg
      width="0"
      height="0"
      style={{ position: 'absolute', left: 0, top: 0 }}
      aria-hidden="true"
    >
      <defs>
        <linearGradient
          id="g-up"
          gradientUnits="userSpaceOnUse"
          x1="430"
          y1="390"
          x2="1688"
          y2="1334"
        >
          <stop offset="0" stopColor="#1BE0FD" />
          <stop offset="0.2" stopColor="#0BC8FC" />
          <stop offset="0.35" stopColor="#0097FC" />
          <stop offset="0.5" stopColor="#0188FF" />
          <stop offset="0.72" stopColor="#004EFC" />
          <stop offset="0.87" stopColor="#2153FD" />
          <stop offset="1" stopColor="#7F4BFC" />
        </linearGradient>

        <linearGradient
          id="g-lo"
          gradientUnits="userSpaceOnUse"
          x1="415"
          y1="878"
          x2="1495"
          y2="1854"
        >
          <stop offset="0" stopColor="#00D6FF" />
          <stop offset="0.14" stopColor="#01B1FD" />
          <stop offset="0.3" stopColor="#0073FD" />
          <stop offset="0.5" stopColor="#2D5EFF" />
          <stop offset="0.62" stopColor="#4D38FC" />
          <stop offset="0.75" stopColor="#7740FD" />
          <stop offset="1" stopColor="#A416FC" />
        </linearGradient>

        <radialGradient
          id="g-glow"
          gradientUnits="userSpaceOnUse"
          cx="1643"
          cy="1507"
          r="420"
        >
          <stop offset="0" stopColor="#CC7AFC" stopOpacity="0.95" />
          <stop offset="1" stopColor="#CC7AFC" stopOpacity="0" />
        </radialGradient>

        <symbol id="sm" viewBox="320 120 1410 1800">
          <path
            fill="url(#g-up)"
            d="M341 489.89 L341 335.02 A214 214 0 0 1 648.39 142.47 L1610.91 609.3 A190 190 0 0 1 1718 780.25 L1718 1352.75 A266 266 0 0 0 1584.08 1204.28 L441.32 650.04 A178 178 0 0 1 341 489.89Z"
          />
          <path
            fill="url(#g-lo)"
            d="M1706 1557.91 L1706 1712.78 A214 214 0 0 1 1398.61 1905.33 L436.09 1438.5 A190 190 0 0 1 329 1267.55 L329 695.05 A266 266 0 0 0 462.92 843.52 L1605.68 1397.76 A178 178 0 0 1 1706 1557.91Z"
          />
          <path
            fill="url(#g-glow)"
            d="M1706 1557.91 L1706 1712.78 A214 214 0 0 1 1398.61 1905.33 L436.09 1438.5 A190 190 0 0 1 329 1267.55 L329 695.05 A266 266 0 0 0 462.92 843.52 L1605.68 1397.76 A178 178 0 0 1 1706 1557.91Z"
          />
        </symbol>

        <symbol id="sm-mono" viewBox="320 120 1410 1800">
          <path
            fill="#FFFFFF"
            d="M341 489.89 L341 335.02 A214 214 0 0 1 648.39 142.47 L1610.91 609.3 A190 190 0 0 1 1718 780.25 L1718 1352.75 A266 266 0 0 0 1584.08 1204.28 L441.32 650.04 A178 178 0 0 1 341 489.89Z"
          />
          <path
            fill="#FFFFFF"
            d="M1706 1557.91 L1706 1712.78 A214 214 0 0 1 1398.61 1905.33 L436.09 1438.5 A190 190 0 0 1 329 1267.55 L329 695.05 A266 266 0 0 0 462.92 843.52 L1605.68 1397.76 A178 178 0 0 1 1706 1557.91Z"
          />
        </symbol>
      </defs>
    </svg>
  );
}

/**
 * BrandMark SVG icon rendering the symbol definition.
 */
export const BrandMark = forwardRef<SVGSVGElement, BrandMarkProps>(
  ({ variant = 'color', width = 30, height = 38, className, ...props }, ref) => {
    const symbolId = variant === 'mono' ? '#sm-mono' : '#sm';

    return (
      <svg
        ref={ref}
        width={width}
        height={height}
        className={cn(styles.mark, className)}
        {...props}
      >
        <use href={symbolId} />
      </svg>
    );
  }
);

BrandMark.displayName = 'BrandMark';
