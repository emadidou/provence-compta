// Les quatre cabinets du Groupe Provence Compta.
// Contenu repris du site d'origine ; adresses confirmées via l'annuaire officiel.

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image?: string;
  imagePosition?: string;
}

export interface CabinetSimpleItem {
  title: string;
  description: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

// Présente dans chaque cabinet (demande de la direction, nov. 2026).
const salmaNaji: TeamMember = {
  name: 'Salma Naji',
  role: 'Directrice RH et Paie',
  bio: "Elle pilote la gestion sociale et la paie du groupe : bulletins de salaire, déclarations sociales, contrats et accompagnement des employeurs dans leurs obligations RH.",
};

export interface Cabinet {
  slug: string;
  /** Communes proches où le cabinet accompagne des clients (à valider avec chaque cabinet). */
  communes: string[];
  faq: FaqItem[];
  city: string;
  dept: string;
  region: string;
  eyebrow: string;
  heroTitle: string;
  heroSubtitle: string;
  heroImage: string;
  presentationImage: string;
  presentationTitle: string;
  presentationBody: string[];
  localAnchoring: string;
  expertises: CabinetSimpleItem[];
  /** Slugs de profils (sectors.ts), dans l’ordre d’importance pour le cabinet. */
  sectors: string[];
  strengths: CabinetSimpleItem[];
  team: TeamMember[];
  phone: string;
  phoneHref: string;
  address: string;
  postalCode: string;
  mapQuery: string;
  mapEmbedUrl?: string;
  hideMap?: boolean;
}

export const cabinets: Cabinet[] = [
  {
    slug: 'salon-de-provence',
    city: 'Salon-de-Provence',
    dept: '13',
    region: 'Bouches-du-Rhône',
    eyebrow: 'Cabinet Provence Compta 13',
    heroTitle: 'Expert-comptable à Salon-de-Provence pour piloter, sécuriser et développer votre activité.',
    communes: ['Miramas', 'Istres', 'Grans', 'Saint-Chamas', 'Sénas', 'Alleins', 'Lançon-Provence', 'Port-de-Bouc', 'Martigues', 'Fos-sur-Mer', 'Saint-Mitre-les-Remparts', 'Saint-Martin-de-Crau', 'Arles'],
    faq: [
      { question: 'Le cabinet de Salon-de-Provence est-il le siège de Provence Compta ?', answer: 'Oui. Salon-de-Provence accueille le siège du Groupe Provence Compta, qui réunit quatre cabinets : Salon-de-Provence (13), Cavaillon (84), Les Angles (30) et La Seyne-sur-Mer (83).' },
      { question: 'Accompagnez-vous les entreprises en dehors de Salon-de-Provence ?', answer: 'Oui. Le cabinet suit des entreprises dans tout le pays salonais et l’ouest des Bouches-du-Rhône, notamment à Miramas, Istres, Grans, Saint-Chamas, Martigues, Port-de-Bouc ou Fos-sur-Mer.' },
      { question: 'Quelles missions le cabinet prend-il en charge ?', answer: 'Tenue et révision comptable, bilans, fiscalité, paie et gestion sociale, accompagnement juridique, création d’entreprise et conseil de gestion. Les missions sont adaptées à la taille et au secteur de chaque entreprise.' },
      { question: 'Comment prendre rendez-vous avec un expert-comptable à Salon-de-Provence ?', answer: 'Appelez le cabinet au 04 90 18 88 51, du lundi au vendredi de 8h30 à 17h30, ou envoyez votre demande via le formulaire de contact : nous vous recontactons rapidement.' },
      { question: 'Puis-je changer d’expert-comptable en cours d’année ?', answer: 'Oui, c’est possible à tout moment. Nous prenons contact avec votre ancien cabinet pour organiser la reprise du dossier, selon les règles de la profession, afin que la transition se fasse sans rupture.' },
    ],
    heroSubtitle: "À Salon-de-Provence, Provence Compta 13 accompagne les entrepreneurs avec une expertise fiable, une relation de confiance et un vrai sens de l'accompagnement sur mesure.",
    heroImage: '/images/cabinets/salon-de-provence-1.webp',
    presentationImage: '/images/cabinets/salon-de-provence-2.webp',
    presentationTitle: 'Un cabinet ancré dans les Bouches-du-Rhône, au service des dirigeants de terrain.',
    presentationBody: [
      "Le cabinet Provence Compta 13 accompagne les entreprises, professions libérales et porteurs de projet avec une approche claire, structurante et durable. Notre ambition est de transformer les obligations comptables en leviers utiles de pilotage.",
      "Nous intervenons auprès de dirigeants situés à Salon-de-Provence, mais aussi plus largement dans le pays salonais et les zones économiques voisines, avec un même niveau d'exigence, de disponibilité et de pédagogie.",
    ],
    localAnchoring: 'Notre équipe connaît les réalités économiques locales et s’attache à proposer un conseil concret, adapté à la vie quotidienne des entreprises de la région salonaise.',
    expertises: [
      { title: 'Tenue et révision comptable', description: 'Une comptabilité fiable, régulière et exploitable pour mieux suivre votre activité et vos indicateurs de gestion.' },
      { title: 'Fiscalité et obligations', description: 'Des déclarations sécurisées, une meilleure anticipation et des arbitrages fiscaux adaptés à votre situation.' },
      { title: 'Pilotage et conseil', description: 'Des recommandations concrètes pour orienter vos choix, clarifier vos marges et soutenir votre croissance.' },
    ],
    sectors: ['btp', 'cafe-restaurant', 'artisans-commercants', 'immobilier', 'transporteur', 'createur-entreprise', 'profession-liberale'],
    strengths: [
      { title: 'Proximité et réactivité', description: 'Une équipe disponible, ancrée localement et capable de répondre rapidement aux besoins des dirigeants.' },
      { title: 'Excellence technique', description: 'Une expertise comptable et fiscale exigeante pour sécuriser vos décisions et vos obligations.' },
      { title: 'Conseil personnalisé', description: 'Des solutions adaptées à votre secteur, votre stade de développement et vos priorités concrètes.' },
      { title: 'Vision long terme', description: "Un accompagnement qui ne s'arrête pas au bilan, mais qui soutient durablement vos projets." },
    ],
    team: [
      { name: 'Moslim Naji', role: 'Expert-comptable et commissaire aux comptes associé', bio: 'Il garantit la conformité technique du cabinet et apporte aux dirigeants une expertise solide pour sécuriser leurs choix financiers, fiscaux et stratégiques.', image: '/images/team/moslim-naji.webp', imagePosition: 'center 15%' },
      { name: 'Sephora Belaid', role: 'Directrice du cabinet', bio: 'Elle dirige le cabinet de Salon-de-Provence et veille à un accompagnement fluide, réactif et parfaitement aligné avec les objectifs de chaque client.', image: '/images/team/p2.webp', imagePosition: '82% center' },
      salmaNaji,
    ],
    phone: '04 90 18 88 51',
    phoneHref: '+33490188851',
    address: 'Résidence Le Monte Carlo, 355 boulevard Ledru Rollin',
    postalCode: '13300',
    mapQuery: 'Résidence Le Monte Carlo, 355 Boulevard Ledru Rollin, 13300 Salon-de-Provence',
    mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5774.150856640497!2d5.088907634887687!3d43.646598999999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12c9ff91743afb6b%3A0x87eea8360fcc9b79!2sPROVENCE%20COMPTA!5e0!3m2!1sfr!2sus!4v1780660852271!5m2!1sfr!2sus',
  },
  {
    slug: 'cavaillon',
    city: 'Cavaillon',
    dept: '84',
    region: 'Vaucluse',
    eyebrow: 'Cabinet Provence Compta 84',
    heroTitle: 'Expert-comptable à Cavaillon pour accompagner vos décisions dans le Vaucluse.',
    communes: ['L’Isle-sur-la-Sorgue', 'Robion', 'Plan-d’Orgon', 'Orgon', 'Saint-Andiol', 'Noves', 'Le Thor', 'Oppède', 'Sénas', 'Mallemort', 'Lamanon', 'Lambesc', 'Châteaurenard', 'Avignon'],
    faq: [
      { question: 'Accompagnez-vous les entreprises autour de Cavaillon ?', answer: 'Oui. Le cabinet suit des entreprises de Cavaillon et de son bassin, dans le Vaucluse comme dans le nord des Bouches-du-Rhône : L’Isle-sur-la-Sorgue, Robion, Plan-d’Orgon, Orgon, Saint-Andiol, Noves ou Lambesc. Il accompagne notamment de nombreuses exploitations agricoles et viticoles.' },
      { question: 'Quelles missions le cabinet de Cavaillon prend-il en charge ?', answer: 'Tenue et révision comptable, bilans, fiscalité, paie et gestion sociale, accompagnement juridique, création d’entreprise et conseil de gestion, pour les entreprises du BTP, les exploitations agricoles et viticoles, les cafés-restaurants, les transporteurs, les artisans et les commerçants.' },
      { question: 'Comment prendre rendez-vous avec un expert-comptable à Cavaillon ?', answer: 'Appelez le cabinet au 04 90 78 93 39 ou envoyez votre demande via le formulaire de contact : nous vous recontactons rapidement.' },
      { question: 'Puis-je changer d’expert-comptable en cours d’année ?', answer: 'Oui, c’est possible à tout moment. Nous prenons contact avec votre ancien cabinet pour organiser la reprise du dossier, selon les règles de la profession, afin que la transition se fasse sans rupture.' },
    ],
    heroSubtitle: 'Le cabinet Provence Compta 84 aide les dirigeants à clarifier leur gestion, fiabiliser leurs obligations et structurer leur développement avec une relation de confiance de long terme.',
    heroImage: '/images/cabinets/cavaillon-1.webp',
    presentationImage: '/images/cabinets/cavaillon-2.webp',
    presentationTitle: 'Un cabinet proche des entreprises de Cavaillon et de son bassin économique.',
    presentationBody: [
      "Provence Compta 84 accompagne les entrepreneurs avec une approche exigeante mais accessible. Notre rôle est de simplifier la gestion comptable et fiscale, tout en offrant une vision plus claire des enjeux financiers et opérationnels.",
      "Nous pensons que l'expertise comptable doit être un appui concret au quotidien : pour piloter, anticiper, arbitrer et grandir avec plus de sérénité.",
    ],
    localAnchoring: 'Ancré à Cavaillon, le cabinet connaît les attentes des entreprises du territoire et intervient avec une logique de proximité, de disponibilité et de conseil utile.',
    expertises: [
      { title: 'Comptabilité et révision', description: "Une organisation comptable sécurisée et lisible pour disposer d'informations fiables tout au long de l'année." },
      { title: 'Fiscalité et optimisation', description: 'Un accompagnement rigoureux pour respecter vos obligations et éclairer vos choix fiscaux.' },
      { title: 'Gestion et anticipation', description: 'Une lecture plus proactive de votre situation financière pour mieux piloter votre activité et vos projets.' },
    ],
    sectors: ['btp', 'agricole', 'cafe-restaurant', 'transporteur', 'artisans-commercants', 'immobilier', 'createur-entreprise'],
    strengths: [
      { title: 'Vision claire de votre activité', description: 'Nous vous aidons à comprendre vos chiffres pour prendre des décisions plus sereines et mieux argumentées.' },
      { title: 'Accompagnement personnalisé', description: 'Chaque entreprise est suivie selon ses objectifs, son rythme de développement et ses enjeux propres.' },
      { title: 'Relation de confiance', description: 'Nous privilégions une communication simple, une bonne disponibilité et des échanges réguliers.' },
      { title: 'Ancrage local fort', description: 'Notre connaissance du tissu économique vauclusien renforce la pertinence de nos recommandations.' },
    ],
    team: [
      { name: 'Moslim Naji', role: 'Expert-comptable et commissaire aux comptes associé', bio: 'Il apporte au cabinet une expertise technique exigeante pour sécuriser les choix financiers, fiscaux et stratégiques des dirigeants.', image: '/images/team/moslim-naji.webp', imagePosition: 'center 15%' },
      { name: 'Bouazza Bari', role: 'Directeur associé', bio: "Fort d'une longue expérience en cabinet, il accompagne les dirigeants avec une vision proactive et une lecture très opérationnelle des enjeux de gestion.", image: '/images/team/c2.webp' },
      salmaNaji,
    ],
    phone: '04 90 78 93 39',
    phoneHref: '+33490789339',
    address: '82 boulevard Agnely',
    postalCode: '84300',
    mapQuery: '82 boulevard Agnely, 84300 Cavaillon',
    mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2877.8232293163337!2d5.0409554!3d43.8387631!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12c9f5e27647bc65%3A0x4bc8f7322e446d53!2sPROVENCE%20COMPTA%2084!5e0!3m2!1sfr!2sma!4v1780667363977!5m2!1sfr!2sma',
  },
  {
    slug: 'les-angles',
    city: 'Les Angles',
    dept: '30',
    region: 'Gard',
    eyebrow: 'Cabinet Provence Compta 30',
    heroTitle: "Expert-comptable aux Angles, aux portes d'Avignon, pour accompagner vos projets.",
    communes: ['Avignon', 'Villeneuve-lès-Avignon', 'Le Pontet', 'Sorgues', 'Entraigues-sur-la-Sorgue', 'Morières-lès-Avignon', 'Aramon', 'Rochefort-du-Gard', 'Pujaut', 'Roquemaure', 'Châteaurenard', 'Carpentras', 'Monteux', 'Orange'],
    faq: [
      { question: 'Le cabinet des Angles accompagne-t-il les entreprises d’Avignon ?', answer: 'Oui. Installé aux Angles, à quelques minutes d’Avignon, le cabinet accompagne des entreprises des deux rives du Rhône : Avignon, Villeneuve-lès-Avignon, Le Pontet, Sorgues, Entraigues-sur-la-Sorgue, Roquemaure, et jusqu’à Carpentras et Monteux.' },
      { question: 'Quelles missions le cabinet des Angles prend-il en charge ?', answer: 'Tenue et révision comptable, bilans, fiscalité, paie et gestion sociale, accompagnement juridique, création d’entreprise et conseil de gestion, notamment pour les entreprises du BTP, les SCI, les professions libérales, les artisans et les commerçants.' },
      { question: 'Comment prendre rendez-vous avec un expert-comptable aux Angles ?', answer: 'Appelez le 04 90 18 88 51, du lundi au vendredi de 8h30 à 17h30, ou envoyez votre demande via le formulaire de contact : nous vous recontactons rapidement.' },
      { question: 'Puis-je changer d’expert-comptable en cours d’année ?', answer: 'Oui, c’est possible à tout moment. Nous prenons contact avec votre ancien cabinet pour organiser la reprise du dossier, selon les règles de la profession, afin que la transition se fasse sans rupture.' },
    ],
    heroSubtitle: 'Le cabinet Provence Compta 30 accompagne les entrepreneurs avec une expertise structurante, un suivi humain et des conseils concrets pour transformer les obligations comptables en levier de pilotage.',
    heroImage: '/images/cabinets/les-angles-1.webp',
    // Pont d'Avignon et Villeneuve-lès-Avignon (rive gardoise), à côté des Angles (30).
    // Ne pas utiliser de photo des Angles (66), la station des Pyrénées-Orientales.
    presentationImage: '/images/cabinets/les-angles-avignon.webp',
    presentationTitle: 'Un cabinet de proximité pour les entrepreneurs des Angles et du bassin avignonnais.',
    presentationBody: [
      "Provence Compta 30 a été pensé comme un cabinet proche du terrain, capable d'apporter aux dirigeants un cadre clair, rassurant et techniquement solide pour piloter leur activité.",
      "Nous voulons transformer les contraintes comptables, fiscales et sociales en outils de sécurité, de lisibilité et de croissance durable pour les entreprises du territoire.",
    ],
    localAnchoring: 'Basé aux Angles, le cabinet accompagne des structures locales avec un haut niveau de disponibilité et une bonne connaissance des enjeux économiques du secteur gardois et avignonnais.',
    expertises: [
      { title: 'Comptabilité et conformité', description: 'Une gestion comptable sérieuse, lisible et parfaitement alignée avec vos obligations professionnelles.' },
      { title: 'Conseil et arbitrage', description: 'Des analyses utiles pour éclairer vos choix de gestion, votre organisation et vos priorités de développement.' },
      { title: 'Accompagnement de proximité', description: 'Une relation directe, un suivi personnalisé et un cabinet présent à chaque étape de votre activité.' },
    ],
    sectors: ['btp', 'immobilier', 'profession-liberale', 'cafe-restaurant', 'artisans-commercants', 'transporteur', 'agricole', 'createur-entreprise'],
    strengths: [
      { title: 'Excellence et proximité', description: 'Nous associons rigueur technique et vraie disponibilité pour construire un accompagnement à la fois sécurisant et humain.' },
      { title: 'Solutions personnalisées', description: 'Nous adaptons nos recommandations à la réalité de votre activité, de votre rythme et de vos objectifs.' },
      { title: 'Réactivité terrain', description: 'Notre implantation locale nous permet de rester proches des enjeux concrets rencontrés par les dirigeants.' },
      { title: 'Partenariat durable', description: 'Notre ambition est de devenir un repère fiable dans vos choix quotidiens comme dans vos projets de plus long terme.' },
    ],
    team: [
      { name: 'Moslim Naji', role: 'Expert-comptable et commissaire aux comptes associé', bio: 'Il met son expertise au service de la sécurisation des choix financiers, fiscaux et stratégiques des dirigeants du cabinet.', image: '/images/team/moslim-naji.webp', imagePosition: 'center 15%' },
      { name: 'Sephora Belaid', role: 'Directrice du cabinet', bio: 'Elle dirige le cabinet des Angles et veille à un accompagnement fluide, réactif et très personnalisé, attentif aux réalités du terrain et aux attentes des clients.', image: '/images/team/p2.webp', imagePosition: '82% center' },
      salmaNaji,
    ],
    phone: '04 90 18 88 51',
    phoneHref: '+33490188851',
    address: '1578 Avenue de la 2e Division Blindée',
    postalCode: '30133',
    mapQuery: 'PROVENCE COMPTA 30, 1578 Avenue de la 2e Division Blindée, 30133 Les Angles',
  },
  {
    slug: 'la-seyne-sur-mer',
    city: 'La Seyne-sur-Mer',
    dept: '83',
    region: 'Var',
    eyebrow: 'Cabinet Provence Compta 83',
    heroTitle: 'Expert-comptable à La Seyne-sur-Mer, engagé à vos côtés pour piloter votre activité.',
    communes: ['Toulon', 'Six-Fours-les-Plages', 'Ollioules', 'Saint-Mandrier-sur-Mer', 'Sanary-sur-Mer', 'La Garde', 'La Valette-du-Var', 'La Farlède', 'Hyères', 'Carqueiranne', 'Cuers'],
    faq: [
      { question: 'Accompagnez-vous les entreprises de Toulon et de l’ouest varois ?', answer: 'Oui. Le cabinet de La Seyne-sur-Mer suit des entreprises de toute l’aire toulonnaise : Toulon, Six-Fours-les-Plages, Ollioules, Saint-Mandrier-sur-Mer, Sanary-sur-Mer, La Garde ou La Valette-du-Var.' },
      { question: 'Quelles missions le cabinet de La Seyne-sur-Mer prend-il en charge ?', answer: 'Tenue et révision comptable, bilans, fiscalité, paie et gestion sociale, accompagnement juridique, création d’entreprise et conseil de gestion, pour les entreprises du BTP, les artisans, les commerçants, les transporteurs et les professions libérales.' },
      { question: 'Comment prendre rendez-vous avec un expert-comptable à La Seyne-sur-Mer ?', answer: 'Appelez le 04 90 18 88 51, du lundi au vendredi de 8h30 à 17h30, ou envoyez votre demande via le formulaire de contact : nous vous recontactons rapidement.' },
      { question: 'Puis-je changer d’expert-comptable en cours d’année ?', answer: 'Oui, c’est possible à tout moment. Nous prenons contact avec votre ancien cabinet pour organiser la reprise du dossier, selon les règles de la profession, afin que la transition se fasse sans rupture.' },
    ],
    heroSubtitle: 'À La Seyne-sur-Mer, Provence Compta 83 conjugue précision technique, écoute et proximité pour accompagner les dirigeants avec un service fiable et très personnalisé.',
    heroImage: '/images/cabinets/la-seyne-sur-mer-1.webp',
    presentationImage: '/images/cabinets/la-seyne-sur-mer-2.webp',
    presentationTitle: 'Un cabinet de proximité pour les dirigeants du Var qui recherchent clarté et efficacité.',
    presentationBody: [
      "Le cabinet Provence Compta 83 accompagne les entreprises avec la conviction que la comptabilité doit devenir un outil de pilotage utile et non une simple obligation légale.",
      "Notre mission est d'apporter aux dirigeants un cadre sécurisant, des solutions personnalisées et une vision plus claire de leur trajectoire financière pour leur permettre d'avancer avec plus de sérénité.",
    ],
    localAnchoring: 'Implanté à La Seyne-sur-Mer, le cabinet développe une relation de confiance durable avec les entrepreneurs du territoire varois et les accompagne au plus près de leurs réalités.',
    expertises: [
      { title: 'Pilotage comptable', description: 'Des comptes fiables, une lecture plus claire de votre activité et une meilleure anticipation des décisions à prendre.' },
      { title: 'Fiscalité et sécurisation', description: 'Nous veillons à la conformité de vos obligations et vous aidons à arbitrer avec plus de précision.' },
      { title: 'Conseil de proximité', description: 'Un accompagnement humain et réactif, adapté à votre secteur, vos enjeux et votre rythme de développement.' },
    ],
    sectors: ['btp', 'artisans-commercants', 'transporteur', 'cafe-restaurant', 'immobilier', 'createur-entreprise'],
    strengths: [
      { title: 'Accompagnement sur mesure', description: "Chaque dirigeant bénéficie d'un suivi adapté à ses objectifs, son organisation et ses priorités de gestion." },
      { title: 'Expertise et pédagogie', description: 'Nous allions précision technique et capacité à expliquer clairement les enjeux et les options possibles.' },
      { title: 'Proximité relationnelle', description: "Nous cultivons un lien de confiance fondé sur l'écoute, la disponibilité et la constance dans le suivi." },
      { title: 'Performance durable', description: 'Notre conseil vise à renforcer votre sérénité immédiate et votre solidité à plus long terme.' },
    ],
    team: [
      { name: 'Moslim Naji', role: 'Expert-comptable et commissaire aux comptes associé', bio: 'Il veille à la conformité technique du cabinet et accompagne les dirigeants sur les sujets stratégiques, fiscaux et financiers les plus sensibles.', image: '/images/team/moslim-naji.webp', imagePosition: 'center 15%' },
      { name: 'Mustapha Amabraa', role: 'Directeur du cabinet', bio: 'Il dirige le cabinet de La Seyne-sur-Mer. Fort de sa connaissance du tissu économique varois, il apporte une vision proactive de la gestion et veille à la qualité du lien client.', image: '/images/team/ssm01.webp' },
      salmaNaji,
    ],
    phone: '04 90 18 88 51',
    phoneHref: '+33490188851',
    address: '79 Impasse la Provençale',
    postalCode: '83500',
    mapQuery: '79 Impasse la Provençale, 83500 La Seyne-sur-Mer',
    mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2912.494325782582!2d5.877119800000001!3d43.1151408!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12c90341053dd46d%3A0x7c436ee8cfd00114!2sPROVENCE%20COMPTA%2083!5e0!3m2!1sfr!2sma!4v1780661083861!5m2!1sfr!2sma',
  },
];

export const getCabinetBySlug = (slug: string) => cabinets.find((c) => c.slug === slug);
