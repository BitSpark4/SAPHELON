/**
 * PageSeo component that dynamically manages document title, meta descriptions,
 * canonical URLs, Open Graph, and robots indexability directives on client-side route changes.
 */

import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { ROUTES, SEO_DATA } from '../../constants';
import type { SeoMeta } from '../../types';

interface RouteSeoResult {
  seo: SeoMeta;
  canonical: string;
  isNotFound: boolean;
}

function getSeoForPath(pathname: string): RouteSeoResult {
  const normalized = pathname.length > 1 && pathname.endsWith('/') ? pathname.slice(0, -1) : pathname;

  if (normalized === ROUTES.home) {
    return { seo: SEO_DATA.home, canonical: 'https://saphelon.com/', isNotFound: false };
  }
  if (normalized === ROUTES.about) {
    return { seo: SEO_DATA.about, canonical: 'https://saphelon.com/about', isNotFound: false };
  }
  if (normalized === ROUTES.services) {
    return { seo: SEO_DATA.services, canonical: 'https://saphelon.com/services', isNotFound: false };
  }
  if (normalized === ROUTES.industrialAutomation) {
    return { seo: SEO_DATA.industrialAutomation, canonical: 'https://saphelon.com/services/industrial-automation', isNotFound: false };
  }
  if (normalized === ROUTES.iiotIndustry40) {
    return { seo: SEO_DATA.iiotIndustry40, canonical: 'https://saphelon.com/services/iiot-industry-4-0', isNotFound: false };
  }
  if (normalized === ROUTES.artificialIntelligence) {
    return { seo: SEO_DATA.artificialIntelligence, canonical: 'https://saphelon.com/services/artificial-intelligence', isNotFound: false };
  }
  if (normalized === ROUTES.softwareSolutions) {
    return { seo: SEO_DATA.softwareSolutions, canonical: 'https://saphelon.com/services/software-solutions', isNotFound: false };
  }
  if (normalized === ROUTES.pharmaceuticalCsv || normalized === '/services/pharmaceutical-csv') {
    return { seo: SEO_DATA.pharmaceuticalCsv, canonical: 'https://saphelon.com/services/pharmaceutical-csv', isNotFound: false };
  }
  if (normalized === ROUTES.industries) {
    return { seo: SEO_DATA.industries, canonical: 'https://saphelon.com/industries', isNotFound: false };
  }
  if (normalized === ROUTES.approach) {
    return { seo: SEO_DATA.approach, canonical: 'https://saphelon.com/our-approach', isNotFound: false };
  }
  if (normalized === ROUTES.contact) {
    return { seo: SEO_DATA.contact, canonical: 'https://saphelon.com/contact', isNotFound: false };
  }
  if (normalized === ROUTES.privacyPolicy) {
    return { seo: SEO_DATA.privacyPolicy, canonical: 'https://saphelon.com/privacy-policy', isNotFound: false };
  }
  if (normalized === ROUTES.termsOfUse) {
    return { seo: SEO_DATA.termsOfUse, canonical: 'https://saphelon.com/terms-of-use', isNotFound: false };
  }
  if (normalized === ROUTES.guidelines) {
    return {
      seo: {
        title: 'Brand Guidelines | SAPHELON',
        description: 'Brand identity, typography, color palette, and official logo guidelines for SAPHELON LABS PRIVATE LIMITED.',
      },
      canonical: 'https://saphelon.com/guidelines',
      isNotFound: false,
    };
  }

  return { seo: SEO_DATA.notFound, canonical: `https://saphelon.com${normalized}`, isNotFound: true };
}

function setMetaTag(attrName: 'name' | 'property', attrValue: string, content: string): void {
  let element = document.querySelector(`meta[${attrName}="${attrValue}"]`) as HTMLMetaElement | null;
  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attrName, attrValue);
    document.head.appendChild(element);
  }
  element.setAttribute('content', content);
}

function setCanonicalTag(url: string): void {
  let element = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
  if (!element) {
    element = document.createElement('link');
    element.setAttribute('rel', 'canonical');
    document.head.appendChild(element);
  }
  element.setAttribute('href', url);
}

export const PageSeo: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const { seo, canonical, isNotFound } = getSeoForPath(pathname);

    // Update document title
    document.title = seo.title;

    // Update meta description
    setMetaTag('name', 'description', seo.description);

    // Update canonical URL
    setCanonicalTag(canonical);

    // Update Open Graph tags
    setMetaTag('property', 'og:title', seo.title);
    setMetaTag('property', 'og:description', seo.description);
    setMetaTag('property', 'og:url', canonical);

    // Update Twitter card tags
    setMetaTag('name', 'twitter:title', seo.title);
    setMetaTag('name', 'twitter:description', seo.description);

    // Set noindex for custom 404 routes, index for valid pages
    if (isNotFound) {
      setMetaTag('name', 'robots', 'noindex, follow');
    } else {
      setMetaTag('name', 'robots', 'index, follow');
    }
  }, [pathname]);

  return null;
};

export default PageSeo;
