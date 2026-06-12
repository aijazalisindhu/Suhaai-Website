import Link from "next/link";
import type { ReactNode } from "react";

type WorkIcon = "book" | "bus" | "graduation" | "users" | "science" | "library";

type WorkProgramCardProps = {
  title: string;
  text: string;
  icon: WorkIcon;
  href?: string;
};

const icons: Record<WorkIcon, ReactNode> = {
  book: (
    <>
      <path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H20v17H8.5A3.5 3.5 0 0 0 5 22V5.5Z" />
      <path d="M5 5.5A3.5 3.5 0 0 0 1.5 2H1v17h.5A3.5 3.5 0 0 1 5 22" />
      <path d="M9 6h7" />
      <path d="M9 10h6" />
    </>
  ),
  bus: (
    <>
      <path d="M5 5h14a2 2 0 0 1 2 2v9H3V7a2 2 0 0 1 2-2Z" />
      <path d="M6 16v2.5" />
      <path d="M18 16v2.5" />
      <circle cx="7.5" cy="19" r="1.5" />
      <circle cx="16.5" cy="19" r="1.5" />
      <path d="M3 10h18" />
    </>
  ),
  graduation: (
    <>
      <path d="M12 3 2 8l10 5 10-5-10-5Z" />
      <path d="M6 10.5V15c2.4 2 9.6 2 12 0v-4.5" />
      <path d="M22 8v6" />
    </>
  ),
  users: (
    <>
      <circle cx="9" cy="8" r="3" />
      <circle cx="17" cy="9" r="2.5" />
      <path d="M3.5 19c.75-3 2.6-4.5 5.5-4.5s4.75 1.5 5.5 4.5" />
      <path d="M14.5 15.2c2.25.25 3.75 1.5 4.5 3.8" />
    </>
  ),
  science: (
    <>
      <path d="M9 3h6" />
      <path d="M10 3v5l-5 9a3 3 0 0 0 2.6 4.5h8.8A3 3 0 0 0 19 17l-5-9V3" />
      <path d="M8 15h8" />
      <circle cx="10" cy="18" r=".5" />
      <circle cx="14" cy="17" r=".5" />
    </>
  ),
  library: (
    <>
      <path d="M4 19.5V5a2 2 0 0 1 2-2h12v18H6a2 2 0 0 1-2-1.5Z" />
      <path d="M8 7h6" />
      <path d="M8 11h7" />
      <path d="M8 15h5" />
    </>
  )
};

export default function WorkProgramCard({
  title,
  text,
  icon,
  href = "/support-us"
}: WorkProgramCardProps) {
  return (
    <article className="group flex h-full flex-col rounded-3xl border border-amber-100 bg-white/90 p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-suhaai-gold/70 hover:shadow-[0_22px_55px_rgba(18,53,91,0.11)] sm:p-10">
      <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl border border-suhaai-gold/45 bg-suhaai-gold/10 text-suhaai-green transition-all duration-300 group-hover:border-suhaai-gold group-hover:bg-suhaai-gold/15">
        <svg
          aria-hidden="true"
          className="h-6 w-6"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.8"
          viewBox="0 0 24 24"
        >
          {icons[icon]}
        </svg>
      </div>

      <div className="flex flex-1 flex-col">
        <h3 className="text-2xl font-extrabold leading-tight text-suhaai-green">
          {title}
        </h3>
        <p className="mt-5 flex-1 text-base leading-8 text-suhaai-ink/78">
          {text}
        </p>

        <Link
          href={href}
          className="mt-7 inline-flex w-fit items-center gap-2 rounded-full border border-suhaai-gold/50 bg-suhaai-green px-4 py-2 text-sm font-extrabold text-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-suhaai-gold hover:shadow-[0_12px_28px_rgba(244,185,66,0.24)] focus:outline-none focus:ring-2 focus:ring-suhaai-gold focus:ring-offset-2"
        >
          Learn More
          <span
            aria-hidden="true"
            className="transition-transform duration-300 group-hover:translate-x-0.5"
          >
            -&gt;
          </span>
        </Link>
      </div>
    </article>
  );
}
