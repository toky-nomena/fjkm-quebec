import BranchSelector from "@/components/branch-selector";
import { ReactNode } from "react";

export default function BranchLayout({ children }: { children: ReactNode }) {
  return (
    <section className="flex flex-col justify-center items-center py-8 space-y-8">
      <BranchSelector />
      <div className="py-4">{children}</div>
    </section>
  );
}
