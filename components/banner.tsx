import Link from "next/link";

export function Banner() {
  return (
    <div className="px-4 py-3 text-center text-white bg-primary">
      <Link href="/cultes" className="transition-colors hover:underline">
        Culte du Dimanche 22 Fevrier 2025 au{" "}
        <strong className="font-bold">
          222 Av. Ducharme, Québec, QC G1M 2H3
        </strong>
      </Link>
    </div>
  );
}
