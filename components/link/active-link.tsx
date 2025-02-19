"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { ComponentProps, FC } from "react";
import { cn } from "@/lib/utils";

interface ActiveLinkProps extends ComponentProps<typeof Link> {
  href: string;
  activeClassName?: string;
}

export const ActiveLink: FC<ActiveLinkProps> = ({
  href,
  activeClassName,
  className,
  ...props
}) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      {...props}
      className={cn(
        isActive ? activeClassName : "",
        isActive ? "text-primary" : "",
        className
      )}
    />
  );
};

export default ActiveLink;
