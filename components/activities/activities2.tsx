import { memo } from "react";
import { MoreVertical } from "lucide-react";
import { getActivities } from "./activities-action";
import { Activity } from "./activity";
import Link from "next/link";

export const EventItem = memo(({ event }: { event: Activity }) => {
  const eventDate = new Date(event.date);
  const month = eventDate
    .toLocaleString("fr-FR", { month: "short" })
    .toUpperCase();
  const day = eventDate.getDate().toString().padStart(2, "0");

  return (
    <div
      className="py-4 bg-white rounded-lg border border-gray-200 shadow-sm transition-all duration-300 dark:bg-gray-900 dark:border-gray-700 hover:shadow-md hover:border-primary/20 dark:hover:border-primary/30"
      role="article"
      aria-labelledby={`event-title-${event.id}`}
    >
      <div className="flex gap-4 items-center px-2">
        <div
          className="flex flex-col items-center justify-center min-w-[60px] text-center"
          aria-hidden="true"
        >
          <div
            className="text-sm font-medium text-primary"
            aria-label={`Mois: ${month}`}
          >
            {month}
          </div>
          <div
            className="text-2xl font-bold text-gray-900 dark:text-white"
            aria-label={`Jour: ${day}`}
          >
            {day}
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
        <Link
          href={`/activities/${event.id}`}
          className="p-2 rounded-full transition-colors shrink-0 hover:bg-gray-100 dark:hover:bg-gray-800"
          aria-label={`Détails de l'événement: ${event.title}`}
          title="Voir plus de détails"
        >
          <MoreVertical
            className="w-4 h-4 text-gray-500 dark:text-gray-400"
            aria-hidden="true"
          />
        </Link>
      </div>
    </div>
  );
});

export default async function Activities2() {
  const events = await getActivities();
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
