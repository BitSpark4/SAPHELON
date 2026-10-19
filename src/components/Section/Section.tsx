/**
 * Reusable Section layout component providing consistent vertical padding,
 * background variants, and max-width container constraints.
 */

import React from 'react';
import styles from './Section.module.css';
import { cn } from '../../utils';

export interface SectionProps {
  id?: string;
  children: React.ReactNode;
  variant?: 'default' | 'alt' | 'band' | 'cta';
  className?: string;
  containerClassName?: string;
  hasContainer?: boolean;
  'data-part'?: string;
}

export const Section: React.FC<SectionProps> = ({
  id,
  children,
  variant = 'default',
  className,
  containerClassName,
  hasContainer = true,
  'data-part': dataPart,
}) => {
  return (
    <section
      id={id}
      className={cn(styles.section, styles[variant], className)}
      data-part={dataPart}
    >
      {hasContainer ? (
        <div className={cn(styles.container, containerClassName)}>{children}</div>
      ) : (
        children
      )}
    </section>
  );
};
