import { Suspense } from "react";

import Activities from "@/components/activities/activities";
import { Spinner } from "@/components/spinner";
import { Title } from "@/components/ui/title";

export default async function ActivitiesPage() {
  return (
    <section id="activites" className="flex flex-col justify-center space-y-16">
      <div className="items-center space-y-4 w-full">
        <Title className="text-center">Nos activités</Title>
        <p className="mx-auto max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8 text-center">
          Rejoignez-nous dans notre mission de foi, de service et de communauté.
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
