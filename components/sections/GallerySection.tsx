"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight } from "lucide-react";
import { works, type Work } from "@/data/works";
import { BlurFade } from "@/components/magicui/BlurFade";
import { cn } from "@/lib/utils";

export function GallerySection() {
  const [selected, setSelected] = useState<Work | null>(null);

  return (
    <section id="gallery" className="pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="flex items-baseline justify-between border-t border-border pt-8 pb-10">
          <h2 className="font-serif text-3xl font-normal">Œuvres récentes</h2>
          <span className="text-xs uppercase tracking-widest text-gold-500">
            {works.length} pièces
          </span>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-12 gap-4">
          {works.map((work, i) => (
            <BlurFade key={work.id} delay={0.08 * i} inView>
              <WorkCard work={work} onOpen={setSelected} />
            </BlurFade>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selected && (
          <Lightbox work={selected} onClose={() => setSelected(null)} />
        )}
      </AnimatePresence>
    </section>
  );
}

function WorkCard({
  work,
  onOpen,
}: {
  work: Work;
  onOpen: (w: Work) => void;
}) {
  const colSpan = {
    large: "col-span-12 md:col-span-7",
    medium: "col-span-12 md:col-span-5",
    full: "col-span-12",
    third: "col-span-12 sm:col-span-6 md:col-span-4",
    small: "col-span-6 md:col-span-3",
  }[work.size];

  const aspectRatio = {
    large: "aspect-[4/5]",
    medium: "aspect-[4/5]",
    full: "aspect-[21/9]",
    third: "aspect-[4/5]",
    small: "aspect-square",
  }[work.size];

  return (
    <div className={cn("group cursor-pointer", colSpan)} onClick={() => onOpen(work)}>
      <div
        className={cn(
          "relative overflow-hidden",
          aspectRatio
        )}
        style={{ backgroundColor: work.color }}
      >
        {work.image ? (
          <Image
            src={work.image}
            alt={work.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
          />
        ) : (
          <div
            className="w-full h-full flex items-center justify-center font-serif italic text-white/20 text-lg transition-transform duration-700 group-hover:scale-[1.04]"
          >
            {work.title}
          </div>
        )}

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-colors duration-300" />
      </div>

      <div className="pt-3 pb-2">
        <p className="font-serif text-base font-normal text-foreground leading-snug">
          {work.title}
        </p>
        <div className="flex items-center gap-3 mt-1">
          <span className="text-xs text-muted-foreground uppercase tracking-wider">
            {work.medium}
          </span>
          <span className="text-xs text-muted-foreground">·</span>
          <span className="text-xs text-muted-foreground">{work.year}</span>
        </div>
      </div>
    </div>
  );
}

function Lightbox({ work, onClose }: { work: Work; onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-8"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="absolute top-6 right-8 text-white/60 hover:text-white transition-colors"
        aria-label="Fermer"
      >
        <X className="w-6 h-6" />
      </button>

      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="flex flex-col items-center gap-6 max-w-2xl w-full"
        onClick={(e) => e.stopPropagation()}
      >
        <div
          className="relative w-full aspect-[4/5] max-h-[65vh] overflow-hidden"
          style={{ backgroundColor: work.color }}
        >
          {work.image ? (
            <Image src={work.image} alt={work.title} fill className="object-contain" />
          ) : (
            <div className="w-full h-full flex items-center justify-center font-serif italic text-white/20 text-xl">
              {work.title}
            </div>
          )}
        </div>

        <div className="text-center">
          <p className="font-serif text-xl text-white font-normal mb-2">{work.title}</p>
          <p className="text-xs uppercase tracking-widest text-white/40">
            {work.medium} · {work.year} · {work.dimensions}
          </p>
          <Link
            href={`/works/${work.slug}`}
            className="mt-4 inline-flex items-center gap-2 text-xs uppercase tracking-widest text-gold-400 hover:text-gold-300 transition-colors"
          >
            Voir le détail <ArrowRight className="w-3 h-3" />
          </Link>
        </div>
      </motion.div>
    </motion.div>
  );
}
