import { cn } from "@/lib/utils";
import Link from "next/link";
import type { ComponentProps } from "react";

export const ButtonLink = ({
  children,
  ...props
}: ComponentProps<typeof Link>) => {
  return (
    <Link
      {...props}
      className={cn(
        "inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-white transition-colors",
        props.className
      )}
    >
      {children}
    </Link>
  );
};
