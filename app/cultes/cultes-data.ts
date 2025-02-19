import { faker } from "@faker-js/faker/locale/fr";
import { nanoid } from "nanoid";

export interface Cult {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  address: string;
}

const cultLocations = [
  "Église FJKM Québec - Siège Principal",
  "Centre Communautaire FJKM",
  "Salle Paroissiale",
  "Chapelle Saint-Marc",
  "Centre Culturel Malgache",
];

export function generateCults(count: number = 20): Cult[] {
  return Array.from({ length: count }, () => {
    const futureDate = faker.date.future({ years: 1 });

    return {
      id: nanoid(),
      title: faker.helpers.arrayElement([
        "Culte du Dimanche",
        "Célébration Mensuelle",
        "Culte Spécial",
        "Louange et Adoration",
        "Culte Familial",
        "Culte des Jeunes",
      ]),
      date: futureDate.toISOString().split("T")[0],
      time: faker.helpers.arrayElement([
        "09:00",
        "10:30",
        "11:00",
        "14:00",
        "16:00",
      ]),
      location: faker.helpers.arrayElement(cultLocations),
      address: faker.location.streetAddress({ useFullAddress: true }),
    };
  }).sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
}

const cults: Cult[] = [];

export async function getCults(): Promise<Cult[]> {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  if (cults.length === 0) {
    cults.push(...generateCults(20));
  }

  return cults;
}

export async function getCultByDate(date: string): Promise<Cult | undefined> {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return generateCults(1)[0];
}
