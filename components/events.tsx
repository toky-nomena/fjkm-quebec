import { MoreVertical, Calendar, ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";

const eventGroups = [
  {
    title: "Culte du Dimanche",
    description:
      "Notre culte du Dimanche se tiendra le 15 Fevrier 2025 au 222 Avenue Ducharme, Quebec",
    date: "2025-02-05",
    time: "09:00",
    speakers: ["Père Jean Dupont", "Sœur Marie-Claire"],
  },
  {
    title: "Réunion de Bénévoles",
    description:
      "Réunion hebdomadaire pour coordonner les projets caritatifs et les événements à venir",
    date: "2025-02-05",
    time: "10:00 - 11:30",
    speakers: [
      "Anne Morel (Responsable des Bénévoles)",
      "Paul Lefèvre (Coordinateur des Projets)",
    ],
  },
];

export function Events() {
  return (
    <div className="overflow-y-scroll p-4 mx-auto space-y-4 w-full bg-transparent text-foreground">
      <header className="flex sticky top-0 justify-between items-center">
        <h1 className="text-xl font-bold">Annonces</h1>
      </header>

      <div className="space-y-8">
        <div className="space-y-4">
          {eventGroups.map((event) => (
            <div
              key={event.title}
              className="p-4 space-y-2 rounded-lg border border-border/40"
            >
              <div className="flex justify-between items-start">
                <h3 className="font-medium text-foreground">{event.title}</h3>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-xs text-muted-foreground">
                  {event.date} · {event.time}
                </span>
              </div>
              {event.description && (
                <p className="text-sm text-muted-foreground">
                  {event.description}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
