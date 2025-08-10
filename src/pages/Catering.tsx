import { Navbar } from '@/components/Navbar';
import { Calendar, Users, Clock, Star, Utensils, Award, CheckCircle, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import cateringSpread from '@/assets/catering-spread.jpg';
import weddingCatering from '@/assets/wedding-catering.jpg';

const Catering = () => {
  const packages = [
    {
      name: 'Essential Package',
      price: 'TSH 25,000',
      per: 'per person',
      features: [
        '3-course meal',
        'Professional service',
        'Basic table setup',
        'Standard cutlery & plates',
        '4-hour service',
        'Clean-up included'
      ]
    },
    {
      name: 'Premium Package',
      price: 'TSH 45,000',
      per: 'per person',
      features: [
        '5-course gourmet meal',
        'Premium service staff',
        'Elegant table setup',
        'Fine china & silverware',
        '6-hour service',
        'Floral arrangements',
        'Welcome drinks',
        'Clean-up included'
      ],
      popular: true
    },
    {
      name: 'Luxury Package',
      price: 'TSH 75,000',
      per: 'per person',
      features: [
        '7-course premium meal',
        'Personal chef service',
        'Luxury table setup',
        'Premium tableware',
        '8-hour service',
        'Custom menu design',
        'Wine pairing',
        'Live cooking stations',
        'Complete event coordination'
      ]
    }
  ];

  const eventTypes = [
    {
      title: 'Wedding Celebrations',
      description: 'Make your special day unforgettable with our exquisite wedding catering services.',
      image: weddingCatering,
      features: ['Custom menu design', 'Cake cutting service', 'Bridal party meals', 'Guest coordination']
    },
    {
      title: 'Corporate Events',
      description: 'Professional catering for conferences, meetings, and corporate gatherings.',
      icon: Users,
      features: ['Business lunch menus', 'Coffee break service', 'Dietary accommodations', 'Professional presentation']
    },
    {
      title: 'Private Parties',
      description: 'Intimate gatherings and celebrations tailored to your personal style.',
      icon: Star,
      features: ['Personalized menus', 'Home service', 'Special occasions', 'Flexible timing']
    },
    {
      title: 'Special Events',
      description: 'Graduations, anniversaries, and milestone celebrations.',
      icon: Award,
      features: ['Theme-based menus', 'Decoration coordination', 'Photography meals', 'Guest entertainment']
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-elegant">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="fade-in-left">
              <h1 className="text-5xl lg:text-6xl font-playfair font-bold text-foreground mb-6">
                Premium <span className="text-primary">Catering Services</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                From intimate gatherings to grand celebrations, our expert chefs create memorable 
                dining experiences with exceptional cuisine and impeccable service.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="btn-hero">Get Quote</Button>
                <Button variant="outline" className="btn-outline-elegant">View Menu</Button>
              </div>
            </div>
            <div className="fade-in-right">
              <img 
                src={cateringSpread} 
                alt="Premium Catering Setup" 
                className="w-full h-96 object-cover rounded-xl shadow-elegant"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-playfair font-bold text-foreground mb-6">
              Our Catering Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We specialize in creating exceptional dining experiences for all types of events, 
              from intimate private dinners to large-scale corporate functions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {eventTypes.map((event, index) => (
              <Card key={index} className="card-elegant group cursor-pointer">
                <CardHeader>
                  {event.image ? (
                    <img 
                      src={event.image} 
                      alt={event.title}
                      className="w-full h-48 object-cover rounded-lg mb-4 group-hover:scale-105 transition-transform duration-300"
                    />
                  ) : (
                    <div className="w-full h-48 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg mb-4 flex items-center justify-center">
                      <event.icon className="h-20 w-20 text-primary" />
                    </div>
                  )}
                  <CardTitle className="text-xl font-playfair">{event.title}</CardTitle>
                  <CardDescription>{event.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {event.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-sm text-muted-foreground">
                        <CheckCircle className="h-4 w-4 text-secondary mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="py-16 bg-gradient-elegant">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-playfair font-bold text-foreground mb-6">
              Catering Packages
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Choose from our carefully crafted packages or let us create a custom solution 
              tailored to your specific needs and budget.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <Card key={index} className={`card-elegant relative ${pkg.popular ? 'ring-2 ring-primary' : ''}`}>
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl font-playfair">{pkg.name}</CardTitle>
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-primary">{pkg.price}</span>
                    <span className="text-muted-foreground"> {pkg.per}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {pkg.features.map((feature, i) => (
                      <li key={i} className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-secondary mr-3 flex-shrink-0" />
                        <span className="text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className={pkg.popular ? "btn-hero w-full" : "btn-outline-elegant w-full"}
                  >
                    Select Package
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Categories */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-playfair font-bold text-foreground mb-6">
              Our Menu Categories
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Explore our diverse menu options featuring international cuisine, 
              local specialties, and dietary-conscious choices.
            </p>
          </div>

          <Tabs defaultValue="appetizers" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="appetizers">Appetizers</TabsTrigger>
              <TabsTrigger value="mains">Main Courses</TabsTrigger>
              <TabsTrigger value="desserts">Desserts</TabsTrigger>
              <TabsTrigger value="beverages">Beverages</TabsTrigger>
            </TabsList>
            
            <TabsContent value="appetizers" className="mt-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { name: 'Samosa Platter', description: 'Crispy pastries with spiced vegetables', price: 'TSH 8,000' },
                  { name: 'Seafood Canapés', description: 'Fresh prawns with herb garnish', price: 'TSH 12,000' },
                  { name: 'Cheese & Charcuterie', description: 'Artisanal selection with crackers', price: 'TSH 15,000' }
                ].map((item, i) => (
                  <Card key={i} className="card-elegant">
                    <CardHeader>
                      <CardTitle className="text-lg">{item.name}</CardTitle>
                      <CardDescription>{item.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex justify-between items-center">
                        <span className="text-primary font-semibold">{item.price}</span>
                        <Button size="sm" variant="outline">Add to Quote</Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="mains" className="mt-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { name: 'Grilled Tilapia', description: 'Fresh fish with coconut rice and vegetables', price: 'TSH 25,000' },
                  { name: 'Beef Stew', description: 'Tender beef in rich tomato sauce with ugali', price: 'TSH 22,000' },
                  { name: 'Chicken Biryani', description: 'Aromatic rice with spiced chicken', price: 'TSH 20,000' }
                ].map((item, i) => (
                  <Card key={i} className="card-elegant">
                    <CardHeader>
                      <CardTitle className="text-lg">{item.name}</CardTitle>
                      <CardDescription>{item.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex justify-between items-center">
                        <span className="text-primary font-semibold">{item.price}</span>
                        <Button size="sm" variant="outline">Add to Quote</Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="desserts" className="mt-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { name: 'Tropical Fruit Platter', description: 'Fresh seasonal fruits beautifully arranged', price: 'TSH 10,000' },
                  { name: 'Chocolate Cake', description: 'Rich chocolate layers with cream frosting', price: 'TSH 15,000' },
                  { name: 'Traditional Mandazi', description: 'Sweet fried bread with honey drizzle', price: 'TSH 8,000' }
                ].map((item, i) => (
                  <Card key={i} className="card-elegant">
                    <CardHeader>
                      <CardTitle className="text-lg">{item.name}</CardTitle>
                      <CardDescription>{item.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex justify-between items-center">
                        <span className="text-primary font-semibold">{item.price}</span>
                        <Button size="sm" variant="outline">Add to Quote</Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="beverages" className="mt-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { name: 'Fresh Juice Bar', description: 'Tropical fruit juices made to order', price: 'TSH 5,000' },
                  { name: 'Coffee & Tea Service', description: 'Premium coffee and tea selection', price: 'TSH 6,000' },
                  { name: 'Mocktail Package', description: 'Non-alcoholic signature drinks', price: 'TSH 8,000' }
                ].map((item, i) => (
                  <Card key={i} className="card-elegant">
                    <CardHeader>
                      <CardTitle className="text-lg">{item.name}</CardTitle>
                      <CardDescription>{item.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex justify-between items-center">
                        <span className="text-primary font-semibold">{item.price}</span>
                        <Button size="sm" variant="outline">Add to Quote</Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-gradient-elegant">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-playfair font-bold text-foreground mb-6">
              Our Catering Process
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From initial consultation to event execution, we ensure every detail 
              is perfectly planned and flawlessly delivered.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Consultation', description: 'Discuss your event needs and preferences', icon: Users },
              { step: '02', title: 'Menu Planning', description: 'Custom menu design and tasting session', icon: Utensils },
              { step: '03', title: 'Confirmation', description: 'Finalize details and book your date', icon: Calendar },
              { step: '04', title: 'Event Day', description: 'Professional service and clean-up', icon: Star }
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {process.step}
                </div>
                <process.icon className="h-8 w-8 text-secondary mx-auto mb-4" />
                <h3 className="text-xl font-playfair font-bold text-foreground mb-3">{process.title}</h3>
                <p className="text-muted-foreground">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-playfair font-bold text-foreground mb-6">
              Ready to Plan Your Perfect Event?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Let our expert team create an unforgettable dining experience for your special occasion. 
              Contact us today for a free consultation and quote.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="btn-hero">
                <Phone className="h-5 w-5 mr-2" />
                Get Free Quote
              </Button>
              <Button variant="outline" className="btn-outline-elegant">Schedule Tasting</Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Catering;