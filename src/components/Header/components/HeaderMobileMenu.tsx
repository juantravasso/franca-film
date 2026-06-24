"use client";

import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { Text } from "@/src/components/Text/Text";
import { navItems, NavItem } from "./HeaderNav";

interface HeaderMobileMenuProps {
  isOpen: boolean;
  activeSection: string;
  pathname: string;
  onClose: () => void;
}

function isItemActive(
  item: NavItem,
  pathname: string,
  activeSection: string
): boolean {
  if (pathname !== "/") return pathname === item.href;
  return item.id === activeSection;
}

const externalLinks = [
  { label: "Banlek",       href: "https://banlek.com.br" },
  { label: "Foco Radical", href: "https://focoradical.com.br" },
];

export function HeaderMobileMenu({
  isOpen,
  activeSection,
  pathname,
  onClose,
}: HeaderMobileMenuProps) {
  if (!isOpen) return null;

  return (
    <div
      className="absolute left-0 top-full z-50 w-full border-t border-white/10 bg-black/80 backdrop-blur-2xl md:hidden"
      role="dialog"
      aria-label="Menu de navegação"
    >
      <nav className="flex flex-col px-6 py-6" aria-label="Menu mobile">
        {navItems.map((item) => {
          const active = isItemActive(item, pathname, activeSection);
          return (
            <Link
              key={item.id}
              href={item.href}
              onClick={onClose}
              className={`flex items-center border-b border-white/5 py-4 transition-colors duration-150 ${
                active ? "text-primary" : "text-white/70 hover:text-white"
              }`}
            >
              <Text preset="nav" bold={active}>
                {item.label}
              </Text>
              {active && (
                <span className="ml-2 h-1 w-1 rounded-full bg-primary" />
              )}
            </Link>
          );
        })}

        {/* External links */}
        <div className="mt-6 flex flex-col gap-3">
          <p className="text-[10px] font-semibold uppercase tracking-widest text-white/30">
            Parceiros
          </p>
          {externalLinks.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              onClick={onClose}
              className="flex items-center gap-2 text-sm text-white/50 transition hover:text-primary"
            >
              <ExternalLink size={13} />
              {label}
            </a>
          ))}
        </div>

        {/* Socials */}
        <div className="mt-6 flex items-center gap-4 border-t border-white/5 pt-6">
          <a
            href="https://wa.me/5521994553202"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="text-white/50 transition hover:text-primary"
          >
            <FaWhatsapp size={20} />
          </a>
          <a
            href="https://www.instagram.com/opaulofranca_/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="text-white/50 transition hover:text-primary"
          >
            <FaInstagram size={20} />
          </a>
        </div>
      </nav>
    </div>
  );
}
