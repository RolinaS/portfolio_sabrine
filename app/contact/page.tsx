"use client";

import { useState } from "react";
import { BlurFade } from "@/components/magicui/BlurFade";
import { ShimmerButton } from "@/components/magicui/ShimmerButton";
import { Mail, MapPin, Instagram } from "lucide-react";

export default function ContactPage() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section className="min-h-screen pt-32 pb-24">
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        <BlurFade delay={0.1}>
          <span className="text-xs tracking-widest uppercase text-gold-500 block mb-4">
            Contact
          </span>
          <h1 className="font-serif text-5xl md:text-7xl font-normal italic leading-none mb-16">
            Parlons de votre projet
          </h1>
        </BlurFade>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <BlurFade delay={0.25}>
            {sent ? (
              <div className="flex flex-col justify-center h-full">
                <p className="font-serif text-2xl italic mb-4">
                  Message envoyé ✦
                </p>
                <p className="text-muted-foreground font-light">
                  Merci pour votre message. Je vous répondrai dans les plus
                  brefs délais.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <Field label="Nom complet" name="name" required />
                <Field label="Adresse e-mail" name="email" type="email" required />
                <Field label="Sujet" name="subject" />
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-muted-foreground">
                    Message
                  </label>
                  <textarea
                    name="message"
                    rows={5}
                    required
                    className="w-full bg-transparent border-b border-border focus:border-foreground outline-none py-3 text-sm font-light resize-none transition-colors placeholder:text-muted-foreground/40"
                    placeholder="Décrivez votre projet ou votre question…"
                  />
                </div>
                <div className="pt-4">
                  <ShimmerButton type="submit">
                    Envoyer le message
                  </ShimmerButton>
                </div>
              </form>
            )}
          </BlurFade>

          <BlurFade delay={0.4}>
            <div className="space-y-8 pt-2">
              <ContactItem icon={<Mail className="w-4 h-4" />} label="Email">
                Sabrine.rolina@email.com
              </ContactItem>
              <ContactItem icon={<MapPin className="w-4 h-4" />} label="Ville">
                Paris, France
              </ContactItem>
              <ContactItem
                icon={<Instagram className="w-4 h-4" />}
                label="Instagram"
              >
                @Sabrine.rolina.art
              </ContactItem>

              <div className="pt-8 border-t border-border">
                <p className="text-xs uppercase tracking-widest text-muted-foreground mb-3">
                  Commandes
                </p>
                <p className="text-sm font-light text-muted-foreground leading-relaxed">
                  Je suis disponible pour des commandes d'œuvres sur mesure,
                  des collaborations et des expositions. N'hésitez pas à me
                  contacter pour en discuter.
                </p>
              </div>
            </div>
          </BlurFade>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div className="space-y-2">
      <label className="text-xs uppercase tracking-widest text-muted-foreground">
        {label}
      </label>
      <input
        type={type}
        name={name}
        required={required}
        className="w-full bg-transparent border-b border-border focus:border-foreground outline-none py-3 text-sm font-light transition-colors placeholder:text-muted-foreground/40"
        placeholder={label}
      />
    </div>
  );
}

function ContactItem({
  icon,
  label,
  children,
}: {
  icon: React.ReactNode;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-start gap-4">
      <span className="text-gold-500 mt-0.5">{icon}</span>
      <div>
        <p className="text-xs uppercase tracking-widest text-muted-foreground mb-1">
          {label}
        </p>
        <p className="text-sm font-light">{children}</p>
      </div>
    </div>
  );
}
