import PlaceholderImage from "@/components/PlaceholderImage";

type GalleryImageCardProps = {
  index: number;
  title: string;
  category: string;
};

export default function GalleryImageCard({ index, title, category }: GalleryImageCardProps) {
  return (
    <PlaceholderImage
      title={title}
      category={category}
      imageSrc={`/hero-slide/gallery-${index}`}
    />
  );
}
