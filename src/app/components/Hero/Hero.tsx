"use client";

import { useRef } from "react";
import { Box } from "@/src/components/Box/Box";
import heroImage from "@/src/assets/hero.png";
import { HeroRefs, useHeroAnimation } from "./hooks/Useheroanimation";
import { HeroBackground } from "./components/HeroBackground";
import { HeroContent } from "./components/HeroContent";

export function Hero() {
  const imgRef      = useRef<HTMLDivElement>(null);
  const badgeRef    = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLDivElement>(null);
  const lineRef     = useRef<HTMLDivElement>(null);
  const bodyRef     = useRef<HTMLDivElement>(null);
  const ctaRef      = useRef<HTMLDivElement>(null);

  const refs: HeroRefs = { imgRef, badgeRef, headlineRef, lineRef, bodyRef, ctaRef };
  useHeroAnimation(refs);

  return (
    <section
      id="inicio"
      className="relative flex min-h-screen w-full overflow-hidden bg-background"
    >
      <HeroBackground
        imgRef={imgRef}
        src={heroImage}
        alt="Filmmaker registrando um evento"
      />

      <Box className="relative z-10 flex min-h-screen flex-col justify-center px-5 pb-16 pt-20 md:px-10 lg:px-16">
        <HeroContent
          badgeRef={badgeRef}
          headlineRef={headlineRef}
          lineRef={lineRef}
          bodyRef={bodyRef}
          ctaRef={ctaRef}
        />
      </Box>
    </section>
  );
}
