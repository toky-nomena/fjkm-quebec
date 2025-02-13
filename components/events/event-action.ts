import { Activity } from "../activities/activity";

const eventGroups: Activity[] = [
  {
    id: "1",
    title: "Culte du Dimanche",
    description:
      "Notre culte du Dimanche se tiendra le 15 Fevrier 2025 au 222 Avenue Ducharme, Quebec",
    date: "2025-02-05",
    startTime: "09:00",
    endTime: "12:00",
    location: "222 Avenue Ducharme, Quebec",
    speakers: ["Père Jean Dupont", "Sœur Marie-Claire"],
  },
  {
    id: "2",
    title: "Réunion de Bénévoles",
    description:
      "Réunion hebdomadaire pour coordonner les projets caritatifs et les événements à venir",
    date: "2025-02-05",
    startTime: "10:00",
    endTime: "11:30",
    location: "Salle Communautaire, 456 Boulevard de l’Espoir",
    speakers: [
      "Anne Morel (Responsable des Bénévoles)",
      "Paul Lefèvre (Coordinateur des Projets)",
    ],
  },
];

export async function getEvents() {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  return eventGroups;
}
