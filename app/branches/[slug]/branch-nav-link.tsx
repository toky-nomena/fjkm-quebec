"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface BranchNavLinkProps {
  branch: {
    slug: string;
    acronym: string;
  };
}

export function BranchNavLink({ branch }: BranchNavLinkProps) {
  const pathname = usePathname();
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
}
