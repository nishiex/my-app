'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import {
  Heart,
  UsersRound,
  ChartNoAxesColumnIncreasing,
  Star,
  Leaf,
  Gamepad2,
  Building2,
  Trophy,
  ArrowRight,
} from 'lucide-react';

const BENEFITS = [
  { icon: Heart, label: 'Promotes\nActive Lifestyle', color: '#ff2fb0' },
  { icon: UsersRound, label: 'Increases\nEngagement', color: '#22d3ee' },
  { icon: ChartNoAxesColumnIncreasing, label: 'New Revenue\nStream', color: '#fb923c' },
  { icon: Star, label: 'Premium\nLook & Feel', color: '#e879f9' },
  { icon: Leaf, label: 'Ideal for All\nAge Groups', color: '#4ade80' },
] as const;

const STATS = [
  { icon: Gamepad2, value: '50+', label: 'Games', accent: 'magenta' },
  { icon: UsersRound, value: '100K+', label: 'Happy Players', accent: 'cyan' },
  { icon: Building2, value: '200+', label: 'Locations (Target)', accent: 'cyan' },
  { icon: Trophy, value: '99%', label: 'Positive Feedback', accent: 'magenta' },
] as const;

export default function WhyArcadeLX() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const benefitRefs = useRef<Array<HTMLDivElement | null>>([]);
  const ctaBtnRef = useRef<HTMLAnchorElement | null>(null);

  useEffect(() => {
    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const ctx = gsap.context(() => {
      if (prefersReducedMotion) return;

      const tl = gsap.timeline({
        defaults: { ease: 'power3.out' },
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
      });

      tl.from('[data-arclx="eyebrow-line"]', {
        scaleX: 0,
        transformOrigin: 'left center',
        duration: 0.6,
      })
        .from(
          '[data-arclx="heading"]',
          { y: 24, opacity: 0, duration: 0.6 },
          '-=0.3'
        )
        .from(
          '[data-arclx="subtitle"]',
          { y: 16, opacity: 0, duration: 0.5 },
          '-=0.4'
        )
        .from(
          '[data-arclx="learn-more"]',
          { y: 16, opacity: 0, duration: 0.5 },
          '-=0.4'
        )
        .from(
          benefitRefs.current.filter(Boolean),
          { y: 20, opacity: 0, duration: 0.45, stagger: 0.08 },
          '-=0.3'
        )
        .from(
          '[data-arclx="cta-panel"]',
          { x: 24, opacity: 0, duration: 0.5 },
          '-=0.4'
        )
        .from(
          '[data-arclx="stat"]',
          { y: 20, opacity: 0, duration: 0.4, stagger: 0.1 },
          '-=0.3'
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleIconEnter = (el: HTMLDivElement | null) => {
    if (!el) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    gsap.to(el, { y: -4, scale: 1.08, duration: 0.25, ease: 'power2.out' });
  };

  const handleIconLeave = (el: HTMLDivElement | null) => {
    if (!el) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    gsap.to(el, { y: 0, scale: 1, duration: 0.3, ease: 'power2.out' });
  };

  const handleCtaEnter = () => {
    if (!ctaBtnRef.current) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    gsap.to(ctaBtnRef.current, { scale: 1.04, duration: 0.2, ease: 'power2.out' });
  };

  const handleCtaLeave = () => {
    if (!ctaBtnRef.current) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    gsap.to(ctaBtnRef.current, { scale: 1, duration: 0.25, ease: 'power2.out' });
  };

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-[#05060f] py-6 sm:py-8"
    >
      {/* top gradient line */}
      <div
        data-arclx="eyebrow-line"
        className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-pink-500"
      />

      {/* subtle glows */}
      <div className="pointer-events-none absolute -left-24 -top-24 h-64 w-64 rounded-full bg-cyan-500/10 blur-3xl" />
      <div className="pointer-events-none absolute right-0 top-1/3 h-72 w-72 rounded-full bg-fuchsia-500/10 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-1/3 h-56 w-56 rounded-full bg-purple-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-6 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
          <div className="text-left">
            <h2
              data-arclx="heading"
              className="text-2xl font-medium uppercase tracking-tight text-white sm:text-3xl"
            >
              Why ArcadeLX?
            </h2>
            <p
              data-arclx="subtitle"
              className="mt-1 text-sm text-gray-400 sm:text-base"
            >
              More Than Just Games. A Healthier, Happier Tomorrow.
            </p>
          </div>

         
        </div>

        {/* Benefits + CTA row */}
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between lg:gap-8">
          {/* Benefits */}
          <div className="grid grid-cols-3 gap-x-3 gap-y-5 sm:grid-cols-5 lg:flex lg:flex-1 lg:justify-between lg:gap-4">
            {BENEFITS.map((benefit, i) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={benefit.label}
                  className="flex flex-col items-center text-center"
                >
                  <div
                    ref={(el) => {
                      benefitRefs.current[i] = el;
                    }}
                    onMouseEnter={(e) => handleIconEnter(e.currentTarget)}
                    onMouseLeave={(e) => handleIconLeave(e.currentTarget)}
                    className="flex h-11 w-11 items-center justify-center sm:h-12 sm:w-12"
                    style={{
                      filter: `drop-shadow(0 0 8px ${benefit.color}99)`,
                    }}
                  >
                    <Icon
                      className="h-8 w-8 sm:h-9 sm:w-9"
                      style={{ color: benefit.color }}
                      strokeWidth={1.75}
                    />
                  </div>
                  <p className="mt-2 whitespace-pre-line text-[11px] font-medium leading-tight text-gray-300 sm:text-xs">
                    {benefit.label}
                  </p>
                </div>
              );
            })}
          </div>

          {/* CTA panel */}
          <div
            data-arclx="cta-panel"
            className="flex items-center gap-4 rounded-2xl border border-cyan-400/30 bg-gradient-to-br from-[#0b0f22] to-[#150a24] px-4 py-3 shadow-[0_0_25px_-5px_rgba(34,211,238,0.35)] lg:shrink-0"
          >
            <div className="relative hidden h-20 w-16 shrink-0 sm:block">
              <Image
                src="/images/Kiosk_Machine_With Embalem_01_Transparent_Middle.png"
                alt="ArcadeLX Kiosk"
                fill
                className="object-contain"
                sizes="80px"
              />
            </div>

            <div className="flex flex-col gap-2">
              <p className="text-xs font-bold uppercase leading-tight text-white sm:text-sm">
                Turn Any Space
                <br />
                Into a Gaming Destination
              </p>
              <a
                ref={ctaBtnRef}
                onMouseEnter={handleCtaEnter}
                onMouseLeave={handleCtaLeave}
                href="#quote"
                className="inline-flex w-fit items-center gap-1.5 rounded-full bg-gradient-to-r from-cyan-400 to-fuchsia-500 px-4 py-1.5 text-xs font-semibold text-white transition-shadow hover:shadow-[0_0_15px_rgba(217,70,239,0.6)] sm:text-sm"
              >
                Get a Quote
                <ArrowRight className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>
        </div>

        {/* Stats strip */}
        <div className="relative mt-6 overflow-hidden rounded-xl bg-gradient-to-r from-blue-700/40 via-indigo-700/40 to-purple-700/40">
          <div className="grid grid-cols-2 divide-y divide-white/10 md:grid-cols-4 md:divide-x md:divide-y-0">
            {STATS.map((stat) => {
              const Icon = stat.icon;
              const isMagenta = stat.accent === 'magenta';
              return (
                <div
                  key={stat.label}
                  data-arclx="stat"
                  className="flex flex-col items-center justify-center gap-1 px-3 py-4 text-center"
                >
                  <Icon
                    className={`h-7 w-7 sm:h-8 sm:w-8 ${
                      isMagenta ? 'text-fuchsia-400' : 'text-cyan-300'
                    }`}
                    strokeWidth={1.75}
                  />
                  <span
                    className={`text-lg font-extrabold sm:text-xl ${
                      isMagenta ? 'text-fuchsia-300' : 'text-white'
                    }`}
                  >
                    {stat.value}
                  </span>
                  <span className="text-[11px] text-gray-300 sm:text-xs">
                    {stat.label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}