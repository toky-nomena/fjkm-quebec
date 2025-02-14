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
    <div className="container px-4 py-6 mx-auto space-y-12 text-center">
      <section id="header">
        <h1 className="text-6xl">{branch.icon}</h1>
      </section>
      <section
        className="flex flex-col items-center mb-16 space-y-2"
        id="description"
      >
        <Title>{branch.name}</Title>
        <p>{branch.mission}</p>
        <blockquote className="max-w-screen-md">
          <em className="text-base italic font-normal leading-relaxed text-muted-foreground">
            <strong className="text-2xl font-bold">"</strong>
            {branch.verse}
            <strong className="text-2xl font-bold">"</strong>
          </em>
        </blockquote>
      </section>

      <section className="flex flex-col items-center space-y-8" id="missions">
        <h3 className="text-2xl font-bold">Les missions de la branche</h3>
        <BranchMissions missions={branch.missions} />
      </section>
      <section className="space-y-8" id="team">
        <h3 className="text-2xl font-bold">Les membres du bureau</h3>
        {/* Team Members Grid */}
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {branch.responsibles.map((member, index) => {
            const imageUrl =
              member.gender === "m" ? "/images/boy.png" : "/images/girl.png";
            return (
              <div
                key={index}
                className="text-center group transition-all duration-300 hover:scale-[1.02]"
              >
                <div className="overflow-hidden mb-4 rounded-full aspect-square">
                  <BlurFade className="flex justify-center items-center w-full h-full">
                    <Image
                      src={imageUrl}
                      alt={`${member.name} - ${member.role}`}
                      width={128}
                      height={128}
                      loading="lazy" // Lazy load the image
                      quality={75} // Adjust quality for optimization
                      className="object-cover w-full h-full rounded-full border transition-transform duration-300 z-2 group-hover:scale-95 border-border"
                    />
                  </BlurFade>
                </div>
                <h3 className="mb-1 text-lg font-semibold text-foreground">
                  {member.name}
                </h3>
                <p className="text-sm text-muted-foreground">{member.role}</p>
              </div>
            );
          })}
        </div>
      </section>
      <section className="flex flex-col items-center space-y-8" id="contact">
        <h3 className="text-2xl font-bold">Contact</h3>
        <div className="flex flex-col items-center space-y-4">
          <div>
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
          <div className="flex space-x-2">
            <Link href={"/"} target="_blank" className="text-lg text-primary">
              <Facebook />
              <span className="sr-only">Facebook</span>
            </Link>
            <Link href={"/"} target="_blank" className="text-lg text-primary">
              <Instagram />
              <span className="sr-only">Instagram</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
