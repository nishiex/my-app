"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  ShieldCheck,
  Eye,
  EyeSlash,
  Camera,
  CameraSlash,
  CreditCard,
  EnvelopeSimple,
  ShieldWarning,
  Lock,
  ArrowCircleDown,
  Storefront,
  ArrowRight,
  CheckCircle,
  XCircle,
  Info,
  Warning,
  Person,
  Globe,
  Database,
  Clock,
  Fingerprint,
  ArrowUpRight,
} from "../../components/Icon";

const NAV_SECTIONS = [
  { id: "pp1", label: "About ARCADELX" },
  { id: "pp2", label: "Important Privacy Statement" },
  { id: "pp3", label: "Information We May Collect" },
  { id: "pp4", label: "Information We Do Not Collect" },
  { id: "pp5", label: "How We Use Information" },
  { id: "pp6", label: "Motion-Sensing Data" },
  { id: "pp7", label: "Payment Information" },
  { id: "pp8", label: "Sharing of Information" },
  { id: "pp9", label: "Partner / Venue Information" },
  { id: "pp10", label: "Data Security" },
  { id: "pp11", label: "Data Retention" },
  { id: "pp12", label: "Children and Minors" },
  { id: "pp13", label: "Cookies and Website Data" },
  { id: "pp14", label: "Third-Party Links" },
  { id: "pp15", label: "Withdrawal of Consent" },
  { id: "pp16", label: "Grievance / Privacy Questions" },
  { id: "pp17", label: "Changes to This Policy" },
];

const sectionClass =
  "scroll-mt-28 border-b border-white/[0.06] py-10 md:py-14";

const bodyTextClass =
  "max-w-4xl text-[15px] leading-7 text-slate-300 md:text-base";

const headingClass =
  "mb-5 flex flex-wrap items-baseline gap-x-3 gap-y-1 text-2xl font-medium tracking-[-0.025em] text-white md:text-3xl";

const numberClass =
  "font-mono text-sm font-semibold tracking-[0.08em] text-cyan-300 md:text-base";

const cardClass =
  "rounded-2xl border border-white/[0.08] bg-white/[0.025] backdrop-blur-xl";

function MobileTOC() {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full lg:hidden">
      <button
        className="flex w-full items-center justify-between gap-4 rounded-xl border border-white/[0.1] bg-white/[0.035] px-4 py-3.5 text-left text-sm font-medium text-white backdrop-blur-xl transition-colors hover:border-cyan-300/30 hover:bg-white/[0.05]"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
      >
        <span>Table of Contents</span>
        <ArrowCircleDown
          size={18}
          weight="bold"
          className={`shrink-0 transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      {open && (
        <nav
          className="mt-2 overflow-hidden rounded-xl border border-white/[0.08] bg-[#071022]/95 p-2 shadow-[0_20px_60px_rgba(0,0,0,0.35)] backdrop-blur-xl"
          aria-label="Privacy policy contents"
        >
          {NAV_SECTIONS.map((s, i) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-slate-300 transition-colors hover:bg-cyan-300/[0.06] hover:text-white"
              onClick={() => setOpen(false)}
            >
              <span className="min-w-8 font-mono text-[11px] tracking-[0.08em] text-cyan-300/70">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span>{s.label}</span>
            </a>
          ))}
        </nav>
      )}
    </div>
  );
}

function DesktopSidebar({ activeId }: { activeId: string }) {
  return (
    <aside className="hidden lg:block" aria-label="Privacy policy navigation">
      <div className="sticky top-24 max-h-[calc(100vh-7rem)] overflow-y-auto pr-5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.22em] text-slate-500">
          Contents
        </p>

        <nav className="space-y-1">
          {NAV_SECTIONS.map((s, i) => {
            const active = activeId === s.id;

            return (
              <a
                key={s.id}
                href={`#${s.id}`}
                className={`group flex items-start gap-3 rounded-lg border px-3 py-2.5 text-sm leading-5 transition-all duration-200 ${
                  active
                    ? "border-cyan-300/20 bg-cyan-300/[0.06] text-white shadow-[inset_2px_0_0_rgba(103,232,249,0.9)]"
                    : "border-transparent text-slate-400 hover:border-white/[0.06] hover:bg-white/[0.025] hover:text-slate-200"
                }`}
              >
                <span
                  className={`min-w-7 pt-0.5 font-mono text-[10px] tracking-[0.08em] ${
                    active
                      ? "text-cyan-300"
                      : "text-slate-600 group-hover:text-slate-400"
                  }`}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span>{s.label}</span>
              </a>
            );
          })}
        </nav>
      </div>
    </aside>
  );
}

function HeroBackground() {
  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden"
      aria-hidden="true"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(0,215,255,0.16),transparent_30%),radial-gradient(circle_at_82%_35%,rgba(255,0,173,0.11),transparent_28%),linear-gradient(180deg,#050817_0%,#060b18_55%,#040611_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(84,200,255,0.14)_1px,transparent_1px),linear-gradient(90deg,rgba(84,200,255,0.14)_1px,transparent_1px)] bg-[length:52px_52px] opacity-[0.16] [mask-image:linear-gradient(to_bottom,black_0%,rgba(0,0,0,0.72)_60%,transparent_100%)] [-webkit-mask-image:linear-gradient(to_bottom,black_0%,rgba(0,0,0,0.72)_60%,transparent_100%)]" />
      <div className="absolute left-[8%] top-[12%] h-56 w-56 rounded-full bg-cyan-400/10 blur-3xl" />
      <div className="absolute right-[8%] top-[20%] h-64 w-64 rounded-full bg-fuchsia-500/10 blur-3xl" />

      <div className="absolute inset-x-0 bottom-[12%] flex justify-center gap-[10%] opacity-25">
        {[0, 1, 2, 3, 4].map((i) => (
          <span
            key={i}
            className="h-44 w-px -skew-x-[25deg] bg-gradient-to-b from-transparent via-cyan-300/40 to-transparent"
          />
        ))}
      </div>

      <div className="absolute bottom-[-12%] left-1/2 h-72 w-[36rem] -translate-x-1/2 rounded-full bg-blue-500/[0.08] blur-3xl" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-cyan-300/30 to-transparent" />
    </div>
  );
}

export default function PrivacyPolicyPage() {
  const root = useRef<HTMLElement>(null);
  const [activeId, setActiveId] = useState("pp1");

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const reduce = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      if (!reduce) {
        gsap.from('[data-privacy-hero-content] > *', {
          y: 24,
          opacity: 0,
          duration: 0.7,
          stagger: 0.1,
          ease: "power3.out",
          delay: 0.2,
        });

        const highlight = document.querySelector(
          "[data-privacy-highlight]"
        ) as HTMLElement | null;

        if (highlight) {
          gsap.from(highlight, {
            y: 30,
            opacity: 0,
            scale: 0.98,
            duration: 0.85,
            ease: "power3.out",
            scrollTrigger: {
              trigger: highlight,
              start: "top 85%",
              once: true,
            },
          });
        }
      }

      gsap.utils
        .toArray<HTMLElement>("[data-privacy-reveal]")
        .forEach((el) => {
          gsap.from(el, {
            y: reduce ? 0 : 20,
            opacity: reduce ? 1 : 0,
            duration: reduce ? 0 : 0.6,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 87%",
              once: true,
            },
          });
        });

      NAV_SECTIONS.forEach(({ id }) => {
        ScrollTrigger.create({
          trigger: `#${id}`,
          start: "top 40%",
          end: "bottom 40%",
          onEnter: () => setActiveId(id),
          onEnterBack: () => setActiveId(id),
        });
      });
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <main
      ref={root}
      className="min-h-screen overflow-x-hidden bg-[#040611] text-white"
    >

      {/* HERO */}
      <section
        className="relative isolate overflow-hidden border-b border-white/[0.06]"
        aria-label="Privacy Policy hero"
      >
        <HeroBackground />

        <div
          data-privacy-hero-content
          className="relative z-10 mx-auto flex min-h-[430px] max-w-7xl items-center px-5 py-24 sm:px-8 lg:px-12 lg:py-28"
        >
          <div className="max-w-3xl">
            <p className="mb-6 flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.22em] text-cyan-300">
              <span className="h-px w-8 bg-cyan-300/80" />
              <span>Legal · Privacy</span>
            </p>

            <h1 className="max-w-4xl text-4xl font-medium leading-[0.98] tracking-[-0.045em] text-white sm:text-5xl md:text-6xl lg:text-7xl">
              <span className="bg-gradient-to-r from-white via-cyan-100 to-fuchsia-300 bg-clip-text text-transparent">
                Privacy Policy
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-7 text-slate-300 md:text-lg md:leading-8">
              How ARCADELX collects, uses, protects, and handles information
              across its gaming kiosks and digital services.
            </p>
          </div>
        </div>
      </section>

      {/* PRIVACY HIGHLIGHT */}
      <div className="relative z-20 mx-auto -mt-10 max-w-6xl px-5 sm:px-8">
        <div
          data-privacy-highlight
          className="grid grid-cols-1 gap-6 rounded-2xl border border-cyan-300/15 bg-[linear-gradient(135deg,rgba(40,220,255,0.075),rgba(180,70,255,0.035))] p-5 shadow-[0_25px_90px_rgba(0,0,0,0.38)] backdrop-blur-xl md:grid-cols-[88px_minmax(0,1fr)] md:items-center md:p-8"
        >
          <div
            className="flex h-20 w-20 items-center justify-center rounded-2xl border border-cyan-300/20 bg-cyan-300/[0.055] text-cyan-300 shadow-[0_0_40px_rgba(34,211,238,0.1)]"
            aria-hidden="true"
          >
            <CameraSlash size={42} weight="duotone" />
          </div>

          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-cyan-300">
              Most Important Privacy Statement
            </p>

            <h2 className="mt-3 text-2xl font-semibold leading-tight tracking-[-0.03em] text-white md:text-3xl">
              ARCADELX Does Not Capture or Store User Images or Photographs.
            </h2>

            <p className="mt-4 max-w-4xl text-sm leading-7 text-slate-300 md:text-base">
              The camera and sensor technology in ARCADELX kiosks is designed
              exclusively for{" "}
              <strong className="text-white">
                real-time motion sensing and gameplay interaction
              </strong>
              . ARCADELX does not use this technology as a photography, CCTV,
              or video-recording system. Player images and video recordings are
              not intentionally captured, recorded, saved, or stored.
            </p>
          </div>
        </div>
      </div>

      {/* INTRO */}
      <div className="mx-auto mt-6 max-w-6xl px-5 sm:px-8">
        <div
          data-privacy-reveal
          className={`${cardClass} p-5 shadow-[0_25px_90px_rgba(0,0,0,0.28)] md:p-8`}
        >
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-4xl space-y-5">
              <p className="text-sm leading-7 text-slate-300 md:text-base">
                <strong className="text-white">
                  Nilee Games and Future Technologies Pvt. Ltd.
                </strong>{" "}
                respects user privacy and is committed to protecting information
                processed through <strong className="text-white">ARCADELX</strong>,
                its motion-sensing gaming kiosk and associated digital services.
                This Privacy Policy explains what information may be collected,
                why it is collected, how it is used, and the choices available
                to users.
              </p>

              <p className="text-sm leading-7 text-slate-300 md:text-base">
                This policy is issued in accordance with applicable Indian
                data-protection law, including the{" "}
                <strong className="text-white">
                  Digital Personal Data Protection Act, 2023
                </strong>{" "}
                and the{" "}
                <strong className="text-white">
                  Digital Personal Data Protection Rules, 2025
                </strong>
                .
              </p>
            </div>

            <p className="shrink-0 text-[10px] font-medium uppercase tracking-[0.16em] text-slate-500">
              Effective Date: 1 September 2025
            </p>
          </div>
        </div>
      </div>

      {/* MOBILE TOC */}
      <div className="mx-auto mt-6 max-w-6xl px-5 sm:px-8">
        <MobileTOC />
      </div>

      {/* MAIN CONTENT */}
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-5 py-12 sm:px-8 md:py-16 lg:grid-cols-[260px_minmax(0,1fr)] lg:gap-12 lg:px-12 xl:gap-16">
        <DesktopSidebar activeId={activeId} />

        <article className="min-w-0" aria-label="Privacy policy content">
          {/* SECTION 1 */}
          <section id="pp1" data-privacy-reveal className={sectionClass}>
            <h2 className={headingClass}>
              <span className={numberClass}>01.</span>
              About ARCADELX
            </h2>

            <p className={bodyTextClass}>
              ARCADELX is a{" "}
              <strong className="text-white">
                motion-sensing gaming and entertainment platform
              </strong>{" "}
              developed and operated by Nilee Games and Future Technologies Pvt.
              Ltd. Users interact with ARCADELX through physical kiosks,
              QR-based payment systems, games, and associated digital services
              deployed at partner venues including malls, schools, offices,
              hotels, gyms, and entertainment centres.
            </p>

            <p className={`${bodyTextClass} mt-5`}>
              This Privacy Policy applies to all users who interact with an
              ARCADELX kiosk or access related digital services.
            </p>
          </section>

          {/* SECTION 2 */}
          <section id="pp2" data-privacy-reveal className={sectionClass}>
            <h2 className={headingClass}>
              <span className={numberClass}>02.</span>
              Important Privacy Statement
            </h2>

            <div className="rounded-2xl border border-cyan-300/15 bg-cyan-300/[0.035] p-5 md:p-7">
              <div className="flex items-start gap-4">
                <EyeSlash
                  size={28}
                  weight="duotone"
                  className="mt-0.5 shrink-0 text-cyan-300"
                />
                <strong className="text-base leading-6 text-white md:text-lg">
                  ARCADELX Does Not Capture or Store User Images or Photographs
                </strong>
              </div>

              <ul className="mt-6 space-y-4">
                <li className="flex items-start gap-3 text-sm leading-7 text-slate-300 md:text-base">
                  <CheckCircle
                    size={15}
                    weight="duotone"
                    className="mt-1 shrink-0 text-cyan-300"
                  />
                  <span>
                    The camera/sensor technology is intended for{" "}
                    <strong className="text-white">
                      real-time motion sensing
                    </strong>{" "}
                    to enable gameplay interaction.
                  </span>
                </li>

                <li className="flex items-start gap-3 text-sm leading-7 text-slate-300 md:text-base">
                  <CheckCircle
                    size={15}
                    weight="duotone"
                    className="mt-1 shrink-0 text-cyan-300"
                  />
                  <span>
                    ARCADELX does not intentionally capture, record, save, or
                    store player photographs or video recordings.
                  </span>
                </li>

                <li className="flex items-start gap-3 text-sm leading-7 text-slate-300 md:text-base">
                  <CheckCircle
                    size={15}
                    weight="duotone"
                    className="mt-1 shrink-0 text-cyan-300"
                  />
                  <span>
                    Motion information may be temporarily processed during
                    gameplay to enable game mechanics.
                  </span>
                </li>

                <li className="flex items-start gap-3 text-sm leading-7 text-slate-300 md:text-base">
                  <CheckCircle
                    size={15}
                    weight="duotone"
                    className="mt-1 shrink-0 text-cyan-300"
                  />
                  <span>
                    The camera is <strong className="text-white">not used</strong>{" "}
                    as a photography, CCTV, or video-recording system.
                  </span>
                </li>
              </ul>
            </div>
          </section>

          {/* SECTION 3 */}
          <section id="pp3" data-privacy-reveal className={sectionClass}>
            <h2 className={headingClass}>
              <span className={numberClass}>03.</span>
              Information We May Collect
            </h2>

            <p className={bodyTextClass}>
              ARCADELX collects the minimum information necessary to operate its
              gaming kiosks and associated services. The two primary categories are:
            </p>

            <div className="mt-8 grid grid-cols-1 gap-4 lg:grid-cols-2">
              <div
                data-privacy-reveal
                className="rounded-2xl border border-cyan-300/15 bg-cyan-300/[0.025] p-5 md:p-7"
              >
                <div className="flex items-center gap-3 text-cyan-300">
                  <Database size={20} weight="duotone" />
                  <strong className="text-sm font-semibold text-white">
                    Gaming / Session Data
                  </strong>
                </div>

                <p className="mt-4 text-sm leading-7 text-slate-400">
                  Information generated during a gaming session, used to operate,
                  maintain, and improve ARCADELX:
                </p>

                <ul className="mt-5 space-y-2.5">
                  {[
                    "Kiosk ID",
                    "Game selected",
                    "Game / Session ID",
                    "Session start and end time",
                    "Session duration",
                    "Game score",
                    "Game performance / statistics",
                    "Game completion information",
                    "Number of sessions",
                    "Gameplay-related events",
                    "Technical / gameplay status",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-sm leading-6 text-slate-300"
                    >
                      <ArrowRight
                        size={11}
                        weight="bold"
                        className="mt-1.5 shrink-0 text-cyan-300"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div
                data-privacy-reveal
                className="rounded-2xl border border-blue-400/15 bg-blue-400/[0.025] p-5 md:p-7"
              >
                <div className="flex items-center gap-3 text-blue-300">
                  <CreditCard size={20} weight="duotone" />
                  <strong className="text-sm font-semibold text-white">
                    Transaction Data
                  </strong>
                </div>

                <p className="mt-4 text-sm leading-7 text-slate-400">
                  Information related to payments made at ARCADELX kiosks:
                </p>

                <ul className="mt-5 space-y-2.5">
                  {[
                    "Transaction ID",
                    "Payment status",
                    "Payment amount",
                    "Date and time of transaction",
                    "Kiosk / location ID",
                    "Order / session reference",
                    "Payment method or payment-provider reference",
                    "Refund status where applicable",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-sm leading-6 text-slate-300"
                    >
                      <ArrowRight
                        size={11}
                        weight="bold"
                        className="mt-1.5 shrink-0 text-blue-300"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex items-start gap-3 rounded-xl border border-blue-300/10 bg-blue-300/[0.04] p-4 text-sm leading-6 text-slate-300">
                  <Lock
                    size={14}
                    weight="duotone"
                    className="mt-1 shrink-0 text-blue-300"
                  />
                  <span>
                    ARCADELX does not store complete debit-card or credit-card
                    details, UPI PINs, CVVs, or banking credentials.
                  </span>
                </div>
              </div>
            </div>
          </section>

          {/* SECTION 4 */}
          <section id="pp4" data-privacy-reveal className={sectionClass}>
            <h2 className={headingClass}>
              <span className={numberClass}>04.</span>
              Information We Do Not Collect Through ARCADELX
            </h2>

            <p className={bodyTextClass}>
              ARCADELX is designed with privacy in mind. The following categories
              of sensitive information are{" "}
              <strong className="text-white">not collected</strong>:
            </p>

            <div className="mt-7 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {[
                { icon: <Camera size={16} weight="duotone" />, label: "Player photographs" },
                { icon: <Eye size={16} weight="duotone" />, label: "Player video recordings" },
                { icon: <Fingerprint size={16} weight="duotone" />, label: "Facial-recognition profiles" },
                { icon: <Fingerprint size={16} weight="duotone" />, label: "Face biometric templates" },
                { icon: <Fingerprint size={16} weight="duotone" />, label: "Fingerprints" },
                { icon: <Info size={16} weight="duotone" />, label: "Voice recordings" },
                { icon: <Info size={16} weight="duotone" />, label: "Aadhaar number" },
                { icon: <Info size={16} weight="duotone" />, label: "PAN number" },
                { icon: <Lock size={16} weight="duotone" />, label: "Bank account passwords" },
                { icon: <Lock size={16} weight="duotone" />, label: "UPI PIN" },
                { icon: <CreditCard size={16} weight="duotone" />, label: "Credit / debit card CVV" },
                { icon: <ShieldWarning size={16} weight="duotone" />, label: "Other sensitive authentication credentials" },
              ].map(({ icon, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-3 rounded-xl border border-white/[0.07] bg-white/[0.02] p-4 text-sm text-slate-300"
                >
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-fuchsia-300/15 bg-fuchsia-300/[0.05] text-fuchsia-300">
                    <XCircle size={15} weight="duotone" />
                  </span>
                  <span className="text-slate-200">{icon}</span>
                  <span>{label}</span>
                </div>
              ))}
            </div>
          </section>

          {/* SECTION 5 */}
          <section id="pp5" data-privacy-reveal className={sectionClass}>
            <h2 className={headingClass}>
              <span className={numberClass}>05.</span>
              How We Use Information
            </h2>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div
                data-privacy-reveal
                className="rounded-2xl border border-cyan-300/15 bg-cyan-300/[0.025] p-5 md:p-6"
              >
                <div className="flex items-center gap-3 text-cyan-300">
                  <Person size={20} weight="duotone" />
                  <strong className="text-sm font-semibold text-white">
                    Gameplay
                  </strong>
                </div>

                <ul className="mt-5 space-y-2.5">
                  {[
                    "Detect player movement",
                    "Enable motion-based gameplay",
                    "Start and manage gaming sessions",
                    "Record scores and game results",
                    "Maintain game progress where applicable",
                  ].map((item) => (
                    <li key={item} className="flex gap-2 text-sm leading-6 text-slate-300">
                      <ArrowRight size={11} weight="bold" className="mt-1.5 shrink-0 text-cyan-300" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div
                data-privacy-reveal
                className="rounded-2xl border border-blue-400/15 bg-blue-400/[0.025] p-5 md:p-6"
              >
                <div className="flex items-center gap-3 text-blue-300">
                  <CreditCard size={20} weight="duotone" />
                  <strong className="text-sm font-semibold text-white">
                    Payment Processing
                  </strong>
                </div>

                <ul className="mt-5 space-y-2.5">
                  {[
                    "Confirm payments",
                    "Activate paid gaming sessions",
                    "Verify failed or pending transactions",
                    "Process eligible refunds",
                    "Resolve payment-related complaints",
                  ].map((item) => (
                    <li key={item} className="flex gap-2 text-sm leading-6 text-slate-300">
                      <ArrowRight size={11} weight="bold" className="mt-1.5 shrink-0 text-blue-300" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div
                data-privacy-reveal
                className="rounded-2xl border border-fuchsia-400/15 bg-fuchsia-400/[0.025] p-5 md:p-6"
              >
                <div className="flex items-center gap-3 text-fuchsia-300">
                  <Database size={20} weight="duotone" />
                  <strong className="text-sm font-semibold text-white">
                    Operations
                  </strong>
                </div>

                <ul className="mt-5 space-y-2.5">
                  {[
                    "Monitor kiosk status",
                    "Detect technical problems",
                    "Maintain the ARCADELX platform",
                    "Provide customer support",
                    "Prevent fraudulent transactions",
                    "Maintain transaction and operational records",
                  ].map((item) => (
                    <li key={item} className="flex gap-2 text-sm leading-6 text-slate-300">
                      <ArrowRight size={11} weight="bold" className="mt-1.5 shrink-0 text-fuchsia-300" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div
                data-privacy-reveal
                className="rounded-2xl border border-violet-400/15 bg-violet-400/[0.025] p-5 md:p-6"
              >
                <div className="flex items-center gap-3 text-violet-300">
                  <Globe size={20} weight="duotone" />
                  <strong className="text-sm font-semibold text-white">
                    Analytics &amp; Improvement
                  </strong>
                </div>

                <p className="mt-4 text-sm leading-7 text-slate-400">
                  Aggregated or appropriately de-identified information may be
                  used to understand:
                </p>

                <ul className="mt-4 space-y-2.5">
                  {[
                    "Games played",
                    "Session frequency",
                    "Game performance",
                    "Kiosk usage",
                    "Technical performance",
                    "General usage patterns",
                  ].map((item) => (
                    <li key={item} className="flex gap-2 text-sm leading-6 text-slate-300">
                      <ArrowRight size={11} weight="bold" className="mt-1.5 shrink-0 text-violet-300" />
                      {item}
                    </li>
                  ))}
                </ul>

                <p className="mt-5 rounded-xl border border-violet-300/10 bg-violet-300/[0.04] p-3 text-sm leading-6 text-slate-300">
                  This helps improve ARCADELX games, hardware, software, and services.
                </p>
              </div>
            </div>
          </section>

          {/* SECTION 6 */}
          <section id="pp6" data-privacy-reveal className={sectionClass}>
            <h2 className={headingClass}>
              <span className={numberClass}>06.</span>
              Motion-Sensing Data
            </h2>

            <div className="grid grid-cols-1 gap-6 overflow-hidden rounded-2xl border border-cyan-300/15 bg-[linear-gradient(135deg,rgba(34,211,238,0.055),rgba(120,70,255,0.03))] p-5 md:grid-cols-[180px_minmax(0,1fr)] md:p-7">
              <div
                className="relative flex min-h-44 items-center justify-center overflow-hidden rounded-xl border border-white/[0.07] bg-black/20"
                aria-hidden="true"
              >
                <div className="absolute h-36 w-36 rounded-full border border-cyan-300/20" />
                <div className="absolute h-28 w-28 rounded-full border border-cyan-300/15" />
                <div className="absolute h-20 w-20 rounded-full border border-fuchsia-300/15" />
                <div className="absolute h-3 w-3 rounded-full bg-cyan-300 shadow-[0_0_30px_rgba(34,211,238,0.9)]" />
                <Person
                  size={36}
                  weight="duotone"
                  className="relative z-10 text-cyan-200"
                />
              </div>

              <div>
                <p className="text-sm leading-7 text-slate-300 md:text-base">
                  ARCADELX uses{" "}
                  <strong className="text-white">
                    motion-sensing technology
                  </strong>{" "}
                  that enables players to interact through body movement.
                  Depending on kiosk configuration, the system may temporarily
                  process information relating to body position, movement, or
                  tracking points.
                </p>

                <ul className="mt-6 space-y-4">
                  <li className="flex gap-3 text-sm leading-7 text-slate-300">
                    <CheckCircle size={14} weight="duotone" className="mt-1 shrink-0 text-cyan-300" />
                    <span>Such information is used solely to operate the game.</span>
                  </li>
                  <li className="flex gap-3 text-sm leading-7 text-slate-300">
                    <CheckCircle size={14} weight="duotone" className="mt-1 shrink-0 text-cyan-300" />
                    <span>It is not intended to identify an individual player.</span>
                  </li>
                  <li className="flex gap-3 text-sm leading-7 text-slate-300">
                    <EyeSlash size={14} weight="duotone" className="mt-1 shrink-0 text-fuchsia-300" />
                    <span>
                      The functionality is <strong className="text-white">not</strong> used to
                      create facial-recognition profiles or identify individuals.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* SECTION 7 */}
          <section id="pp7" data-privacy-reveal className={sectionClass}>
            <h2 className={headingClass}>
              <span className={numberClass}>07.</span>
              Payment Information
            </h2>

            <div
              data-privacy-reveal
              className="rounded-2xl border border-blue-400/15 bg-blue-400/[0.025] p-5 md:p-7"
            >
              <div className="flex items-center gap-3 text-blue-300">
                <CreditCard size={22} weight="duotone" />
                <strong className="text-base text-white">
                  Secure Payment Handling
                </strong>
              </div>

              <p className="mt-5 text-sm leading-7 text-slate-300 md:text-base">
                Payments through ARCADELX kiosks are processed by authorized
                third-party payment gateways. Nilee Games generally receives
                transaction and payment-status information required to:
              </p>

              <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {[
                  "Confirm transactions",
                  "Activate gaming sessions",
                  "Reconcile payments",
                  "Handle refunds",
                  "Provide customer support",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-2 rounded-xl border border-white/[0.07] bg-white/[0.02] p-4 text-sm text-slate-300"
                  >
                    <CheckCircle size={13} weight="duotone" className="mt-0.5 shrink-0 text-cyan-300" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-6 flex items-start gap-3 rounded-xl border border-blue-300/10 bg-blue-300/[0.035] p-4 text-sm leading-6 text-slate-300">
                <Lock size={16} weight="duotone" className="mt-0.5 shrink-0 text-blue-300" />
                <span>
                  Sensitive payment credentials such as{" "}
                  <strong className="text-white">UPI PIN</strong>,{" "}
                  <strong className="text-white">CVV</strong>, and{" "}
                  <strong className="text-white">banking passwords</strong> are
                  not collected or stored by ARCADELX.
                </span>
              </div>
            </div>
          </section>

          {/* SECTION 8 */}
          <section id="pp8" data-privacy-reveal className={sectionClass}>
            <h2 className={headingClass}>
              <span className={numberClass}>08.</span>
              Sharing of Information
            </h2>

            <div
              data-privacy-reveal
              className="flex items-center gap-3 rounded-xl border border-cyan-300/15 bg-cyan-300/[0.035] p-4 text-sm text-slate-200 md:p-5"
            >
              <ShieldCheck size={20} weight="duotone" className="shrink-0 text-cyan-300" />
              <span>
                ARCADELX does{" "}
                <strong className="text-white">not sell or rent</strong> users'
                personal information to third parties.
              </span>
            </div>

            <p className={`${bodyTextClass} mt-6`}>
              Information may be shared with trusted service providers who
              assist in operating the ARCADELX platform under appropriate
              agreements:
            </p>

            <div className="mt-7 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {[
                { icon: <CreditCard size={18} weight="duotone" />, label: "Payment gateway providers" },
                { icon: <Database size={18} weight="duotone" />, label: "Cloud / server infrastructure providers" },
                { icon: <Globe size={18} weight="duotone" />, label: "Hosting providers" },
                { icon: <Info size={18} weight="duotone" />, label: "Technical service providers" },
                { icon: <Globe size={18} weight="duotone" />, label: "Analytics or monitoring providers" },
                { icon: <EnvelopeSimple size={18} weight="duotone" />, label: "Customer-support / service providers" },
              ].map(({ icon, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-3 rounded-xl border border-white/[0.08] bg-white/[0.025] px-4 py-4 text-sm text-slate-300"
                >
                  <span className="text-cyan-300">{icon}</span>
                  <span>{label}</span>
                </div>
              ))}
            </div>

            <p className={`${bodyTextClass} mt-6`}>
              Information may also be disclosed where required by applicable law,
              legal process, or governmental authority, or to protect the security
              and rights of ARCADELX, Nilee Games, users, or the public.
            </p>
          </section>

          {/* SECTION 9 */}
          <section id="pp9" data-privacy-reveal className={sectionClass}>
            <h2 className={headingClass}>
              <span className={numberClass}>09.</span>
              Partner / Venue Information
            </h2>

            <p className={bodyTextClass}>
              ARCADELX kiosks are deployed at partner venues. Limited operational
              and transaction information may be accessible to a location partner
              for the purposes of managing the kiosk deployment at their venue.
              Partners are{" "}
              <strong className="text-white">not authorized</strong> to access personal
              information beyond what is reasonably required for their role.
            </p>

            <div className="mt-7 grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3">
              {[
                "Malls",
                "Restaurants",
                "Hotels",
                "Schools",
                "Corporate Offices",
                "Gyms",
                "Entertainment Centres",
                "Events",
                "Other Partner Locations",
              ].map((v) => (
                <div
                  key={v}
                  className="flex items-center gap-3 rounded-xl border border-white/[0.08] bg-white/[0.025] px-4 py-3.5 text-sm text-slate-300"
                >
                  <Storefront size={13} weight="duotone" className="shrink-0 text-cyan-300" />
                  <span>{v}</span>
                </div>
              ))}
            </div>
          </section>

          {/* SECTION 10 */}
          <section id="pp10" data-privacy-reveal className={sectionClass}>
            <h2 className={headingClass}>
              <span className={numberClass}>10.</span>
              Data Security
            </h2>

            <p className={bodyTextClass}>
              Nilee Games implements reasonable technical and organizational
              measures to protect information processed through ARCADELX:
            </p>

            <div className="mt-7 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {[
                { icon: <Lock size={20} weight="duotone" />, label: "Access Controls", desc: "Role-based access to systems and data" },
                { icon: <ShieldCheck size={20} weight="duotone" />, label: "Authentication", desc: "Secure authentication for administrative access" },
                { icon: <Globe size={20} weight="duotone" />, label: "Secure Communication", desc: "Encrypted data transmission" },
                { icon: <Database size={20} weight="duotone" />, label: "Server Security", desc: "Hardened server configurations" },
                { icon: <Eye size={20} weight="duotone" />, label: "Restricted Access", desc: "Minimal administrative access privileges" },
                { icon: <Info size={20} weight="duotone" />, label: "Monitoring & Logging", desc: "System activity monitoring and logs" },
                { icon: <Database size={20} weight="duotone" />, label: "Backup & Recovery", desc: "Data backup and recovery procedures" },
                { icon: <CreditCard size={20} weight="duotone" />, label: "Payment Security", desc: "Third-party payment-provider security mechanisms" },
              ].map(({ icon, label, desc }) => (
                <div
                  key={label}
                  data-privacy-reveal
                  className="rounded-2xl border border-white/[0.08] bg-white/[0.025] p-5 transition-colors hover:border-cyan-300/20 hover:bg-white/[0.04]"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-cyan-300/10 bg-cyan-300/[0.045] text-cyan-300">
                    {icon}
                  </span>
                  <strong className="mt-4 block text-sm font-semibold text-white">
                    {label}
                  </strong>
                  <p className="mt-2 text-sm leading-6 text-slate-400">{desc}</p>
                </div>
              ))}
            </div>

            <div
              data-privacy-reveal
              className="mt-5 flex items-start gap-3 rounded-xl border border-white/[0.07] bg-white/[0.02] p-4 text-sm leading-6 text-slate-300"
            >
              <Info size={17} weight="duotone" className="mt-0.5 shrink-0 text-cyan-300" />
              <p>
                No electronic system or internet transmission can be guaranteed
                to be completely secure. Nilee Games takes reasonable steps to
                protect information but cannot guarantee absolute security.
              </p>
            </div>
          </section>

          {/* SECTION 11 */}
          <section id="pp11" data-privacy-reveal className={sectionClass}>
            <h2 className={headingClass}>
              <span className={numberClass}>11.</span>
              Data Retention
            </h2>

            <p className={bodyTextClass}>
              Information may be retained for as long as reasonably necessary for
              the following purposes:
            </p>

            <div className="mt-7 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {[
                { icon: <Database size={16} weight="duotone" />, label: "Providing ARCADELX services" },
                { icon: <CreditCard size={16} weight="duotone" />, label: "Maintaining transaction records" },
                { icon: <EnvelopeSimple size={16} weight="duotone" />, label: "Customer support" },
                { icon: <Info size={16} weight="duotone" />, label: "Accounting and financial reconciliation" },
                { icon: <ShieldCheck size={16} weight="duotone" />, label: "Security and fraud prevention" },
                { icon: <Lock size={16} weight="duotone" />, label: "Legal and regulatory requirements" },
                { icon: <Clock size={16} weight="duotone" />, label: "Resolving disputes" },
              ].map(({ icon, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-3 rounded-xl border border-white/[0.07] bg-white/[0.02] p-4 text-sm text-slate-300"
                >
                  <span className="text-cyan-300">{icon}</span>
                  <span>{label}</span>
                </div>
              ))}
            </div>

            <p className={`${bodyTextClass} mt-6`}>
              Gaming and operational information may be retained in aggregated
              or de-identified form for longer periods for analytics and service
              improvement. Where information is no longer required for the above
              purposes and retention is not required by law, Nilee Games will
              take reasonable steps to delete or anonymize it.
            </p>
          </section>

          {/* SECTION 12 */}
          <section id="pp12" data-privacy-reveal className={sectionClass}>
            <h2 className={headingClass}>
              <span className={numberClass}>12.</span>
              Children and Minors
            </h2>

            <div
              data-privacy-reveal
              className="flex items-start gap-4 rounded-2xl border border-cyan-300/15 bg-cyan-300/[0.03] p-5 md:p-6"
            >
              <Person
                size={24}
                weight="duotone"
                className="mt-0.5 shrink-0 text-cyan-300"
              />

              <div className="min-w-0">
                <p className="text-sm leading-7 text-slate-300 md:text-base">
                  ARCADELX may be used by children and families at certain
                  partner locations. Parents, guardians, schools, or venues
                  should ensure appropriate and safe use by minors.
                </p>

                <ul className="mt-5 space-y-3">
                  <li className="flex gap-3 text-sm leading-6 text-slate-300">
                    <CheckCircle size={14} weight="duotone" className="mt-1 shrink-0 text-cyan-300" />
                    <span>
                      Applicable parental or guardian consent requirements will
                      be followed where required by law.
                    </span>
                  </li>
                  <li className="flex gap-3 text-sm leading-6 text-slate-300">
                    <CheckCircle size={14} weight="duotone" className="mt-1 shrink-0 text-cyan-300" />
                    <span>
                      ARCADELX does not intentionally use its camera system to
                      create or store photographs or facial profiles of children.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* SECTION 13 */}
          <section id="pp13" data-privacy-reveal className={sectionClass}>
            <h2 className={headingClass}>
              <span className={numberClass}>13.</span>
              Cookies and Website Data
            </h2>

            <p className={bodyTextClass}>
              The ARCADELX website may use cookies or similar technologies for:
            </p>

            <div className="mt-7 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {[
                "Website functionality",
                "Security",
                "Performance monitoring",
                "Understanding website usage",
                "Improving user experience",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-xl border border-white/[0.07] bg-white/[0.02] px-4 py-3.5 text-sm text-slate-300"
                >
                  <CheckCircle size={13} weight="duotone" className="shrink-0 text-cyan-300" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <p className={`${bodyTextClass} mt-6`}>
              Users may control cookie preferences through their browser
              settings. Disabling certain cookies may affect the functionality
              of the ARCADELX website.
            </p>
          </section>

          {/* SECTION 14 */}
          <section id="pp14" data-privacy-reveal className={sectionClass}>
            <h2 className={headingClass}>
              <span className={numberClass}>14.</span>
              Third-Party Links and Services
            </h2>

            <div
              data-privacy-reveal
              className="flex items-start gap-4 rounded-2xl border border-amber-300/15 bg-amber-300/[0.035] p-5 md:p-6"
            >
              <Warning
                size={20}
                weight="duotone"
                className="mt-0.5 shrink-0 text-amber-300"
              />

              <div>
                <strong className="text-sm font-semibold text-white">
                  External Links Notice
                </strong>
                <p className="mt-2 text-sm leading-7 text-slate-400 md:text-base">
                  ARCADELX may contain links to third-party websites,
                  applications, or services. Nilee Games is not responsible
                  for the privacy practices of third parties. Users should
                  review third-party privacy policies before providing any
                  information to those services.
                </p>
              </div>
            </div>
          </section>

          {/* SECTION 15 */}
          <section id="pp15" data-privacy-reveal className={sectionClass}>
            <h2 className={headingClass}>
              <span className={numberClass}>15.</span>
              Withdrawal of Consent
            </h2>

            <div
              data-privacy-reveal
              className="rounded-2xl border border-cyan-300/15 bg-[linear-gradient(135deg,rgba(34,211,238,0.05),rgba(217,70,239,0.025))] p-5 md:p-7"
            >
              <div className="flex items-center gap-3 text-cyan-300">
                <EnvelopeSimple size={22} weight="duotone" />
                <strong className="text-base text-white">
                  Want to Withdraw Consent?
                </strong>
              </div>

              <p className="mt-5 text-sm text-slate-400">
                Contact Nilee Games at:
              </p>

              <a
                className="mt-1 inline-flex text-lg font-semibold text-cyan-300 transition-colors hover:text-white"
                href="mailto:info@nileegames.com"
              >
                info@nileegames.com
              </a>

              <p className="mt-6 text-sm leading-7 text-slate-300">
                Where processing is based on consent, users may request
                withdrawal of consent by contacting Nilee Games. Please note:
              </p>

              <ul className="mt-5 space-y-3">
                <li className="flex gap-2 text-sm leading-7 text-slate-300">
                  <ArrowRight size={12} weight="bold" className="mt-1.5 shrink-0 text-cyan-300" />
                  <span>
                    Withdrawal does not necessarily affect processing that is
                    legally permitted or required independently of consent.
                  </span>
                </li>
                <li className="flex gap-2 text-sm leading-7 text-slate-300">
                  <ArrowRight size={12} weight="bold" className="mt-1.5 shrink-0 text-cyan-300" />
                  <span>
                    Withdrawal may affect the ability to provide certain
                    ARCADELX services where the information is necessary to
                    deliver those services.
                  </span>
                </li>
              </ul>
            </div>
          </section>

          {/* SECTION 16 */}
          <section id="pp16" data-privacy-reveal className={sectionClass}>
            <h2 className={headingClass}>
              <span className={numberClass}>16.</span>
              Grievance / Privacy Questions
            </h2>

            <div
              data-privacy-reveal
              className="rounded-2xl border border-fuchsia-300/15 bg-fuchsia-300/[0.03] p-5 md:p-7"
            >
              <div className="flex items-start gap-4">
                <ShieldCheck
                  size={26}
                  weight="duotone"
                  className="mt-0.5 shrink-0 text-fuchsia-300"
                />

                <div>
                  <strong className="text-base font-semibold text-white">
                    Privacy &amp; Grievance Contact
                  </strong>

                  <p className="mt-2 text-sm leading-7 text-slate-400">
                    Nilee Games and Future Technologies Pvt. Ltd.
                    <br />
                    ARCADELX – Limitless Gaming Xperience
                  </p>
                </div>
              </div>

              <a
                className="mt-5 inline-flex text-lg font-semibold text-cyan-300 transition-colors hover:text-white"
                href="mailto:info@nileegames.com"
              >
                info@nileegames.com
              </a>

              <p className="mt-5 text-sm leading-7 text-slate-400">
                When raising a privacy concern or grievance, please provide
                sufficient information about your concern so it can be
                investigated and addressed appropriately. Nilee Games will
                make reasonable efforts to respond to privacy enquiries in a
                timely manner.
              </p>
            </div>
          </section>

          {/* SECTION 17 */}
          <section
            id="pp17"
            data-privacy-reveal
            className="scroll-mt-28 py-10 md:py-14"
          >
            <h2 className={headingClass}>
              <span className={numberClass}>17.</span>
              Changes to This Privacy Policy
            </h2>

            <p className={bodyTextClass}>
              Nilee Games may periodically update this Privacy Policy to reflect
              changes in:
            </p>

            <div className="mt-7 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {[
                "ARCADELX features and services",
                "Technology and data-processing practices",
                "Legal or regulatory requirements",
                "Security and privacy standards",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 rounded-xl border border-white/[0.07] bg-white/[0.02] p-4 text-sm leading-6 text-slate-300"
                >
                  <ArrowUpRight
                    size={14}
                    weight="bold"
                    className="mt-0.5 shrink-0 text-cyan-300"
                  />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <p className={`${bodyTextClass} mt-6`}>
              The updated Privacy Policy will be published on the ARCADELX
              website with a revised Effective Date. Continued use of ARCADELX
              services after publication of an updated policy constitutes
              acceptance of the revised terms.
            </p>

            <p className={`${bodyTextClass} mt-5`}>
              For any questions about this Privacy Policy, please contact Nilee
              Games at{" "}
              <a
                className="font-medium text-cyan-300 underline decoration-cyan-300/30 underline-offset-4 transition-colors hover:text-white"
                href="mailto:info@nileegames.com"
              >
                info@nileegames.com
              </a>
              .
            </p>
          </section>
        </article>
      </div>

      
    </main>
  );
}
