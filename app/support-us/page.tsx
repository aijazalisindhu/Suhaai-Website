import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Support Us",
  description: "Support Suhaai by helping with books, stationery, teacher salaries, transport, classroom resources, and digital learning tools."
};

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

          <div className="mx-auto mt-10 max-w-3xl rounded-3xl border border-amber-100 bg-suhaai-cream p-7 text-center shadow-sm md:p-10">
            <h2 className="text-3xl font-black text-suhaai-green md:text-4xl">
              Contact Us
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-suhaai-ink/75">
              Please contact Suhaai directly to discuss assistance details and the
              current needs of the education program.
            </p>
            <Link href="/contact" className="mt-8 inline-flex rounded-full bg-suhaai-gold px-7 py-4 text-sm font-black text-suhaai-green shadow-sm transition duration-300 hover:-translate-y-1 hover:bg-[#e2a92f] hover:shadow-[0_16px_34px_rgba(244,185,66,0.28)] focus:outline-none focus:ring-2 focus:ring-suhaai-gold focus:ring-offset-2">
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      <section className="section-padding bg-suhaai-cream">
        <div className="container-shell rounded-3xl bg-white p-8 text-center shadow-soft md:p-12">
          <h2 className="text-3xl font-black text-suhaai-green md:text-4xl">
            Contact Suhaai for Assistance Details
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-suhaai-ink/75">
            Suhaai does not publish bank, mobile wallet, or other payment details on
            this website. Please contact the team directly for current guidance.
          </p>
          <Link href="/contact" className="mt-8 inline-flex rounded-full bg-suhaai-gold px-7 py-4 text-sm font-black text-suhaai-green shadow-sm transition duration-300 hover:-translate-y-1 hover:bg-[#e2a92f] hover:shadow-[0_16px_34px_rgba(244,185,66,0.28)] focus:outline-none focus:ring-2 focus:ring-suhaai-gold focus:ring-offset-2">
            Contact Us
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
