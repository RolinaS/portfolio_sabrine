import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-border mt-0">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-xs text-muted-foreground font-light">
          © {new Date().getFullYear()} Clara Rolina — Tous droits réservés
        </p>
        <div className="flex items-center gap-6">
          {[
            { label: "Instagram", href: "#" },
            { label: "LinkedIn", href: "#" },
            { label: "Behance", href: "#" },
          ].map(({ label, href }) => (
            <Link
              key={label}
              href={href}
              className="text-xs uppercase tracking-widest text-muted-foreground hover:text-gold-500 transition-colors"
            >
              {label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
