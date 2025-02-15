import Link from "next/link";
import { MapPin, Clock } from "lucide-react";
import { parseISO, format } from "date-fns";
import { fr } from "date-fns/locale";

interface ActivityItemProps {
  activity: {
    id: string;
    date: string;
    startTime: string;
    endTime: string;
    title: string;
    location?: string;
    speakers?: string[];
  };
}

// Function to format date in the desired French format
const formatActivityDate = (dateString: string) => {
  const date = parseISO(dateString);
  const formattedDate = format(date, "EEEE d MMMM yyyy", { locale: fr });

  // Capitalize the first letter of the day and month
  return formattedDate
    .replace(/^(\w)/, (match) => match.toUpperCase())
    .replace(/\s(\w)/, (match) => match.toUpperCase());
};

export function ActivitySimpleItem({ activity }: ActivityItemProps) {
  return (
    <div className="flex relative flex-col gap-3 p-4 rounded-xl transition-colors duration-300 sm:flex-row sm:items-center group bg-primary/5 hover:bg-primary/10">
      <div className="flex-grow space-y-2">
        <h3
          className="text-lg font-bold text-gray-800 transition-colors duration-300 sm:text-xl dark:text-white group-hover:text-primary"
          id={`activity-${activity.id}`}
        >
          {activity.title}
        </h3>

        <div className="flex flex-wrap gap-2 items-center text-xs text-gray-600 sm:text-sm dark:text-gray-300">
          <div className="flex gap-1 items-center">
            <Clock className="w-3 h-3 sm:w-4 sm:h-4 text-primary" />
            <span className="font-medium">
              {formatActivityDate(activity.date)}
            </span>
          </div>
          <span className="hidden mx-1 opacity-50 sm:inline">•</span>
          <span className="sm:inline">
            {activity.startTime} - {activity.endTime}
          </span>
        </div>

        {activity.location && (
          <Link
            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
              activity.location
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex gap-1 items-center text-xs text-gray-600 transition-colors duration-300 sm:text-sm dark:text-gray-300 hover:text-primary"
          >
            <MapPin className="w-3 h-3 sm:w-4 sm:h-4" />
            <span className="underline decoration-primary/50 hover:decoration-primary">
              {activity.location}
            </span>
          </Link>
        )}
      </div>
    </div>
  );
}
