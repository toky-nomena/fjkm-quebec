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
        "text-4xl font-bold tracking-tight text-foreground sm:text-5xl",
        className
      )}
    >
      {children}
    </h1>
  );
}
