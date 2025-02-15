import { ArrowRight } from "lucide-react";
import { Suspense } from "react";
import Image from "next/image";

import { Events } from "@/components/events/events";
import { ButtonLink } from "@/components/link/button-link";
import { BlurFade } from "@/components/magicui/blur-fade";

export default function MainPage() {
  return (
    <div className="grid grid-cols-1 gap-12 px-4 py-12 mx-auto md:grid-cols-3 md:gap-16">
      {/* Left Panel */}
      <div className="space-y-10 md:col-span-2">
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

        <div className="flex gap-6 items-center rounded-2xl transition-all duration-300 bg-primary/5">
          <div className="flex justify-center items-center w-20 h-20 rounded-full ring-4 transition-all sm:w-24 md:w-32 sm:h-24 md:h-32 bg-primary/10 ring-primary/20 hover:ring-primary/40">
            <Image
              src={"/images/boy.png"}
              alt="Pasteur"
              width={256}
              height={256}
              loading="lazy"
              quality={75}
              className="object-cover w-full h-full rounded-full border border-white transition-transform duration-300 hover:scale-105"
            />
          </div>
          <div className="space-y-2">
            <h2 className="text-sm font-bold text-gray-800 sm:text-xl md:text-2xl dark:text-white">
              Reverand Dr. Rakotondrabe Ndrianja
            </h2>
            <p className="text-xs text-gray-600 sm:text-sm dark:text-gray-300">
              Pasteur de la FJKM Quebec
            </p>
            <p className="text-xs text-gray-600 sm:text-sm dark:text-gray-300">
              9 Fevrier 2025
            </p>
          </div>
        </div>
      </div>

      {/* Right Panel */}
      <div className="space-y-8">
        <Suspense
          fallback={
            <div className="text-center text-gray-600 animate-pulse dark:text-gray-300">
              Chargement des événements...
            </div>
          }
        >
          <Events />
        </Suspense>
        <ButtonLink
          href="/activities"
          className="justify-center w-full font-semibold bg-primary/10 hover:bg-primary/20 text-primary"
        >
          Voir plus d'événements
          <ArrowRight className="ml-2 w-5 h-5" />
        </ButtonLink>
      </div>
    </div>
  );
}
