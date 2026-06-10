"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SpotlightEffect } from "@/components/magicui/SpotlightEffect";
import { ShimmerButton } from "@/components/magicui/ShimmerButton";

const variants = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden pt-16">
      <SpotlightEffect />

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full py-24">
        <motion.p
          custom={0}
          initial="hidden"
          animate="visible"
          variants={variants}
          className="text-xs uppercase tracking-widest text-gold-500 mb-6 font-medium"
        >
          Artiste plasticienne · Paris
        </motion.p>

        <motion.h1
          custom={1}
          initial="hidden"
          animate="visible"
          variants={variants}
          className="font-serif text-[clamp(48px,8vw,96px)] font-normal leading-[1.05] text-foreground mb-8 max-w-3xl"
        >
          L&apos;art comme{" "}
          <em className="italic text-gold-500">langage premier</em>
        </motion.h1>

        <motion.p
          custom={2}
          initial="hidden"
          animate="visible"
          variants={variants}
          className="text-lg text-muted-foreground font-light leading-relaxed max-w-md mb-12"
        >
          Peintures, illustrations et créations mixtes explorant la lumière,
          la mémoire et les formes du quotidien.
        </motion.p>

        <motion.div
          custom={3}
          initial="hidden"
          animate="visible"
          variants={variants}
          className="flex flex-wrap gap-4 items-center"
        >
          <ShimmerButton asChild>
            <Link href="/#gallery" className="inline-flex items-center gap-2">
              Voir les œuvres
              <ArrowRight className="w-4 h-4" />
            </Link>
          </ShimmerButton>

          <Link
            href="/contact"
            className="text-sm uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors underline-offset-4 hover:underline"
          >
            Me contacter
          </Link>
        </motion.div>

        {/* Stats row */}
        <motion.div
          custom={5}
          initial="hidden"
          animate="visible"
          variants={variants}
          className="mt-20 pt-8 border-t border-border flex flex-wrap gap-12"
        >
          {[
            { value: "6+", label: "Années d'expérience" },
            { value: "40+", label: "Œuvres créées" },
            { value: "12", label: "Expositions" },
          ].map(({ value, label }) => (
            <div key={label}>
              <p className="font-serif text-3xl font-normal text-gold-500">{value}</p>
              <p className="text-xs uppercase tracking-widest text-muted-foreground mt-1">
                {label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
