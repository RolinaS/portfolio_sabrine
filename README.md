# Portfolio Art — Sabrine Rolina

Portfolio personnel d'artiste plasticienne, construit avec Next.js 15, TypeScript, TailwindCSS, shadcn/ui et Magic UI.

## Stack

| Outil | Usage |
|---|---|
| **Next.js 15** | Framework React (App Router) |
| **TypeScript** | Typage statique |
| **TailwindCSS** | Utilitaires CSS + design tokens |
| **shadcn/ui** | Dialog, Button (composants Radix) |
| **Magic UI** | BlurFade, ShimmerButton, BorderBeam, Spotlight |
| **Framer Motion** | Animations d'entrée et lightbox |
| **lucide-react** | Icônes |

## Installation

```bash
git clone <your-repo>
npm install
npm run dev
```

Ouvrir [http://localhost:3000](http://localhost:3000)

## Structure

```
portfolio-art/
├── app/
│   ├── layout.tsx          ← fonts, metadata, Navbar + Footer
│   ├── page.tsx            ← page d'accueil (assemble les sections)
│   ├── globals.css         ← variables CSS, tokens, styles globaux
│   ├── works/[slug]/       ← page détail d'une œuvre
│   └── contact/            ← formulaire de contact
│
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx      ← navigation sticky + blur
│   │   └── Footer.tsx
│   ├── sections/
│   │   ├── HeroSection.tsx ← hero animé + spotlight
│   │   ├── GallerySection.tsx ← grille + lightbox
│   │   ├── AboutSection.tsx   ← bio + infos + BorderBeam
│   │   └── ContactBand.tsx    ← bande CTA foncée
│   ├── magicui/
│   │   ├── BlurFade.tsx    ← animation d'entrée au scroll
│   │   ├── ShimmerButton.tsx ← bouton avec shimmer doré
│   │   ├── BorderBeam.tsx  ← bordure animée
│   │   ├── SpotlightEffect.tsx ← halo de lumière hero
│   │   └── Marquee.tsx     ← défilement horizontal
│   └── ui/
│       ├── button.tsx      ← shadcn/ui Button
│       └── dialog.tsx      ← shadcn/ui Dialog
│
├── data/
│   └── works.ts            ← ⭐ DONNÉES DES ŒUVRES (à modifier)
│
└── lib/
    └── utils.ts            ← cn() helper
```

## Personnaliser le contenu

### Ajouter / modifier des œuvres

Éditer `data/works.ts` :

```ts
{
  id: "7",
  slug: "mon-oeuvre",           // URL : /works/mon-oeuvre
  title: "Mon œuvre",
  year: "2025",
  medium: "Acrylique",
  dimensions: "80 × 100 cm",
  category: "Peinture",
  color: "#A8B5C2",             // couleur de fond placeholder
  image: "/works/mon-oeuvre.jpg", // ← décommenter et ajouter dans /public/works/
  description: "Description...",
  available: true,
  size: "large",                // large | medium | full | third | small
}
```

### Ajouter une image

Déposer le fichier dans `public/works/` et renseigner le champ `image` dans `data/works.ts`.

### Changer la couleur d'accent (doré)

Dans `tailwind.config.ts`, modifier la palette `gold`. La valeur `gold-500` est utilisée partout comme couleur principale.

Dans `app/globals.css`, modifier `--accent`.

### Changer le nom

Chercher `Sabrine Rolina` dans :
- `app/layout.tsx` (metadata)
- `components/layout/Navbar.tsx`
- `components/layout/Footer.tsx`
