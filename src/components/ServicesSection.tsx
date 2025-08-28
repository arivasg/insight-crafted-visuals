import { Card } from "@/components/ui/card";
import { BarChart3, LineChart, PieChart, Activity, Database, Zap } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: BarChart3,
      title: "Custom Dashboards",
      description: "Interactive dashboards tailored to your business needs with real-time data updates and intuitive user interfaces."
    },
    {
      icon: LineChart,
      title: "Advanced Analytics",
      description: "Deep dive into your data with predictive modeling, trend analysis, and statistical insights to drive decision-making."
    },
    {
      icon: PieChart,
      title: "Data Storytelling",
      description: "Transform complex datasets into compelling visual narratives that communicate insights effectively to stakeholders."
    },
    {
      icon: Activity,
      title: "Real-time Monitoring",
      description: "Live data visualization solutions for monitoring KPIs, performance metrics, and business operations in real-time."
    },
    {
      icon: Database,
      title: "Data Integration",
      description: "Seamlessly connect and visualize data from multiple sources, databases, and APIs in unified dashboards."
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description: "Optimize existing visualizations for speed, scalability, and user experience across all platforms."
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our <span className="text-primary">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From concept to deployment, we provide comprehensive data visualization solutions 
            that transform how you understand and interact with your data.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card key={index} className="p-8 hover:shadow-medium transition-smooth bg-card border-border">
                <div className="mb-6">
                  <div className="w-12 h-12 bg-gradient-accent rounded-lg flex items-center justify-center mb-4">
                    <IconComponent className="h-6 w-6 text-accent-foreground" />
                  </div>
                  <h3 className="text-xl font-bold text-card-foreground mb-3">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;