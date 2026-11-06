type SectionHeadingProps = {
  as?: "h1" | "h2";
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export default function SectionHeading({
  as: Heading = "h2",
  eyebrow,
  title,
  description,
  align = "center"
}: SectionHeadingProps) {
  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {eyebrow ? (
        <p className="text-sm font-extrabold uppercase tracking-[0.2em] text-suhaai-gold">
          {eyebrow}
        </p>
      ) : null}
      <Heading className="mt-3 text-3xl font-black tracking-tight text-suhaai-green md:text-4xl">
        {title}
      </Heading>
      {description ? (
        <p className="mt-4 text-base leading-7 text-suhaai-ink/72 md:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}
