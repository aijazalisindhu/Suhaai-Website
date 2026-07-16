"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const logoPaths = [
  "/images/logo.webp"
];

export default function Logo() {
  const [logoIndex, setLogoIndex] = useState(0);
  const [showImageLogo, setShowImageLogo] = useState(true);

  return (
    <Link href="/" className="group flex items-center gap-3" aria-label="Suhaai home">
      {showImageLogo ? (
        <Image
          key={logoPaths[logoIndex]}
          src={logoPaths[logoIndex]}
          alt="Suhaai logo"
          width={56}
          height={56}
          className="h-14 w-14 rounded-full bg-white object-cover shadow-md shadow-black/20 ring-2 ring-suhaai-gold/50 transition-transform group-hover:scale-105"
          onError={() => {
            if (logoIndex < logoPaths.length - 1) {
              setLogoIndex((currentIndex) => currentIndex + 1);
            } else {
              setShowImageLogo(false);
            }
          }}
        />
      ) : (
        <span className="flex h-11 w-11 items-center justify-center rounded-full bg-suhaai-gold text-lg font-black text-suhaai-green shadow-md shadow-black/20 transition-transform group-hover:scale-105">
          S
        </span>
      )}
      <span className="leading-tight">
        <span className="block text-xl font-extrabold tracking-tight text-white">
          Suhaai
        </span>
        <span className="block text-[11px] font-semibold uppercase tracking-[0.18em] text-suhaai-gold">
          Educate &bull; Empower &bull; Elevate
        </span>
      </span>
    </Link>
  );
}
