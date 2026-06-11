import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { futureFeatures } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Suhaai to ask questions, support the mission, or learn more about girls education work in Village 21 Dadh."
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Contact Suhaai"
        description="Have a question, want to support us, or want to know more about our work? Contact Suhaai and become part of this educational mission."
      />

      <section className="section-padding bg-white">
        <div className="container-shell grid gap-10 lg:grid-cols-[0.85fr_1fr]">
          <div className="rounded-3xl bg-suhaai-cream p-7 shadow-sm">
            <h2 className="text-2xl font-black text-suhaai-green">Contact Details</h2>
            <div className="mt-6 grid gap-5 text-sm leading-7 text-suhaai-ink/78">
              <p><strong className="text-suhaai-green">Location:</strong> Village 21 Dadh, Sakrand, Sindh, Pakistan</p>
              <p><strong className="text-suhaai-green">Email:</strong> aijazalisindhu@gmail.com</p>
              <p><strong className="text-suhaai-green">WhatsApp:</strong> Add WhatsApp number later</p>
              <p><strong className="text-suhaai-green">Facebook:</strong> Add Suhaai Facebook page link later</p>
            </div>
          </div>

          <form className="rounded-3xl border border-amber-100 bg-white p-7 shadow-soft">
            {/* Connect this frontend-only form to a backend, Formspree, Resend, or another form service later. */}
            <h2 className="text-2xl font-black text-suhaai-green">Send a Message</h2>
            <div className="mt-6 grid gap-5">
              <label className="grid gap-2 text-sm font-bold text-suhaai-green">
                Name
                <input className="rounded-2xl border border-amber-200 bg-suhaai-soft px-4 py-3 font-normal outline-none transition focus:border-suhaai-gold focus:ring-4 focus:ring-amber-100" type="text" name="name" placeholder="Your name" />
              </label>
              <label className="grid gap-2 text-sm font-bold text-suhaai-green">
                Email / Phone
                <input className="rounded-2xl border border-amber-200 bg-suhaai-soft px-4 py-3 font-normal outline-none transition focus:border-suhaai-gold focus:ring-4 focus:ring-amber-100" type="text" name="contact" placeholder="Your email or phone" />
              </label>
              <label className="grid gap-2 text-sm font-bold text-suhaai-green">
                Message
                <textarea className="min-h-36 rounded-2xl border border-amber-200 bg-suhaai-soft px-4 py-3 font-normal outline-none transition focus:border-suhaai-gold focus:ring-4 focus:ring-amber-100" name="message" placeholder="How would you like to connect with Suhaai?" />
              </label>
              <button type="button" className="rounded-full bg-suhaai-gold px-7 py-4 text-sm font-black text-suhaai-green transition hover:-translate-y-1 hover:bg-suhaai-amber">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </section>

      <section className="section-padding bg-suhaai-cream">
        <div className="container-shell">
          <h2 className="text-2xl font-black text-suhaai-green">Future-Ready Structure</h2>
          {/* These feature placeholders make it easier to add product modules and CMS-backed pages later. */}
          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {futureFeatures.map((feature) => (
              <span key={feature} className="rounded-2xl bg-white px-5 py-4 text-sm font-bold text-suhaai-green shadow-sm">
                {feature}
              </span>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
