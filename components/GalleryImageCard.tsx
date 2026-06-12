"use client";

import { useState } from "react";
import PlaceholderImage from "@/components/PlaceholderImage";

type GalleryImageCardProps = {
  index: number;
  title: string;
  category: string;
};

function galleryPaths(index: number) {
  return [
    `/images/gallery/gallery-${index}.jpg`,
    `/images/gallery/gallery-${index}.jpeg`,
    `/images/gallery/gallery-${index}.png`,
    `/images/gallery/gallery-${index}.webp`,
    `/images/gallery/Gallery-${index}.jpg`,
    `/images/gallery/Gallery-${index}.jpeg`,
    `/images/gallery/Gallery-${index}.png`,
    `/images/gallery/Gallery-${index}.webp`
  ];
}

export default function GalleryImageCard({ index, title, category }: GalleryImageCardProps) {
  const paths = galleryPaths(index);
  const [imageIndex, setImageIndex] = useState(0);

  return (
    <PlaceholderImage
      title={title}
      category={category}
      imageSrc={paths[imageIndex]}
      onImageError={() => {
        setImageIndex((currentIndex) =>
          currentIndex < paths.length - 1 ? currentIndex + 1 : currentIndex
        );
      }}
    />
  );
}
