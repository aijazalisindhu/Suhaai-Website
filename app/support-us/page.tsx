import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import { monthlyExpenses, monthlyExpenseTotal, formatPKR, reportingPeriod } from "@/data/operations";

export const metadata: Metadata = {
  alternates: { canonical: "/support-us" },
  title: "Support Us",
  description: "Support Suhaai by helping with books, stationery, teacher salaries, transport, classroom resources, and digital learning tools."
};

const supportOptions = [
  { title: "Transport Support", description: "Help girls travel to school and continue their education. Ask the team about current transport needs." },
  { title: "Books & Learning Materials", description: "Support the books, stationery, and learning resources students need in class." },
  { title: "Teachers & Classrooms", description: "Help sustain teaching support and improve the spaces where students learn." }
];

function whatsappLink(subject: string) {
  return `https://wa.me/923450122664?text=${encodeURIComponent(`Hello Suhaai, I would like to discuss ${subject}. Please share the current needs and how I can help.`)}`;
}

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

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {supportOptions.map((option) => (
              <article key={option.title} className="flex flex-col rounded-3xl border border-amber-100 bg-suhaai-cream p-7 shadow-sm">
                <h2 className="text-2xl font-black text-suhaai-green">{option.title}</h2>
                <p className="mt-4 flex-1 leading-7 text-suhaai-ink/75">{option.description}</p>
                <a href={whatsappLink(option.title)} target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex rounded-full bg-suhaai-gold px-5 py-3 text-sm font-bold text-suhaai-green focus:outline-none focus:ring-2 focus:ring-suhaai-green focus:ring-offset-2" aria-label={`Discuss ${option.title} on WhatsApp (opens in a new tab)`}>Discuss on WhatsApp</a>
              </article>
            ))}
          </div>

          <div className="mx-auto mt-10 max-w-3xl rounded-3xl border border-amber-100 bg-suhaai-cream p-7 text-center shadow-sm md:p-10">
            <h2 className="text-3xl font-black text-suhaai-green md:text-4xl">
              How to Support Suhaai
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-suhaai-ink/75">
              Choose an area you would like to support, then contact the team to
              confirm current needs, costs, and assistance details before contributing.
            </p>
            <Link href="/contact" className="mt-8 inline-flex rounded-full bg-suhaai-gold px-7 py-4 text-sm font-black text-suhaai-green shadow-sm transition duration-300 hover:-translate-y-1 hover:bg-[#e2a92f] hover:shadow-[0_16px_34px_rgba(244,185,66,0.28)] focus:outline-none focus:ring-2 focus:ring-suhaai-gold focus:ring-offset-2">
              Ask a Question
            </Link>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white"><div className="container-shell grid gap-6 md:grid-cols-2">
        <div className="rounded-3xl bg-suhaai-cream p-7"><h2 className="text-2xl font-bold text-suhaai-green">Donate Books &amp; Notebooks</h2><p className="mt-4 leading-7">We also accept direct donations of books and notebooks. Contact the team to discuss suitable materials and arrange delivery.</p><a href={whatsappLink("donating books or notebooks directly")} className="mt-5 inline-block font-bold text-suhaai-green underline underline-offset-4">Discuss a donation of materials</a></div>
        <div className="rounded-3xl bg-suhaai-cream p-7"><h2 className="text-2xl font-bold text-suhaai-green">Give Your Time &amp; Skills</h2><p className="mt-4 leading-7">Help with teaching, educational activities, study circles, or science activities.</p><Link href="/volunteer" className="mt-5 inline-block font-bold text-suhaai-green underline underline-offset-4">Explore volunteering</Link></div>
      </div></section>

      <section aria-labelledby="monthly-budget" className="section-padding bg-suhaai-cream">
        <div className="container-shell max-w-5xl">
          <h2 id="monthly-budget" className="text-3xl font-black text-suhaai-green md:text-4xl">What It Takes Each Month</h2>
          <p className="mt-3 text-sm font-bold text-suhaai-green">Budget update: {reportingPeriod}</p>
          <p className="mt-4 max-w-3xl leading-7 text-suhaai-ink/75">These monthly operating expenses support teaching, transport, learning materials, and the upkeep of Suhaai. This is the operating budget, not a statement of funds already raised or the remaining funding gap.</p>
          <div className="mt-8 rounded-3xl bg-suhaai-green p-7 text-white">
            <p className="text-sm font-bold uppercase tracking-widest text-suhaai-gold">Total monthly expenses</p>
            <p className="mt-3 text-4xl font-black">{formatPKR(monthlyExpenseTotal)}</p>
            <p className="mt-3 text-white/80">Including two assistant teachers at PKR 3,000 each.</p>
          </div>
          <dl className="mt-6 grid gap-4 sm:grid-cols-2">
            {monthlyExpenses.map((expense) => (
              <div key={expense.label} className="rounded-2xl border border-amber-100 bg-white p-5">
                <dt className="font-bold text-suhaai-green">{expense.label}</dt>
                <dd className="mt-2 text-xl font-black text-suhaai-green">{formatPKR(expense.quantity * expense.unitCost)}<span className="text-sm font-normal"> / month</span></dd>
                {expense.quantity > 1 ? <dd className="mt-1 text-sm text-suhaai-ink/70">{expense.quantity} × {formatPKR(expense.unitCost)} per month</dd> : null}
              </div>
            ))}
          </dl>
          <p className="mt-5 text-sm leading-7 text-suhaai-ink/75">Repairs cover fans, plumbing, electrical work, solar equipment, and other maintenance. Contact the team to confirm current funding needs and discuss a contribution.</p>
        </div>
      </section>

      <section className="section-padding bg-suhaai-cream">
        <div className="container-shell rounded-3xl bg-white p-8 text-center shadow-soft md:p-12">
          <h2 className="text-3xl font-black text-suhaai-green md:text-4xl">
            Talk to the Suhaai Team
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-suhaai-ink/75">
            Suhaai does not publish bank, mobile wallet, or other payment details on
            this website. Please contact the team directly for current guidance.
          </p>
          <a href={whatsappLink("supporting the education program")} target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex rounded-full bg-suhaai-gold px-7 py-4 text-sm font-black text-suhaai-green shadow-sm focus:outline-none focus:ring-2 focus:ring-suhaai-green focus:ring-offset-2">
            Discuss Support on WhatsApp
          </a>
          <p className="mx-auto mt-8 max-w-2xl text-base font-semibold leading-7 text-suhaai-green">
            Every contribution, small or large, helps keep the light of education alive
            for village girls.
          </p>
        </div>
      </section>
    </>
  );
}
