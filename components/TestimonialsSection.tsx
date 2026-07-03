"use client";

import { useState } from "react";
import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";

const testimonials = [
  {
    quote:
      "Visiting Suhaai in Pakistan was unforgettable. I saw firsthand how Aijaz and the team are helping girls in remote communities access education, essentials, and hope for a brighter future.",
    fullQuote:
      "I recently had the incredible privilege of visiting the Suhaai organization in Pakistan, and I am genuinely blown away by the work being done there. Aijaz is doing a truly phenomenal job providing not just a proper education, but also daily essentials for students who are in remote areas and deeply in need. During my visit, I got to see firsthand the village where Aijaz is dedicating his energy to helping young girls access the quality education they deserve. Seeing their bright faces and eagerness to learn was unforgettable. Organizations like Suhaai are literally changing the trajectory of these communities. If anyone is looking to make a real, tangible impact, I highly encourage you to support Suhaii. Whether through resources, funding, or spreading the word, every bit of help ensures these girls can keep learning and building a brighter future.",
    name: "MAHDI MOHAMMAD",
    role: "Visitor | Content creator & Traveler",
    initials: "MM",
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
      <path d="M9 20v-5.5a3 3 0 0 1 6 0V20" />
      <path d="M4.5 20v-7a4 4 0 0 1 4-4h7a4 4 0 0 1 4 4v7" />
      <path d="M9 6.5a3 3 0 1 0 6 0 3 3 0 0 0-6 0Z" />
    </>
  ),
  teacher: (
    <>
      <path d="M4 5.5h11a3 3 0 0 1 3 3v9H7a3 3 0 0 1-3-3v-9Z" />
      <path d="M7 9h7" />
      <path d="M7 12h5" />
      <path d="M18 8.5h2v11H8" />
    </>
  )
};

export default function TestimonialsSection() {
  const [activeTestimonial, setActiveTestimonial] = useState<
    (typeof testimonials)[number] | null
  >(null);

  return (
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

              {testimonial.fullQuote ? (
                <button
                  type="button"
                  className="mt-5 self-start text-sm font-black text-suhaai-green underline decoration-suhaai-gold decoration-2 underline-offset-4 transition hover:text-suhaai-gold focus:outline-none focus:ring-2 focus:ring-suhaai-gold focus:ring-offset-2"
                  onClick={() => setActiveTestimonial(testimonial)}
                >
                  Read more
                </button>
              ) : null}

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

      {activeTestimonial ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-suhaai-green/70 px-4 py-8"
          role="dialog"
          aria-modal="true"
          aria-labelledby="testimonial-modal-title"
          onClick={() => setActiveTestimonial(null)}
        >
          <div
            className="max-h-[88vh] w-full max-w-2xl overflow-y-auto rounded-[1.5rem] bg-white p-6 shadow-[0_24px_70px_rgba(18,53,91,0.28)] md:p-8"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p
                  id="testimonial-modal-title"
                  className="text-xl font-black text-suhaai-green"
                >
                  {activeTestimonial.name}
                </p>
                <p className="mt-1 text-xs font-black uppercase tracking-[0.18em] text-suhaai-gold">
                  {activeTestimonial.role}
                </p>
              </div>
              <button
                type="button"
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-suhaai-gold/35 text-xl font-black text-suhaai-green transition hover:bg-suhaai-cream focus:outline-none focus:ring-2 focus:ring-suhaai-gold focus:ring-offset-2"
                aria-label="Close full feedback"
                onClick={() => setActiveTestimonial(null)}
              >
                &times;
              </button>
            </div>
            <p className="mt-6 text-base font-semibold leading-8 text-suhaai-ink/80">
              {activeTestimonial.fullQuote}
            </p>
          </div>
        </div>
      ) : null}
    </section>
  );
}
