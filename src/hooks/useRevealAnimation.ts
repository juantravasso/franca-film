"use client";

import { useEffect } from "react";
import { animate, stagger } from "animejs";

interface UseRevealAnimationProps {
  selector: string;
  delay?: number;
}

export function useRevealAnimation({
  selector,
  delay = 120,
}: UseRevealAnimationProps) {
  useEffect(() => {
    animate(selector, {
      opacity: [0, 1],
      scale: [1.18, 1],
      y: [35, 0],
      rotate: [4, 0],
      filter: ["blur(14px)", "blur(0px)"],
      duration: 700,
      delay: stagger(delay),
      ease: "outExpo",
    });
  }, [selector, delay]);
}