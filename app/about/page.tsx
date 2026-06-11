import type { Metadata } from "next";
import InfoCard from "@/components/InfoCard";
import PageHero from "@/components/PageHero";
import PlaceholderImage from "@/components/PlaceholderImage";
import SectionHeading from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "About",
  description: "Learn about Suhaai, a village education initiative supporting girls in Village 21 Dadh, Sakrand."
};

const values = ["Education", "Empowerment", "Equality", "Confidence", "Community", "Hope"];

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="About Suhaai"
        description="Suhaai means light. It represents the light of education, hope, confidence, and empowerment for village children, especially girls."
      />

      <section className="section-padding bg-white">
        <div className="container-shell grid gap-10 lg:grid-cols-[1fr_0.9fr]">
          <div className="space-y-5 text-lg leading-8 text-suhaai-ink/76">
            <p>
              Suhaai Free Tuition is based in Village 21 Dadh, Sakrand. The
              initiative provides free tuition, free transport, educational support,
              and better learning opportunities to students who need guidance,
              encouragement, and access to quality learning.
            </p>
            <p>
              Our goal is not only to teach school subjects, but also to build
              confidence, curiosity, discipline, creativity, and awareness among
              students.
            </p>
          </div>
          <PlaceholderImage title="The light of education" category="About Suhaai" />
        </div>
      </section>

      <section className="section-padding bg-suhaai-cream">
        <div className="container-shell">
          <div className="grid gap-5 md:grid-cols-3">
            <InfoCard
              title="Our Story"
              text="Suhaai started with a simple belief: every girl deserves the chance to learn, grow, and dream. In rural communities, many girls face barriers such as lack of resources, transport, guidance, and educational support. Suhaai works to reduce these barriers through free tuition, safe transport support, and a caring learning environment."
            />
            <InfoCard
              title="Our Vision"
              text="To create an educated, confident, and empowered generation of village girls."
            />
            <InfoCard
              title="Our Mission"
              text="To provide free tuition, free transport, learning resources, educational guidance, and awareness opportunities to students in rural communities."
            />
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-shell">
          <SectionHeading title="Our Values" />
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {values.map((value) => (
              <span key={value} className="rounded-full border border-amber-200 bg-suhaai-cream px-5 py-3 text-sm font-black text-suhaai-green">
                {value}
              </span>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
