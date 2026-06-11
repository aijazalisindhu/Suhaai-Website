import Link from "next/link";
import CTASection from "@/components/CTASection";
import HeroCarousel from "@/components/HeroCarousel";
import ImpactCard from "@/components/ImpactCard";
import InfoCard from "@/components/InfoCard";
import MissionImage from "@/components/MissionImage";
import PlaceholderImage from "@/components/PlaceholderImage";
import SectionHeading from "@/components/SectionHeading";
import { galleryItems, programs } from "@/data/site";

const impact = [
  {
    icon: "education" as const,
    metric: "Free Tuition Support",
    title: "Free Tuition",
    text: "Daily learning support for village students."
  },
  {
    icon: "girls" as const,
    metric: "205+ Students",
    title: "Girls' Education",
    text: "Encouraging girls to continue their studies with confidence."
  },
  {
    icon: "transport" as const,
    metric: "3 Free Rickshaws",
    title: "Free Transport",
    text: "Helping students travel safely and regularly to attend classes."
  },
  {
    icon: "community" as const,
    metric: "Village Community Support",
    title: "Community Support",
    text: "Building a culture of learning in Village 21 Dadh."
  }
];

export default function HomePage() {
  return (
    <>
      <HeroCarousel />

      <section className="section-padding bg-suhaai-soft">
        <div className="container-shell">
          <SectionHeading title="Our Growing Impact" />
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {impact.map((item) => (
              <ImpactCard
                key={item.title}
                icon={item.icon}
                metric={item.metric}
                title={item.title}
                text={item.text}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-suhaai-cream">
        <div className="container-shell grid items-center gap-10 lg:grid-cols-[0.9fr_1fr]">
          <MissionImage />
          <div>
            <SectionHeading align="left" title="Our Mission" />
            <div className="mt-6 space-y-4 text-base leading-8 text-suhaai-ink/78 md:text-lg md:leading-9">
              <p>
                Suhaai is working to make quality education accessible to girls in
                rural villages of Sindh, where many students are still unable to
                continue their studies due to social and financial barriers.
              </p>
              <p>
                We bring education directly into villages through qualified teachers,
                free tuition, transport support, learning resources, and safe learning
                environments where every child can learn with confidence.
              </p>
              <p className="border-l-4 border-suhaai-gold bg-white/60 px-5 py-4 text-lg font-black leading-8 text-suhaai-green shadow-sm md:text-xl">
                Education should never depend on distance, poverty, or gender.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-shell">
          <SectionHeading title="What We Do" />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {programs.map((program) => (
              <div key={program} className="rounded-2xl border border-amber-100 bg-white p-5 font-bold text-suhaai-green shadow-sm transition hover:-translate-y-1 hover:bg-suhaai-cream hover:shadow-soft">
                {program}
              </div>
            ))}
          </div>
          <div className="mt-9 text-center">
            <Link href="/our-work" className="inline-flex rounded-full bg-suhaai-gold px-7 py-4 text-sm font-black text-suhaai-green transition hover:-translate-y-1 hover:bg-suhaai-amber">
              Explore Our Programs
            </Link>
          </div>
        </div>
      </section>

      <CTASection
        title="Help Us Keep the Light of Education Alive"
        text="Your support can help provide books, stationery, classroom resources, transport, teacher support, and better learning opportunities for village girls."
        buttonLabel="Support Suhaai"
        href="/support-us"
      />

      <section className="section-padding bg-suhaai-soft">
        <div className="container-shell">
          <SectionHeading title="Moments from Suhaai" />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {galleryItems.slice(0, 6).map((item) => (
              <PlaceholderImage key={item.title} title={item.title} category={item.category} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-shell rounded-3xl bg-suhaai-cream p-8 text-center shadow-soft md:p-12">
          <h2 className="text-3xl font-black text-suhaai-green md:text-4xl">
            Become Part of Suhaai&apos;s Mission
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-suhaai-ink/75">
            Have a question, want to support us, or want to know more about our work?
            Contact Suhaai and join this educational journey.
          </p>
          <Link href="/contact" className="mt-8 inline-flex rounded-full bg-suhaai-gold px-7 py-4 text-sm font-black text-suhaai-green transition hover:-translate-y-1 hover:bg-suhaai-amber">
            Contact Us
          </Link>
        </div>
      </section>
    </>
  );
}
