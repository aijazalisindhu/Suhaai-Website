import Link from "next/link";

type CTASectionProps = {
  title: string;
  text: string;
  buttonLabel: string;
  href: string;
};

export default function CTASection({ title, text, buttonLabel, href }: CTASectionProps) {
  return (
    <section className="section-padding bg-suhaai-gold">
      <div className="container-shell text-center">
        <h2 className="mx-auto max-w-3xl text-3xl font-black tracking-tight text-suhaai-green md:text-5xl">
          {title}
        </h2>
        <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-suhaai-ink/78">{text}</p>
        <Link
          href={href}
          className="mt-8 inline-flex rounded-full bg-suhaai-green px-7 py-4 text-sm font-black text-white shadow-lg shadow-black/10 transition hover:-translate-y-1 hover:bg-suhaai-blue"
        >
          {buttonLabel}
        </Link>
      </div>
    </section>
  );
}
