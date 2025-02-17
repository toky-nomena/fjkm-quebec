import { ArrowRight } from "lucide-react";
import { Suspense } from "react";
import Image from "next/image";

import { Events } from "@/components/events/events";
import { ButtonLink } from "@/components/link/button-link";
import { BlurFade } from "@/components/magicui/blur-fade";

export default function MainPage() {
  return (
    <div className="grid grid-cols-1 gap-12 py-12 mx-auto xl:grid-cols-5 md:gap-16">
      {/* Left Panel */}
      <div className="space-y-10 md:col-span-3">
        <header className="space-y-4">
          <h2 className="text-xl font-medium tracking-wide text-muted-foreground md:text-2xl">
            Les mots du Pasteur
          </h2>
          <h1 className="text-4xl font-black leading-tight bg-clip-text bg-gradient-to-r text-foreground md:text-5xl from-primary to-primary/70">
            FJKM QUEBEC, CANADA
          </h1>
        </header>

        <BlurFade>
          <div className="space-y-6 text-gray-700 dark:text-gray-300">
            <h3 className="text-xl font-semibold">
              Notre Vision Communautaire
            </h3>
            <p className="text-base tracking-wide leading-relaxed md:text-lg selection:bg-primary/20">
              Dans notre communauté de FJKM Québec, nous croyons en la puissance
              transformatrice de la foi et de l'amour. Chaque jour, nous
              cherchons à incarner les enseignements du Christ, en tendant la
              main à ceux qui souffrent, en offrant réconfort aux découragés et
              en bâtissant des ponts de compassion et d'espérance.
            </p>

            <h3 className="text-xl font-semibold">
              Au-Delà des Murs de l'Église
            </h3>
            <p className="text-base tracking-wide leading-relaxed md:text-lg selection:bg-primary/20">
              Notre mission va au-delà des murs de l'église : nous sommes
              appelés à être la lumière dans notre communauté, à porter l'espoir
              là où il semble absent, et à manifester la grâce divine à travers
              nos actions concrètes. Nous comprenons que notre force réside dans
              notre unité, notre amour les uns pour les autres et notre
              engagement envers le service.
            </p>

            <h3 className="text-xl font-semibold">
              Transformer les Défis en Opportunités
            </h3>
            <p className="text-base tracking-wide leading-relaxed md:text-lg selection:bg-primary/20">
              Guidés par la parole de Dieu, nous embrassons chaque défi comme
              une opportunité de croissance, chaque difficulté comme un chemin
              vers une foi plus profonde. Nous ne nous décourageons pas face aux
              obstacles, mais nous les transformons en occasions de témoigner de
              l'amour inconditionnel de Dieu.
            </p>

            <h3 className="text-xl font-semibold">Notre Engagement Ultime</h3>
            <p className="text-base tracking-wide leading-relaxed md:text-lg selection:bg-primary/20">
              Notre vision est simple mais puissante : être une communauté qui
              reflète l'amour du Christ, qui accueille tous sans jugement, qui
              soutient chacun dans son parcours spirituel, et qui travaille
              inlassablement à construire un monde plus juste, plus compatissant
              et plus aimant.
            </p>
          </div>
        </BlurFade>

        <div
          className="flex flex-col items-center space-y-4 text-center md:flex-row md:items-center md:space-x-6 md:space-y-0 md:text-left"
          role="region"
          aria-labelledby="pastor-section-heading"
        >
          <Image
            src="/images/pastor.jpg"
            alt="Portrait du Pasteur Rakotondrabe Ndrianja"
            className="object-cover w-24 h-24 rounded-full ring-2 ring-primary/20"
            role="img"
            aria-describedby="pastor-description"
          />
          <div className="flex flex-col space-y-1">
            <h1
              id="pastor-section-heading"
              className="text-xl font-bold text-gray-900 dark:text-white"
            >
              Pasteur John Doe
            </h1>
            <p
              id="pastor-description"
              className="text-sm text-gray-600 dark:text-gray-300"
            >
              Pasteur de la FJKM Quebec
            </p>
            <time
              dateTime="2025-02-09"
              className="text-xs text-gray-500 dark:text-gray-400"
            >
              9 Fevrier 2025
            </time>
          </div>
        </div>
      </div>

      {/* Right Panel */}
      <div className="space-y-6 md:col-span-2">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-bold md:text-2xl">Nos activités</h2>
          <ButtonLink
            href="/activities"
            className="justify-center font-semibold bg-primary/10 hover:bg-primary/20 text-primary"
          >
            Voir plus
            <ArrowRight className="ml-2 w-4 h-4" />
          </ButtonLink>
        </div>
        <Suspense
          fallback={
            <div className="text-center text-gray-600 animate-pulse dark:text-gray-300">
              Chargement des événements...
            </div>
          }
        >
          <Events />
        </Suspense>
      </div>
    </div>
  );
}
