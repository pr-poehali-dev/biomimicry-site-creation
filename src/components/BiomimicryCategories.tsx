import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import ImageWithLoader from "./ImageWithLoader";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const categories = [
  {
    id: 1,
    title: "Архитектура",
    description: "Здания и конструкции, вдохновленные природными формами и структурами.",
    image: "https://source.unsplash.com/random/600x400/?architecture,nature",
    link: "/examples?category=architecture"
  },
  {
    id: 2,
    title: "Транспорт",
    description: "Транспортные средства, аэродинамика которых основана на природных принципах.",
    image: "https://source.unsplash.com/random/600x400/?biomimicry,transport",
    link: "/examples?category=transport"
  },
  {
    id: 3,
    title: "Материалы",
    description: "Новые материалы, имитирующие уникальные свойства природных материалов.",
    image: "https://source.unsplash.com/random/600x400/?biomaterials",
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
