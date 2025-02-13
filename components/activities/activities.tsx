import { History } from "lucide-react";

import { Activity } from "./activity";
import { getActivities } from "./activities-action";
import { ActivityItem } from "./activity-item";

export default async function Activities() {
  const activities: Activity[] = await getActivities();

  return (
    <div className="relative">
      <div className="absolute bottom-0 left-6 top-8 w-px bg-gray-200 dark:bg-gray-700" />
      <div className="space-y-8">
        {activities.map((activity) => (
          <ActivityItem key={activity.id} activity={activity} />
        ))}
        <button className="flex gap-2 items-center ml-16 text-blue-500 dark:text-blue-400 hover:text-blue-600 dark:hover:text-blue-300">
          <History className="w-4 h-4" />
          Voir plus d'activités
        </button>
      </div>
    </div>
  );
}
