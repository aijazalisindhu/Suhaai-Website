"use client";

import Image from "next/image";
import { useEffect, useId, useRef, useState } from "react";

const galleryObjectPositions = [
  "50% 42%",
  "50% 50%",
  "52% 42%",
  "50% 46%",
  "50% 44%",
  "50% 48%",
  "42% 50%",
  "50% 48%"
];

const galleryImageSizes = ["600px", "400px", "480px", "600px", "800px", "600px", "850px", "900px"];

type GalleryImageCardProps = {
  index: number;
  title: string;
  category: string;
};

export default function GalleryImageCard({ index, title, category }: GalleryImageCardProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const titleId = useId();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = previousOverflow; };
  }, [open]);

  function openImage() {
    dialogRef.current?.showModal();
    setOpen(true);
  }

  const objectPosition = galleryObjectPositions[index - 1] ?? "50% 50%";
  const imageSizes = galleryImageSizes[index - 1] ?? "600px";

  return (
    <>
    <article className="group relative h-[360px] overflow-hidden rounded-3xl border border-amber-100 bg-suhaai-cream shadow-soft transition duration-300 hover:-translate-y-1 hover:border-suhaai-gold/70 hover:shadow-[0_22px_52px_rgba(18,53,91,0.2)] sm:h-[380px] lg:h-[400px]">
      <Image
        src={`/images/gallery/gallery-${index}.webp`}
        alt={title}
        fill
        sizes={imageSizes}
        quality={90}
        className="absolute inset-0 h-full w-full object-cover transition duration-500 ease-out group-hover:scale-[1.04] group-hover:saturate-[1.04]"
        style={{ objectPosition }}
      />
      <div className="gallery-card-overlay pointer-events-none absolute inset-0" />
      <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-inset ring-white/10 transition duration-300 group-hover:ring-suhaai-gold/45" />
      <div className="absolute inset-x-5 bottom-5 sm:inset-x-6 sm:bottom-6">
        <span className="gallery-card-badge inline-flex max-w-full rounded-full px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.14em]">
          {category}
        </span>
        <h3 className="gallery-card-title mt-3 text-[1.35rem] font-black leading-tight text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.55)] sm:text-2xl">
          {title}
        </h3>
      </div>
      <button type="button" onClick={openImage}
        aria-label={`View full image: ${title}`} aria-haspopup="dialog"
        className="absolute inset-0 cursor-zoom-in rounded-3xl focus:outline-none focus:ring-4 focus:ring-inset focus:ring-suhaai-gold" />
    </article>
    <dialog ref={dialogRef} aria-labelledby={titleId}
      onClose={() => setOpen(false)}
      onClick={(event) => {
        if (event.target !== event.currentTarget) return;
        const bounds = event.currentTarget.getBoundingClientRect();
        if (event.clientX < bounds.left || event.clientX > bounds.right ||
            event.clientY < bounds.top || event.clientY > bounds.bottom) {
          event.currentTarget.close();
        }
      }}
      className="m-auto w-[calc(100%-2rem)] max-w-6xl max-h-[90dvh] overflow-auto rounded-2xl border border-white/20 bg-suhaai-green p-0 text-white shadow-2xl backdrop:bg-black/85">
      <div className="flex items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <h2 id={titleId} className="text-base font-bold sm:text-xl">{title}</h2>
        <button type="button" autoFocus onClick={() => dialogRef.current?.close()}
          aria-label="Close full image"
          className="flex min-h-11 shrink-0 items-center gap-2 rounded-full border border-white/40 px-4 font-bold hover:bg-white/15 focus:outline-none focus:ring-2 focus:ring-suhaai-gold">
          <span aria-hidden="true">×</span> Close
        </button>
      </div>
      {open ? <div className="relative h-[65dvh] bg-black sm:h-[72dvh]">
        <Image src={`/images/gallery/gallery-${index}.webp`} alt={title}
          fill unoptimized sizes="100vw" className="object-contain" />
      </div> : null}
      <p className="px-4 py-3 text-sm text-white/80 sm:px-6">{category}</p>
    </dialog>
    </>
  );
}
