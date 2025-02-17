import { ReactNode } from "react";

export default function BranchLayout({ children }: { children: ReactNode }) {
  return (
    <section className="flex flex-col justify-center items-center px-2 space-y-8">
      {children}
    </section>
  );
}
