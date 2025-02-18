"use client";

import { memo, useState } from "react";
import { MoreVertical, MapPin, ChevronDown, ChevronUp } from "lucide-react";
import Link from "next/link";
import { GoogleMapsEmbed } from "@next/third-parties/google";
import { EventDetails } from "./event";

export const EventItem = memo(({ event }: { event: EventDetails }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const eventDate = new Date(event.date);
  const month = eventDate
    .toLocaleString("fr-FR", { month: "short" })
    .toUpperCase();
  const day = eventDate.getDate();

  return (
    <div
      className="bg-white rounded-lg border border-gray-200 shadow-sm transition-all duration-300 dark:bg-gray-900 dark:border-gray-700 hover:shadow-md hover:border-primary/20 dark:hover:border-primary/30"
      role="article"
      aria-labelledby={`event-title-${event.id}`}
    >
      <div className="flex gap-4 items-center px-4 py-4">
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
          {event.location && (
            <div className="flex items-center mt-1 space-x-2">
              <div
                className="flex items-center max-w-full text-sm text-gray-500 truncate dark:text-gray-400"
                aria-label={`Lieu: ${event.location}`}
              >
                <MapPin className="mr-1 w-4 h-4 shrink-0" />
                <span className="truncate">
                  {event.location} {event.location}
                </span>
              </div>
            </div>
          )}
        </div>
        <div className="flex items-center space-x-2">
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
          {event.location && (
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="p-2 rounded-full transition-colors hover:bg-gray-100 dark:hover:bg-gray-800"
              aria-label={isExpanded ? "Masquer la carte" : "Afficher la carte"}
            >
              {isExpanded ? (
                <ChevronUp className="w-4 h-4 text-gray-500 dark:text-gray-400" />
              ) : (
                <ChevronDown className="w-4 h-4 text-gray-500 dark:text-gray-400" />
              )}
            </button>
          )}
        </div>
      </div>

      {isExpanded && event.location && (
        <div
          className="overflow-hidden transition-all duration-300 ease-in-out"
          style={{
            maxHeight: isExpanded ? "300px" : "0",
            opacity: isExpanded ? 1 : 0,
          }}
        >
          <div className="px-4 pb-4 animate-fade-in-down">
            <GoogleMapsEmbed
              apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!}
              height={250}
              width="100%"
              mode="place"
              q={event.location}
              style="rounded-lg"
            />
          </div>
        </div>
      )}
    </div>
  );
});
