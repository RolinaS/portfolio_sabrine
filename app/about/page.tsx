import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, GraduationCap, Palette as PaletteIcon, Sparkles } from "lucide-react";
import { bio, timeline, techniques } from "@/data/about";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "À propos — Sabrine Rolina",
  description: "Parcours, formation et démarche artistique de Sabrine Rolina, artiste plasticienne basée à Paris.",
};

const categoryIcon = {
  formation: GraduationCap,
  exposition: Sparkles,
  distinction: Sparkles,
};

export default function AboutPage() {
  return (
    <main className="bg-background text-foreground">
      {/* En-tête de page */}
      <section className="max-w-5xl mx-auto px-6 pt-20 pb-16">
        <p className="text-xs font-semibold tracking-widest text-amber-700 mb-4">
          {bio.eyebrow}
        </p>
        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-tight mb-8">
          {bio.title}{" "}
          <span className="font-serif italic text-amber-700">{bio.titleAccent}</span>
        </h1>
        <div className="space-y-4 max-w-2xl">
          {bio.paragraphs.map((paragraph, i) => (
            <p key={i} className="text-gray-500 text-base md:text-lg leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>
      </section>

      {/* Parcours / Timeline */}
      <section className="max-w-5xl mx-auto px-6 py-16 border-t border-gray-200">
        <h2 className="font-serif text-2xl md:text-3xl mb-12">
          Parcours
        </h2>
        <div className="relative pl-8 space-y-10">
          {/* ligne verticale */}
          <div className="absolute left-[7px] top-2 bottom-2 w-px bg-gray-200" />

          {timeline.map((entry, i) => {
            const Icon = categoryIcon[entry.category];
            return (
              <div key={i} className="relative">
                {/* point sur la ligne */}
                <div className="absolute -left-8 top-1 w-3.5 h-3.5 rounded-full bg-amber-700 ring-4 ring-background" />
                <div className="flex items-baseline gap-3 mb-1 flex-wrap">
                  <span className="text-sm font-semibold text-amber-700 tracking-wide">
                    {entry.year}
                  </span>
                  <Icon className="w-4 h-4 text-gray-400" />
                  <h3 className="font-serif text-lg md:text-xl">{entry.title}</h3>
                </div>
                <p className="text-gray-500 text-sm md:text-base leading-relaxed">
                  {entry.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Techniques & médiums */}
      <section className="max-w-5xl mx-auto px-6 py-16 border-t border-gray-200">
        <h2 className="font-serif text-2xl md:text-3xl mb-12">
          Techniques & médiums
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {techniques.map((technique, i) => (
            <div key={i} className="flex gap-4">
              <PaletteIcon className="w-5 h-5 text-amber-700 shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold mb-1">{technique.name}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {technique.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Appel à l'action */}
      <section className="max-w-5xl mx-auto px-6 py-16 border-t border-gray-200 flex flex-wrap items-center gap-6">
        <Link
          href="/works"
          className={cn(
            "inline-flex items-center gap-2 bg-foreground text-background",
            "px-6 py-3 text-xs font-semibold tracking-widest uppercase",
            "hover:opacity-90 transition-opacity"
          )}
        >
          Voir les œuvres
          <ArrowRight className="w-4 h-4" />
        </Link>
        <Link
          href="/contact"
          className="text-xs font-semibold tracking-widest uppercase text-gray-500 hover:text-foreground transition-colors"
        >
          Me contacter
        </Link>
      </section>
    </main>
  );
}