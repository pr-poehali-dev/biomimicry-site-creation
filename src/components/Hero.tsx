import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-biomimicry-dark text-white">
      <div 
        className="absolute inset-0 z-0 opacity-20" 
        style={{
          backgroundImage: "url('/biomimicry/hero-bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Природа — величайший инженер
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            Биомимикрия: инновации, вдохновленные природой
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button 
              size="lg" 
              className="bg-biomimicry-secondary hover:bg-biomimicry-primary"
              asChild
            >
              <Link to="/gallery">Галерея примеров</Link>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-biomimicry-dark"
              asChild
            >
              <Link to="/about">Узнать больше</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
