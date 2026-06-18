"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowLeft, ArrowRight } from "lucide-react";
import { works, type Work } from "@/data/works";
import { BlurFade } from "@/components/magicui/BlurFade";

// Layout bento — définit la taille de chaque cellule
const bentoLayout = [
  "col-span-2 row-span-2",  // grande
  "col-span-1 row-span-1",  // petite
  "col-span-1 row-span-2",  // haute
  "col-span-1 row-span-1",  // petite
  "col-span-1 row-span-1",  // petite
  "col-span-2 row-span-1",  // large
];

export default function WorksPage() {
  const [selected, setSelected] = useState<Work | null>(null);

  const selectedIndex = selected ? works.findIndex(w => w.id === selected.id) : -1;
  const goPrev = () => selectedIndex > 0 && setSelected(works[selectedIndex - 1]);
  const goNext = () => selectedIndex < works.length - 1 && setSelected(works[selectedIndex + 1]);

  return (
    <div className="min-h-screen overflow-y-auto pt-24 pb-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <BlurFade delay={0.1}>
          <div className="mb-12">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors mb-8 group"
            >
              <ArrowLeft className="w-3 h-3 group-hover:-translate-x-1 transition-transform" />
              Accueil
            </Link>
            <div className="flex items-baseline justify-between">
              <div>
                <p className="text-xs uppercase tracking-widest text-gold-500 mb-3">Galerie</p>
                <h1 className="font-serif text-5xl md:text-6xl font-normal italic">
                  Toutes les œuvres
                </h1>
              </div>
              <span className="text-xs uppercase tracking-widest text-muted-foreground hidden md:block">
                {works.length} pièces
              </span>
            </div>
          </div>
        </BlurFade>

        {/* Bento Grid */}
        <div
  className="grid gap-3"
  style={{
    gridTemplateColumns: "repeat(4, 1fr)",
    gridAutoRows: "220px",
  }}
>
  {works.map((work, i) => (
    <BentoCard
      key={work.id}
      work={work}
      className={bentoLayout[i % bentoLayout.length]}
      onOpen={setSelected}
      index={i}
    />
  ))}
</div>

      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selected && (
          <Lightbox
            work={selected}
            onClose={() => setSelected(null)}
            onPrev={selectedIndex > 0 ? goPrev : undefined}
            onNext={selectedIndex < works.length - 1 ? goNext : undefined}
            index={selectedIndex}
            total={works.length}
          />
        )}
      </AnimatePresence>
    </div>
  );
}

function BentoCard({ work, className, onOpen, index }: {
  work: Work;
  className: string;
  onOpen: (w: Work) => void;
  index: number;
}) {
  return (
    <motion.div
      className={`${className} relative overflow-hidden cursor-pointer group`}
      style={{ backgroundColor: work.color }}
      onClick={() => onOpen(work)}
      initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{
        delay: 0.05 * index,
        duration: 0.5,
        ease: [0.21, 0.47, 0.32, 0.98],
      }}
      whileHover={{ scale: 1.01 }}
    >
      {work.image && (
        <Image
          src={work.image}
          alt={work.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="50vw"
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
        <p className="font-serif text-white text-base leading-tight">{work.title}</p>
        <div className="flex items-center gap-2 mt-1">
          <span className="text-white/60 text-xs uppercase tracking-wider">{work.medium}</span>
          <span className="text-white/40 text-xs">·</span>
          <span className="text-white/60 text-xs">{work.year}</span>
        </div>
      </div>
      {work.available && (
        <div className="absolute top-3 right-3 bg-gold-500/90 text-white text-[10px] uppercase tracking-widest px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          Disponible
        </div>
      )}
    </motion.div>
  );
}

function Lightbox({
  work,
  onClose,
  onPrev,
  onNext,
  index,
  total,
}: {
  work: Work;
  onClose: () => void;
  onPrev?: () => void;
  onNext?: () => void;
  index: number;
  total: number;
}) {
  // Navigation clavier
  if (typeof window !== "undefined") {
    // géré via useEffect dans un vrai projet
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 z-50 bg-black/96 flex items-center justify-center"
      onClick={onClose}
    >
      {/* Fermer */}
      <button
        onClick={onClose}
        className="absolute top-6 right-8 text-white/50 hover:text-white transition-colors z-10"
      >
        <X className="w-5 h-5" />
      </button>

      {/* Compteur */}
      <div className="absolute top-6 left-8 text-xs uppercase tracking-widest text-white/40">
        {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
      </div>

      {/* Navigation précédent */}
      {onPrev && (
        <button
          onClick={(e) => { e.stopPropagation(); onPrev(); }}
          className="absolute left-6 text-white/40 hover:text-white transition-colors z-10 p-2"
        >
          <ArrowLeft className="w-5 h-5" />
        </button>
      )}

      {/* Image */}
      <motion.div
        key={work.id}
        initial={{ opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.97 }}
        transition={{ duration: 0.25 }}
        className="flex flex-col items-center gap-6 max-w-3xl w-full px-16"
        onClick={(e) => e.stopPropagation()}
      >
        <div
          className="relative w-full overflow-hidden"
          style={{ height: "62vh", backgroundColor: work.color }}
        >
          {work.image && (
            <Image src={work.image} alt={work.title} fill className="object-contain" />
          )}
        </div>

        <div className="w-full flex items-start justify-between">
          <div>
            <p className="font-serif text-xl text-white font-normal mb-1">{work.title}</p>
            <p className="text-xs uppercase tracking-widest text-white/40">
              {work.medium} · {work.year} · {work.dimensions}
            </p>
          </div>
          {work.available && (
            <Link
              href="/contact"
              onClick={onClose}
              className="text-xs uppercase tracking-widest text-gold-400 hover:text-gold-300 border border-gold-500/40 hover:border-gold-400 px-4 py-2 transition-colors shrink-0"
            >
              Acquérir
            </Link>
          )}
        </div>
      </motion.div>

      {/* Navigation suivant */}
      {onNext && (
        <button
          onClick={(e) => { e.stopPropagation(); onNext(); }}
          className="absolute right-6 text-white/40 hover:text-white transition-colors z-10 p-2"
        >
          <ArrowRight className="w-5 h-5" />
        </button>
      )}
    </motion.div>
  );
}