"use client";

import Image from "next/image";
import Link from "next/link";
import logoFrancaFilm from "@/src/assets/logoFrancafilm.png";

interface HeaderLogoProps {
  onClick?: () => void;
}

export function HeaderLogo({ onClick }: HeaderLogoProps) {
  return (
    <Link href="/#inicio" onClick={onClick} className="flex-shrink-0">
      <Image
        src={logoFrancaFilm}
        alt="Franca Film"
        width={160}
        height={60}
        priority
        className="h-auto w-[108px] object-contain md:w-[140px]"
      />
    </Link>
  );
}
