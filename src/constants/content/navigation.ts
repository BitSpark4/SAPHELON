/**
 * Navigation Constants for Header, Navbar, and Mobile Menu.
 * Source: SAPHELON-Content-Master.md Section 0.2
 */

import { ROUTES } from '../routes';
import type { NavLinkItem } from '../../types';

export const SERVICES_DROPDOWN_ITEMS = [
  {
    name: 'Industrial Automation',
    slug: 'industrial-automation',
    href: ROUTES.industrialAutomation,
    isSpecialised: false,
  },
  {
    name: 'IIoT & Industry 4.0',
    slug: 'iiot-industry-4-0',
    href: ROUTES.iiotIndustry40,
    isSpecialised: false,
  },
  {
    name: 'Artificial Intelligence',
    slug: 'artificial-intelligence',
    href: ROUTES.artificialIntelligence,
    isSpecialised: false,
  },
  {
    name: 'Software Solutions',
    slug: 'software-solutions',
    href: ROUTES.softwareSolutions,
    isSpecialised: false,
  },
  {
    name: 'Pharmaceutical & CSV Solutions',
    slug: 'pharmaceutical-csv',
    href: ROUTES.pharmaceuticalCsv,
    isSpecialised: false,
  },
];

export const NAV_LINKS: NavLinkItem[] = [
  { label: 'Home', href: ROUTES.home },
  { label: 'About Us', href: ROUTES.about },
  {
    label: 'Services',
    href: ROUTES.services,
    dropdown: SERVICES_DROPDOWN_ITEMS,
  },
  { label: 'Industries', href: ROUTES.industries },
  { label: 'Our Approach', href: ROUTES.approach },
  { label: 'Contact Us', href: ROUTES.contact },
];

export const NAV_CTA = {
  label: 'Discuss Your Project',
  href: ROUTES.contact,
};
