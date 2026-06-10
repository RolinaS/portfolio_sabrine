export interface Work {
  id: string;
  slug: string;
  title: string;
  year: string;
  medium: string;
  dimensions: string;
  category: string;
  color: string;       // placeholder bg color until real image is added
  image?: string;      // path to /public/works/…
  description: string;
  available: boolean;
  size: "large" | "medium" | "small" | "full" | "third";
}

export const works: Work[] = [
  {
    id: "1",
    slug: "serenite-doree",
    title: "Sérénité dorée",
    year: "2024",
    medium: "Huile sur toile",
    dimensions: "100 × 140 cm",
    category: "Peinture",
    color: "#D4A574",
    // image: "/works/serenite-doree.jpg",
    description:
      "Une exploration de la lumière dorée de fin d'après-midi, capturée dans une composition abstraite où la matière et la couleur dialoguent pour évoquer la sérénité et la chaleur d'un instant suspendu.",
    available: true,
    size: "large",
  },
  {
    id: "2",
    slug: "fragments-bleus",
    title: "Fragments bleus",
    year: "2024",
    medium: "Aquarelle sur papier Arches",
    dimensions: "60 × 80 cm",
    category: "Aquarelle",
    color: "#8FB8CC",
    // image: "/works/fragments-bleus.jpg",
    description:
      "Une série de fragments visuels qui composent une vision poétique de la mémoire — chaque touche de bleu évoque un souvenir imprécis, une image qui se forme et se dissout.",
    available: false,
    size: "medium",
  },
  {
    id: "3",
    slug: "silence-i",
    title: "Silence I",
    year: "2023",
    medium: "Dessin au fusain",
    dimensions: "50 × 70 cm",
    category: "Dessin",
    color: "#C8C5BC",
    // image: "/works/silence-i.jpg",
    description:
      "Premier volet d'une série autour du silence. Le fusain, matière volatile et fragile, exprime l'intangible — ce qui n'est pas dit, l'espace entre les mots.",
    available: true,
    size: "third",
  },
  {
    id: "4",
    slug: "silence-ii",
    title: "Silence II",
    year: "2023",
    medium: "Dessin au fusain",
    dimensions: "50 × 70 cm",
    category: "Dessin",
    color: "#B0ADA5",
    // image: "/works/silence-ii.jpg",
    description:
      "Second volet de la série Silence. La composition se densifie, les ombres s'approfondissent, le silence devient plus lourd, presque matériel.",
    available: true,
    size: "third",
  },
  {
    id: "5",
    slug: "origine",
    title: "Origine",
    year: "2023",
    medium: "Technique mixte",
    dimensions: "80 × 80 cm",
    category: "Mixte",
    color: "#B89070",
    // image: "/works/origine.jpg",
    description:
      "Un voyage aux sources : collage, huile et encre se mêlent pour créer une œuvre qui interroge la mémoire ancestrale et les racines culturelles.",
    available: false,
    size: "third",
  },
  {
    id: "6",
    slug: "horizon-continu",
    title: "Horizon continu",
    year: "2024",
    medium: "Acrylique sur toile",
    dimensions: "200 × 80 cm",
    category: "Peinture",
    color: "#9EBD9E",
    // image: "/works/horizon-continu.jpg",
    description:
      "Une ligne d'horizon qui se déroule sans rupture, suggérant l'infinité du paysage intérieur. Format panoramique conçu pour occuper l'espace de manière architecturale.",
    available: true,
    size: "full",
  },
];
