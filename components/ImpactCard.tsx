import Image from "next/image";

type ImpactIcon = "education" | "girls" | "transport" | "community";

type ImpactCardProps = {
  icon: ImpactIcon;
  imageSrc: string;
  imageAlt: string;
  metric: string;
  title: string;
  text: string;
};

export default function ImpactCard({
  imageSrc,
  imageAlt,
  metric,
  title,
  text
}: ImpactCardProps) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-amber-100 bg-white shadow-sm transition duration-300 hover:-translate-y-1.5 hover:shadow-[0_22px_60px_rgba(244,185,66,0.18)]">
      <div className="relative h-36 overflow-hidden bg-suhaai-cream">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          sizes="(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 100vw"
          className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
          loading="lazy"
        />
      </div>
      <div className="flex flex-1 flex-col p-7">
        <p className="text-sm font-black uppercase tracking-[0.16em] text-suhaai-gold">
          {metric}
        </p>
        <h3 className="mt-3 text-xl font-extrabold text-suhaai-green">{title}</h3>
        <p className="mt-4 text-sm leading-7 text-suhaai-ink/70">{text}</p>
      </div>
    </article>
  );
}
