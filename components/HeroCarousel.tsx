"use client";

import { getImageProps } from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const slides = [
  {
    desktopImage: "/images/hero-1.webp",
    mobileImage: "/images/hero/mobile/mobile-hero-1.webp",
    alt: "Suhaai students learning together",
    heading: "Illuminating Futures. Empowering Girls.",
    description:
      "Suhaai is helping village girls continue their education with free tuition, guidance, and confidence.",
    position: "object-center md:object-[center_right]",
    contentClass: "left-[6%] right-[6%] top-[60%] max-w-[440px] md:left-[8%] md:right-auto md:top-[57%] md:max-w-[520px]",
    headingSize: "text-[34px] sm:text-[38px] md:text-[51px] lg:text-[55px]"
  },
  {
    desktopImage: "/images/hero-2.webp",
    mobileImage: "/images/hero/mobile/mobile-hero-2.webp",
    alt: "Village girls continuing education with Suhaai",
    heading: "Free Tuition for Village Girls",
    description:
      "Daily learning support in English, Mathematics, Science, Sindhi, and other school subjects.",
    position: "object-[64%_center] md:object-[60%_center]",
    contentClass: "left-[6%] right-[6%] top-[55%] max-w-[430px] md:left-[8%] md:right-auto md:top-[52%] md:max-w-[500px]",
    headingSize: "text-[36px] sm:text-[40px] md:text-[52px] lg:text-[56px]"
  },
  {
    desktopImage: "/images/hero-3.webp",
    mobileImage: "/images/hero/mobile/mobile-hero-3.webp",
    alt: "Suhaai classroom learning support",
    heading: "Learning with Confidence",
    description:
      "Creating a safe and supportive classroom environment where students can learn, grow, and dream.",
    position: "object-[70%_center] md:object-[62%_center]",
    contentClass: "left-[6%] right-[6%] top-[62%] max-w-[400px] md:left-[8%] md:right-auto md:top-[60%] md:max-w-[460px]",
    headingSize: "text-[34px] sm:text-[38px] md:text-[48px] lg:text-[52px]"
  },
  {
    desktopImage: "/images/hero-4.webp",
    mobileImage: "/images/hero/mobile/mobile-hero-4.webp",
    alt: "Suhaai education initiative activities",
    heading: "Safe & Free Transport Support",
    description:
      "Helping students travel safely and regularly so distance never becomes a barrier to education.",
    position: "object-[78%_center] md:object-[74%_center] lg:object-[72%_center]",
    contentClass: "left-[6%] right-[6%] top-[54%] max-w-[400px] md:left-[8%] md:right-auto md:top-[50%] md:max-w-[460px]",
    headingSize: "text-[34px] sm:text-[38px] md:text-[50px] lg:text-[54px]"
  }
];

const responsiveSlides = slides.map((slide) => ({
  ...slide,
  mobileProps: getImageProps({ src: slide.mobileImage, alt: slide.alt, fill: true, sizes: "100vw" }).props,
  desktopProps: getImageProps({ src: slide.desktopImage, alt: slide.alt, fill: true, sizes: "100vw" }).props
}));

export default function HeroCarousel() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [paused, setPaused] = useState(false);
  const [failedImages, setFailedImages] = useState<string[]>([]);
  const visibleSlides = responsiveSlides.filter(
    (slide) =>
      !failedImages.includes(slide.desktopImage) &&
      !failedImages.includes(slide.mobileImage)
  );
  const visibleIndex = visibleSlides.length ? activeSlide % visibleSlides.length : 0;
  const currentSlide = visibleSlides[visibleIndex] || slides[0];

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let timer: number | undefined;
    function updateTimer() {
      window.clearInterval(timer);
      if (paused || reducedMotion.matches) return;
      timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % Math.max(visibleSlides.length, 1));
      }, 5500);
    }
    updateTimer();
    reducedMotion.addEventListener("change", updateTimer);
    return () => {
      window.clearInterval(timer);
      reducedMotion.removeEventListener("change", updateTimer);
    };
  }, [visibleSlides.length, paused]);


  return (
    <section className="hero-carousel relative isolate min-h-[calc(100vh-80px)] overflow-hidden bg-suhaai-green">
      {visibleSlides.map((slide, index) => (
        <picture key={slide.desktopImage}>
          <source media="(min-width: 768px)" srcSet={slide.desktopProps.srcSet} sizes="100vw" />
          <source media="(max-width: 767px)" srcSet={slide.mobileProps.srcSet} sizes="100vw" />
          {/* getImageProps preserves Next image optimization while picture downloads only the matching crop. */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img {...slide.mobileProps}
            loading={index === 0 ? "eager" : "lazy"}
            fetchPriority={index === 0 ? "high" : "low"}
            alt={index === visibleIndex ? slide.alt : ""}
            aria-hidden={index !== visibleIndex}
            onError={() => setFailedImages((current) =>
              current.includes(slide.mobileImage) ? current : [...current, slide.mobileImage]
            )}
            className={`absolute inset-0 h-full w-full object-cover object-center transition-opacity duration-1000 ${slide.position.split(" ").filter((item) => item.startsWith("md:") || item.startsWith("lg:")).join(" ")} ${index === visibleIndex ? "opacity-100" : "opacity-0"}`}
          />
        </picture>
      ))}

      <div
        className="absolute inset-0 md:hidden"
        style={{
          background:
            "linear-gradient(90deg, rgba(18, 53, 91, 0.30) 0%, rgba(18, 53, 91, 0.14) 54%, rgba(18, 53, 91, 0.02) 100%)"
        }}
      />
      <div
        className="absolute inset-0 hidden md:block"
        style={{
          background:
            "linear-gradient(90deg, rgba(18, 53, 91, 0.68) 0%, rgba(18, 53, 91, 0.30) 46%, rgba(18, 53, 91, 0.04) 100%)"
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-suhaai-green/10 via-transparent to-transparent md:hidden" />
      <div className="absolute inset-0 hidden bg-gradient-to-t from-suhaai-green/22 via-transparent to-transparent md:block" />

      <div className={`absolute z-10 -translate-y-1/2 ${currentSlide.contentClass}`}>
        <div className="animate-rise max-w-[520px]">
          <p className="text-xs font-extrabold uppercase tracking-[0.24em] text-suhaai-gold md:text-base md:tracking-[0.28em]">
            Educate &bull; Empower &bull; Elevate
          </p>
          <h1
            className={`mt-5 font-black leading-[1.05] tracking-tight text-white drop-shadow-[0_3px_14px_rgba(0,0,0,0.42)] ${currentSlide.headingSize}`}
          >
            {currentSlide.heading}
          </h1>
          <div className="mt-5 max-w-[440px] rounded-2xl border border-white/25 bg-[rgba(18,53,91,0.30)] px-4 py-3.5 shadow-lg shadow-black/10 backdrop-blur-[6px] md:px-5 md:py-4">
            <p className="text-[0.98rem] font-medium leading-7 text-white/90 drop-shadow-[0_2px_10px_rgba(0,0,0,0.34)] md:text-base md:leading-8">
              {currentSlide.description}
            </p>
          </div>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/support-us"
              className="rounded-full bg-suhaai-gold px-7 py-4 text-center text-sm font-black text-suhaai-green shadow-soft transition duration-300 hover:-translate-y-1 hover:bg-[#e2a92f] hover:shadow-2xl hover:shadow-black/20 focus:outline-none focus:ring-2 focus:ring-suhaai-amber focus:ring-offset-2 focus:ring-offset-suhaai-green"
            >
              Support Suhaai
            </Link>
            <Link
              href="/our-work"
              className="rounded-full border border-white/35 bg-white/12 px-7 py-4 text-center text-sm font-black text-white shadow-lg shadow-black/10 backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-suhaai-gold hover:bg-white/20 hover:text-suhaai-gold hover:shadow-2xl hover:shadow-black/20 focus:outline-none focus:ring-2 focus:ring-suhaai-gold focus:ring-offset-2 focus:ring-offset-suhaai-green"
            >
              Explore Our Work
            </Link>
          </div>
        </div>
      </div>

      <div className="absolute bottom-5 left-1/2 z-20 flex -translate-x-1/2 items-center gap-2 rounded-full border border-white/10 bg-suhaai-green/28 px-3 py-2 shadow-lg shadow-black/15 backdrop-blur-md md:bottom-7">
        <button type="button" onClick={() => setPaused((value) => !value)} aria-pressed={paused}
          aria-label="Pause automatic slideshow"
          className="rounded-full px-3 py-2 text-sm font-bold text-white focus:outline-none focus:ring-2 focus:ring-suhaai-gold">
          {paused ? "Resume" : "Pause"}
        </button>
        {visibleSlides.map((slide, index) => (
          <button
            key={slide.desktopImage}
            type="button"
            aria-label={`Show hero image ${index + 1}`}
            onClick={() => setActiveSlide(index)}
            className={`h-2.5 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-suhaai-gold focus:ring-offset-2 focus:ring-offset-suhaai-green ${
              index === visibleIndex ? "w-10 bg-suhaai-gold shadow-sm shadow-suhaai-gold/40" : "w-2.5 bg-white/55 hover:bg-white/90"
            }`}
          />
        ))}
      </div>
    </section>
  );
}


