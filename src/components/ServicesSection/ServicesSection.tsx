/**
 * ServicesSection component rendering the core services offering grid and section header.
 */

import React from 'react';
import { Link } from 'react-router-dom';
import styles from './ServicesSection.module.css';
import { ServiceCard } from '../ServiceCard';
import { SERVICES_CONTENT, ROUTES } from '../../constants';

export const ServicesSection: React.FC = () => {
  return (
    <section id="services" className={styles.section} data-part="services">
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.intro}>
            <div className={styles.overline}>{SERVICES_CONTENT.overline}</div>
            <h2 className={styles.title}>{SERVICES_CONTENT.title}</h2>
            <p className={styles.subtitle}>{SERVICES_CONTENT.subtitle}</p>
          </div>
          <Link to={ROUTES.services} className={styles.exploreLink}>
            {SERVICES_CONTENT.exploreText}
          </Link>
        </div>

        <div className={styles.grid}>
          {SERVICES_CONTENT.items.map((service, idx) => (
            <ServiceCard key={service.id} service={service} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
};
