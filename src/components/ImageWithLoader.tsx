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
    const img = new Image();
    img.src = src;
    img.onload = () => setIsLoaded(true);
    img.onerror = () => setError(true);

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
        className={`fade-in-image ${isLoaded ? 'loaded' : ''} ${className}`}
        loading="lazy"
      />
    </div>
  );
};

export default ImageWithLoader;
