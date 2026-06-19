import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import FeedbackForm from "@/components/FeedbackForm";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Suhaai to ask questions, support the mission, or learn more about girls education work in Village 21 Dadh."
};

const location = "Village 21 Dadh, Sakrand, Sindh, Pakistan";
const email = "suhaaisindh@gmail.com";
const whatsappHref = "https://wa.me/923450122664";
const facebookHref = "https://www.facebook.com/SuhaaiSindh/";
const youtubeHref = "https://www.youtube.com/@SuhaaiSindh";
const mapLatitude = "26.1685556";
const mapLongitude = "68.2274167";
const mapSrc = `https://www.google.com/maps?q=${mapLatitude},${mapLongitude}&z=17&output=embed`;

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Contact Suhaai"
        description="Have a question, want to support us, or want to know more about our work? Contact Suhaai and become part of this educational mission."
      />

      <section className="section-padding bg-[radial-gradient(circle_at_top,rgba(244,185,66,0.16),transparent_34%),linear-gradient(180deg,#FFFDF8_0%,#FFF8ED_100%)]">
        <div className="container-shell">
          <div className="mx-auto grid max-w-6xl gap-8 rounded-3xl border border-amber-100 bg-white p-6 shadow-soft md:p-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-stretch">
            <div className="flex flex-col items-center justify-center rounded-3xl bg-suhaai-cream px-6 py-10 text-center ring-1 ring-amber-100 md:px-8">
              <span className="flex h-16 w-16 items-center justify-center rounded-full bg-suhaai-gold/15 text-suhaai-green ring-1 ring-suhaai-gold/45">
                <svg
                  aria-hidden="true"
                  className="h-8 w-8"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.8"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 21s7-5.1 7-11a7 7 0 0 0-14 0c0 5.9 7 11 7 11Z" />
                  <circle cx="12" cy="10" r="2.5" />
                </svg>
              </span>

              <h2 className="mt-5 text-3xl font-black text-suhaai-green md:text-4xl">
                Visit or Contact Suhaai
              </h2>
              <p className="mt-4 max-w-md text-base font-semibold leading-7 text-suhaai-ink/76 md:text-lg md:leading-8">
                {location}
              </p>

              <div className="mt-8 w-full overflow-hidden rounded-3xl border border-suhaai-gold/30 bg-white p-1.5 shadow-[0_16px_36px_rgba(18,53,91,0.10)]">
                <iframe
                  title="Map showing Village 21 Dadh, Sakrand, Sindh, Pakistan"
                  src={mapSrc}
                  className="h-[220px] w-full rounded-[1.25rem] border-0 md:h-[250px]"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              <div className="mt-8 flex items-center justify-center gap-4">
                <a
                  href={`mailto:${email}`}
                  aria-label="Email Suhaai"
                  className="flex h-14 w-14 items-center justify-center rounded-full border border-suhaai-gold/45 bg-suhaai-gold/15 text-suhaai-green shadow-sm transition duration-300 hover:-translate-y-0.5 hover:border-suhaai-gold hover:bg-suhaai-gold hover:shadow-[0_14px_30px_rgba(244,185,66,0.24)] focus:outline-none focus:ring-2 focus:ring-suhaai-gold focus:ring-offset-2"
                >
                  <svg
                    aria-hidden="true"
                    className="h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.9"
                    viewBox="0 0 24 24"
                  >
                    <path d="M4 6h16v12H4z" />
                    <path d="m4 7 8 6 8-6" />
                  </svg>
                </a>

                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Message Suhaai on WhatsApp"
                  className="flex h-14 w-14 items-center justify-center rounded-full border border-[#25D366]/40 bg-[#25D366] text-white shadow-sm transition duration-300 hover:-translate-y-0.5 hover:bg-[#1EBA57] hover:shadow-[0_14px_30px_rgba(37,211,102,0.24)] focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:ring-offset-2"
                >
                  <svg
                    aria-hidden="true"
                    className="h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.9"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5.2 18.8 6.3 15A7.2 7.2 0 1 1 9 17.7l-3.8 1.1Z" />
                    <path d="M9.4 8.7c.2-.4.4-.4.7-.4h.5c.2 0 .4.1.5.4l.6 1.4c.1.3.1.4-.1.6l-.4.5c.7 1.1 1.6 1.9 2.8 2.5l.5-.5c.2-.2.4-.2.6-.1l1.4.7c.3.1.4.3.4.6v.5c0 .4-.1.6-.4.8-.5.3-1 .5-1.6.4-3.1-.4-5.6-2.8-6.1-5.9-.1-.5.1-1 .4-1.5Z" />
                  </svg>
                </a>

                <a
                  href={facebookHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Open Suhaai Facebook page"
                  className="flex h-14 w-14 items-center justify-center rounded-full border border-[#1877F2]/35 bg-[#1877F2] text-white shadow-sm transition duration-300 hover:-translate-y-0.5 hover:bg-[#1466d8] hover:shadow-[0_14px_30px_rgba(24,119,242,0.24)] focus:outline-none focus:ring-2 focus:ring-[#1877F2] focus:ring-offset-2"
                >
                  <svg
                    aria-hidden="true"
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M14.2 8.1V6.7c0-.7.5-.9.9-.9h2.1V2.2L14.3 2c-3.1 0-5 1.9-5 5.3v.8H6v4h3.3V22h4.1v-9.9h3.2l.5-4h-3Z" />
                  </svg>
                </a>

                <a
                  href={youtubeHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Open Suhaai YouTube channel"
                  className="flex h-14 w-14 items-center justify-center rounded-full border border-[#FF0000]/35 bg-[#FF0000] text-white shadow-sm transition duration-300 hover:-translate-y-0.5 hover:bg-[#d90000] hover:shadow-[0_14px_30px_rgba(255,0,0,0.22)] focus:outline-none focus:ring-2 focus:ring-[#FF0000] focus:ring-offset-2"
                >
                  <svg
                    aria-hidden="true"
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M21.6 7.2a3 3 0 0 0-2.1-2.1C17.7 4.6 12 4.6 12 4.6s-5.7 0-7.5.5a3 3 0 0 0-2.1 2.1C2 9 2 12 2 12s0 3 .4 4.8a3 3 0 0 0 2.1 2.1c1.8.5 7.5.5 7.5.5s5.7 0 7.5-.5a3 3 0 0 0 2.1-2.1C22 15 22 12 22 12s0-3-.4-4.8ZM10 15.4V8.6l5.8 3.4L10 15.4Z" />
                  </svg>
                </a>
              </div>
            </div>

            <ContactForm />
          </div>
        </div>
      </section>

      <section id="feedback" className="section-padding bg-suhaai-cream">
        <div className="container-shell">
          <div className="mx-auto grid max-w-6xl items-center gap-8 lg:grid-cols-[0.85fr_1.15fr]">
            <div className="rounded-3xl bg-suhaai-green p-7 text-white shadow-soft md:p-9">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-suhaai-gold">
                Voices of Support
              </p>
              <h2 className="mt-3 text-3xl font-black md:text-4xl">
                Share words that help Suhaai improve and grow
              </h2>
              <p className="mt-5 text-base font-semibold leading-8 text-suhaai-cream/86">
                Feedback is sent privately to the Suhaai team. Selected approved
                testimonials may be displayed later, but nothing is published
                automatically.
              </p>
            </div>

            <FeedbackForm />
          </div>
        </div>
      </section>
    </>
  );
}
