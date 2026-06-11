import IconBadge from "@/components/IconBadge";

type InfoCardProps = {
  title: string;
  text: string;
};

export default function InfoCard({ title, text }: InfoCardProps) {
  return (
    <article className="group rounded-2xl border border-amber-100 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-soft">
      <IconBadge label={title} />
      <h3 className="mt-5 text-xl font-extrabold text-suhaai-green">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-suhaai-ink/70">{text}</p>
    </article>
  );
}
