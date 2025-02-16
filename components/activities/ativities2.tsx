import { memo } from "react";
import { MoreVertical, MapPin, Calendar } from "lucide-react";

interface Event {
  id: string;
  month: string;
  day: string;
  title: string;
  location: string;
  category?: string;
}

const events: Event[] = [
  {
    id: "event-001",
    month: "FEV",
    day: "25",
    title: "Culte du Dimanche",
    location: "Église FJKM Québec, 123 Rue Saint-Jean, Québec, QC G1R 1N5",
    category: "Culte",
  },
  {
    id: "event-002",
    month: "FEV",
    day: "28",
    title: "Réunion de Prière Hebdomadaire",
    location:
      "Salle Communautaire FJKM, 456 Avenue Laurier, Québec, QC G1V 2L1",
    category: "Prière",
  },
  {
    id: "event-003",
    month: "MAR",
    day: "03",
    title: "Étude Biblique",
    location: "Centre Communautaire FJKM, 789 Rue du Roi, Québec, QC G1K 2X3",
    category: "Étude",
  },
  {
    id: "event-004",
    month: "MAR",
    day: "10",
    title: "Journée de Service Communautaire",
    location: "Centre Communautaire FJKM, 789 Rue du Roi, Québec, QC G1K 2X3",
    category: "Service",
  },
  {
    id: "event-005",
    month: "MAR",
    day: "17",
    title: "Célébration Spéciale - Mois de la Femme",
    location: "Église FJKM Québec, 123 Rue Saint-Jean, Québec, QC G1R 1N5",
    category: "Célébration",
  },
  {
    id: "event-006",
    month: "MAR",
    day: "24",
    title: "Atelier de Formation Spirituelle",
    location:
      "Salle Communautaire FJKM, 456 Avenue Laurier, Québec, QC G1V 2L1",
    category: "Formation",
  },
  {
    id: "event-007",
    month: "AVR",
    day: "01",
    title: "Concert de Louange et Adoration",
    location: "Église FJKM Québec, 123 Rue Saint-Jean, Québec, QC G1R 1N5",
    category: "Concert",
  },
  {
    id: "event-008",
    month: "AVR",
    day: "07",
    title: "Journée de Jeûne et Prière",
    location: "Centre Communautaire FJKM, 789 Rue du Roi, Québec, QC G1K 2X3",
    category: "Prière",
  },
  {
    id: "event-009",
    month: "AVR",
    day: "14",
    title: "Séminaire sur le Leadership Chrétien",
    location:
      "Salle Communautaire FJKM, 456 Avenue Laurier, Québec, QC G1V 2L1",
    category: "Séminaire",
  },
  {
    id: "event-010",
    month: "AVR",
    day: "21",
    title: "Célébration de Pâques",
    location: "Église FJKM Québec, 123 Rue Saint-Jean, Québec, QC G1R 1N5",
    category: "Célébration",
  },
];

const EventItem = memo(({ event }: { event: Event }) => (
  <div
    className="py-4 bg-white rounded-lg border border-gray-200 shadow-sm transition-all duration-300 dark:bg-gray-900 dark:border-gray-700 hover:shadow-md hover:border-primary/20 dark:hover:border-primary/30"
    role="article"
    aria-labelledby={`event-title-${event.id}`}
    data-category={event.category?.toLowerCase()}
  >
    <div className="flex gap-4 items-center">
      <div
        className="flex flex-col items-center justify-center min-w-[60px] text-center"
        aria-hidden="true"
      >
        <div
          className="text-sm font-medium text-primary"
          aria-label={`Mois: ${event.month}`}
        >
          {event.month}
        </div>
        <div
          className="text-2xl font-bold text-gray-900 dark:text-white"
          aria-label={`Jour: ${event.day}`}
        >
          {event.day}
        </div>
      </div>
      <div className="flex-1 min-w-0">
        <h3
          id={`event-title-${event.id}`}
          className="text-base font-medium leading-tight text-gray-900 truncate dark:text-white"
        >
          {event.title}
        </h3>
        <div className="flex items-center mt-1 space-x-2">
          <p
            className="text-sm text-gray-500 truncate dark:text-gray-400"
            aria-label={`Lieu: ${event.location}`}
          >
            {event.location}
          </p>
        </div>
      </div>
      <button
        className="p-2 rounded-full transition-colors shrink-0 hover:bg-gray-100 dark:hover:bg-gray-800"
        aria-label={`Options pour l'événement: ${event.title}`}
        title="Options supplémentaires"
        type="button"
      >
        <MoreVertical
          className="w-4 h-4 text-gray-500 dark:text-gray-400"
          aria-hidden="true"
        />
      </button>
    </div>
  </div>
));

export default function Activities2() {
  return (
    <div className="space-y-4" aria-live="polite" aria-atomic="true">
      <h2
        className="mb-4 text-2xl font-bold text-gray-900 sr-only dark:text-white"
        id="events-heading"
      >
        Événements de l'Église FJKM Québec
      </h2>
      <div
        className="grid grid-cols-1 gap-3 md:grid-cols-2"
        role="list"
        aria-labelledby="events-heading"
        aria-describedby="events-description"
      >
        <p id="events-description" className="sr-only">
          Liste des événements à venir pour la communauté FJKM Québec
        </p>
        {events.map((event) => (
          <EventItem key={event.id} event={event} />
        ))}
      </div>
    </div>
  );
}
