import { useState, useEffect } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
// Supabase removed: use local mock testimonials instead

interface Testimonial {
  id: string;
  client_name: string;
  event_type: string;
  rating: number;
  review_text: string;
  service_date: string;
}

export const TestimonialsSlider = () => {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchTestimonials();
  }, []);

  useEffect(() => {
    if (testimonials.length > 1) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
      }, 5000);

      return () => clearInterval(interval);
    }
  }, [testimonials.length]);

  const fetchTestimonials = async () => {
    // Replace Supabase fetch with local mock data for now
    const mockTestimonials: Testimonial[] = [
      {
        id: 't1',
        client_name: 'Asha M.',
        event_type: 'Wedding',
        rating: 5,
        review_text: 'Absolutely incredible service and delicious food — our guests could not stop complimenting!',
        service_date: '2024-08-12'
      },
      {
        id: 't2',
        client_name: 'David K.',
        event_type: 'Corporate Lunch',
        rating: 4,
        review_text: 'Professional and prompt. The menu suited our needs perfectly.',
        service_date: '2024-06-05'
      }
    ];

    setTestimonials(mockTestimonials);
    setLoading(false);
  };

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-5 h-5 ${
          index < rating ? "fill-gold text-gold" : "text-gray-300"
        }`}
      />
    ));
  };

  if (loading || testimonials.length === 0) {
    return null;
  }

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="py-16 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-playfair font-bold text-charcoal mb-4 fade-in-up">
            What Our Clients Say
          </h2>
          <p className="text-lg text-muted-foreground fade-in-up">
            Real experiences from our valued customers
          </p>
          <div className="w-24 h-1 bg-gold mx-auto mt-4 fade-in-up"></div>
        </div>

        <div className="relative">
          <Card className="card-elegant p-8 text-center">
            <CardContent className="space-y-6">
              <div className="flex justify-center space-x-1">
                {renderStars(currentTestimonial.rating)}
              </div>

              <blockquote className="text-xl text-charcoal leading-relaxed font-medium">
                "{currentTestimonial.review_text}"
              </blockquote>

              <div className="space-y-2">
                <div className="font-semibold text-primary text-lg">
                  {currentTestimonial.client_name}
                </div>
                <div className="text-muted-foreground">
                  {currentTestimonial.event_type} • {new Date(currentTestimonial.service_date).getFullYear()}
                </div>
              </div>
            </CardContent>
          </Card>

          {testimonials.length > 1 && (
            <>
              <Button
                variant="outline"
                size="icon"
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 bg-white shadow-lg"
                onClick={prevTestimonial}
              >
                <ChevronLeft className="w-4 h-4" />
              </Button>

              <Button
                variant="outline"
                size="icon"
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 bg-white shadow-lg"
                onClick={nextTestimonial}
              >
                <ChevronRight className="w-4 h-4" />
              </Button>
            </>
          )}
        </div>

        {testimonials.length > 1 && (
          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? "bg-primary" : "bg-gray-300"
                }`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};