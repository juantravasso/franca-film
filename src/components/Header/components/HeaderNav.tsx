"use client";

import Link from "next/link";
import { Text } from "@/src/components/Text/Text";

export interface NavItem {
  label: string;
  href: string;
  id: string;
}

export const navItems: NavItem[] = [
  { label: "Início",    href: "/#inicio",id: "inicio"    },
  { label: "Trabalhos", href: "/WorkPage",id: "trabalhos " },
  { label: "Fotos",     href: "/PhotosPage",id: "fotos"     },
  { label: "Vídeos",    href: "/VideosPage",id: "videos"    },
  { label: "Sobre",     href: "/#sobre",id: "sobre"     },
  { label: "Contato",   href: "/#contato",id: "contato"   },
];

interface HeaderNavProps {
  activeSection: string;
  pathname: string;
}

function isItemActive(
  item: NavItem,
  pathname: string,
  activeSection: string
): boolean {
  if (pathname !== "/") return pathname === item.href;
  return item.id === activeSection;
}

export function HeaderNav({ activeSection, pathname }: HeaderNavProps) {
  return (
    <nav className="hidden items-center gap-7 md:flex lg:gap-9" aria-label="Navegação principal">
      {navItems.map((item) => {
        const active = isItemActive(item, pathname, activeSection);
        return (
          <Link key={item.id} href={item.href} className="group relative py-1">
            <Text
              preset="nav"
              bold={active}
              className={
                active
                  ? "text-primary"
                  : "text-white/70 transition-colors duration-200 group-hover:text-white"
              }
            >
              {item.label}
            </Text>

            {/* underline indicator */}
            <span
              className={`absolute -bottom-1 left-0 h-px rounded-full bg-primary transition-all duration-300 ${
                active ? "w-full opacity-100" : "w-0 opacity-0 group-hover:w-full group-hover:opacity-100"
              }`}
            />
          </Link>
        );
      })}
    </nav>
  );
}
