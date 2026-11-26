// Les missions / domaines d'expertise — contenu repris du site Provence Compta.
// `icon` correspond à une clé gérée par Icon.astro.

export interface Mission {
  slug: string;
  title: string;
  icon: string;
  highlight: string;
  description: string;
  image: string;
}

export const missions: Mission[] = [
  {
    slug: 'expertise-comptable',
    title: 'Expertise comptable',
    icon: 'calculator',
    highlight: 'Tenue, révision, bilans et lecture des chiffres',
    description:
      "Nous produisons une information comptable fiable, lisible et utile pour sécuriser vos obligations tout en facilitant le pilotage de votre activité.",
    image: '/images/missions/accounting.webp',
  },
  {
    slug: 'gestion-sociale-paie',
    title: 'Gestion sociale et paie',
    icon: 'users',
    highlight: 'Paie, formalités sociales et accompagnement employeur',
    description:
      "Nous prenons en charge la paie, les déclarations sociales et le suivi administratif pour vous aider à rester conforme tout en gagnant du temps.",
    image: '/images/missions/service2.webp',
  },
  {
    slug: 'conseil-fiscal',
    title: 'Conseil fiscal',
    icon: 'tax',
    highlight: 'Conformité, anticipation et optimisation raisonnée',
    description:
      "Nous préparons et transmettons vos déclarations dans les délais tout en vous apportant une lecture claire de vos enjeux fiscaux et de leurs impacts.",
    image: '/images/missions/tax.webp',
  },
  {
    slug: 'accompagnement-juridique',
    title: 'Accompagnement juridique',
    icon: 'gavel',
    highlight: 'Vie sociale, formalités et structuration juridique',
    description:
      "Nous vous aidons à encadrer les décisions importantes de votre entreprise avec une approche rigoureuse, coordonnée et adaptée à votre situation.",
    image: '/images/missions/conseil.webp',
  },
  {
    slug: 'creation-entreprise',
    title: "Création d'entreprise",
    icon: 'rocket',
    highlight: 'Choix de structure, fiscalité et organisation de départ',
    description:
      "Nous accompagnons les créateurs dans leurs choix structurants afin de poser des bases solides, cohérentes et durables dès le lancement de l'activité.",
    image: '/images/missions/service1.webp',
  },
  {
    slug: 'pilotage-gestion-conseil',
    title: 'Pilotage, gestion et conseil',
    icon: 'chart',
    highlight: 'Vision, indicateurs et accompagnement du dirigeant',
    description:
      "Au-delà des obligations, nous transformons vos données en outils de décision pour soutenir la rentabilité, la trésorerie et le développement.",
    image: '/images/missions/wealth.webp',
  },
];

export interface SimpleItem {
  title: string;
  description: string;
}

export const approach: SimpleItem[] = [
  { title: 'Clarté', description: 'Des explications compréhensibles et des recommandations directement utiles à la prise de décision.' },
  { title: 'Proximité', description: 'Un interlocuteur accessible, des échanges réguliers et une relation construite dans la durée.' },
  { title: 'Personnalisation', description: 'Des missions adaptées à votre taille, votre secteur, vos priorités et votre rythme de développement.' },
  { title: 'Réactivité', description: 'Une équipe mobilisée pour traiter vos besoins courants comme vos sujets sensibles avec sérieux et rapidité.' },
];

export const missionBenefits: SimpleItem[] = [
  { title: 'Mieux comprendre vos chiffres', description: 'Une lecture plus claire de votre activité pour prendre des décisions plus sereines et plus rapides.' },
  { title: 'Sécuriser vos obligations', description: 'Une gestion rigoureuse des dimensions comptables, fiscales, sociales et juridiques de votre entreprise.' },
  { title: 'Gagner du temps utile', description: "Moins de charge administrative au quotidien, plus de temps consacré à votre cœur d'activité." },
  { title: 'Avancer avec un vrai partenaire', description: 'Un accompagnement qui allie expertise technique, vision de terrain et présence durable à vos côtés.' },
];
