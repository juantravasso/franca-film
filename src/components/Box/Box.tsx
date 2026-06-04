import { ReactNode } from "react";

interface BoxProps {
  children: ReactNode;
  className?: string;
}

export function Box({ children, className = "" }: BoxProps) {
  return (
    <div className={`mx-auto w-full max-w-7xl px-5 md:px-8 ${className}`}>
      {children}
    </div>
  );
}