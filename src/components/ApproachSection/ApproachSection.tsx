/**
 * ApproachSection component showcasing the 4-step delivery process:
 * Understand -> Design -> Implement -> Support.
 * Features one-by-one entrance animation, auto-progressing interactive timeline,
 * connecting laser beam, deliverable milestones, and pause/play control.
 */

import React, { useState, useEffect, useRef } from 'react';
import styles from './ApproachSection.module.css';
import { Button } from '../Button';
import { APPROACH_CONTENT } from '../../constants';
import { cn } from '../../utils';

const STEP_METADATA = [
  {
    badge: 'Discovery Phase',
    deliverable: 'Requirement Traceability Matrix',
    summary: 'Discuss constraints, audit legacy systems, map data flows & define success criteria.',
  },
  {
    badge: 'Architecture Phase',
    deliverable: 'Approved Functional Design (FDS)',
    summary: 'Plan hardware/software topology, specify components, and draft validation matrices.',
  },
  {
    badge: 'Execution Phase',
    deliverable: 'FAT & SAT Verified System',
    summary: 'Program automation logic, build software pipelines, and conduct rigorous on-site tests.',
  },
  {
    badge: 'Lifecycle Phase',
    deliverable: 'Commissioning Handover & SLA',
    summary: 'Deliver validation dossier, train plant operators, and maintain long-term reliability.',
  },
];

export const ApproachSection: React.FC = () => {
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  // Trigger entrance animation when scrolled into view
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Auto-progress through the 4 steps one-by-one every 4 seconds
  useEffect(() => {
    if (!isPlaying || !isInView) return;

    const timer = setInterval(() => {
      setActiveStepIndex((prev) => (prev + 1) % APPROACH_CONTENT.steps.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [isPlaying, isInView]);

  const handleStepClick = (index: number) => {
    setActiveStepIndex(index);
    setIsPlaying(false); // Pause auto-progress when user manually interacts
  };

  const progressPercentage = (activeStepIndex / (APPROACH_CONTENT.steps.length - 1)) * 100;

  return (
    <section
      ref={sectionRef}
      id="approach"
      className={styles.section}
      data-part="band"
    >
      <div className={styles.ambientGlow} aria-hidden="true" />

      <div className={styles.container}>
        {/* Header Row */}
        <div className={styles.headerRow}>
          <div className={styles.headerText}>
            <div className={styles.overline}>OUR DELIVERY PROCESS</div>
            <h2 className={styles.title}>{APPROACH_CONTENT.title}</h2>
            <p className={styles.description}>{APPROACH_CONTENT.description}</p>
          </div>

          <div className={styles.headerActions}>
            <div className={styles.controlsWrap}>
              <button
                type="button"
                className={styles.playPauseBtn}
                onClick={() => setIsPlaying(!isPlaying)}
                title={isPlaying ? 'Pause Process Tour' : 'Resume Process Tour'}
                aria-label={isPlaying ? 'Pause Process Tour' : 'Resume Process Tour'}
              >
                {isPlaying ? '⏸' : '▶'}
              </button>
              <span className={styles.stepCounter}>
                0{activeStepIndex + 1} / 0{APPROACH_CONTENT.steps.length}
              </span>
            </div>

            <Button
              href={APPROACH_CONTENT.ctaHref}
              variant="approach"
              hasArrow
            >
              {APPROACH_CONTENT.ctaText}
            </Button>
          </div>
        </div>

        {/* 4 Connected Process Stations */}
        <div className={styles.timelineTrack} role="tablist">
          {/* Connecting Laser Line across steps */}
          <div className={styles.connectingLine} aria-hidden="true">
            <div
              className={styles.connectingLineActive}
              style={{ width: `${progressPercentage}%` }}
            />
          </div>

          {APPROACH_CONTENT.steps.map((step, idx) => {
            const meta = STEP_METADATA[idx] || STEP_METADATA[0];
            const isActive = activeStepIndex === idx;

            return (
              <div
                key={step.id}
                role="tab"
                tabIndex={0}
                aria-selected={isActive}
                onClick={() => handleStepClick(idx)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    handleStepClick(idx);
                  }
                }}
                className={cn(
                  styles.stepCard,
                  isInView && styles.animateIn,
                  isActive && styles.stepCardActive
                )}
                style={{
                  animationDelay: `${idx * 160}ms`,
                }}
              >
                <div className={styles.topRow}>
                  <div className={styles.stepCircle}>{step.id}</div>
                  <span className={styles.stageBadge}>{meta.badge}</span>
                </div>

                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepDescription}>{meta.summary}</p>

                <div className={styles.deliverablePill}>
                  <span className={styles.pillIcon} aria-hidden="true">◆</span>
                  <span>{meta.deliverable}</span>
                </div>

                {isActive && <div className={styles.cardProgressBar} />}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
