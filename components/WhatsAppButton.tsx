import { socials } from "@/data/site";

export default function WhatsAppButton() {
  const whatsappHref = socials.find((social) => social.label === "WhatsApp")?.href ?? "https://wa.me/923450122664";

  return (
    <a
      href={whatsappHref}
      aria-label="Contact Suhaai on WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-soft transition hover:-translate-y-1 hover:bg-[#1EBA57] focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:ring-offset-2"
    >
      <svg
        aria-hidden="true"
        className="h-7 w-7"
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
  );
}
