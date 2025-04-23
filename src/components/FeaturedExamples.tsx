import Gallery from "./Gallery";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const exampleImages = [
  {
    id: 1,
    src: "https://source.unsplash.com/random/800x600/?biomimicry,velcro",
    alt: "Застежка-липучка, вдохновленная репейником",
    description: "Застежка-липучка, созданная по образцу семян репейника"
  },
  {
    id: 2,
    src: "https://source.unsplash.com/random/800x600/?lotus,water",
    alt: "Эффект лотоса",
    description: "Самоочищающиеся поверхности, имитирующие листья лотоса"
  },
  {
    id: 3,
    src: "https://source.unsplash.com/random/800x600/?shark,skin",
    alt: "Кожа акулы",
    description: "Материалы, вдохновленные кожей акулы для снижения сопротивления"
  },
  {
    id: 4,
    src: "https://source.unsplash.com/random/800x600/?termite,mound",
    alt: "Термитник",
    description: "Вентиляционные системы зданий, вдохновленные термитниками"
  },
  {
    id: 5,
    src: "https://source.unsplash.com/random/800x600/?kingfisher,bird",
    alt: "Зимородок",
    description: "Дизайн скоростных поездов, вдохновленный клювом зимородка"
  },
  {
    id: 6,
    src: "https://source.unsplash.com/random/800x600/?gecko,foot",
    alt: "Лапки геккона",
    description: "Адгезивные материалы, вдохновленные лапками геккона"
  }
];

const FeaturedExamples = () => {
  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-4">Выдающиеся примеры биомимикрии</h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Познакомьтесь с инновационными технологиями и продуктами, 
          созданными учеными и инженерами по образцу природных решений.
        </p>
      </div>
      
      <Gallery images={exampleImages} columns={3} />
      
      <div className="text-center pt-6">
        <Button 
          size="lg" 
          className="bg-biomimicry-primary hover:bg-biomimicry-secondary"
          asChild
        >
          <Link to="/gallery">Смотреть полную галерею</Link>
        </Button>
      </div>
    </div>
  );
};

export default FeaturedExamples;
