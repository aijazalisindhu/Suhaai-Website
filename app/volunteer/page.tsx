import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Volunteer", description: "Share your time and skills through teaching, educational activities, study circles, and science activities at Suhaai.",
  alternates: { canonical: "/volunteer" }
};
const opportunities = [
  { title: "Career Guidance & Soft Skills", text: "Offer career guidance and soft skills sessions for girls in Classes 9–12, online or in person. Share the topics you can cover and your availability so we can plan a suitable session together." },
  { title: "Teaching", text: "Help students understand school subjects, practise skills, and build confidence in their learning." },
  { title: "Educational Activities", text: "Bring learning to life through reading, creative exercises, and engaging educational sessions." },
  { title: "Study Circles", text: "Help facilitate small-group reading, discussion, and shared learning." },
  { title: "Science Activities", text: "Encourage curiosity through age-appropriate science demonstrations and practical learning activities." }
];
const message = "Hello Suhaai, I would like to volunteer. My area of interest is: __. My skills or teaching experience are: __. My available days and times are: __. Please let me know how I can help.";
export default function VolunteerPage() {
  return <>
    <PageHero title="Volunteer with Suhaai" description="Share your time, knowledge, and curiosity to help village students learn." />
    <section className="section-padding bg-white"><div className="container-shell">
      <h2 className="text-3xl font-black text-suhaai-green">Ways You Can Help</h2>
      <div className="mt-8 grid gap-6 md:grid-cols-2">{opportunities.map((item) => <article key={item.title} className="rounded-3xl border border-amber-100 bg-suhaai-cream p-7"><h3 className="text-2xl font-bold text-suhaai-green">{item.title}</h3><p className="mt-4 leading-7 text-suhaai-ink/80">{item.text}</p></article>)}</div>
      <div className="mt-10 rounded-3xl bg-suhaai-green p-8 text-white">
        <h2 className="text-3xl font-black">Tell Us How You Would Like to Contribute</h2>
        <p className="mt-4 max-w-3xl leading-7">Share your area of interest, relevant experience, and available days and times. Include how long each session could be and whether you can help once or regularly. Contact Suhaai first to agree on suitable activities, session duration, and a schedule. Participation is voluntary: offer the time and skills you are comfortable sharing, and we will discuss arrangements together.</p>
        <div className="mt-6 flex flex-wrap gap-4">
          <a href={`https://wa.me/923450122664?text=${encodeURIComponent(message)}`} target="_blank" rel="noopener noreferrer" className="rounded-full bg-suhaai-gold px-6 py-3 font-bold text-suhaai-green focus:outline-none focus:ring-2 focus:ring-white">Discuss Volunteering on WhatsApp</a>
          <a href="mailto:suhaaisindh@gmail.com?subject=Volunteering%20with%20Suhaai" className="rounded-full border border-white px-6 py-3 font-bold focus:outline-none focus:ring-2 focus:ring-suhaai-gold">Email Suhaai</a>
        </div>
        <Link href="/contact" className="mt-6 inline-block underline underline-offset-4">View location and contact hours</Link>
      </div>
    </div></section>
  </>;
}
