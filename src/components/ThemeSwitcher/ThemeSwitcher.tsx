/**
 * Floating ThemeSwitcher component allowing toggle between Contour, Mist, and Blue themes.
 */

import React from 'react';
import styles from './ThemeSwitcher.module.css';
import { cn } from '../../utils';
import type { ThemeMode } from '../../types';

export interface ThemeSwitcherProps {
  currentTheme: ThemeMode;
  onThemeChange: (theme: ThemeMode) => void;
}

export const ThemeSwitcher: React.FC<ThemeSwitcherProps> = ({
  currentTheme,
  onThemeChange,
}) => {
  const themes: { id: ThemeMode; label: string }[] = [
    { id: 'contour', label: 'Contour' },
    { id: 'mist', label: 'Mist' },
    { id: 'blue', label: 'Blue' },
  ];

  return (
    <div className={styles.switcher} role="group" aria-label="Theme Switcher">
      {themes.map(({ id, label }) => {
        const isActive = currentTheme === id;
        return (
          <button
            key={id}
            type="button"
            className={cn(styles.button, isActive && styles.active)}
            onClick={() => onThemeChange(id)}
            aria-pressed={isActive}
          >
            {label}
          </button>
        );
      })}
    </div>
  );
};
