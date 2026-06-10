import { works } from "@/data/works";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { BlurFade } from "@/components/magicui/BlurFade";

interface Props {
  params: { slug: string };
}

export function generateStaticParams() {
  return works.map((w) => ({ slug: w.slug }));
}

export default function WorkPage({ params }: Props) {
  const work = works.find((w) => w.slug === params.slug);
  if (!work) notFound();

  return (
    <article className="min-h-screen pt-24 pb-24">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <BlurFade delay={0.1}>
          <Link
            href="/#gallery"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-12 uppercase tracking-widest"
          >
            <ArrowLeft className="w-4 h-4" />
            Retour aux œuvres
          </Link>
        </BlurFade>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <BlurFade delay={0.2}>
            <div
              className="relative aspect-[4/5] overflow-hidden"
              style={{ backgroundColor: work.color }}
            >
              {work.image ? (
                <Image
                  src={work.image}
                  alt={work.title}
                  fill
                  className="object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center font-serif italic text-white/20 text-xl">
                  {work.title}
                </div>
              )}
            </div>
          </BlurFade>

          <BlurFade delay={0.35}>
            <div className="pt-4">
              <span className="text-xs tracking-widest uppercase text-gold-500 block mb-4">
                {work.category}
              </span>
              <h1 className="font-serif text-4xl md:text-5xl font-normal leading-tight mb-6">
                {work.title}
              </h1>
              <div className="space-y-3 mb-8 border-y border-border py-6">
                <Row label="Année" value={work.year} />
                <Row label="Médium" value={work.medium} />
                <Row label="Format" value={work.dimensions} />
                {work.available && (
                  <Row label="Disponibilité" value="Disponible à l'achat" highlight />
                )}
              </div>
              <p className="text-muted-foreground leading-relaxed font-light">
                {work.description}
              </p>
              {work.available && (
                <Link
                  href="/contact"
                  className="mt-8 inline-flex items-center gap-2 bg-foreground text-background px-6 py-3 text-sm uppercase tracking-widest hover:bg-gold-500 transition-colors"
                >
                  Renseignements & acquisition
                </Link>
              )}
            </div>
          </BlurFade>
        </div>
      </div>
    </article>
  );
}

function Row({
  label,
  value,
  highlight,
}: {
  label: string;
  value: string;
  highlight?: boolean;
}) {
  return (
    <div className="flex justify-between text-sm">
      <span className="text-muted-foreground uppercase tracking-wider text-xs">
        {label}
      </span>
      <span
        className={
          highlight ? "text-gold-500 font-medium" : "text-foreground"
        }
      >
        {value}
      </span>
    </div>
  );
}
