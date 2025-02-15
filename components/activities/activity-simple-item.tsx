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
    <div className="relative p-4 space-y-3 rounded-xl transition-colors duration-300 group bg-primary/5 hover:bg-primary/10">
      <h3
        className="text-xl font-bold text-gray-800 transition-colors duration-300 dark:text-white group-hover:text-primary"
        id={`activity-${activity.id}`}
      >
        {activity.title}
      </h3>

      <div className="flex gap-2 items-center text-sm text-gray-600 dark:text-gray-300">
        <Clock className="w-4 h-4 text-primary" />
        <span className="font-medium">{formatActivityDate(activity.date)}</span>
        <span className="mx-1 opacity-50">•</span>
        <span>
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
          className="flex gap-2 items-center text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-primary"
        >
          <MapPin className="w-4 h-4" />
          <span className="underline decoration-primary/50 hover:decoration-primary">
            {activity.location}
          </span>
        </Link>
      )}
    </div>
  );
}
