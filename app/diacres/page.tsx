import Image from "next/image";
import { BlurFade } from "@/components/magicui/blur-fade";
import { getDeaconData } from "./diacres-data";

export default async function DeaconsPage() {
  const { members, responsibles, deaconRoles } = await getDeaconData();

  return (
    <article className="space-y-16">
      <BlurFade>
        <header className="space-y-6 text-center">
          <h1 className="text-4xl font-extrabold text-foreground">
            Nos Diacres
          </h1>
          <p className="mx-auto max-w-2xl text-xl text-muted-foreground">
            Serviteurs dévoués qui incarnent l'amour du Christ à travers un
            service désintéressé et une compassion profonde.
          </p>
        </header>
      </BlurFade>

      {/* Deacon Roles Overview */}
      <section className="grid gap-8 md:grid-cols-3">
        {deaconRoles.map(({ icon: Icon, title, description }, index) => (
          <BlurFade key={title} delay={0.2 * (index + 1)}>
            <div className="space-y-4 text-center">
              <div className="flex justify-center items-center mx-auto w-16 h-16 rounded-full bg-primary/10">
                <Icon className="w-8 h-8 text-primary" />
              </div>
              <h2 className="text-xl font-bold text-foreground">{title}</h2>
              <p className="text-muted-foreground">{description}</p>
            </div>
          </BlurFade>
        ))}
      </section>

      {/* Deacon Responsibles */}
      <section className="space-y-12">
        <h2 className="text-3xl font-bold text-center text-foreground">
          Responsables des Ministères
        </h2>
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {responsibles.map((responsible, index) => (
            <BlurFade key={responsible.name} delay={0.2 * (index + 1)}>
              <div className="space-y-4 text-center group">
                <div className="overflow-hidden mx-auto w-48 h-48 rounded-full shadow-lg transition-transform group-hover:scale-105">
                  <Image
                    src={responsible.image}
                    alt={responsible.name}
                    width={192}
                    height={192}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground">
                    {responsible.name}
                  </h3>
                  <p className="text-muted-foreground">
                    {responsible.responsibility}
                  </p>
                </div>
              </div>
            </BlurFade>
          ))}
        </div>
      </section>

      {/* Deacon Members */}
      <section className="space-y-12">
        <h2 className="text-3xl font-bold text-center text-foreground">
          Membres du Conseil des Diacres
        </h2>
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {members.map((member, index) => (
            <BlurFade key={member.name} delay={0.2 * (index + 1)}>
              <div className="space-y-4 text-center group">
                <div className="overflow-hidden mx-auto w-48 h-48 rounded-full shadow-lg transition-transform group-hover:scale-105">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={192}
                    height={192}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground">
                    {member.name}
                  </h3>
                </div>
              </div>
            </BlurFade>
          ))}
        </div>
      </section>
    </article>
  );
}
