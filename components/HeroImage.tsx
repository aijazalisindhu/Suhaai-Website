"use client";

import { useState } from "react";
import PlaceholderImage from "@/components/PlaceholderImage";

const heroImagePaths = [
  "/images/hero-1.webp",
  "/images/hero-2.webp",
  "/images/hero-3.webp",
  "/images/hero-4.webp"
];

export default function HeroImage() {
  const [imageIndex, setImageIndex] = useState(0);

  return (
    <PlaceholderImage
      variant="hero"
      title="Girls learning with confidence"
      category="Village classroom"
      imageSrc={heroImagePaths[imageIndex]}
      onImageError={() => {
        setImageIndex((currentIndex) =>
          currentIndex < heroImagePaths.length - 1 ? currentIndex + 1 : currentIndex
        );
      }}
    />
  );
}
