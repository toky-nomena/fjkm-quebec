import { faker } from "@faker-js/faker/locale/fr";
import { EventDetails } from "./event";
import { getBranches } from "../branches/branches";

async function generateEvent(id: string): Promise<EventDetails> {
  const branches = await getBranches();

  const startTime = faker.date.future({ years: 1 });
  const endTime = new Date(startTime.getTime() + 90 * 60000); // 90 minutes later

  return {
    id,
    date: startTime.toISOString().split("T")[0],
    title: faker.lorem.words({ min: 6, max: 8 }),
    description: faker.lorem.paragraph(),
    startTime: startTime.toLocaleTimeString("fr-FR", {
      hour: "2-digit",
      minute: "2-digit",
    }),
    endTime: endTime.toLocaleTimeString("fr-FR", {
      hour: "2-digit",
      minute: "2-digit",
    }),
    location: `${faker.location.streetAddress()}, ${faker.location.city()}`,
    speakers: [
      `${faker.person.prefix()} ${faker.person.fullName()}`,
      `${faker.person.prefix()} ${faker.person.fullName()}`,
    ],
    branch: faker.helpers.arrayElement(branches),
  };
}

export const events: EventDetails[] = [];

export async function getEvents(branchName?: string) {
  if (events.length === 0) {
    const newEvents = await Promise.all(
      Array.from({ length: 10 }, (_, i) => generateEvent((i + 1).toString()))
    );
    events.push(...newEvents);
  }

  const filteredEvents = branchName
    ? events.filter((event) => event.branch.name === branchName)
    : events;

  return filteredEvents.sort(
    (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
  );
}
