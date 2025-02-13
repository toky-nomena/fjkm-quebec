import { ActivitySimpleItem } from "../activities/activity-simple-item";
import { getEvents } from "./event-action";

export async function Events() {
  const events = await getEvents();

  return (
    <div className="overflow-y-scroll p-4 mx-auto space-y-4 w-full bg-transparent text-foreground">
      <header className="flex sticky top-0 justify-between items-center">
        <h1 className="text-xl font-bold">Annonces</h1>
      </header>
      <div className="space-y-4">
        {events.map((event) => (
          <div
            key={event.id}
            className="p-4 rounded-lg border border-gray-200 shadow-sm dark:border-gray-700"
          >
            <ActivitySimpleItem activity={event} />
          </div>
        ))}
      </div>
    </div>
  );
}
