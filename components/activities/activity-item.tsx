import { Calendar, Clock } from "lucide-react";
import { ActivitySimpleItem } from "./activity-simple-item";
import { Activity } from "./activity";

interface ActivityItemProps {
  activity: Activity;
}

export function ActivityItem({ activity }: ActivityItemProps) {
  return (
    <div className="flex relative gap-4 items-start">
      <div className="flex relative z-10 justify-center items-center w-12 h-12 bg-white rounded-full border border-gray-200 shadow-sm dark:bg-gray-800 dark:border-gray-700">
        <Calendar className="w-6 h-6 text-blue-500 dark:text-blue-400" />
      </div>
      <div className="flex flex-1 p-4 rounded-lg border border-gray-200 shadow-sm dark:border-gray-700">
        <ActivitySimpleItem activity={activity} />
      </div>
    </div>
  );
}
