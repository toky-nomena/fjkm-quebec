import { cn } from "@/lib/utils";
import type { ReactNode } from "react";
import { BlurFade } from "../magicui/blur-fade";

export interface TitleProps {
  children: ReactNode;
  className?: string;
}

export function Title({ children, className }: TitleProps) {
  return (
    <BlurFade direction="down">
      <h1
        className={cn(
          "text-4xl font-bold tracking-tight text-foreground sm:text-5xl",
          className
        )}
      >
        {children}
      </h1>
    </BlurFade>
  );
}
