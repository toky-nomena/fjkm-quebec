import Image from "next/image";
import { BlurFade } from "@/components/magicui/blur-fade";

type PersonType = {
  name: string;
  image: string;
  responsibility?: string;
};

interface PeopleGridProps {
  people: PersonType[];
  title: string;
  variant?: "members" | "responsibles";
}

export function PeopleGrid({
  people,
  title,
  variant = "members",
}: PeopleGridProps) {
  return (
    <section className="space-y-12">
      <h2 className="text-3xl font-bold text-center text-foreground">
        {title}
      </h2>
      <div className="grid grid-cols-2 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {people.map((person, index) => (
          <BlurFade key={person.name} delay={0.2 * (index + 1)}>
            <div className="flex flex-col justify-center items-center p-4 space-y-4 text-center group">
              <div className="w-48 h-48">
                <Image
                  src={person.image}
                  alt={person.name}
                  width={96}
                  height={96}
                  className="object-cover w-full h-full"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground">
                  {person.name}
                </h3>
                {variant === "responsibles" && person.responsibility && (
                  <p className="text-muted-foreground">
                    {person.responsibility}
                  </p>
                )}
              </div>
            </div>
          </BlurFade>
        ))}
      </div>
    </section>
  );
}
