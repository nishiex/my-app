"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight, Check } from "lucide-react";

const BENEFITS = [
  "Best for Malls, Corporates, Schools, Gyms",
  "Flexible Purchase or Rental Options",
  "Pan India Support",
  "Custom Branding Available",
];

export default function ReadyToBringArcadeLX() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      const heading = sectionRef.current?.querySelector(
        "[data-cta-heading]"
      );
      const content = gsap.utils.toArray<HTMLElement>(
        "[data-cta-content]"
      );
      const visual = sectionRef.current?.querySelector(
        "[data-cta-visual]"
      );
      const benefits = gsap.utils.toArray<HTMLElement>(
        "[data-cta-benefit]"
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

      if (content.length) {
        gsap.from(content, {
          y: 18,
          opacity: 0,
          duration: 0.6,
          stagger: 0.08,
          ease: "power3.out",
          scrollTrigger: {
            trigger: content[0],
            start: "top 88%",
            once: true,
          },
        });
      }

      if (visual) {
        gsap.from(visual, {
          x: 35,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: visual,
            start: "top 85%",
            once: true,
          },
        });
      }

      if (benefits.length) {
        gsap.from(benefits, {
          x: 20,
          opacity: 0,
          duration: 0.55,
          stagger: 0.08,
          ease: "power2.out",
          scrollTrigger: {
            trigger: benefits[0],
            start: "top 88%",
            once: true,
          },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleVisualEnter = (
    event: React.MouseEvent<HTMLElement>
  ) => {
    gsap.to(event.currentTarget, {
      y: -4,
      duration: 0.25,
      ease: "power2.out",
    });
  };

  const handleVisualLeave = (
    event: React.MouseEvent<HTMLElement>
  ) => {
    gsap.to(event.currentTarget, {
      y: 0,
      duration: 0.25,
      ease: "power2.out",
    });
  };

  return (
    <section
      ref={sectionRef}
      id="contact"
      aria-label="Get your ARCADELX kiosk"
      className="relative overflow-hidden border-y border-white/[0.06] bg-[#030817] py-8 text-white sm:py-10"
    >
      {/* Background */}
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_16%_50%,rgba(0,190,255,0.10),transparent_28%),radial-gradient(circle_at_82%_50%,rgba(217,70,239,0.10),transparent_28%),linear-gradient(90deg,#050b19_0%,#030817_55%,#07142b_100%)]" />

        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-cyan-400/70 via-blue-400/40 to-fuchsia-500/70" />

        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-fuchsia-400/25 to-transparent" />

        <div className="absolute left-[-8%] top-1/2 h-48 w-48 -translate-y-1/2 rounded-full bg-cyan-400/[0.06] blur-3xl" />

        <div className="absolute right-[-6%] top-1/2 h-56 w-56 -translate-y-1/2 rounded-full bg-fuchsia-500/[0.06] blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-[1450px] px-5 sm:px-8 lg:px-10">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[0.86fr_1.14fr] lg:items-stretch lg:gap-5">
          {/* Left content */}
          <div className="flex flex-col justify-center py-2 lg:py-3">
            <h2
              data-cta-heading
              className="max-w-[620px] text-[clamp(28px,4vw,43px)] font-medium uppercase leading-[0.98] tracking-[-0.04em] text-white"
            >
              READY TO BRING{" "}
              <span className="bg-gradient-to-r from-fuchsia-400 to-pink-500 bg-clip-text text-transparent">
                ARCADELX
              </span>
              <br />
              TO YOUR SPACE?
            </h2>

            <p
              data-cta-content
              className="mt-3 max-w-[560px] text-xs leading-5 text-slate-300 sm:text-sm"
            >
              Get pricing, customization options, and installation support.
            </p>

            <div
              data-cta-content
              className="mt-5 flex flex-col gap-3 sm:flex-row"
            >
              <a
                href="mailto:hello@arcadelx.com"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-fuchsia-500 via-fuchsia-500 to-cyan-400 px-5 py-3 text-xs font-semibold text-white shadow-[0_0_28px_rgba(217,70,239,0.2)] transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_35px_rgba(34,211,238,0.22)]"
              >
                <span>Order Now</span>
                <ArrowRight
                  size={15}
                  strokeWidth={2.2}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </a>

              <a
                href="mailto:hello@arcadelx.com?subject=ARCADELX%20Demo%20Request"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-fuchsia-400/70 px-5 py-3 text-xs font-semibold text-cyan-300 transition-all duration-300 hover:border-cyan-300 hover:bg-cyan-300/[0.05] hover:text-white"
              >
                Request a Demo
              </a>
            </div>
          </div>

          {/* Right visual panel */}
          <div
            data-cta-visual
            onMouseEnter={handleVisualEnter}
            onMouseLeave={handleVisualLeave}
            className="relative min-h-[220px] overflow-hidden rounded-[22px] border border-cyan-400/25 bg-[#07162d]/80 shadow-[0_0_45px_rgba(34,211,238,0.07)] backdrop-blur-xl transition-colors duration-300 hover:border-fuchsia-400/40"
          >
            {/* Angled neon frame */}
            <div
              className="absolute inset-0 bg-[linear-gradient(115deg,transparent_0%,transparent_8%,rgba(34,211,238,0.72)_8.2%,rgba(34,211,238,0.18)_8.8%,transparent_9.5%,transparent_89%,rgba(217,70,239,0.55)_89.4%,rgba(217,70,239,0.12)_90%,transparent_90.6%,transparent_100%)]"
              aria-hidden="true"
            />

            <div
              className="absolute inset-[1px] rounded-[21px] bg-[#061227]"
              aria-hidden="true"
            />

            <div
              className="absolute right-[-8%] top-[-25%] h-40 w-40 rounded-full bg-fuchsia-500/[0.09] blur-3xl"
              aria-hidden="true"
            />

            <div
              className="absolute left-[-8%] bottom-[-25%] h-40 w-40 rounded-full bg-cyan-400/[0.08] blur-3xl"
              aria-hidden="true"
            />

            <div className="relative z-10 grid min-h-[220px] grid-cols-[115px_minmax(0,1fr)] items-center gap-4 px-4 py-5 sm:grid-cols-[145px_minmax(0,1fr)] sm:px-6">
              {/* Kiosk */}
              <div className="relative mx-auto h-[190px] w-[105px] sm:h-[205px] sm:w-[120px]">
                <div className="absolute inset-0 rounded-full bg-cyan-400/[0.08] blur-2xl" />

                <Image
                  src="/gallery/Machine_01.png"
                  alt="ARCADELX Gaming Kiosk"
                  fill
                  sizes="120px"
                  className="object-contain object-center drop-shadow-[0_0_22px_rgba(34,211,238,0.12)]"
                />
              </div>

              {/* Benefits */}
              <div className="min-w-0 py-1">
                <div className="space-y-3 sm:space-y-3.5">
                  {BENEFITS.map((benefit) => (
                    <div
                      key={benefit}
                      data-cta-benefit
                      className="flex items-start gap-3 text-xs text-slate-200 sm:text-sm"
                    >
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-fuchsia-500 to-cyan-400 text-[#04101d] shadow-[0_0_14px_rgba(217,70,239,0.18)]">
                        <Check size={13} strokeWidth={3} />
                      </span>

                      <span className="leading-5">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
