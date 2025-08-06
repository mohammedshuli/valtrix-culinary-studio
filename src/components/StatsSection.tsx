import { Users, Award, Clock, Heart } from "lucide-react";

const stats = [
  {
    icon: Users,
    number: "500+",
    label: "Happy Clients",
    description: "Satisfied customers across Tanzania"
  },
  {
    icon: Award,
    number: "15+",
    label: "Years Experience",
    description: "Professional culinary expertise"
  },
  {
    icon: Clock,
    number: "24/7",
    label: "Service Available",
    description: "Ready when you need us"
  },
  {
    icon: Heart,
    number: "100%",
    label: "Satisfaction Rate",
    description: "Guaranteed quality service"
  }
];

export const StatsSection = () => {
  return (
    <section className="py-16 bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                  <stat.icon className="w-8 h-8" />
                </div>
              </div>
              <div className="text-3xl lg:text-4xl font-bold font-playfair mb-2">{stat.number}</div>
              <div className="text-xl font-semibold mb-1">{stat.label}</div>
              <div className="text-sm opacity-90">{stat.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};