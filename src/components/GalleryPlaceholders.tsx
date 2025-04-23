import { useEffect, useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import ImageWithLoader from "./ImageWithLoader";

// Функция для генерации цветных плейсхолдеров
const generateColoredPlaceholder = (width: number, height: number, text: string) => {
  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext('2d');
  
  if (!ctx) return '/placeholder.svg';
  
  // Генерируем случайный цвет из палитры биомимикрии
  const colors = [
    '#9b87f5', '#7E69AB', '#6E59A5', '#D6BCFA', 
    '#F2FCE2', '#FEF7CD', '#FEC6A1', '#E5DEFF'
  ];
  const bgColor = colors[Math.floor(Math.random() * colors.length)];
  
  // Заполняем фон
  ctx.fillStyle = bgColor;
  ctx.fillRect(0, 0, width, height);
  
  // Добавляем текст
  ctx.fillStyle = '#333';
  ctx.font = 'bold 16px Arial';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText(text, width / 2, height / 2);
  
  return canvas.toDataURL();
};

interface GalleryPlaceholdersProps {
  count?: number;
  columns?: number;
  useAsBackup?: boolean;
}

const GalleryPlaceholders = ({ count = 9, columns = 3, useAsBackup = false }: GalleryPlaceholdersProps) => {
  const [placeholders, setPlaceholders] = useState<Array<{id: number, src: string, alt: string, description: string}>>([]);
  
  useEffect(() => {
    // Генерируем плейсхолдеры при монтировании компонента
    const themes = [
      "Архитектура", "Транспорт", "Материалы", "Медицина", 
      "Робототехника", "Энергетика", "Умные материалы", "Аэродинамика", 
      "Оптика", "Гидродинамика", "Адаптивные системы", "Экология"
    ];
    
    const descriptions = [
      "Вдохновлено природными структурами",
      "Копирует принципы природных систем",
      "Основано на механизмах природы",
      "Адаптировано из природных организмов",
      "Имитирует природные процессы",
      "Реализует принципы живой природы"
    ];
    
    const newPlaceholders = Array.from({ length: count }, (_, i) => {
      const theme = themes[i % themes.length];
      const description = descriptions[Math.floor(Math.random() * descriptions.length)];
      const dataUrl = generateColoredPlaceholder(400, 300, `Биомимикрия: ${theme}`);
      return {
        id: i,
        src: dataUrl,
        alt: `Биомимикрия: ${theme}`,
        description: `${theme}: ${description}`
      };
    });
    
    setPlaceholders(newPlaceholders);
  }, [count]);
  
  const gridClass = {
    1: "grid-cols-1",
    2: "grid-cols-1 md:grid-cols-2",
    3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
    4: "grid-cols-1 md:grid-cols-2 lg:grid-cols-4",
  }[columns] || "grid-cols-1 md:grid-cols-2 lg:grid-cols-3";

  if (useAsBackup) {
    return (
      <div className={`grid ${gridClass} gap-6`}>
        {placeholders.map((item) => (
          <div 
            key={item.id}
            className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow"
          >
            <img
              src={item.src}
              alt={item.alt}
              className="w-full aspect-square object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
              <h3 className="text-white font-semibold text-lg">{item.alt}</h3>
              <p className="text-white/90 text-sm">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className={`grid ${gridClass} gap-6`}>
      {placeholders.map((placeholder) => (
        <div key={placeholder.id} className="rounded-lg overflow-hidden">
          <img 
            src={placeholder.src} 
            alt={placeholder.alt}
            className="w-full aspect-video object-cover" 
          />
          <div className="p-4 bg-white">
            <Skeleton className="h-6 w-2/3 mb-2" />
            <Skeleton className="h-4 w-full mb-1" />
            <Skeleton className="h-4 w-4/5" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default GalleryPlaceholders;
