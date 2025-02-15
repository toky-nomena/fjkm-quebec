import { getActivities } from "../activities/activities-action";
import { BlurFade } from "../magicui/blur-fade";

export async function Events() {
  const events = await getActivities();

  return (
    <div className="space-y-6">
      {events.slice(0, 3).map((event, index) => (
        <BlurFade delay={0.1 * index} className="" key={event.id} inView>
          <div className="space-y-2 border-b pb-6">
            <h2 className="text-xl md:text-2xl font-bold">{event.title}</h2>
            <p className="text-lg leading-relaxed">{event.description}</p>
          </div>
        </BlurFade>
      ))}
    </div>
  );
}
