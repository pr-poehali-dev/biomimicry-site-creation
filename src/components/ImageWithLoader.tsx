import { useState, useEffect } from "react";
import { Skeleton } from "@/components/ui/skeleton";

interface ImageWithLoaderProps {
  src: string;
  alt: string;
  className?: string;
  fallbackSrc?: string;
}

const ImageWithLoader = ({ 
  src, 
  alt, 
  className = "", 
  fallbackSrc = "/placeholder.svg" 
}: ImageWithLoaderProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(false);
  const [imgSrc, setImgSrc] = useState(src);

  useEffect(() => {
    // Сбрасываем состояние при изменении src
    setIsLoaded(false);
    setError(false);
    setImgSrc(src);
    
    const img = new Image();
    img.src = src;
    img.onload = () => setIsLoaded(true);
    img.onerror = () => {
      console.error(`Ошибка загрузки изображения: ${src}`);
      setImgSrc(fallbackSrc);
      setError(true);
      
      // Попробуем загрузить запасное изображение
      const fallbackImg = new Image();
      fallbackImg.src = fallbackSrc;
      fallbackImg.onload = () => setIsLoaded(true);
    };

    // Если изображение уже в кеше, сразу отметим его загруженным
    if (img.complete && !img.naturalWidth) {
      setError(true);
      setImgSrc(fallbackSrc);
    } else if (img.complete) {
      setIsLoaded(true);
    }

    return () => {
      img.onload = null;
      img.onerror = null;
    };
  }, [src, fallbackSrc]);

  return (
    <div className="relative">
      {!isLoaded && (
        <Skeleton className={`${className} absolute inset-0`} />
      )}
      <img
        src={imgSrc}
        alt={alt}
        className={`transition-opacity duration-300 ${isLoaded ? 'opacity-100' : 'opacity-0'} ${className}`}
        loading="lazy"
      />
    </div>
  );
};

export default ImageWithLoader;
