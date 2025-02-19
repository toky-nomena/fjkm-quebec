import { Suspense } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";

import { BlurFade } from "@/components/magicui/blur-fade";
import { Contact } from "@/components/contact";
import { Events } from "@/components/events/events";
import { Facebook } from "@/components/icons/Facebook";
import { Instagram } from "@/components/icons/Instagram";
import { Title } from "@/components/ui/title";

import { getBranchBySlug } from "@/components/branches/branches";
import BranchMissions from "./branch-missions";
import BranchSelector from "./branch-selector";

import { EventItemSkeletonList } from "@/components/events/event-skeleton";
import { BranchIcon } from "./branch-icon";
import { BranchResponsibles } from "./branch-responsibles";
import { BranchPanel } from "./branch-panel";

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
        <header className="mx-auto space-y-4 max-w-xl">
          <div className="flex justify-center items-center rounded-full bg-primary/10">
            <BranchIcon icon={branch.icon} name={branch.name} />
          </div>

          <div className="space-y-2">
            <Title className="mx-auto text-3xl font-bold text-foreground">
              {branch.name}
            </Title>
            <BlurFade direction="down">
              <p className="mx-auto text-lg text-muted-foreground">
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
              "
            </span>
            <em className="text-xl italic leading-relaxed text-muted-foreground">
              {branch.verse}
            </em>
            <span className="absolute -right-4 text-4xl opacity-50 text-muted-foreground">
              "
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

        <Suspense>
          <BranchSelector />
        </Suspense>
      </div>
      {/* Right Sidebar */}
      <div className="space-y-8 w-full lg:w-1/3 lg:sticky lg:top-24 lg:self-start">
        <BranchPanel branch={branch} />
      </div>
    </div>
  );
}
