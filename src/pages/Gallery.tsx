import { Navbar } from '@/components/Navbar';
import { useState } from 'react';
import { X, ZoomIn } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent } from '@/components/ui/dialog';

// Gallery images with descriptions
const galleryImages = [
  {
    id: 1,
    src: "https://www.chicchefcatering.com/wp-content/uploads/2019/04/illinois-wisconsin-indiana-catering.jpg",
    alt: "Illinois Wisconsin Indiana Catering",
    category: "Events",
    title: "Premium Event Catering"
  },
  {
    id: 2,
    src: "https://www.chicchefcatering.com/wp-content/uploads/2025/01/F0B4DD91-8347-4615-9D87-CF0C92D57167.jpeg",
    alt: "Custom Charcuterie Board",
    category: "Charcuterie",
    title: "Seasonal Charcuterie Boards"
  },
  {
    id: 3,
    src: "https://www.chicchefcatering.com/wp-content/uploads/2018/10/Salmon.jpg",
    alt: "Delicious Salmon Dish",
    category: "Cuisine",
    title: "Gourmet Salmon Preparation"
  },
  {
    id: 4,
    src: "https://www.chicchefcatering.com/wp-content/uploads/2018/10/full-service-catering-chicago-wisconsin-indiana.jpg",
    alt: "Full Service Catering",
    category: "Services",
    title: "Full-Service Event Solutions"
  },
  {
    id: 5,
    src: "https://www.chicchefcatering.com/wp-content/uploads/2018/10/chicago-area-event-catering.jpg",
    alt: "Chicago Area Event Catering",
    category: "Events",
    title: "Chicago Area Celebrations"
  }
];

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedImage, setSelectedImage] = useState<typeof galleryImages[0] | null>(null);

  const categories = ['All', ...Array.from(new Set(galleryImages.map(img => img.category)))];

  const filteredImages = selectedCategory === 'All' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory);

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-elegant">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-5xl lg:text-6xl font-playfair font-bold text-foreground mb-6">
              Our <span className="text-primary">Gallery</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Discover the artistry behind our culinary creations and the memorable events we've brought to life.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className={selectedCategory === category ? "btn-hero" : "btn-outline-elegant"}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredImages.map((image) => (
              <div 
                key={image.id}
                className="card-elegant group cursor-pointer overflow-hidden hover:shadow-luxury transition-all duration-300"
                onClick={() => setSelectedImage(image)}
              >
                <div className="relative aspect-square overflow-hidden">
                  <img 
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                    <ZoomIn className="h-8 w-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-primary text-primary-foreground text-xs font-medium rounded-full">
                      {image.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-playfair font-semibold text-foreground mb-2">
                    {image.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Professional catering excellence
                  </p>
                </div>
              </div>
            ))}
          </div>

          {filteredImages.length === 0 && (
            <div className="text-center py-16">
              <p className="text-xl text-muted-foreground">
                No images found for the selected category.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox Modal */}
      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-4xl w-full h-[80vh] p-0 bg-black/90 border-none">
          {selectedImage && (
            <div className="relative w-full h-full flex items-center justify-center">
              <Button
                variant="ghost"
                size="sm"
                className="absolute top-4 right-4 z-10 text-white hover:bg-white/20"
                onClick={() => setSelectedImage(null)}
              >
                <X className="h-5 w-5" />
              </Button>
              <img 
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="max-w-full max-h-full object-contain"
              />
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-xl font-playfair font-semibold mb-2">
                  {selectedImage.title}
                </h3>
                <p className="text-sm opacity-80">{selectedImage.category}</p>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-elegant">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-playfair font-bold text-foreground mb-6">
              Ready to Create Your Own Memorable Event?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Let our expert team bring your culinary vision to life with our exceptional catering services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="btn-hero">Book Your Event</Button>
              <Button variant="outline" className="btn-outline-elegant">View Our Services</Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;