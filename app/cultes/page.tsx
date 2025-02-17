import { BlurFade } from "@/components/magicui/blur-fade";
import { Title } from "@/components/ui/title";
import { CustomMap } from "./cult-map";
import { CulteDetails } from "./culte-details";
import { CultFacebook } from "./cult-facebook";
import { cn } from "@/lib/utils";

const culteData = {
  id: "culte-2025-02-23",
  title: "Culte du Dimanche",
  date: "2025-02-23",
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
            Les Cultes de FJKM Québec
          </Title>
          <p className="mx-auto max-w-2xl text-xl font-medium text-muted-foreground">
            Notre communauté est un lieu de rencontre, de communion et de
            transformation spirituelle.
          </p>
        </header>
      </BlurFade>
      <div className="flex flex-col gap-8 xl:flex-row">
        <div className="xl:w-2/3">
          <CulteDetails details={culteData} className="rounded-t-2xl border" />
          <CustomMap
            address="222 Av. Ducharme, Québec, QC, G1M 2H3"
            className="overflow-hidden h-96 rounded-b-2xl border shadow-lg"
          />
        </div>
        <iframe
          className={cn(
            "h-[650px] xl:w-1/3",
            "overflow-hidden bg-white rounded-xl border"
          )}
          src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Ffjkm.quebec.canada%2Fposts%2Fpfbid0Hp72hmaak4bHmotKhhAbq2TVTmPo6b8dfqcbQzdGg4GHAEzkwKfk7FgLLdgsK5stl&show_text=true&width=500"
          allowFullScreen={true}
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
        />
      </div>
    </article>
  );
}
