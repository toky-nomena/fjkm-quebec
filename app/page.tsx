import { Events } from "@/components/events/events";

import { ButtonLink } from "@/components/ui/button-link";
import { Spinner } from "@/components/spinner";
import { Title } from "@/components/ui/title";
import { ArrowRight } from "lucide-react";
import { Suspense } from "react";

export default function Home() {
  return (
    <div className="container py-24 md:py-32">
      <div className="grid grid-cols-1 lg:grid-cols-3">
        <div className="py-10 text-center lg:col-span-2 lg:text-left">
          <div className="mb-6 space-y-4">
            <Title className="text-2xl sm:text-3xl lg:text-4xl">
              FJKM QUEBEC
            </Title>
            <p className="max-w-[42rem] leading-normal text-muted-foreground text-sm sm:text-base lg:text-lg sm:leading-6 lg:leading-8">
              Également connue sous le nom d'Église Protestante Réformée de
              Madagascar à Quebec, est une organisation à but non lucratif de
              confession protestante réformée du Quebec, Canada.
            </p>
          </div>
          <ButtonLink href="/activities">
            <span className="flex items-center w-full text-center sm:w-auto lg:text-left">
              Explorer les activités
              <ArrowRight className="ml-2 w-4 h-4" />
            </span>
          </ButtonLink>
        </div>
        <div>
          <Suspense fallback={<Spinner />}>
            <Events />
          </Suspense>
        </div>
      </div>
    </div>
  );
}
