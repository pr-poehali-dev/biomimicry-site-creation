import { useState, useEffect } from "react";
import { Skeleton } from "@/components/ui/skeleton";

interface ImageWithLoaderProps {
  src: string;
  alt: string;
  className?: string;
}

const ImageWithLoader = ({ src, alt, className = "" }: ImageWithLoaderProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    // Сбрасываем состояние при изменении src
    setIsLoaded(false);
    setError(false);
    
    const img = new Image();
    img.src = src;
    img.onload = () => setIsLoaded(true);
    img.onerror = () => {
      console.error(`Ошибка загрузки изображения: ${src}`);
      setError(true);
    };

    // Если изображение уже в кеше, сразу отметим его загруженным
    if (img.complete) {
      setIsLoaded(true);
    }

    return () => {
      img.onload = null;
      img.onerror = null;
    };
  }, [src]);

  if (error) {
    return (
      <div className={`bg-muted flex items-center justify-center ${className}`}>
        <span className="text-muted-foreground">Изображение недоступно</span>
      </div>
    );
  }

  return (
    <div className="relative">
      {!isLoaded && (
        <Skeleton className={`${className} absolute inset-0`} />
      )}
      <img
        src={src}
        alt={alt}
        className={`transition-opacity duration-300 ${isLoaded ? 'opacity-100' : 'opacity-0'} ${className}`}
        loading="lazy"
      />
    </div>
  );
};

export default ImageWithLoader;
