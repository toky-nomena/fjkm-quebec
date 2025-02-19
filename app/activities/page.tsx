import { Suspense } from "react";

import Activities from "@/components/activities/activities";
import { Spinner } from "@/components/ui/spinner/spinner";
import { Title } from "@/components/ui/title";

export default async function ActivitiesPage() {
  return (
    <section id="activites" className="flex flex-col justify-center space-y-16">
      <div className="items-center space-y-4 w-full">
        <Title className="text-center">Les activités</Title>
        <p className="mx-auto max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8 text-center">
          Découvrez les moments qui nous rassemblent, nous inspirent et nous
          permettent de grandir ensemble dans notre foi.
        </p>
      </div>
      <Suspense fallback={<Spinner />}>
        <Activities />
      </Suspense>
    </section>
  );
}
