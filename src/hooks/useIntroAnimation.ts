/**
 * Custom React hook for controlling the opening S-mark brand dock animation.
 * Faithfully ports the RAF Web Animations API sequence from the original design.
 */

import { useState, useEffect, useRef, useCallback } from 'react';

export function useIntroAnimation(enabled: boolean = true) {
  const [isPlaying, setIsPlaying] = useState<boolean>(enabled);
  const timeoutRef = useRef<number | null>(null);

  // References to DOM elements that coordinate in the animation
  const navMarkRef = useRef<SVGSVGElement | null>(null);
  const navWordRef = useRef<HTMLSpanElement | null>(null);
  const navLinksRef = useRef<HTMLDivElement | null>(null);
  const heroContentRef = useRef<HTMLDivElement | null>(null);

  const ovBgRef = useRef<HTMLDivElement | null>(null);
  const ovMarkRef = useRef<HTMLDivElement | null>(null);
  const ovRingsRef = useRef<SVGSVGElement | null>(null);

  const finishIntro = useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setIsPlaying(false);
  }, []);

  useEffect(() => {
    if (!isPlaying) return;

    const prefersReducedMotion =
      window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
      setIsPlaying(false);
      return;
    }

    const frameId = requestAnimationFrame(() => {
      const mk = ovMarkRef.current;
      const nav = navMarkRef.current;
      const bg = ovBgRef.current;
      const rg = ovRingsRef.current;

      if (!mk || !nav || !bg || !rg) {
        setIsPlaying(false);
        return;
      }

      window.scrollTo(0, 0);

      const easeOut = 'cubic-bezier(.16, 1, .3, 1)';
      const easeInOut = 'cubic-bezier(.65, 0, .35, 1)';

      // 1. Expand rings
      const rects = rg.querySelectorAll('rect');
      rects.forEach((r, i) => {
        r.animate(
          [
            { transform: 'scale(0.12)', opacity: 0 },
            { transform: 'scale(1)', opacity: 1 },
          ],
          {
            duration: 1000,
            delay: i * 65,
            easing: easeOut,
            fill: 'both',
          }
        );
      });

      // 2. Mark pop in center
      mk.animate(
        [
          { transform: 'translate(-50%, -50%) scale(0.15)', opacity: 0 },
          { transform: 'translate(-50%, -50%) scale(1)', opacity: 1 },
        ],
        {
          duration: 900,
          delay: 120,
          easing: easeOut,
          fill: 'both',
        }
      );

      // 3. Mark translate & scale down into navbar mark position
      const navRect = nav.getBoundingClientRect();
      const dx = navRect.left + navRect.width / 2 - window.innerWidth / 2;
      const dy = navRect.top + navRect.height / 2 - window.innerHeight / 2;
      const scaleRatio = navRect.height / 192;

      mk.animate(
        [
          { transform: 'translate(-50%, -50%) scale(1)' },
          {
            transform: `translate(-50%, -50%) translate(${dx}px, ${dy}px) scale(${scaleRatio})`,
          },
        ],
        {
          duration: 850,
          delay: 1450,
          easing: easeInOut,
          fill: 'forwards',
        }
      );

      mk.animate([{ opacity: 1 }, { opacity: 0 }], {
        duration: 120,
        delay: 2300,
        fill: 'forwards',
      });

      // 4. Background overlay fades out
      bg.animate([{ opacity: 1 }, { opacity: 0 }], {
        duration: 500,
        delay: 1850,
        easing: 'ease',
        fill: 'forwards',
      });

      // 5. Navbar mark appears
      nav.animate([{ opacity: 0 }, { opacity: 1 }], {
        duration: 120,
        delay: 2300,
        fill: 'both',
      });

      // 6. Navbar wordmark and links cascade in
      const navElements = [navWordRef.current, navLinksRef.current];
      navElements.forEach((el, i) => {
        if (el) {
          el.animate(
            [
              { opacity: 0, transform: 'translateY(-6px)' },
              { opacity: 1, transform: 'none' },
            ],
            {
              duration: 600,
              delay: 2250 + i * 120,
              easing: easeOut,
              fill: 'both',
            }
          );
        }
      });

      // 7. Hero content cascades up
      const hc = heroContentRef.current;
      if (hc) {
        Array.from(hc.children).forEach((child, i) => {
          (child as HTMLElement).animate(
            [
              { opacity: 0, transform: 'translateY(20px)' },
              { opacity: 1, transform: 'none' },
            ],
            {
              duration: 800,
              delay: 2150 + i * 110,
              easing: easeOut,
              fill: 'both',
            }
          );
        });
      }

      timeoutRef.current = window.setTimeout(() => {
        setIsPlaying(false);
      }, 2650);
    });

    return () => {
      cancelAnimationFrame(frameId);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [isPlaying]);

  return {
    isPlaying,
    finishIntro,
    navMarkRef,
    navWordRef,
    navLinksRef,
    heroContentRef,
    ovBgRef,
    ovMarkRef,
    ovRingsRef,
  };
}
