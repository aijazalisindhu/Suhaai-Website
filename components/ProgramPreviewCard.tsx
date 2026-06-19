import Image from "next/image";

type ProgramIcon = "book" | "girls" | "transport" | "circles" | "science" | "resources";

type ProgramPreviewCardProps = {
  icon: ProgramIcon;
  imageSrc: string;
  imageAlt: string;
  title: string;
  text: string;
};

export default function ProgramPreviewCard({
  imageSrc,
  imageAlt,
  title,
  text
}: ProgramPreviewCardProps) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-amber-100 bg-white/90 shadow-sm transition duration-300 hover:-translate-y-1.5 hover:border-suhaai-gold/70 hover:shadow-[0_22px_60px_rgba(18,53,91,0.12)]">
      <div className="relative h-44 overflow-hidden bg-suhaai-cream">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
          className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
          loading="lazy"
        />
      </div>
      <div className="flex flex-1 flex-col p-6 md:p-7">
        <h3 className="text-xl font-black text-suhaai-green">{title}</h3>
        <p className="mt-3 text-sm leading-7 text-suhaai-ink/72 md:text-base">
          {text}
        </p>
      </div>
    </article>
  );
}
