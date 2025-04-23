import Gallery from "./Gallery";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

// Используем локальные изображения вместо unsplash
const exampleImages = [
  {
    id: 1,
    src: "/biomimicry/velcro.jpg",
    alt: "Застежка-липучка, вдохновленная репейником",
    description: "Застежка-липучка, созданная по образцу семян репейника"
  },
  {
    id: 2,
    src: "/biomimicry/lotus.jpg",
    alt: "Эффект лотоса",
    description: "Самоочищающиеся поверхности, имитирующие листья лотоса"
  },
  {
    id: 3,
    src: "/biomimicry/shark.jpg",
    alt: "Кожа акулы",
    description: "Материалы, вдохновленные кожей акулы для снижения сопротивления"
  },
  {
    id: 4,
    src: "/biomimicry/termite.jpg",
    alt: "Термитник",
    description: "Вентиляционные системы зданий, вдохновленные термитниками"
  },
  {
    id: 5,
    src: "/biomimicry/kingfisher.jpg",
    alt: "Зимородок",
    description: "Дизайн скоростных поездов, вдохновленный клювом зимородка"
  },
  {
    id: 6,
    src: "/biomimicry/gecko.jpg",
    alt: "Лапки геккона",
    description: "Адгезивные материалы, вдохновленные лапками геккона"
  },
  {
    id: 7,
    src: "/biomimicry/butterfly.jpg",
    alt: "Крыло бабочки",
    description: "Фотонные кристаллы, вдохновленные крыльями бабочек"
  },
  {
    id: 8,
    src: "/biomimicry/spider.jpg",
    alt: "Паутина",
    description: "Сверхпрочные материалы, вдохновленные паутиной"
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
      
      <Gallery images={exampleImages} columns={4} />
      
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
