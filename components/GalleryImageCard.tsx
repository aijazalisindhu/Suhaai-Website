import Image from "next/image";

const galleryObjectPositions = [
  "50% 42%",
  "50% 50%",
  "52% 42%",
  "50% 46%",
  "50% 44%",
  "50% 48%",
  "42% 50%",
  "50% 48%"
];

type GalleryImageCardProps = {
  index: number;
  title: string;
  category: string;
  caption?: string;
};

export default function GalleryImageCard({ index, title, category, caption }: GalleryImageCardProps) {
  const objectPosition = galleryObjectPositions[index - 1] ?? "50% 50%";

  return (
    <article className="group relative h-[360px] overflow-hidden rounded-3xl border border-amber-100 bg-suhaai-cream shadow-soft transition duration-300 hover:-translate-y-1 hover:border-suhaai-gold/70 hover:shadow-[0_22px_52px_rgba(18,53,91,0.2)] sm:h-[380px] lg:h-[400px]">
      <Image
        src={`/images/gallery/gallery-${index}.webp`}
        alt={title}
        fill
        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
        className="absolute inset-0 h-full w-full object-cover transition duration-500 ease-out group-hover:scale-[1.04] group-hover:saturate-[1.04]"
        style={{ objectPosition }}
      />
      <div className="gallery-card-overlay pointer-events-none absolute inset-0" />
      <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-inset ring-white/10 transition duration-300 group-hover:ring-suhaai-gold/45" />
      <div className="absolute inset-x-5 bottom-5 sm:inset-x-6 sm:bottom-6">
        <span className="gallery-card-badge inline-flex max-w-full rounded-full px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.14em]">
          {category}
        </span>
        <h3 className="gallery-card-title mt-3 text-[1.35rem] font-black leading-tight text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.55)] sm:text-2xl">
          {title}
        </h3>
        {caption ? (
          <p className="gallery-card-caption mt-2 text-sm font-semibold leading-5 text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.55)]">
            {caption}
          </p>
        ) : null}
      </div>
    </article>
  );
}
