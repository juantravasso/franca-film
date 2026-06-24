import { RefObject } from "react";
import { ExternalLink } from "lucide-react";
import { Text } from "@/src/components/Text/Text";
import { Button } from "@/src/components/Button/Button";

const externalLinks = [
  { label: "Banlek",       href: "https://banlek.com/opaulofranca_?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQPOTM2NjE5NzQzMzkyNDU5AAGnNSixZN-wq2V2R9z_GxM8Bkj77XBMMVvqr5m69EAy4E0LAVuvHnXcwXdTfTI_aem_YyYf6P6ZT8gqP0zP5Zm3iA" },
  { label: "Foco Radical", href: "https://pao.focoradical.com.br/?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQPOTM2NjE5NzQzMzkyNDU5AAGn1oCp00FL54VT8wg9ej0gOp50aPu8bZBjvhNHU6AxsvOdpqzWjX-u_aOB8k8_aem_J8Rn5WKOnm_dwlI-zEzZQA" },
];

interface HeroContentProps {
  badgeRef:    RefObject<HTMLDivElement | null>;
  headlineRef: RefObject<HTMLDivElement | null>;
  lineRef:     RefObject<HTMLDivElement | null>;
  bodyRef:     RefObject<HTMLDivElement | null>;
  ctaRef:      RefObject<HTMLDivElement | null>;
}

export function HeroContent({
  badgeRef,
  headlineRef,
  lineRef,
  bodyRef,
  ctaRef,
}: HeroContentProps) {
  return (
    <div className="w-full max-w-[680px]">

      <div ref={badgeRef} className="opacity-0">
        <Text
          preset="badge"
          bold
          className="mb-5 mt-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-[11px] uppercase tracking-[0.18em] text-white/50 backdrop-blur-sm"
        >
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary" />
          Fotografia &amp; Filmagem de Eventos
        </Text>
      </div>
      <div ref={headlineRef} className="opacity-0">
        <h1 className="font-display leading-[1.04] tracking-tight">
          <span className="block text-[clamp(3rem,8vw,6rem)] font-bold text-white">
            Registrando
          </span>
          <span className="block text-[clamp(3rem,8vw,6rem)] font-light text-white/75">
            momentos reais
            <span className="font-bold text-primary">.</span>
          </span>
        </h1>
      </div>

      <div
        ref={lineRef}
        className="mt-7 h-[2px] w-16 origin-left rounded-full bg-primary opacity-0"
      />

      <div ref={bodyRef} className="opacity-0">
        <Text preset="body" className="mt-6 max-w-[440px] leading-relaxed text-white/55">
          Transformo momentos em imagens e histórias que permanecem para sempre.
        </Text>
      </div>

      <div
        ref={ctaRef}
        className="mt-9 flex flex-col gap-4 opacity-0 sm:flex-row sm:items-center"
      >
        <Button title="Ver Trabalhos" href="/WorkPage" />

        <div className="flex items-center gap-4">
          {externalLinks.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-1.5 text-[12px] font-medium uppercase tracking-widest text-white/35 transition-colors duration-200 hover:text-white/70"
            >
              {label}
              <ExternalLink
                size={11}
                className="opacity-0 transition-opacity group-hover:opacity-100"
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
