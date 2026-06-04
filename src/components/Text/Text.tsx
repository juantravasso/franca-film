import React from "react";

export type TextVariants =
  | "hero"
  | "heroHighlight"
  | "sectionTitle"
  | "heading"
  | "nav"
  | "cardTitle"
  | "body"
  | "small"
  | "caption"
  | "badge"
  | "logo";

type TextColors =
  | "textPrimary"
  | "textSecondary"
  | "textMuted"
  | "primary"
  | "background";

const fontStyles = {
  hero: {
    size: "text-[42px] leading-[48px] md:text-[64px] md:leading-[72px] lg:text-[82px] lg:leading-[88px]",
    color: "textPrimary",
  },

  heroHighlight: {
    size: "text-[42px] leading-[48px] md:text-[64px] md:leading-[72px] lg:text-[82px] lg:leading-[88px]",
    color: "primary",
  },

  sectionTitle: {
    size: "text-[30px] leading-[38px] md:text-[42px] md:leading-[50px]",
    color: "textPrimary",
  },

  heading: {
    size: "text-[24px] leading-[32px] md:text-[32px] md:leading-[40px]",
    color: "textPrimary",
  },

  nav: {
    size: "text-[12px] leading-[16px] tracking-[0.22em] uppercase",
    color: "textPrimary",
  },

  cardTitle: {
    size: "text-[16px] leading-[22px] md:text-[18px] md:leading-[24px]",
    color: "textPrimary",
  },

  body: {
    size: "text-[15px] leading-[26px] md:text-[16px] md:leading-[28px]",
    color: "textSecondary",
  },

  small: {
    size: "text-[13px] leading-[20px] md:text-[14px] md:leading-[22px]",
    color: "textSecondary",
  },

  caption: {
    size: "text-[12px] leading-[18px]",
    color: "textSecondary",
  },

  badge: {
    size: "text-[10px] leading-[14px] tracking-[0.35em] uppercase",
    color: "primary",
  },

  logo: {
    size: "text-[20px] leading-[24px] md:text-[28px] md:leading-[32px] tracking-[0.32em] uppercase",
    color: "textPrimary",
  },
};

const colorStyles: Record<TextColors, string> = {
  textPrimary: "text-text-primary",
  textSecondary: "text-text-secondary",
  textMuted: "text-text-muted",
  primary: "text-primary",
  background: "text-background",
};

interface TextProps extends React.HTMLAttributes<HTMLParagraphElement> {
  preset?: TextVariants;
  color?: TextColors;
  bold?: boolean;
  italic?: boolean;
  semiBold?: boolean;
  as?: "p" | "span" | "h1" | "h2" | "h3" | "strong";
}

export function Text({
  children,
  preset = "body",
  color,
  bold,
  italic,
  semiBold,
  as = "p",
  className = "",
  ...rest
}: TextProps) {
  const Component = as;
  const presetStyle = fontStyles[preset];

  const weightClass = bold
    ? "font-bold"
    : semiBold
    ? "font-semibold"
    : "font-normal";

  const italicClass = italic ? "italic" : "";
  const colorClass = colorStyles[color ?? (presetStyle.color as TextColors)];

  return (
    <Component
      {...rest}
      className={`${presetStyle.size} ${weightClass} ${italicClass} ${colorClass} ${className}`}
    >
      {children}
    </Component>
  );
}