"use client";
import { KioskVisual } from "./Kioskcard";
import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import {
  ArrowRight,
  Play,
  Pulse,
  UsersThree,
  Cube,
  Plug,
} from "@phosphor-icons/react";

export default function ArcadeLXHero() {
  const heroRef = useRef<HTMLElement | null>(null);
  const kioskRef = useRef<HTMLDivElement | null>(null);
  const glowRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: {
          ease: "power3.out",
        },
      });

      tl.from(".arcade-eyebrow", {
        opacity: 0,
        y: 25,
        duration: 0.7,
      })
        .from(
          ".arcade-title-line",
          {
            opacity: 0,
            y: 45,
            duration: 0.8,
            stagger: 0.12,
          },
          "-=0.35",
        )
        .from(
          ".arcade-description",
          {
            opacity: 0,
            y: 25,
            duration: 0.7,
          },
          "-=0.45",
        )
        .from(
          ".arcade-actions",
          {
            opacity: 0,
            y: 20,
            duration: 0.6,
          },
          "-=0.35",
        )
        .from(
          kioskRef.current,
          {
            opacity: 0,
            scale: 0.9,
            y: 35,
            duration: 1.1,
          },
          "-=0.8",
        )
        .from(
          ".arcade-feature",
          {
            opacity: 0,
            y: 20,
            duration: 0.5,
            stagger: 0.12,
          },
          "-=0.5",
        );

      // Floating kiosk
      if (kioskRef.current) {
        gsap.to(kioskRef.current, {
          y: -10,
          duration: 2.8,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      }

      // Ambient glow
      if (glowRef.current) {
        gsap.to(glowRef.current, {
          scale: 1.12,
          opacity: 0.8,
          duration: 3.5,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      }
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="
        relative
        min-h-[760px]
        overflow-hidden
        bg-[#020817]
        text-white
      "
    >
      {/* =========================================================
          BACKGROUND
      ========================================================= */}

      {/* Top subtle purple glow */}
      <div
        className="
          pointer-events-none
          absolute
          -top-48
          right-[-10%]
          h-[500px]
          w-[700px]
          rounded-full
          bg-purple-700/10
          blur-[140px]
        "
      />

      {/* Bottom blue glow */}
      <div
        className="
          pointer-events-none
          absolute
          bottom-[-250px]
          left-[15%]
          h-[500px]
          w-[700px]
          rounded-full
          bg-blue-600/10
          blur-[150px]
        "
      />

      {/* =========================================================
          MAIN CONTAINER
      ========================================================= */}

      <div
        className="
          relative
          z-10
          mx-auto
          flex
          min-h-[760px]
          max-w-[1320px]
          flex-col
          px-6
          pb-28
          pt-16
          lg:grid
          lg:grid-cols-[0.95fr_1.05fr]
          lg:items-center
          lg:px-10
          lg:pt-8
        "
      >
        {/* =======================================================
            LEFT CONTENT


            
        ======================================================= */}

        <div className="relative z-20 max-w-[600px]">
          {/* Eyebrow */}

          <div
            className="
              arcade-eyebrow
              mb-7
              flex
              items-center
              gap-3
              text-[11px]
              font-semibold
              uppercase
              tracking-[0.22em]
              text-cyan-400
            "
          >
            <span
              className="
                h-1.5
                w-1.5
                rounded-full
                bg-cyan-400
                shadow-[0_0_12px_rgba(34,211,238,0.9)]
              "
            />

            <span>MOVE· PLAY· STAY ACTIVE</span>
          </div>

          {/* Main heading */}

          <h1
            className="
              font-sans
              text-[64px]
              font-extralight
              uppercase
              leading-[0.88]
              tracking-[-0.055em]
              sm:text-[76px]
              lg:text-[86px]
              xl:text-[94px]
            "
          >
            <span className="arcade-title-line block">LIVE THE</span>

            <span
              className="
                arcade-title-line
                block
                bg-gradient-to-r
                from-cyan-400
                via-blue-500
                via-purple-500
                to-fuchsia-500
                bg-clip-text
                text-transparent
              "
            >
              GAMING
            </span>

            <span className="arcade-title-line block">XPERIENCE.</span>
          </h1>

          {/* Description */}

          <p
            className="
              arcade-description
              mt-9
              max-w-[500px]
              text-[14px]
              leading-7
              text-slate-400
              sm:text-[15px]
            "
          >
            ArcadeLX is a next-generation motion-sensing gaming kiosk that
            brings immersive, full-body gaming to malls, offices, schools and
            public spaces.
          </p>

          {/* Actions */}

          <div
            className="
              arcade-actions
              mt-9
              flex
              flex-wrap
              items-center
              gap-6
            "
          >
            {/* Order Now */}

            <button
              type="button"
              className="
                group
                relative
                flex
                h-[45px]
                items-center
                gap-3
                overflow-hidden
                rounded-full
                bg-gradient-to-r
                from-cyan-400
                via-blue-500
                to-fuchsia-500
                px-6
                text-[11px]
                font-bold
                uppercase
                tracking-[0.13em]
                text-white
                shadow-[0_0_28px_rgba(59,130,246,0.25)]
                transition-all
                duration-300
                hover:scale-[1.04]
                hover:shadow-[0_0_38px_rgba(217,70,239,0.4)]
              "
            >
              <span className="relative z-10">ORDER NOW</span>

              <span
                className="
                  relative
                  z-10
                  flex
                  h-7
                  w-7
                  items-center
                  justify-center
                  rounded-full
                  bg-white/20
                  backdrop-blur-sm
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                "
              >
                <ArrowRight size={15} weight="bold" />
              </span>
            </button>

            {/* Watch Video */}

            <button
              type="button"
              className="
                group
                flex
                items-center
                gap-3
                text-[10px]
                font-semibold
                uppercase
                tracking-[0.18em]
                text-slate-300
                transition-colors
                hover:text-white
              "
            >
              <span
                className="
                  flex
                  h-8
                  w-8
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/20
                  bg-white/[0.03]
                  transition-all
                  duration-300
                  group-hover:border-cyan-400/50
                  group-hover:bg-cyan-400/10
                "
              >
                <Play size={12} weight="fill" />
              </span>

              <span>WATCH VIDEO</span>
            </button>
          </div>
        </div>

        {/* =======================================================
            RIGHT KIOSK
        ======================================================= */}

                <div ref={kioskRef} className="hero-kiosk relative z-10">
          <KioskVisual />
        </div>
      </div>

      {/* =========================================================
          FEATURE STRIP
      ========================================================= */}

      <div
        className="
          absolute
          bottom-0
          left-0
          z-30
          w-full
          border-t
          border-white/[0.04]
          bg-[#03091a]/70
          backdrop-blur-sm
        "
      >
        <div
          className="
            mx-auto
            flex
            max-w-[1320px]
            overflow-x-auto
            px-6
            lg:px-10
          "
        >
          {/* Feature 1 */}

          <Feature
            icon={<Pulse size={17} weight="bold" />}
            title="MOTION SENSING"
            subtitle="GAMEPLAY"
          />

          {/* Feature 2 */}

          <Feature
            icon={<UsersThree size={17} weight="bold" />}
            title="FUN FOR ALL"
            subtitle="AGE GROUPS"
          />

          {/* Feature 3 */}

          <Feature
            icon={<Cube size={17} weight="bold" />}
            title="COMPACT & EFFICIENT"
            subtitle="SPACE EFFICIENT"
          />

          {/* Feature 4 */}

          <Feature
            icon={<Plug size={17} weight="bold" />}
            title="PLUG & PLAY"
            subtitle="SETUP"
          />
        </div>
      </div>
    </section>
  );
}

/* ===============================================================
   FEATURE COMPONENT
================================================================ */

function Feature({
  icon,
  title,
  subtitle,
}: {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
}) {
  return (
    <div
      className="
        arcade-feature
        flex
        min-w-[210px]
        flex-1
        items-center
        gap-3
        border-l
        border-white/[0.08]
        px-5
        py-5
        first:border-l-0
        lg:px-7
      "
    >
      {/* Icon */}

      <div
        className="
          bg-gradient-to-r
          from-cyan-400
          to-fuchsia-500
          bg-clip-text
          text-transparent
        "
      >
        {icon}
      </div>

      {/* Text */}

      <div>
        <p
          className="
            text-[10px]
            font-semibold
            uppercase
            tracking-[0.08em]
            text-slate-300
          "
        >
          {title}
        </p>

        <p
          className="
            mt-1
            text-[9px]
            font-medium
            uppercase
            tracking-[0.13em]
            text-slate-500
          "
        >
          {subtitle}
        </p>
      </div>
    </div>
  );
}

