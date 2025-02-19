import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function Theme() {
  return (
    <div className="text-white bg-gray-900 bg-opacity-90 rounded-2xl backdrop-blur-sm">
      <div className="px-6 py-8 text-white rounded-2xl bg-primary">
        <span className="px-4 py-2 text-gray-900 rounded-full bg-white/90 hover:bg-white/80">
          Mois de Fevrier
        </span>
        <div className="mt-6 space-y-4 max-w-2xl">
          <h2 className="text-2xl font-bold leading-tight md:text-3xl lg:text-4xl">
            Mamonjy ny tenin'Andriamanitra
          </h2>
        </div>
      </div>
      <div className="flex flex-col gap-2 justify-between p-6 text-white sm:flex-row">
        <div className="flex flex-col flex-1 justify-between">
          <h3 className="flex-1">Culte du Dimanche</h3>
          <Link
            href="/cultes"
            className="w-full text-xl font-bold leading-tight hover:underline sm:text-left sm:w-auto"
          >
            22 Fevrier 2025 à 09h30
          </Link>
        </div>
        <Link
          href="/cultes"
          className="inline-flex items-center font-semibold text-white bg-primary/10 hover:bg-primary/20 sm:w-auto"
        >
          Voir plus
          <ArrowRight className="ml-2 w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
