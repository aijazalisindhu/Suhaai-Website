import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";
import WorkProgramCard from "@/components/WorkProgramCard";

export const metadata: Metadata = {
  title: "Our Work",
  description: "Explore Suhaai programs including free tuition, free transport, girls education support, study circles, and learning resources."
};

const work = [
  {
    icon: "book" as const,
    title: "Free Tuition Classes",
    text: "Daily subject support that helps students strengthen English, Mathematics, Science, Sindhi, and school confidence.",
    image: "/Images/OurWork/free-tuition.webp"
  },
  {
    icon: "bus" as const,
    title: "Free Transport Service",
    text: "Safe transport support so distance does not stop girls from reaching class regularly.",
    image: "/Images/OurWork/free-transport.webp"
  },
  {
    icon: "graduation" as const,
    title: "Girls' Education Support",
    text: "Encouraging families and students to keep girls connected with learning after primary school.",
    image: "/Images/OurWork/girls-education.webp"
  },
  {
    icon: "users" as const,
    title: "Study Circles",
    text: "Small learning groups that build curiosity through discussion, awareness, and creative thinking.",
    image: "/Images/OurWork/study-circles.webp"
  },
  {
    icon: "science" as const,
    title: "Science & AI Awareness",
    text: "Simple, age-friendly exposure to science, technology, and AI for rural learners.",
    image: "/Images/OurWork/science-ai.webp"
  },
  {
    icon: "library" as const,
    title: "Learning Resources",
    text: "Books, stationery, classroom materials, and digital tools that make learning more accessible.",
    image: "/Images/OurWork/learning-resources.webp"
  }
];

type StatIcon = "students" | "transport" | "teachers" | "village";

const stats: Array<{ icon: StatIcon; value: string; label: string }> = [
  {
    icon: "students",
    value: "300+",
    label: "Students Supported"
  },
  {
    icon: "transport",
    value: "Free",
    label: "Transport Support"
  },
  {
    icon: "teachers",
    value: "Qualified",
    label: "Teachers"
  },
  {
    icon: "village",
    value: "Village",
    label: "Based Education"
  }
];

const statIcons: Record<StatIcon, ReactNode> = {
  students: (
    <>
      <circle cx="9" cy="8" r="3" />
      <circle cx="17" cy="9" r="2.5" />
      <path d="M3.5 19c.75-3 2.6-4.5 5.5-4.5s4.75 1.5 5.5 4.5" />
      <path d="M14.5 15.2c2.25.25 3.75 1.5 4.5 3.8" />
    </>
  ),
  transport: (
    <>
      <path d="M4 14h14l2-5H8.5A3.5 3.5 0 0 0 5.2 11.3L4 14Z" />
      <circle cx="7.5" cy="17" r="2" />
      <circle cx="17" cy="17" r="2" />
      <path d="M8 14v-4h6" />
    </>
  ),
  teachers: (
    <>
      <circle cx="8" cy="8" r="3" />
      <path d="M3.5 19c.7-3 2.2-4.5 4.5-4.5s3.8 1.5 4.5 4.5" />
      <path d="M14 6h6v8h-6z" />
      <path d="M15.5 9h3" />
      <path d="M15.5 11.5h2" />
    </>
  ),
  village: (
    <>
      <path d="M3 20h18" />
      <path d="M5 20V10l7-5 7 5v10" />
      <path d="M9 20v-6h6v6" />
      <path d="M8 10h.01" />
      <path d="M16 10h.01" />
    </>
  )
};

export default function OurWorkPage() {
  return (
    <>
      <section className="section-padding bg-[radial-gradient(circle_at_top_left,rgba(244,185,66,0.18),transparent_34%),linear-gradient(180deg,#FFF8ED_0%,#FFFDF8_52%,#FFF8ED_100%)]">
        <div className="container-shell">
          <SectionHeading
            title="Our Work"
            description="Creating access to education, confidence, and opportunity for rural girls in Sindh."
          />

          <div className="mt-12 grid gap-4 md:grid-cols-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-3xl border border-amber-100 bg-white/88 px-6 py-7 text-center shadow-sm backdrop-blur transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(18,53,91,0.10)]"
              >
                <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-suhaai-cream text-suhaai-green ring-1 ring-amber-200">
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
                    {statIcons[stat.icon]}
                  </svg>
                </span>
                <p className="mt-4 text-3xl font-black leading-none text-suhaai-green md:text-4xl">
                  {stat.value}
                </p>
                <p className="mt-2 text-sm font-bold uppercase tracking-[0.14em] text-suhaai-ink/60">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-16 grid items-stretch gap-7 lg:grid-cols-2">
            {work.map((item) => (
              <WorkProgramCard
                key={item.title}
                icon={item.icon}
                image={item.image}
                title={item.title}
                text={item.text}
              />
            ))}
          </div>
        </div>
      </section>

      <section id="support-programs" className="section-padding bg-suhaai-cream">
        <div className="container-shell text-center">
          <h2 className="text-3xl font-black text-suhaai-green md:text-4xl">
            Support These Programs
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-suhaai-ink/75">
            Your support can help us continue and expand these programs for village girls.
          </p>
          <Link href="/support-us" className="mt-8 inline-flex rounded-full bg-suhaai-gold px-7 py-4 text-sm font-black text-suhaai-green shadow-sm transition duration-300 hover:-translate-y-1 hover:bg-[#e2a92f] hover:shadow-[0_16px_34px_rgba(244,185,66,0.28)] focus:outline-none focus:ring-2 focus:ring-suhaai-gold focus:ring-offset-2">
            Support Suhaai
          </Link>
        </div>
      </section>
    </>
  );
}
