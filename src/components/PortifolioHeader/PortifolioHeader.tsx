"use client";

import { useEffect } from "react";
import { animate, stagger } from "animejs";

import { Box } from "@/src/components/Box/Box";
import { Text } from "@/src/components/Text/Text";

import { PortfolioHeaderProps } from "./PortifolioHeader.types";

export function PortfolioHeader({
  badge,
  title,
  description,
}: PortfolioHeaderProps) {
  useEffect(() => {
    animate(".portfolio-header-item", {
      opacity: [0, 1],
      y: [35, 0],
      filter: ["blur(12px)", "blur(0px)"],
      duration: 800,
      delay: stagger(140),
      ease: "outExpo",
    });

    animate(".portfolio-header-line", {
      scaleX: [0, 1],
      opacity: [0, 1],
      duration: 900,
      delay: 450,
      ease: "outExpo",
    });

    animate(".portfolio-header-glow", {
      scale: [0.8, 1],
      opacity: [0, 0.18],
      duration: 1200,
      ease: "outExpo",
    });
  }, []);

  return (
    <section className="relative overflow-hidden border-b border-dividing-lines bg-background py-16 md:py-24">
      <div className="portfolio-header-glow pointer-events-none absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary blur-[120px] opacity-0" />

      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

      <Box className="relative z-10 px-5 text-center md:px-10 lg:px-16">
        <Text
          preset="badge"
          bold
          className="portfolio-header-item inline-flex opacity-0"
        >
          {badge}
        </Text>

        <Text
          as="h1"
          preset="hero"
          bold
          className="portfolio-header-item mt-4 uppercase opacity-0"
        >
          {title}
        </Text>

        <div className="portfolio-header-line mx-auto mt-5 h-[2px] w-16 origin-center scale-x-0 rounded-full bg-primary opacity-0" />

        <Text
          preset="body"
          className="portfolio-header-item mx-auto mt-5 max-w-2xl opacity-0"
        >
          {description}
        </Text>
      </Box>
    </section>
  );
}