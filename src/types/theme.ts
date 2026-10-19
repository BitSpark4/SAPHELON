/**
 * Theme types for Contour (dark), Mist (clean light), and Blue (signature blue).
 */

export type ThemeMode = 'contour' | 'mist' | 'blue';

export interface ThemeContextValue {
  theme: ThemeMode;
  setTheme: (theme: ThemeMode) => void;
  isContour: boolean;
  isMist: boolean;
  isBlue: boolean;
}
