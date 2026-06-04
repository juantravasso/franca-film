"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";

import logoFrancaFilm from "../../../src/assets/logoFrancafilm.png";

import { Box } from "@/src/components/Box/Box";
import { Text } from "@/src/components/Text/Text";

const navItems = [
  { label: "Início", href: "/#inicio", id: "inicio" },
  { label: "Trabalhos", href: "/WorkPage", id: "WorkPage" },
  { label: "Fotos", href: "/PhotosPage", id: "PhotosPage" },
  { label: "Vídeos", href: "/VideosPage", id: "VideosPage" },
  { label: "Sobre", href: "/#sobre", id: "sobre" },
  { label: "Contato", href: "/#contato", id: "contato" },
];

export function Header() {
  const pathname = usePathname();

  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("inicio");

  useEffect(() => {
    if (pathname !== "/") return;

    const sections = document.querySelectorAll("section[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.4,
        rootMargin: "-96px 0px -45% 0px",
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, [pathname]);

  function isItemActive(item: (typeof navItems)[number]) {
  if (pathname !== "/") {
    return pathname === item.href;
  }

  return item.id === activeSection;
}

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-white/20 bg-transparent">
      <Box className="flex h-24 w-full items-center justify-between px-5 md:px-10 lg:px-16">
        <Link href="/#inicio" onClick={() => setMenuOpen(false)}>
          <Image
            src={logoFrancaFilm}
            alt="Franca Film"
            width={160}
            height={60}
            priority
            className="h-auto w-[112px] object-contain md:w-[150px]"
          />
        </Link>

        <nav className="hidden items-center gap-8 md:flex lg:gap-10">
          {navItems.map((item) => {
            const isActive = isItemActive(item);

            return (
              <Link key={item.id} href={item.href} className="group relative">
                <Text
                  preset="nav"
                  bold={isActive}
                  className={
                    isActive
                      ? "text-primary"
                      : "text-text-primary/80 group-hover:text-primary"
                  }
                >
                  {item.label}
                </Text>

                <span
                  className={`absolute -bottom-3 left-0 h-[2px] rounded-full bg-primary transition-all duration-300 ${
                    isActive ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-4">
          <a
            href="https://wa.me/5521994553202"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="text-text-primary transition hover:text-primary"
          >
            <FaWhatsapp size={22} />
          </a>

          <a
            href="https://www.instagram.com/opaulofranca_/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="text-text-primary transition hover:text-primary"
          >
            <FaInstagram size={22} />
          </a>

          <button
            type="button"
            onClick={() => setMenuOpen((prev) => !prev)}
            className="text-text-primary transition hover:text-primary md:hidden"
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </Box>

      {menuOpen && (
        <nav className="absolute left-0 top-24 z-50 flex w-full flex-col gap-6 border-t border-white/10 bg-background/95 px-6 py-8 shadow-xl backdrop-blur-xl md:hidden">
          {navItems.map((item) => {
            const isActive = isItemActive(item);

            return (
              <Link
                key={item.id}
                href={item.href}
                onClick={() => setMenuOpen(false)}
              >
                <Text
                  preset="nav"
                  bold={isActive}
                  className={
                    isActive
                      ? "text-primary"
                      : "text-text-primary hover:text-primary"
                  }
                >
                  {item.label}
                </Text>
              </Link>
            );
          })}
        </nav>
      )}
    </header>
  );
}