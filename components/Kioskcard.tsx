"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ArrowRight, Play, Pulse, UsersThree, Cube, Plug } from "./Icon";

const UI_SCREENS = [
  "/images/Calibration_Page (1).png",
  "/images/Catalog (1).png",
  "/images/Game_Play (1).png",
  "/images/Payment_Gatewayt (3).png",
];

// Physical kiosk PNG.
// The PNG itself is the complete kiosk shell.
const KIOSK_SHELL_SRC =
  "/images/Kiosk_Machine_With Embalem_01_Transparent_Middle.png";

/* =========================================================
   KIOSK VISUAL
========================================================= */

export function KioskVisual({ compact = false }: { compact?: boolean }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const images = gsap.utils.toArray<HTMLElement>(".gsap-kiosk-img");

      if (images.length < 2) return;

      gsap.set(images, {
        opacity: 0,
      });

      gsap.set(images[0], {
        opacity: 1,
      });

      const tl = gsap.timeline({
        repeat: -1,
      });

      images.forEach((img, index) => {
        const nextImg = images[(index + 1) % images.length];

        tl.to(img, {
          opacity: 0,
          duration: 0.9,
          delay: 2.5,
          ease: "power1.inOut",
        }).to(
          nextImg,
          {
            opacity: 1,
            duration: 0.9,
            ease: "power1.inOut",
          },
          "<",
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className={[
        "relative z-10 flex w-full items-center justify-center",
        compact ? "max-w-[350px]" : "w-[92vw] max-w-[430px] md:w-[430px]",
      ].join(" ")}
    >
      {/* =====================================================
          AMBIENT KIOSK GLOW
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          z-0
          h-[80%]
          w-[90%]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-[radial-gradient(circle,rgba(59,130,246,0.32)_0%,rgba(124,58,237,0.20)_35%,rgba(217,70,239,0.08)_55%,transparent_72%)]
          blur-[45px]
        "
      />

      {/* Secondary purple glow */}

      <div
        className="
          pointer-events-none
          absolute
          right-[-10%]
          top-[15%]
          z-0
          h-[220px]
          w-[220px]
          rounded-full
          bg-purple-600/15
          blur-[90px]
        "
      />

      {/* =====================================================
          KIOSK STAGE
      ===================================================== */}

      <div className="relative w-full aspect-[500/700]">
        {/* UI SCREEN — BEHIND THE KIOSK */}
        <div
          className="
      absolute
      left-[18%]
      right-[18%]
      top-[20%]
      h-[46%]
      overflow-hidden
      z-10
    "
        >
          {UI_SCREENS.map((screen, idx) => (
            <div key={screen} className="gsap-kiosk-img absolute inset-0 ">
              <Image
                src={screen}
                alt={`Kiosk Screen ${idx + 1}`}
                fill
                className="object-contain "
              />
            </div>
          ))}
        </div>

        {/* PHYSICAL KIOSK — IN FRONT */}
        <Image
          src={KIOSK_SHELL_SRC}
          alt="ArcadeLX Gaming Kiosk"
          fill
          priority
          className="
      relative
      z-20
      object-contain
      pointer-events-none
      select-none
    "
        />
      </div>

      {/* =====================================================
          LABEL
      ===================================================== */}

      {!compact && (
        <div
          className="
            absolute
            bottom-[8%]
            right-[-2%]
            z-40
            hidden
            text-left
            md:block
          "
        >
          
        </div>
      )}
    </div>
  );
}

/* =========================================================
   FEATURE ITEM
========================================================= */

function HeroFeature({
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
        flex
        min-w-0
        items-start
        border-l
        border-white/[0.12]
        px-4
        py-1
        first:border-l-0
        sm:px-5
        md:px-6
      "
    >
      {/* Icon */}

      <span
        className="
          mr-2
          mt-[1px]
          shrink-0
          bg-gradient-to-r
          from-cyan-400
          via-purple-500
          to-fuchsia-500
          bg-clip-text
          text-transparent
        "
      >
        {icon}
      </span>

      {/* Text */}

      <div className="min-w-0">
        <p
          className="
            whitespace-nowrap
            text-[10px]
            font-semibold
            uppercase
            tracking-[0.08em]
            text-white
            sm:text-[11px]
            md:text-[12px]
          "
        >
          {title}
        </p>

        <p
          className="
            mt-1
            whitespace-nowrap
            text-[8px]
            font-medium
            uppercase
            tracking-[0.14em]
            text-[#71829d]
            sm:text-[9px]
          "
        >
          {subtitle}
        </p>
      </div>
    </div>
  );
}

/* =========================================================
   HERO
========================================================= */

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: {
          ease: "power3.out",
        },
      });

      tl.from(".hero-eyebrow", {
        opacity: 0,
        y: 20,
        duration: 0.6,
      })
        .from(
          ".hero-title-line",
          {
            opacity: 0,
            y: 45,
            duration: 0.75,
            stagger: 0.12,
          },
          "-=0.3",
        )
        .from(
          ".hero-description",
          {
            opacity: 0,
            y: 20,
            duration: 0.65,
          },
          "-=0.35",
        )
        .from(
          ".hero-actions",
          {
            opacity: 0,
            y: 20,
            duration: 0.6,
          },
          "-=0.3",
        )
        .from(
          ".hero-kiosk",
          {
            opacity: 0,
            scale: 0.92,
            y: 30,
            duration: 1,
          },
          "-=0.75",
        )
        .from(
          ".hero-feature",
          {
            opacity: 0,
            y: 15,
            duration: 0.5,
            stagger: 0.1,
          },
          "-=0.45",
        );

      /* =====================================================
         KIOSK FLOATING MOTION
      ===================================================== */

      gsap.to(".hero-kiosk", {
        y: -8,
        duration: 2.8,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      /* =====================================================
         GLOW PULSE
      ===================================================== */

      gsap.to(".hero-kiosk-glow", {
        scale: 1.12,
        opacity: 0.75,
        duration: 3.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      id="home"
      className="
        relative
        isolate
        min-h-[760px]
        overflow-hidden
        bg-[#020817]
        text-white
      "
    >
      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      {/* Main purple background */}

      <div
        className="
          pointer-events-none
          absolute
          inset-y-0
          right-0
          z-0
          w-[58%]
          bg-[radial-gradient(circle_at_65%_42%,rgba(76,29,149,0.25),transparent_55%)]
        "
      />

      {/* Blue glow */}

      <div
        className="
          pointer-events-none
          absolute
          left-[42%]
          top-[18%]
          z-0
          h-[400px]
          w-[400px]
          rounded-full
          bg-blue-600/10
          blur-[120px]
        "
      />

      {/* =====================================================
          MAIN CONTENT
      ===================================================== */}

      <div
        className="
          relative
          z-10
          mx-auto
          grid
          min-h-[760px]
          max-w-[1320px]
          grid-cols-1
          px-6
          pb-32
          pt-14
          md:grid-cols-[0.94fr_1.06fr]
          md:px-8
          lg:px-10
        "
      >
        {/* ===================================================
            LEFT CONTENT
        =================================================== */}

        <div
          className="
            relative
            z-20
            flex
            max-w-[600px]
            flex-col
            justify-center
            self-center
            pt-4
            md:pb-16
          "
        >
          {/* Eyebrow */}

          <p
            className="
              hero-eyebrow
              mb-6
              flex
              items-center
              gap-3
              text-[10px]
              font-semibold
              uppercase
              tracking-[0.22em]
              text-cyan-400
              sm:text-[11px]
            "
          >
            <span
              className="
                h-1.5
                w-1.5
                shrink-0
                rounded-full
                bg-cyan-400
                shadow-[0_0_12px_rgba(34,211,238,0.9)]
              "
            />
            MOVE · PLAY · STAY ACTIVE
          </p>

          {/* =================================================
              TITLE
          ================================================= */}

          <h1
            className="
              mb-7
              max-w-[700px]
              text-[clamp(52px,7vw,94px)]
              font-light
              uppercase
              leading-[0.91]
              tracking-[-0.055em]
            "
          >
            <span className="hero-title-line block">LIVE THE</span>

            <span
              className="
                hero-title-line
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

            <span className="hero-title-line block">XPERIENCE.</span>
          </h1>

          {/* Description */}

          <p
            className="
              hero-description
              max-w-[455px]
              text-[14px]
              leading-[1.75]
              text-[#b8c5d9]
              sm:text-[15px]
            "
          >
            ArcadeLX is a next-generation motion-sensing gaming kiosk that
            brings immersive, full-body gaming to malls, offices, schools and
            public spaces.
          </p>

          {/* =================================================
              ACTIONS
          ================================================= */}

          <div
            className="
              hero-actions
              mt-9
              mb-10
              flex
              flex-wrap
              items-center
              gap-7
            "
          >
            {/* Order */}

            <a
              href="mailto:hello@arcadelx.com"
              className="
                group
                inline-flex
                h-[48px]
                items-center
                gap-3
                rounded-full
                bg-gradient-to-r
                from-cyan-400
                via-blue-500
                to-fuchsia-500
                px-5
                text-[10px]
                font-bold
                uppercase
                tracking-[0.14em]
                text-white
                shadow-[0_0_25px_rgba(59,130,246,0.25)]
                transition-all
                duration-300
                hover:scale-[1.04]
                hover:shadow-[0_0_38px_rgba(217,70,239,0.4)]
              "
            >
              <span>ORDER NOW</span>

              <span
                className="
                  flex
                  h-7
                  w-7
                  items-center
                  justify-center
                  rounded-full
                  bg-white/20
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                "
              >
                <ArrowRight size={14} />
              </span>
            </a>

            {/* Watch video */}

            <a
              href="#video"
              className="
                group
                inline-flex
                items-center
                gap-2.5
                text-[11px]
                font-semibold
                uppercase
                tracking-[0.15em]
                text-white
                transition-colors
                hover:text-cyan-300
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
                <Play size={12} />
              </span>
              WATCH VIDEO
            </a>
          </div>
        </div>

        {/* ===================================================
            RIGHT KIOSK
        =================================================== */}

        <div
          className="
            relative
            flex
            min-h-[520px]
            items-center
            justify-center
            md:min-h-[650px]
          "
        >
          {/* Glow */}

          <div
            className="
              hero-kiosk-glow
              pointer-events-none
              absolute
              left-1/2
              top-1/2
              z-0
              h-[460px]
              w-[460px]
              -translate-x-1/2
              -translate-y-1/2
              rounded-full
              bg-[radial-gradient(circle,rgba(79,70,229,0.35)_0%,rgba(37,99,235,0.18)_32%,rgba(168,85,247,0.08)_52%,transparent_72%)]
              blur-2xl
            "
          />

          {/* Kiosk */}

          <div className="hero-kiosk relative z-10">
            <KioskVisual />
          </div>
        </div>

        {/* ===================================================
            FEATURES

            IMPORTANT:
            col-span-2 fixes the old issue where the feature
            strip occupied only the first grid column.
        =================================================== */}

        <div
          className="
            hero-feature
            relative
            z-30
            col-span-1
            mt-4
            grid
            grid-cols-2
            gap-y-5
            md:col-span-2
            md:mt-[-72px]
            md:grid-cols-4
            md:gap-y-0
          "
        >
          <HeroFeature
            icon={<Pulse size={18} />}
            title="MOTION SENSING"
            subtitle="GAMEPLAY"
          />

          <HeroFeature
            icon={<UsersThree size={18} />}
            title="FUN FOR ALL"
            subtitle="AGE GROUPS"
          />

          <HeroFeature
            icon={<Cube size={18} />}
            title="COMPACT & EFFICIENT"
            subtitle="SPACE EFFICIENT"
          />

          <HeroFeature
            icon={<Plug size={18} />}
            title="PLUG & PLAY"
            subtitle="SETUP"
          />
        </div>
      </div>
    </section>
  );
}
