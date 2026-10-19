/**
 * Custom React hook for managing the active theme mode and synchronizing the DOM.
 */

import { useState, useEffect, useCallback } from 'react';
import type { ThemeMode } from '../types/theme';

export function useTheme(defaultTheme: ThemeMode = 'contour') {
  const [theme, setThemeState] = useState<ThemeMode>(() => {
    try {
      const saved = localStorage.getItem('saphelon-theme') as ThemeMode | null;
      if (saved && (saved === 'contour' || saved === 'mist' || saved === 'blue')) {
        return saved;
      }
    } catch {
      // LocalStorage access may fail in restricted browser environments
    }
    return defaultTheme;
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    try {
      localStorage.setItem('saphelon-theme', theme);
    } catch {
      // Ignore storage errors
    }
  }, [theme]);

  const setTheme = useCallback((newTheme: ThemeMode) => {
    setThemeState(newTheme);
  }, []);

  return {
    theme,
    setTheme,
    isContour: theme === 'contour',
    isMist: theme === 'mist',
    isBlue: theme === 'blue',
  };
}
