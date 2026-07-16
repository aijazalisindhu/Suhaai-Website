import type { Metadata } from "next";
import GalleryImageCard from "@/components/GalleryImageCard";
import PageHero from "@/components/PageHero";
import { galleryItems } from "@/data/site";

export const metadata: Metadata = {
  title: "Gallery",
  description: "A glimpse of learning, activities, teaching reports, and community support at Suhaai."
};

const categories = [
  "Classroom Activities",
  "Students Learning",
  "Teaching Reports",
  "Events",
  "Community Support",
  "Posters and Campaigns"
];

export default function GalleryPage() {
  return (
    <>
      <PageHero
        title="Gallery"
        description="A glimpse of learning, activities, teaching reports, and community support at Suhaai."
      />

      <section className="bg-white pb-[72px] pt-10 sm:pt-12">
        <div className="container-shell">
          <div className="-mx-4 flex flex-nowrap gap-3 overflow-x-auto px-4 pb-2 sm:mx-0 sm:flex-wrap sm:overflow-visible sm:px-0">
            {categories.map((category) => (
              <span key={category} className="shrink-0 whitespace-nowrap rounded-full bg-suhaai-cream px-4 py-2 text-sm font-bold text-suhaai-green ring-1 ring-amber-200">
                {category}
              </span>
            ))}
          </div>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:mt-10 lg:grid-cols-3">
            {galleryItems.map((item, index) => (
              <GalleryImageCard
                key={item.title}
                index={index + 1}
                title={item.title}
                category={item.category}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
