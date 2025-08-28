import { BarChart3, Linkedin, Twitter, Github } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <BarChart3 className="h-8 w-8" />
              <span className="text-2xl font-bold">DataViz Pro</span>
            </div>
            <p className="text-primary-foreground/80 mb-6 max-w-md">
              Transforming data into powerful insights through innovative visualization solutions. 
              Your trusted partner in data-driven decision making.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-accent transition-smooth">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-accent transition-smooth">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-accent transition-smooth">
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Services</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li><a href="#" className="hover:text-accent transition-smooth">Custom Dashboards</a></li>
              <li><a href="#" className="hover:text-accent transition-smooth">Advanced Analytics</a></li>
              <li><a href="#" className="hover:text-accent transition-smooth">Data Integration</a></li>
              <li><a href="#" className="hover:text-accent transition-smooth">Consulting</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Company</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li><a href="#" className="hover:text-accent transition-smooth">About Us</a></li>
              <li><a href="#" className="hover:text-accent transition-smooth">Our Team</a></li>
              <li><a href="#" className="hover:text-accent transition-smooth">Careers</a></li>
              <li><a href="#" className="hover:text-accent transition-smooth">Contact</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-primary-foreground/60">
          <p>&copy; 2024 DataViz Pro. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;