import { Navbar } from '@/components/Navbar';
import { Users, Award, Clock, Star, ChefHat, Target, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroChef from '@/assets/hero-chef.jpg';
import culinaryTraining from '@/assets/culinary-training.jpg';

const About = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-elegant">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="fade-in-left">
              <h1 className="text-5xl lg:text-6xl font-playfair font-bold text-foreground mb-6">
                About <span className="text-primary">Valtrix Chef Pro</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                For over a decade, we've been Tanzania's premier destination for exceptional catering services 
                and professional culinary education, combining traditional techniques with modern innovation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="btn-hero">Our Story</Button>
                <Button variant="outline" className="btn-outline-elegant">Meet Our Team</Button>
              </div>
            </div>
            <div className="fade-in-right">
              <img 
                src={heroChef} 
                alt="Head Chef at Valtrix" 
                className="w-full h-96 object-cover rounded-xl shadow-elegant"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="card-elegant text-center">
              <Target className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-playfair font-bold text-foreground mb-4">Our Mission</h3>
              <p className="text-muted-foreground">
                To deliver exceptional culinary experiences that exceed expectations while nurturing 
                the next generation of culinary professionals in Tanzania.
              </p>
            </div>
            <div className="card-elegant text-center">
              <Heart className="h-12 w-12 text-secondary mx-auto mb-4" />
              <h3 className="text-2xl font-playfair font-bold text-foreground mb-4">Our Vision</h3>
              <p className="text-muted-foreground">
                To be East Africa's leading culinary institution, setting standards for excellence 
                in both catering services and culinary education.
              </p>
            </div>
            <div className="card-elegant text-center">
              <Star className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-playfair font-bold text-foreground mb-4">Our Values</h3>
              <p className="text-muted-foreground">
                Excellence, integrity, innovation, and passion for culinary arts drive everything 
                we do, from our catering services to our educational programs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-primary-hover">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center text-primary-foreground">
            <div>
              <div className="text-4xl font-playfair font-bold mb-2">10+</div>
              <div className="text-lg">Years Experience</div>
            </div>
            <div>
              <div className="text-4xl font-playfair font-bold mb-2">500+</div>
              <div className="text-lg">Events Catered</div>
            </div>
            <div>
              <div className="text-4xl font-playfair font-bold mb-2">200+</div>
              <div className="text-lg">Students Trained</div>
            </div>
            <div>
              <div className="text-4xl font-playfair font-bold mb-2">98%</div>
              <div className="text-lg">Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-playfair font-bold text-foreground mb-6">
              Meet Our Expert Team
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our talented chefs and instructors bring decades of combined experience 
              from top restaurants and culinary institutions around the world.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="card-elegant text-center">
              <img 
                src={culinaryTraining} 
                alt="Chef Maria Santos" 
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-playfair font-bold text-foreground mb-2">Chef Suleiman</h3>
              <p className="text-secondary font-medium mb-3">Head Chef & Founder</p>
              <p className="text-muted-foreground">
                With 15+ years in international cuisine, Maria established Valtrix to bring 
                world-class culinary standards to Tanzania.
              </p>
            </div>

            <div className="card-elegant text-center">
              <div className="w-32 h-32 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                <ChefHat className="h-16 w-16 text-primary" />
              </div>
              <h3 className="text-xl font-playfair font-bold text-foreground mb-2">Chef Kassim</h3>
              <p className="text-secondary font-medium mb-3">Culinary Director</p>
              <p className="text-muted-foreground">
                Specializing in fusion cuisine, Ahmed brings innovative techniques 
                and African flavors to modern culinary education.
              </p>
            </div>

            <div className="card-elegant text-center">
              <div className="w-32 h-32 bg-gradient-to-br from-secondary/20 to-primary/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Users className="h-16 w-16 text-primary" />
              </div>
              <h3 className="text-xl font-playfair font-bold text-foreground mb-2">Chef Mohammed</h3>
              <p className="text-secondary font-medium mb-3">Education Manager</p>
              <p className="text-muted-foreground">
                this chef oversees our comprehensive training programs, ensuring students 
                receive industry-relevant skills and certification.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Awards & Recognition */}
      <section className="py-16 bg-gradient-elegant">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-playfair font-bold text-foreground mb-6">
              Awards & Recognition
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="card-elegant text-center">
              <Award className="h-8 w-8 text-secondary mx-auto mb-3" />
              <h4 className="font-semibold text-foreground mb-2">Best Catering Service</h4>
              <p className="text-sm text-muted-foreground">Tanzania Awards 2023</p>
            </div>
            <div className="card-elegant text-center">
              <Star className="h-8 w-8 text-secondary mx-auto mb-3" />
              <h4 className="font-semibold text-foreground mb-2">Excellence in Education</h4>
              <p className="text-sm text-muted-foreground">Culinary Institute 2022</p>
            </div>
            <div className="card-elegant text-center">
              <Users className="h-8 w-8 text-secondary mx-auto mb-3" />
              <h4 className="font-semibold text-foreground mb-2">Best Employer</h4>
              <p className="text-sm text-muted-foreground">Hospitality Awards 2023</p>
            </div>
            <div className="card-elegant text-center">
              <Clock className="h-8 w-8 text-secondary mx-auto mb-3" />
              <h4 className="font-semibold text-foreground mb-2">10 Years Excellence</h4>
              <p className="text-sm text-muted-foreground">Industry Recognition</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-playfair font-bold text-foreground mb-6">
              Ready to Start Your Culinary Journey?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Whether you need exceptional catering for your event or want to master culinary arts, 
              we're here to help you achieve your goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="btn-hero">Book Catering Service</Button>
              <Button variant="outline" className="btn-outline-elegant">Explore Courses</Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;