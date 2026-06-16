import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Support Us",
  description: "Support Suhaai by helping with books, stationery, teacher salaries, transport, classroom resources, and digital learning tools."
};

const supportOptions = [
  {
    title: "Sponsor Books & Stationery",
    text: "Help students get notebooks, pencils, pens, school bags, and learning materials.",
    image: "/images/support/books-stationery.webp"
  },
  {
    title: "Support Teacher Salaries",
    text: "Help us continue regular teaching support for students.",
    image: "/images/support/teacher-salaries.webp"
  },
  {
    title: "Support Transport",
    text: "Help students travel safely to and from tuition classes.",
    image: "/images/support/transport.webp"
  },
  {
    title: "Support Classroom Resources",
    text: "Help us arrange whiteboards, chairs, mats, fans, lights, projector, and other learning tools.",
    image: "/images/support/classroom-resources.webp"
  },
  {
    title: "Sponsor a Student",
    text: "Support one student's learning journey through monthly educational assistance.",
    image: "/images/support/sponsor-student.webp"
  },
  {
    title: "Support Digital Learning Tools",
    text: "Help students access better learning through digital tools, projector-based learning, and educational technology.",
    image: "/images/support/digital-learning.webp"
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
              <article
                key={item.title}
                className="group overflow-hidden rounded-3xl border border-amber-100 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:border-suhaai-gold/70 hover:shadow-[0_22px_55px_rgba(18,53,91,0.11)]"
              >
                <div className="relative h-48 overflow-hidden bg-suhaai-cream">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-suhaai-green/25 via-transparent to-transparent" />
                </div>
                <div className="p-7">
                  <h3 className="text-2xl font-black leading-tight text-suhaai-green">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-base leading-8 text-suhaai-ink/72">
                    {item.text}
                  </p>
                </div>
              </article>
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
          <Link href="/contact" className="mt-8 inline-flex rounded-full bg-suhaai-gold px-7 py-4 text-sm font-black text-suhaai-green shadow-sm transition duration-300 hover:-translate-y-1 hover:bg-[#e2a92f] hover:shadow-[0_16px_34px_rgba(244,185,66,0.28)] focus:outline-none focus:ring-2 focus:ring-suhaai-gold focus:ring-offset-2">
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
