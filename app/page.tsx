"use client";

import { ScrollContainer } from "@/components/layout/ScrollContainer";
import { HeroSection }     from "@/components/sections/HeroSection";
import { GallerySection }  from "@/components/sections/GallerySection";
import { AboutSection }    from "@/components/sections/AboutSection";
import { ContactBand }     from "@/components/sections/ContactBand";

export default function Home() {
  const sections = [
    <HeroSection key="hero" />,
    <GallerySection key="gallery" />,
    <AboutSection key="about" />,
    <ContactBand key="contact" />,
  ];

  return (
    <div className="h-screen overflow-hidden">
      <ScrollContainer sections={sections} />
    </div>
  );
}