import type { Metadata } from "next";
import Link from "next/link";
import InfoCard from "@/components/InfoCard";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Our Work",
  description: "Explore Suhaai programs including free tuition, free transport, girls education support, study circles, and learning resources."
};

const work = [
  {
    title: "Free Tuition Classes",
    text: "Suhaai provides free tuition classes to students from different grades. Students receive support in English, Mathematics, Science, Sindhi, and other school subjects."
  },
  {
    title: "Free Transport Service",
    text: "Suhaai provides free transport support to help students travel safely and regularly to attend classes. This service helps improve attendance and makes education more accessible for village girls."
  },
  {
    title: "Girls' Education Support",
    text: "Suhaai especially focuses on girls' education by encouraging families and students to continue learning and stay connected with education."
  },
  {
    title: "Study Circles",
    text: "Study circles help students learn beyond textbooks through discussions, general knowledge, science, awareness, and creative thinking."
  },
  {
    title: "Science & AI Awareness",
    text: "Suhaai aims to introduce students to science, technology, and artificial intelligence in a simple and understandable way."
  },
  {
    title: "Learning Resources",
    text: "Suhaai works to provide books, stationery, classroom materials, library resources, and digital learning tools."
  }
];

export default function OurWorkPage() {
  return (
    <>
      <PageHero
        title="Our Work"
        description="Suhaai works to support village girls through education, guidance, safe access to learning, and community-based support."
      />

      <section className="section-padding bg-white">
        <div className="container-shell grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {work.map((item) => (
            <InfoCard key={item.title} title={item.title} text={item.text} />
          ))}
        </div>
      </section>

      <section className="section-padding bg-suhaai-cream">
        <div className="container-shell text-center">
          <h2 className="text-3xl font-black text-suhaai-green md:text-4xl">
            Support These Programs
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-suhaai-ink/75">
            Your support can help us continue and expand these programs for village girls.
          </p>
          <Link href="/support-us" className="mt-8 inline-flex rounded-full bg-suhaai-gold px-7 py-4 text-sm font-black text-suhaai-green transition hover:-translate-y-1 hover:bg-suhaai-amber">
            Support Suhaai
          </Link>
        </div>
      </section>
    </>
  );
}
