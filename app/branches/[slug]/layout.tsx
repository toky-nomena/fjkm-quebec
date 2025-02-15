import { ReactNode, Suspense } from "react";
import BranchSelector from "./branch-selector";

export default function BranchLayout({ children }: { children: ReactNode }) {
  return (
    <section className="flex flex-col justify-center items-center py-8 space-y-8">
      <div className="py-4">{children}</div>
      <Suspense>
        <BranchSelector />
      </Suspense>
    </section>
  );
}
