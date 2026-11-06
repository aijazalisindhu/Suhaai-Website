import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
export const metadata: Metadata = {
  title: "Privacy", description: "How Suhaai handles contact messages and feedback submitted through this website.", alternates: { canonical: "/privacy" }
};
export default function PrivacyPage() {
  return <>
    <PageHero title="Privacy Policy" description="How we handle the information you share with Suhaai." />
    <section className="section-padding bg-white"><div className="container-shell max-w-3xl space-y-8 text-suhaai-ink/85">
      <p className="font-bold text-suhaai-green">Updated: November 2026</p>
      <div><h2 className="text-2xl font-bold text-suhaai-green">Messages and Feedback</h2><p className="mt-3 leading-8">The contact form asks for your name, email address, and message. The feedback form also asks for your role or relationship with Suhaai and accepts an email address or WhatsApp number. These details are emailed to Suhaai to respond to enquiries and review feedback.</p></div>
      <div><h2 className="text-2xl font-bold text-suhaai-green">Who Reads Your Messages</h2><p className="mt-3 leading-8">Within Suhaai, submitted messages are read by one designated person who manages these enquiries. Messages are retained in the email inbox; there is currently no fixed deletion period.</p></div>
      <div><h2 className="text-2xl font-bold text-suhaai-green">Publishing Feedback</h2><p className="mt-3 leading-8">You can choose whether Suhaai may publish your feedback, name, and role as a testimonial. This choice is optional. Feedback is reviewed before publication and is never published automatically. Your email address or WhatsApp number is not part of a public testimonial.</p></div>
      <div><h2 className="text-2xl font-bold text-suhaai-green">Spam Prevention and Service Providers</h2><p className="mt-3 leading-8">The website uses submission timing, a hidden spam-check field, and temporary IP-based request limits to reduce spam. Hosting and email providers process information needed to operate these services.</p></div>
      <div><h2 className="text-2xl font-bold text-suhaai-green">External Services</h2><p className="mt-3 leading-8">The site includes Google Maps and YouTube embeds and links to WhatsApp, Facebook, and email. When you load embedded content or use those services, their own privacy practices apply.</p></div>
      <div><h2 className="text-2xl font-bold text-suhaai-green">Questions or Removal Requests</h2><p className="mt-3 leading-8">Contact <a href="mailto:suhaaisindh@gmail.com" className="break-all underline underline-offset-4">suhaaisindh@gmail.com</a> to ask about your message, request deletion, or withdraw permission for a testimonial.</p></div>
    </div></section>
  </>;
}
