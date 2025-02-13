import Link from "next/link";

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
    <div className="flex-1">
      <div className="mb-1 text-sm text-slate-600 dark:text-slate-300">
        <span className="font-bold">{formatActivityDate(activity.date)}</span>{" "}
        de {activity.startTime} à {activity.endTime}
      </div>
      <div className="mb-2 text-xl font-semibold text-gray-900 dark:text-white">
        {activity.title}
      </div>
      {activity.location && (
        <Link
          href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
            activity.location
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="block mb-2 text-blue-600 dark:text-blue-400 hover:underline"
        >
          {activity.location}
        </Link>
      )}
    </div>
  );
}
