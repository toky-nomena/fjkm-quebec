"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { branches } from "@/components/branches/branches";
import { cn } from "@/lib/utils";

export function BranchNavLink() {
  const pathname = usePathname();

  return (
    <div className="flex sticky top-24 z-50 justify-center px-8">
      <nav
        className={cn(
          "overflow-x-auto", // Enable horizontal scroll
          "no-scrollbar", // Hide scrollbar
          "inline-flex items-center h-14",
          "rounded-full",
          "backdrop-blur-md bg-background/90 supports-[backdrop-filter]:bg-background/60",
          "px-4 space-x-2",
          "shadow-sm"
        )}
      >
        {branches.map((branch) => {
          const isActive = `/branches/${branch.slug}` === pathname;
          return (
            <Link
              href={`/branches/${branch.slug}`}
              key={branch.slug}
              className={cn(
                "flex flex-shrink-0 items-center px-4 h-10 text-sm font-medium rounded-full",
                "transition-all duration-300 ease-in-out",
                isActive
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground",
                "text-xs sm:text-sm"
              )}
            >
              {branch.acronym}
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
