import { Navbar } from '@/components/Navbar';
import { Star, Clock, Users, Utensils, Award, ChefHat } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import cateringSpread from '@/assets/catering-spread.jpg';
import weddingCatering from '@/assets/wedding-catering.jpg';

const Menu = () => {
  const menuCategories = {
    appetizers: [
      {
        name: 'Samosa Platter',
        description: 'Traditional crispy pastries filled with spiced vegetables and served with tangy chutney',
        price: 'TSH 8,000',
        serves: '10-12 people',
        dietary: ['Vegetarian'],
        popular: true
      },
      {
        name: 'Seafood Canapés',
        description: 'Fresh prawns and fish delicately seasoned with coastal spices on crispy toast',
        price: 'TSH 15,000',
        serves: '10-12 people',
        dietary: ['Seafood'],
        chef: true
      },
      {
        name: 'Cheese & Charcuterie Board',
        description: 'Artisanal selection of local and imported cheeses with cured meats and accompaniments',
        price: 'TSH 25,000',
        serves: '15-20 people',
        dietary: ['Contains Dairy']
      },
      {
        name: 'Chicken Tikka Skewers',
        description: 'Marinated chicken pieces grilled to perfection with aromatic spices',
        price: 'TSH 12,000',
        serves: '10-12 people',
        dietary: ['Halal Available']
      },
      {
        name: 'Vegetable Spring Rolls',
        description: 'Fresh vegetables wrapped in crispy pastry, served with sweet chili sauce',
        price: 'TSH 7,000',
        serves: '10-12 people',
        dietary: ['Vegetarian', 'Vegan Option']
      },
      {
        name: 'Beef Kebabs',
        description: 'Tender beef marinated in traditional Tanzanian spices and grilled over charcoal',
        price: 'TSH 18,000',
        serves: '10-12 people',
        dietary: ['Halal Available']
      }
    ],
    mains: [
      {
        name: 'Grilled Tilapia with Coconut Rice',
        description: 'Fresh tilapia grilled with lemon and herbs, served with fragrant coconut rice and steamed vegetables',
        price: 'TSH 25,000',
        serves: '1 person',
        dietary: ['Seafood', 'Gluten-Free'],
        popular: true
      },
      {
        name: 'Nyama Choma (Grilled Meat)',
        description: 'Traditional Tanzanian barbecued beef or goat meat with ugali and kachumbari',
        price: 'TSH 30,000',
        serves: '1 person',
        dietary: ['Halal Available'],
        chef: true
      },
      {
        name: 'Chicken Biryani',
        description: 'Aromatic basmati rice layered with spiced chicken, garnished with fried onions and boiled eggs',
        price: 'TSH 22,000',
        serves: '1 person',
        dietary: ['Halal Available']
      },
      {
        name: 'Vegetarian Curry',
        description: 'Mixed vegetables in a rich tomato and coconut curry sauce, served with rice or chapati',
        price: 'TSH 18,000',
        serves: '1 person',
        dietary: ['Vegetarian', 'Vegan Option', 'Gluten-Free']
      },
      {
        name: 'Beef Stew with Ugali',
        description: 'Tender beef slow-cooked in rich tomato sauce with traditional accompaniments',
        price: 'TSH 24,000',
        serves: '1 person',
        dietary: ['Halal Available']
      },
      {
        name: 'Grilled Chicken Breast',
        description: 'Herb-marinated chicken breast with roasted vegetables and potato wedges',
        price: 'TSH 26,000',
        serves: '1 person',
        dietary: ['Halal Available', 'Gluten-Free']
      }
    ],
    desserts: [
      {
        name: 'Tropical Fruit Platter',
        description: 'Fresh seasonal fruits including mangoes, pineapples, and papayas, beautifully arranged',
        price: 'TSH 12,000',
        serves: '8-10 people',
        dietary: ['Vegetarian', 'Vegan', 'Gluten-Free'],
        popular: true
      },
      {
        name: 'Chocolate Lava Cake',
        description: 'Rich chocolate cake with molten center, served with vanilla ice cream',
        price: 'TSH 8,000',
        serves: '1 person',
        dietary: ['Vegetarian']
      },
      {
        name: 'Traditional Mandazi',
        description: 'Sweet fried bread dusted with cinnamon sugar and served with honey',
        price: 'TSH 6,000',
        serves: '6-8 people',
        dietary: ['Vegetarian']
      },
      {
        name: 'Tiramisu',
        description: 'Classic Italian dessert with coffee-soaked ladyfingers and mascarpone cream',
        price: 'TSH 10,000',
        serves: '1 person',
        dietary: ['Vegetarian', 'Contains Alcohol']
      },
      {
        name: 'Coconut Rice Pudding',
        description: 'Creamy rice pudding infused with coconut milk and garnished with toasted coconut',
        price: 'TSH 7,000',
        serves: '1 person',
        dietary: ['Vegetarian', 'Gluten-Free']
      }
    ],
    beverages: [
      {
        name: 'Fresh Tropical Juice Bar',
        description: 'Made-to-order juices including mango, passion fruit, watermelon, and mixed combinations',
        price: 'TSH 5,000',
        serves: '1 person',
        dietary: ['Vegetarian', 'Vegan', 'Gluten-Free'],
        popular: true
      },
      {
        name: 'Premium Coffee & Tea Service',
        description: 'Selection of Tanzanian coffee, English breakfast tea, herbal teas, and chai',
        price: 'TSH 4,000',
        serves: '1 person',
        dietary: ['Vegetarian', 'Vegan Option']
      },
      {
        name: 'Signature Mocktails',
        description: 'Non-alcoholic cocktails including Virgin Mojito, Tropical Punch, and Cucumber Mint',
        price: 'TSH 8,000',
        serves: '1 person',
        dietary: ['Vegetarian', 'Vegan']
      },
      {
        name: 'Traditional Tanzanian Drinks',
        description: 'Ginger beer, hibiscus tea, and baobab juice - authentic local flavors',
        price: 'TSH 4,500',
        serves: '1 person',
        dietary: ['Vegetarian', 'Vegan', 'Gluten-Free']
      },
      {
        name: 'Smoothie Selection',
        description: 'Healthy smoothies with fresh fruits, yogurt, and superfood additions',
        price: 'TSH 7,000',
        serves: '1 person',
        dietary: ['Vegetarian', 'Vegan Option']
      }
    ]
  };

  const specialMenus = [
    {
      name: 'Wedding Package Menu',
      description: 'Elegant 5-course menu designed for wedding celebrations',
      image: weddingCatering,
      courses: [
        'Welcome drinks & canapés',
        'Seafood starter with tropical salad',
        'Choice of grilled tilapia or beef stew',
        'Traditional sides and vegetables',
        'Wedding cake and tropical fruits'
      ],
      price: 'TSH 45,000 per person',
      minimum: '50 guests minimum'
    },
    {
      name: 'Corporate Lunch Menu',
      description: 'Professional business lunch options for meetings and conferences',
      icon: Users,
      courses: [
        'Light appetizer selection',
        'Choice of chicken biryani or vegetarian curry',
        'Fresh fruit platter',
        'Coffee and tea service',
        'Dietary accommodations available'
      ],
      price: 'TSH 25,000 per person',
      minimum: '10 guests minimum'
    },
    {
      name: 'Traditional Tanzanian Feast',
      description: 'Authentic local cuisine showcasing the best of Tanzanian flavors',
      icon: Award,
      courses: [
        'Samosa and mandazi selection',
        'Nyama choma with ugali',
        'Coconut rice and local vegetables',
        'Traditional sweets',
        'Fresh tropical juices'
      ],
      price: 'TSH 35,000 per person',
      minimum: '20 guests minimum'
    }
  ];

  const MenuCard = ({ item, category }) => (
    <Card className="card-elegant group relative">
      {item.popular && (
        <Badge className="absolute -top-2 -right-2 bg-secondary text-secondary-foreground">
          Popular
        </Badge>
      )}
      {item.chef && (
        <Badge className="absolute -top-2 -right-2 bg-primary text-primary-foreground">
          Chef's Special
        </Badge>
      )}
      <CardHeader>
        <div className="flex justify-between items-start">
          <div className="flex-1">
            <CardTitle className="text-lg font-playfair group-hover:text-primary transition-colors">
              {item.name}
            </CardTitle>
            <CardDescription className="mt-2">{item.description}</CardDescription>
          </div>
          <div className="text-right ml-4">
            <div className="text-xl font-bold text-primary">{item.price}</div>
            <div className="text-sm text-muted-foreground">{item.serves}</div>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-1 mb-4">
          {item.dietary.map((diet, i) => (
            <Badge key={i} variant="outline" className="text-xs">
              {diet}
            </Badge>
          ))}
        </div>
        <Button size="sm" variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground">
          Add to Quote
        </Button>
      </CardContent>
    </Card>
  );

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-elegant">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="fade-in-left">
              <h1 className="text-5xl lg:text-6xl font-playfair font-bold text-foreground mb-6">
                Our <span className="text-primary">Menu Gallery</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Explore our diverse culinary offerings featuring international cuisine, 
                traditional Tanzanian dishes, and modern fusion creations crafted by our expert chefs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="btn-hero">Request Custom Menu</Button>
                <Button variant="outline" className="btn-outline-elegant">Download PDF Menu</Button>
              </div>
            </div>
            <div className="fade-in-right">
              <img 
                src={cateringSpread} 
                alt="Gourmet Menu Spread" 
                className="w-full h-96 object-cover rounded-xl shadow-elegant"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Menu Categories */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-playfair font-bold text-foreground mb-6">
              Browse Our Menu
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From appetizers to desserts, discover our carefully crafted dishes that combine 
              traditional Tanzanian flavors with international culinary techniques.
            </p>
          </div>

          <Tabs defaultValue="appetizers" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="appetizers" className="flex items-center gap-2">
                <Utensils className="h-4 w-4" />
                Appetizers
              </TabsTrigger>
              <TabsTrigger value="mains" className="flex items-center gap-2">
                <ChefHat className="h-4 w-4" />
                Main Courses
              </TabsTrigger>
              <TabsTrigger value="desserts" className="flex items-center gap-2">
                <Star className="h-4 w-4" />
                Desserts
              </TabsTrigger>
              <TabsTrigger value="beverages" className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                Beverages
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="appetizers" className="mt-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {menuCategories.appetizers.map((item, i) => (
                  <MenuCard key={i} item={item} category="appetizers" />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="mains" className="mt-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {menuCategories.mains.map((item, i) => (
                  <MenuCard key={i} item={item} category="mains" />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="desserts" className="mt-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {menuCategories.desserts.map((item, i) => (
                  <MenuCard key={i} item={item} category="desserts" />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="beverages" className="mt-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {menuCategories.beverages.map((item, i) => (
                  <MenuCard key={i} item={item} category="beverages" />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Special Menus */}
      <section className="py-16 bg-gradient-elegant">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-playfair font-bold text-foreground mb-6">
              Special Event Menus
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Curated menu packages designed for specific occasions and events, 
              offering complete dining experiences tailored to your celebration.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {specialMenus.map((menu, index) => (
              <Card key={index} className="card-elegant">
                <CardHeader>
                  {menu.image ? (
                    <img 
                      src={menu.image} 
                      alt={menu.name}
                      className="w-full h-48 object-cover rounded-lg mb-4"
                    />
                  ) : (
                    <div className="w-full h-48 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg mb-4 flex items-center justify-center">
                      <menu.icon className="h-20 w-20 text-primary" />
                    </div>
                  )}
                  <CardTitle className="text-xl font-playfair">{menu.name}</CardTitle>
                  <CardDescription>{menu.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 mb-6">
                    {menu.courses.map((course, i) => (
                      <div key={i} className="flex items-start">
                        <Star className="h-4 w-4 text-secondary mt-1 mr-2 flex-shrink-0" />
                        <span className="text-sm text-foreground">{course}</span>
                      </div>
                    ))}
                  </div>
                  <div className="border-t border-border pt-4">
                    <div className="text-xl font-bold text-primary mb-1">{menu.price}</div>
                    <div className="text-sm text-muted-foreground mb-4">{menu.minimum}</div>
                    <Button className="btn-outline-elegant w-full">Select Package</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Dietary Information */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-playfair font-bold text-foreground mb-6">
              Dietary Accommodations
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We cater to all dietary requirements and preferences to ensure 
              every guest enjoys their dining experience.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: 'Vegetarian', description: 'Plant-based options without meat or fish', icon: '🥗' },
              { name: 'Vegan', description: 'Completely plant-based with no animal products', icon: '🌱' },
              { name: 'Halal', description: 'Prepared according to Islamic dietary laws', icon: '🕌' },
              { name: 'Gluten-Free', description: 'No wheat, barley, or rye ingredients', icon: '🌾' },
              { name: 'Dairy-Free', description: 'No milk, cheese, or dairy products', icon: '🥛' },
              { name: 'Nut-Free', description: 'Safe for those with nut allergies', icon: '🥜' },
              { name: 'Low-Sodium', description: 'Reduced salt for health-conscious diners', icon: '💧' },
              { name: 'Custom Diets', description: 'Special requirements accommodated', icon: '👨‍🍳' }
            ].map((diet, index) => (
              <Card key={index} className="card-elegant text-center">
                <CardHeader>
                  <div className="text-4xl mb-2">{diet.icon}</div>
                  <CardTitle className="text-lg font-playfair">{diet.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{diet.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Information */}
      <section className="py-16 bg-gradient-elegant">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-playfair font-bold text-foreground mb-6">
              Menu Pricing Guide
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Transparent pricing with no hidden fees. All prices include preparation, 
              service, and basic setup. Custom packages available for large events.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="card-elegant text-center">
              <CardHeader>
                <CardTitle className="text-xl font-playfair">Appetizers</CardTitle>
                <div className="text-3xl font-bold text-primary">TSH 6K - 25K</div>
                <CardDescription>Per platter (serves 10-20)</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>Minimum order 2 platters</li>
                  <li>Serving utensils included</li>
                  <li>Custom portions available</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="card-elegant text-center">
              <CardHeader>
                <CardTitle className="text-xl font-playfair">Main Courses</CardTitle>
                <div className="text-3xl font-bold text-primary">TSH 18K - 30K</div>
                <CardDescription>Per person</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>Includes rice/ugali & vegetables</li>
                  <li>Choice of protein</li>
                  <li>Minimum 10 persons</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="card-elegant text-center">
              <CardHeader>
                <CardTitle className="text-xl font-playfair">Full Packages</CardTitle>
                <div className="text-3xl font-bold text-primary">TSH 25K - 75K</div>
                <CardDescription>Per person (complete meal)</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>3-7 course options</li>
                  <li>Service staff included</li>
                  <li>Complete table setup</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-playfair font-bold text-foreground mb-6">
              Ready to Create Your Perfect Menu?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Let our chefs design a custom menu for your event. We'll work with you to create 
              the perfect dining experience within your budget and dietary requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="btn-hero">
                <ChefHat className="h-5 w-5 mr-2" />
                Request Custom Menu
              </Button>
              <Button variant="outline" className="btn-outline-elegant">Schedule Tasting</Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Menu;