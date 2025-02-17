import { BlurFade } from "@/components/magicui/blur-fade";
import Image from "next/image";

interface Responsible {
  role: string;
  name: string;
  gender: string;
}

interface BranchResponsiblesProps {
  responsibles: Responsible[];
}

export function BranchResponsibles({ responsibles }: BranchResponsiblesProps) {
  return (
    <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
      {responsibles.map((responsible, index) => {
        const imageUrl =
          responsible.gender === "m" ? "/images/boy.png" : "/images/girl.png";
        return (
          <div
            key={index}
            className="text-center transition-all duration-300 group hover:scale-[1.02]"
          >
            <div className="overflow-hidden mb-4 rounded-full aspect-square">
              <BlurFade className="flex justify-center items-center w-full h-full">
                <Image
                  src={imageUrl}
                  alt={`${responsible.name} - ${responsible.role}`}
                  width={128}
                  height={128}
                  loading="lazy"
                  quality={75}
                  className="object-cover w-full h-full rounded-full border transition-transform duration-300 border-border group-hover:scale-95"
                />
              </BlurFade>
            </div>
            <h3 className="text-lg font-semibold text-foreground">
              {responsible.name}
            </h3>
            <p className="text-sm text-muted-foreground">{responsible.role}</p>
          </div>
        );
      })}
    </div>
  );
}
