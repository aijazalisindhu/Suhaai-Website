import Link from "next/link";
import CTASection from "@/components/CTASection";
import HeroCarousel from "@/components/HeroCarousel";
import InfoCard from "@/components/InfoCard";
import PlaceholderImage from "@/components/PlaceholderImage";
import SectionHeading from "@/components/SectionHeading";
import { galleryItems, programs } from "@/data/site";

const impact = [
  {
    title: "Free Tuition",
    text: "Daily learning support for village students."
  },
  {
    title: "Girls' Education",
    text: "Encouraging girls to continue their studies with confidence."
  },
  {
    title: "Free Transport",
    text: "Helping students travel safely and regularly to attend classes."
  },
  {
    title: "Community Support",
    text: "Building a culture of learning in Village 21 Dadh."
  }
];

export default function HomePage() {
  return (
    <>
      <HeroCarousel />

      <section className="section-padding bg-white">
        <div className="container-shell">
          <SectionHeading title="Our Growing Impact" />
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {impact.map((item) => (
              <InfoCard key={item.title} title={item.title} text={item.text} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-suhaai-cream">
        <div className="container-shell grid items-center gap-10 lg:grid-cols-[0.9fr_1fr]">
          <PlaceholderImage title="A supportive place to learn" category="Our mission" />
          <div>
            <SectionHeading align="left" title="Our Mission" />
            <p className="mt-6 text-lg leading-8 text-suhaai-ink/76">
              Suhaai aims to create a bright educational future for village girls by
              providing free tuition, free transport, guidance, learning resources,
              and a supportive environment where every child can learn, grow, and
              dream with confidence.
            </p>
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
