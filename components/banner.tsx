import Link from "next/link";

export function Banner() {
  return (
    <div className="px-4 py-3 text-xs text-center text-blue-500 bg-blue-500/10">
      <Link href="/whats-new">Culte du Dimanche 15 Fevrier 2025</Link>
    </div>
  );
}
