import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import dashboardImage from "@/assets/portfolio-dashboard.jpg";
import networkImage from "@/assets/portfolio-network.jpg";
import analyticsImage from "@/assets/portfolio-analytics.jpg";

const PortfolioSection = () => {
  const projects = [
    {
      title: "Executive Dashboard",
      description: "Comprehensive business intelligence dashboard for a Fortune 500 company, providing real-time insights across multiple departments.",
      image: dashboardImage,
      tags: ["Business Intelligence", "Real-time", "Executive Reporting"]
    },
    {
      title: "Network Analysis Platform",
      description: "Interactive network visualization tool for analyzing complex relationships in social media data and organizational structures.",
      image: networkImage,
      tags: ["Network Analysis", "Social Media", "Interactive"]
    },
    {
      title: "Financial Analytics Suite",
      description: "Advanced financial dashboard with predictive modeling, risk assessment, and performance tracking for investment management.",
      image: analyticsImage,
      tags: ["Financial", "Predictive Analytics", "Risk Management"]
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our <span className="text-primary">Portfolio</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore some of our recent projects that showcase the power of effective data visualization 
            and the impact it can have on business decision-making.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-strong transition-smooth bg-card border-border">
              <div className="aspect-video overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-105 transition-smooth"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-card-foreground mb-3">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="px-3 py-1 bg-accent/10 text-accent text-sm rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <Button variant="outline" size="sm" className="w-full">
                  View Case Study
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button variant="hero" size="lg">
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;