"use client";

import { RefObject, useEffect } from "react";

export interface HeroRefs {
  imgRef:      RefObject<HTMLDivElement | null>;
  badgeRef:    RefObject<HTMLDivElement | null>;
  headlineRef: RefObject<HTMLDivElement | null>;
  lineRef:     RefObject<HTMLDivElement | null>;
  bodyRef:     RefObject<HTMLDivElement | null>;
  ctaRef:      RefObject<HTMLDivElement | null>;
}

export function useHeroAnimation(refs: HeroRefs) {
  const { imgRef, badgeRef, headlineRef, lineRef, bodyRef, ctaRef } = refs;

  useEffect(() => {
    let cancelled = false;

    (async () => {
      const { animate } = await import("animejs");
      if (cancelled) return;

      if (imgRef.current) {
        animate(imgRef.current, {
          opacity:  [0, 1],
          scale:    [1.06, 1],
          duration: 2200,
          easing:   "easeOutQuart",
        });
      }

      const sequence: Array<{
        el: HTMLDivElement | null;
        delay: number;
        translateY?: number[];
        scaleX?: number[];
      }> = [
        { el: badgeRef.current,    delay: 400,  translateY: [14, 0] },
        { el: headlineRef.current, delay: 680,  translateY: [22, 0] },
        { el: lineRef.current,     delay: 900,  scaleX:     [0, 1]  },
        { el: bodyRef.current,     delay: 1020, translateY: [14, 0] },
        { el: ctaRef.current,      delay: 1180, translateY: [14, 0] },
      ];

      sequence.forEach(({ el, delay, ...props }) => {
        if (!el) return;
        animate(el, {
          opacity:  [0, 1],
          duration: 900,
          delay,
          easing:   "easeOutQuart",
          ...props,
        });
      });
    })();

    return () => { cancelled = true; };
  }, [imgRef, badgeRef, headlineRef, lineRef, bodyRef, ctaRef]);
}