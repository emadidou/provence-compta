import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://provence-compta.com',
  integrations: [tailwind()],
  // Une seule adresse par page : toujours avec la barre finale (/contact/).
  // Le serveur (LiteSpeed) redirige déjà /contact vers /contact/ ; le canonical,
  // le sitemap et les liens internes suivent la même règle.
  trailingSlash: 'always',
  // CSS intégré dans chaque page : supprime une requête bloquante (le CSS ne pèse que quelques Ko).
  build: { inlineStylesheets: 'always', format: 'directory' },
  // Les anciennes URL sont redirigées en 301 par public/.htaccess.
  // Ces redirections Astro restent en filet de sécurité (page meta-refresh).
  redirects: {
    '/SalonDeProvence': '/cabinets/salon-de-provence/',
    '/Cavaillon': '/cabinets/cavaillon/',
    '/LesAngles': '/cabinets/les-angles/',
    '/LaSeyneSurMer': '/cabinets/la-seyne-sur-mer/',
    '/QuiSommesNous': '/qui-sommes-nous/',
    '/Mission': '/nos-missions/',
    '/Contacts': '/contact/',
    '/MentionsLegales': '/mentions-legales/',
  },
});
