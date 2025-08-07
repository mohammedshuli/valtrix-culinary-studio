import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChefHat, Calendar, Menu, BookOpen, Phone, Image, User, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navigationItems = [
  { name: "Home", url: "/", icon: ChefHat },
  { name: "Catering", url: "/catering", icon: Calendar },
  { name: "Menu", url: "/menu", icon: Menu },
  { name: "Courses", url: "/courses", icon: BookOpen },
  { name: "Gallery", url: "/gallery", icon: Image },
  { name: "Contact", url: "/contact", icon: Phone },
];

const NavigationLink = ({ item, isActive }: { item: typeof navigationItems[0], isActive: boolean }) => (
  <Link
    to={item.url}
    className={`flex items-center space-x-2 px-6 py-3 rounded-lg transition-all duration-300 font-medium text-base ${
      isActive 
        ? "bg-primary text-white shadow-md" 
        : "text-foreground hover:bg-secondary hover:text-secondary-foreground"
    }`}
  >
    <item.icon className="w-5 h-5" />
    <span>{item.name}</span>
  </Link>
);

const WhatsAppButton = () => {
  const whatsappNumber = "+255655734453";
  const message = "Hello! I'm interested in Valtrix Chef Pro services.";
  const whatsappLink = `https://wa.me/${whatsappNumber.replace('+', '')}?text=${encodeURIComponent(message)}`;
  
  return (
    <Button
      asChild
      variant="outline"
      size="sm"
      className="border-accent text-accent hover:bg-accent hover:text-accent-foreground"
    >
      <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
        WhatsApp
      </a>
    </Button>
  );
};

const BookNowButton = () => (
  <Button asChild className="btn-hero">
    <Link to="/contact">Book Now</Link>
  </Button>
);

// Navigation component for Valtrix Chef Pro
export const Navbar = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-effect shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo Section */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-12 h-12 luxury-gradient rounded-full flex items-center justify-center shadow-lg">
              <ChefHat className="w-7 h-7 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-playfair font-bold text-primary">Valtrix Chef Pro</h1>
              <p className="text-xs text-muted-foreground hidden sm:block">Professional Catering & Culinary Education</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center justify-center flex-1 space-x-8">
            {navigationItems.map((item) => (
              <NavigationLink key={item.name} item={item} isActive={isActive(item.url)} />
            ))}
          </nav>

          {/* Action Buttons */}
          <div className="hidden lg:flex items-center space-x-3">
            <WhatsAppButton />
            <BookNowButton />
          </div>

          {/* Mobile Menu Toggle */}
          <Button
            variant="ghost"
            size="sm"
            className="lg:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden pb-4 border-t border-border">
            <nav className="flex flex-col space-y-2 mt-4">
              {navigationItems.map((item) => (
                <NavigationLink 
                  key={item.name} 
                  item={item} 
                  isActive={isActive(item.url)} 
                />
              ))}
              <div className="flex flex-col space-y-2 pt-4 border-t border-border">
                <WhatsAppButton />
                <BookNowButton />
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};