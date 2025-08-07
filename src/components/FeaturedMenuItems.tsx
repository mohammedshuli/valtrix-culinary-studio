import { useState, useEffect } from "react";
import { Clock, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { supabase } from "@/integrations/supabase/client";
import { Link } from "react-router-dom";
import nyamaChomaSpecial from "@/assets/nyama-choma-special.jpg";
import pilauYaNyama from "@/assets/pilau-ya-nyama.jpg";

interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image_url?: string;
  prep_time?: number;
  difficulty_level?: string;
}

export const FeaturedMenuItems = () => {
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchFeaturedMenuItems();
  }, []);

  const fetchFeaturedMenuItems = async () => {
    try {
      const { data, error } = await supabase
        .from('menu_items')
        .select('*')
        .eq('is_signature', true)
        .limit(3);

      if (error) throw error;
      setMenuItems(data || []);
    } catch (error) {
      console.error('Error fetching menu items:', error);
    } finally {
      setLoading(false);
    }
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('sw-TZ', {
      style: 'currency',
      currency: 'TZS',
      minimumFractionDigits: 0,
    }).format(price).replace('TZS', 'TSh');
  };

  if (loading) {
    return (
      <section className="py-16 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-playfair font-bold text-charcoal mb-4">Our Signature Dishes</h2>
            <div className="w-24 h-1 bg-gold mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-card rounded-xl p-6 animate-pulse">
                <div className="h-48 bg-muted rounded-lg mb-4"></div>
                <div className="h-4 bg-muted rounded mb-2"></div>
                <div className="h-3 bg-muted rounded mb-4"></div>
                <div className="h-4 bg-muted rounded w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-playfair font-bold text-charcoal mb-4 fade-in-up">
            Our Signature Dishes
          </h2>
          <p className="text-lg text-muted-foreground mb-6 fade-in-up">
            Authentic Tanzanian flavors crafted with passion and expertise
          </p>
          <div className="w-24 h-1 bg-gold mx-auto fade-in-up"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {menuItems.map((item, index) => {
            // Map specific dishes to their images
            const getItemImage = (itemName: string) => {
              if (itemName.toLowerCase().includes('nyama choma')) {
                return nyamaChomaSpecial;
              } else if (itemName.toLowerCase().includes('pilau')) {
                return pilauYaNyama;
              }
              return null;
            };

            return (
            <Card key={item.id} className="card-elegant fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="relative overflow-hidden rounded-t-xl">
                {getItemImage(item.name) ? (
                  <img 
                    src={getItemImage(item.name)!} 
                    alt={item.name}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <div className="h-48 bg-gradient-to-br from-primary/20 to-gold/20 flex items-center justify-center">
                    <div className="text-6xl opacity-20">🍽️</div>
                  </div>
                )}
                <div className="absolute top-4 right-4 bg-gold text-charcoal px-3 py-1 rounded-full text-sm font-semibold">
                  {formatPrice(item.price)}
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-playfair font-bold text-charcoal mb-2">{item.name}</h3>
                <p className="text-muted-foreground mb-4 line-clamp-2">{item.description}</p>
                
                <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                  {item.prep_time && (
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      <span>{item.prep_time} min</span>
                    </div>
                  )}
                  {item.difficulty_level && (
                    <div className="flex items-center">
                      <Users className="w-4 h-4 mr-1" />
                      <span className="capitalize">{item.difficulty_level}</span>
                    </div>
                  )}
                </div>

                <Button 
                  asChild
                  className="w-full btn-gold"
                >
                  <Link to="/menu">View Full Menu</Link>
                </Button>
              </CardContent>
            </Card>
            );
          })}
        </div>

        <div className="text-center">
          <Button asChild className="btn-hero">
            <Link to="/menu">Explore Complete Menu</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};