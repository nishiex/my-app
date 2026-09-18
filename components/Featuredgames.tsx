"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "./Icon";

import "swiper/css";

type Game = {
  title: string;
  category: string;
  image: string;
};

const GAMES: Game[] = [
  {
    title: "The Lost Temple",
    category: "Adventure",
    image: "/images/games/lost-temple.png",
  },
  {
    title: "Basketball Hoops",
    category: "Sports",
    image: "/images/games/basketball-hoops.png",
  },
  {
    title: "Football Strike",
    category: "Sports",
    image: "/images/games/football-strike.png",
  },
  {
    title: "Racing Challenge",
    category: "Racing",
    image: "/images/games/racing-challenge.png",
  },
  {
    title: "Fruit Ninja",
    category: "Arcade",
    image: "/images/games/fruit-ninja.png",
  },
  {
    title: "Dance Beat",
    category: "Fitness",
    image: "/images/games/dance-beat.png",
  },
  {
    title: "Neon Runner",
    category: "Arcade",
    image: "/images/games/neon-runner.png",
  },
];

export default function FeaturedGames() {
  const sectionRef = useRef<HTMLElement>(null);
  const swiperRef = useRef<SwiperType | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from("[data-games-heading]", {
        y: 25,
        opacity: 0,
        duration: 0.7,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 82%",
          once: true,
        },
      });

      gsap.from("[data-game-card]", {
        y: 30,
        opacity: 0,
        duration: 0.65,
        stagger: 0.07,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 78%",
          once: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="games"
      className="relative overflow-hidden bg-[#040817] py-14 sm:py-16 lg:py-20"
    >
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_50%,rgba(0,200,255,0.08),transparent_30%),radial-gradient(circle_at_90%_50%,rgba(220,0,255,0.08),transparent_30%)]" />

        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/40 to-transparent" />

        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-fuchsia-400/30 to-transparent" />
      </div>

      <div className="relative mx-auto max-w-[1450px] px-5 sm:px-8 lg:px-10">
        {/* Heading */}
        <div
          data-games-heading
          className="mb-7 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between"
        >
          <div>
            <h2 className="text-3xl font-medium uppercase leading-none tracking-[-0.035em] text-white sm:text-4xl">
              Featured Games
            </h2>

            <p className="mt-2 text-[10px] font-medium uppercase tracking-[0.1em] text-cyan-300 sm:text-[11px]">
              A world of games. More fun. More movement.
            </p>
          </div>

         
        </div>

        {/* Swiper container */}
        <div className="relative px-1">
          <Swiper
            modules={[Navigation]}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            loop
            speed={650}
            grabCursor
            allowTouchMove
            slidesPerView={2.1}
            spaceBetween={12}
            breakpoints={{
              480: {
                slidesPerView: 2.5,
                spaceBetween: 12,
              },
              640: {
                slidesPerView: 3.3,
                spaceBetween: 14,
              },
              768: {
                slidesPerView: 4.2,
                spaceBetween: 14,
              },
              1024: {
                slidesPerView: 5.1,
                spaceBetween: 14,
              },
              1280: {
                slidesPerView: 6.1,
                spaceBetween: 14,
              },
            }}
            className="!overflow-visible"
          >
            {GAMES.map((game) => (
              <SwiperSlide key={game.title}>
                <article
                  data-game-card
                  className="group relative cursor-grab active:cursor-grabbing"
                >
                  <div className="overflow-hidden rounded-xl border border-white/[0.08] bg-[#0a1325] shadow-[0_12px_35px_rgba(0,0,0,0.3)] transition-all duration-300 group-hover:-translate-y-1 group-hover:border-cyan-300/30">
                    <div className="relative aspect-[0.78] overflow-hidden">
                      <Image
                        src={game.image}
                        alt={game.title}
                        fill
                        sizes="20vw"
                        draggable={false}
                        className="select-none object-cover transition-transform duration-700 group-hover:scale-105"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-[#061126] via-transparent to-transparent" />

                      <div className="absolute inset-x-0 bottom-0 p-3">
                        <h3 className="text-[13px] font-bold uppercase leading-[0.95] text-white">
                          {game.title}
                        </h3>
                      </div>
                    </div>

                    <div className="border-t border-white/[0.06] bg-[#0b1b35] px-3 py-2">
                      <p className="text-center text-[9px] font-semibold uppercase tracking-[0.08em] text-slate-300">
                        {game.category}
                      </p>
                    </div>
                  </div>
                </article>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Previous */}
          <button
            type="button"
            onClick={() => swiperRef.current?.slidePrev()}
            aria-label="Previous games"
            className="absolute left-[-12px] top-1/2 z-30 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full border border-cyan-300/80 bg-[#071026] text-cyan-300 shadow-[0_0_18px_rgba(34,211,238,0.14)] transition-all duration-200 hover:scale-110 hover:bg-cyan-300 hover:text-[#04101d] sm:left-[-16px]"
          >
            <ArrowLeft size={15} />
          </button>

          {/* Next */}
          <button
            type="button"
            onClick={() => swiperRef.current?.slideNext()}
            aria-label="Next games"
            className="absolute right-[-12px] top-1/2 z-30 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full border border-cyan-300/80 bg-[#071026] text-cyan-300 shadow-[0_0_18px_rgba(34,211,238,0.14)] transition-all duration-200 hover:scale-110 hover:bg-cyan-300 hover:text-[#04101d] sm:right-[-16px]"
          >
            <ArrowRight size={15} />
          </button>
        </div>
      </div>
    </section>
  );
}
