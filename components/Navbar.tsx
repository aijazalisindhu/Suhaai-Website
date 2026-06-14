"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Logo from "@/components/Logo";
import { navLinks } from "@/data/site";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-suhaai-green/95 backdrop-blur">
      <nav className="container-shell flex min-h-20 items-center justify-between gap-5">
        <Logo />

        <div className="hidden items-center gap-2 lg:flex">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-full px-4 py-2 text-sm font-bold transition duration-200 focus:outline-none focus:ring-2 focus:ring-suhaai-gold focus:ring-offset-2 focus:ring-offset-suhaai-green ${
                  isActive
                    ? "bg-white/10 text-suhaai-gold"
                    : "text-suhaai-cream/95 hover:bg-white/10 hover:text-suhaai-gold"
                }`}
                aria-current={isActive ? "page" : undefined}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        <div className="hidden items-center lg:flex">
          <Link
            href="/support-us"
            className="rounded-full bg-suhaai-gold px-5 py-3 text-sm font-black text-suhaai-green shadow-soft transition duration-200 hover:-translate-y-0.5 hover:bg-suhaai-amber focus:outline-none focus:ring-2 focus:ring-suhaai-amber focus:ring-offset-2 focus:ring-offset-suhaai-green"
          >
            Support Suhaai
          </Link>
        </div>

        <button
          type="button"
          aria-label="Open menu"
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/25 text-suhaai-cream transition hover:bg-white/10 hover:text-suhaai-gold focus:outline-none focus:ring-2 focus:ring-suhaai-gold focus:ring-offset-2 focus:ring-offset-suhaai-green lg:hidden"
        >
          <span className="sr-only">Menu</span>
          <span className="space-y-1.5">
            <span className={`block h-0.5 w-5 bg-current transition ${open ? "translate-y-2 rotate-45" : ""}`} />
            <span className={`block h-0.5 w-5 bg-current transition ${open ? "opacity-0" : ""}`} />
            <span className={`block h-0.5 w-5 bg-current transition ${open ? "-translate-y-2 -rotate-45" : ""}`} />
          </span>
        </button>
      </nav>

      {open ? (
        <div className="border-t border-white/10 bg-suhaai-green lg:hidden">
          <div className="container-shell grid gap-2 py-4">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`rounded-xl px-4 py-3 text-sm font-bold transition focus:outline-none focus:ring-2 focus:ring-suhaai-gold ${
                    isActive
                      ? "bg-white/10 text-suhaai-gold"
                      : "text-suhaai-cream/95 hover:bg-white/10 hover:text-suhaai-gold"
                  }`}
                  aria-current={isActive ? "page" : undefined}
                >
                  {link.label}
                </Link>
              );
            })}
            <Link
              href="/support-us"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full bg-suhaai-gold px-5 py-3 text-center text-sm font-black text-suhaai-green transition hover:bg-suhaai-amber focus:outline-none focus:ring-2 focus:ring-suhaai-amber"
            >
              Support Suhaai
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  );
}
