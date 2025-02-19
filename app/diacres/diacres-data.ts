import { faker } from "@faker-js/faker/locale/fr";
import { Heart, Shield, Users } from "lucide-react";

type DeaconMember = {
  name: string;
  image: string;
};

type DeaconResponsible = {
  name: string;
  responsibility: string;
  image: string;
};

type DeaconRole = {
  icon: any;
  title: string;
  description: string;
};

export async function getDeaconData(): Promise<{
  members: DeaconMember[];
  responsibles: DeaconResponsible[];
  deaconRoles: DeaconRole[];
}> {
  // Generate realistic deacon data
  const generateMember = (): DeaconMember => {
    const gender = faker.helpers.arrayElement(["male", "female"]);
    return {
      name: faker.person.fullName({ sex: gender }),
      image: gender === "male" ? `/images/boy.png` : `/images/girl.png`,
    };
  };

  const generateResponsible = (): DeaconResponsible => {
    const gender = faker.helpers.arrayElement(["male", "female"]);
    return {
      name: faker.person.fullName({ sex: gender }),
      responsibility: faker.helpers.arrayElement([
        "Ministères sociaux",
        "Logistique et événements",
        "Jeunesse et éducation",
        "Communication",
        "Finances",
        "Accueil et intégration",
      ]),
      image: gender === "male" ? `/images/boy.png` : `/images/girl.png`,
    };
  };

  return {
    members: Array.from({ length: 20 }, generateMember),
    responsibles: Array.from({ length: 6 }, generateResponsible),
    deaconRoles: [
      {
        icon: Heart,
        title: "Service et Compassion",
        description:
          "Les diacres de FJKM Québec incarnent l'esprit de service et de compassion, en répondant aux besoins pratiques et spirituels de notre communauté.",
      },
      {
        icon: Users,
        title: "Intégration Communautaire",
        description:
          "Ils jouent un rôle crucial dans l'accueil et l'intégration des nouveaux membres, en créant un environnement chaleureux et inclusif.",
      },
      {
        icon: Shield,
        title: "Support Pastoral",
        description:
          "Ils travaillent en étroite collaboration avec le pasteur pour soutenir les membres de l'église dans leurs défis personnels et spirituels.",
      },
    ],
  };
}
