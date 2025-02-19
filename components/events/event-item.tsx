"use client";

import Link from "next/link";
import { memo, useState } from "react";

import { GoogleMapsEmbed } from "@next/third-parties/google";
import { ChevronDown } from "lucide-react";

import { cn } from "@/lib/utils";
import { EventDetails } from "./event";
import { getDayAndMonth } from "@/lib/date";

function EventItem({ event }: { event: EventDetails }) {
  const [isOpen, setIsOpen] = useState(false);
  const { day, month } = getDayAndMonth(event.date);

  return (
    <article // Change div to article for semantic meaning
      className={cn(
        "overflow-hidden rounded-lg border ease-in-out",
        isOpen ? "shadow-lg" : ""
      )}
      role="region" // Add role
      aria-labelledby={`event-title-${event.id}`} // Reference the title
    >
      <div className="flex items-center p-3">
        {/* Date Box */}
        <div
          className="w-[58px] h-[58px] min-w-[58px] flex flex-col rounded-lg overflow-hidden"
          role="presentation" // Add role since this is decorative
        >
          <div className="h-[40%] flex items-center justify-center bg-primary">
            <time dateTime={event.date}>
              {/* Add proper time element */}
              <span className="text-xs font-medium tracking-wide text-white">
                {month}
              </span>
            </time>
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
          aria-label={`${event.title} - ${event.branch.name}`} // More descriptive label
        >
          <div className="flex gap-2 items-center">
            <div className="flex items-center gap-1.5 rounded-lg">
              <span className="text-sm text-gray-500 dark:text-gray-400 line-clamp-1">
                {event.branch.name}
              </span>
            </div>
          </div>
          <h2
            id={`event-title-${event.id}`} // Add ID for aria-labelledby reference
            className="font-semibold leading-tight line-clamp-2"
          >
            {event.title}
          </h2>
        </Link>

        {/* Action Buttons */}
        <button
          onClick={() => setIsOpen((open) => !open)}
          className="p-2 rounded-full transition-colors hover:bg-gray-100 dark:hover:bg-gray-800"
          aria-label={`${isOpen ? "Masquer" : "Afficher"} les détails de ${
            event.title
          }`} // More descriptive label
          aria-expanded={isOpen}
          aria-controls={`event-details-${event.id}`} // Add control reference
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
        id={`event-details-${event.id}`} // Add ID for aria-controls reference
        className={`
          transition-height duration-300 ease-in-out overflow-hidden
          ${isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"}
        `}
        aria-hidden={!isOpen}
      >
        <div className="border-t">
          <dl className="p-4 space-y-2">
            {" "}
            {/* Change to description list */}
            <div>
              <dt className="text-sm font-medium text-gray-600 dark:text-gray-300">
                Heure
              </dt>
              <dd>
                <time
                  dateTime={`${event.date}T${event.startTime}/${event.date}T${event.endTime}`}
                  className="text-sm"
                >
                  {event.startTime} - {event.endTime}
                </time>
              </dd>
            </div>
            <div>
              <dt className="text-sm font-medium text-gray-600 dark:text-gray-300">
                Lieu
              </dt>
              <dd className="text-sm">
                <address>{event.location}</address> {/* Use address element */}
              </dd>
            </div>
          </dl>
          <GoogleMapsEmbed
            apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!}
            height={250}
            width="100%"
            mode="place"
            q={event.location}
          />
        </div>
      </div>
    </article>
  );
}

export default memo(
  EventItem,
  (prevProps, nextProps) => prevProps.event.id === nextProps.event.id
);
