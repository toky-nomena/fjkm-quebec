import { EventDetails } from "../activities/activity";

export const events: EventDetails[] = [
  {
    id: "1",
    date: "2025-02-05",
    title: "Prière du Matin",
    description:
      "Moment de prière et de méditation collective pour bien commencer la journée",
    startTime: "08:00",
    endTime: "09:00",
    location: "Chapelle Saint-Michel, 123 Rue de la Foi",
    speakers: ["Pasteur Jean Dupont", "Sœur Marie-Claire"],
  },
  {
    id: "2",
    date: "2025-02-05",
    title: "Réunion de Bénévoles",
    description:
      "Réunion hebdomadaire pour coordonner les projets caritatifs et les événements à venir",
    startTime: "10:00",
    endTime: "11:30",
    location: "Salle Communautaire, 456 Boulevard de l’Espoir",
    speakers: [
      "Anne Morel (Responsable des Bénévoles)",
      "Paul Lefèvre (Coordinateur des Projets)",
    ],
  },
  {
    id: "3",
    date: "2025-02-05",
    title: "Déjeuner Partage",
    description:
      "Moment convivial pour partager un repas avec les membres de la communauté",
    startTime: "12:30",
    endTime: "14:00",
    location: "Maison de l’Amitié, 789 Rue Fraternelle",
    speakers: [
      "Chef David Laurent",
      "Lucie Martin (Animatrice du moment de partage)",
    ],
  },
  {
    id: "4",
    date: "2025-02-05",
    title: "Atelier Biblique",
    description:
      "Étude collective des Écritures et discussions autour de thèmes bibliques",
    startTime: "15:00",
    endTime: "16:30",
    location: "Salle de Conférence, 123 Rue de la Foi",
    speakers: ["Pasteur André Petit", "Théologienne Claire Dumas"],
  },
  {
    id: "5",
    date: "2025-02-05",
    title: "Soirée Louange",
    description:
      "Un moment de chants et de prières pour célébrer et se ressourcer spirituellement",
    startTime: "18:00",
    endTime: "20:00",
    location: "Église Saint-Michel, 123 Rue de la Foi",
    speakers: ["Groupe de Louange 'Chœurs de Lumière'", "Frère Thomas Bernard"],
  },
];

export async function getEvents() {
  return events;
}
