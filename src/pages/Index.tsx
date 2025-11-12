import { HeroSection } from "@/components/HeroSection";
import { VideoSection } from "@/components/VideoSection";
import { AboutSection } from "@/components/AboutSection";
import { BandMembersSection } from "@/components/BandMembersSection";
import { PhotoGallerySection } from "@/components/PhotoGallerySection";
import { ScrollAnimatedBackground } from "@/components/ScrollAnimatedBackground";

const Index = () => {
  return (
    <div 
      className="min-h-screen bg-background text-foreground overflow-x-hidden relative"
      style={{
        // Оптимизация скроллинга для мобильных
        overscrollBehavior: "contain",
        WebkitOverflowScrolling: "touch",
        // Улучшение производительности
        willChange: "scroll-position",
      }}
    >
      <ScrollAnimatedBackground />
      <div className="relative z-10">
        <HeroSection />
        <VideoSection />
        <AboutSection />
        <BandMembersSection />
        <PhotoGallerySection />
        
        {/* Footer */}
        <footer className="relative py-12 px-4 text-center border-t border-primary/20">
          <div className="container mx-auto">
            <p className="font-montserrat text-muted-foreground">
              © 2024 Бренди. Музыка, которая льётся.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;
