import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import { reportingPeriod, monthlyExpenseTotal, formatPKR } from "@/data/operations";
export const metadata: Metadata = {
  title: "Updates & Impact", description: "Suhaai's November 2026 impact update: student support, progress to college and university, transport, and monthly operating expenses.", alternates: { canonical: "/updates" }
};
export default function UpdatesPage() {
  return <>
    <PageHero title="Updates & Impact" description="Progress and operating information shared by the Suhaai team." />
    <section className="section-padding bg-white"><article className="container-shell max-w-4xl">
      <p className="font-bold uppercase tracking-widest text-suhaai-green">{reportingPeriod}</p>
      <h2 className="mt-4 text-3xl font-black text-suhaai-green">Learning, Access, and the Next Step</h2>
      <p className="mt-5 leading-8 text-suhaai-ink/80">Suhaai currently supports 300+ students. Where only 6 girls from the village previously attended city high school, 64+ now attend. Eighteen girls have reached college, and one girl is studying Data Science at Quaid-e-Awam University.</p>
      <p className="mt-4 leading-8 text-suhaai-ink/80">Three rickshaws support student travel, with one additional rickshaw for teachers. The all-female teaching team includes two English teachers, one Mathematics and Physics teacher, one Biology and Chemistry teacher, a junior teacher for Sindhi and Science for younger children, and two assistant teachers.</p>
      <div className="mt-8 rounded-3xl bg-suhaai-cream p-7"><h3 className="text-2xl font-bold text-suhaai-green">Monthly Operating Expenses</h3><p className="mt-3 text-3xl font-black text-suhaai-green">{formatPKR(monthlyExpenseTotal)}</p><p className="mt-3 leading-7">This covers teaching and support staff, student and teacher transport, notebooks, student support and prizes, and maintenance. It represents operating expenses, not funds raised.</p><Link href="/support-us#monthly-budget" className="mt-5 inline-block font-bold text-suhaai-green underline underline-offset-4">View the full expense breakdown</Link></div>
      <p className="mt-6 text-sm leading-7 text-suhaai-ink/75">Figures supplied by the Suhaai team for {reportingPeriod}. Suhaai has supported 300+ students since it began. All of these students are still studying, so the total supported to date and the current student count are both 300+.</p>
    </article></section>
  </>;
}
