"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import React from "react";

type ButtonVariant = "primary" | "outline";

interface ButtonProps {
  title: string;
  href?: string;
  onClick?: () => void;
  variant?: ButtonVariant;
  fullWidth?: boolean;
  showIcon?: boolean;
  className?: string;
}

export function Button({
  title,
  href,
  onClick,
  variant = "outline",
  fullWidth = false,
  showIcon = true,
  className = "",
}: ButtonProps) {
  const styles = {
    primary: `
      bg-primary
      text-background
      border-primary
      hover:bg-primary-dark
    `,
    outline: `
      border-primary
      text-text-primary
      hover:bg-primary
      hover:text-background
    `,
  };

  const content = (
    <span
      className={`
        group
        inline-flex
        h-12
        items-center
        justify-center
        gap-3
        border
        px-6
        transition-all
        duration-300
        md:h-14
        md:px-8
        ${styles[variant]}
        ${fullWidth ? "w-full" : ""}
        ${className}
      `}
    >
      <span className="text-[11px] font-semibold uppercase tracking-[0.25em]">
        {title}
      </span>

      {showIcon && (
        <ArrowRight
          size={16}
          className="transition-transform duration-300 group-hover:translate-x-1"
        />
      )}
    </span>
  );

  if (href) {
    return <Link href={href}>{content}</Link>;
  }

  return (
    <button type="button" onClick={onClick}>
      {content}
    </button>
  );
}