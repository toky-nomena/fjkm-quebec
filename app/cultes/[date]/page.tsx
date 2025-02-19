import { notFound } from "next/navigation";
import { getCultByDate } from "../cultes-data";
import CultItem from "../cult-item";
import { Suspense } from "react";
import { Spinner } from "@/components/ui/spinner/spinner";

export default async function CultePage({
  params,
}: {
  params: Promise<{ date: string }>;
}) {
  const date = (await params).date;
  return (
    <Suspense fallback={<Spinner />}>
      <Culte date={date} />
    </Suspense>
  );
}

async function Culte({ date }: { date: string }) {
  const cult = await getCultByDate(date);

  if (!cult) {
    return notFound();
  }

  return <CultItem cult={cult} />;
}
