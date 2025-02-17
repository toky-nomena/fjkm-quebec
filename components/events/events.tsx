import { getActivities } from "../activities/activities-action";
import { BlurFade } from "../magicui/blur-fade";
import { EventItem } from "../activities/activities2";

export async function Events() {
  const events = await getActivities();

  return (
    <div className="space-y-4">
      {events.map((event, index) => (
        <BlurFade delay={0.1 * index} className="" key={event.id} inView>
          <EventItem key={event.id} event={event} />
        </BlurFade>
      ))}
    </div>
  );
}
