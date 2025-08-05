import Navbar from '@/components/Navbar';
import { GraduationCap, Clock, Users, Award, Star, BookOpen, Trophy, ChefHat } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import culinaryTraining from '@/assets/culinary-training.jpg';

const Courses = () => {
  const courses = [
    {
      title: 'Professional Chef Diploma',
      duration: '12 months',
      level: 'Advanced',
      price: 'TSH 2,400,000',
      description: 'Comprehensive culinary training covering all aspects of professional cooking, kitchen management, and food safety.',
      features: [
        'Level 2 NVQ Certification',
        'Hands-on kitchen training',
        'Menu planning & costing',
        'Food safety & hygiene',
        'Kitchen management',
        'Internship placement',
        'Job placement assistance',
        'Industry networking'
      ],
      popular: true
    },
    {
      title: 'Pastry & Baking Certificate',
      duration: '6 months',
      level: 'Intermediate',
      price: 'TSH 1,200,000',
      description: 'Master the art of baking and pastry making with hands-on training in traditional and modern techniques.',
      features: [
        'Bread making techniques',
        'Cake decoration',
        'Pastry fundamentals',
        'Chocolate work',
        'Sugar art basics',
        'Business planning',
        'Certificate of completion'
      ]
    },
    {
      title: 'Culinary Fundamentals',
      duration: '3 months',
      level: 'Beginner',
      price: 'TSH 600,000',
      description: 'Perfect for beginners looking to learn basic cooking skills and kitchen fundamentals.',
      features: [
        'Knife skills & safety',
        'Basic cooking methods',
        'Food preparation',
        'Kitchen organization',
        'Hygiene standards',
        'Recipe development',
        'Certificate of completion'
      ]
    },
    {
      title: 'Catering Business Management',
      duration: '2 months',
      level: 'Professional',
      price: 'TSH 800,000',
      description: 'Learn to start and manage your own catering business with real-world business skills.',
      features: [
        'Business planning',
        'Cost management',
        'Marketing strategies',
        'Customer service',
        'Legal requirements',
        'Financial planning',
        'Vendor management'
      ]
    }
  ];

  const specializations = [
    {
      name: 'African Cuisine',
      description: 'Master traditional and modern African cooking techniques',
      icon: ChefHat,
      duration: '4 weeks'
    },
    {
      name: 'International Cuisine',
      description: 'Explore global flavors and cooking styles',
      icon: Star,
      duration: '6 weeks'
    },
    {
      name: 'Healthy Cooking',
      description: 'Nutritious meal planning and preparation',
      icon: Award,
      duration: '3 weeks'
    },
    {
      name: 'Event Catering',
      description: 'Large-scale cooking and event management',
      icon: Users,
      duration: '5 weeks'
    }
  ];

  const instructors = [
    {
      name: 'Chef Maria Santos',
      title: 'Head Chef & Founder',
      experience: '15+ years',
      specialties: ['International Cuisine', 'Menu Development', 'Kitchen Management']
    },
    {
      name: 'Chef Ahmed Hassan',
      title: 'Culinary Director',
      experience: '12+ years',
      specialties: ['African Cuisine', 'Fusion Cooking', 'Culinary Innovation']
    },
    {
      name: 'Chef Sarah Johnson',
      title: 'Education Manager',
      experience: '10+ years',
      specialties: ['Pastry Arts', 'Food Safety', 'Student Mentoring']
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-elegant">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="fade-in-left">
              <h1 className="text-5xl lg:text-6xl font-playfair font-bold text-foreground mb-6">
                Culinary <span className="text-primary">Education</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Master the art of cooking with our comprehensive culinary courses. From basic techniques 
                to advanced skills, we'll help you build a successful culinary career in Tanzania.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="btn-hero">Enroll Now</Button>
                <Button variant="outline" className="btn-outline-elegant">Course Catalog</Button>
              </div>
            </div>
            <div className="fade-in-right">
              <img 
                src={culinaryTraining} 
                alt="Culinary Training" 
                className="w-full h-96 object-cover rounded-xl shadow-elegant"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Course Categories */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-playfair font-bold text-foreground mb-6">
              Our Course Offerings
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Choose from our comprehensive range of culinary courses designed to take you 
              from beginner to professional chef.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {courses.map((course, index) => (
              <Card key={index} className={`card-elegant relative ${course.popular ? 'ring-2 ring-primary' : ''}`}>
                {course.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-primary text-primary-foreground px-4 py-2">
                      Most Popular
                    </Badge>
                  </div>
                )}
                <CardHeader>
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <CardTitle className="text-2xl font-playfair mb-2">{course.title}</CardTitle>
                      <div className="flex gap-2 mb-3">
                        <Badge variant="secondary">{course.level}</Badge>
                        <Badge variant="outline">{course.duration}</Badge>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-primary">{course.price}</div>
                      <div className="text-sm text-muted-foreground">Total course fee</div>
                    </div>
                  </div>
                  <CardDescription className="text-base">{course.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-2 mb-6">
                    {course.features.map((feature, i) => (
                      <div key={i} className="flex items-center text-sm">
                        <Star className="h-4 w-4 text-secondary mr-2 flex-shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>
                  <Button className={course.popular ? "btn-hero w-full" : "btn-outline-elegant w-full"}>
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Specializations */}
      <section className="py-16 bg-gradient-elegant">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-playfair font-bold text-foreground mb-6">
              Specialization Programs
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Enhance your skills with our specialized short courses designed 
              for specific culinary disciplines and techniques.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {specializations.map((spec, index) => (
              <Card key={index} className="card-elegant text-center group">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <spec.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-lg font-playfair">{spec.name}</CardTitle>
                  <Badge variant="outline">{spec.duration}</Badge>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{spec.description}</p>
                  <Button size="sm" variant="outline" className="group-hover:bg-primary group-hover:text-primary-foreground">
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Experience */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-playfair font-bold text-foreground mb-6">
              Your Learning Experience
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Discover what makes our culinary education program unique and effective 
              for building your culinary career.
            </p>
          </div>

          <Tabs defaultValue="facilities" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="facilities">Facilities</TabsTrigger>
              <TabsTrigger value="curriculum">Curriculum</TabsTrigger>
              <TabsTrigger value="support">Support</TabsTrigger>
              <TabsTrigger value="certification">Certification</TabsTrigger>
            </TabsList>
            
            <TabsContent value="facilities" className="mt-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { title: 'Professional Kitchen', description: 'State-of-the-art commercial kitchen equipment', icon: ChefHat },
                  { title: 'Training Restaurant', description: 'Real restaurant environment for practice', icon: Users },
                  { title: 'Pastry Lab', description: 'Dedicated space for baking and pastry work', icon: Award }
                ].map((facility, i) => (
                  <Card key={i} className="card-elegant text-center">
                    <CardHeader>
                      <facility.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                      <CardTitle>{facility.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{facility.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="curriculum" className="mt-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <h3 className="text-2xl font-playfair font-bold text-foreground">Practical Learning</h3>
                  <ul className="space-y-3">
                    {[
                      'Hands-on cooking sessions',
                      'Real kitchen experience',
                      'Recipe development',
                      'Menu planning workshops'
                    ].map((item, i) => (
                      <li key={i} className="flex items-center">
                        <BookOpen className="h-5 w-5 text-secondary mr-3" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="space-y-6">
                  <h3 className="text-2xl font-playfair font-bold text-foreground">Theory & Business</h3>
                  <ul className="space-y-3">
                    {[
                      'Food science principles',
                      'Nutrition and dietary needs',
                      'Cost control and pricing',
                      'Restaurant management'
                    ].map((item, i) => (
                      <li key={i} className="flex items-center">
                        <BookOpen className="h-5 w-5 text-secondary mr-3" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="support" className="mt-8">
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  { title: 'Personal Mentoring', description: 'One-on-one guidance from experienced chefs' },
                  { title: 'Career Counseling', description: 'Job placement assistance and career planning' },
                  { title: 'Industry Connections', description: 'Network with restaurants and catering companies' }
                ].map((support, i) => (
                  <Card key={i} className="card-elegant text-center">
                    <CardHeader>
                      <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                      <CardTitle>{support.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{support.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="certification" className="mt-8">
              <div className="text-center">
                <Trophy className="h-24 w-24 text-primary mx-auto mb-6" />
                <h3 className="text-2xl font-playfair font-bold text-foreground mb-4">
                  Recognized Certification
                </h3>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
                  Our programs are accredited and provide industry-recognized certifications 
                  that employers trust and value.
                </p>
                <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
                  <Card className="card-elegant">
                    <CardHeader>
                      <CardTitle>Level 2 NVQ</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">Nationally recognized qualification in professional cookery</p>
                    </CardContent>
                  </Card>
                  <Card className="card-elegant">
                    <CardHeader>
                      <CardTitle>Industry Placement</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">Guaranteed internship with top restaurants and hotels</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Instructors */}
      <section className="py-16 bg-gradient-elegant">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-playfair font-bold text-foreground mb-6">
              Meet Our Expert Instructors
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Learn from industry professionals with decades of experience in top restaurants 
              and culinary institutions around the world.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {instructors.map((instructor, index) => (
              <Card key={index} className="card-elegant text-center">
                <CardHeader>
                  <div className="w-24 h-24 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <ChefHat className="h-12 w-12 text-primary" />
                  </div>
                  <CardTitle className="text-xl font-playfair">{instructor.name}</CardTitle>
                  <CardDescription className="text-secondary font-medium">{instructor.title}</CardDescription>
                  <Badge variant="outline">{instructor.experience}</Badge>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-foreground">Specialties:</h4>
                    {instructor.specialties.map((specialty, i) => (
                      <Badge key={i} variant="secondary" className="mr-1 mb-1">
                        {specialty}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Enrollment Process */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-playfair font-bold text-foreground mb-6">
              How to Enroll
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Getting started is easy. Follow these simple steps to begin your culinary journey with us.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Choose Course', description: 'Select the program that matches your goals', icon: BookOpen },
              { step: '02', title: 'Apply Online', description: 'Complete our simple application form', icon: Users },
              { step: '03', title: 'Interview', description: 'Meet with our admissions team', icon: GraduationCap },
              { step: '04', title: 'Start Learning', description: 'Begin your culinary education journey', icon: ChefHat }
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
      <section className="py-16 bg-gradient-to-r from-primary to-primary-hover">
        <div className="container mx-auto px-4 text-center text-primary-foreground">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-playfair font-bold mb-6">
              Start Your Culinary Career Today
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Join hundreds of successful graduates who have launched their culinary careers 
              with our comprehensive training programs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" className="btn-gold">
                <GraduationCap className="h-5 w-5 mr-2" />
                Apply Now
              </Button>
              <Button variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                Download Brochure
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Courses;