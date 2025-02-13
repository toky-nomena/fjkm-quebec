import { Clock, History, Users } from "lucide-react";
import Link from "next/link";
import { parseISO, format } from "date-fns";
import { fr } from "date-fns/locale";
import { activities } from "./activities-data";

// Function to format date in the desired French format
const formatActivityDate = (dateString: string) => {
  const date = parseISO(dateString);
  const formattedDate = format(date, "EEEE d MMMM yyyy", { locale: fr });

  // Capitalize the first letter of the day and month
  return formattedDate
    .replace(/^(\w)/, (match) => match.toUpperCase())
    .replace(/\s(\w)/, (match) => match.toUpperCase());
};

export default function Activities() {
  return (
    <div className="relative">
      <div className="absolute bottom-0 left-6 top-8 w-px bg-gray-200 dark:bg-gray-700" />
      <div className="space-y-8">
        {activities.map((activity) => (
          <div key={activity.id} className="flex relative gap-4 items-start">
            <div className="flex relative z-10 justify-center items-center w-12 h-12 bg-white rounded-full border border-gray-200 shadow-sm dark:bg-gray-800 dark:border-gray-700">
              <Clock className="w-6 h-6 text-blue-500 dark:text-blue-400" />
            </div>
            <div className="flex flex-1 p-4 rounded-lg border border-gray-200 shadow-sm dark:border-gray-700">
              <div className="flex-1">
                <div className="mb-1 text-sm text-slate-600 dark:text-slate-300">
                  <span className="font-bold">
                    {formatActivityDate(activity.date)}
                  </span>{" "}
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
                {activity.speakers && activity.speakers.length > 0 && (
                  <div className="flex items-center text-sm text-slate-600 dark:text-slate-300">
                    <Users className="mr-2 w-4 h-4 text-blue-500 dark:text-blue-400" />
                    <span>Intervenants: {activity.speakers.join(", ")}</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
        <button className="flex gap-2 items-center ml-16 text-blue-500 dark:text-blue-400 hover:text-blue-600 dark:hover:text-blue-300">
          <History className="w-4 h-4" />
          Voir plus d'activités
        </button>
      </div>
    </div>
  );
}
