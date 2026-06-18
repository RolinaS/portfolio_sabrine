import Link from "next/link";
import Image from "next/image";

export function ContactBand() {
  return (
    <section className="h-full bg-foreground text-background flex items-center overflow-hidden relative">

      {/* Image décorative — positionnée à droite, légèrement rognée */}
      <div className="absolute right-20 bottom-0 h-full w-[600px] opacity-25 pointer-events-none select-none">
        <Image
          src="/visage.png"
          alt=""
          fill
          className="object-contain object-bottom"
          priority
        />
      </div>

      {/* Contenu */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8 relative z-10">
        <div>
          <p className="text-xs uppercase tracking-widest text-gold-500 mb-6">
            Contact
          </p>
          <p className="font-serif text-4xl md:text-6xl italic font-normal leading-tight">
            Une œuvre,<br />un projet,<br />une question ?
          </p>
        </div>

        <div className="flex flex-col gap-4 items-start sm:items-end shrink-0">
          <Link
            href="/contact"
            className="border border-background/30 px-8 py-4 text-xs uppercase tracking-widest hover:bg-gold-500 hover:border-gold-500 transition-colors duration-300"
          >
            Me contacter
          </Link>
        </div>
      </div>

    </section>
  );
}