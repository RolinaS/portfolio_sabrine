"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight } from "lucide-react";
import { works, type Work } from "@/data/works";
import { BlurFade } from "@/components/magicui/BlurFade";

export function GallerySection() {
  const [selected, setSelected] = useState<Work | null>(null);

  return (
    <div className="h-full flex flex-col overflow-hidden">
      {/* Header */}
      <BlurFade delay={0.1} inView>
        <div className="flex items-baseline justify-between px-10 pt-10 pb-6 border-b border-border shrink-0">
          <h2 className="font-serif text-3xl font-normal">Œuvres récentes</h2>
          <span className="text-xs uppercase tracking-widest text-gold-500">
            {works.length} pièces
          </span>
        </div>
      </BlurFade>

      {/* Masonry flex gallery — inspiré du codepen michydev */}
      <div className="flex-1 overflow-hidden px-3 pt-3 pb-0">
        <ul
          className="photogallery"
          style={{
            display: "flex",
            flexWrap: "wrap",
            margin: "0",
            padding: "0",
            listStyle: "none",
            height: "100%",
          }}
        >
          {works.map((work, i) => (
            <BlurFade key={work.id} delay={0.06 * i} inView>
              <GalleryItem work={work} onOpen={setSelected} />
            </BlurFade>
          ))}
          {/* flex spacer — même technique que le codepen */}
          <li style={{ flexGrow: 10 }} />
        </ul>
      </div>

      {/* CTA */}
      <BlurFade delay={0.5} inView>
        <div className="shrink-0 flex justify-center py-5 border-t border-border">
          <Link
            href="/works"
            className="inline-flex items-center gap-3 bg-foreground text-background px-8 py-3 text-xs uppercase tracking-widest hover:bg-gold-500 transition-colors duration-300"
          >
            Voir toutes les œuvres
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </BlurFade>

      {/* Lightbox */}
      <AnimatePresence>
        {selected && (
          <Lightbox work={selected} onClose={() => setSelected(null)} />
        )}
      </AnimatePresence>
    </div>
  );
}

function GalleryItem({ work, onOpen }: { work: Work; onOpen: (w: Work) => void }) {
  return (
    <li
      onClick={() => onOpen(work)}
      style={{
        flexGrow: 1,
        height: "42vh",
        margin: "3px",
        overflow: "hidden",
        position: "relative",
        cursor: "pointer",
        minWidth: "200px",
        backgroundColor: work.color,
      }}
      className="group"
    >
      {work.image ? (
        <Image
          src={work.image}
          alt={work.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      ) : (
        <div
          className="w-full h-full transition-transform duration-700 group-hover:scale-105"
          style={{ backgroundColor: work.color }}
        />
      )}

      {/* Hover overlay avec titre */}
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-end p-4">
        <div className="translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
          <p className="font-serif text-white text-base leading-tight">{work.title}</p>
          <p className="text-white/70 text-xs uppercase tracking-wider mt-1">{work.medium}</p>
        </div>
      </div>
    </li>
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
          className="relative w-full overflow-hidden"
          style={{ height: "60vh", backgroundColor: work.color }}
        >
          {work.image && (
            <Image src={work.image} alt={work.title} fill className="object-contain" />
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