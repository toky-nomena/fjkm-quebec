import { ReactNode, Suspense } from "react";
import BranchSelector from "./branch-selector";

export default function BranchLayout({ children }: { children: ReactNode }) {
  return (
    <section className="flex flex-col justify-center items-center px-2 space-y-8">
      {children}
      <Suspense>
        <BranchSelector />
      </Suspense>
    </section>
  );
}
