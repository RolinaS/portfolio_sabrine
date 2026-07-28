export interface TimelineEntry {
  year: string;
  title: string;
  description: string;
  category: "formation" | "exposition" | "distinction";
}

export interface Technique {
  name: string;
  description: string;
}

export const bio = {
  eyebrow: "PARCOURS & PHILOSOPHIE",
  title: "Une pratique née de",
  titleAccent: "l'observation silencieuse",
  paragraphs: [
    "Sabrine Rolina développe depuis plus de dix ans une pratique artistique guidée par la lumière, la mémoire et les formes du quotidien. Formée aux Beaux-Arts, elle explore les matières et les techniques mixtes pour donner corps à des impressions fugaces.",
    "Son travail interroge la frontière entre figuration et abstraction, cherchant dans chaque toile un équilibre entre rigueur du geste et liberté d'interprétation.",
  ],
};

export const timeline: TimelineEntry[] = [
  {
    year: "2025-2028",
    title: "Bachelor Gobelins, Paris",
    description: "Formation en peinture et arts plastiques, spécialisation techniques mixtes.",
    category: "formation",
  },
  {
    year: "2026",
    title: "Stage affiche, Bourges",
    description: "Formation en peinture et arts plastiques, spécialisation techniques mixtes.",
    category: "formation",
  },
  {
    year: "2025",
    title: "Bac art - Alain Colas, Nevers",
    description: "Galerie Le Marais, Paris — série \"Lumières intérieures\".",
    category: "exposition",
  },
];

export const techniques: Technique[] = [
  {
    name: "Peinture à l'huile",
    description: "Technique principale, travail en glacis successifs pour la profondeur de la lumière.",
  },
  {
    name: "Encre & lavis",
    description: "Études préparatoires et œuvres sur papier, recherche du geste spontané.",
  },
  {
    name: "Collage & techniques mixtes",
    description: "Intégration de matières et textures pour enrichir la surface picturale.",
  },
  {
    name: "Dessin au fusain",
    description: "Base structurelle de nombreuses compositions, travail du contraste et du volume.",
  },
];