import { BookOpen } from "lucide-react";
import type { ComponentType, ReactNode, SVGProps } from "react";

type WorkProgramCardProps = {
  title: string;
  description: string;
  icon: ReactNode | ComponentType<SVGProps<SVGSVGElement>>;
  href?: string;
};

export function WorkProgramCard({
  title,
  description,
  icon: Icon,
  href = "/support-us",
}: WorkProgramCardProps) {
  const IconComponent = typeof Icon === "function" ? Icon : null;

  return (
    <article className="group flex h-full flex-col rounded-[28px] border border-gold/25 bg-white/90 p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-gold/70 hover:shadow-[0_22px_55px_rgba(18,53,91,0.11)] sm:p-10">
      <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl border border-gold/45 bg-gold/10 text-navy transition-all duration-300 group-hover:border-gold group-hover:bg-gold/15 group-hover:text-navy">
        {IconComponent ? (
          <IconComponent className="h-6 w-6" strokeWidth={2.2} aria-hidden="true" />
        ) : Icon ? (
          Icon
        ) : (
          <BookOpen className="h-6 w-6" strokeWidth={2.2} aria-hidden="true" />
        )}
      </div>

      <div className="flex flex-1 flex-col">
        <h3 className="text-2xl font-extrabold leading-tight text-navy">
          {title}
        </h3>
        <p className="mt-5 flex-1 text-base leading-8 text-text/78">
          {description}
        </p>

        <a
          href={href}
          className="mt-7 inline-flex w-fit items-center gap-2 rounded-full border border-gold/50 bg-navy px-4 py-2 text-sm font-extrabold text-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-gold hover:bg-navy hover:shadow-[0_12px_28px_rgba(244,185,66,0.24)] focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2"
        >
          Learn More
          <span
            aria-hidden="true"
            className="transition-transform duration-300 group-hover:translate-x-0.5"
          >
            →
          </span>
        </a>
      </div>
    </article>
  );
}
