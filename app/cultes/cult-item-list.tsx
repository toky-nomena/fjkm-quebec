import Link from "next/link";
import { Calendar, MapPin, Clock, ChevronRight } from "lucide-react";
import { BlurFade } from "@/components/magicui/blur-fade";
import { getCults } from "./cultes-data";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

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
    <section className="flex flex-col flex-wrap gap-6 sm:flex-row">
      {cults.map((cult, index) => (
        <BlurFade
          key={cult.id}
          delay={0.1 * (index + 1)}
          className="w-full sm:w-[calc(50%-1.5rem)]"
        >
          <div className="overflow-hidden relative p-6 rounded-xl border transition-all duration-300 group hover:shadow-lg">
            <div className="absolute inset-0 opacity-0 transition-opacity bg-primary/5 group-hover:opacity-100 -z-10"></div>

            <div className="space-y-4">
              <Link
                href={`/cultes/${cult.date}`}
                className="flex justify-between items-center text-xl font-bold text-foreground group"
              >
                <span>{cult.title}</span>
                <ChevronRight className="w-5 h-5 opacity-0 transition-opacity group-hover:opacity-100" />
              </Link>
              <div className="space-y-2 text-muted-foreground">
                <div className="flex gap-3 items-center">
                  <Calendar className="w-5 h-5 text-primary" />
                  <span className="flex-1">{formatDate(cult.date)}</span>
                </div>
                <div className="flex gap-3 items-center">
                  <Clock className="w-5 h-5 text-primary" />
                  <span className="flex-1">{cult.time}</span>
                </div>
                <div className="flex gap-3 items-center">
                  <MapPin className="w-5 h-5 text-primary" />
                  <div className="flex-1">
                    <span className="block font-medium">{cult.location}</span>
                    <span className="block text-sm text-muted-foreground">
                      {cult.address}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </BlurFade>
      ))}
    </section>
  );
}
