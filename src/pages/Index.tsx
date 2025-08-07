import { Navbar } from "@/components/Navbar";
import HeroImageSection from "@/components/HeroImageSection";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import { StatsSection } from "@/components/StatsSection";
import { FeaturedMenuItems } from "@/components/FeaturedMenuItems";
import { TestimonialsSlider } from "@/components/TestimonialsSlider";
import { CallToActionSection } from "@/components/CallToActionSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroImageSection />
      <main>
        <HeroSection />
        <StatsSection />
        <ServicesSection />
        <FeaturedMenuItems />
        <TestimonialsSlider />
        <CallToActionSection />
      </main>
    </div>
  );
};

export default Index;
