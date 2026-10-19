/**
 * Reusable Card component supporting default rounded container,
 * stepList container, and top-bordered industry card style variants.
 */

import React from 'react';
import styles from './Card.module.css';
import { cn } from '../../utils';

export interface CardProps {
  children: React.ReactNode;
  variant?: 'default' | 'stepList' | 'topBorder';
  hoverable?: boolean;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}

export const Card: React.FC<CardProps> = ({
  children,
  variant = 'default',
  hoverable = false,
  className,
  onClick,
}) => {
  return (
    <div
      className={cn(
        styles.card,
        styles[variant],
        hoverable && styles.hoverable,
        className
      )}
      onClick={onClick}
    >
      {children}
    </div>
  );
};
