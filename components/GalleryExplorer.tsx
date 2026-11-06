"use client";

import { useState } from "react";
import GalleryImageCard from "@/components/GalleryImageCard";
import { galleryItems } from "@/data/site";

const categories = ["All", ...Array.from(new Set(galleryItems.map((item) => item.category)))];
export default function GalleryExplorer() {
  const [category, setCategory] = useState("All");
  const visibleItems = galleryItems.map((item, index) => ({ ...item, index: index + 1 }))
    .filter((item) => category === "All" || item.category === category);
  return (
    <>
      <div role="group" aria-label="Filter gallery by category" className="flex flex-wrap gap-3">
        {categories.map((item) => (
          <button key={item} type="button" aria-pressed={category === item}
            onClick={() => setCategory(item)}
            className={`rounded-full px-4 py-3 text-sm font-bold ring-1 ring-amber-200 focus:outline-none focus:ring-2 focus:ring-suhaai-green ${category === item ? "bg-suhaai-green text-white" : "bg-suhaai-cream text-suhaai-green"}`}>
            {item}
          </button>
        ))}
      </div>
      <p role="status" className="mt-5 text-sm text-suhaai-ink/75">Showing {visibleItems.length} photos{category === "All" ? "" : ` in ${category}`}. Select a photo to view the full image.</p>
      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {visibleItems.map((item) => <GalleryImageCard key={item.index} {...item} />)}
      </div>
    </>
  );
}
