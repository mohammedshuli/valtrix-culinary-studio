import Navbar from '@/components/Navbar';
import { Phone, Mail, MapPin, Clock, MessageCircle, Send, ChefHat } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      details: ['+255 123 456 789', '+255 987 654 321'],
      action: 'Call Now'
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['info@valtrixchef.co.tz', 'courses@valtrixchef.co.tz'],
      action: 'Send Email'
    },
    {
      icon: MapPin,
      title: 'Location',
      details: ['Msimbazi Street, Kariakoo', 'Dar es Salaam, Tanzania'],
      action: 'Get Directions'
    },
    {
      icon: Clock,
      title: 'Hours',
      details: ['Mon-Fri: 8:00 AM - 6:00 PM', 'Sat: 9:00 AM - 4:00 PM'],
      action: 'View Schedule'
    }
  ];

  const offices = [
    {
      name: 'Main Campus',
      address: 'Msimbazi Street, Kariakoo',
      city: 'Dar es Salaam',
      phone: '+255 123 456 789',
      type: 'Training & Administration'
    },
    {
      name: 'Catering Office',
      address: 'Mikocheni Business Center',
      city: 'Dar es Salaam',
      phone: '+255 987 654 321',
      type: 'Event Planning & Catering'
    },
    {
      name: 'Arusha Branch',
      address: 'Sokoine Road',
      city: 'Arusha',
      phone: '+255 456 789 123',
      type: 'Regional Training Center'
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-elegant">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-5xl lg:text-6xl font-playfair font-bold text-foreground mb-6">
              Get in <span className="text-primary">Touch</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Ready to plan your next event or start your culinary journey? We're here to help you 
              every step of the way. Contact us today for personalized service and expert guidance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="btn-hero">
                <MessageCircle className="h-5 w-5 mr-2" />
                WhatsApp Chat
              </Button>
              <Button variant="outline" className="btn-outline-elegant">
                <Phone className="h-5 w-5 mr-2" />
                Call Now
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((info, index) => (
              <Card key={index} className="card-elegant text-center group">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <info.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl font-playfair">{info.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 mb-4">
                    {info.details.map((detail, i) => (
                      <p key={i} className="text-muted-foreground">{detail}</p>
                    ))}
                  </div>
                  <Button size="sm" variant="outline" className="group-hover:bg-primary group-hover:text-primary-foreground">
                    {info.action}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 bg-gradient-elegant">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-4xl font-playfair font-bold text-foreground mb-6">
                Send Us a Message
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Fill out the form below and we'll get back to you within 24 hours. 
                For urgent inquiries, please call us directly.
              </p>

              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" placeholder="Enter your first name" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" placeholder="Enter your last name" />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="your.email@example.com" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone</Label>
                    <Input id="phone" placeholder="+255 123 456 789" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="service">Service Interested In</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="catering">Catering Services</SelectItem>
                      <SelectItem value="wedding">Wedding Catering</SelectItem>
                      <SelectItem value="corporate">Corporate Events</SelectItem>
                      <SelectItem value="private">Private Parties</SelectItem>
                      <SelectItem value="courses">Culinary Courses</SelectItem>
                      <SelectItem value="consultation">Free Consultation</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="eventDate">Event Date (if applicable)</Label>
                  <Input id="eventDate" type="date" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="guests">Number of Guests</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select guest count" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="10-25">10-25 guests</SelectItem>
                      <SelectItem value="26-50">26-50 guests</SelectItem>
                      <SelectItem value="51-100">51-100 guests</SelectItem>
                      <SelectItem value="101-200">101-200 guests</SelectItem>
                      <SelectItem value="200+">200+ guests</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Tell us about your event or inquiry..." 
                    rows={4}
                  />
                </div>

                <Button className="btn-hero w-full">
                  <Send className="h-5 w-5 mr-2" />
                  Send Message
                </Button>
              </form>
            </div>

            {/* Quick Info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-playfair font-bold text-foreground mb-4">
                  Why Choose Valtrix Chef Pro?
                </h3>
                <div className="space-y-4">
                  {[
                    'Over 12 years of culinary excellence',
                    '500+ successful events catered',
                    'Professional certified chefs',
                    'Custom menu design',
                    'Full-service event coordination',
                    'Affordable pricing packages'
                  ].map((feature, i) => (
                    <div key={i} className="flex items-center">
                      <ChefHat className="h-5 w-5 text-secondary mr-3 flex-shrink-0" />
                      <span className="text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <Card className="card-elegant">
                <CardHeader>
                  <CardTitle className="text-xl font-playfair">Free Consultation</CardTitle>
                  <CardDescription>
                    Book a free consultation to discuss your event needs and get a personalized quote.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button className="btn-gold w-full">Schedule Consultation</Button>
                </CardContent>
              </Card>

              <Card className="card-elegant">
                <CardHeader>
                  <CardTitle className="text-xl font-playfair">Emergency Catering</CardTitle>
                  <CardDescription>
                    Need last-minute catering? We offer emergency catering services for urgent events.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" className="btn-outline-elegant w-full">
                    <Phone className="h-4 w-4 mr-2" />
                    Call Emergency Line
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-playfair font-bold text-foreground mb-6">
              Our Locations
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Visit us at any of our convenient locations across Tanzania. 
              Each office is equipped to handle your catering and training needs.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {offices.map((office, index) => (
              <Card key={index} className="card-elegant">
                <CardHeader>
                  <CardTitle className="text-xl font-playfair">{office.name}</CardTitle>
                  <CardDescription className="text-secondary font-medium">{office.type}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <MapPin className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-foreground">{office.address}</p>
                      <p className="text-muted-foreground">{office.city}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                    <p className="text-foreground">{office.phone}</p>
                  </div>
                  <Button size="sm" variant="outline" className="w-full mt-4">
                    Get Directions
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gradient-elegant">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-playfair font-bold text-foreground mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Find quick answers to common questions about our services and programs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                question: 'How far in advance should I book catering?',
                answer: 'We recommend booking at least 2-3 weeks in advance for small events and 4-6 weeks for large events or weddings.'
              },
              {
                question: 'Do you offer menu tastings?',
                answer: 'Yes! We offer complimentary menu tastings for events with 50+ guests. Smaller tastings are available for a nominal fee.'
              },
              {
                question: 'What are the course entry requirements?',
                answer: 'Most courses require basic literacy and numeracy. Some advanced courses may require prior experience or qualifications.'
              },
              {
                question: 'Do you cater to dietary restrictions?',
                answer: 'Absolutely! We accommodate all dietary needs including vegetarian, vegan, halal, and allergy-specific requirements.'
              },
              {
                question: 'Are your courses certified?',
                answer: 'Yes, our professional courses offer industry-recognized certifications including Level 2 NVQ qualifications.'
              },
              {
                question: 'What areas do you serve for catering?',
                answer: 'We serve all of Dar es Salaam and surrounding areas. For events outside this area, additional charges may apply.'
              }
            ].map((faq, index) => (
              <Card key={index} className="card-elegant">
                <CardHeader>
                  <CardTitle className="text-lg font-playfair">{faq.question}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-playfair font-bold text-foreground mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Whether you're planning an event or looking to advance your culinary skills, 
              we're here to help you achieve your goals. Contact us today!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="btn-hero">
                <MessageCircle className="h-5 w-5 mr-2" />
                Start WhatsApp Chat
              </Button>
              <Button variant="outline" className="btn-outline-elegant">
                <Phone className="h-5 w-5 mr-2" />
                Call +255 123 456 789
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;