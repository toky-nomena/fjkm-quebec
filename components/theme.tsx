import Link from "next/link";

export function Theme() {
  return (
    <div className="text-white bg-gray-900 rounded-2xl">
      <div className="px-6 py-8 text-white rounded-2xl bg-primary">
        <span className="px-4 py-2 text-gray-900 rounded-full bg-white/90 hover:bg-white/80">
          Mois de Fevrier
        </span>
        <div className="mt-6 space-y-4 max-w-2xl">
          <h2 className="text-xl font-bold leading-tight sm:text-2xl md:text-3xl lg:text-4xl">
            Mamonjy ny tenin'Andriamanitra
          </h2>
        </div>
      </div>
      <div className="p-8 text-white">
        <h3>Culte du Dimanche</h3>
        <Link
          href="/cultes"
          className="text-xl font-bold leading-tight hover:underline"
        >
          22 Fevrier 2025 à 09h30
        </Link>
      </div>
    </div>
  );
}
