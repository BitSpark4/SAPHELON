/**
 * Header component positioning the navbar and constrained container at top of page.
 */

import React from 'react';
import styles from './Header.module.css';
import { Navbar } from '../Navbar';
import type { ThemeMode } from '../../types';

export interface HeaderProps {
  theme?: ThemeMode;
  navMarkRef?: React.Ref<SVGSVGElement>;
  navWordRef?: React.Ref<HTMLSpanElement>;
  navLinksRef?: React.Ref<HTMLDivElement>;
}

export const Header: React.FC<HeaderProps> = ({
  theme = 'contour',
  navMarkRef,
  navWordRef,
  navLinksRef,
}) => {
  return (
    <header className={styles.header} data-part="header">
      <div className={styles.container}>
        <Navbar
          theme={theme}
          navMarkRef={navMarkRef}
          navWordRef={navWordRef}
          navLinksRef={navLinksRef}
        />
      </div>
    </header>
  );
};
