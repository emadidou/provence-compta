# Provence Compta — site Astro

Refonte du site Provence Compta en **Astro 4 + Tailwind CSS + TypeScript**.
Site statique, rapide, responsive et optimisé pour le SEO.

## Démarrer

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # génère /dist (site statique prêt à déployer)
npm run preview  # prévisualise le build
```

> Le dossier `node_modules` n'est pas livré : lancez `npm install` une fois.

## Structure

```
src/
  components/   Composants réutilisables (Header, Footer, Hero, cartes, SEO, Icon…)
  data/         Contenu centralisé : site.ts, missions.ts, sectors.ts, cabinets.ts
  layouts/      Layout.astro (head, SEO, header/footer, JSON-LD)
  pages/        Pages + routes dynamiques [slug] (cabinets, profils)
  styles/       global.css (Tailwind + thème)
public/
  images/       Visuels (héros, missions, secteurs, cabinets, équipe, logo)
  favicon.ico + favicon-32/192.png + apple-touch-icon.png (logo), robots.txt, sitemap.xml
```

## Pages

- `/` Accueil — `/nos-missions` — `/qui-sommes-nous` — `/contact` — `/mentions-legales`
- Cabinets : `/cabinets/{salon-de-provence,cavaillon,les-angles,la-seyne-sur-mer}`
- Profils : `/profils/{createur-entreprise,tpe-pme,profession-liberale,artisans-commercants,immobilier,transporteur,agricole,cafe-restaurant}`
- Les anciennes URLs (`/Mission`, `/SalonDeProvence`, …) redirigent vers les nouvelles (voir `astro.config.mjs`).

## Personnalisation

- **Contenu** : tout est dans `src/data/` (textes, missions, secteurs, cabinets, coordonnées).
- **Couleurs / typo** : `tailwind.config.mjs` (navy `#0B2545`, accent `#0098A8`).
- **Images** : remplacez les fichiers de `public/images/` en gardant les mêmes noms.
- **Formulaire de contact** : `src/components/ContactForm.astro` utilise un repli `mailto:`.
  Branchez `action`/`fetch` sur votre service (Formspree, API, …) pour un envoi serveur.
