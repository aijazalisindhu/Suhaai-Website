"use client";

import { FormEvent, useState } from "react";

export default function FeedbackForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [statusMessage, setStatusMessage] = useState("");
  const [startedAt, setStartedAt] = useState(() => Date.now());

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    setStatus("sending");
    setStatusMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          type: "feedback",
          name: formData.get("name"),
          contact: formData.get("contact"),
          role: formData.get("role"),
          message: formData.get("message"),
          website: formData.get("website"),
          startedAt: formData.get("startedAt")
        })
      });

      const result = (await response.json()) as { message?: string };

      if (!response.ok) {
        throw new Error(result.message || "Feedback could not be sent.");
      }

      setStatus("sent");
      setStatusMessage(
        result.message || "Thank you. Your feedback has been sent for review."
      );
      form.reset();
      setStartedAt(Date.now());
    } catch (error) {
      setStatus("error");
      setStatusMessage(
        error instanceof Error
          ? error.message
          : "Feedback could not be sent right now. Please try again."
      );
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-3xl border border-amber-100 bg-white p-6 shadow-sm md:p-7"
    >
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.18em] text-suhaai-gold">
            Feedback
          </p>
          <h3 className="mt-2 text-2xl font-black text-suhaai-green">
            Share Your Feedback
          </h3>
        </div>
        <span className="rounded-full bg-suhaai-cream px-4 py-2 text-xs font-black uppercase tracking-[0.14em] text-suhaai-green ring-1 ring-amber-100">
          Reviewed before publishing
        </span>
      </div>

      <p className="mt-4 text-sm font-semibold leading-7 text-suhaai-ink/72">
        Your feedback will be sent privately to Suhaai for review. It will not appear
        publicly on the website unless it is selected and approved.
      </p>

      <div className="mt-6 grid gap-5">
        <input type="hidden" name="startedAt" value={startedAt} />
        <label className="sr-only" aria-hidden="true">
          Website
          <input
            name="website"
            type="text"
            tabIndex={-1}
            autoComplete="off"
          />
        </label>

        <label className="grid gap-2 text-sm font-extrabold text-suhaai-green">
          Full Name
          <input
            className="rounded-2xl border border-amber-200 bg-suhaai-soft px-4 py-3 font-medium text-suhaai-ink outline-none transition duration-300 placeholder:text-suhaai-ink/38 focus:border-suhaai-gold focus:ring-4 focus:ring-amber-100"
            name="name"
            placeholder="Your full name"
            type="text"
            required
          />
        </label>

        <label className="grid gap-2 text-sm font-extrabold text-suhaai-green">
          Email or WhatsApp
          <input
            className="rounded-2xl border border-amber-200 bg-suhaai-soft px-4 py-3 font-medium text-suhaai-ink outline-none transition duration-300 placeholder:text-suhaai-ink/38 focus:border-suhaai-gold focus:ring-4 focus:ring-amber-100"
            name="contact"
            placeholder="Email address or WhatsApp number"
            type="text"
            required
          />
        </label>

        <label className="grid gap-2 text-sm font-extrabold text-suhaai-green">
          Role / Relationship with Suhaai
          <input
            className="rounded-2xl border border-amber-200 bg-suhaai-soft px-4 py-3 font-medium text-suhaai-ink outline-none transition duration-300 placeholder:text-suhaai-ink/38 focus:border-suhaai-gold focus:ring-4 focus:ring-amber-100"
            name="role"
            placeholder="Donor, Parent, Teacher, Community Member"
            type="text"
            required
          />
        </label>

        <label className="grid gap-2 text-sm font-extrabold text-suhaai-green">
          Feedback Message
          <textarea
            className="min-h-36 resize-y rounded-2xl border border-amber-200 bg-suhaai-soft px-4 py-3 font-medium text-suhaai-ink outline-none transition duration-300 placeholder:text-suhaai-ink/38 focus:border-suhaai-gold focus:ring-4 focus:ring-amber-100"
            name="message"
            placeholder="Share your experience, suggestion, or words of support."
            required
          />
        </label>

        <button
          type="submit"
          disabled={status === "sending"}
          className="inline-flex w-fit rounded-full bg-suhaai-green px-7 py-3 text-sm font-black text-white shadow-sm transition duration-300 hover:-translate-y-0.5 hover:bg-suhaai-gold hover:text-suhaai-green hover:shadow-[0_16px_34px_rgba(244,185,66,0.28)] focus:outline-none focus:ring-2 focus:ring-suhaai-gold focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-65"
        >
          {status === "sending" ? "Sending..." : "Submit Feedback"}
        </button>

        {statusMessage ? (
          <p
            className={`rounded-2xl border px-4 py-3 text-sm font-bold ${
              status === "error"
                ? "border-red-200 bg-red-50 text-red-700"
                : "border-suhaai-gold/35 bg-suhaai-gold/12 text-suhaai-green"
            }`}
          >
            {statusMessage}
          </p>
        ) : null}
      </div>
    </form>
  );
}

