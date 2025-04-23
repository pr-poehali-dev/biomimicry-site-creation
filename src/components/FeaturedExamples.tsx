import React, { useEffect, useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import ImageWithLoader from "./ImageWithLoader";
import { Link } from "react-router-dom";

// Функция для генерации примеров биомимикрии
const generateExampleImage = (index: number, width: number, height: number, title: string) => {
  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext('2d');
  
  if (!ctx) return '/placeholder.svg';
  
  // Цвета для разных категорий
  const colors = [
    '#6E59A5', '#7E69AB', '#9b87f5', '#D6BCFA', 
    '#E5DEFF', '#8B5CF6', '#D946EF'
  ];
  
  const bgColor = colors[index % colors.length];
  
  // Заполняем фон
  ctx.fillStyle = bgColor;
  ctx.fillRect(0, 0, width, height);
  
  // Добавляем геометрические фигуры
  const shapes = Math.floor(Math.random() * 5) + 3;
  for (let i = 0; i < shapes; i++) {
    const shapeType = Math.floor(Math.random() * 3);
    
    ctx.fillStyle = `rgba(255, 255, 255, ${Math.random() * 0.3 + 0.1})`;
    
    if (shapeType === 0) {
      // Круг
      const centerX = Math.random() * width;
      const centerY = Math.random() * height;
      const radius = 20 + Math.random() * 60;
      
      ctx.beginPath();
      ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
      ctx.fill();
    } else if (shapeType === 1) {
      // Прямоугольник
      const rectX = Math.random() * width;
      const rectY = Math.random() * height;
      const rectWidth = 40 + Math.random() * 80;
      const rectHeight = 40 + Math.random() * 80;
      
      ctx.fillRect(rectX, rectY, rectWidth, rectHeight);
    } else {
      // Треугольник
      const x1 = Math.random() * width;
      const y1 = Math.random() * height;
      const x2 = x1 + (-50 + Math.random() * 100);
      const y2 = y1 + (-50 + Math.random() * 100);
      const x3 = x1 + (-50 + Math.random() * 100);
      const y3 = y1 + (30 + Math.random() * 100);
      
      ctx.beginPath();
      ctx.moveTo(x1, y1);
      ctx.lineTo(x2, y2);
      ctx.lineTo(x3, y3);
      ctx.closePath();
      ctx.fill();
    }
  }
  
  // Добавляем текст
  ctx.fillStyle = '#ffffff';
  ctx.font = 'bold 16px Arial';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText(title, width / 2, height / 2);
  
  return canvas.toDataURL();
};

const examples = [
  {
    id: 1,
    title: "Eastgate Centre",
    category: "Архитектура",
    description: "Здание в Зимбабве с системой охлаждения, вдохновленной термитниками.",
    image: "/biomimicry/eastgate.jpg",
    link: "/examples/eastgate"
  },
  {
    id: 2,
    title: "Поезд Shinkansen",
    category: "Транспорт",
    description: "Высокоскоростной поезд с носом, разработанным по образцу клюва зимородка.",
    image: "/biomimicry/shinkansen.jpg",
    link: "/examples/shinkansen"
  },
  {
    id: 3,
    title: "Velcro (Липучка)",
    category: "Материалы",
    description: "Застежка, созданная на основе наблюдений за семенами репейника.",
    image: "/biomimicry/velcro.jpg",
    link: "/examples/velcro"
  },
  {
    id: 4,
    title: "Gekoskin (Гекоскин)",
    category: "Материалы",
    description: "Адгезивный материал, вдохновленный лапками гекконов.",
    image: "/biomimicry/gekoskin.jpg",
    link: "/examples/gekoskin"
  },
  {
    id: 5,
    title: "Лопасти ветрогенераторов",
    category: "Энергетика",
    description: "Форма, основанная на особенностях плавников горбатых китов.",
    image: "/biomimicry/wind-turbine.jpg",
    link: "/examples/wind-turbine"
  },
  {
    id: 6,
    title: "Lotus Effect (Эффект лотоса)",
    category: "Материалы",
    description: "Самоочищающиеся поверхности, имитирующие листья лотоса.",
    image: "/biomimicry/lotus-effect.jpg",
    link: "/examples/lotus"
  }
];

const FeaturedExamples = () => {
  const [localExamples, setLocalExamples] = useState(examples);
  
  useEffect(() => {
    // Создаем локальные изображения для каждого примера
    const updatedExamples = examples.map(example => ({
      ...example,
      localImage: generateExampleImage(example.id, 600, 400, example.title)
    }));
    
    setLocalExamples(updatedExamples);
  }, []);

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-4">Примеры биомимикрии</h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Откройте для себя удивительные изобретения, созданные на основе природных решений.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {localExamples.map((example) => (
          <Card key={example.id} className="overflow-hidden transition-all duration-300 hover:shadow-xl">
            <CardHeader className="p-0">
              <ImageWithLoader
                src={example.image}
                alt={example.title}
                fallbackSrc={example.localImage}
                className="w-full h-48 object-cover"
              />
            </CardHeader>
            <CardContent className="p-6">
              <div className="mb-2">
                <span className="inline-block px-2 py-1 text-xs font-semibold bg-biomimicry-primary/20 text-biomimicry-primary rounded">
                  {example.category}
                </span>
              </div>
              <CardTitle className="text-xl mb-2">{example.title}</CardTitle>
              <CardDescription>{example.description}</CardDescription>
            </CardContent>
            <CardFooter>
              <Button asChild variant="outline" className="w-full">
                <Link to={example.link}>Подробнее</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
      
      <div className="text-center">
        <Button 
          size="lg" 
          className="bg-biomimicry-secondary hover:bg-biomimicry-primary mt-8"
          asChild
        >
          <Link to="/examples">Все примеры</Link>
        </Button>
      </div>
    </div>
  );
};

export default FeaturedExamples;
