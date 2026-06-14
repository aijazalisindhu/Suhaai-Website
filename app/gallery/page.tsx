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

      <section className="section-padding bg-white">
        <div className="container-shell">
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <span key={category} className="rounded-full bg-suhaai-cream px-4 py-2 text-sm font-bold text-suhaai-green ring-1 ring-amber-200">
                {category}
              </span>
            ))}
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {galleryItems.map((item, index) => (
              <GalleryImageCard
                key={item.title}
                index={index + 1}
                title={item.title}
                category={item.category}
              />
            ))}
          </div>

          <p className="mt-8 rounded-2xl bg-suhaai-cream p-5 text-center text-sm font-semibold text-suhaai-green">
            Real photos and updates can be added later.
          </p>
        </div>
      </section>
    </>
  );
}
