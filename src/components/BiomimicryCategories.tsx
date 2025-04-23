import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import ImageWithLoader from "./ImageWithLoader";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

// Локальная генерация заглушек для категорий
const generateCategoryImage = (width: number, height: number, text: string) => {
  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext('2d');
  
  if (!ctx) return '/placeholder.svg';
  
  // Цвета для разных категорий
  const colors = {
    "Архитектура": '#9b87f5',
    "Транспорт": '#7E69AB',
    "Материалы": '#6E59A5'
  };
  
  const bgColor = colors[text as keyof typeof colors] || '#D6BCFA';
  
  // Заполняем фон
  ctx.fillStyle = bgColor;
  ctx.fillRect(0, 0, width, height);
  
  // Добавляем текст
  ctx.fillStyle = '#ffffff';
  ctx.font = 'bold 24px Arial';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText(text, width / 2, height / 2);
  
  return canvas.toDataURL();
};

const categories = [
  {
    id: 1,
    title: "Архитектура",
    description: "Здания и конструкции, вдохновленные природными формами и структурами.",
    image: "/biomimicry/architecture.jpg",
    localImage: generateCategoryImage(400, 200, "Архитектура"),
    link: "/examples?category=architecture"
  },
  {
    id: 2,
    title: "Транспорт",
    description: "Транспортные средства, аэродинамика которых основана на природных принципах.",
    image: "/biomimicry/transport.jpg",
    localImage: generateCategoryImage(400, 200, "Транспорт"),
    link: "/examples?category=transport"
  },
  {
    id: 3,
    title: "Материалы",
    description: "Новые материалы, имитирующие уникальные свойства природных материалов.",
    image: "/biomimicry/materials.jpg",
    localImage: generateCategoryImage(400, 200, "Материалы"),
    link: "/examples?category=materials"
  }
];

const BiomimicryCategories = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {categories.map((category) => (
        <Card key={category.id} className="overflow-hidden border-t-4 border-biomimicry-primary">
          <CardHeader className="p-0">
            <ImageWithLoader
              src={category.image}
              alt={category.title}
              fallbackSrc={category.localImage}
              className="w-full h-48 object-cover"
            />
          </CardHeader>
          <CardContent className="p-6">
            <CardTitle className="mb-2 text-xl text-biomimicry-primary">{category.title}</CardTitle>
            <p className="text-gray-600">{category.description}</p>
          </CardContent>
          <CardFooter>
            <Button asChild className="w-full bg-biomimicry-secondary hover:bg-biomimicry-primary">
              <Link to={category.link}>Исследовать</Link>
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};

export default BiomimicryCategories;
