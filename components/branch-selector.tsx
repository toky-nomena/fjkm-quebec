"use client";

import { branches } from "@/components/branches/branches";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function BranchSelector() {
  const pathname = usePathname();

  return (
    <div className="flex flex-col items-center justify-center text-center">
      <div className="flex flex-wrap gap-3 overflow-visible items-center justify-center">
        {branches.map((branch) => {
          const isSelected = pathname === `/branches/${branch.slug}`;
          return (
            <Link
              key={branch.slug}
              href={`/branches/${branch.slug}`}
              className={`
                    inline-flex items-center px-4 py-2 rounded-full text-base font-medium
                    whitespace-nowrap overflow-hidden border transition-colors duration-300
                    ${
                      isSelected
                        ? "bg-primary text-primary-foreground border-primary"
                        : "text-muted-foreground border-muted-foreground"
                    }
                    branch-item ${isSelected ? "scale-up" : "scale-down"}
                  `}
            >
              <div className="relative flex items-center">
                <span>{branch.acronym}</span>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
