import type { Metadata } from "next";
import GalleryExplorer from "@/components/GalleryExplorer";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  alternates: { canonical: "/gallery" },
  title: "Gallery",
  description: "A glimpse of learning, activities, teaching reports, and community support at Suhaai."
};

export default function GalleryPage() {
  return (
    <>
      <PageHero
        title="Gallery"
        description="A glimpse of learning, activities, teaching reports, and community support at Suhaai."
      />

      <section className="bg-white pb-[72px] pt-10 sm:pt-12">
        <div className="container-shell">
          <GalleryExplorer />
        </div>
      </section>
    </>
  );
}
