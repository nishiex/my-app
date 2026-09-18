"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import type { LucideIcon } from "lucide-react";
import {
  Accessibility,
  Gamepad2,
  HeartHandshake,
  PanelsTopLeft,
  Wrench,
  MonitorPlay,
  WalletCards,
} from "lucide-react";

type ProductFeature = {
  title: string;
  description: string;
  icon: LucideIcon;
  color: string;
  glow: string;
};

const FEATURES: ProductFeature[] = [
  {
    title: "Motion Sensor Technology",
    description: "Full body, controller-free gaming",
    icon: Accessibility,
    color: "text-cyan-300",
    glow: "shadow-[0_0_22px_rgba(34,211,238,0.28)]",
  },
  {
    title: "Wide Range of Games",
    description: "Sports, Adventure, Fitness & More",
    icon: Gamepad2,
    color: "text-fuchsia-400",
    glow: "shadow-[0_0_22px_rgba(232,121,249,0.26)]",
  },
  {
    title: "Engaging & Healthy",
    description: "Fun + Physical Activity",
    icon: HeartHandshake,
    color: "text-cyan-300",
    glow: "shadow-[0_0_22px_rgba(34,211,238,0.28)]",
  },
  {
    title: "Compact & Stylish",
    description: "Modern design, fits any space",
    icon: PanelsTopLeft,
    color: "text-fuchsia-400",
    glow: "shadow-[0_0_22px_rgba(232,121,249,0.26)]",
  },
  {
    title: "Easy Installation",
    description: "Plug & Play",
    icon: Wrench,
    color: "text-cyan-300",
    glow: "shadow-[0_0_22px_rgba(34,211,238,0.28)]",
  },
  {
    title: "Remote Content Management",
    description: "Add new games anytime",
    icon: MonitorPlay,
    color: "text-fuchsia-400",
    glow: "shadow-[0_0_22px_rgba(232,121,249,0.26)]",
  },
  {
    title: "Secure Payments",
    description: "UPI, Card & Wallet Support",
    icon: WalletCards,
    color: "text-cyan-300",
    glow: "shadow-[0_0_22px_rgba(34,211,238,0.28)]",
  },
];

export default function ProductFeatures() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      const heading = sectionRef.current?.querySelector(
        "[data-product-heading]"
      );

      const subtitle = sectionRef.current?.querySelector(
        "[data-product-subtitle]"
      );

      const features = gsap.utils.toArray<HTMLElement>(
        "[data-product-feature]"
      );

      if (reduceMotion) {
        gsap.set(
          [
            heading,
            subtitle,
            ...features,
          ].filter(Boolean) as HTMLElement[],
          {
            clearProps: "all",
          }
        );

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
          y: 18,
          opacity: 0,
          duration: 0.6,
          delay: 0.08,
          ease: "power3.out",
          scrollTrigger: {
            trigger: subtitle,
            start: "top 90%",
            once: true,
          },
        });
      }

      if (features.length) {
        gsap.from(features, {
          y: 25,
          opacity: 0,
          scale: 0.96,
          duration: 0.65,
          stagger: 0.08,
          ease: "power3.out",
          scrollTrigger: {
            trigger: features[0],
            start: "top 88%",
            once: true,
          },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleMouseEnter = (
    event: React.MouseEvent<HTMLElement>
  ) => {
    const icon = event.currentTarget.querySelector<HTMLElement>(
      "[data-product-icon]"
    );

    if (!icon) return;

    gsap.to(icon, {
      scale: 1.08,
      rotate: 2,
      duration: 0.25,
      ease: "power2.out",
    });
  };

  const handleMouseLeave = (
    event: React.MouseEvent<HTMLElement>
  ) => {
    const icon = event.currentTarget.querySelector<HTMLElement>(
      "[data-product-icon]"
    );

    if (!icon) return;

    gsap.to(icon, {
      scale: 1,
      rotate: 0,
      duration: 0.25,
      ease: "power2.out",
    });
  };

  return (
    <section
      ref={sectionRef}
      id="features"
      aria-label="ARCADELX product features"
      className="relative overflow-hidden border-y border-white/[0.06] bg-[#030817] py-10 text-white sm:py-12 lg:py-14"
    >
      {/* Background */}
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
      >
        {/* Main radial background */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_35%,rgba(0,195,255,0.10),transparent_25%),radial-gradient(circle_at_50%_48%,rgba(64,105,255,0.07),transparent_30%),radial-gradient(circle_at_85%_35%,rgba(217,70,239,0.10),transparent_25%)]" />

        {/* Top neon line */}
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-cyan-400/70 via-blue-400/40 to-fuchsia-500/70" />

        {/* Bottom subtle line */}
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-fuchsia-400/20 to-transparent" />

        {/* Glow blobs */}
        <div className="absolute left-[-8%] top-[25%] h-48 w-48 rounded-full bg-cyan-400/[0.06] blur-3xl" />
        <div className="absolute right-[-6%] top-[18%] h-56 w-56 rounded-full bg-fuchsia-500/[0.06] blur-3xl" />
        <div className="absolute left-1/2 bottom-[-35%] h-72 w-[30rem] -translate-x-1/2 rounded-full bg-blue-500/[0.05] blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-[1450px] px-5 sm:px-8 lg:px-10">
        {/* Heading */}
        <div className="text-center">
          <h2
            data-product-heading
            className="text-[clamp(30px,4.2vw,48px)] font-med uppercase leading-none tracking-[-0.045em] text-white drop-shadow-[0_0_18px_rgba(103,232,249,0.12)]"
          >
            Product Features
          </h2>

          <p
            data-product-subtitle
            className="mt-2 text-[11px] font-medium uppercase tracking-[0.11em] text-cyan-300 sm:text-sm"
          >
            Powerful. Engaging. Built For Everywhere.
          </p>
        </div>

        {/* Features */}
        <div className="mt-9 grid grid-cols-2 gap-x-4 gap-y-8 sm:mt-10 sm:grid-cols-3 sm:gap-x-6 sm:gap-y-10 md:grid-cols-4 lg:grid-cols-7 lg:gap-x-5">
          {FEATURES.map((feature) => {
            const Icon = feature.icon;

            return (
              <article
                key={feature.title}
                data-product-feature
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                className="group flex min-w-0 flex-col items-center text-center"
              >
                {/* Icon */}
                <div
                  data-product-icon
                  className={`flex h-16 w-16 items-center justify-center rounded-full border-2 border-current bg-[#061123]/90 transition-all duration-300 sm:h-[72px] sm:w-[72px] lg:h-20 lg:w-20 ${feature.color} ${feature.glow} group-hover:bg-white/[0.035]`}
                >
                  <Icon
                    size={31}
                    strokeWidth={1.9}
                    aria-hidden="true"
                  />
                </div>

                {/* Title */}
                <h3 className="mt-4 max-w-[145px] text-[11px] font-semibold leading-[1.15] text-white sm:text-xs lg:text-[13px]">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="mt-2 max-w-[135px] text-[10px] leading-4 text-slate-400 sm:text-[11px] sm:leading-[1.45]">
                  {feature.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}