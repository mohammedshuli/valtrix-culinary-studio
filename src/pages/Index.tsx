import { Navbar } from "@/components/Navbar";
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
