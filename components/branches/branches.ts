import { faker } from "@faker-js/faker/locale/fr";

export interface Branch {
  name: string;
  acronym: string;
  slug: string;
  icon: string;
  mission: string;
  missions: string[];
  verse: string;
  color: string;
  responsibles: {
    role: string;
    name: string;
    gender: string;
  }[];
}

function generateResponsibles() {
  const roles = [
    "Président",
    "Vice-président",
    "Secrétaire",
    "Conseiller",
    "Trésorier",
    "Secrétaire financier",
  ];

  return roles.map((role) => ({
    role,
    name: faker.person.fullName(),
    gender: faker.person.sex(),
  }));
}

export async function getBranches(): Promise<Branch[]> {
  return [
    {
      name: "Sampana Sekoly Alahady",
      acronym: "SSA",
      slug: "sampana-sekoly-alahady",
      icon: "book",
      mission:
        "Annoncer l'Évangile et encourager les croyants à travailler pour l'évangélisation et le service.",
      missions: [
        "Sensibilisation et évangélisation en plein air",
        "Formation spirituelle et évangélique",
        "Organisation de réunions de prière pour la communauté",
        "Aide aux personnes dans le besoin par des œuvres de charité",
        "Visites et encouragements aux personnes en détresse spirituelle",
      ],
      verse:
        "Proverbes 22:6 - Instruis l'enfant selon la voie qu'il doit suivre; et quand il sera vieux, il ne s'en détournera pas.",
      color: "#3498db",
      responsibles: generateResponsibles(),
    },
    {
      name: "Sampana Fifohazana",
      acronym: "SAFIF",
      slug: "sampana-fifohazana",
      icon: "zap",
      mission:
        "Diriger les ministères de réveil et de guérison de l'église à travers un éveil spirituel.",
      missions: [
        "Organisation de sessions de réveil",
        "Visites et prières pour les malades",
        "Conseil spirituel",
        "Événements d'évangélisation",
      ],
      verse:
        "Matthieu 11:28 - Venez à moi, vous tous qui êtes fatigués et chargés, et je vous donnerai du repos.",
      color: "#f1c40f",
      responsibles: generateResponsibles(),
    },
    {
      name: "Sampana Mpanazava sy Tily",
      acronym: "SAMPATI",
      slug: "sampana-mpanazava-sy-tily",
      icon: "tent",
      mission:
        "Promouvoir le leadership et le développement personnel à travers les activités de scoutisme.",
      missions: [
        "Organisation de camps et de randonnées",
        "Programmes de formation au leadership",
        "Projets de service communautaire",
        "Sessions d'étude biblique",
      ],
      verse:
        "1 Timothée 4:12 - Personne ne méprise ta jeunesse; mais sois un modèle pour les fidèles, en parole, en conduite, en charité, en foi, en pureté.",
      color: "#2ecc71",
      responsibles: generateResponsibles(),
    },
    {
      name: "Sampana Dorkasy",
      acronym: "DORKASY",
      slug: "sampana-dorkasy",
      icon: "heart",
      mission:
        "Soutenir l'église et la communauté par des actes de bonté et de service.",
      missions: [
        "Couture et dons de vêtements",
        "Distribution de repas aux personnes dans le besoin",
        "Organisation d'événements de collecte de fonds",
        "Visites aux personnes âgées et aux veuves",
      ],
      verse:
        "Matthieu 7:12 - Tout ce que vous voulez que les hommes fassent pour vous, faites-le de même pour eux.",
      color: "#e74c3c",
      responsibles: generateResponsibles(),
    },
    {
      name: "Sampana Lehilahy Kristiana",
      acronym: "SLK",
      slug: "sampana-lehilahy-kristiana",
      icon: "users",
      mission:
        "Guider les hommes chrétiens dans leur croissance spirituelle et leurs responsabilités.",
      missions: [
        "Groupes d'étude biblique",
        "Programmes de leadership et de mentorat",
        "Organisation de conférences pour les hommes",
        "Projets de service communautaire",
      ],
      verse:
        "1 Corinthiens 16:13 - Veillez, demeurez fermes dans la foi, soyez des hommes, fortifiez-vous.",
      color: "#9b59b6",
      responsibles: generateResponsibles(),
    },
    {
      name: "Sampana Tanora Kristiana",
      acronym: "STK",
      slug: "sampana-tanora-kristiana",
      icon: "star",
      mission:
        "Engager les jeunes dans l'église et les accompagner dans leur cheminement de foi.",
      missions: [
        "Rencontres de jeunes et études bibliques",
        "Pratique de musique et de louange",
        "Organisation d'événements sportifs et sociaux",
        "Camps et retraites annuels pour les jeunes",
      ],
      verse:
        "Ecclésiaste 12:1 - Souviens-toi de ton créateur pendant les jours de ta jeunesse.",
      color: "#1abc9c",
      responsibles: generateResponsibles(),
    },
    {
      name: "Fikambanan'ny Mpitendry Zavamaneno",
      acronym: "FIMPIZ",
      slug: "fikambanany-mpitendry-zavamaneno",
      icon: "music",
      mission:
        "Unir et soutenir les musiciens dans leur service pour la gloire de Dieu.",
      missions: [
        "Répétitions hebdomadaires pour les cultes",
        "Formation musicale pour les membres",
        "Concerts de musique chrétienne",
        "Partage de ressources musicales",
      ],
      verse:
        "Colossiens 3:17 - Et que tout ce que vous faites, en parole ou en œuvre, faites-le au nom du Seigneur Jésus.",
      color: "#16a085",
      responsibles: generateResponsibles(),
    },
    {
      name: "Asa sy Fitoriana ny Filazantsara",
      acronym: "AFF",
      slug: "asa-sy-fitoriana-ny-filazantsara",
      icon: "globe",
      mission:
        "Annoncer l'Évangile et encourager les croyants à travailler pour l'évangélisation et le service.",
      missions: [
        "Sensibilisation et évangélisation en plein air",
        "Formation spirituelle et évangélique",
        "Organisation de réunions de prière pour la communauté",
        "Aide aux personnes dans le besoin par des œuvres de charité",
        "Visites et encouragements aux personnes en détresse spirituelle",
      ],
      verse:
        "Matio 28:19-20 - Allez, faites de toutes les nations des disciples, les baptisant au nom du Père, du Fils et du Saint-Esprit.",
      color: "#2980b9",
      responsibles: generateResponsibles(),
    },
    {
      name: "Antoko Mpihira Miako Fiderana",
      acronym: "MIAKO-FIDERANA",
      slug: "antoko-mpihira-miako-fiderana",
      icon: "mic",
      mission:
        "Glorifier Dieu à travers la musique et conduire la congrégation dans la louange.",
      missions: [
        "Répétitions et performances du chœur",
        "Organisation de concerts et de soirées de louange",
        "Formation des nouveaux membres du chœur",
        "Direction musicale lors des cultes",
      ],
      verse:
        "Psaume 96:1 - Chantez à l'Éternel un cantique nouveau! Chantez à l'Éternel, vous tous habitants de la terre!",
      color: "#8e44ad",
      responsibles: generateResponsibles(),
    },
  ];
}

export async function getBranchBySlug(slug: string) {
  const branches = await getBranches();
  return branches.find((branch) => branch.slug === slug);
}
