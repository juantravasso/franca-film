"use client";

import { FaInstagram, FaWhatsapp } from "react-icons/fa";

const socials = [
  {
    label: "WhatsApp",
    href: "https://wa.me/5521994553202",
    icon: <FaWhatsapp size={19} />,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/opaulofranca_/",
    icon: <FaInstagram size={19} />,
  },
];

export function HeaderSocials() {
  return (
    <div className="flex items-center gap-3">
      {socials.map(({ label, href, icon }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          className="flex h-8 w-8 items-center justify-center rounded-full text-white/60 ring-1 ring-white/10 transition-all duration-200 hover:text-primary hover:ring-primary/40"
        >
          {icon}
        </a>
      ))}
    </div>
  );
}
