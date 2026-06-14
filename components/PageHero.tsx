type PageHeroProps = {
  eyebrow?: string;
  title: string;
  description: string;
};

export default function PageHero({ eyebrow = "Suhaai", title, description }: PageHeroProps) {
  return (
    <section className="warm-grid bg-suhaai-cream">
      <div className="container-shell py-16 md:py-20">
        <p className="text-sm font-extrabold uppercase tracking-[0.22em] text-suhaai-gold">
          {eyebrow}
        </p>
        <h1 className="mt-4 max-w-3xl text-4xl font-black tracking-tight text-suhaai-green md:text-6xl">
          {title}
        </h1>
        <p className="mt-5 max-w-3xl text-lg leading-8 text-suhaai-ink/78">
          {description}
        </p>
      </div>
    </section>
  );
}
