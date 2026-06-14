import Image from "next/image";

type PlaceholderImageProps = {
  title: string;
  category?: string;
  imageSrc?: string;
  imageClassName?: string;
  onImageError?: () => void;
  variant?: "hero" | "card";
};

export default function PlaceholderImage({
  title,
  category = "Suhaai Learning",
  imageSrc,
  imageClassName = "",
  onImageError,
  variant = "card"
}: PlaceholderImageProps) {
  return (
    <div
      className={`group relative overflow-hidden rounded-3xl border border-amber-100 bg-suhaai-cream shadow-soft transition duration-300 hover:-translate-y-1 hover:border-suhaai-gold/70 hover:shadow-[0_24px_60px_rgba(18,53,91,0.18)] ${
        variant === "hero" ? "min-h-[420px]" : "aspect-[4/3]"
      }`}
    >
      {imageSrc ? (
        <Image
          src={imageSrc}
          alt={title}
          fill
          unoptimized
          sizes={variant === "hero" ? "(min-width: 1024px) 44vw, 100vw" : "(min-width: 1024px) 33vw, 100vw"}
          className={`absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-[1.04] group-hover:saturate-[1.08] ${imageClassName}`}
          priority={variant === "hero"}
          onError={onImageError}
        />
      ) : (
        <>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(248,215,124,0.9),transparent_28%),linear-gradient(135deg,#FFF7E6,#FFFFFF_45%,#E8F3EC)]" />
          <div className="absolute left-8 top-24 grid grid-cols-3 gap-3">
            {[0, 1, 2].map((item) => (
              <div key={item} className="h-24 w-16 rounded-t-full bg-white/80 shadow-md">
                <div className="mx-auto mt-4 h-8 w-8 rounded-full bg-suhaai-gold/80" />
                <div className="mx-auto mt-3 h-7 w-10 rounded-lg bg-suhaai-green/75" />
              </div>
            ))}
          </div>
          <div className="absolute right-8 top-24 h-36 w-32 rounded-2xl bg-white/85 p-4 shadow-md">
            <div className="h-3 w-16 rounded bg-suhaai-green/65" />
            <div className="mt-4 h-2 w-24 rounded bg-suhaai-gold/80" />
            <div className="mt-3 h-2 w-20 rounded bg-suhaai-gold/60" />
            <div className="mt-3 h-2 w-24 rounded bg-suhaai-gold/70" />
          </div>
        </>
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-suhaai-green/85 via-suhaai-green/20 to-transparent" />
      <div className="pointer-events-none absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100">
        <div className="absolute inset-0 bg-gradient-to-tr from-suhaai-gold/18 via-white/8 to-transparent" />
        <div className="absolute inset-0 rounded-3xl ring-2 ring-inset ring-suhaai-gold/55" />
      </div>
      <div className="absolute left-8 top-8 h-20 w-20 rounded-full bg-suhaai-gold/35 blur-2xl" />
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-suhaai-green/75 to-transparent" />
      <div className="absolute inset-x-8 bottom-8">
        <span className="rounded-full bg-white/90 px-3 py-1 text-xs font-bold uppercase tracking-[0.16em] text-suhaai-green">
          {category}
        </span>
        <h3 className="mt-3 text-2xl font-black text-white drop-shadow">{title}</h3>
      </div>
    </div>
  );
}
