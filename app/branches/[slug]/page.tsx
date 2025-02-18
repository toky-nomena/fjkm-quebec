import Image from "next/image";
import { notFound } from "next/navigation";
import Link from "next/link";

import { Contact } from "@/components/contact";
import { Events } from "@/components/events/events";
import { getBranchBySlug, getBranches } from "@/components/branches/branches";
import { BlurFade } from "@/components/magicui/blur-fade";
import BranchMissions from "./branch-missions";
import { Title } from "@/components/ui/title";
import { Facebook } from "@/components/icons/Facebook";
import { Instagram } from "@/components/icons/Instagram";

import { BranchIcon } from "./branch-icon";
import { Suspense } from "react";
import BranchSelector from "./branch-selector";
import { BranchResponsibles } from "./branch-responsibles";
import {
  EventItemSkeleton,
  EventItemSkeletonList,
} from "@/components/events/event-skeleton";

export default async function BranchPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;
  const branch = await getBranchBySlug(slug);

  if (!branch) {
    return notFound();
  }

  return (
    <div className="flex flex-col gap-12 lg:flex-row lg:gap-16">
      {/* Main Content Section */}
      <div className="space-y-16 w-full text-center lg:w-2/3">
        <header className="space-y-4">
          <div className="flex justify-center items-center rounded-full bg-primary/10">
            <BranchIcon
              icon={branch.icon} // Lucide React icon
              name={branch.name}
            />
          </div>

          <div className="space-y-2">
            <Title className="text-3xl font-bold text-foreground">
              {branch.name}
            </Title>
            <BlurFade direction="down">
              <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
                {branch.mission}
              </p>
            </BlurFade>
          </div>
        </header>
        <section
          id="verse"
          aria-label="Verset biblique"
          className="flex justify-center items-center px-6 w-full"
        >
          <blockquote className="relative max-w-xl">
            <span className="absolute -left-4 text-4xl opacity-50 text-muted-foreground">
              “
            </span>
            <em className="text-xl italic leading-relaxed text-muted-foreground">
              {branch.verse}
            </em>
            <span className="absolute -right-4 text-4xl opacity-50 text-muted-foreground">
              ”
            </span>
          </blockquote>
        </section>
        <section
          id="missions"
          aria-labelledby="missions-title"
          className="flex flex-col items-center space-y-8"
        >
          <h2
            id="missions-title"
            className="text-2xl font-bold text-foreground"
          >
            Les missions de la branche
          </h2>
          <BranchMissions missions={branch.missions} />
        </section>
        <section
          id="team"
          aria-labelledby="team-title"
          className="flex flex-col items-center space-y-8"
        >
          <h2 id="team-title" className="text-2xl font-bold text-foreground">
            Les membres du bureau
          </h2>
          <BranchResponsibles responsibles={branch.responsibles} />
        </section>

        <section
          id="contact"
          aria-labelledby="contact-title"
          className="space-y-8"
        >
          <h2 id="contact-title" className="text-2xl font-bold text-foreground">
            Contact
          </h2>
          <div className="flex flex-col items-center space-y-4">
            <div className="space-y-2">
              <p className="text-lg text-muted-foreground">
                <Contact
                  label="Téléphone"
                  type="tel"
                  value="418-123-4567-890"
                />
              </p>
              <p className="text-lg text-muted-foreground">
                <Contact
                  label="Email"
                  type="email"
                  value={`${branch.acronym.toLowerCase()}@fjkm-quebec.ca`}
                />
              </p>
            </div>
            <div className="flex space-x-4">
              <Link
                href="/"
                target="_blank"
                className="transition-colors text-primary hover:text-primary/80"
                aria-label="Page Facebook"
              >
                <Facebook />
              </Link>
              <Link
                href="/"
                target="_blank"
                className="transition-colors text-primary hover:text-primary/80"
                aria-label="Page Instagram"
              >
                <Instagram />
              </Link>
            </div>
          </div>
        </section>
        <Suspense>
          <BranchSelector />
        </Suspense>
      </div>
      {/* Events Section */}
      <div className="w-full lg:w-1/3">
        <Suspense
          fallback={
            <div className="space-y-4">
              <EventItemSkeletonList />
            </div>
          }
        >
          <Events />
        </Suspense>
      </div>
    </div>
  );
}
