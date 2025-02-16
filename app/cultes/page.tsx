import { BlurFade } from "@/components/magicui/blur-fade";
import { Title } from "@/components/ui/title";
import { CustomMap } from "./cult-map";
import { CulteDetails } from "./culte-details";

const culteData = {
  id: "culte-2025-02-16",
  title: "Culte du Dimanche",
  date: "2025-02-17",
  time: "09:30",
  location: "Église FJKM Québec",
  address: "222 Av. Ducharme, Québec, QC G1M 2H3",
};

export default function CultesPage() {
  return (
    <article className="py-12 space-y-16">
      <BlurFade>
        <header className="space-y-6 text-center">
          <Title className="text-4xl font-extrabold text-foreground">
            Les Cultes de FJKM
          </Title>
          <p className="mx-auto max-w-2xl text-xl font-medium text-muted-foreground">
            Notre communauté est un lieu de rencontre, de communion et de
            transformation spirituelle.
          </p>
        </header>
      </BlurFade>
      <div className="flex flex-col gap-8 xl:flex-row">
        <CustomMap
          address="222 Av. Ducharme, Québec, QC, G1M 2H3"
          className="overflow-hidden h-full rounded-2xl shadow-lg xl:w-2/3"
        />
        <CulteDetails details={culteData} className="xl:w-1/3" />
      </div>
    </article>
  );
}
