/**
 * PipelineSection component rendering the 4-step "From Plant Floor to Decision"
 * connected pipeline (Control -> Connect -> Visualise -> Analyse).
 * Source: SAPHELON-Content-Master.md Section 1 home.pipeline.
 */

import React from 'react';
import styles from './PipelineSection.module.css';
import { HOME_CONTENT } from '../../constants';

export const PipelineSection: React.FC = () => {
  const { pipeline } = HOME_CONTENT;

  return (
    <section className={styles.section} data-part="pipeline">
      <div className={styles.container}>
        <div className={styles.headerRow}>
          <div className={styles.header}>
            <div className={styles.overline}>{pipeline.eyebrow}</div>
            <h2 className={styles.title}>{pipeline.title}</h2>
            <p className={styles.subtitle}>{pipeline.subtitle}</p>
          </div>

          <div className={styles.infraPreviewCard}>
            <img
              src="/images/iiot-smart-factory.jpg"
              alt="Connected IIoT smart factory infrastructure and robotic automation cell"
              className={styles.infraImg}
              loading="lazy"
            />
            <div className={styles.infraBadge}>
              <span className={styles.badgePulse} />
              <span>Plant Floor Telemetry Active</span>
            </div>
          </div>
        </div>

        <div className={styles.pipelineGrid}>
          {pipeline.steps.map((step) => (
            <div key={step.id} className={styles.stepCard}>
              <div className={styles.marker}>{step.id}</div>
              <h3 className={styles.stepName}>{step.name}</h3>
              <p className={styles.stepDesc}>{step.description}</p>
            </div>
          ))}
        </div>

        <div className={styles.footerNote}>{pipeline.note}</div>
      </div>
    </section>
  );
};
