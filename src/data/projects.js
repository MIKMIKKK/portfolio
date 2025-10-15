export const projects = [
  {
    slug: 'premium-vtc',
    title: 'Premium VTC',
    tagline: 'Transport haut de gamme centré utilisateur',
    description: `Premium VTC propose une expérience de réservation fluide, orientée confort et confiance. Objectifs : interface claire, parcours simple, performance côté mobile.`,
    role: 'Design/Développement Front / Développement Back',
  year: '2024',
    projectType: 'internship',
    context: 'Site de réservation VTC pour automatiser et simplifier la prise de course.',
    objectives: [
      'Réduire les échanges manuels pour réserver',
      'Rendre le parcours aller/retour clair en moins de 4 étapes',
      'Fiabiliser le calcul des tarifs dynamiques',
    ],
    functionalities: [
      'Calcul de tarif dynamique',
      'Gestion trajets aller / retour',
      'Paiement (placeholder)',
      'Notifications e-mail',
      'Panneau admin',
      'Notifications mobile (placeholder)'
    ],
    challenges: [
      'Apprentissage rapide de Vue pour une web app complète',
      'Organisation du code pour évolutivité',
      'Intégration paiement & notifications (structure en place)'
    ],
    solutions: [
      'Architecture composants modulaires',
      'Séparation logique UI / données',
      'Maquettage Figma pour aligner les interactions avant dev'
    ],
    results: [
      'Parcours de réservation prototypé et utilisable',
      'Base front prête pour extensions (comptes chauffeurs / clients)',
    ],
    metrics: [],
    timeline: '1 semaine maquette + 2 mois développement',
    collaboration: 'Stage – travail avec le patron (pilotage produit)',
    links: {},
    stack: ['Vue 3','Laravel','Vite','GSAP','Figma'],
    style: {
      colors: ['#B5DFCA','#DB91D2','#030F1A'],
      font: 'Inter (placeholder)'
    },
    gallery: ['/placeholder.png','/placeholder.png','/placeholder.png']
  },
  {
    slug: 'makara',
    title: 'Makara',
    tagline: 'Application de gestion des réseaux sociaux',
    description: `Makara centralise données et processus internes : facturation, suivi, pilotage léger. Focalisé sur cohérence visuelle et vitesse.`,
    role: 'Développeur Web',
  year: '2024',
    projectType: 'internship',
    context: 'Outil interne pour poster sur plusieurs réseaux depuis une interface unique.',
    objectives: [
      'Publier simultanément sur plusieurs réseaux',
      'Réduire le temps de multi-posting',
    ],
    functionalities: [
      'Publication multi-réseaux',
      'Intégration API Meta',
    ],
    challenges: [
      'Gestion API Meta (auth / limites / formats)'
    ],
    solutions: [
      'Normalisation simple des payloads réseaux',
      'Fonctions abstraites pour points d’intégration futurs'
    ],
    results: [
      'Base fonctionnelle pour envoi multi-canal',
    ],
    metrics: [],
    timeline: '2 mois de développement',
    collaboration: '5 développeurs + 1 designer maquette',
    links: {},
    stack: ['PHP','(Placeholder Front)','API Meta'],
    style: {
      colors: ['#DB91D2','#B5DFCA','#030F1A'],
      font: 'Inter'
    },
    gallery: ['/placeholder.png','/placeholder.png']
  },
  {
    slug: 'lamarche',
    title: 'Lamarche',
    tagline: 'Marketplace locale connectée',
    description: `Média contre le cyberharcelement`,
    role: 'UX / UI / Intégration',
  year: '2024',
    context: 'Projet d’école : média de sensibilisation contre le cyberharcèlement.',
    objectives: [
      'Sensibiliser avec un support simple',
    ],
    functionalities: [
      'Pages média / articles',
    ],
    challenges: [
      'Structurer contenu pédagogique',
      'Maintenir lisibilité & accessibilité'
    ],
    solutions: [
      'Hiérarchie typographique claire',
      'Palette contrastée contrôlée'
    ],
    results: [
      'Prototype communicant pour discussions',
    ],
    metrics: [],
    timeline: 'Projet académique (durée courte)',
    collaboration: 'Équipe marketing + équipe design',
    links: {},
    stack: ['Vue 3','Accessibilité','SEO'],
    style: {
      colors: ['#B5DFCA','#030F1A'],
      font: 'Inter'
    },
    gallery: ['/placeholder.png','/placeholder.png','/placeholder.png']
  }
]

export function findProject(slug){
  return projects.find(p => p.slug === slug)
}
