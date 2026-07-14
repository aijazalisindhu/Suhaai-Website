import PlaceholderImage from "@/components/PlaceholderImage";

type GalleryImageCardProps = {
  index: number;
  title: string;
  category: string;
  caption?: string;
};

export default function GalleryImageCard({ index, title, category, caption }: GalleryImageCardProps) {
  return (
    <PlaceholderImage
      title={title}
      category={category}
      caption={caption}
      imageSrc={`/images/gallery/gallery-${index}.webp`}
    />
  );
}
