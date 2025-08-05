import { ChefHat, Calendar, GraduationCap, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroChef from '@/assets/hero-chef.jpg';

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center bg-gradient-to-br from-background via-muted/20 to-primary-light/10">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroChef} 
          alt="Professional Chef" 
          className="w-full h-full object-cover opacity-15"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/60"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="fade-in-left">
            <div className="flex items-center space-x-2 mb-6">
              <Star className="h-5 w-5 text-secondary fill-current" />
              <span className="text-sm font-medium text-muted-foreground tracking-wide uppercase">
                Premium Catering & Culinary Education
              </span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-playfair font-bold text-foreground leading-tight mb-6">
              Valtrix Chef
              <span className="text-primary block">Pro</span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Tanzania's premier destination for exceptional catering services and professional culinary education. 
              From intimate gatherings to grand celebrations, we bring culinary excellence to every occasion.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              <div className="flex items-center space-x-3">
                <ChefHat className="h-6 w-6 text-primary" />
                <span className="font-medium">Expert Chefs</span>
              </div>
              <div className="flex items-center space-x-3">
                <Calendar className="h-6 w-6 text-primary" />
                <span className="font-medium">Event Catering</span>
              </div>
              <div className="flex items-center space-x-3">
                <GraduationCap className="h-6 w-6 text-primary" />
                <span className="font-medium">Culinary Training</span>
              </div>
              <div className="flex items-center space-x-3">
                <Star className="h-6 w-6 text-secondary fill-current" />
                <span className="font-medium">Premium Quality</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="btn-hero">
                Book Catering Service
              </Button>
              <Button size="lg" variant="outline" className="btn-outline-elegant">
                Explore Courses
              </Button>
            </div>
          </div>

          {/* Right Content - Stats Cards */}
          <div className="fade-in-right">
            <div className="grid grid-cols-2 gap-6">
              <div className="card-elegant text-center">
                <div className="text-3xl font-playfair font-bold text-primary mb-2">500+</div>
                <div className="text-sm text-muted-foreground">Events Catered</div>
              </div>
              <div className="card-elegant text-center">
                <div className="text-3xl font-playfair font-bold text-secondary mb-2">15+</div>
                <div className="text-sm text-muted-foreground">Expert Chefs</div>
              </div>
              <div className="card-elegant text-center">
                <div className="text-3xl font-playfair font-bold text-primary mb-2">1200+</div>
                <div className="text-sm text-muted-foreground">Students Trained</div>
              </div>
              <div className="card-elegant text-center">
                <div className="text-3xl font-playfair font-bold text-secondary mb-2">98%</div>
                <div className="text-sm text-muted-foreground">Satisfaction Rate</div>
              </div>
            </div>

            {/* CTA Banner */}
            <div className="mt-8 p-6 bg-gradient-to-r from-primary to-primary-hover rounded-xl text-primary-foreground shadow-elegant">
              <h3 className="text-xl font-playfair font-semibold mb-2">
                Special Offer - Limited Time!
              </h3>
              <p className="text-primary-foreground/90 mb-4">
                Get 20% off your first catering booking and free tasting session
              </p>
              <Button variant="secondary" className="btn-gold">
                Claim Offer Now
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;