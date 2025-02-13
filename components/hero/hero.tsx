import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Title } from "../ui/title";
import { ButtonLink } from "../magicui/button-link";
import { ArrowRight } from "lucide-react";
import { Events } from "../events";
import { Container } from "../container";

export function Hero() {
  return (
    <Container>
      <div className="flex flex-col lg:flex-row">
        <div className="lg:w-2/3 lg:pr-12">
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
        <div className="lg:w-1/3 lg:mt-0">
          <Events />
        </div>
      </div>
    </Container>
  );
}

function FeatureBox({
  icon,
  title,
  description,
}: {
  icon: string;
  title: string;
  description: string;
}) {
  return (
    <div className="flex items-start space-x-4">
      <div className="text-3xl">{icon}</div>
      <div>
        <h3 className="mb-2 font-semibold">{title}</h3>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
    </div>
  );
}
