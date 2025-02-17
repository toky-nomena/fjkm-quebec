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
        className="grid grid-cols-1 gap-3 md:grid-cols-2"
        role="list"
        aria-labelledby="events-heading"
        aria-describedby="events-description"
      >
        <p id="events-description" className="sr-only">
          Liste des événements à venir pour la communauté FJKM Québec
        </p>
        {events.map((event) => (
          <EventItem key={event.id} event={event} />
        ))}
      </div>
    </div>
  );
}
