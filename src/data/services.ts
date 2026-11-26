// Pages détaillées par service : /nos-missions/{slug}/
// Le slug, le titre, l'icône et l'image viennent de missions.ts ; ce fichier ajoute le contenu long.

export interface ServiceItem {
  title: string;
  description: string;
}

export interface ServiceFaq {
  question: string;
  answer: string;
}

export interface ServiceContent {
  slug: string;
  /** Titre affiché dans Google (sans « | Provence Compta »). */
  seoTitle: string;
  seoDescription: string;
  heroTitle: string;
  heroSubtitle: string;
  intro: string[];
  includes: ServiceItem[];
  forWhom: string[];
  steps: ServiceItem[];
  faq: ServiceFaq[];
  /** Slugs de profils (sectors.ts) à mettre en avant. */
  relatedProfiles: string[];
}

export const services: ServiceContent[] = [
  {
    slug: 'expertise-comptable',
    seoTitle: 'Expertise comptable, tenue et bilan : expert-comptable en Provence',
    seoDescription:
      "Tenue comptable, révision, bilan et comptes annuels pour TPE, PME, artisans et professions libérales à Salon-de-Provence, Cavaillon, Les Angles et La Seyne-sur-Mer.",
    heroTitle: 'Une comptabilité fiable pour suivre votre activité et sécuriser vos obligations.',
    heroSubtitle:
      "Tenue, révision, bilan et comptes annuels : nos cabinets de Provence prennent en charge votre comptabilité et vous aident à lire vos chiffres.",
    intro: [
      "La comptabilité est une obligation, mais c'est surtout la source d'information la plus précieuse sur la santé de votre entreprise. Bien tenue, elle vous dit où vous gagnez de l'argent, où vous en perdez et ce que vous pouvez vous permettre.",
      "Selon votre organisation, nous prenons en charge toute la saisie ou nous révisons celle que vous réalisez. Dans les deux cas, vous disposez de comptes justes, produits dans les délais, et d'un interlocuteur qui vous les explique.",
    ],
    includes: [
      { title: 'Tenue ou révision de la comptabilité', description: 'Saisie des pièces, rapprochements bancaires et contrôle de cohérence, ou révision de la comptabilité que vous tenez vous-même.' },
      { title: 'Bilan et comptes annuels', description: 'Établissement du bilan, du compte de résultat et des annexes, avec un rendez-vous pour vous les présenter.' },
      { title: 'Liasse fiscale', description: 'Préparation et télétransmission de la liasse fiscale et des déclarations de résultat dans les délais.' },
      { title: 'Situations intermédiaires', description: 'Des points en cours d’année pour connaître votre résultat sans attendre la clôture.' },
      { title: 'Outils dématérialisés', description: 'Transmission des justificatifs en ligne et accès à vos documents, pour moins de papier et moins d’allers-retours.' },
      { title: 'Facturation électronique', description: 'Accompagnement dans le passage à la facture électronique : choix de la plateforme et adaptation de vos process.' },
    ],
    forWhom: ['Sociétés (SARL, SAS, EURL, SASU…)', 'Entreprises individuelles et micro-entrepreneurs', 'Professions libérales (BNC)', 'SCI et activités immobilières', 'Associations'],
    steps: [
      { title: 'Un premier échange', description: 'Nous faisons le point sur votre activité, votre organisation actuelle et vos attentes.' },
      { title: 'Une lettre de mission claire', description: 'Le périmètre, le calendrier et les honoraires sont fixés par écrit dès le départ.' },
      { title: 'Un suivi tout au long de l’année', description: 'Collecte des pièces, saisie ou révision, puis bilan présenté et expliqué à la clôture.' },
    ],
    faq: [
      { question: 'Quelle est la différence entre tenue et révision comptable ?', answer: 'En tenue, le cabinet enregistre lui-même toutes vos opérations à partir de vos justificatifs. En révision, vous ou votre logiciel tenez la comptabilité et le cabinet la contrôle, la corrige si besoin et établit les comptes annuels.' },
      { question: 'Suis-je concerné par la facture électronique ?', answer: 'Oui. Toutes les entreprises assujetties à la TVA doivent pouvoir recevoir des factures électroniques depuis le 1er septembre 2026. L’obligation d’en émettre s’applique depuis cette date aux grandes entreprises et aux ETI, et à partir du 1er septembre 2027 aux PME, TPE et micro-entreprises. Nous vous aidons à vous y préparer.' },
      { question: 'Puis-je changer d’expert-comptable en cours d’exercice ?', answer: 'Oui. Nous contactons votre ancien cabinet pour organiser la reprise du dossier, selon les règles de la profession, afin d’assurer la continuité de vos obligations.' },
      { question: 'Comment sont fixés les honoraires ?', answer: 'Ils dépendent du volume d’opérations, de la forme juridique et des missions confiées. Ils sont précisés dans la lettre de mission, avant le démarrage.' },
    ],
    relatedProfiles: ['tpe-pme', 'artisans-commercants', 'profession-liberale', 'immobilier'],
  },
  {
    slug: 'gestion-sociale-paie',
    seoTitle: 'Paie et gestion sociale : expert-comptable en Provence',
    seoDescription:
      "Bulletins de paie, DSN, contrats de travail, embauches et fins de contrat : Provence Compta gère la paie et le social des TPE et PME en Provence.",
    heroTitle: 'Une paie juste, des obligations sociales maîtrisées.',
    heroSubtitle:
      "Bulletins de salaire, déclarations sociales, embauches et départs : notre pôle paie s’occupe de vos obligations d’employeur pour que vous puissiez vous concentrer sur votre activité.",
    intro: [
      "La paie est l'un des domaines les plus techniques de la gestion d'une entreprise : conventions collectives, taux de cotisations qui évoluent, déclarations mensuelles, contrôles de l'URSSAF. Une erreur coûte cher, en argent comme en confiance avec vos salariés.",
      "Notre pôle RH et paie, dirigé par Salma Naji, prend en charge l'ensemble de ces obligations pour les entreprises de nos quatre cabinets, du premier salarié aux équipes plus étoffées.",
    ],
    includes: [
      { title: 'Bulletins de paie', description: 'Établissement des bulletins chaque mois, selon votre convention collective, avec les variables que vous nous transmettez.' },
      { title: 'Déclaration sociale nominative (DSN)', description: 'Transmission mensuelle de la DSN et suivi des cotisations auprès des organismes sociaux.' },
      { title: 'Embauches', description: 'Déclaration préalable à l’embauche, rédaction des contrats de travail et affiliation aux organismes.' },
      { title: 'Fins de contrat', description: 'Solde de tout compte, certificat de travail, attestation France Travail, rupture conventionnelle.' },
      { title: 'Conseil employeur', description: 'Réponses à vos questions sur le temps de travail, les congés, les absences ou les aides à l’embauche.' },
      { title: 'Coût d’une embauche', description: 'Simulation du coût total d’un recrutement avant de vous engager.' },
    ],
    forWhom: ['Entreprises qui embauchent leur premier salarié', 'TPE et PME avec salariés', 'Cafés, hôtels et restaurants', 'Artisans et commerçants', 'Professions libérales employeurs'],
    steps: [
      { title: 'Reprise du dossier social', description: 'Nous récupérons vos contrats, votre convention collective et l’historique de paie.' },
      { title: 'Transmission des variables', description: 'Chaque mois, vous nous envoyez heures, absences et primes, par un canal simple.' },
      { title: 'Bulletins et déclarations', description: 'Nous établissons les bulletins, transmettons la DSN et vous alertons sur les échéances.' },
    ],
    faq: [
      { question: 'À partir de combien de salariés faut-il externaliser la paie ?', answer: 'Dès le premier salarié. Les obligations (contrat, DSN, convention collective, mutuelle) sont les mêmes quelle que soit la taille de l’entreprise, et c’est souvent à ce moment que les erreurs coûtent le plus.' },
      { question: 'Que faut-il vous transmettre chaque mois ?', answer: 'Les éléments variables du mois : heures supplémentaires, absences, congés, primes, ainsi que les entrées et sorties de personnel. Nous vous indiquons le format et la date limite.' },
      { question: 'Pouvez-vous rédiger les contrats de travail ?', answer: 'Oui. Nous préparons les contrats (CDI, CDD, temps partiel) et les principaux documents liés à l’embauche et au départ des salariés.' },
    ],
    relatedProfiles: ['tpe-pme', 'cafe-restaurant', 'artisans-commercants', 'transporteur'],
  },
  {
    slug: 'conseil-fiscal',
    seoTitle: 'Conseil fiscal et déclarations : expert-comptable en Provence',
    seoDescription:
      "TVA, impôt sur les sociétés, CFE, impôt sur le revenu du dirigeant : Provence Compta sécurise vos déclarations fiscales et vous aide à faire les bons choix.",
    heroTitle: 'Des déclarations fiscales sécurisées et des choix éclairés.',
    heroSubtitle:
      "TVA, impôt sur les sociétés, impôts locaux, imposition du dirigeant : nous respectons vos échéances et vous expliquons l’impact fiscal de vos décisions.",
    intro: [
      "La fiscalité d'une entreprise ne se limite pas à remplir des formulaires. Le choix du régime, le mode de rémunération du dirigeant ou le moment d'un investissement ont des conséquences directes sur ce que vous payez.",
      "Nous préparons et transmettons vos déclarations dans les délais, et nous vous aidons à anticiper : connaître votre impôt avant la clôture, c'est pouvoir encore agir.",
    ],
    includes: [
      { title: 'TVA', description: 'Déclarations mensuelles, trimestrielles ou annuelles selon votre régime, et suivi des crédits de TVA.' },
      { title: 'Impôt sur les sociétés', description: 'Calcul de l’impôt, acomptes, liasse fiscale et déclarations de résultat.' },
      { title: 'Impôts locaux', description: 'Déclaration et contrôle de la cotisation foncière des entreprises (CFE).' },
      { title: 'Fiscalité du dirigeant', description: 'Arbitrage entre rémunération et dividendes, déclaration des revenus professionnels.' },
      { title: 'Choix du régime fiscal', description: 'Micro, réel simplifié ou réel normal, IR ou IS : comparaison chiffrée avant de choisir.' },
      { title: 'Accompagnement en cas de contrôle', description: 'Préparation des documents et assistance lors d’un contrôle fiscal.' },
    ],
    forWhom: ['Sociétés à l’IS', 'Entrepreneurs individuels à l’IR', 'Professions libérales', 'SCI et loueurs meublés', 'Dirigeants qui veulent optimiser leur rémunération'],
    steps: [
      { title: 'Diagnostic de votre situation', description: 'Régime actuel, échéances, points de vigilance et pistes d’optimisation.' },
      { title: 'Calendrier fiscal', description: 'Vos échéances sont suivies par le cabinet : plus de date oubliée.' },
      { title: 'Point avant la clôture', description: 'Une estimation de l’impôt pour décider en connaissance de cause.' },
    ],
    faq: [
      { question: 'Vaut-il mieux être à l’impôt sur le revenu ou à l’impôt sur les sociétés ?', answer: 'Cela dépend de votre niveau de bénéfice, de vos besoins de rémunération et de vos projets. Nous comparons les deux options avec vos chiffres avant de vous faire une recommandation.' },
      { question: 'Salaire ou dividendes : comment se rémunérer ?', answer: 'Les deux n’ont pas le même coût social et fiscal, ni les mêmes droits (retraite, protection sociale). Nous simulons plusieurs scénarios pour trouver l’équilibre adapté à votre situation.' },
      { question: 'Que se passe-t-il en cas de contrôle fiscal ?', answer: 'Nous préparons avec vous les documents demandés et vous assistons dans les échanges avec l’administration.' },
    ],
    relatedProfiles: ['tpe-pme', 'profession-liberale', 'immobilier', 'createur-entreprise'],
  },
  {
    slug: 'accompagnement-juridique',
    seoTitle: 'Juridique des sociétés et approbation des comptes : expert-comptable en Provence',
    seoDescription:
      "Approbation annuelle des comptes, modifications de statuts, transfert de siège, cession de parts : Provence Compta accompagne la vie juridique de votre société.",
    heroTitle: 'La vie juridique de votre société, suivie avec rigueur.',
    heroSubtitle:
      "Approbation des comptes, modifications des statuts, changement de dirigeant : nous prenons en charge les formalités courantes de votre société.",
    intro: [
      "Une société doit respecter chaque année des obligations juridiques précises, et chaque changement important (siège, capital, dirigeant, activité) passe par des décisions et des formalités encadrées.",
      "Dans le cadre autorisé à la profession, nous préparons ces actes en lien avec votre comptabilité, et nous travaillons avec des avocats et notaires partenaires lorsque le dossier le nécessite.",
    ],
    includes: [
      { title: 'Approbation annuelle des comptes', description: 'Rapport de gestion, procès-verbal d’assemblée et dépôt des comptes au greffe.' },
      { title: 'Modifications statutaires', description: 'Transfert de siège, changement de dénomination, d’objet social ou de dirigeant.' },
      { title: 'Opérations sur le capital', description: 'Augmentation ou réduction de capital, cession de parts ou d’actions.' },
      { title: 'Formalités', description: 'Publication d’annonces légales et formalités auprès du guichet unique.' },
      { title: 'Registres et obligations', description: 'Tenue des registres et déclaration des bénéficiaires effectifs.' },
      { title: 'Coordination avec vos conseils', description: 'Lien avec avocats et notaires pour les opérations les plus complexes.' },
    ],
    forWhom: ['SARL et EURL', 'SAS et SASU', 'SCI', 'Associés qui font évoluer leur société'],
    steps: [
      { title: 'Calendrier juridique', description: 'Nous suivons vos échéances annuelles en même temps que la clôture comptable.' },
      { title: 'Préparation des actes', description: 'Nous rédigeons les documents et vous les soumettons pour validation.' },
      { title: 'Formalités et dépôts', description: 'Nous réalisons les dépôts et vous transmettons les justificatifs.' },
    ],
    faq: [
      { question: 'Quand faut-il approuver les comptes ?', answer: 'Dans les six mois qui suivent la clôture de l’exercice, sauf prolongation accordée par le tribunal de commerce. Les comptes sont ensuite déposés au greffe.' },
      { question: 'Combien de temps prend un transfert de siège ?', answer: 'Il faut compter la décision des associés, la publication d’une annonce légale puis la formalité auprès du guichet unique. Nous vous donnons un calendrier précis selon votre dossier.' },
    ],
    relatedProfiles: ['tpe-pme', 'immobilier', 'createur-entreprise'],
  },
  {
    slug: 'creation-entreprise',
    seoTitle: 'Création d’entreprise et choix du statut : expert-comptable en Provence',
    seoDescription:
      "Choix du statut (micro, EI, EURL, SASU, SARL, SAS), prévisionnel, immatriculation : Provence Compta accompagne les créateurs d’entreprise en Provence.",
    heroTitle: 'Créer votre entreprise sur des bases solides.',
    heroSubtitle:
      "Statut juridique, régime fiscal, prévisionnel et immatriculation : nous vous aidons à faire les bons choix avant de vous lancer.",
    intro: [
      "Les choix faits au moment de la création pèsent pendant des années : protection de votre patrimoine, montant de vos cotisations, imposition de vos bénéfices, possibilité d'accueillir des associés.",
      "Nous comparons les options avec vos propres chiffres, construisons votre prévisionnel et réalisons les démarches, pour que vous démarriez avec un cadre clair.",
    ],
    includes: [
      { title: 'Choix du statut juridique', description: 'Micro-entreprise, entreprise individuelle, EURL, SASU, SARL ou SAS : avantages et limites de chaque option pour votre projet.' },
      { title: 'Choix du régime fiscal et social', description: 'Impôt sur le revenu ou sur les sociétés, statut social du dirigeant et coût réel des cotisations.' },
      { title: 'Prévisionnel financier', description: 'Chiffre d’affaires, charges, trésorerie et seuil de rentabilité, utilisable pour votre banque.' },
      { title: 'Rédaction des statuts', description: 'Statuts adaptés à votre projet et à vos éventuels associés.' },
      { title: 'Immatriculation', description: 'Démarches auprès du guichet unique jusqu’à l’obtention de votre numéro SIREN.' },
      { title: 'Première année accompagnée', description: 'Mise en place de la facturation, du suivi bancaire et des premières déclarations.' },
    ],
    forWhom: ['Porteurs de projet', 'Salariés qui se lancent', 'Micro-entrepreneurs qui changent de statut', 'Repreneurs d’entreprise'],
    steps: [
      { title: 'Étude de votre projet', description: 'Activité, ambitions, besoins de financement et situation personnelle.' },
      { title: 'Comparaison chiffrée', description: 'Les statuts possibles comparés avec vos chiffres, puis notre recommandation.' },
      { title: 'Lancement', description: 'Statuts, immatriculation et mise en place de votre organisation comptable.' },
    ],
    faq: [
      { question: 'Quel statut juridique choisir pour créer son entreprise ?', answer: 'Il n’y a pas de bon statut dans l’absolu. Le choix dépend de votre chiffre d’affaires prévu, de votre besoin de protection, de votre rémunération souhaitée et de la présence d’associés. Nous comparons les options avec vos chiffres.' },
      { question: 'Micro-entreprise ou société ?', answer: 'La micro-entreprise est simple et adaptée pour tester une activité, mais elle est plafonnée en chiffre d’affaires et ne permet pas de déduire vos charges réelles. Une société devient souvent plus intéressante quand l’activité se développe.' },
      { question: 'Combien de temps faut-il pour créer une société ?', answer: 'Une fois les choix arrêtés et le capital déposé, l’immatriculation via le guichet unique prend en général quelques jours à quelques semaines selon le dossier.' },
    ],
    relatedProfiles: ['createur-entreprise', 'artisans-commercants', 'profession-liberale', 'cafe-restaurant'],
  },
  {
    slug: 'pilotage-gestion-conseil',
    seoTitle: 'Pilotage, tableaux de bord et conseil de gestion : expert-comptable en Provence',
    seoDescription:
      "Tableaux de bord, prévisionnel de trésorerie, analyse des marges et accompagnement du dirigeant : Provence Compta vous aide à piloter votre entreprise.",
    heroTitle: 'Des chiffres utiles pour piloter et décider.',
    heroSubtitle:
      "Tableaux de bord, trésorerie, marges et projets : nous transformons votre comptabilité en outil de décision.",
    intro: [
      "Beaucoup de dirigeants découvrent leur résultat des mois après la fin de l'année. Trop tard pour réagir. Un pilotage régulier permet de voir venir une tension de trésorerie, une marge qui se dégrade ou une opportunité d'investir.",
      "Nous construisons avec vous quelques indicateurs simples, adaptés à votre activité, et nous les commentons régulièrement avec vous.",
    ],
    includes: [
      { title: 'Tableaux de bord', description: 'Chiffre d’affaires, marge, charges et trésorerie suivis à un rythme adapté à votre activité.' },
      { title: 'Prévisionnel de trésorerie', description: 'Anticiper les mois tendus et préparer les échéances importantes.' },
      { title: 'Analyse de rentabilité', description: 'Marges par activité, par produit ou par chantier, et calcul du seuil de rentabilité.' },
      { title: 'Budget et prévisionnel', description: 'Fixer des objectifs chiffrés et suivre les écarts en cours d’année.' },
      { title: 'Financement', description: 'Dossiers pour votre banque : prévisionnel, plan de financement, présentation des comptes.' },
      { title: 'Projets du dirigeant', description: 'Investissement, recrutement, développement ou transmission : un regard extérieur chiffré.' },
    ],
    forWhom: ['TPE et PME en croissance', 'Dirigeants qui veulent mieux suivre leur trésorerie', 'Entreprises qui préparent un financement', 'Projets de reprise ou de transmission'],
    steps: [
      { title: 'Choix des indicateurs', description: 'Nous retenons ensemble les chiffres qui comptent vraiment pour votre activité.' },
      { title: 'Mise en place du suivi', description: 'Tableau de bord alimenté par votre comptabilité, à une fréquence définie.' },
      { title: 'Rendez-vous réguliers', description: 'Nous commentons les résultats avec vous et préparons les décisions.' },
    ],
    faq: [
      { question: 'À quelle fréquence faire un point de gestion ?', answer: 'Cela dépend de votre activité : mensuel pour une activité avec beaucoup de flux ou une trésorerie tendue, trimestriel dans la plupart des cas.' },
      { question: 'Pouvez-vous m’aider à obtenir un prêt bancaire ?', answer: 'Nous préparons le prévisionnel, le plan de financement et la présentation de vos comptes, qui sont les éléments attendus par les banques.' },
    ],
    relatedProfiles: ['tpe-pme', 'transporteur', 'agricole', 'cafe-restaurant'],
  },
];

export const getService = (slug: string) => services.find((s) => s.slug === slug);
