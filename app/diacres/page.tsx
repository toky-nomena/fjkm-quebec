import { BlurFade } from "@/components/magicui/blur-fade";
import { getDeaconData } from "./diacres-data";
import { PeopleGrid } from "./diacre-grid";

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
      <PeopleGrid
        people={responsibles}
        title="Les membres du bureau des Diacres"
        variant="responsibles"
      />

      {/* Deacon Members */}
      <PeopleGrid people={members} title="Les diacres" variant="members" />
    </article>
  );
}
