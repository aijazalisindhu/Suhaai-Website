import { socials } from "@/data/site";

export default function WhatsAppButton() {
  const whatsappHref = socials.find((social) => social.label === "WhatsApp")?.href ?? "https://wa.me/923450122664";

  return (
    <a
      href={whatsappHref}
      aria-label="Contact Suhaai on WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-suhaai-accent text-sm font-black text-white shadow-soft transition hover:-translate-y-1 hover:bg-suhaai-green"
    >
      WA
    </a>
  );
}
