import Image from "next/image";
import { notFound } from "next/navigation";

import { getBranches } from "@/components/branches/branches";
import { BlurFade } from "@/components/magicui/blur-fade";
import BranchMissions from "./branch-missions";
import { Title } from "@/components/ui/title";
import { Facebook } from "@/components/icons/Facebook";
import { Instagram } from "@/components/icons/Instagram";
import Link from "next/link";
import { Contact } from "@/components/contact";
import { BranchIcon } from "./branch-icon";

export default async function BranchPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;
  const branches = await getBranches();
  const branch = branches.find((branch) => branch.slug === slug);

  if (!branch) {
    return notFound();
  }

  return (
    <div className="container px-4 py-6 mx-auto space-y-16 max-w-6xl text-center">
      <header className="space-y-4">
        <div className="flex justify-center mb-4">
          <div className="flex justify-center items-center w-32 h-32 rounded-full bg-primary/10">
            <span
              role="img"
              aria-label={`Icône de ${branch.name}`}
              className="text-5xl"
            >
              <BranchIcon
                icon={branch.icon} // Lucide React icon
                name={branch.name}
              />
            </span>
          </div>
        </div>

        <div className="space-y-2">
          <Title className="text-3xl font-bold text-foreground">
            {branch.name}
          </Title>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            {branch.mission}
          </p>
        </div>
      </header>
      <section
        id="verse"
        aria-label="Verset biblique"
        className="mx-auto max-w-xl"
      >
        <blockquote className="relative">
          <span className="absolute -left-4 text-4xl opacity-50 text-muted-foreground">
            "
          </span>
          <em className="text-base italic leading-relaxed text-muted-foreground">
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
        <h2 id="missions-title" className="text-2xl font-bold text-foreground">
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
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {branch.responsibles.map((member, index) => {
            const imageUrl =
              member.gender === "m" ? "/images/boy.png" : "/images/girl.png";
            return (
              <div
                key={index}
                className="text-center transition-all duration-300 group hover:scale-[1.02]"
              >
                <div className="overflow-hidden mb-4 rounded-full aspect-square">
                  <BlurFade className="flex justify-center items-center w-full h-full">
                    <Image
                      src={imageUrl}
                      alt={`${member.name} - ${member.role}`}
                      width={128}
                      height={128}
                      loading="lazy"
                      quality={75}
                      className="object-cover w-full h-full rounded-full border transition-transform duration-300 border-border group-hover:scale-95"
                    />
                  </BlurFade>
                </div>
                <h3 className="text-lg font-semibold text-foreground">
                  {member.name}
                </h3>
                <p className="text-sm text-muted-foreground">{member.role}</p>
              </div>
            );
          })}
        </div>
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
              <Contact label="Téléphone" type="tel" value="418-123-4567-890" />
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
    </div>
  );
}
