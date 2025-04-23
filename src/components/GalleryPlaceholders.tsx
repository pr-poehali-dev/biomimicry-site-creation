import { useEffect, useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";

// Создаем плейсхолдеры для реальных изображений
const createPlaceholder = (index: number) => ({
  id: index,
  src: `/placeholder.svg`,
  alt: `Заглушка изображения ${index}`,
  description: `Описание будет загружено позже`
});

// Функция для генерации цветных плейсхолдеров
const generateColoredPlaceholder = (width: number, height: number, text: string) => {
  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext('2d');
  
  if (!ctx) return '';
  
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
  ctx.font = '16px Arial';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText(text, width / 2, height / 2);
  
  return canvas.toDataURL();
};

interface GalleryPlaceholdersProps {
  count?: number;
  columns?: number;
}

const GalleryPlaceholders = ({ count = 9, columns = 3 }: GalleryPlaceholdersProps) => {
  const [placeholders, setPlaceholders] = useState<Array<{id: number, src: string, alt: string}>>([]);
  
  useEffect(() => {
    // Генерируем плейсхолдеры при монтировании компонента
    const newPlaceholders = Array.from({ length: count }, (_, i) => {
      const dataUrl = generateColoredPlaceholder(400, 300, `Биомимикрия ${i+1}`);
      return {
        id: i,
        src: dataUrl,
        alt: `Биомимикрия ${i+1}`
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

  return (
    <div className={`grid ${gridClass} gap-6`}>
      {placeholders.map((placeholder) => (
        <div key={placeholder.id} className="rounded-lg overflow-hidden">
          {placeholder.src ? (
            <img 
              src={placeholder.src} 
              alt={placeholder.alt}
              className="w-full aspect-video object-cover" 
            />
          ) : (
            <Skeleton className="w-full aspect-video" />
          )}
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
