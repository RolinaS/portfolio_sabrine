import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Sabrine Rolina — Artiste plasticienne",
  description: "Portfolio de Sabrine Rolina, artiste plasticienne basée à Paris.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className={cn(
        inter.variable,
        playfair.variable,
        "font-sans bg-background text-foreground min-h-screen"
      )}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}