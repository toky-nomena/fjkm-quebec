import { Container } from "@/components/container";
import { Events } from "@/components/events/events";

import { ButtonLink } from "@/components/magicui/button-link";
import { Spinner } from "@/components/spinner";
import { Title } from "@/components/ui/title";
import { ArrowRight } from "lucide-react";
import { Suspense } from "react";

export default function Home() {
  return (
    <Container>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 ">
        <div className="lg:col-span-2 mx-auto max-w-[42rem] h-[30rem]">
          <div className="mb-6 space-y-4">
            <Title>FJKM QUEBEC</Title>
            <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
              Également connue sous le nom d'Église Protestante Réformée de
              Madagascar à Québec, est une organisation à but non lucratif de
              confession protestante réformée du Québec, Canada.
            </p>
          </div>
          <ButtonLink href="/activities">
            Explorer les activités
            <ArrowRight className="ml-2 w-4 h-4" />
          </ButtonLink>
        </div>
        <div className="">
          <Suspense fallback={<Spinner />}>
            <Events />
          </Suspense>
        </div>
      </div>
    </Container>
  );
}
