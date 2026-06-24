import { RefObject } from "react";
import Image, { StaticImageData } from "next/image";

const GRAIN_SVG =
  "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")";

interface HeroBackgroundProps {
  imgRef: RefObject<HTMLDivElement | null>;
  src: StaticImageData;
  alt: string;
}

export function HeroBackground({ imgRef, src, alt }: HeroBackgroundProps) {
  return (
    <>
      <div ref={imgRef} className="absolute inset-0 opacity-0">
        <Image
          src={src}
          alt={alt}
          fill
          priority
          className="object-cover object-center"
          quality={90}
        />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-black/30" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-background/95 via-background/60 to-transparent" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-background/10" />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{ backgroundImage: GRAIN_SVG, backgroundSize: "180px" }}
      />
    </>
  );
}
