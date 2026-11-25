import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import { monthlyExpenses, monthlyExpenseTotal, formatPKR, reportingPeriod } from "@/data/operations";

export const metadata: Metadata = {
  alternates: { canonical: "/support-us" },
  title: "Support Us",
  description: "Support Suhaai monthly or annually through teaching, transport, reading books, science kits, digital learning, university support, and partnerships."
};

const supportOptions = [
  { title: "Teachers & Teaching Support", description: "Contribute towards our female teachers' salaries and the day-to-day teaching support that keeps students learning." },
  { title: "Sponsor a Rickshaw", description: "PKR 18,500 runs one rickshaw for one month. Support safe travel for students and teachers." },
  { title: "Stationery & Notebooks", description: "PKR 15,000 per month provides stationery and notebooks for students." }
];

const materialNeeds = [
  { title: "Library Reading Books", description: "Donate storybooks and reading books in Urdu, Sindhi, and English for our library. We are seeking reading books, not school textbooks: the girls already have their textbooks.", subject: "donating library storybooks and reading books" },
  { title: "Science Kits & Lab Equipment", description: "Help students explore science through practical activities. Support science kits and equipment for hands-on experiments and a science lab.", subject: "supporting science kits and lab equipment" },
  { title: "Multimedia Learning", description: "Support multimedia lessons, demonstrations, and educational sessions with a projector, laptops, and other learning equipment.", subject: "supporting multimedia learning" },
  { title: "Computer Lab", description: "Help establish a computer lab with working computers or laptops and the equipment needed for students to practise computer skills and explore digital learning.", subject: "supporting a computer lab" }
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

          <div className="mx-auto mt-8 max-w-4xl text-center">
            <h2 className="text-3xl font-black text-suhaai-green">Become a Monthly or Annual Supporter</h2>
            <p className="mt-4 leading-8 text-suhaai-ink/80">Help sustain teachers, transport, and learning materials with a monthly contribution or 12 months of support. You can contribute towards a cost or cover it in full. Contact us to agree on an amount and schedule that suit you.</p>
          </div>
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

      <section className="section-padding bg-suhaai-cream" aria-labelledby="learning-materials">
        <div className="container-shell">
          <h2 id="learning-materials" className="text-3xl font-black text-suhaai-green">Support Our Library, Science &amp; Digital Learning</h2>
          <p className="mt-4 max-w-3xl leading-8 text-suhaai-ink/80">If you would like to offer books or equipment, please contact us first to discuss suitable materials, working condition, and delivery arrangements.</p>
          <div className="mt-8 grid gap-6 md:grid-cols-2">{materialNeeds.map((need) => (
            <article key={need.title} className="flex flex-col rounded-3xl border border-amber-100 bg-white p-7">
              <h3 className="text-2xl font-bold text-suhaai-green">{need.title}</h3>
              <p className="mt-4 flex-1 leading-7 text-suhaai-ink/80">{need.description}</p>
              <a href={whatsappLink(need.subject)} className="mt-5 inline-block font-bold text-suhaai-green underline underline-offset-4" aria-label={`Discuss ${need.title} on WhatsApp`}>Discuss This Support</a>
            </article>
          ))}</div>
        </div>
      </section>

      <section className="section-padding bg-white" aria-labelledby="university-support">
        <div className="container-shell max-w-5xl rounded-3xl bg-suhaai-green p-8 text-white md:p-12">
          <p className="text-sm font-bold uppercase tracking-widest text-suhaai-gold">University Support</p>
          <h2 id="university-support" className="mt-3 text-3xl font-black md:text-4xl">Grow Our Own Teachers</h2>
          <p className="mt-5 max-w-3xl leading-8">Help girls continue to university by contributing towards fees, books, and travel costs. Through our Grow Our Own Teachers plan, we aim to help girls pursue higher education and create opportunities for them to become teachers in their own community.</p>
          <a href={whatsappLink("university fees, books, and travel through Grow Our Own Teachers")} className="mt-6 inline-flex rounded-full bg-suhaai-gold px-6 py-3 font-bold text-suhaai-green focus:outline-none focus:ring-2 focus:ring-white">Discuss University Support</a>
        </div>
      </section>

      <section className="section-padding bg-suhaai-cream"><div className="container-shell grid gap-6 md:grid-cols-2">
        <div className="rounded-3xl bg-white p-7"><h2 className="text-2xl font-bold text-suhaai-green">Career Guidance &amp; Soft Skills</h2><p className="mt-4 leading-7 text-suhaai-ink/80">Offer career guidance and soft skills sessions for girls in Classes 9–12. Sessions can be online or in person, with the topics and schedule agreed together. Teaching, study circles, educational activities, and science activities are also welcome.</p><Link href="/volunteer" className="mt-5 inline-block font-bold text-suhaai-green underline underline-offset-4">Explore Ways to Share Your Skills</Link></div>
        <div className="rounded-3xl bg-white p-7"><h2 className="text-2xl font-bold text-suhaai-green">Advice &amp; Introductions</h2><p className="mt-4 leading-7 text-suhaai-ink/80">Share advice or introduce Suhaai to CSR teams, education funders, and potential partners interested in girls&apos; education. A relevant introduction can help us explore support and partnerships.</p><a href={whatsappLink("sharing advice or introducing CSR teams, funders, and partners")} className="mt-5 inline-block font-bold text-suhaai-green underline underline-offset-4">Discuss an Introduction</a></div>
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
            Support is entirely voluntary. Choose what you would like to offer, whether
            funds, materials, time, advice, or an introduction. We discuss any offer
            with you first and agree on what works for both sides. We do not assume
            that anyone will provide goods or services free of charge.
          </p>
        </div>
      </section>
    </>
  );
}
