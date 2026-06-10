import Link from "next/link";

export function ContactBand() {
  return (
    <section
      id="contact-band"
      className="bg-foreground text-background py-20"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8">
        <p className="font-serif text-4xl md:text-5xl italic font-normal leading-tight">
          Une œuvre, un projet,<br />une question ?
        </p>
        <Link
          href="/contact"
          className="shrink-0 border border-background/30 px-8 py-4 text-xs uppercase tracking-widest hover:bg-gold-500 hover:border-gold-500 transition-colors"
        >
          Me contacter
        </Link>
      </div>
    </section>
  );
}
