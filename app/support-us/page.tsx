import type { Metadata } from "next";
import Link from "next/link";
import InfoCard from "@/components/InfoCard";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Support Us",
  description: "Support Suhaai by helping with books, stationery, teacher salaries, transport, classroom resources, and digital learning tools."
};

const supportOptions = [
  {
    title: "Sponsor Books & Stationery",
    text: "Help students get notebooks, pencils, pens, school bags, and learning materials."
  },
  {
    title: "Support Teacher Salaries",
    text: "Help us continue regular teaching support for students."
  },
  {
    title: "Support Transport",
    text: "Help students travel safely to and from tuition classes."
  },
  {
    title: "Support Classroom Resources",
    text: "Help us arrange whiteboards, chairs, mats, fans, lights, projector, and other learning tools."
  },
  {
    title: "Sponsor a Student",
    text: "Support one student's learning journey through monthly educational assistance."
  },
  {
    title: "Support Digital Learning Tools",
    text: "Help students access better learning through digital tools, projector-based learning, and educational technology."
  }
];

export default function SupportUsPage() {
  return (
    <>
      <PageHero
        title="Support Suhaai"
        description="Help Us Keep the Light of Education Alive"
      />

      <section className="section-padding bg-white">
        <div className="container-shell">
          <p className="mx-auto max-w-4xl text-center text-lg leading-8 text-suhaai-ink/76">
            Suhaai is working to bring the light of education to village girls. Your
            support can help us continue free tuition classes, provide free transport,
            support teachers, arrange learning materials, and improve classroom facilities.
          </p>

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {supportOptions.map((item) => (
              <InfoCard key={item.title} title={item.title} text={item.text} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-suhaai-cream">
        <div className="container-shell rounded-3xl bg-white p-8 text-center shadow-soft md:p-12">
          <h2 className="text-3xl font-black text-suhaai-green md:text-4xl">
            Donation & Support Details
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-suhaai-ink/75">
            For donation and support details, please contact us directly.
          </p>
          <Link href="/contact" className="mt-8 inline-flex rounded-full bg-suhaai-gold px-7 py-4 text-sm font-black text-suhaai-green transition hover:-translate-y-1 hover:bg-suhaai-amber">
            Contact to Support
          </Link>
          <p className="mx-auto mt-8 max-w-2xl text-base font-semibold leading-7 text-suhaai-green">
            Every contribution, small or large, helps keep the light of education alive
            for village girls.
          </p>
        </div>
      </section>
    </>
  );
}
