import { BlurFade } from "@/components/magicui/blur-fade";
import { Title } from "@/components/ui/title";
import { CultItemList } from "./cult-item-list";
import { Suspense } from "react";
import { Spinner } from "@/components/ui/spinner/spinner";

export default function CultesPage() {
  return (
    <article className="space-y-16">
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
      <Suspense fallback={<Spinner />}>
        <CultItemList />
      </Suspense>
    </article>
  );
}
