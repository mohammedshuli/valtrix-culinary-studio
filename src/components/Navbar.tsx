import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { 
  ChefHat, 
  Menu, 
  X, 
  Home, 
  Utensils, 
  BookOpen, 
  GraduationCap, 
  Camera, 
  Phone,
  MessageCircle,
  Users
} from "lucide-react";
import { Button } from "@/components/ui/button";

const navigationItems = [
  { name: "Home", url: "/", icon: Home },
  { name: "About", url: "/about", icon: Users },
  { name: "Services", url: "/catering", icon: Utensils },
  { name: "Menu", url: "/menu", icon: BookOpen },
  { name: "Courses", url: "/courses", icon: GraduationCap },
  { name: "Gallery", url: "/gallery", icon: Camera },
  { name: "Contact", url: "/contact", icon: Phone },
];

const NavigationLink = ({ item, isActive, isMobile = false }: { 
  item: typeof navigationItems[0], 
  isActive: boolean,
  isMobile?: boolean 
}) => (
  <Link
    to={item.url}
    className={`flex items-center gap-2 px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg ${
      isActive 
        ? "text-primary bg-primary/10" 
        : "text-foreground/80 hover:text-primary hover:bg-primary/5"
    } ${isMobile ? "w-full justify-start" : ""}`}
  >
    <item.icon className="w-4 h-4" />
    <span>{item.name}</span>
  </Link>
);

// Luxurious Navigation component for Valtrix Chef Pro
export const Navbar = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-effect bg-white/80 backdrop-blur-md border-b border-white/20 shadow-elegant">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          
          {/* Left: Logo Section */}
          <Link to="/" className="flex items-center gap-4">
            <div className="relative">
              <div className="w-12 h-12 rounded-full luxury-gradient flex items-center justify-center shadow-luxury">
                <ChefHat className="w-6 h-6 text-white" />
              </div>
              <div className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-accent border-2 border-white"></div>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl font-playfair font-bold text-foreground tracking-wide">
                Valtrix Pro Chef
              </h1>
              <p className="text-xs text-muted-foreground font-medium tracking-wider">
                Professional Catering 
              </p>
            </div>
          </Link>

          {/* Center: Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 bg-white/50 rounded-full px-6 py-2 backdrop-blur-sm border border-white/30">
            {navigationItems.map((item) => (
              <NavigationLink key={item.name} item={item} isActive={isActive(item.url)} />
            ))}
          </nav>

          {/* Right: Action Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <Button 
              variant="outline" 
              size="sm"
              className="border-primary/20 hover:bg-primary/10 hover:border-primary/40 backdrop-blur-sm"
              asChild
            >
              <a href="https://wa.me/+255746749320" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-4 h-4 mr-2" />
                WhatsApp
              </a>
            </Button>
            <Button 
              size="sm"
              className="luxury-gradient text-white shadow-lg hover:shadow-luxury transition-all duration-300"
            >
             <Link to="/catering">
                  <Phone className="w-5 h-5 mr-2" />
                  Book Now
                </Link>
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-foreground hover:text-primary hover:bg-primary/10"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-white/20 bg-white/90 backdrop-blur-md rounded-b-2xl mx-4 mb-4">
            <nav className="flex flex-col gap-2 p-4">
              {navigationItems.map((item) => (
                <NavigationLink 
                  key={item.name} 
                  item={item} 
                  isActive={isActive(item.url)}
                  isMobile={true}
                />
              ))}
              
              {/* Mobile Action Buttons */}
              <div className="flex flex-col gap-2 mt-4 pt-4 border-t border-white/20">
                <Button 
                  variant="outline" 
                  size="sm"
                  className="w-full justify-start border-primary/20 hover:bg-primary/10"
                  asChild
                >
                  <a href="https://wa.me/+255746749320" target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="w-4 h-4 mr-2" />
                    WhatsApp
                  </a>
                </Button>
                <Button 
                  size="sm"
                  className="w-full luxury-gradient text-white"
                >
                 <Link to="/catering">
                  <Phone className="w-5 h-5 mr-2" />
                  Book Now
                </Link>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};