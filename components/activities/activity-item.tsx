import { Calendar } from "lucide-react";
import { ActivitySimpleItem } from "./activity-simple-item";
import { EventDetails } from "../events/event";

interface ActivityItemProps {
  activity: EventDetails;
}

export function ActivityItem({ activity }: ActivityItemProps) {
  return (
    <article
      className="flex relative gap-4 items-start"
      aria-labelledby={`activity-${activity.id}`}
    >
      <div
        className="flex relative z-10 justify-center items-center w-10 h-10 bg-white rounded-full border border-gray-200 shadow-sm sm:w-12 sm:h-12 dark:bg-gray-800 dark:border-gray-700"
        role="presentation"
      >
        <Calendar
          className="w-4 h-4 sm:w-6 sm:h-6 text-primary dark:text-primary-foreground"
          aria-hidden="true"
        />
      </div>

      <div
        className="flex-1 rounded-lg border shadow-sm transition-all border-border"
        role="group"
        aria-label="Détails de l'activité"
      >
        <ActivitySimpleItem activity={activity} />
      </div>
    </article>
  );
}
