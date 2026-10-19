/**
 * ServiceCard component displaying an individual service offering with numbered badge,
 * title, summary description, and outbound action link.
 */

import React from 'react';
import { Link } from 'react-router-dom';
import styles from './ServiceCard.module.css';
import { AnimatedServiceIcon } from '../AnimatedServiceIcon';
import type { ServiceItem } from '../../types';

export interface ServiceCardProps {
  service: ServiceItem;
  index?: number;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ service, index = 0 }) => {
  return (
    <div className={`${styles.card} service-card`}>
      {service.imageUrl ? (
        <div className={styles.imageWrap}>
          <img
            src={service.imageUrl}
            alt={service.title}
            className={styles.serviceImg}
            loading="lazy"
          />
          <div className={styles.imageScrim} />
          <div className={styles.imageOverlayBar}>
            <AnimatedServiceIcon
              slug={service.slug || service.id}
              customIconUrl={service.animatedIconUrl}
              size={44}
              index={index}
            />
            <span className={styles.numberBadge}>{service.id}</span>
          </div>
        </div>
      ) : (
        <div className={styles.topRow}>
          <AnimatedServiceIcon
            slug={service.slug || service.id}
            customIconUrl={service.animatedIconUrl}
            size={52}
            index={index}
          />
          <div className={styles.number}>{service.id}</div>
        </div>
      )}
      <h3 className={styles.title}>{service.title}</h3>
      <p className={styles.description}>{service.description}</p>
      <Link to={service.href} className={styles.link}>
        {service.linkText}
      </Link>
    </div>
  );
};
