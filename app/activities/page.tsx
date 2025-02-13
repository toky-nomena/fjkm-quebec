import Activities from "@/components/activities/activities";
import { Spinner } from "@/components/spinner";
import { Title } from "@/components/ui/title";
import { Suspense } from "react";

export default async function ActivitiesPage() {
  return (
    <section
      id="activites"
      className="container flex min-h-[calc(100vh-3.5rem)] max-w-screen-2xl flex-col items-center justify-center space-y-16 py-24 md:py-32"
    >
      <div className="space-y-4 w-full">
        <Title className="text-center">Nos activités</Title>
        <p className="mx-auto max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8 text-center">
          Découvrez les événements et activités à venir prochainement de la
          communauté FJKMQuébec
        </p>
      </div>
      <div className="w-full max-w-4xl">
        <Suspense fallback={<Spinner />}>
          <Activities />
        </Suspense>
      </div>
    </section>
  );
}
