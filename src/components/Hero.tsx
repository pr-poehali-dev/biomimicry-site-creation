import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const Hero = () => {
  const [localBgImage, setLocalBgImage] = useState<string>("");

  useEffect(() => {
    // Создаем локальную градиентную заглушку для фона
    const canvas = document.createElement('canvas');
    canvas.width = 1200;
    canvas.height = 600;
    const ctx = canvas.getContext('2d');
    
    if (ctx) {
      // Градиент от темно-фиолетового к черному
      const gradient = ctx.createLinearGradient(0, 0, 0, 600);
      gradient.addColorStop(0, '#1A1F2C');
      gradient.addColorStop(1, '#1A1F2C');
      
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, 1200, 600);
      
      // Добавляем несколько "созвездий" точек
      for (let i = 0; i < 100; i++) {
        const x = Math.random() * 1200;
        const y = Math.random() * 600;
        const radius = Math.random() * 2;
        
        ctx.beginPath();
        ctx.arc(x, y, radius, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(255, 255, 255, 0.5)';
        ctx.fill();
      }
      
      setLocalBgImage(canvas.toDataURL());
    }
  }, []);

  return (
    <div className="relative overflow-hidden bg-biomimicry-dark text-white">
      <div 
        className="absolute inset-0 z-0 opacity-20" 
        style={{
          backgroundImage: `url('${localBgImage || '/biomimicry/hero-bg.jpg'}')`,
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
