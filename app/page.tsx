import { ArrowRight } from "lucide-react";
import { Suspense } from "react";
import Image from "next/image";

import { Events } from "@/components/events/events";
import { ButtonLink } from "@/components/ui/button-link";
import { BlurFade } from "@/components/magicui/blur-fade";

export default function MainPage() {
  return (
    <div className="py-16 space-y-8">
      <div className="bg-primary text-white p-8 rounded-2xl relative">
        <span className="bg-white/90 text-gray-900 hover:bg-white/80 rounded-full py-2 px-4">
          Mois de Fevrier
        </span>
        <div className="max-w-2xl mt-8 space-y-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
            Mamonjy ny tenin'Andriamanitra
          </h2>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3">
        {/* Left Panel */}
        <div className="p-8 relative md:col-span-2">
          <div className="space-y-4">
            <h2 className="text-xl md:text-2xl font-medium">
              Les mots du Pasteur
            </h2>
            <h1 className="text-3xl md:text-4xl font-black leading-tight">
              FJKM QUEBEC, CANADA
            </h1>
            <BlurFade>
              <p>
                At vero eos et accusamus et iusto odio dignissimos ducimus qui
                blanditiis praesentium voluptatum deleniti atque corrupti quos
                dolores et quas molestias excepturi sint occaecati cupiditate
                non provident, similique sunt in culpa qui officia deserunt
                mollitia animi, id est laborum et dolorum fuga. Et harum quidem
                rerum facilis est et expedita distinctio. Nam libero tempore,
                cum soluta nobis est eligendi optio cumque nihil impedit quo
                minus id quod maxime placeat facere possimus, omnis voluptas
                assumenda est, omnis dolor repellendus. Temporibus autem
                quibusdam et aut officiis debitis aut rerum necessitatibus saepe
                eveniet ut et voluptates repudiandae sint et molestiae non
                recusandae. Itaque earum rerum hic tenetur a sapiente delectus,
                ut aut reiciendis voluptatibus maiores alias consequatur aut
                perferendis doloribus asperiores repellat.
              </p>
            </BlurFade>

            <div className="flex items-center gap-4">
              <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-pink-200 flex items-center justify-center">
                <Image
                  src={"/images/boy.png"}
                  alt={`Pasteur`}
                  width={256}
                  height={256}
                  loading="lazy" // Lazy load the image
                  quality={75} // Adjust quality for optimization
                  className="object-cover w-full h-full transition-transform duration-300 z-2 group-hover:scale-95 border-border border rounded-full"
                />
              </div>
              <div>
                <h1 className="text-xl md:text-2xl font-bold flex items-center gap-2">
                  Pasteur John Doe
                </h1>
                <p className="text-sm md:text-gray-600">9 Fevrier 2025</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Panel */}
        <div className="p-8 space-y-8">
          <Suspense>
            <Events />
          </Suspense>
          <ButtonLink href="/activities">
            Voir plus d'événements
            <ArrowRight />
          </ButtonLink>
        </div>
      </div>
    </div>
  );
}
