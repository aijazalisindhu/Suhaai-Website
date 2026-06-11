"use client";

import { useState } from "react";
import PlaceholderImage from "@/components/PlaceholderImage";

const missionImagePaths = [
  "/images/mission.jpg",
  "/images/mission.jpeg",
  "/images/mission.png",
  "/images/mission.webp",
  "/images/Mission.jpg",
  "/images/Mission.jpeg",
  "/images/Mission.png",
  "/images/Mission.webp"
];

export default function MissionImage() {
  const [imageIndex, setImageIndex] = useState(0);

  return (
    <PlaceholderImage
      title="A supportive place to learn"
      category="Our mission"
      imageSrc={missionImagePaths[imageIndex]}
      imageClassName="scale-x-[-1]"
      onImageError={() => {
        setImageIndex((currentIndex) =>
          currentIndex < missionImagePaths.length - 1 ? currentIndex + 1 : currentIndex
        );
      }}
    />
  );
}
