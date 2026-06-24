"use client";

import { ExternalLink } from "lucide-react";

const externalLinks = [
  { label: "Banlek",        href: "https://banlek.com/opaulofranca_?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQPOTM2NjE5NzQzMzkyNDU5AAGnNSixZN-wq2V2R9z_GxM8Bkj77XBMMVvqr5m69EAy4E0LAVuvHnXcwXdTfTI_aem_YyYf6P6ZT8gqP0zP5Zm3iA" },
  { label: "Foco Radical",  href: "https://pao.focoradical.com.br/?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQPOTM2NjE5NzQzMzkyNDU5AAGn1oCp00FL54VT8wg9ej0gOp50aPu8bZBjvhNHU6AxsvOdpqzWjX-u_aOB8k8_aem_J8Rn5WKOnm_dwlI-zEzZQA" },
];

export function HeaderExternalLinks() {
  return (
    <div className="hidden items-center gap-2 lg:flex">
      {externalLinks.map(({ label, href }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-1 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-medium uppercase tracking-widest text-white/50 transition-all duration-200 hover:border-primary/30 hover:bg-primary/10 hover:text-primary"
        >
          {label}
          <ExternalLink
            size={10}
            className="opacity-0 transition-opacity duration-200 group-hover:opacity-100"
          />
        </a>
      ))}
    </div>
  );
}
