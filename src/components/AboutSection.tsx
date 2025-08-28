import { Card } from "@/components/ui/card";
import { Award, Users, Target, Lightbulb } from "lucide-react";

const AboutSection = () => {
  const values = [
    {
      icon: Target,
      title: "Precision",
      description: "Every visualization is crafted with meticulous attention to detail and accuracy."
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "We leverage cutting-edge technologies to create breakthrough visualization solutions."
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "We work closely with clients to understand their unique needs and challenges."
    },
    {
      icon: Award,
      title: "Excellence",
      description: "Our commitment to quality has earned us recognition as industry leaders."
    }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              About <span className="text-primary">DataViz Pro</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
              With over a decade of experience in data visualization and analytics, 
              we've helped organizations across industries unlock the true potential of their data.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Our team of expert data scientists, designers, and developers combine technical expertise 
              with creative vision to deliver visualization solutions that not only look stunning 
              but drive real business value.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <div className="text-2xl font-bold text-primary mb-1">10+</div>
                <div className="text-muted-foreground">Years Experience</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary mb-1">25+</div>
                <div className="text-muted-foreground">Team Members</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary mb-1">15+</div>
                <div className="text-muted-foreground">Industries Served</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary mb-1">5★</div>
                <div className="text-muted-foreground">Client Rating</div>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <Card key={index} className="p-6 text-center hover:shadow-medium transition-smooth bg-card border-border">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <h3 className="font-bold text-card-foreground mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;