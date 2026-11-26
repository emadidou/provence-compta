export const site = {
  name: 'Provence Compta',
  legalName: 'Groupe Provence Compta',
  baseline: 'Expert-comptable en Provence',
  description:
    'Cabinets d’expertise comptable en Provence pour dirigeants, TPE, PME, professions libérales et créateurs d’entreprise.',
  url: 'https://provence-compta.com',
  email: 'contact@provence-compta.com',
  phone: '04 90 18 88 51',
  phoneHref: '+33490188851',
  hours: 'Du lundi au vendredi, 8h30 - 17h30',
  // Identifiant Google Analytics 4 (format « G-XXXXXXXXXX »).
  // Tant qu'il est vide, ni le bandeau cookies ni Google Analytics ne sont chargés.
  gaMeasurementId: 'G-HCT35ST592',
  sameAs: [
    'https://www.linkedin.com/company/provence-compta/',
    'https://annuaire.experts-comptables.org/recherche?localite=&adresse=&insee=&type_localite=&localityLat=&localityLon=&comptable=naji+moslim',
  ],
  social: {
    linkedin: 'https://www.linkedin.com/company/provence-compta/',
  },
} as const;

export const sectorNav = [
  { label: 'BTP', href: '/profils/btp/' },
  { label: "Créateurs d'entreprise", href: '/profils/createur-entreprise/' },
  { label: 'TPE & PME', href: '/profils/tpe-pme/' },
  { label: 'Professions libérales', href: '/profils/profession-liberale/' },
  { label: 'Artisans & commerçants', href: '/profils/artisans-commercants/' },
  { label: 'Immobilier', href: '/profils/immobilier/' },
  { label: 'Transporteurs', href: '/profils/transporteur/' },
  { label: 'Agricole', href: '/profils/agricole/' },
  { label: 'Cafés & restaurants', href: '/profils/cafe-restaurant/' },
] as const;

export const cabinetNav = [
  { label: 'Salon-de-Provence', href: '/cabinets/salon-de-provence/' },
  { label: 'Cavaillon', href: '/cabinets/cavaillon/' },
  { label: 'Les Angles', href: '/cabinets/les-angles/' },
  { label: 'La Seyne-sur-Mer', href: '/cabinets/la-seyne-sur-mer/' },
] as const;

export const mainNav = [
  { label: 'Accueil', href: '/' },
  { label: 'Nos missions', href: '/nos-missions/' },
  { label: 'Qui sommes-nous', href: '/qui-sommes-nous/' },
  {
    label: 'Nos cabinets',
    href: '/cabinets/salon-de-provence/',
    children: cabinetNav,
  },
  {
    label: 'Profils accompagnés',
    href: '/profils/createur-entreprise/',
    children: sectorNav,
  },
  { label: 'Contact', href: '/contact/' },
] as const;
