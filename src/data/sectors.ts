// Profils / secteurs accompagnés — contenu repris du site Provence Compta.
export interface ProfileContentItem { title: string; description: string; }

export interface Sector {
  slug: string;
  label: string;
  icon: string;
  shortDescription: string;
  image: string;
  heroTitle: string;
  heroSubtitle: string;
  trustItems: string[];
  overviewTitle: string;
  overview: string;
  needs: ProfileContentItem[];
  support: ProfileContentItem[];
  benefits: ProfileContentItem[];
  process: ProfileContentItem[];
  whyChooseUs: ProfileContentItem[];
  finalCtaTitle: string;
  finalCtaText: string;
}

export const sectors: Sector[] = [
  {
    slug: 'btp',
    label: 'BTP',
    icon: 'building',
    shortDescription: 'Chantiers, sous-traitance, TVA et paie du bâtiment : un suivi taillé pour les entreprises du BTP.',
    // Photo provisoire : à remplacer par une photo de chantier (public/images/sectors/btp.webp).
    image: '/images/sectors/artisans-commercants.webp',
    heroTitle: 'Expert-comptable pour les entreprises du BTP en Provence.',
    heroSubtitle: 'Maçons, électriciens, plombiers, peintres, entreprises générales : le BTP est le premier secteur accompagné par nos quatre cabinets.',
    trustItems: ['Marge par chantier', 'TVA et sous-traitance', 'Paie du bâtiment'],
    overviewTitle: 'Un accompagnement qui parle le langage du chantier.',
    overview: "Le bâtiment a ses propres règles : autoliquidation de la TVA en sous-traitance, situations de travaux, retenues de garantie, caisse de congés payés du BTP, trésorerie tendue entre l'achat des matériaux et le paiement du client. Nous connaissons ces mécanismes et vous aidons à garder la maîtrise de vos chantiers comme de vos comptes.",
    needs: [
      { title: 'Connaître la marge de chaque chantier', description: 'Matériaux, main-d’œuvre, sous-traitance, location de matériel : savoir quels chantiers rapportent et lesquels coûtent.' },
      { title: 'Appliquer les bonnes règles de TVA', description: 'Autoliquidation en sous-traitance, taux réduits en rénovation de logements, attestations clients : des règles précises et souvent contrôlées.' },
      { title: 'Tenir la trésorerie', description: 'Acomptes, situations de travaux, retenues de garantie et retards de paiement : anticiper pour ne pas être pris de court.' },
    ],
    support: [
      { title: 'Comptabilité adaptée au BTP', description: 'Suivi des situations de travaux, des retenues de garantie et de la TVA, avec une lecture des marges par chantier lorsque c’est utile.' },
      { title: 'Paie du bâtiment', description: 'Notre pôle paie applique les conventions collectives du BTP, gère les indemnités de trajet et de panier et les déclarations à la caisse de congés payés.' },
      { title: 'Prévisionnel et banque', description: 'Prévisionnel, plan de financement et dossiers bancaires pour vos investissements en véhicules et en matériel.' },
    ],
    benefits: [
      { title: 'Des devis mieux calculés', description: 'En connaissant vos coûts réels, vous chiffrez vos prochains chantiers avec plus de justesse.' },
      { title: 'Moins de risque en cas de contrôle', description: 'TVA, sous-traitance et paie sont traitées selon les règles du secteur.' },
      { title: 'Une trésorerie anticipée', description: 'Les tensions sont repérées avant de devenir des difficultés.' },
    ],
    process: [
      { title: 'Comprendre votre activité', description: 'Corps de métier, clients particuliers ou professionnels, sous-traitance, équipe : nous faisons le point.' },
      { title: 'Organiser le suivi', description: 'Factures, situations, achats et heures sont collectés simplement, au rythme de vos chantiers.' },
      { title: 'Piloter ensemble', description: 'Points réguliers sur les marges, la trésorerie et les projets de l’entreprise.' },
    ],
    whyChooseUs: [
      { title: 'Le premier secteur de nos cabinets', description: 'Le BTP est le premier secteur accompagné à Salon-de-Provence, Cavaillon, Les Angles et La Seyne-sur-Mer.' },
      { title: 'Un pôle paie dédié', description: 'Les spécificités sociales du bâtiment sont gérées par une équipe qui les pratique chaque mois.' },
    ],
    finalCtaTitle: 'Vous dirigez une entreprise du bâtiment ?',
    finalCtaText: 'Échangeons sur vos chantiers, votre TVA, votre paie et vos projets.',
  },
  {
    slug: 'createur-entreprise',
    label: "Créateur d'entreprise",
    icon: 'rocket',
    shortDescription: "Structurer le projet, choisir le bon cadre et lancer sereinement l'activité.",
    image: '/images/sectors/createur-entreprise.webp',
    heroTitle: 'Créer votre entreprise avec un cadre clair dès le départ.',
    heroSubtitle: 'Provence Compta accompagne les créateurs dans les choix comptables, fiscaux, sociaux et administratifs qui conditionnent un lancement solide.',
    trustItems: ['Choix du statut', 'Prévisionnel', 'Démarches de création'],
    overviewTitle: 'Un accompagnement pour transformer votre projet en structure fiable.',
    overview: "La création d'entreprise demande de prendre vite les bonnes décisions : statut, régime fiscal, protection du dirigeant, organisation administrative et premiers indicateurs. Nous vous aidons à poser une base simple, lisible et adaptée à votre ambition.",
    needs: [
      { title: 'Choisir le bon cadre juridique et fiscal', description: 'Comparer les options avec une lecture concrète de leurs impacts sur vos revenus, vos charges et votre protection.' },
      { title: 'Construire un prévisionnel cohérent', description: 'Évaluer les besoins de financement, les marges, les charges fixes et le seuil de rentabilité avant de vous engager.' },
      { title: 'Démarrer avec une organisation fiable', description: 'Mettre en place les bons réflexes de facturation, de suivi bancaire et de classement des justificatifs.' },
    ],
    support: [
      { title: 'Étude du projet', description: 'Nous analysons votre activité, votre modèle économique et vos objectifs pour cadrer les priorités.' },
      { title: 'Structuration de la création', description: 'Nous vous orientons sur les choix essentiels et vous accompagnons dans les formalités de démarrage.' },
      { title: 'Suivi des premiers mois', description: 'Nous sécurisons les premières obligations et vous aidons à lire rapidement les signaux financiers utiles.' },
    ],
    benefits: [
      { title: "Moins d'incertitude", description: 'Vous avancez avec des choix expliqués, chiffrés et adaptés à votre situation.' },
      { title: 'Un démarrage plus serein', description: 'Les obligations de base sont anticipées pour éviter les oublis et les corrections coûteuses.' },
      { title: 'Une vision de pilotage', description: 'Vous disposez rapidement de repères pour suivre la trésorerie, la rentabilité et les priorités.' },
    ],
    process: [
      { title: 'Rendez-vous de cadrage', description: 'Nous clarifions le projet, les contraintes personnelles et les objectifs de développement.' },
      { title: 'Simulation et arbitrages', description: 'Nous comparons les options et validons les choix qui soutiennent le mieux votre lancement.' },
      { title: 'Mise en route', description: "Nous installons l'organisation comptable et le calendrier des obligations." },
    ],
    whyChooseUs: [
      { title: 'Une approche pédagogique', description: 'Nous expliquons les choix techniques avec des mots simples pour que vous restiez acteur de votre projet.' },
      { title: 'Une proximité terrain', description: 'Nos cabinets connaissent les réalités des entrepreneurs locaux et les enjeux des premiers mois.' },
    ],
    finalCtaTitle: 'Vous avez un projet de création ?',
    finalCtaText: 'Échangeons sur votre idée, vos contraintes et les choix à sécuriser avant le lancement.',
  },
  {
    slug: 'tpe-pme',
    label: 'TPE / PME',
    icon: 'building',
    shortDescription: 'Piloter la croissance, fiabiliser les obligations et garder une vision claire.',
    image: '/images/sectors/tpe-pme.webp',
    heroTitle: 'Piloter votre TPE ou PME avec des chiffres lisibles et utiles.',
    heroSubtitle: 'Nous accompagnons les dirigeants dans la tenue comptable, les obligations fiscales et sociales, et le suivi des indicateurs qui soutiennent la croissance.',
    trustItems: ['Pilotage', 'Fiscalité', 'Organisation'],
    overviewTitle: 'Un partenaire comptable pour garder le contrôle dans la durée.',
    overview: "Une TPE ou une PME a besoin d'une comptabilité fiable, mais aussi d'une lecture claire de sa rentabilité, de sa trésorerie et de ses obligations. Notre rôle est de vous aider à décider avec des données à jour et une vision concrète.",
    needs: [
      { title: 'Fiabiliser les obligations', description: 'Tenue comptable, déclarations fiscales, comptes annuels et suivi social doivent rester sous contrôle.' },
      { title: 'Anticiper la trésorerie', description: "Les décalages d'encaissement, les charges et les investissements demandent une lecture régulière." },
      { title: 'Structurer la croissance', description: 'Recrutement, financement, marge et organisation interne doivent avancer avec une vision partagée.' },
    ],
    support: [
      { title: 'Suivi comptable régulier', description: 'Nous assurons une production fiable et lisible pour éviter les zones floues.' },
      { title: 'Conseil dirigeant', description: 'Nous vous aidons à interpréter les chiffres et à préparer les décisions importantes.' },
      { title: 'Coordination fiscale et sociale', description: 'Nous mettons en cohérence les obligations avec le rythme réel de votre activité.' },
    ],
    benefits: [
      { title: 'Des obligations sécurisées', description: 'Les échéances sont anticipées et les informations essentielles sont consolidées.' },
      { title: 'Une meilleure lecture des marges', description: 'Vous identifiez plus vite ce qui soutient ou fragilise la rentabilité.' },
      { title: 'Des décisions plus rapides', description: "Vous disposez d'une information claire pour arbitrer sans attendre la clôture annuelle." },
    ],
    process: [
      { title: 'Diagnostic de fonctionnement', description: 'Nous étudions votre organisation actuelle, vos outils et vos points de friction.' },
      { title: 'Mise en place du suivi', description: 'Nous cadrons les flux, les échéances et les indicateurs utiles à votre pilotage.' },
      { title: 'Points de conseil', description: 'Nous organisons des échanges pour anticiper les choix fiscaux, sociaux et financiers.' },
    ],
    whyChooseUs: [
      { title: 'Une vision globale', description: 'Nous relions comptabilité, fiscalité, social et pilotage pour éviter les décisions isolées.' },
      { title: 'Un suivi adapté à votre taille', description: "L'accompagnement reste concret, proportionné et tourné vers vos priorités de dirigeant." },
    ],
    finalCtaTitle: 'Vous dirigez une TPE ou une PME ?',
    finalCtaText: 'Parlons de votre organisation, de vos indicateurs et des leviers pour piloter avec plus de clarté.',
  },
  {
    slug: 'profession-liberale',
    label: 'Profession libérale',
    icon: 'stethoscope',
    shortDescription: 'Une gestion précise, pédagogique et adaptée aux enjeux de votre exercice.',
    image: '/images/sectors/profession-liberale.webp',
    heroTitle: 'Accompagner votre activité libérale avec précision et pédagogie.',
    heroSubtitle: 'Nous aidons les professions libérales à maîtriser leurs obligations, leur fiscalité et leur organisation administrative sans perdre de vue leur exercice.',
    trustItems: ['BNC', 'Fiscalité', 'Organisation'],
    overviewTitle: 'Une gestion adaptée aux spécificités de votre exercice.',
    overview: 'Les professions libérales doivent concilier exigence métier, obligations fiscales, cotisations sociales et pilotage des revenus. Nous vous apportons une lecture claire pour sécuriser votre situation et mieux anticiper.',
    needs: [
      { title: 'Maîtriser le régime fiscal', description: 'Identifier les obligations, les déductions pertinentes et les arbitrages adaptés à votre exercice.' },
      { title: 'Anticiper les cotisations', description: 'Éviter les mauvaises surprises en suivant les revenus, les appels et les régularisations.' },
      { title: 'Gagner du temps administratif', description: 'Organiser les pièces, les flux et les échéances pour vous concentrer sur votre activité.' },
    ],
    support: [
      { title: 'Suivi comptable spécialisé', description: 'Nous traitons vos flux avec une lecture adaptée aux professions libérales.' },
      { title: 'Conseil fiscal', description: 'Nous vous aidons à comprendre les impacts de vos choix et à anticiper les échéances.' },
      { title: 'Pilotage des revenus', description: 'Nous suivons les indicateurs utiles pour mieux gérer revenus, charges et investissements.' },
    ],
    benefits: [
      { title: 'Une fiscalité plus lisible', description: 'Vous comprenez vos obligations et les leviers à activer selon votre situation.' },
      { title: 'Un quotidien allégé', description: 'La gestion administrative devient plus fluide et moins chronophage.' },
      { title: 'Une meilleure anticipation', description: 'Vous visualisez plus clairement revenus, charges sociales et décisions à préparer.' },
    ],
    process: [
      { title: "Analyse de l'exercice", description: 'Nous identifions votre régime, vos flux, vos contraintes et vos objectifs.' },
      { title: 'Organisation des obligations', description: 'Nous mettons en place un calendrier clair et des méthodes simples de transmission.' },
      { title: 'Suivi et conseil', description: 'Nous vous accompagnons sur les déclarations, les arbitrages et les évolutions de votre activité.' },
    ],
    whyChooseUs: [
      { title: 'Une lecture claire des régimes', description: 'Nous traduisons les sujets techniques en décisions compréhensibles et actionnables.' },
      { title: 'Une relation de proximité', description: "Vous bénéficiez d'un interlocuteur disponible pour suivre les évolutions de votre exercice." },
    ],
    finalCtaTitle: 'Vous exercez en profession libérale ?',
    finalCtaText: 'Construisons un suivi clair pour sécuriser vos obligations et mieux piloter votre activité.',
  },
  {
    slug: 'artisans-commercants',
    label: 'Artisans commerçants',
    icon: 'store',
    shortDescription: 'Un accompagnement concret pour allier performance, conformité et terrain.',
    image: '/images/sectors/artisans-commercants.webp',
    heroTitle: 'Accompagner les artisans et commerçants au plus près du terrain.',
    heroSubtitle: 'Nous aidons les activités de proximité à suivre leurs marges, leurs obligations et leur trésorerie avec une approche concrète.',
    trustItems: ['Marge', 'Trésorerie', 'Conformité'],
    overviewTitle: 'Une comptabilité utile pour les décisions du quotidien.',
    overview: "Artisans et commerçants avancent dans un rythme exigeant : achats, stocks, encaissements, charges, paie et saisonnalité. Nous vous aidons à garder une vision claire pour mieux protéger votre rentabilité.",
    needs: [
      { title: 'Suivre les marges', description: 'Comprendre les coûts, les prix, les achats et les charges qui influencent directement la performance.' },
      { title: 'Gérer les obligations courantes', description: "Tenir les échéances comptables, fiscales et sociales sans perturber l'activité opérationnelle." },
      { title: 'Piloter la trésorerie', description: 'Anticiper les charges, les investissements, les décalages de paiement et les périodes plus sensibles.' },
    ],
    support: [
      { title: 'Organisation comptable simple', description: 'Nous mettons en place un suivi adapté à vos flux et à vos habitudes de gestion.' },
      { title: 'Analyse de rentabilité', description: "Nous vous aidons à lire les marges, les charges et les points d'attention." },
      { title: 'Accompagnement social et fiscal', description: 'Nous sécurisons les déclarations, la paie si nécessaire et les arbitrages du dirigeant.' },
    ],
    benefits: [
      { title: 'Des chiffres plus utiles', description: 'Vous obtenez une lecture concrète de ce qui se passe dans votre activité.' },
      { title: 'Une gestion plus fluide', description: 'Les obligations sont organisées pour limiter les urgences et les oublis.' },
      { title: 'Une rentabilité mieux protégée', description: "Les signaux faibles sont identifiés avant qu'ils ne deviennent des difficultés." },
    ],
    process: [
      { title: 'Comprendre votre fonctionnement', description: 'Nous analysons vos flux, vos outils, vos contraintes horaires et vos priorités.' },
      { title: 'Structurer le suivi', description: 'Nous adaptons la collecte et la restitution des informations à votre quotidien.' },
      { title: 'Faire le point régulièrement', description: "Nous suivons les indicateurs utiles pour ajuster les décisions au fil de l'activité." },
    ],
    whyChooseUs: [
      { title: 'Une approche très concrète', description: 'Notre conseil part de vos réalités opérationnelles, pas seulement des obligations administratives.' },
      { title: 'Une proximité locale', description: 'Nos équipes accompagnent des entreprises de terrain avec un suivi direct et accessible.' },
    ],
    finalCtaTitle: 'Vous êtes artisan ou commerçant ?',
    finalCtaText: 'Échangeons sur vos marges, votre organisation et les priorités à sécuriser.',
  },
  {
    slug: 'immobilier',
    label: 'Immobilier',
    icon: 'home',
    shortDescription: 'Optimiser la structuration, la fiscalité et le suivi des opérations patrimoniales.',
    image: '/images/sectors/immobilier.webp',
    heroTitle: 'Structurer vos activités immobilières avec une vision fiscale claire.',
    heroSubtitle: 'Nous accompagnons les projets immobiliers dans leur organisation comptable, fiscale et patrimoniale pour sécuriser chaque opération.',
    trustItems: ['Structuration', 'Fiscalité', 'Suivi patrimonial'],
    overviewTitle: 'Un accompagnement pour choisir le bon montage et suivre les opérations.',
    overview: "L'immobilier demande des arbitrages précis : détention, location, fiscalité, financement, amortissements et suivi des résultats. Nous vous aidons à structurer vos projets avec une lecture claire des impacts.",
    needs: [
      { title: 'Choisir la bonne structure', description: 'SCI, activité en nom propre, location meublée ou autre organisation doivent être comparés selon vos objectifs.' },
      { title: 'Optimiser la fiscalité', description: 'Les régimes, déductions, amortissements et résultats doivent être anticipés avant les décisions.' },
      { title: 'Suivre les opérations', description: 'Financement, charges, travaux, loyers et résultats nécessitent une comptabilité claire.' },
    ],
    support: [
      { title: 'Analyse du projet', description: "Nous étudions la nature de l'opération, les objectifs patrimoniaux et les contraintes fiscales." },
      { title: 'Mise en place comptable', description: 'Nous organisons le suivi des flux, des justificatifs, des emprunts et des obligations.' },
      { title: 'Conseil dans la durée', description: 'Nous accompagnons les arbitrages liés à la détention, la rentabilité et l’évolution du patrimoine.' },
    ],
    benefits: [
      { title: 'Des choix mieux éclairés', description: 'Vous comprenez les conséquences comptables et fiscales avant de vous engager.' },
      { title: 'Un suivi patrimonial lisible', description: 'Les résultats, charges et flux sont organisés pour faciliter les décisions.' },
      { title: 'Moins de risques fiscaux', description: 'Les obligations sont traitées avec rigueur et les points sensibles sont anticipés.' },
    ],
    process: [
      { title: 'Qualification du projet', description: 'Nous identifions votre objectif : revenu, patrimoine, transmission ou opération spécifique.' },
      { title: 'Arbitrage de structuration', description: 'Nous comparons les options et leurs impacts sur la fiscalité et la gestion.' },
      { title: 'Suivi annuel', description: 'Nous assurons les obligations et les points de conseil nécessaires à la bonne tenue du projet.' },
    ],
    whyChooseUs: [
      { title: 'Une approche précise', description: 'Nous combinons comptabilité, fiscalité et logique patrimoniale pour éviter les angles morts.' },
      { title: 'Un conseil pragmatique', description: 'Les recommandations sont reliées à vos objectifs réels, pas à un montage standard.' },
    ],
    finalCtaTitle: 'Vous avez un projet immobilier ?',
    finalCtaText: 'Faisons le point sur sa structure, sa fiscalité et son suivi comptable.',
  },
  {
    slug: 'transporteur',
    label: 'Transporteur',
    icon: 'truck',
    shortDescription: "Maîtriser les charges, les obligations et les indicateurs utiles à l'activité.",
    image: '/images/sectors/transporteur.webp',
    heroTitle: 'Aider les transporteurs à maîtriser charges, obligations et marges.',
    heroSubtitle: 'Nous accompagnons les entreprises de transport avec une paie spécialisée pour les conducteurs et une lecture attentive des coûts et de la trésorerie.',
    trustItems: ['Paie des conducteurs', 'Charges', 'Trésorerie'],
    overviewTitle: 'Un suivi comptable adapté à un secteur à fortes contraintes.',
    overview: 'Le transport exige une gestion fine des coûts : carburant, véhicules, entretien, personnel, assurances et financement. Notre accompagnement vise à rendre ces données lisibles pour protéger votre marge.',
    needs: [
      { title: 'Maîtriser les charges variables', description: 'Carburant, entretien et frais de route doivent être suivis avec attention pour préserver la rentabilité.' },
      { title: 'Anticiper les investissements', description: 'Véhicules, financements et renouvellements demandent une projection de trésorerie fiable.' },
      { title: 'Sécuriser la paie des conducteurs', description: 'Temps de service, heures supplémentaires, indemnités de repas et de déplacement : une paie à fort volume, encadrée par la convention collective des transports routiers, qui doit être juste chaque mois.' },
    ],
    support: [
      { title: 'Paie spécialisée transport', description: 'Notre pôle paie établit les bulletins des conducteurs à partir de leurs relevés d’activité, applique la convention collective et sécurise les frais de déplacement.' },
      { title: 'Suivi des coûts clefs', description: 'Carburant, véhicules, entretien et personnel : nous organisons les données pour suivre les postes qui pèsent sur votre résultat.' },
      { title: 'Pilotage de trésorerie', description: "Nous vous aidons à anticiper charges, renouvellement de la flotte et décalages d'encaissement." },
    ],
    benefits: [
      { title: 'Une marge mieux surveillée', description: "Les coûts sensibles sont suivis et rapprochés de l'activité pour mieux agir." },
      { title: 'Des investissements anticipés', description: 'Les décisions de financement sont préparées avec une vision plus fiable.' },
      { title: 'Une gestion plus sécurisée', description: "Les obligations restent structurées, même lorsque l'activité accélère." },
    ],
    process: [
      { title: 'Analyse des flux', description: 'Nous identifions les coûts, les recettes, les cycles de paiement et les contraintes.' },
      { title: "Mise en place d'indicateurs", description: 'Nous suivons les données utiles à la rentabilité et à la trésorerie.' },
      { title: "Points d'arbitrage", description: 'Nous préparons les décisions concernant les charges, les investissements et le développement.' },
    ],
    whyChooseUs: [
      { title: 'Une lecture orientée terrain', description: 'Nous suivons les postes qui influencent concrètement la performance de votre activité.' },
      { title: 'Une rigueur de suivi', description: 'Votre comptabilité devient un support de pilotage, pas seulement une obligation.' },
    ],
    finalCtaTitle: 'Vous dirigez une activité de transport ?',
    finalCtaText: 'Mettons en place un suivi clair de vos charges, de vos marges et de vos prochaines décisions.',
  },
  {
    slug: 'agricole',
    label: 'Agricole',
    icon: 'leaf',
    shortDescription: "Une lecture adaptée aux contraintes de saisonnalité, d'exploitation et d'investissement.",
    image: '/images/sectors/agricole.webp',
    heroTitle: 'Accompagner les exploitations agricoles avec une lecture adaptée aux cycles.',
    heroSubtitle: 'Nous aidons les exploitations agricoles et viticoles à gérer la paie de leurs saisonniers, leur trésorerie et leurs investissements, au rythme des récoltes.',
    trustItems: ['Paie des saisonniers', 'Saisonnalité', 'Investissement'],
    overviewTitle: "Un accompagnement construit autour des réalités d'exploitation.",
    overview: "L'activité agricole suit des cycles particuliers : pics d'embauche aux récoltes et aux vendanges, investissements importants, revenus variables. Nos cabinets, en particulier celui de Cavaillon, accompagnent de nombreuses exploitations agricoles et viticoles du Vaucluse et des Bouches-du-Rhône.",
    needs: [
      { title: 'Gérer la paie des saisonniers', description: "Récoltes, vendanges, travaux d'été : de nombreux contrats courts, des déclarations auprès de la MSA et des bulletins à produire vite et juste." },
      { title: 'Gérer la saisonnalité', description: 'Les périodes de charges et de recettes doivent être anticipées pour protéger la trésorerie.' },
      { title: 'Suivre les investissements', description: 'Matériel, foncier, bâtiments et financements demandent une analyse dans la durée.' },
    ],
    support: [
      { title: 'Paie agricole', description: "Notre pôle paie prend en charge les contrats saisonniers, les bulletins et les déclarations auprès de la MSA, y compris pendant les pics d'activité." },
      { title: "Suivi de l'exploitation", description: 'Nous structurons les informations utiles au pilotage des revenus, charges et investissements.' },
      { title: 'Accompagnement des projets', description: "Nous analysons les décisions d'investissement, de financement ou d'évolution de l'exploitation." },
    ],
    benefits: [
      { title: 'Une trésorerie mieux anticipée', description: "Les cycles de l'exploitation sont intégrés au suivi comptable et aux conseils." },
      { title: 'Des investissements plus lisibles', description: 'Les impacts financiers et fiscaux sont évalués avant les engagements.' },
      { title: 'Un suivi adapté', description: "Votre accompagnement tient compte des spécificités de l'activité agricole." },
    ],
    process: [
      { title: "Comprendre l'exploitation", description: 'Nous analysons vos cycles, productions, charges et projets.' },
      { title: 'Organiser le suivi', description: "Nous adaptons les outils et le calendrier aux temps forts de l'année." },
      { title: 'Accompagner les arbitrages', description: "Nous préparons les décisions d'investissement, de fiscalité et de pilotage." },
    ],
    whyChooseUs: [
      { title: 'Une approche adaptée aux cycles', description: "Nous intégrons la saisonnalité et les contraintes d'exploitation dans nos analyses." },
      { title: 'Un conseil durable', description: "Nous vous accompagnons dans les décisions qui engagent l'exploitation sur plusieurs années." },
    ],
    finalCtaTitle: 'Vous gérez une activité agricole ?',
    finalCtaText: "Échangeons sur vos cycles, vos obligations et vos projets d'investissement.",
  },
  {
    slug: 'cafe-restaurant',
    label: 'Café et restaurant',
    icon: 'utensils',
    shortDescription: 'Mieux piloter la rentabilité, la paie et les marges dans un secteur exigeant.',
    image: '/images/sectors/cafe-restaurant.webp',
    heroTitle: 'Piloter votre café ou restaurant avec une lecture fine des marges.',
    heroSubtitle: "Nous accompagnons les restaurateurs dans le suivi de la rentabilité, de la paie, des charges et des obligations d'un secteur exigeant.",
    trustItems: ['Marge', 'Paie', 'Rentabilité'],
    overviewTitle: 'Un suivi pensé pour les contraintes de la restauration.',
    overview: "Entre achats, stocks, personnel, horaires, TVA, charges et saisonnalité, les cafés et restaurants ont besoin d'un suivi réactif. Nous vous aidons à transformer vos chiffres en décisions utiles pour la rentabilité.",
    needs: [
      { title: 'Suivre les marges et les achats', description: 'Les coûts matière, les prix et les pertes doivent être surveillés pour maintenir la rentabilité.' },
      { title: 'Gérer la paie', description: 'Les équipes, horaires, contrats et charges sociales demandent un suivi rigoureux.' },
      { title: 'Anticiper les périodes fortes', description: 'Saisonnalité, trésorerie et stocks doivent être préparés pour éviter les tensions.' },
    ],
    support: [
      { title: 'Suivi comptable opérationnel', description: 'Nous organisons les ventes, achats, justificatifs et flux bancaires pour une lecture fiable.' },
      { title: 'Analyse de rentabilité', description: "Nous mettons en évidence les marges, les charges et les leviers d'amélioration." },
      { title: 'Accompagnement social', description: 'Nous vous aidons à sécuriser la paie et les obligations liées à vos équipes.' },
    ],
    benefits: [
      { title: 'Une rentabilité mieux pilotée', description: 'Vous identifiez les postes qui influencent directement votre résultat.' },
      { title: 'Une paie plus sécurisée', description: 'Les obligations sociales sont suivies avec rigueur dans un contexte souvent mouvant.' },
      { title: 'Une vision plus rapide', description: 'Vous disposez de données utiles pour ajuster achats, prix, charges et organisation.' },
    ],
    process: [
      { title: 'Analyse du modèle', description: 'Nous étudions votre activité, vos horaires, votre équipe, vos achats et votre saisonnalité.' },
      { title: 'Structuration du suivi', description: 'Nous cadrons la collecte des ventes, des achats, de la paie et des justificatifs.' },
      { title: 'Points de pilotage', description: 'Nous suivons les marges et les charges pour vous aider à ajuster rapidement.' },
    ],
    whyChooseUs: [
      { title: 'Une lecture concrète de la marge', description: 'Nous concentrons le suivi sur les indicateurs qui comptent dans votre quotidien.' },
      { title: 'Un accompagnement réactif', description: 'Nous tenons compte du rythme exigeant de la restauration et de ses obligations sociales.' },
    ],
    finalCtaTitle: 'Vous gérez un café ou un restaurant ?',
    finalCtaText: 'Mettons en place un suivi plus clair de vos marges, de votre paie et de votre rentabilité.',
  },
];

export const getSectorBySlug = (slug: string) => sectors.find((s) => s.slug === slug);
