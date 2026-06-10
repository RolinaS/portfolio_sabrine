import { BlurFade } from "@/components/magicui/BlurFade";
import { BorderBeam } from "@/components/magicui/BorderBeam";

const info = [
  { label: "Basée à", value: "Paris, France" },
  { label: "Formation", value: "Beaux-Arts de Paris" },
  { label: "Médiums", value: "Huile, Acrylique, Mixte" },
  { label: "Expositions", value: "Paris · Lyon · Bordeaux" },
  { label: "Commandes", value: "Ouvertes", highlight: true },
];

export function AboutSection() {
  return (
    <section id="about" className="py-24 border-t border-border">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 divide-y lg:divide-y-0 lg:divide-x divide-border">
          {/* Left: quote + bio */}
          <BlurFade delay={0.1} inView>
            <div className="lg:pr-16 pb-16 lg:pb-0">
              <span className="text-xs uppercase tracking-widest text-gold-500 block mb-6">
                À propos
              </span>
              <blockquote className="font-serif text-2xl italic leading-relaxed text-foreground mb-8">
                « Peindre, c&apos;est trouver la juste distance entre ce qu&apos;on
                voit et ce qu&apos;on ressent. »
              </blockquote>
              <p className="text-sm font-light text-muted-foreground leading-relaxed">
                Clara Rolina est une artiste plasticienne basée à Paris. Formée aux
                Beaux-Arts, elle travaille principalement l&apos;huile, l&apos;acrylique
                et les techniques mixtes. Son travail explore les tensions entre
                abstraction et figuration, lumière naturelle et matière brute.
              </p>
              <p className="text-sm font-light text-muted-foreground leading-relaxed mt-4">
                Ses œuvres ont été exposées dans plusieurs galeries parisiennes et
                font partie de collections privées en France et à l&apos;étranger.
              </p>
            </div>
          </BlurFade>

          {/* Right: info card */}
          <BlurFade delay={0.25} inView>
            <div className="lg:pl-16 pt-16 lg:pt-0 relative">
              <span className="text-xs uppercase tracking-widest text-gold-500 block mb-6">
                Informations
              </span>
              <div className="relative overflow-hidden rounded-lg border border-border p-6 bg-card">
                <BorderBeam size={180} duration={8} />
                <div className="space-y-0">
                  {info.map(({ label, value, highlight }) => (
                    <div
                      key={label}
                      className="flex items-center justify-between py-4 border-b border-border last:border-0"
                    >
                      <span className="text-xs uppercase tracking-widest text-muted-foreground">
                        {label}
                      </span>
                      <span
                        className={
                          highlight
                            ? "text-sm text-gold-500 font-medium"
                            : "text-sm font-light"
                        }
                      >
                        {value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </BlurFade>
        </div>
      </div>
    </section>
  );
}
