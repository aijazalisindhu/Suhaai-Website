import type { ReactNode } from "react";

type ProgramIcon = "book" | "girls" | "transport" | "circles" | "science" | "resources";

type ProgramPreviewCardProps = {
  icon: ProgramIcon;
  title: string;
  text: string;
};

const icons: Record<ProgramIcon, ReactNode> = {
  book: (
    <>
      <path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v16H6.5A2.5 2.5 0 0 0 4 21.5v-16Z" />
      <path d="M4 18.5A2.5 2.5 0 0 1 6.5 16H20" />
      <path d="M8 7h7" />
    </>
  ),
  girls: (
    <>
      <circle cx="8.5" cy="8" r="3" />
      <circle cx="15.5" cy="8" r="3" />
      <path d="M3.5 19c.7-2.45 2.35-4 5-4s4.3 1.55 5 4" />
      <path d="M10.5 19c.7-2.45 2.35-4 5-4s4.3 1.55 5 4" />
    </>
  ),
  transport: (
    <>
      <path d="M5 15h13l1.5-4.5A3 3 0 0 0 16.65 7H8.2a3 3 0 0 0-2.85 2.05L4 13v2Z" />
      <path d="M7 15v-4h8.5" />
      <circle cx="7.5" cy="17.5" r="1.8" />
      <circle cx="17" cy="17.5" r="1.8" />
    </>
  ),
  circles: (
    <>
      <circle cx="12" cy="7" r="3" />
      <path d="M6.5 19c.8-3 2.65-4.5 5.5-4.5s4.7 1.5 5.5 4.5" />
      <circle cx="5.5" cy="10" r="2.2" />
      <circle cx="18.5" cy="10" r="2.2" />
    </>
  ),
  science: (
    <>
      <path d="M9 3h6" />
      <path d="M10 3v5.3l-5.2 8.8A2.5 2.5 0 0 0 6.95 21h10.1a2.5 2.5 0 0 0 2.15-3.9L14 8.3V3" />
      <path d="M8 15h8" />
    </>
  ),
  resources: (
    <>
      <path d="M4 19V5a2 2 0 0 1 2-2h3v16H6a2 2 0 0 0-2 2Z" />
      <path d="M9 3h5v16H9" />
      <path d="M14 3h4a2 2 0 0 1 2 2v14h-6" />
    </>
  )
};

export default function ProgramPreviewCard({ icon, title, text }: ProgramPreviewCardProps) {
  return (
    <article className="group flex h-full flex-col rounded-3xl border border-amber-100 bg-white/90 p-6 shadow-sm transition duration-300 hover:-translate-y-1.5 hover:border-suhaai-gold/70 hover:shadow-[0_22px_60px_rgba(18,53,91,0.12)] md:p-7">
      <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-suhaai-cream text-suhaai-green ring-1 ring-amber-200 transition duration-300 group-hover:bg-suhaai-gold">
        <svg
          aria-hidden="true"
          className="h-7 w-7"
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
      <h3 className="mt-6 text-xl font-black text-suhaai-green">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-suhaai-ink/72 md:text-base">
        {text}
      </p>
    </article>
  );
}
