
import { useState, useEffect } from "react";

interface PhotoGridProps {
  images: {
    src: string;
    alt: string;
  }[];
  columns?: number;
  gap?: number;
}

const PhotoGrid = ({ images, columns = 2, gap = 4 }: PhotoGridProps) => {
  const [loaded, setLoaded] = useState<boolean[]>(new Array(images.length).fill(false));

  const handleImageLoad = (index: number) => {
    const newLoaded = [...loaded];
    newLoaded[index] = true;
    setLoaded(newLoaded);
  };

  useEffect(() => {
    // Reset loaded state when images change
    setLoaded(new Array(images.length).fill(false));
  }, [images]);

  // Distribute images into columns
  const columnImages = Array.from({ length: columns }, () => [] as typeof images);
  
  images.forEach((image, index) => {
    const columnIndex = index % columns;
    columnImages[columnIndex].push({ ...image, index });
  });

  return (
    <div 
      className="grid w-full" 
      style={{ 
        gridTemplateColumns: `repeat(${columns}, 1fr)`,
        gap: `${gap * 0.25}rem`
      }}
    >
      {columnImages.map((column, colIndex) => (
        <div key={`column-${colIndex}`} className="flex flex-col space-y-4">
          {column.map((image) => (
            <div 
              key={`image-${image.index}`} 
              className={`photo-card overflow-hidden transition-opacity duration-500 ${
                loaded[image.index] ? "opacity-100" : "opacity-0"
              }`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-auto object-cover rounded-lg"
                onLoad={() => handleImageLoad(image.index)}
                loading="lazy"
              />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default PhotoGrid;
