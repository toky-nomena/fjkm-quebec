import {
  Globe,
  Cross,
  Mountain,
  Target,
  BookOpen,
  HeartHandshake,
} from "lucide-react";
import { Title } from "@/components/ui/title";
import { BlurFade } from "@/components/magicui/blur-fade";

export default function HistoryPage() {
  return (
    <article className="container px-4 py-12 mx-auto space-y-16 max-w-4xl">
      <BlurFade>
        <header className="space-y-6 text-center">
          <Title className="text-4xl font-extrabold text-foreground">
            L'Histoire de FJKM Québec
          </Title>
          <p className="mx-auto max-w-2xl text-xl font-medium text-muted-foreground">
            Un parcours de foi, de résilience et de communion fraternelle
          </p>
        </header>
      </BlurFade>

      {[
        {
          icon: Cross,
          title: "Origines et Fondements",
          content:
            "La communauté FJKM (Fiangonan'i Jesoa Kristy eto Madagasikara) trouve ses racines profondes dans le mouvement missionnaire protestant du 19ème siècle à Madagascar. Fondée en 1888 par des missionnaires norvégiens et malgaches, l'église a rapidement développé une identité forte, mêlant traditions chrétiennes et culture malgache.",
        },
        {
          icon: Globe,
          title: "Migration et Diaspora",
          content:
            "Avec la diaspora malgache se répandant à travers le monde, les communautés FJKM ont commencé à s'établir dans différents pays, dont le Canada. La communauté de Québec est née du désir de maintenir vivantes les traditions spirituelles et culturelles malgaches, tout en s'intégrant dans le tissu multiculturel québécois.",
        },
        {
          icon: Mountain,
          title: "Fondation à Québec",
          content:
            "La section FJKM de Québec a été officiellement établie en 2010, initialement par un petit groupe de familles malgaches désireuses de préserver leur héritage spirituel. Depuis, la communauté a grandi, accueillant des membres de diverses origines, unis par leur foi et leur engagement communautaire.",
        },
        {
          icon: Target,
          title: "Mission et Vision",
          content:
            "Notre mission transcende les frontières géographiques et culturelles. Nous sommes appelés à être une communauté ouverte, accueillante, qui célèbre la diversité tout en restant ancrée dans les principes évangéliques d'amour, de service et de compassion.",
        },
        {
          icon: BookOpen,
          title: "Défis et Croissance",
          content:
            "Chaque étape de notre parcours a été marquée par des défis d'intégration, de préservation culturelle et de développement spirituel. Mais c'est dans ces défis que notre communauté a trouvé sa force, sa résilience et sa profonde unité.",
        },
        {
          icon: HeartHandshake,
          title: "Notre Engagement",
          content:
            "Aujourd'hui, FJKM Québec continue de grandir, d'accueillir et de servir. Nous sommes plus qu'une église, nous sommes une famille, un lieu de rencontre, de soutien et de transformation spirituelle.",
        },
      ].map(({ icon: Icon, title, content }, index) => (
        <BlurFade key={title} delay={0.2 * (index + 1)}>
          <section
            className="space-y-6 group"
            aria-labelledby={`section-${index}`}
          >
            <div className="flex gap-4 items-center mb-4">
              <div
                className="p-3 rounded-full bg-primary/10"
                role="presentation"
              >
                <Icon className="w-8 h-8 text-primary" aria-hidden="true" />
              </div>
              <h2
                id={`section-${index}`}
                className="text-2xl font-bold transition-colors text-foreground group-hover:text-primary"
              >
                {title}
              </h2>
            </div>
            <p
              className="pl-16 text-base tracking-wide leading-relaxed md:text-lg selection:bg-primary/20"
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
