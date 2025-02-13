import Link from "next/link";
import { Info } from "lucide-react";

export function Banner() {
  return (
    <div className="flex justify-center items-center px-4 py-3 text-xs text-center text-blue-500 bg-blue-500/10 max-w-[100vw]">
      <div className="container flex flex-col justify-center items-center space-y-2 sm:flex-row sm:space-y-0 sm:space-x-3">
        <Link href="/whats-new" className="flex items-center space-x-2">
          <Info className="w-4 h-4 shrink-0" />
          <span className="text-center truncate sm:text-left">
            Culte du Dimanche 15 Fevrier 2025 au 222 Avenue Ducharme, Quebec
          </span>
        </Link>
      </div>
    </div>
  );
}
