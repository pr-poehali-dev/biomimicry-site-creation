import { useEffect, useState } from "react";
import ImageWithLoader from "./ImageWithLoader";
import { Button } from "@/components/ui/button";
import GalleryPlaceholders from "./GalleryPlaceholders";

// Функция для генерации изображений локально
const generateNatureImage = (index: number, width: number, height: number) => {
  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext('2d');
  
  if (!ctx) return '/placeholder.svg';
  
  // Цвета для разных категорий
  const colors = [
    '#8B5CF6', '#D946EF', '#F97316', '#0EA5E9', 
    '#10B981', '#F59E0B', '#6366F1', '#EC4899'
  ];
  
  const bgColor = colors[index % colors.length];
  
  // Заполняем фон
  ctx.fillStyle = bgColor;
  ctx.fillRect(0, 0, width, height);
  
  // Рисуем круги для имитации природы
  for (let i = 0; i < 10; i++) {
    const x = Math.random() * width;
    const y = Math.random() * height;
    const radius = 10 + Math.random() * 40;
    
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(255, 255, 255, ${Math.random() * 0.3})`;
    ctx.fill();
  }
  
  // Добавляем текст
  ctx.fillStyle = '#ffffff';
  ctx.font = '18px Arial';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText(`Природная структура ${index + 1}`, width / 2, height / 2);
  
  return canvas.toDataURL();
};

// Описания природных форм
const natureDescriptions = [
  "Микроструктура листа показывает эффективное распределение питательных веществ",
  "Кораллы вдохновляют разработку новых материалов для строительства",
  "Паутина сочетает легкость и прочность",
  "Форма ракушки оптимизирована для максимальной прочности",
  "Пчелиные соты - пример эффективного использования материала",
  "Структура пера сочетает легкость и аэродинамичность",
  "Кожа змеи вдохновляет создание материалов с минимальным трением",
  "Мицелий грибов вдохновляет создание новых биоразлагаемых материалов",
  "Естественные формы песчаных дюн вдохновляют архитекторов"
];

// Названия природных форм
const natureNames = [
  "Структура листа", "Кораллы", "Паутина на рассвете", 
  "Морская ракушка", "Соты", "Перья птицы", 
  "Змея", "Грибы", "Песчаные дюны"
];

const NatureGallery = () => {
  const [natureImages, setNatureImages] = useState<Array<{
    id: number;
    src: string;
    localSrc: string;
    alt: string;
    description: string;
  }>>([]);
  
  const [showMore, setShowMore] = useState(false);
  const baseCount = 9;
  const extraCount = 9;
  
  useEffect(() => {
    // Генерируем изображения при монтировании компонента
    const images = Array.from({ length: baseCount + extraCount }, (_, i) => {
      const nameIndex = i % natureNames.length;
      return {
        id: i + 1,
        src: `/biomimicry/nature${i + 1}.jpg`,
        localSrc: generateNatureImage(i, 400, 400),
        alt: i < natureNames.length ? natureNames[i] : `Природная форма ${i + 1}`,
        description: i < natureDescriptions.length ? 
          natureDescriptions[i] : 
          `Эта природная структура демонстрирует уникальные свойства для биомимикрии`
      };
    });
    
    setNatureImages(images);
  }, []);
  
  const displayedImages = showMore ? 
    natureImages : 
    natureImages.slice(0, baseCount);

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
        {displayedImages.map((image) => (
          <div 
            key={image.id}
            className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow"
          >
            <ImageWithLoader
              src={image.src}
              alt={image.alt}
              fallbackSrc={image.localSrc}
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
          onClick={() => setShowMore(!showMore)}
        >
          {showMore ? "Показать меньше" : "Загрузить еще"}
        </Button>
      </div>
    </div>
  );
};

export default NatureGallery;
