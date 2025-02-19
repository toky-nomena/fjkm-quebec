import { getEvents } from "./events-action";
import { BlurFade } from "../magicui/blur-fade";
import EventItem from "./event-item";

export async function Events({
  maximum,
  branchName,
}: {
  branchName?: string;
  maximum?: number;
}) {
  const events = await getEvents(branchName).then((events) =>
    maximum ? events.slice(0, maximum) : events
  );

  if (events.length === 0) {
    return (
      <div className="space-y-4">
        <p>Aucune activité prévue pour le moment.</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {events.map((event, index) => (
        <BlurFade delay={0.1 * index} className="" key={event.id}>
          <EventItem key={event.id} event={event} />
        </BlurFade>
      ))}
    </div>
  );
}
