"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import gsap from "gsap";
import { ChevronLeft, ChevronRight, ArrowRight } from "../Icon";

type Game = {
  id: number;
  title: string;
  category: string;
  image: string;
};

// NOTE: using available poster images from /public/images
const GAMES: Game[] = [
  {
    id: 1,
    title: "Empire Savior",
    category: "Adventure",
    image: "/images/Empire_Savior_Poster1080x1920.png",
  },
  
  {
    id: 5,
    title: "Beat Tap",
    category: "Arcade",
    image: "/images/Beat_Tap_Game_Poster_1080x1920.png",
  },
  {
    id: 2,
    title: "Goal Defender",
    category: "Sports",
    image: "/images/Goal_Defender_Poster_1080x1920.png",
  },
  
  {
    id: 3,
    title: "Tennis Strike",
    category: "Sports",
    image: "/images/Tennis_Strike_Poster_1080x1920.png",
  },
  {
    id: 4,
    title: "Sand Racers",
    category: "Racing",
    image: "/images/Sand_Racers_Poster_1080x1920.png",
  },
  
  {
    id: 6,
    title: "Rhythm Slash",
    category: "Fitness",
    image: "/images/Rhythm_Slash_Posters_1080x1920.png",
  },
  
  {
    id: 8,
    title: "Jethalal Speed Ka Tadaka",
    category: "Action Arcade",
    image: "/images/Jethalal_Speed_Ka_Tadaka_Game_Poster_1080x1920.png",
  },
  
  {
    id: 9,
    title: "Knock Out Boxing",
    category: "Fight to the Top",
    image: "/images/Knock_Out_Boxing_Poster_1080x1920.png",
  },
  {
    id: 7,
    title: "Downhill Riders",
    category: "Arcade",
    image: "/images/Downhill_Riders_Game_Poster_1080x1920.png",
  },
];

export default function FeaturedGames() {
  const swiperRef = useRef<SwiperType | null>(null);
  const sectionRef = useRef<HTMLElement | null>(null);
  const headerRef = useRef<HTMLDivElement | null>(null);
  const slidesRef = useRef<HTMLDivElement[]>([]);

  // clear and register slide refs
  const setSlideRef = (el: HTMLDivElement | null, idx: number) => {
    if (!el) return;
    slidesRef.current[idx] = el;
  };

  useEffect(() => {
    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReduced) {
      // if reduced motion, do not animate
      slidesRef.current.forEach(
        (el) => el && gsap.set(el, { opacity: 1, y: 0 }),
      );
      if (headerRef.current) gsap.set(headerRef.current, { opacity: 1, y: 0 });
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // heading
            if (headerRef.current) {
              gsap.fromTo(
                headerRef.current,
                { opacity: 0, y: 18 },
                { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" },
              );
            }

            // stagger cards
            const nodes = slidesRef.current.filter(Boolean);
            if (nodes.length) {
              gsap.fromTo(
                nodes,
                { opacity: 0, y: 26 },
                {
                  opacity: 1,
                  y: 0,
                  duration: 0.7,
                  stagger: 0.08,
                  ease: "power3.out",
                },
              );
            }

            observer.disconnect();
          }
        });
      },
      { threshold: 0.12 },
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  // subtle hover glow using GSAP
  const handleHover = (idx: number) => {
    const el = slidesRef.current[idx];
    if (!el) return;
    gsap.to(el, {
      y: -6,
      scale: 1.02,
      boxShadow:
        "0 18px 40px rgba(0,217,255,0.04), 0 6px 20px rgba(217,70,239,0.04)",
      duration: 0.28,
      ease: "power3.out",
    });
  };

  const handleHoverOut = (idx: number) => {
    const el = slidesRef.current[idx];
    if (!el) return;
    gsap.to(el, {
      y: 0,
      scale: 1,
      boxShadow: "none",
      duration: 0.28,
      ease: "power3.out",
    });
  };

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-[#020817] py-12 sm:py-16 lg:py-20"
    >
      {/* neon top line + radial glows */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_35%,rgba(0,183,255,0.06),transparent_20%),radial-gradient(circle_at_82%_50%,rgba(190,0,255,0.04),transparent_32%)]" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div ref={headerRef} className="mb-6 flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-medium uppercase tracking-tight text-white sm:text-3xl lg:text-4xl">
              FEATURED GAMES
            </h2>
            <p className="mt-2 text-[10px] font-semibold uppercase tracking-[0.14em] text-cyan-300">
              A WORLD OF GAMES. MORE FUN. MORE MOVEMENT.
            </p>
          </div>

          <div>
           
          </div>
        </div>

        <div className="relative">
          {/* Prev/Next buttons */}
          <div className="absolute left-2 top-1/2 z-20 -translate-y-1/2">
            <button
              type="button"
              aria-label="Previous"
              onClick={() => swiperRef.current?.slidePrev()}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-black/50 text-white shadow-md hover:bg-white/10"
            >
              <ChevronLeft size={18} />
            </button>
          </div>

          <div className="absolute right-2 top-1/2 z-20 -translate-y-1/2">
            <button
              type="button"
              aria-label="Next"
              onClick={() => swiperRef.current?.slideNext()}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-black/50 text-white shadow-md hover:bg-white/10"
            >
              <ChevronRight size={18} />
            </button>
          </div>

          <div className="-mx-2 overflow-hidden">
            <Swiper
              modules={[Navigation]}
              onSwiper={(s) => (swiperRef.current = s)}
              loop
              grabCursor
              allowTouchMove
              speed={650}
              slidesPerView={2.1}
              spaceBetween={18}
              className="py-4"
              breakpoints={{
                640: { slidesPerView: 3.1 },
                768: { slidesPerView: 4.1 },
                1024: { slidesPerView: 5.2 },
                1440: { slidesPerView: 6.2 },
              }}
            >
              {GAMES.map((game, idx) => (
                <SwiperSlide key={game.id} className="px-2">
                  <div
                    ref={(el) => setSlideRef(el, idx)}
                    onMouseEnter={() => handleHover(idx)}
                    onMouseLeave={() => handleHoverOut(idx)}
                    className="group relative overflow-hidden rounded-xl border border-white/[0.06] bg-[#03050d] transition-transform duration-300"
                  >
                    <div className="relative aspect-[9/16] w-full">
                      <Image
                        src={game.image}
                        alt={game.title}
                        fill
                        draggable={false}
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>

                    <div className="px-3 py-2 bg-[#021127]">
                      <p className="text-sm font-semibold text-white truncate">
                        {game.title}
                      </p>
                      <p className="mt-1 text-[11px] uppercase tracking-[0.10em] text-cyan-300">
                        {game.category}
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}
