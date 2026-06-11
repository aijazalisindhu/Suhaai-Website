import type { ReactNode } from "react";

type WorkIcon = "book" | "bus" | "graduation" | "users" | "science" | "library";

type WorkProgramCardProps = {
  icon: WorkIcon;
  title: string;
  text: string;
};

const icons: Record<WorkIcon, ReactNode> = {
  book: (
    <>
      <path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v16H6.5A2.5 2.5 0 0 0 4 21.5v-16Z" />
      <path d="M4 18.5A2.5 2.5 0 0 1 6.5 16H20" />
      <path d="M8 7h7" />
    </>
  ),
  bus: (
    <>
      <path d="M6 4h12a3 3 0 0 1 3 3v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7a3 3 0 0 1 3-3Z" />
      <path d="M3 10h18" />
      <path d="M7 17v2" />
      <path d="M17 17v2" />
      <circle cx="7.5" cy="14" r="1" />
      <circle cx="16.5" cy="14" r="1" />
    </>
  ),
  graduation: (
    <>
      <path d="M3 8.5 12 4l9 4.5-9 4.5-9-4.5Z" />
      <path d="M7 11v4.5c1.4 1.2 3.05 1.8 5 1.8s3.6-.6 5-1.8V11" />
      <path d="M21 9v5" />
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
      <path d="M10 3v5.3l-5.2 8.8A2.5 2.5 0 0 0 6.95 21h10.1a2.5 2.5 0 0 0 2.15-3.9L14 8.3V3" />
      <path d="M8 15h8" />
      <path d="M9.5 18h5" />
    </>
  ),
  library: (
    <>
      <path d="M4 19V5a2 2 0 0 1 2-2h3v16H6a2 2 0 0 0-2 2Z" />
      <path d="M9 3h5v16H9" />
      <path d="M14 3h4a2 2 0 0 1 2 2v14h-6" />
      <path d="M6 7h1" />
      <path d="M16 8h2" />
    </>
  )
};

export default function WorkProgramCard({ icon, title, text }: WorkProgramCardProps) {
  return (
    <article className="group flex h-full flex-col rounded-3xl border border-amber-100 bg-gradient-to-br from-white via-white to-suhaai-cream/70 p-8 shadow-sm transition duration-300 hover:-translate-y-1.5 hover:border-suhaai-gold/70 hover:shadow-[0_24px_70px_rgba(18,53,91,0.13)] md:p-10">
      <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-suhaai-cream text-suhaai-green ring-1 ring-amber-200 transition duration-300 group-hover:bg-suhaai-gold">
        <svg
          aria-hidden="true"
          className="h-8 w-8"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.8"
          viewBox="0 0 24 24"
        >
          {icons[icon]}
        </svg>
      </span>
      <h3 className="mt-7 text-2xl font-black text-suhaai-green">{title}</h3>
      <p className="mt-4 flex-1 text-base leading-8 text-suhaai-ink/72">{text}</p>
      <a
        href="#support-programs"
        className="mt-6 inline-flex text-sm font-black text-suhaai-green transition group-hover:text-suhaai-gold"
      >
        Learn More &rarr;
      </a>
    </article>
  );
}
