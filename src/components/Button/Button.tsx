/**
 * Reusable Button component that dynamically renders as a client-side Link (for internal hrefs),
 * an anchor (for external/tel/mailto hrefs), or a button element, supporting primary, secondary, and approach variants.
 */

import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Button.module.css';
import { cn } from '../../utils';

export interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'approach';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  hasArrow?: boolean;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLElement>;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  'aria-label'?: string;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  href,
  hasArrow = false,
  className,
  onClick,
  type = 'button',
  disabled = false,
  'aria-label': ariaLabel,
}) => {
  const buttonClasses = cn(
    styles.button,
    styles[variant],
    styles[size],
    className
  );

  const content = (
    <>
      {children}
      {hasArrow && <span className={styles.arrow} aria-hidden="true">→</span>}
    </>
  );

  if (href) {
    const isInternal = href.startsWith('/') && !href.startsWith('//');
    if (isInternal) {
      return (
        <Link
          to={href}
          className={buttonClasses}
          onClick={onClick as React.MouseEventHandler<HTMLAnchorElement>}
          aria-label={ariaLabel}
        >
          {content}
        </Link>
      );
    }

    return (
      <a
        href={href}
        className={buttonClasses}
        onClick={onClick as React.MouseEventHandler<HTMLAnchorElement>}
        aria-label={ariaLabel}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      type={type}
      disabled={disabled}
      className={buttonClasses}
      onClick={onClick as React.MouseEventHandler<HTMLButtonElement>}
      aria-label={ariaLabel}
    >
      {content}
    </button>
  );
};
