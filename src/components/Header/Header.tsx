"use client";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { Box } from "@/src/components/Box/Box";
import { HeaderExternalLinks } from "./components/HeaderExternalLinks";
import { HeaderNav } from "./components/HeaderNav";
import { HeaderLogo } from "./components/HeaderLogo";
import { HeaderSocials } from "./components/HeaderSocials";
import { HeaderMobileMenu } from "./components/HeaderMobileMenu";

export function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("inicio");
  const [scrolled, setScrolled] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (pathname !== "/") return;

    const sections = document.querySelectorAll<HTMLElement>("section[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { threshold: 0.4, rootMargin: "-96px 0px -45% 0px" }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <header
      ref={headerRef}
      className={`fixed left-0 top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "border-b border-white/10 bg-black/60 shadow-[0_4px_32px_rgba(0,0,0,0.5)] backdrop-blur-2xl"
          : "border-b border-white/5 bg-transparent backdrop-blur-md"
      }`}
    >
      <Box className="flex h-20 w-full items-center justify-between px-5 md:px-10 lg:px-16">
        <HeaderLogo onClick={() => setMenuOpen(false)} />

        <HeaderNav activeSection={activeSection} pathname={pathname} />

        <div className="flex items-center gap-3">
          <HeaderExternalLinks />

          <span className="hidden h-4 w-px bg-white/10 lg:block" />

          <HeaderSocials />

          <button
            type="button"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={menuOpen}
            className="ml-1 flex h-9 w-9 items-center justify-center rounded-full text-white/70 ring-1 ring-white/10 transition hover:text-primary hover:ring-primary/30 md:hidden"
          >
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </Box>

      <HeaderMobileMenu
        isOpen={menuOpen}
        activeSection={activeSection}
        pathname={pathname}
        onClose={() => setMenuOpen(false)}
      />
    </header>
  );
}
