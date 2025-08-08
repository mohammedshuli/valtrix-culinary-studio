import { Button } from "@/components/ui/button";
import { Phone, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";

export const CallToActionSection = () => {
  const whatsappNumber = "+255655734453";
  const message = "Hello! I'd like to know more about Valtrix Chef Pro services.";
  const whatsappLink = `https://wa.me/${whatsappNumber.replace('+', '')}?text=${encodeURIComponent(message)}`;

  return (
    <section className="py-20 luxury-gradient text-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-20 left-20 w-40 h-40 rounded-full gold-gradient"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 rounded-full bg-soft-gold"></div>
      </div>
      
      <div className="max-w-6xl mx-auto px-6 lg:px-8 text-center relative z-10">
        <div className="space-y-12">
          <div className="space-y-6 fade-in-up">
            <h2 className="text-5xl lg:text-6xl font-playfair font-bold leading-tight">
              Ready to Elevate Your Culinary Experience?
            </h2>
            <p className="text-2xl opacity-95 max-w-3xl mx-auto font-inter font-light leading-relaxed">
              Whether you need professional catering for your special event or want to master 
              culinary skills, we're here to make it happen.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="card-elegant p-8 space-y-6 fade-in-left bg-white/10 border-white/20">
              <div className="w-16 h-16 mx-auto rounded-full gold-gradient flex items-center justify-center shadow-gold">
                <Phone className="w-8 h-8 text-charcoal" />
              </div>
              <h3 className="text-3xl font-playfair font-semibold">
                Book Catering Services
              </h3>
              <p className="text-lg opacity-90 font-inter">
                Professional catering for weddings, corporate events, and special occasions
              </p>
              <Button 
                asChild
                size="lg"
                className="w-full bg-white text-primary hover:bg-cream shadow-luxury hover:shadow-2xl transform hover:scale-105 transition-all duration-300 font-semibold text-lg py-4"
              >
                <Link to="/catering">
                  <Phone className="w-5 h-5 mr-2" />
                  Book Now
                </Link>
              </Button>
            </div>

            <div className="card-elegant p-8 space-y-6 fade-in-right bg-white/10 border-white/20">
              <div className="w-16 h-16 mx-auto rounded-full gold-gradient flex items-center justify-center shadow-gold">
                <MessageCircle className="w-8 h-8 text-charcoal" />
              </div>
              <h3 className="text-3xl font-playfair font-semibold">
                Start Learning
              </h3>
              <p className="text-lg opacity-90 font-inter">
                Professional culinary courses to master the art of cooking
              </p>
              <Button 
                asChild
                size="lg"
                className="w-full bg-white text-primary hover:bg-cream shadow-luxury hover:shadow-2xl transform hover:scale-105 transition-all duration-300 font-semibold text-lg py-4"
              >
                <Link to="/courses">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  View Courses
                </Link>
              </Button>
            </div>
          </div>

          <div className="border-t border-white/30 pt-10 fade-in-up">
            <div className="glass-effect rounded-2xl p-8 bg-white/10 border-white/20 max-w-2xl mx-auto">
              <p className="text-2xl mb-6 font-playfair font-semibold">Have questions? Let's chat!</p>
              <Button 
                asChild
                variant="outline"
                size="lg"
                className="border-2 border-white text-white hover:bg-white hover:text-primary backdrop-blur-sm bg-white/10 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 font-semibold text-lg px-8 py-4"
              >
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-6 h-6 mr-3" />
                  WhatsApp Us: {whatsappNumber}
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};