import { BlurFade } from "@/components/magicui/blur-fade";
import { BookOpen, Globe, Heart, Users, Star, Award } from "lucide-react";
import Image from "next/image";

export default function PastorPage() {
  const pastorDetails = {
    name: "Pasteur John Doe",
    birthPlace: "Antananarivo, Madagascar",
    education: [
      "Licence en Théologie, Université Protestante de Madagascar",
      "Master en Leadership Ministériel, Séminaire Théologique International",
    ],
    ministry: {
      start: 2010,
      currentRole: "Pasteur Principal, FJKM Québec",
      previousRoles: [
        "Missionnaire, Église FJKM Madagascar",
        "Coordinateur de Jeunesse, Région d'Antananarivo",
      ],
    },
  };

  const journeySteps = [
    {
      icon: BookOpen,
      title: "Appel et Formation",
      content:
        "Né dans une famille profondément chrétienne, John a ressenti très tôt sa vocation pour le ministère. Sa formation théologique à Madagascar a été le fondement de son engagement spirituel, l'préparant à servir les communautés avec compassion et sagesse.",
    },
    {
      icon: Globe,
      title: "Migration et Mission",
      content:
        "En 2010, guidé par un appel missionnaire, John a quitté Madagascar pour le Canada. Sa mission : établir un pont spirituel entre la culture malgache et la communauté québécoise, tout en préservant l'essence de la foi évangélique.",
    },
    {
      icon: Heart,
      title: "Cœur pour la Communauté",
      content:
        "Plus qu'un pasteur, John est un bâtisseur de communauté. Il a consacré son ministère à créer un espace accueillant où les familles malgaches et québécoises peuvent se rencontrer, partager leur foi et grandir ensemble.",
    },
    {
      icon: Users,
      title: "Leadership et Vision",
      content:
        "Sous sa direction, FJKM Québec est devenue un phare d'espoir et d'intégration. Il a développé des programmes innovants qui soutiennent l'intégration des immigrants, l'éducation spirituelle des jeunes et le service communautaire.",
    },
    {
      icon: Star,
      title: "Engagement Social",
      content:
        "John croit en une foi active. Il a initié plusieurs programmes d'aide sociale, travaillant en collaboration avec des organisations locales pour soutenir les familles en difficulté et promouvoir l'inclusion.",
    },
    {
      icon: Award,
      title: "Vision pour l'Avenir",
      content:
        "Sa vision pour FJKM Québec est claire : être une communauté dynamique qui transcende les frontières culturelles, qui célèbre la diversité et qui manifeste l'amour du Christ à travers des actions concrètes.",
    },
  ];

  return (
    <article className="space-y-16">
      <BlurFade>
        <header className="space-y-6 text-center">
          <div className="overflow-hidden mx-auto w-48 h-48 rounded-full shadow-lg">
            <Image
              src="/images/pastor.jpg"
              width={192}
              height={192}
              alt="Pasteur John Doe"
              className="object-cover w-full h-full"
            />
          </div>
          <div>
            <h1 className="text-4xl font-extrabold text-foreground">
              {pastorDetails.name}
            </h1>
            <p className="text-xl text-muted-foreground">
              Pasteur Principal, FJKM Québec
            </p>
          </div>
        </header>
      </BlurFade>

      {/* Education Section */}
      <BlurFade>
        <section className="space-y-6">
          <div className="flex gap-3 items-center">
            <div className="p-2 rounded-full bg-primary/10">
              <BookOpen className="w-6 h-6 text-primary" />
            </div>
            <h2 className="text-2xl font-bold text-foreground">
              Formation Académique
            </h2>
          </div>
          <div className="pl-12 space-y-4">
            {pastorDetails.education.map((degree, index) => (
              <div
                key={index}
                className="py-2 pl-4 border-l-2 border-primary/50"
              >
                <p className="text-lg font-semibold text-foreground">
                  {degree}
                </p>
              </div>
            ))}
          </div>
        </section>
      </BlurFade>

      {/* Ministry History Section */}
      <BlurFade>
        <section className="space-y-6">
          <div className="flex gap-3 items-center">
            <div className="p-2 rounded-full bg-primary/10">
              <Users className="w-6 h-6 text-primary" />
            </div>
            <h2 className="text-2xl font-bold text-foreground">
              Parcours Ministériel
            </h2>
          </div>
          <div className="pl-12 space-y-4">
            <div className="py-2 pl-4 border-l-2 border-primary/50">
              <p className="text-lg font-semibold text-foreground">
                {pastorDetails.ministry.currentRole}
              </p>
              <p className="text-sm text-muted-foreground">
                Depuis {pastorDetails.ministry.start}
              </p>
            </div>
            {pastorDetails.ministry.previousRoles.map((role, index) => (
              <div
                key={index}
                className="py-2 pl-4 border-l-2 border-primary/50"
              >
                <p className="text-lg font-semibold text-foreground">{role}</p>
              </div>
            ))}
          </div>
        </section>
      </BlurFade>

      {journeySteps.map(({ icon: Icon, title, content }, index) => (
        <BlurFade key={title} delay={0.2 * (index + 1)}>
          <section
            className="space-y-6 group"
            aria-labelledby={`section-${index}`}
          >
            <div className="flex gap-3 items-center mb-4 sm:gap-4">
              <div
                className="p-2 rounded-full sm:p-3 bg-primary/10"
                role="presentation"
              >
                <Icon
                  className="w-6 h-6 sm:w-8 sm:h-8 text-primary"
                  aria-hidden="true"
                />
              </div>
              <h2
                id={`section-${index}`}
                className="text-xl font-bold transition-colors sm:text-2xl text-foreground group-hover:text-primary"
              >
                {title}
              </h2>
            </div>
            <p
              className="pl-0 text-base tracking-wide leading-relaxed sm:pl-12 md:text-lg selection:bg-primary/20"
              aria-describedby={`section-${index}`}
            >
              {content}
            </p>
          </section>
        </BlurFade>
      ))}
    </article>
  );
}
