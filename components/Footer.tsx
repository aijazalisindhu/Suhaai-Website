import Link from "next/link";
import Logo from "@/components/Logo";
import { navLinks, socials } from "@/data/site";

export default function Footer() {
  return (
    <footer className="bg-suhaai-green text-white">
      <div className="container-shell grid gap-10 py-12 md:grid-cols-[1.4fr_0.8fr_0.8fr]">
        <div>
          <div className="inline-flex rounded-2xl bg-white/10 px-4 py-3 ring-1 ring-white/10">
            <Logo />
          </div>
          <p className="mt-5 max-w-xl text-sm leading-7 text-white/78">
            Suhaai is a community-based educational initiative working for girls&apos;
            education, free tuition, free transport, and learning support in Village
            21 Dadh, Sakrand.
          </p>
        </div>

        <div>
          <h2 className="text-sm font-bold uppercase tracking-[0.18em] text-suhaai-amber">
            Pages
          </h2>
          <div className="mt-4 grid gap-3">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="text-sm text-white/80 hover:text-suhaai-amber">
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-sm font-bold uppercase tracking-[0.18em] text-suhaai-amber">
            Social
          </h2>
          <div className="mt-4 grid gap-3">
            {socials.map((link) => (
              <a key={link.label} href={link.href} className="text-sm text-white/80 hover:text-suhaai-amber">
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-5">
        <p className="container-shell text-sm text-white/70">
          &copy; 2026 Suhaai. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
