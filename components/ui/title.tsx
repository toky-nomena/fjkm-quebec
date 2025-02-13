import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

export interface TitleProps {
  children: ReactNode;
  className?: string;
}

export function Title({ children, className }: TitleProps) {
  return (
    <h1
      className={cn(
        "w-full text-2xl font-bold tracking-tight text-foreground sm:text-3xl md:text-4xl lg:text-5xl",
        className
      )}
    >
      {children}
    </h1>
  );
}
