import { HeroSection } from "@/components/sections/HeroSection";
import { GallerySection } from "@/components/sections/GallerySection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ContactBand } from "@/components/sections/ContactBand";

export default function Home() {
  return (
    <>
      <HeroSection />
      <GallerySection />
      <AboutSection />
      <ContactBand />
    </>
  );
}
