import Link from "next/link";
import CTASection from "@/components/CTASection";
import GalleryImageCard from "@/components/GalleryImageCard";
import HeroCarousel from "@/components/HeroCarousel";
import ImpactCard from "@/components/ImpactCard";
import InfoCard from "@/components/InfoCard";
import MissionImage from "@/components/MissionImage";
import PlaceholderImage from "@/components/PlaceholderImage";
import ProgramPreviewCard from "@/components/ProgramPreviewCard";
import SectionHeading from "@/components/SectionHeading";
import { galleryItems } from "@/data/site";

const impact = [
  {
    icon: "education" as const,
    imageSrc: "/images/home/impact-free-tuition.webp",
    imageAlt: "Students receiving free tuition support at Suhaai",
    metric: "Free Tuition Support",
    title: "Free Tuition",
    text: "Daily learning support for village students."
  },
  {
    icon: "girls" as const,
    imageSrc: "/images/home/impact-girls-education.webp",
    imageAlt: "Girls studying with confidence at Suhaai",
    metric: "300+ Students",
    title: "Girls' Education",
    text: "Encouraging girls to continue their studies with confidence."
  },
  {
    icon: "transport" as const,
    imageSrc: "/images/our-work/free-transport.webp",
    imageAlt: "Free transport support for Suhaai students",
    metric: "Free Rickshaws",
    title: "Free Transport",
    text: "Helping students travel safely and regularly to attend classes."
  },
  {
    icon: "community" as const,
    imageSrc: "/images/gallery/gallery-4.webp",
    imageAlt: "Community members supporting Suhaai learning work",
    metric: "Village Community Support",
    title: "Community Support",
    text: "Building a culture of learning in Village 21 Dadh."
  }
];

const programStats = [
  { value: "300+", label: "Students" },
  { value: "Free", label: "Transport Support" },
  { value: "Qualified", label: "Teachers" },
  { value: "Village-Based", label: "Education" }
];

const programPreviews = [
  {
    icon: "book" as const,
    imageSrc: "/images/home/home-free-tuition-classes.webp",
    imageAlt: "Free tuition class at Suhaai",
    title: "Free Tuition Classes",
    text: "Daily learning support that strengthens school confidence."
  },
  {
    icon: "girls" as const,
    imageSrc: "/images/home/home-girls-education-support.webp",
    imageAlt: "Girls' education support at Suhaai",
    title: "Girls' Education Support",
    text: "Helping girls continue learning with dignity and encouragement."
  },
  {
    icon: "transport" as const,
    imageSrc: "/images/home/home-free-transport-service.webp",
    imageAlt: "Free transport service for village students",
    title: "Free Transport Service",
    text: "Safe travel support so distance does not stop education."
  },
  {
    icon: "circles" as const,
    imageSrc: "/images/home/home-study-circles.webp",
    imageAlt: "Students learning together in a Suhaai study circle",
    title: "Study Circles",
    text: "Small groups for curiosity, discussion, and creative thinking."
  },
  {
    icon: "science" as const,
    imageSrc: "/images/home/home-science-ai-awareness.webp",
    imageAlt: "Student learning digital and future skills",
    title: "Science & AI Awareness",
    text: "Simple exposure to science, technology, and future skills."
  },
  {
    icon: "resources" as const,
    imageSrc: "/images/home/home-learning-resources.webp",
    imageAlt: "Learning resources and stationery for Suhaai students",
    title: "Learning Resources",
    text: "Books, stationery, and tools that make learning easier."
  }
];

const testimonials = [
  {
    quote:
      "Suhaai is creating a safe and hopeful learning space for girls who deserve every opportunity to continue their education.",
    name: "Ayesha Khan",
    role: "Donor",
    initials: "AK",
    icon: "donor" as const
  },
  {
    quote:
      "The free tuition and transport support have made learning more consistent for children in our village.",
    name: "Muhammad Ali",
    role: "Parent",
    initials: "MA",
    icon: "parent" as const
  },
  {
    quote:
      "Suhaai is building confidence, discipline, and curiosity among students through regular support and encouragement.",
    name: "Sadia Bano",
    role: "Teacher",
    initials: "SB",
    icon: "teacher" as const
  }
];

const testimonialIcons = {
  donor: (
    <>
      <path d="M12 20s-6.5-3.8-8.2-8.2C2.6 8.7 4.5 6 7.5 6c1.8 0 3.1 1 4.5 2.5C13.4 7 14.7 6 16.5 6c3 0 4.9 2.7 3.7 5.8C18.5 16.2 12 20 12 20Z" />
      <path d="M8.5 12.4h2.2l1.3-2.2 1.3 3.8 1.3-1.6h2.9" />
    </>
  ),
  parent: (
    <>
      <circle cx="8.3" cy="8.2" r="2.8" />
      <circle cx="15.7" cy="8.2" r="2.8" />
      <path d="M3.8 19c.7-2.8 2.2-4.2 4.5-4.2s3.8 1.4 4.5 4.2" />
      <path d="M11.2 19c.7-2.8 2.2-4.2 4.5-4.2s3.8 1.4 4.5 4.2" />
    </>
  ),
  teacher: (
    <>
      <path d="M5 5.5A2.5 2.5 0 0 1 7.5 3H19v16H7.5A2.5 2.5 0 0 0 5 21.5v-16Z" />
      <path d="M5 18.5A2.5 2.5 0 0 1 7.5 16H19" />
      <path d="M9 7h6" />
      <path d="M9 10h4" />
    </>
  )
};

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
                imageSrc={item.imageSrc}
                imageAlt={item.imageAlt}
                metric={item.metric}
                title={item.title}
                text={item.text}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding relative z-10 bg-suhaai-cream">
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

      <section className="section-padding bg-[radial-gradient(circle_at_top_left,rgba(244,185,66,0.18),transparent_34%),linear-gradient(180deg,#FFF8ED_0%,#FFFDF8_52%,#FFF8ED_100%)]">
        <div className="container-shell">
          <SectionHeading
            title="What We Do"
            description="Creating access to education, confidence, and opportunity for rural girls in Sindh."
          />

          <div className="mt-10 grid gap-4 md:grid-cols-4">
            {programStats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-3xl border border-amber-100 bg-white/85 px-5 py-6 text-center shadow-sm backdrop-blur transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(18,53,91,0.10)]"
              >
                <p className="text-3xl font-black leading-none text-suhaai-green md:text-4xl">
                  {stat.value}
                </p>
                <p className="mt-2 text-sm font-bold uppercase tracking-[0.14em] text-suhaai-ink/60">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 grid items-stretch gap-5 md:grid-cols-2 lg:grid-cols-3">
            {programPreviews.map((program) => (
              <ProgramPreviewCard
                key={program.title}
                icon={program.icon}
                imageSrc={program.imageSrc}
                imageAlt={program.imageAlt}
                title={program.title}
                text={program.text}
              />
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link href="/our-work" className="inline-flex rounded-full bg-suhaai-gold px-8 py-4 text-sm font-black text-suhaai-green shadow-soft transition duration-300 hover:-translate-y-1 hover:bg-[#e2a92f] hover:shadow-xl">
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

      <section className="section-padding bg-white">
        <div className="container-shell">
          <SectionHeading
            title="Voices of Support"
            description="Selected words from people who believe in Suhaai's mission. Feedback is reviewed before it is shared publicly."
          />

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {testimonials.map((testimonial) => (
              <article
                key={testimonial.name}
                className="relative flex h-full flex-col overflow-hidden rounded-[2rem] border border-suhaai-gold/24 bg-[#FFFDF8] p-6 shadow-[0_18px_45px_rgba(18,53,91,0.07)] transition duration-300 hover:-translate-y-1 hover:border-suhaai-gold/55 hover:shadow-[0_22px_55px_rgba(18,53,91,0.10)] md:p-7"
              >
                <div className="relative flex items-center gap-4">
                  <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full border-4 border-white bg-suhaai-cream text-xl font-black text-suhaai-green shadow-sm ring-1 ring-suhaai-gold/35">
                    {testimonial.initials}
                  </span>
                  <div className="min-w-0">
                    <p className="text-base font-black leading-6 text-suhaai-green md:text-lg">
                      {testimonial.name}
                    </p>
                    <p className="mt-1 flex items-center gap-2 text-xs font-black uppercase tracking-[0.18em] text-suhaai-gold">
                      <svg
                        aria-hidden="true"
                        className="h-3.5 w-3.5 shrink-0"
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.9"
                        viewBox="0 0 24 24"
                      >
                        {testimonialIcons[testimonial.icon]}
                      </svg>
                      {testimonial.role}
                    </p>
                  </div>
                </div>

                <blockquote className="mt-7 flex-1 text-base font-semibold leading-8 text-suhaai-ink/78">
                  {testimonial.quote}
                </blockquote>
                <div className="mt-7 h-1.5 w-16 rounded-full bg-suhaai-gold/70" />
              </article>
            ))}
          </div>

          <div className="mt-10 pb-4 text-center md:pb-6">
            <Link
              href="/contact#feedback"
              className="inline-flex rounded-full bg-suhaai-gold px-8 py-4 text-sm font-black text-suhaai-green shadow-soft transition duration-300 hover:-translate-y-1 hover:bg-[#e2a92f] hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-suhaai-gold focus:ring-offset-2"
            >
              Share Your Feedback
            </Link>
          </div>
        </div>
      </section>

      <section className="section-padding bg-suhaai-soft">
        <div className="container-shell">
          <SectionHeading title="Moments from Suhaai" />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {galleryItems.slice(0, 6).map((item, index) => (
              <GalleryImageCard
                key={item.title}
                index={index + 1}
                title={item.title}
                category={item.category}
              />
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
            <Link href="/contact" className="mt-8 inline-flex rounded-full bg-suhaai-gold px-7 py-4 text-sm font-black text-suhaai-green shadow-sm transition duration-300 hover:-translate-y-1 hover:bg-[#e2a92f] hover:shadow-[0_16px_34px_rgba(244,185,66,0.28)] focus:outline-none focus:ring-2 focus:ring-suhaai-gold focus:ring-offset-2">
              Contact Us
            </Link>
        </div>
      </section>
    </>
  );
}
