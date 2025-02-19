import Link from "next/link";
import { Calendar, MapPin, Clock } from "lucide-react";
import { BlurFade } from "@/components/magicui/blur-fade";
import { getCults } from "./cultes-data";

export async function CultItemList() {
  const cults = await getCults();

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("fr-CA", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <section className="space-y-8">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {cults.map((cult, index) => (
          <BlurFade key={cult.id} delay={0.1 * (index + 1)}>
            <div className="p-6 rounded-xl border transition-all duration-300 group hover:shadow-lgspace-y-2">
              <Link
                href={`/cultes/${cult.date}`}
                className="text-xl font-bold text-foreground"
              >
                {cult.title}
              </Link>
              <div className="space-y-1 text-muted-foreground">
                <div className="flex gap-2 items-center">
                  <Calendar className="w-4 h-4 text-primary" />
                  <span>{formatDate(cult.date)}</span>
                </div>
                <div className="flex gap-2 items-center">
                  <Clock className="w-4 h-4 text-primary" />
                  <span>{cult.time}</span>
                </div>
                <div className="flex gap-2 items-center">
                  <MapPin className="w-4 h-4 text-primary" />
                  <span>{cult.address}</span>
                </div>
              </div>
            </div>
          </BlurFade>
        ))}
      </div>
    </section>
  );
}
