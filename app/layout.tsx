import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { cn } from "@/lib/utils";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Clara Rolina — Artiste plasticienne",
  description:
    "Portfolio de Clara Rolina, artiste plasticienne basée à Paris. Peintures, illustrations et créations mixtes.",
  openGraph: {
    title: "Clara Rolina — Artiste plasticienne",
    description: "Portfolio d'art · Paris",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body
        className={cn(
          inter.variable,
          playfair.variable,
          "font-sans min-h-screen bg-background text-foreground"
        )}
      >
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
