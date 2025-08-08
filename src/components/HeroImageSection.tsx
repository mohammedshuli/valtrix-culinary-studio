import heroChef from "@/assets/hero-chef.jpg";
import { Link } from "react-router-dom";

const HeroImageSection = () => {
  return (
    <section className="w-full h-[600px] relative overflow-hidden">
      <div className="absolute inset-0">
        <img 
          src={heroChef} 
          alt="Professional chef preparing gourmet dishes" 
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/60"></div>
      </div>
      
      {/* Content overlay */}
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-playfair font-bold mb-6">
            Culinary Excellence
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-2xl mx-auto">
            Where passion meets precision in every dish we create
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/catering" className="btn-hero px-8 py-4 text-lg">
              Explore Our Services
            </Link>
            <Link to="/menu" className="btn-outline-elegant px-8 py-4 text-lg">
              View Our Menu
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroImageSection;