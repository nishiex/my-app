"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  ArrowUpRight,
  Warning,
  CheckCircle,
  XCircle,
  CreditCard,
  EnvelopeSimple,
  ShieldWarning,
  Info,
  Clock,
  ArrowCircleDown,
  Storefront,
  ArrowRight,
} from "../../components/Icon";


const NAV_SECTIONS = [
  { id: "s1", label: "How Payment Works" },
  { id: "s2", label: "Cancellation Before Payment" },
  { id: "s3", label: "Payment Confirmation" },
  { id: "s4", label: "Refunds After Payment" },
  { id: "s5", label: "When Refund May Be Provided" },
  { id: "s6", label: "When Refund Will Not Be Provided" },
  { id: "s7", label: "Payment Gateways" },
  { id: "s8", label: "Failed or Pending Payments" },
  { id: "s9", label: "Refund Processing" },
  { id: "s10", label: "How to Request a Refund" },
  { id: "s11", label: "Transaction Verification" },
  { id: "s12", label: "Chargebacks & Disputes" },
  { id: "s13", label: "No Cash Refunds" },
  { id: "s14", label: "Fraudulent Refund Claims" },
  { id: "s15", label: "Partner / Venue-Related Issues" },
  { id: "s16", label: "Policy Changes" },
];

const baseSectionClass =
  "scroll-mt-28 border-b border-white/[0.06] py-10 md:py-14";

const bodyTextClass =
  "max-w-4xl text-[15px] leading-7 text-slate-300 md:text-base";

const sectionHeadingClass =
  "mb-5 flex flex-wrap items-baseline gap-x-3 gap-y-1 text-2xl font-medium tracking-[-0.025em] text-white md:text-3xl";

const sectionNumberClass =
  "font-mono text-sm font-semibold tracking-[0.08em] text-cyan-300 md:text-base";

const glassCardClass =
  "rounded-2xl border border-white/[0.09] bg-white/[0.025] backdrop-blur-xl";

function MobileContents() {
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
          aria-label="Policy contents"
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
    <aside
      className="hidden lg:block"
      aria-label="Policy navigation"
    >
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
                    active ? "text-cyan-300" : "text-slate-600 group-hover:text-slate-400"
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
      <div
        className="absolute inset-0 bg-[linear-gradient(rgba(84,200,255,0.14)_1px,transparent_1px),linear-gradient(90deg,rgba(84,200,255,0.14)_1px,transparent_1px)] bg-[length:52px_52px] opacity-[0.16] [mask-image:linear-gradient(to_bottom,black_0%,rgba(0,0,0,0.72)_60%,transparent_100%)] [-webkit-mask-image:linear-gradient(to_bottom,black_0%,rgba(0,0,0,0.72)_60%,transparent_100%)]"
      />
      <div className="absolute left-[8%] top-[12%] h-56 w-56 rounded-full bg-cyan-400/10 blur-3xl" />
      <div className="absolute right-[8%] top-[20%] h-64 w-64 rounded-full bg-fuchsia-500/10 blur-3xl" />
      <div className="absolute bottom-[-12%] left-1/2 h-72 w-[36rem] -translate-x-1/2 rounded-full bg-blue-500/[0.08] blur-3xl" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-cyan-300/30 to-transparent" />
    </div>
  );
}

export default function RefundPolicyPage() {
  const root = useRef<HTMLElement>(null);
  const [activeId, setActiveId] = useState("s1");

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const reduce = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      if (!reduce) {
        gsap.from('[data-terms-hero-content] > *', {
          y: 24,
          opacity: 0,
          duration: 0.7,
          stagger: 0.1,
          ease: "power3.out",
          delay: 0.2,
        });
      }

      gsap.utils
        .toArray<HTMLElement>("[data-terms-reveal]")
        .forEach((el) => {
          gsap.from(el, {
            y: reduce ? 0 : 22,
            opacity: reduce ? 1 : 0,
            duration: reduce ? 0 : 0.65,
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
        aria-label="Refund & Cancellation Policy hero"
      >
        <HeroBackground />

        <div
          data-terms-hero-content
          className="relative z-10 mx-auto flex min-h-[430px] max-w-7xl items-center px-5 py-24 sm:px-8 lg:px-12 lg:py-28"
        >
          <div className="max-w-3xl">
            <p className="mb-6 flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.22em] text-cyan-300">
              <span className="h-px w-8 bg-cyan-300/80" />
              <span>Legal · Policy</span>
            </p>

            <h1 className="max-w-4xl text-4xl font-medium leading-[0.98] tracking-[-0.045em] text-white sm:text-5xl md:text-6xl lg:text-7xl">
              Refund &amp;&nbsp;
              <span className="bg-gradient-to-r from-white via-cyan-100 to-fuchsia-300 bg-clip-text text-transparent">
                Cancellation Policy
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-7 text-slate-300 md:text-lg md:leading-8">
              Understand how cancellations, payments, refunds, failed transactions,
              and gaming-session issues are handled at ARCADELX.
            </p>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <div className="relative z-20 mx-auto -mt-10 max-w-6xl px-5 sm:px-8">
        <div
          data-terms-reveal
          className={`${glassCardClass} p-5 shadow-[0_25px_90px_rgba(0,0,0,0.38)] md:p-8`}
        >
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <p className="max-w-4xl text-sm leading-7 text-slate-300 md:text-base">
              This Refund &amp; Cancellation Policy applies to users who make
              payments for gaming sessions through <strong className="text-white">ARCADELX</strong>{" "}
              motion-sensing gaming kiosks. ARCADELX is a product of{" "}
              <strong className="text-white">Nilee Games and Future Technologies Pvt. Ltd.</strong>{" "}
              ("Nilee Games", "we", "us", or "our"). By making a payment through an ARCADELX
              kiosk, you agree to the terms set out in this policy.
            </p>

            <p className="shrink-0 text-[10px] font-medium uppercase tracking-[0.16em] text-slate-500">
              Effective Date: 1 September 2025
            </p>
          </div>
        </div>
      </div>

      {/* MOBILE TOC */}
      <div className="mx-auto mt-6 max-w-6xl px-5 sm:px-8 lg:hidden">
        <MobileContents />
      </div>

      {/* MAIN CONTENT */}
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-5 py-12 sm:px-8 md:py-16 lg:grid-cols-[260px_minmax(0,1fr)] lg:gap-12 lg:px-12 xl:gap-16">
        <DesktopSidebar activeId={activeId} />

        <article
          className="min-w-0"
          aria-label="Policy content"
        >
          {/* QUICK REFERENCE */}
          <div
            data-terms-reveal
            className="mb-4 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3"
          >
            <div className="rounded-2xl border border-cyan-300/15 bg-cyan-300/[0.035] p-5 backdrop-blur-md">
              <CheckCircle size={22} weight="duotone" className="mb-4 text-cyan-300" />
              <strong className="block text-sm font-semibold text-white">
                Before Payment
              </strong>
              <p className="mt-2 text-sm leading-6 text-slate-400">
                Users can cancel or change their selected game before completing payment
                without any fee or penalty.
              </p>
            </div>

            <div className="rounded-2xl border border-fuchsia-400/15 bg-fuchsia-400/[0.035] p-5 backdrop-blur-md">
              <XCircle size={22} weight="duotone" className="mb-4 text-fuchsia-300" />
              <strong className="block text-sm font-semibold text-white">
                After Successful Payment
              </strong>
              <p className="mt-2 text-sm leading-6 text-slate-400">
                A paid gaming session is generally non-refundable once activated,
                subject to the exceptions described in this policy or applicable law.
              </p>
            </div>

            <div className="rounded-2xl border border-blue-400/15 bg-blue-400/[0.035] p-5 backdrop-blur-md">
              <Info size={22} weight="duotone" className="mb-4 text-blue-300" />
              <strong className="block text-sm font-semibold text-white">
                Technical Issues
              </strong>
              <p className="mt-2 text-sm leading-6 text-slate-400">
                If payment succeeds but the gaming session does not activate due to a
                verified technical issue, a full refund or replacement session may be considered.
              </p>
            </div>

            <div className="rounded-2xl border border-cyan-300/15 bg-cyan-300/[0.035] p-5 backdrop-blur-md">
              <Clock size={22} weight="duotone" className="mb-4 text-cyan-300" />
              <strong className="block text-sm font-semibold text-white">
                Refund Timeline
              </strong>
              <p className="mt-2 text-sm leading-6 text-slate-400">
                Once approved, refunds will normally be initiated within 3–7 business days,
                subject to verification and payment-system procedures.
              </p>
            </div>

            <div className="rounded-2xl border border-fuchsia-400/15 bg-fuchsia-400/[0.035] p-5 backdrop-blur-md">
              <ArrowUpRight size={22} weight="duotone" className="mb-4 text-fuchsia-300" />
              <strong className="block text-sm font-semibold text-white">
                Duplicate Payment
              </strong>
              <p className="mt-2 text-sm leading-6 text-slate-400">
                A verified duplicate payment may be eligible for a refund.
              </p>
            </div>

            <div className="rounded-2xl border border-amber-300/15 bg-amber-300/[0.04] p-5 backdrop-blur-md">
              <ShieldWarning size={22} weight="duotone" className="mb-4 text-amber-300" />
              <strong className="block text-sm font-semibold text-white">
                Security
              </strong>
              <p className="mt-2 text-sm leading-6 text-slate-400">
                Never send UPI PINs, OTPs, CVVs, passwords, or banking credentials to
                Nilee Games or anyone claiming to represent ARCADELX.
              </p>
            </div>
          </div>

          {/* SECTION 1 */}
          <section id="s1" data-terms-reveal className={baseSectionClass}>
            <h2 className={sectionHeadingClass}>
              <span className={sectionNumberClass}>01.</span>
              How ARCADELX Payment Works
            </h2>
            <p className={bodyTextClass}>
              ARCADELX gaming kiosks accept payments at the point of use. When a
              user selects a game and completes payment through an ARCADELX kiosk,
              a gaming session is activated. The payment process typically involves
              the user scanning a QR code or using another supported payment method
              to pay for the selected gaming session at the kiosk.
            </p>
          </section>

          {/* SECTION 2 */}
          <section id="s2" data-terms-reveal className={baseSectionClass}>
            <h2 className={sectionHeadingClass}>
              <span className={sectionNumberClass}>02.</span>
              Cancellation Before Payment
            </h2>
            <p className={bodyTextClass}>
              Prior to completing payment at an ARCADELX kiosk, a user may
              generally cancel the transaction or change the selected game without
              incurring a cancellation fee or penalty. Once payment is completed
              and a gaming session is activated, the transaction is treated as a
              completed gaming purchase and the terms in this policy apply.
            </p>
          </section>

          {/* SECTION 3 */}
          <section id="s3" data-terms-reveal className={baseSectionClass}>
            <h2 className={sectionHeadingClass}>
              <span className={sectionNumberClass}>03.</span>
              Payment Confirmation
            </h2>
            <p className={bodyTextClass}>
              A gaming session is considered confirmed when payment is
              successfully processed and a session is activated on the ARCADELX
              kiosk. Users should ensure they have selected the correct game and
              session parameters before completing payment, as changes after
              payment may not be possible under this policy unless a specific
              exception applies.
            </p>
          </section>

          {/* SECTION 4 */}
          <section id="s4" data-terms-reveal className={baseSectionClass}>
            <h2 className={sectionHeadingClass}>
              <span className={sectionNumberClass}>04.</span>
              Refunds After Successful Payment
            </h2>
            <p className={bodyTextClass}>
              As a general rule, payments made for gaming sessions through
              ARCADELX kiosks are non-refundable after the payment is successfully
              processed and the gaming session is activated. This is because the
              gaming service is considered delivered at the point of session
              activation.
            </p>
            <p className={`${bodyTextClass} mt-5`}>
              Exceptions to this general rule are described in Section 5 of this
              policy. Nothing in this policy is intended to limit any rights you
              may have under applicable consumer-protection laws.
            </p>
          </section>

          {/* SECTION 5 */}
          <section id="s5" data-terms-reveal className={baseSectionClass}>
            <h2 className={sectionHeadingClass}>
              <span className={sectionNumberClass}>05.</span>
              When a Refund May Be Provided
            </h2>

            <p className={bodyTextClass}>
              Nilee Games may, at its discretion and subject to verification,
              consider a refund or replacement gaming session in the following
              situations:
            </p>

            <div className="mt-8 grid grid-cols-1 gap-4">
              <div
                data-terms-reveal
                className="grid grid-cols-1 gap-5 rounded-2xl border border-cyan-300/15 bg-cyan-300/[0.03] p-5 md:grid-cols-[48px_minmax(0,1fr)] md:p-6"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-cyan-300/15 bg-cyan-300/[0.06] text-cyan-300">
                  <CheckCircle size={24} weight="duotone" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">
                    A. Payment Successful but Game Does Not Start
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-slate-400 md:text-base">
                    If payment is successfully deducted but the gaming session
                    does not start due to a technical or system issue at the
                    kiosk (not caused by the user), Nilee Games may, after
                    verification, provide:
                  </p>
                  <ul className="mt-4 space-y-2 text-sm leading-6 text-slate-300">
                    <li className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-300" />
                      <span>A full refund; or</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-300" />
                      <span>A replacement gaming session; or</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-300" />
                      <span>Another appropriate resolution.</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div
                data-terms-reveal
                className="grid grid-cols-1 gap-5 rounded-2xl border border-blue-400/15 bg-blue-400/[0.03] p-5 md:grid-cols-[48px_minmax(0,1fr)] md:p-6"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-blue-400/15 bg-blue-400/[0.06] text-blue-300">
                  <Info size={24} weight="duotone" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">
                    B. Technical Failure During Session
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-slate-400 md:text-base">
                    If a verified technical failure occurs with the ARCADELX
                    kiosk during a session that prevents the user from
                    completing the gaming session, Nilee Games may, after
                    verification, provide:
                  </p>
                  <ul className="mt-4 space-y-2 text-sm leading-6 text-slate-300">
                    <li className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-300" />
                      <span>A partial refund corresponding to the unused portion; or</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-300" />
                      <span>A replacement gaming session; or</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-300" />
                      <span>Another appropriate resolution.</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div
                data-terms-reveal
                className="grid grid-cols-1 gap-5 rounded-2xl border border-fuchsia-400/15 bg-fuchsia-400/[0.03] p-5 md:grid-cols-[48px_minmax(0,1fr)] md:p-6"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-fuchsia-400/15 bg-fuchsia-400/[0.06] text-fuchsia-300">
                  <ArrowUpRight size={24} weight="duotone" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">
                    C. Duplicate Payment
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-slate-400 md:text-base">
                    If a user is charged more than once for the same gaming
                    session due to a technical error, Nilee Games may, after
                    verification of the duplicate payment:
                  </p>
                  <ul className="mt-4 space-y-2 text-sm leading-6 text-slate-300">
                    <li className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-fuchsia-300" />
                      <span>Refund the duplicate charge; or</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-fuchsia-300" />
                      <span>Provide another appropriate resolution.</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div
                data-terms-reveal
                className="grid grid-cols-1 gap-5 rounded-2xl border border-cyan-300/15 bg-cyan-300/[0.03] p-5 md:grid-cols-[48px_minmax(0,1fr)] md:p-6"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-cyan-300/15 bg-cyan-300/[0.06] text-cyan-300">
                  <Clock size={24} weight="duotone" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">
                    D. Payment Deducted but Session Not Activated
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-slate-400 md:text-base">
                    If payment is deducted from the user's account but the
                    gaming session is not activated and the amount is not
                    automatically reversed, Nilee Games may, after
                    verification:
                  </p>
                  <ul className="mt-4 space-y-2 text-sm leading-6 text-slate-300">
                    <li className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-300" />
                      <span>Process a refund; or</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-300" />
                      <span>Activate a replacement session; or</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-300" />
                      <span>Provide another appropriate resolution.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* SECTION 6 */}
          <section id="s6" data-terms-reveal className={baseSectionClass}>
            <h2 className={sectionHeadingClass}>
              <span className={sectionNumberClass}>06.</span>
              When a Refund Will Generally Not Be Provided
            </h2>

            <p className={bodyTextClass}>
              Refunds will generally not be provided in the following situations
              once payment is successfully processed and the gaming session is
              activated:
            </p>

            <div className="mt-7 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {[
                "Change of mind after payment",
                "Changing the selected game after payment",
                "Voluntarily stopping the game before the session ends",
                "Not using the entire session duration",
                "Leaving the venue during a session",
                "Failure to follow gameplay instructions",
                "Failure to follow safety instructions",
                "Personal preference regarding the game",
                "User device, internet connection, or payment application issues after successful payment and service activation",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 rounded-xl border border-white/[0.07] bg-white/[0.02] p-4 text-sm leading-6 text-slate-300"
                >
                  <XCircle
                    size={16}
                    weight="duotone"
                    className="mt-0.5 shrink-0 text-fuchsia-300"
                  />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <p className="mt-6 rounded-xl border border-white/[0.07] bg-white/[0.02] px-4 py-3 text-sm leading-6 text-slate-400">
              This does not affect any rights available to you under applicable
              consumer-protection law.
            </p>
          </section>

          {/* SECTION 7 */}
          <section id="s7" data-terms-reveal className={baseSectionClass}>
            <h2 className={sectionHeadingClass}>
              <span className={sectionNumberClass}>07.</span>
              Payment Gateways
            </h2>

            <p className={bodyTextClass}>
              ARCADELX kiosks support a range of payment methods to provide
              users with convenience at the point of play:
            </p>

            <div className="mt-7 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {[
                { icon: <CreditCard size={20} weight="duotone" />, label: "UPI" },
                { icon: <ArrowCircleDown size={20} weight="duotone" />, label: "QR-Based Payments" },
                { icon: <CreditCard size={20} weight="duotone" />, label: "Credit Cards" },
                { icon: <CreditCard size={20} weight="duotone" />, label: "Debit Cards" },
                { icon: <Storefront size={20} weight="duotone" />, label: "Net Banking" },
                { icon: <ArrowRight size={20} weight="duotone" />, label: "Wallets" },
                { icon: <ArrowRight size={20} weight="duotone" />, label: "Other Supported Methods" },
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
              The availability of specific payment methods may vary by kiosk
              location. Payments are processed through third-party payment
              service providers. Nilee Games does not store card or UPI
              credentials on its systems.
            </p>
          </section>

          {/* SECTION 8 */}
          <section id="s8" data-terms-reveal className={baseSectionClass}>
            <h2 className={sectionHeadingClass}>
              <span className={sectionNumberClass}>08.</span>
              Failed or Pending Payments
            </h2>

            <div className="mt-7 grid grid-cols-1 gap-4 lg:grid-cols-3">
              <div
                data-terms-reveal
                className="rounded-2xl border border-red-400/15 bg-red-400/[0.025] p-5 md:p-6"
              >
                <div className="flex items-center gap-3 text-red-300">
                  <XCircle size={20} weight="duotone" />
                  <strong className="text-sm text-white">Failed Payment</strong>
                </div>
                <p className="mt-4 text-sm leading-7 text-slate-400">
                  If your payment fails and the gaming session is not activated,
                  no charge should have been applied to your account. If an
                  amount was deducted despite a failed payment status, please
                  allow time for an automatic reversal — which most payment
                  systems process within a few business days. If the amount is
                  not reversed, contact us with your transaction details.
                </p>
              </div>

              <div
                data-terms-reveal
                className="rounded-2xl border border-amber-300/15 bg-amber-300/[0.025] p-5 md:p-6"
              >
                <div className="flex items-center gap-3 text-amber-300">
                  <Clock size={20} weight="duotone" />
                  <strong className="text-sm text-white">Pending Payment</strong>
                </div>
                <p className="mt-4 text-sm leading-7 text-slate-400">
                  If your payment status shows as pending, avoid making
                  additional payment attempts for the same session wherever
                  reasonably possible to avoid a duplicate charge. Allow the
                  pending status to resolve. If the status remains unresolved,
                  contact your payment provider or us with your transaction
                  details.
                </p>
              </div>

              <div
                data-terms-reveal
                className="rounded-2xl border border-cyan-300/15 bg-cyan-300/[0.025] p-5 md:p-6"
              >
                <div className="flex items-center gap-3 text-cyan-300">
                  <CheckCircle size={20} weight="duotone" />
                  <strong className="text-sm text-white">Successful Payment</strong>
                </div>
                <p className="mt-4 text-sm leading-7 text-slate-400">
                  Once payment succeeds and a gaming session is activated, the
                  transaction is treated as a completed gaming purchase subject
                  to the terms of this policy. The general rule of
                  non-refundability applies, subject to the exceptions described
                  in Section 5.
                </p>
              </div>
            </div>
          </section>

          {/* SECTION 9 */}
          <section id="s9" data-terms-reveal className={baseSectionClass}>
            <h2 className={sectionHeadingClass}>
              <span className={sectionNumberClass}>09.</span>
              Refund Processing
            </h2>

            <p className={bodyTextClass}>
              Where a refund is approved under this policy, Nilee Games will
              initiate the refund within approximately <strong className="text-white">3–7 business
              days</strong> of approving the request, subject to verification
              and the procedures of the relevant payment system.
            </p>

            <p className={`${bodyTextClass} mt-5`}>
              The time taken for the refunded amount to reflect in the user's
              account will depend on the payment method and financial institution
              involved. Nilee Games is not responsible for delays caused by
              third-party payment processors or financial institutions.
            </p>

            <p className={`${bodyTextClass} mt-5`}>
              Refunds will be processed to the original payment method used for
              the transaction, where technically feasible.
            </p>
          </section>

          {/* SECTION 10 */}
          <section id="s10" data-terms-reveal className={baseSectionClass}>
            <h2 className={sectionHeadingClass}>
              <span className={sectionNumberClass}>10.</span>
              How to Request a Refund
            </h2>

            <div
              data-terms-reveal
              className="mt-7 rounded-2xl border border-cyan-300/15 bg-[linear-gradient(135deg,rgba(90,220,255,0.06),rgba(201,70,255,0.03))] p-5 shadow-[0_20px_70px_rgba(0,0,0,0.22)] md:p-7"
            >
              <div className="flex items-center gap-3 text-cyan-300">
                <EnvelopeSimple size={22} weight="duotone" />
                <strong className="text-base text-white">
                  Need to Request a Refund?
                </strong>
              </div>

              <p className="mt-5 text-sm text-slate-400">Contact us at:</p>

              <a
                className="mt-1 inline-flex text-lg font-semibold text-cyan-300 transition-colors hover:text-white"
                href="mailto:info@nileegames.com"
              >
                info@nileegames.com
              </a>

              <p className="mt-7 text-sm font-medium text-slate-200">
                Please include the following information:
              </p>

              <ul className="mt-4 grid grid-cols-1 gap-x-6 gap-y-3 sm:grid-cols-2">
                {[
                  "Your name",
                  "Date and approximate time of payment",
                  "Amount paid",
                  "ARCADELX Kiosk ID",
                  "Location of the kiosk",
                  "Transaction ID / UTR / payment reference number",
                  "Payment method used",
                  "Description of the problem",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-sm leading-6 text-slate-400"
                  >
                    <ArrowRight
                      size={13}
                      weight="bold"
                      className="mt-1 shrink-0 text-cyan-300"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div
              data-terms-reveal
              className="mt-4 flex gap-4 rounded-2xl border border-amber-300/15 bg-amber-300/[0.035] p-5 md:p-6"
            >
              <ShieldWarning
                size={20}
                weight="duotone"
                className="mt-0.5 shrink-0 text-amber-300"
              />
              <div>
                <strong className="text-sm font-semibold text-white">
                  Security Notice
                </strong>
                <p className="mt-2 text-sm leading-7 text-slate-400">
                  Nilee Games and its representatives will never ask you to
                  share your <strong className="text-white">UPI PIN</strong>,{" "}
                  <strong className="text-white">OTP</strong>,{" "}
                  <strong className="text-white">CVV</strong>,{" "}
                  <strong className="text-white">password</strong>, or any other{" "}
                  <strong className="text-white">banking credentials</strong>. Never share these with
                  anyone claiming to represent ARCADELX or Nilee Games.
                </p>
              </div>
            </div>
          </section>

          {/* SECTION 11 */}
          <section id="s11" data-terms-reveal className={baseSectionClass}>
            <h2 className={sectionHeadingClass}>
              <span className={sectionNumberClass}>11.</span>
              Transaction Verification
            </h2>

            <p className={bodyTextClass}>
              To process a refund request, Nilee Games may verify one or more of
              the following:
            </p>

            <div className="mt-7 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {[
                "Transaction ID",
                "Payment status",
                "Kiosk ID",
                "Session ID",
                "Game selected",
                "Session activation status",
                "Session start and end time",
                "Relevant system records",
                "Other reasonably necessary transaction-related information",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 rounded-xl border border-white/[0.07] bg-white/[0.02] p-4 text-sm leading-6 text-slate-300"
                >
                  <CheckCircle
                    size={14}
                    weight="duotone"
                    className="mt-1 shrink-0 text-cyan-300"
                  />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </section>

          {/* SECTION 12 */}
          <section id="s12" data-terms-reveal className={baseSectionClass}>
            <h2 className={sectionHeadingClass}>
              <span className={sectionNumberClass}>12.</span>
              Chargebacks and Payment Disputes
            </h2>

            <p className={bodyTextClass}>
              If you have a concern about a payment, we encourage you to contact
              Nilee Games directly at{" "}
              <a
                className="font-medium text-cyan-300 underline decoration-cyan-300/30 underline-offset-4 transition-colors hover:text-white"
                href="mailto:info@nileegames.com"
              >
                info@nileegames.com
              </a>{" "}
              before initiating a chargeback or payment dispute through your
              bank or payment provider.
            </p>

            <p className={`${bodyTextClass} mt-5`}>
              If a chargeback or dispute is initiated, Nilee Games may provide
              relevant transaction records, session logs, and service records to
              the applicable financial institution or payment processor as part
              of the dispute resolution process.
            </p>
          </section>

          {/* SECTION 13 */}
          <section id="s13" data-terms-reveal className={baseSectionClass}>
            <h2 className={sectionHeadingClass}>
              <span className={sectionNumberClass}>13.</span>
              No Cash Refunds
            </h2>

            <div
              data-terms-reveal
              className="mt-7 flex gap-4 rounded-2xl border border-cyan-300/15 bg-cyan-300/[0.035] p-5 md:p-6"
            >
              <Info
                size={18}
                weight="duotone"
                className="mt-0.5 shrink-0 text-cyan-300"
              />
              <p className="text-sm leading-7 text-slate-300 md:text-base">
                Approved refunds will generally be processed electronically to
                the original payment method.{" "}
                <strong className="text-white">Cash refunds will not normally be provided</strong>{" "}
                for payments made via QR code, UPI, credit card, debit card, net
                banking, wallet, or other digital payment methods.
              </p>
            </div>
          </section>

          {/* SECTION 14 */}
          <section id="s14" data-terms-reveal className={baseSectionClass}>
            <h2 className={sectionHeadingClass}>
              <span className={sectionNumberClass}>14.</span>
              Fraudulent Refund Claims
            </h2>

            <div
              data-terms-reveal
              className="mt-7 flex gap-4 rounded-2xl border border-amber-300/15 bg-amber-300/[0.035] p-5 md:p-6"
            >
              <Warning
                size={22}
                weight="duotone"
                className="mt-0.5 shrink-0 text-amber-300"
              />
              <div>
                <strong className="text-sm font-semibold text-white">
                  Fraudulent Claims Warning
                </strong>
                <p className="mt-2 text-sm leading-7 text-slate-400 md:text-base">
                  Nilee Games takes the integrity of its payment and refund
                  systems seriously. Any refund request that is found to be
                  fraudulent, abusive, or based on false information may be
                  investigated and rejected. Nilee Games reserves the right to
                  take appropriate action under applicable law in cases of
                  suspected fraudulent refund claims.
                </p>
              </div>
            </div>
          </section>

          {/* SECTION 15 */}
          <section id="s15" data-terms-reveal className={baseSectionClass}>
            <h2 className={sectionHeadingClass}>
              <span className={sectionNumberClass}>15.</span>
              Partner / Venue-Related Issues
            </h2>

            <p className={bodyTextClass}>
              ARCADELX kiosks are deployed at a variety of partner venues,
              including:
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
                  <Storefront
                    size={14}
                    weight="duotone"
                    className="shrink-0 text-cyan-300"
                  />
                  <span>{v}</span>
                </div>
              ))}
            </div>

            <p className={`${bodyTextClass} mt-6`}>
              In cases where a gaming session is interrupted due to circumstances
              at a partner venue — such as a power failure, venue closure, or
              other operational issues beyond Nilee Games' reasonable control —
              Nilee Games will assess the situation on a case-by-case basis.
              Where appropriate and feasible, Nilee Games may offer a replacement
              session or another appropriate resolution. However, Nilee Games
              cannot guarantee a refund in cases where the interruption is caused
              by factors outside its direct control at a partner venue.
            </p>
          </section>

          {/* SECTION 16 */}
          <section id="s16" data-terms-reveal className="scroll-mt-28 py-10 md:py-14">
            <h2 className={sectionHeadingClass}>
              <span className={sectionNumberClass}>16.</span>
              Policy Changes
            </h2>

            <p className={bodyTextClass}>
              Nilee Games may update this Refund &amp; Cancellation Policy from
              time to time to reflect changes in its services, business
              practices, or applicable law. The latest version of this policy,
              together with its stated effective date, will be published on the
              ARCADELX website.
            </p>

            <p className={`${bodyTextClass} mt-5`}>
              Your continued use of ARCADELX services after any changes to this
              policy are published will constitute your acceptance of the revised
              policy.
            </p>

            <p className={`${bodyTextClass} mt-5`}>
              If you have any questions about this policy, please contact Nilee
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
