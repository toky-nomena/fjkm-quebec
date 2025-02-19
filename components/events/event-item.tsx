"use client";

import Link from "next/link";
import { memo, useState } from "react";

import { GoogleMapsEmbed } from "@next/third-parties/google";
import { ChevronDown, MapPin } from "lucide-react";

import { cn } from "@/lib/utils";
import { EventDetails } from "./event";
import { getDayAndMonth } from "@/lib/date";

function EventItem({ event }: { event: EventDetails }) {
  const [isOpen, setIsOpen] = useState(false);
  const { day, month } = getDayAndMonth(event.date);

  return (
    <div
      className={cn(
        "overflow-hidden rounded-lg border ease-in-out",
        isOpen ? "shadow-lg" : ""
      )}
    >
      <div className="flex items-center p-3">
        {/* Date Box */}
        <div className="w-[58px] h-[58px] min-w-[58px] flex flex-col rounded-lg overflow-hidden">
          <div className="h-[40%] flex items-center justify-center bg-primary">
            <span className="text-xs font-medium tracking-wide text-white">
              {month}
            </span>
          </div>
          <div className="h-[60%] bg-gradient-to-r from-gray-900 to-gray-900/80 dark:from-gray-100 dark:to-gray-100/80 flex items-center justify-center">
            <span className="text-xl font-bold leading-none text-white dark:text-black">
              {day}
            </span>
          </div>
        </div>

        {/* Title and Address */}
        <Link
          className="flex-1 ml-4"
          href={`/activities/${event.id}`}
          aria-label={`Détails de l'événement: ${event.title}`}
        >
          <h2 className="text-xl font-semibold leading-tight line-clamp-2">
            {event.title}
          </h2>
          <div
            title="Voir plus de détails"
            className="flex gap-2 items-center"
            role="group"
          >
            <div className="flex items-center gap-1.5 rounded-lg">
              <span
                className="text-sm text-gray-500 dark:text-gray-400 line-clamp-1"
                style={{ fontWeight: "normal" }}
              >
                {event.branch.name}
              </span>
            </div>
          </div>
        </Link>

        {/* Action Buttons */}
        <button
          onClick={() => setIsOpen((open) => !open)}
          className="p-2 rounded-full transition-colors hover:bg-gray-100 dark:hover:bg-gray-800"
          aria-label={isOpen ? "Masquer les détails" : "Afficher les détails"}
          aria-expanded={isOpen}
        >
          <ChevronDown
            className={cn(
              "w-4 h-4 text-gray-500 transition-transform duration-200 dark:text-gray-400",
              isOpen ? "rotate-180" : ""
            )}
            aria-hidden="true"
          />
        </button>
      </div>

      {/* Expandable Content */}
      <div
        className={`
            transition-height duration-300 ease-in-out overflow-hidden
            ${isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"}
          `}
        aria-hidden={!isOpen}
      >
        <div className="border-t">
          <div className="p-4 space-y-2">
            <div>
              <h3 className="text-sm font-medium text-gray-600 dark:text-gray-300">
                Heure
              </h3>
              <time
                dateTime={`${event.startTime}-${event.endTime}`}
                className="text-sm"
                aria-label="Heure de l'événement"
              >
                {event.startTime} - {event.endTime}
              </time>
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-600 dark:text-gray-300">
                Lieu
              </h3>
              <p className="text-sm" aria-label="Lieu de l'événement">
                {event.location}
              </p>
            </div>
          </div>
          <GoogleMapsEmbed
            apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!}
            height={250}
            width="100%"
            mode="place"
            q={event.location}
          />
        </div>
      </div>
    </div>
  );
}

export default memo(
  EventItem,
  (prevProps, nextProps) => prevProps.event.id === nextProps.event.id
);
