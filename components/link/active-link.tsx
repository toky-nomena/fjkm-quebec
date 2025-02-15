"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import React from "react";
import { cn } from "@/lib/utils";

interface ActiveLinkProps {
  href: string;
  children: React.ReactNode;
  activeClassName?: string;
  className?: string;
}

export const ActiveLink: React.FC<ActiveLinkProps> = ({
  href,
  children,
  activeClassName,
  className,
}) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={cn(
        isActive ? activeClassName : "",
        isActive ? "text-primary" : "",
        className
      )}
    >
      {children}
    </Link>
  );
};

export default ActiveLink;
