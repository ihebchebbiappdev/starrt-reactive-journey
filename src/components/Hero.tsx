import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <div className="min-h-screen flex items-center justify-center gradient-bg">
      <div className="container mx-auto px-4 py-32 text-center text-white">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
          Welcome to MyApp
        </h1>
        <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "0.2s" }}>
          Start building something amazing with our modern React application template.
        </p>
        <div className="animate-fade-in" style={{ animationDelay: "0.4s" }}>
          <Button size="lg" variant="secondary" className="rounded-full">
            Get Started <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;