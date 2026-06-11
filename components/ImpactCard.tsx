import type { ReactNode } from "react";

type ImpactIcon = "education" | "girls" | "transport" | "community";

type ImpactCardProps = {
  icon: ImpactIcon;
  metric: string;
  title: string;
  text: string;
};

const iconPaths: Record<ImpactIcon, ReactNode> = {
  education: (
    <>
      <path d="M4 9.5L12 5l8 4.5-8 4.5L4 9.5Z" />
      <path d="M7 12v4.2c1.35 1.1 3 1.65 5 1.65s3.65-.55 5-1.65V12" />
      <path d="M20 10v5" />
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
      <path d="M19.5 10.5h1.5" />
    </>
  ),
  community: (
    <>
      <circle cx="12" cy="7" r="3" />
      <path d="M6.5 19c.8-3 2.65-4.5 5.5-4.5S16.7 16 17.5 19" />
      <circle cx="5.5" cy="10" r="2.2" />
      <circle cx="18.5" cy="10" r="2.2" />
      <path d="M2.5 18c.45-2 1.55-3.2 3.3-3.6" />
      <path d="M21.5 18c-.45-2-1.55-3.2-3.3-3.6" />
    </>
  )
};

export default function ImpactCard({ icon, metric, title, text }: ImpactCardProps) {
  return (
    <article className="group rounded-2xl border border-amber-100 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1.5 hover:shadow-[0_22px_60px_rgba(244,185,66,0.18)]">
      <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-suhaai-cream text-suhaai-green ring-1 ring-amber-200 transition duration-300 group-hover:bg-suhaai-gold group-hover:text-suhaai-green">
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
          {iconPaths[icon]}
        </svg>
      </span>
      <p className="mt-6 text-sm font-black uppercase tracking-[0.16em] text-suhaai-gold">
        {metric}
      </p>
      <h3 className="mt-3 text-xl font-extrabold text-suhaai-green">{title}</h3>
      <p className="mt-4 text-sm leading-7 text-suhaai-ink/70">{text}</p>
    </article>
  );
}
