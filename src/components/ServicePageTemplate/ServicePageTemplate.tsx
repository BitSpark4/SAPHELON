/**
 * ServicePageTemplate component providing the 8-part standardized layout
 * for all five SAPHELON service detail pages.
 * Source: SAPHELON-Content-Plan.md Section 5.
 */

import React, { useState } from 'react';
import styles from './ServicePageTemplate.module.css';
import { PageHero } from '../PageHero';
import { Button } from '../Button';
import { ApproachSection } from '../ApproachSection';
import { AnimatedServiceIcon } from '../AnimatedServiceIcon';
import { ROUTES, SERVICES_REGISTRY } from '../../constants';
import { cn } from '../../utils';
import type { ServiceDetailContent } from '../../types';

export interface ServicePageTemplateProps {
  service: ServiceDetailContent;
}

export const ServicePageTemplate: React.FC<ServicePageTemplateProps> = ({ service }) => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const matchedRegistry = SERVICES_REGISTRY.find((s) => s.slug === service.slug);
  const serviceImageUrl = service.imageUrl || matchedRegistry?.imageUrl;

  const breadcrumbs = [
    { label: 'Home', href: ROUTES.home },
    { label: 'Services', href: ROUTES.services },
    { label: `${service.title}${service.titleAccent}` },
  ];

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <article className={styles.wrapper}>
      {/* 1. Page Hero */}
      <PageHero
        breadcrumbs={breadcrumbs}
        eyebrow={service.eyebrow}
        title={service.title}
        titleAccent={service.titleAccent}
      />

      {/* 2. Promise Banner & Intro */}
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.promiseBanner}>
            <div className={styles.promiseContent}>
              <div className={styles.promiseHeaderRow}>
                <AnimatedServiceIcon slug={service.slug} size={56} />
                <div className={styles.promiseHeading}>{service.promise}</div>
              </div>
              <p className={styles.introText}>{service.intro}</p>
            </div>
            {serviceImageUrl && (
              <div className={styles.serviceHeroMedia}>
                <img
                  src={serviceImageUrl}
                  alt={`${service.title}${service.titleAccent} engineering environment`}
                  className={styles.serviceHeroImg}
                  loading="lazy"
                />
                <div className={styles.serviceHeroScrim} />
              </div>
            )}
          </div>

          {/* Principles if defined (e.g. AI or IIoT) */}
          {service.principles && service.principles.length > 0 && (
            <div className={styles.principlesList}>
              {service.principles.map((pr, idx) => (
                <div key={idx} className={styles.principleItem}>
                  {pr}
                </div>
              ))}
            </div>
          )}

          {/* 3. What We Do: Subsections (e.g. IIoT Connect & Use) or Areas Grid */}
          <div className={styles.sectionHeader}>
            <div className={styles.sectionOverline}>CAPABILITIES</div>
            <h2 className={styles.sectionTitle}>{service.areasHeading}</h2>
          </div>

          {service.subSections && service.subSections.length > 0 ? (
            <div>
              {service.subSections.map((sub, sIdx) => (
                <div key={sIdx} className={styles.subSection}>
                  <div className={styles.subSectionHeader}>
                    <h3 className={styles.subSectionTitle}>{sub.heading}</h3>
                    {sub.subheading && (
                      <p className={styles.subSectionSubtitle}>{sub.subheading}</p>
                    )}
                  </div>
                  <div className={styles.areasGrid}>
                    {sub.items.map((item, iIdx) => (
                      <div key={iIdx} className={styles.areaCard}>
                        <div className={styles.areaNumber}>
                          {String(iIdx + 1).padStart(2, '0')}
                        </div>
                        <h4 className={styles.areaTitle}>{item.title}</h4>
                        <p className={styles.areaDesc}>{item.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className={styles.areasGrid}>
              {service.areas.map((item, idx) => (
                <div key={idx} className={styles.areaCard}>
                  <div className={styles.areaNumber}>
                    {String(idx + 1).padStart(2, '0')}
                  </div>
                  <h3 className={styles.areaTitle}>{item.title}</h3>
                  <p className={styles.areaDesc}>{item.description}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* 4. Deliverables & Outcomes Split Section */}
      <section className={styles.altSection}>
        <div className={styles.container}>
          <div className={styles.splitGrid}>
            {/* Typical Deliverables */}
            <div className={styles.deliverablesBox}>
              <h3 className={styles.boxTitle}>{service.deliverablesHeading}</h3>
              {service.deliverablesNote && (
                <p className={styles.boxNote}>{service.deliverablesNote}</p>
              )}
              <ul className={styles.checkList}>
                {service.deliverables.map((d, dIdx) => (
                  <li key={dIdx} className={styles.checkItem}>
                    <span className={styles.checkIcon} aria-hidden="true">✓</span>
                    <span>{d}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Outcomes We Aim For */}
            <div className={styles.outcomesBox}>
              <h3 className={styles.boxTitle}>{service.outcomesHeading}</h3>
              <p className={styles.boxNote}>Strategic outcomes driven by reliable execution:</p>
              <ul className={styles.checkList}>
                {service.outcomes.map((o, oIdx) => (
                  <li key={oIdx} className={styles.checkItem}>
                    <span className={styles.checkIcon} aria-hidden="true">→</span>
                    <span>{o}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Standards & Scope Notices (e.g. for CSV GAMP 5 & 21 CFR Part 11) */}
          {(service.standardsNote || (service.scopeNotes && service.scopeNotes.length > 0)) && (
            <div className={styles.standardsNotice}>
              {service.standardsNote && (
                <p style={{ margin: '0 0 12px 0' }}>
                  <strong>Framework Alignment: </strong>
                  {service.standardsNote}
                </p>
              )}
              {service.scopeNotes &&
                service.scopeNotes.map((sn, sIdx) => (
                  <p key={sIdx} style={{ margin: sIdx === 0 ? '0' : '8px 0 0 0' }}>
                    {sn}
                  </p>
                ))}
            </div>
          )}
        </div>
      </section>

      {/* 5. Shared 4-Phase Engagement Strip */}
      <ApproachSection />

      {/* 6. Frequently Asked Questions Accordion */}
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <div className={styles.sectionOverline}>COMMON QUESTIONS</div>
            <h2 className={styles.sectionTitle}>{service.faqHeading}</h2>
          </div>

          <div className={styles.faqList}>
            {service.faq.map((item, fIdx) => {
              const isExpanded = openFaqIndex === fIdx;

              return (
                <div key={fIdx} className={styles.faqItem}>
                  <button
                    type="button"
                    className={cn(
                      styles.faqQuestion,
                      isExpanded && styles.faqQuestionExpanded
                    )}
                    onClick={() => toggleFaq(fIdx)}
                    aria-expanded={isExpanded}
                  >
                    <span>{item.question}</span>
                    <span className={styles.faqToggle} aria-hidden="true">
                      {isExpanded ? '−' : '+'}
                    </span>
                  </button>

                  {isExpanded && (
                    <div className={styles.faqAnswer}>
                      <p style={{ margin: 0 }}>{item.answer}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 7. Contextual Closing CTA Banner */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaContainer}>
          <h2 className={styles.ctaTitle}>{service.ctaHeading}</h2>
          <p className={styles.ctaText}>{service.ctaText}</p>
          <Button href={ROUTES.contact} size="lg" variant="primary" hasArrow>
            {service.ctaButtonText}
          </Button>
        </div>
      </section>
    </article>
  );
};
