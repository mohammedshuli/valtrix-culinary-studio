import { Calendar, GraduationCap, Utensils, Users, Clock, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import premiumCateringService from '@/assets/premium-catering-service.jpg';
import culinaryTraining from '@/assets/culinary-training.jpg';
import weddingCatering from '@/assets/wedding-catering.jpg';
import corporateCatering from '@/assets/corporate-catering.jpg';
import privatePartyCatering from '@/assets/private-party-catering.jpg';

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 bg-gradient-elegant">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-playfair font-bold text-foreground mb-6">
            Our Premium Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Whether you're planning an unforgettable event or advancing your culinary career, 
            we provide exceptional services tailored to your needs.
          </p>
        </div>

        {/* Main Services Grid */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {/* Catering Services */}
          <div className="card-service fade-in-left">
            <div className="relative mb-6 rounded-lg overflow-hidden">
              <img 
                src={premiumCateringService} 
                alt="Premium Catering Services" 
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-4 left-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                Premium Catering
              </div>
            </div>
            
            <div className="flex items-center space-x-3 mb-4">
              <Utensils className="h-8 w-8 text-primary" />
              <h3 className="text-2xl font-playfair font-bold text-foreground">
                Catering Services
              </h3>
            </div>
            
            <p className="text-muted-foreground mb-6 leading-relaxed">
              From intimate gatherings to grand celebrations, our expert chefs create memorable dining experiences 
              with exceptional cuisine and impeccable service.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="flex items-center space-x-2">
                <Calendar className="h-4 w-4 text-secondary" />
                <span className="text-sm">Wedding Catering</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="h-4 w-4 text-secondary" />
                <span className="text-sm">Corporate Events</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4 text-secondary" />
                <span className="text-sm">Private Parties</span>
              </div>
              <div className="flex items-center space-x-2">
                <Award className="h-4 w-4 text-secondary" />
                <span className="text-sm">Tasting Sessions</span>
              </div>
            </div>

            <div className="flex space-x-4">
              <Button className="btn-hero flex-1">
                Book Catering
              </Button>
              <Button variant="outline" className="btn-outline-elegant">
                View Menu
              </Button>
            </div>
          </div>

          {/* Culinary Education */}
          <div className="card-service fade-in-right">
            <div className="relative mb-6 rounded-lg overflow-hidden">
              <img 
                src={culinaryTraining} 
                alt="Professional Culinary Training" 
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-4 left-4 bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm font-medium">
                Professional Training
              </div>
            </div>
            
            <div className="flex items-center space-x-3 mb-4">
              <GraduationCap className="h-8 w-8 text-primary" />
              <h3 className="text-2xl font-playfair font-bold text-foreground">
                Culinary Education
              </h3>
            </div>
            
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Master the art of cooking with our comprehensive culinary courses. From basic techniques to 
              advanced skills, we'll help you build a successful culinary career.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="flex items-center space-x-2">
                <GraduationCap className="h-4 w-4 text-secondary" />
                <span className="text-sm">Level 2 NVQ</span>
              </div>
              <div className="flex items-center space-x-2">
                <Award className="h-4 w-4 text-secondary" />
                <span className="text-sm">Certification</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="h-4 w-4 text-secondary" />
                <span className="text-sm">Expert Instructors</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4 text-secondary" />
                <span className="text-sm">Flexible Schedule</span>
              </div>
            </div>

            <div className="flex space-x-4">
              <Button className="btn-hero flex-1">
                Start Learning
              </Button>
              <Button variant="outline" className="btn-outline-elegant">
                Course Catalog
              </Button>
            </div>
          </div>
        </div>

        {/* Event Types */}
        <div className="fade-in-up">
          <h3 className="text-3xl font-playfair font-bold text-center text-foreground mb-12">
            Events We Cater
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="card-elegant text-center group">
              <div className="relative mb-6 rounded-lg overflow-hidden">
                <img 
                  src={weddingCatering} 
                  alt="Wedding Catering" 
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h4 className="text-xl font-playfair font-semibold text-foreground mb-3">
                Wedding Celebrations
              </h4>
              <p className="text-muted-foreground mb-4">
                Make your special day unforgettable with our exquisite wedding catering services.
              </p>
              <Button variant="outline" size="sm" className="btn-outline-elegant">
                Learn More
              </Button>
            </div>

            <div className="card-elegant text-center group">
              <div className="relative mb-6 rounded-lg overflow-hidden">
                <img 
                  src={corporateCatering} 
                  alt="Corporate Events Catering" 
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h4 className="text-xl font-playfair font-semibold text-foreground mb-3">
                Corporate Events
              </h4>
              <p className="text-muted-foreground mb-4">
                Professional catering for conferences, meetings, and corporate gatherings.
              </p>
              <Button variant="outline" size="sm" className="btn-outline-elegant">
                Learn More
              </Button>
            </div>

            <div className="card-elegant text-center group">
              <div className="relative mb-6 rounded-lg overflow-hidden">
                <img 
                  src={privatePartyCatering} 
                  alt="Private Parties Catering" 
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h4 className="text-xl font-playfair font-semibold text-foreground mb-3">
                Private Parties
              </h4>
              <p className="text-muted-foreground mb-4">
                Intimate gatherings and celebrations tailored to your personal style.
              </p>
              <Button variant="outline" size="sm" className="btn-outline-elegant">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;