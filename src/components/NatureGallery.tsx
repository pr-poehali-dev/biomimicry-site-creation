import ImageWithLoader from "./ImageWithLoader";
import { Button } from "@/components/ui/button";

// Большая коллекция локальных изображений
const natureImages = [
  {
    id: 1,
    src: "/biomimicry/nature1.jpg",
    alt: "Структура листа",
    description: "Микроструктура листа показывает эффективное распределение питательных веществ"
  },
  {
    id: 2,
    src: "/biomimicry/nature2.jpg",
    alt: "Кораллы",
    description: "Кораллы вдохновляют разработку новых материалов для строительства"
  },
  {
    id: 3,
    src: "/biomimicry/nature3.jpg",
    alt: "Паутина на рассвете",
    description: "Паутина сочетает легкость и прочность"
  },
  {
    id: 4,
    src: "/biomimicry/nature4.jpg",
    alt: "Морская ракушка",
    description: "Форма ракушки оптимизирована для максимальной прочности"
  },
  {
    id: 5,
    src: "/biomimicry/nature5.jpg",
    alt: "Соты",
    description: "Пчелиные соты - пример эффективного использования материала"
  },
  {
    id: 6,
    src: "/biomimicry/nature6.jpg",
    alt: "Перья птицы",
    description: "Структура пера сочетает легкость и аэродинамичность"
  },
  {
    id: 7,
    src: "/biomimicry/nature7.jpg",
    alt: "Змея",
    description: "Кожа змеи вдохновляет создание материалов с минимальным трением"
  },
  {
    id: 8,
    src: "/biomimicry/nature8.jpg",
    alt: "Грибы",
    description: "Мицелий грибов вдохновляет создание новых биоразлагаемых материалов"
  },
  {
    id: 9,
    src: "/biomimicry/nature9.jpg",
    alt: "Песчаные дюны",
    description: "Естественные формы песчаных дюн вдохновляют архитекторов"
  }
];

const NatureGallery = () => {
  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-4">Природные структуры и формы</h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Природа создала удивительное разнообразие структур и форм, 
          которые служат источником вдохновения для инженеров и дизайнеров.
        </p>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {natureImages.map((image) => (
          <div 
            key={image.id}
            className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow"
          >
            <ImageWithLoader
              src={image.src}
              alt={image.alt}
              className="w-full aspect-square object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
              <h3 className="text-white font-semibold text-lg">{image.alt}</h3>
              <p className="text-white/90 text-sm">{image.description}</p>
            </div>
          </div>
        ))}
      </div>
      
      <div className="text-center pt-6">
        <Button 
          size="lg" 
          className="bg-biomimicry-primary hover:bg-biomimicry-secondary"
        >
          Загрузить еще
        </Button>
      </div>
    </div>
  );
};

export default NatureGallery;
