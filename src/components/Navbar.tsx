import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChefHat, Calendar, Menu, BookOpen, Phone, Image, User, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navigationItems = [
  { name: "HOME", url: "/" },
  { name: "OUR SERVICES", url: "/catering" },
  { name: "MENU", url: "/menu" },
  { name: "PACKAGES", url: "/courses" },
  { name: "ABOUT", url: "/about" },
  { name: "VENUES", url: "/gallery" },
  { name: "VENDORS", url: "/vendors" },
  { name: "STAFFING", url: "/staffing" },
  { name: "FAQ", url: "/faq" },
  { name: "CONTACT", url: "/contact" },
  { name: "ORDER NOW", url: "/order" },
];

const NavigationLink = ({ item, isActive }: { item: typeof navigationItems[0], isActive: boolean }) => (
  <Link
    to={item.url}
    className={`px-4 py-2 text-sm font-bold tracking-wide transition-all duration-300 ${
      isActive 
        ? "text-primary border-b-2 border-primary" 
        : "text-charcoal hover:text-primary"
    } ${item.name === "ORDER NOW" ? "bg-primary text-white px-6 py-2 rounded hover:bg-primary/90" : ""}`}
  >
    <span>{item.name}</span>
  </Link>
);


// Navigation component for Valtrix Chef Pro - Based on Chic Chef Catering design
export const Navbar = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center py-6">
          {/* Centered Logo */}
          <Link to="/" className="flex flex-col items-center space-y-2">
            <div className="text-center">
              <h1 className="text-4xl font-playfair font-bold text-charcoal tracking-widest">
                VALTRIX CHEF
              </h1>
              <div className="flex items-center justify-center space-x-2 mt-1">
                <div className="w-8 h-0.5 bg-primary"></div>
                <ChefHat className="w-5 h-5 text-primary" />
                <div className="w-8 h-0.5 bg-primary"></div>
              </div>
              <h2 className="text-lg font-bold text-charcoal tracking-[0.3em] mt-1">
                CATERING
              </h2>
            </div>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center justify-center pb-4 border-b border-gray-100">
          <div className="flex items-center space-x-8">
            {navigationItems.map((item) => (
              <NavigationLink key={item.name} item={item} isActive={isActive(item.url)} />
            ))}
          </div>
        </nav>

        {/* Mobile Menu Toggle */}
        <div className="lg:hidden flex justify-center pb-4">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-charcoal hover:text-primary"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden pb-4 border-t border-gray-100">
            <nav className="flex flex-col space-y-2 mt-4">
              {navigationItems.map((item) => (
                <NavigationLink 
                  key={item.name} 
                  item={item} 
                  isActive={isActive(item.url)} 
                />
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};