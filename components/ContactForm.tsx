"use client";

import { FormEvent, useState } from "react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
    event.currentTarget.reset();
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-3xl border border-amber-100 bg-suhaai-soft p-6 shadow-sm md:p-7">
      <h3 className="text-2xl font-black text-suhaai-green">
        Send Us a Message
      </h3>

      <div className="mt-6 grid gap-5">
        <label className="grid gap-2 text-sm font-extrabold text-suhaai-green">
          Full Name
          <input
            className="rounded-2xl border border-amber-200 bg-white px-4 py-3 font-medium text-suhaai-ink outline-none transition duration-300 placeholder:text-suhaai-ink/38 focus:border-suhaai-gold focus:ring-4 focus:ring-amber-100"
            name="name"
            placeholder="Your full name"
            type="text"
            required
          />
        </label>

        <label className="grid gap-2 text-sm font-extrabold text-suhaai-green">
          Email Address
          <input
            className="rounded-2xl border border-amber-200 bg-white px-4 py-3 font-medium text-suhaai-ink outline-none transition duration-300 placeholder:text-suhaai-ink/38 focus:border-suhaai-gold focus:ring-4 focus:ring-amber-100"
            name="email"
            placeholder="you@example.com"
            type="email"
            required
          />
        </label>

        <label className="grid gap-2 text-sm font-extrabold text-suhaai-green">
          Message
          <textarea
            className="min-h-36 resize-y rounded-2xl border border-amber-200 bg-white px-4 py-3 font-medium text-suhaai-ink outline-none transition duration-300 placeholder:text-suhaai-ink/38 focus:border-suhaai-gold focus:ring-4 focus:ring-amber-100"
            name="message"
            placeholder="How would you like to connect with Suhaai?"
            required
          />
        </label>

        <button
          type="submit"
          className="inline-flex w-fit rounded-full bg-suhaai-green px-7 py-3 text-sm font-black text-white shadow-sm transition duration-300 hover:-translate-y-0.5 hover:bg-suhaai-gold hover:text-suhaai-green hover:shadow-[0_16px_34px_rgba(244,185,66,0.28)] focus:outline-none focus:ring-2 focus:ring-suhaai-gold focus:ring-offset-2"
        >
          Send Message
        </button>

        {submitted ? (
          <p className="rounded-2xl border border-suhaai-gold/35 bg-suhaai-gold/12 px-4 py-3 text-sm font-bold text-suhaai-green">
            Thank you. Your message has been received.
          </p>
        ) : null}
      </div>
    </form>
  );
}
