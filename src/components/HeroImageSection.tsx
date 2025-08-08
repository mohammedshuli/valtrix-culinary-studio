import heroChef from "@/assets/hero-chef.jpg";

const HeroImageSection = () => {
  return (
    <section className="w-full h-[700px] relative overflow-hidden">
      <div className="absolute inset-0">
        <img 
          src={heroChef} 
          alt="Professional chef preparing gourmet dishes" 
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 luxury-gradient opacity-80"></div>
      </div>
      
      {/* Content overlay with glass effect */}
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="text-center text-white max-w-5xl mx-auto px-6">
          <div className="glass-effect rounded-3xl p-12 border border-white/30 backdrop-blur-lg bg-white/10">
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-playfair font-bold mb-8 text-white drop-shadow-2xl">
              Culinary Excellence
            </h1>
            <p className="text-2xl md:text-3xl mb-10 text-white/95 max-w-3xl mx-auto font-inter font-light leading-relaxed">
              Where passion meets precision in every dish we create
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <button className="btn-hero px-10 py-5 text-xl shadow-luxury hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
                Explore Our Services
              </button>
              <button className="btn-outline-elegant px-10 py-5 text-xl border-2 border-white text-white hover:bg-white hover:text-charcoal shadow-lg backdrop-blur-sm bg-white/10">
                View Our Menu
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroImageSection;