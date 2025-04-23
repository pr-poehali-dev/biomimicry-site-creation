import ImageWithLoader from "./ImageWithLoader";
import { Card, CardContent } from "@/components/ui/card";

interface GalleryProps {
  images: {
    id: number;
    src: string;
    alt: string;
    description?: string;
  }[];
  columns?: number;
}

const Gallery = ({ images, columns = 3 }: GalleryProps) => {
  const gridClass = {
    1: "grid-cols-1",
    2: "grid-cols-1 md:grid-cols-2",
    3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
    4: "grid-cols-1 md:grid-cols-2 lg:grid-cols-4",
  }[columns] || "grid-cols-1 md:grid-cols-2 lg:grid-cols-3";

  return (
    <div className={`grid ${gridClass} gap-6 animate-fade-in`}>
      {images.map((image) => (
        <Card key={image.id} className="overflow-hidden hover:shadow-lg transition-shadow">
          <CardContent className="p-0">
            <div className="group relative">
              <ImageWithLoader
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                className="w-full aspect-video object-cover transition-transform duration-300 group-hover:scale-105"
              />
              {image.description && (
                <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white p-3 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <p>{image.description}</p>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default Gallery;
