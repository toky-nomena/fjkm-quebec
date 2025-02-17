import { memo } from "react";
import { MoreVertical } from "lucide-react";
import Link from "next/link";
import { GoogleMapsEmbed } from "@next/third-parties/google";
import { EventDetails } from "../activities/activity";

export const EventItem = memo(({ event }: { event: EventDetails }) => {
  const eventDate = new Date(event.date);
  const month = eventDate
    .toLocaleString("fr-FR", { month: "short" })
    .toUpperCase();
  const day = eventDate.getDate();

  return (
    <div
      className="py-4 bg-white rounded-lg border-gray-600 shadow-sm transition-all duration-300 border-1 dark:bg-gray-900 dark:border-gray-700 hover:shadow-md hover:border-primary/20 dark:hover:border-primary/30 focus-within:ring-2 focus-within:ring-primary/50 focus-within:border-primary"
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
      {event.location && (
        <div className="px-2 mt-4">
          <GoogleMapsEmbed
            apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!}
            height={250}
            width="100%"
            mode="place"
            q={event.location}
            style="rounded-lg"
          />
        </div>
      )}
    </div>
  );
});
