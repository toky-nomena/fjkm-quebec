import { ArrowRight } from "lucide-react";

import { ButtonLink } from "./magicui/button-link";
import { Title } from "./ui/title";
import { Container } from "./container";

export default function Hero() {
  return (
    <Container className="space-y-6">
      <div className="space-y-4 text-center">
        <Title>FJKM QUEBEC</Title>
        <p className="mx-auto max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
          Également connue sous le nom d'Église Protestante Réformée de
          Madagascar à Québec, est une organisation à but non lucratif de
          confession protestante réformée du Québec, Canada.
        </p>
      </div>
      <ButtonLink href="/activities">
        Explorer les activités
        <ArrowRight className="ml-2 w-4 h-4" />
      </ButtonLink>
    </Container>
  );
}
