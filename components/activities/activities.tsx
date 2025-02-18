import { EventItem } from "../events/event-item";
import { getEvents } from "../events/events-action";

export default async function Activities2() {
  const events = await getEvents();
  return (
    <div className="space-y-4" aria-live="polite" aria-atomic="true">
      <h2
        className="mb-4 text-2xl font-bold text-gray-900 sr-only dark:text-white"
        id="events-heading"
      >
        Événements de l'Église FJKM Québec
      </h2>
      <div
        className="flex flex-col gap-3 md:flex-row md:flex-wrap"
        role="list"
        aria-labelledby="events-heading"
        aria-describedby="events-description"
      >
        <p id="events-description" className="sr-only">
          Liste des événements à venir pour la communauté FJKM Québec
        </p>
        {events.map((event) => (
          <div key={event.id} className="w-full md:w-[calc(50%-0.75rem)]">
            <EventItem event={event} />
          </div>
        ))}
      </div>
    </div>
  );
}
