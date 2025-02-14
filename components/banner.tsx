import Link from "next/link";

export function Banner() {
  return (
    <div className="px-4 py-3 text-center text-white bg-primary ">
      <Link href="/whats-new">
        Culte du Dimanche 15 Fevrier 2025 au{" "}
        <strong>222 Av. Ducharme, Québec, QC G1M 2H3</strong>
      </Link>
    </div>
  );
}
