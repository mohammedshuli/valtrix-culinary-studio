import { Button } from "@/components/ui/button";
import { Phone, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";

export const CallToActionSection = () => {
  const whatsappNumber = "+255655734453";
  const message = "Hello! I'd like to know more about Valtrix Chef Pro services.";
  const whatsappLink = `https://wa.me/${whatsappNumber.replace('+', '')}?text=${encodeURIComponent(message)}`;

  return (
    <section className="py-16 luxury-gradient text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          <div className="space-y-4 fade-in-up">
            <h2 className="text-4xl lg:text-5xl font-playfair font-bold">
              Ready to Elevate Your Culinary Experience?
            </h2>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Whether you need professional catering for your special event or want to master 
              culinary skills, we're here to make it happen.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <div className="space-y-4 fade-in-left">
              <h3 className="text-2xl font-playfair font-semibold">
                Book Catering Services
              </h3>
              <p className="opacity-90">
                Professional catering for weddings, corporate events, and special occasions
              </p>
              <Button 
                asChild
                variant="secondary"
                size="lg"
                className="w-full bg-white text-primary hover:bg-cream"
              >
                <Link to="/catering">
                  <Phone className="w-5 h-5 mr-2" />
                  Book Now
                </Link>
              </Button>
            </div>

            <div className="space-y-4 fade-in-right">
              <h3 className="text-2xl font-playfair font-semibold">
                Start Learning
              </h3>
              <p className="opacity-90">
                Professional culinary courses to master the art of cooking
              </p>
              <Button 
                asChild
                variant="secondary"
                size="lg"
                className="w-full bg-white text-primary hover:bg-cream"
              >
                <Link to="/courses">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  View Courses
                </Link>
              </Button>
            </div>
          </div>

          <div className="border-t border-white/20 pt-8 fade-in-up">
            <p className="text-lg mb-4">Have questions? Let's chat!</p>
            <Button 
              asChild
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-primary"
            >
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-5 h-5 mr-2" />
                WhatsApp Us: {whatsappNumber}
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};