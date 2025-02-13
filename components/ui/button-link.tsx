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
        "inline-block relative p-px text-xs font-semibold leading-6 text-white no-underline rounded-md cursor-pointer bg-slate-900 group",
        props.className
      )}
    >
      <span className="overflow-hidden absolute inset-0 rounded-md">
        <span className="absolute inset-0 rounded-md bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
      </span>
      <div className="relative z-10 px-8 py-3 space-x-2 rounded-md ring-1 ring-white/10">
        <span className="flex items-center text-sm font-medium">
          {children}
        </span>
      </div>
      <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40"></span>
    </Link>
  );
};
