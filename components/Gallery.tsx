"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";

type GalleryItem = {
  id: number;
  image: string;
  category: "Kiosk" | "Setup" | "In Action" | "Events";
  alt: string;
};

// Use images from the `public/gallery` folder (uploaded by the user).
const GALLERY_ITEMS: GalleryItem[] = [
 
   {
    id: 4,
    image: "/gallery/Machine_01.png",
    category: "Events",
    alt: "ARCADELX at an event",
  },
  {
    id: 1,
    image: "/gallery/WhatsApp Image 2026-09-18 at 12.18.50 AM.png",
    category: "Kiosk",
    alt: "ARCADELX kiosk wide view",
  },
  {
    id: 2,
    image: "/gallery/WhatsApp Image 2026-09-18 at 12.18.52 AM.png",
    category: "In Action",
    alt: "Player engaging with ARCADELX",
  },
  {
    id: 3,
    image: "/gallery/WhatsApp Image 2026-09-18 at 12.18.53 AM.png",
    category: "Events",
    alt: "ARCADELX at an event",
  },
];

export default function Gallery() {
  const sectionRef = useRef<HTMLElement>(null);
  const swiperRef = useRef<SwiperType | null>(null);

  const [activeIndex, setActiveIndex] = useState(0);

  // Filters removed: always show all gallery items.
  const filteredItems = GALLERY_ITEMS;

  const shouldLoop = filteredItems.length > 5;

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      const heading = sectionRef.current?.querySelector(
        "[data-gallery-heading]"
      );
      const subtitle = sectionRef.current?.querySelector(
        "[data-gallery-subtitle]"
      );
      const filters = gsap.utils.toArray<HTMLElement>(
        "[data-gallery-filter]"
      );
      const cards = gsap.utils.toArray<HTMLElement>(
        "[data-gallery-card]"
      );

      if (reduceMotion) {
        return;
      }

      if (heading) {
        gsap.from(heading, {
          y: 24,
          opacity: 0,
          duration: 0.7,
          ease: "power3.out",
          scrollTrigger: {
            trigger: heading,
            start: "top 88%",
            once: true,
          },
        });
      }

      if (subtitle) {
        gsap.from(subtitle, {
          y: 15,
          opacity: 0,
          duration: 0.55,
          delay: 0.08,
          ease: "power3.out",
          scrollTrigger: {
            trigger: subtitle,
            start: "top 90%",
            once: true,
          },
        });
      }

      if (filters.length) {
        gsap.from(filters, {
          y: 14,
          opacity: 0,
          duration: 0.5,
          stagger: 0.06,
          ease: "power2.out",
          scrollTrigger: {
            trigger: filters[0],
            start: "top 90%",
            once: true,
          },
        });
      }

      if (cards.length) {
        gsap.from(cards, {
          y: 24,
          opacity: 0,
          scale: 0.98,
          duration: 0.65,
          stagger: 0.07,
          ease: "power3.out",
          scrollTrigger: {
            trigger: cards[0],
            start: "top 88%",
            once: true,
          },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    setActiveIndex(0);

    const frame = requestAnimationFrame(() => {
      if (!swiperRef.current) {
        return;
      }

      swiperRef.current.slideTo(0, 0);
      swiperRef.current.update();
    });

    return () => cancelAnimationFrame(frame);
  }, []);

  // (removed) const handleCategoryChange = ...

  const handleCardEnter = (event: React.MouseEvent<HTMLElement>) => {
    gsap.to(event.currentTarget, {
      y: -5,
      duration: 0.25,
      ease: "power2.out",
    });
  };

  const handleCardLeave = (event: React.MouseEvent<HTMLElement>) => {
    gsap.to(event.currentTarget, {
      y: 0,
      duration: 0.25,
      ease: "power2.out",
    });
  };

  return (
    <section
      ref={sectionRef}
      id="gallery"
      aria-label="ARCADELX Gallery"
      className="relative overflow-hidden border-y border-white/[0.06] bg-[#030817] py-10 text-white sm:py-12 lg:py-14"
    >
      {/* Background */}
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_14%_46%,rgba(0,195,255,0.09),transparent_25%),radial-gradient(circle_at_53%_40%,rgba(52,103,255,0.07),transparent_32%),radial-gradient(circle_at_88%_40%,rgba(217,70,239,0.10),transparent_25%)]" />

        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-cyan-400/70 via-blue-400/40 to-fuchsia-500/70" />

        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-fuchsia-400/25 to-transparent" />

        <div className="absolute left-[-7%] top-[34%] h-48 w-48 rounded-full bg-cyan-400/[0.05] blur-3xl" />

        <div className="absolute right-[-6%] top-[24%] h-56 w-56 rounded-full bg-fuchsia-500/[0.05] blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-[1450px] px-5 sm:px-8 lg:px-10">
        {/* Header */}
        <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2
              data-gallery-heading
              className="text-[clamp(30px,4.3vw,46px)] font-med uppercase leading-none tracking-[-0.045em] text-white"
            >
              Gallery
            </h2>

            <p
              data-gallery-subtitle
              className="mt-2 text-[10px] font-medium uppercase tracking-[0.1em] text-cyan-300 sm:text-[11px]"
            >
              Explore ARCADELX from every angle
            </p>
          </div>

                    {/* Filters removed */}
        </div>

        {/*
          Gallery slider
          NOTE: this wrapper is intentionally NOT overflow-hidden anymore.
          The nav buttons below use negative left/right offsets to sit
          partly outside the slide track, so if this wrapper clips
          overflow, the buttons get visually cut off / misaligned
          (most noticeable right after a slide transition). Only the
          inner track (below) needs to clip the slides themselves.
        */}
        <div data-gallery-slider className="relative mt-6">
          {/* Slide track: this is the only element that should clip */}
          <div className="overflow-hidden rounded-xl">
            <Swiper
              key={`gallery-${filteredItems.length}`}
              modules={[]}
              onSwiper={(swiper) => {
                swiperRef.current = swiper;
              }}
              onSlideChange={(swiper) => {
                setActiveIndex(swiper.realIndex);
              }}
              loop={shouldLoop}
              speed={650}
              grabCursor
              allowTouchMove
              watchOverflow
              slidesPerView={1.25}
              spaceBetween={8}
              breakpoints={{
                480: {
                  slidesPerView: 2.15,
                  spaceBetween: 10,
                },
                640: {
                  slidesPerView: 2.6,
                  spaceBetween: 10,
                },
                768: {
                  slidesPerView: 3.25,
                  spaceBetween: 12,
                },
                1024: {
                  slidesPerView: 4.15,
                  spaceBetween: 12,
                },
                1280: {
                  slidesPerView: 5,
                  spaceBetween: 12,
                },
              }}
              className="!overflow-visible"
            >
              {filteredItems.map((item) => (
                <SwiperSlide key={item.id}>
                  <article
                    data-gallery-card
                    onMouseEnter={handleCardEnter}
                    onMouseLeave={handleCardLeave}
                    className="group relative cursor-grab overflow-hidden rounded-xl active:cursor-grabbing"
                  >
                    <div className="relative aspect-[9/16] sm:aspect-[3/5] overflow-hidden rounded-xl border border-white/[0.1] bg-[#071126] shadow-[0_12px_36px_rgba(0,0,0,0.28)] transition-all duration-300 group-hover:border-cyan-300/35">
                      <Image
                        src={item.image}
                        alt={item.alt}
                        fill
                        sizes="(max-width: 639px) 75vw, (max-width: 1023px) 31vw, 20vw"
                        draggable={false}
                        className="select-none object-contain sm:object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.045]"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-[#020617]/60 via-transparent to-transparent" />

                      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-cyan-300 via-blue-400 to-fuchsia-400 opacity-60" />
                    </div>
                  </article>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/*
            Previous / Next
            These are wrapped in a flex container that spans the full
            track height (inset-y-0 + flex items-center) so the button
            is centered WITHOUT using a translate-y transform. The
            button itself only ever applies hover:scale-110 to itself,
            so there's no translate+scale collision on one element â€”
            that collision was what made the buttons jump downward on
            click/hover.
          */}
          </div>

        {/* Pagination dots */}
        <div className="mt-4 flex items-center justify-center gap-3">
          {filteredItems.map((item, index) => {
            const active = index === activeIndex;

            return (
              <button
                key={item.id}
                type="button"
                aria-label={`Go to gallery image ${index + 1}`}
                aria-current={active ? "true" : undefined}
                onClick={() => {
                  swiperRef.current?.slideToLoop(index);
                }}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  active
                    ? "w-2.5 bg-white shadow-[0_0_10px_rgba(255,255,255,0.45)]"
                    : "w-2 bg-blue-300/25 hover:bg-blue-300/50"
                }`}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}





