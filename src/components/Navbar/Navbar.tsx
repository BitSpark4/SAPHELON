/**
 * Navbar component rendering brand mark, wordmark, navigation links, Services dropdown,
 * and primary CTA. Supports mobile menu drawer and intro dock animation refs.
 * Aligned with SAPHELON-Content-Master.md Section 0.2.
 */

import React, { forwardRef, useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import styles from './Navbar.module.css';
import { BrandMark } from '../BrandMark';
import { Button } from '../Button';
import {
  NAV_LINKS,
  SERVICES_DROPDOWN_ITEMS,
  NAV_CTA,
  ROUTES,
} from '../../constants';
import { cn } from '../../utils';
import type { ThemeMode } from '../../types';

export interface NavbarProps {
  theme?: ThemeMode;
  navMarkRef?: React.Ref<SVGSVGElement>;
  navWordRef?: React.Ref<HTMLSpanElement>;
  navLinksRef?: React.Ref<HTMLDivElement>;
}

export const Navbar = forwardRef<HTMLElement, NavbarProps>(
  ({ theme = 'contour', navMarkRef, navWordRef, navLinksRef }, _ref) => {
    const isMonoMark = theme === 'blue';
    const [mobileOpen, setMobileOpen] = useState(false);
    const location = useLocation();

    // Close mobile drawer upon navigating to a new route
    useEffect(() => {
      setMobileOpen(false);
    }, [location.pathname]);

    // Prevent body scrolling when mobile drawer is open
    useEffect(() => {
      if (mobileOpen) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = '';
      }
      return () => {
        document.body.style.overflow = '';
      };
    }, [mobileOpen]);

    const isServicesActive = location.pathname.startsWith('/services');

    return (
      <nav className={styles.navbar} aria-label="Main Navigation">
        {/* Brand Lockup */}
        <Link to={ROUTES.home} className={styles.brand} aria-label="SAPHELON Home">
          <BrandMark
            ref={navMarkRef}
            variant={isMonoMark ? 'mono' : 'color'}
            width={30}
            height={38}
          />
          <span ref={navWordRef} className={styles.brandWordmark}>
            SAPHELON
          </span>
        </Link>

        {/* Desktop Nav Group */}
        <div ref={navLinksRef} className={styles.navGroup}>
          <ul className={styles.navLinks}>
            {NAV_LINKS.map((link) => {
              if (link.dropdown) {
                return (
                  <li key={link.label} className={styles.navItem}>
                    <NavLink
                      to={link.href}
                      className={({ isActive }) =>
                        cn(
                          styles.navLink,
                          (isActive || isServicesActive) && styles.navLinkActive
                        )
                      }
                    >
                      {link.label}
                      <span className={styles.dropdownIndicator} aria-hidden="true">
                        ▼
                      </span>
                    </NavLink>

                    {/* Services Dropdown Menu */}
                    <div className={styles.dropdownMenu} role="menu">
                      {SERVICES_DROPDOWN_ITEMS.map((item) => (
                        <React.Fragment key={item.slug}>
                          {item.isSpecialised && (
                            <div className={styles.dropdownDivider} />
                          )}
                          <Link
                            to={item.href}
                            className={styles.dropdownItem}
                            role="menuitem"
                          >
                            <span className={styles.dropdownItemTitle}>
                              {item.name}
                            </span>
                          </Link>
                        </React.Fragment>
                      ))}

                      <Link
                        to={ROUTES.services}
                        className={styles.viewAllServicesLink}
                        role="menuitem"
                      >
                        Explore All Services →
                      </Link>
                    </div>
                  </li>
                );
              }

              return (
                <li key={link.label} className={styles.navItem}>
                  <NavLink
                    to={link.href}
                    className={({ isActive }) =>
                      cn(styles.navLink, isActive && styles.navLinkActive)
                    }
                  >
                    {link.label}
                  </NavLink>
                </li>
              );
            })}
          </ul>

          {/* Primary Nav CTA */}
          <Button href={NAV_CTA.href} size="sm" variant="primary" hasArrow>
            {NAV_CTA.label}
          </Button>
        </div>

        {/* Mobile Toggle Button */}
        <button
          type="button"
          className={styles.mobileToggle}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-expanded={mobileOpen}
          aria-label={mobileOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
        >
          <span
            className={cn(
              styles.hamburgerIcon,
              mobileOpen && styles.hamburgerOpen
            )}
          >
            <span className={styles.hamburgerBar} />
            <span className={styles.hamburgerBar} />
            <span className={styles.hamburgerBar} />
          </span>
        </button>

        {/* Mobile Menu Drawer */}
        <div
          className={cn(
            styles.mobileDrawer,
            mobileOpen && styles.mobileDrawerOpen
          )}
          aria-hidden={!mobileOpen}
        >
          <ul className={styles.mobileNavList}>
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                <NavLink
                  to={link.href}
                  className={styles.mobileNavLink}
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </NavLink>

                {link.dropdown && (
                  <ul className={styles.mobileSubmenu}>
                    {SERVICES_DROPDOWN_ITEMS.map((sub) => (
                      <li key={sub.slug}>
                        <NavLink
                          to={sub.href}
                          className={({ isActive }) =>
                            cn(
                              styles.mobileSublink,
                              isActive && styles.mobileSublinkActive
                            )
                          }
                          onClick={() => setMobileOpen(false)}
                        >
                          <span>{sub.name}</span>
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>

          <div className={styles.mobileCtaWrapper}>
            <Button
              href={NAV_CTA.href}
              size="md"
              variant="primary"
              hasArrow
              onClick={() => setMobileOpen(false)}
            >
              {NAV_CTA.label}
            </Button>
          </div>
        </div>
      </nav>
    );
  }
);

Navbar.displayName = 'Navbar';
