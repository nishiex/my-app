"use client";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  ArrowCircleDown,
  ArrowUpRight,
  Buildings,
  CheckCircle,
  CloudWarning,
  CreditCard,
  Database,
  EnvelopeSimple,
  HardDrive,
  Info,
  Lightning,
  Lock,
  MapPin,
  Monitor,
  Prohibit,
  Shield,
  ShieldWarning,
  Siren,
  Star,
  UserCircle,
  Warning,
  WifiX,
  Wrench,
  XCircle,
  ClipboardText,
} from "../../components/Icon";


/* ── Sidebar nav data ────────────────────────────────────────────── */
const PARTS = [
  {
    label: "Part A — Consumers / Players",
    colorClass: "text-cyan-300",
    sections: [
      { id: "tc2",  num: "02", label: "Eligibility" },
      { id: "tc3",  num: "03", label: "QR Payment & Session" },
      { id: "tc4",  num: "04", label: "Pricing" },
      { id: "tc5",  num: "05", label: "Refund & Failed Transactions" },
      { id: "tc6",  num: "06", label: "Technical Interruption" },
      { id: "tc7",  num: "07", label: "Safe Use of ARCADELX" },
      { id: "tc8",  num: "08", label: "Prohibited Use" },
    ],
  },
  {
    label: "Part B — Location / Venue Partners",
    colorClass: "text-fuchsia-300",
    sections: [
      { id: "tc9",  num: "09", label: "Location Partners" },
      { id: "tc10", num: "10", label: "Installation & Location" },
      { id: "tc11", num: "11", label: "Ownership of Kiosk" },
      { id: "tc12", num: "12", label: "Kiosk Security & Care" },
      { id: "tc13", num: "13", label: "Revenue Sharing" },
      { id: "tc14", num: "14", label: "Partner Responsibilities" },
      { id: "tc15", num: "15", label: "Maintenance & Support" },
    ],
  },
  {
    label: "Part C — General Terms",
    colorClass: "text-violet-300",
    sections: [
      { id: "tc16", num: "16", label: "Intellectual Property" },
      { id: "tc17", num: "17", label: "Data & Privacy" },
      { id: "tc18", num: "18", label: "Third-Party Services" },
      { id: "tc19", num: "19", label: "Limitation of Liability" },
      { id: "tc20", num: "20", label: "Force Majeure" },
      { id: "tc21", num: "21", label: "Changes to These Terms" },
      { id: "tc22", num: "22", label: "Termination" },
      { id: "tc23", num: "23", label: "Governing Law" },
    ],
  },
];

const ALL_IDS = PARTS.flatMap((p) => p.sections.map((s) => s.id));

/* ── Mobile TOC ───────────────────────────────────────────────────── */
function MobileTOC() {
  const [open, setOpen] = useState(false);
  return (
    <div className="lg:hidden">
      <button
        className="flex w-full items-center justify-between rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-left text-sm font-medium text-white backdrop-blur-xl transition-colors hover:border-cyan-400/30"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
      >
        <span>Table of Contents</span>
        <ArrowCircleDown
          size={18}
          weight="bold"
          className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`}
        />
      </button>
      {open && (
        <nav className="mt-2 rounded-xl border border-white/10 bg-[#080d20]/95 p-3 shadow-2xl backdrop-blur-xl" aria-label="Terms contents">
          {PARTS.map((part) => (
            <div key={part.label}>
              <div className="mb-2 mt-3 px-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-500 first:mt-0">{part.label}</div>
              {part.sections.map((s) => (
                <a
                  key={s.id}
                  href={`#${s.id}`}
                  className="flex items-center gap-3 rounded-lg px-2 py-2 text-xs text-slate-400 transition-colors hover:bg-white/[0.04] hover:text-cyan-300"
                  onClick={() => setOpen(false)}
                >
                  <span className="grid size-6 shrink-0 place-items-center rounded-md border border-white/10 bg-white/[0.03] font-mono text-[10px] text-slate-500">{s.num}</span>
                  {s.label}
                </a>
              ))}
            </div>
          ))}
        </nav>
      )}
    </div>
  );
}

/* ── Desktop sidebar ──────────────────────────────────────────────── */
function DesktopSidebar({ activeId }: { activeId: string }) {
  return (
    <aside className="sticky top-24 hidden h-fit lg:block" aria-label="Terms navigation">
      <p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-500">Contents</p>
      <nav>
        {PARTS.map((part) => (
          <div key={part.label}>
            <div className={`mb-2 mt-7 border-l border-white/10 pl-3 text-[10px] font-semibold uppercase tracking-[0.12em] first:mt-0 ${part.colorClass}`}>{part.label}</div>
            {part.sections.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className={`group flex items-start gap-3 rounded-lg border-l px-3 py-2 text-xs leading-5 transition-all ${activeId === s.id ? "border-cyan-400 bg-cyan-400/[0.06] text-cyan-200" : "border-transparent text-slate-500 hover:border-white/10 hover:bg-white/[0.03] hover:text-slate-200"}`}
              >
                <span className="grid size-6 shrink-0 place-items-center rounded-md border border-white/10 bg-white/[0.03] font-mono text-[10px] text-slate-500">{s.num}</span>
                {s.label}
              </a>
            ))}
          </div>
        ))}
      </nav>
    </aside>
  );
}

/* ── Main page ────────────────────────────────────────────────────── */
export default function TermsPage() {
  const root = useRef<HTMLElement>(null);
  const [activeId, setActiveId] = useState("tc2");

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (!reduce) {
        gsap.from("[data-terms-hero] > *", {
          y: 24, opacity: 0, duration: 0.7, stagger: 0.1, ease: "power3.out", delay: 0.2,
        });
      }
      gsap.utils.toArray<HTMLElement>("[data-terms-reveal]").forEach((el) => {
        gsap.from(el, {
          y: reduce ? 0 : 20, opacity: reduce ? 1 : 0,
          duration: reduce ? 0 : 0.6, ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 87%", once: true },
        });
      });
      ALL_IDS.forEach((id) => {
        ScrollTrigger.create({
          trigger: `#${id}`, start: "top 40%", end: "bottom 40%",
          onEnter: () => setActiveId(id),
          onEnterBack: () => setActiveId(id),
        });
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#050816] text-white" ref={root}>
      

      {/* ── Hero ──────────────────────────────────────────────── */}
      <section className="relative isolate flex min-h-[420px] items-center overflow-hidden border-b border-white/5 bg-[#050816]" aria-label="Terms and Conditions hero">
        <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden bg-[radial-gradient(circle_at_18%_30%,rgba(0,217,255,0.12),transparent_32%),radial-gradient(circle_at_82%_20%,rgba(236,72,153,0.10),transparent_30%),linear-gradient(180deg,#050816_0%,#070b1d_100%)]" aria-hidden="true">
          <div className="absolute inset-0 opacity-[0.16] [background-image:linear-gradient(rgba(255,255,255,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.045)_1px,transparent_1px)] [background-size:56px_56px] [mask-image:linear-gradient(to_bottom,black,transparent)]" />
          <div className="absolute -left-24 top-10 size-80 rounded-full bg-cyan-400/10 blur-[100px]" />
          <div className="absolute -right-24 bottom-0 size-96 rounded-full bg-fuchsia-500/10 blur-[120px]" />
          <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent" />
        </div>
        <div className="relative z-10 mx-auto w-full max-w-7xl px-5 py-24 sm:px-8 lg:px-12" data-terms-hero>
          <p className="mb-6 flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-cyan-300"><span />Legal&nbsp;·&nbsp;Terms</p>
          <h1 className="max-w-4xl text-4xl font-medium tracking-[-0.04em] text-white sm:text-5xl md:text-6xl lg:text-7xl">Terms &amp; Conditions</h1>
          <p className="mt-6 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base md:text-lg">
            The terms governing the use of ARCADELX gaming kiosks, games, payment
            services, digital platforms and associated services.
          </p>
        </div>
      </section>

      {/* ── Intro ─────────────────────────────────────────────── */}
      <div className="relative z-20 mx-auto -mt-10 w-full max-w-6xl px-5 sm:px-8" data-terms-reveal>
        <div className="rounded-2xl border border-white/10 bg-white/[0.035] p-6 shadow-[0_20px_80px_rgba(0,0,0,0.35)] backdrop-blur-xl md:p-8">
          <div className="max-w-4xl space-y-4">
            <p className="text-sm leading-7 text-slate-300 md:text-base">
              These Terms &amp; Conditions govern the use of <strong>ARCADELX</strong> —
              including its motion-sensing gaming kiosks, related games, payment services,
              digital platforms and associated services — operated by{" "}
              <strong>Nilee Games and Future Technologies Pvt. Ltd.</strong> (referred to
              as "the Company", "Nilee Games", "we" or "us").
            </p>
            <p className="text-sm leading-7 text-slate-300 md:text-base">
              By accessing or using ARCADELX, making a payment for a gaming session, or
              installing / hosting an ARCADELX kiosk at a location, you agree to be bound
              by these Terms. If you do not agree, please do not use or host ARCADELX.
            </p>
          </div>
          <p className="mt-6 border-t border-white/10 pt-4 text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-500">Effective Date: 1 September 2025</p>
        </div>
      </div>

      {/* ── Mobile TOC ────────────────────────────────────────── */}

      

      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:hidden">
        <MobileTOC />
      </div>

      {/* ── Layout ────────────────────────────────────────────── */}
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-10 px-5 py-16 sm:px-8 lg:grid-cols-[260px_minmax(0,1fr)] lg:gap-14 lg:px-12 lg:py-20 xl:gap-20">
        <DesktopSidebar activeId={activeId} />

        <article className="min-w-0 max-w-4xl text-slate-300 [&>section>h2]:text-2xl [&>section>h2]:font-medium [&>section>h2]:tracking-tight [&>section>h2]:text-white [&>section>p]:mt-4 [&>section>p]:text-sm [&>section>p]:leading-7 [&>section>p]:text-slate-300 [&_strong]:font-medium [&_strong]:text-white" aria-label="Terms and conditions content">

          {/* ═══ PART A — CONSUMERS / PLAYERS ═══════════════════ */}
          <div className="relative border-y border-white/5 py-14 md:py-16" data-terms-reveal id="partA">
            <div className="mb-5 inline-flex rounded-full border border-cyan-400/25 bg-cyan-400/[0.05] px-3 py-1">
              <span className="text-[10px] font-semibold uppercase tracking-[0.18em]">Part A</span>
            </div>
            <h2 className="text-2xl font-medium tracking-tight text-white sm:text-3xl md:text-4xl">
              Terms for Consumers&nbsp;/ Players
            </h2>
            <p className="mt-3 text-xs uppercase tracking-[0.16em] text-slate-500">Sections 2 – 8</p>
          </div>

          {/* S2 — Eligibility */}
          <section id="tc2" className="scroll-mt-28 border-b border-white/5 py-10 md:py-14" data-terms-reveal>
            <h2><span className="mr-2 font-mono text-sm font-normal text-cyan-400">02.</span> Eligibility</h2>
            <p>To use ARCADELX gaming kiosks, users must meet the following requirements:</p>
            <ol className="mt-6 grid gap-3">
              {[
                "Meet the minimum age requirements displayed at the particular ARCADELX location or game.",
                "Children and minors should use ARCADELX under appropriate adult supervision where required.",
                "Users must follow all kiosk safety instructions provided at the location or displayed on-screen.",
                "Users must not use ARCADELX if they are unable to safely participate in physical movement-based gameplay.",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-4 rounded-xl border border-white/10 bg-white/[0.02] p-4 text-sm leading-6 text-slate-300">
                  <span className="grid size-7 shrink-0 place-items-center rounded-lg border border-cyan-400/20 bg-cyan-400/[0.04] font-mono text-[10px] text-cyan-300">{String(i + 1).padStart(2, "0")}</span>
                  <span>{item}</span>
                </li>
              ))}
            </ol>
          </section>

          {/* S3 — QR Payment */}
          <section id="tc3" className="scroll-mt-28 border-b border-white/5 py-10 md:py-14" data-terms-reveal>
            <h2><span className="mr-2 font-mono text-sm font-normal text-cyan-400">03.</span> QR Payment &amp; Gaming Session</h2>
            <p>
              ARCADELX operates on a QR-based payment model. The gaming session is activated
              upon successful payment confirmation.
            </p>
            <div className="mt-7 grid gap-3">
              {[
                { num: "01", title: "Scan QR Code", desc: "Scan the QR code displayed on the ARCADELX kiosk." },
                { num: "02", title: "Review Session Fee", desc: "Review the applicable session fee displayed before payment." },
                { num: "03", title: "Complete Payment", desc: "Complete payment through the supported payment method." },
                { num: "04", title: "Session Begins", desc: "Your gaming session begins after successful payment confirmation." },
                { num: "05", title: "Session Conditions", desc: "Session duration, game selection and other applicable conditions may be displayed on-screen or at the location." },
              ].map((step) => (
                <div key={step.num} className="flex gap-4 rounded-xl border border-white/10 bg-white/[0.02] p-4">
                  <div className="grid size-9 shrink-0 place-items-center rounded-lg border border-cyan-400/20 bg-cyan-400/[0.04] font-mono text-xs text-cyan-300">{step.num}</div>
                  <div className="min-w-0">
                    <strong>{step.title}</strong>
                    <p>{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <p>Payment for one session applies only to that session unless otherwise specified.</p>
            <div className="mt-6 flex gap-4 rounded-2xl border border-amber-400/20 bg-amber-400/[0.04] p-5">
              <Warning size={22} weight="duotone" className="mt-0.5 shrink-0 text-amber-300" />
              <div>
                <p className="font-medium text-amber-100">Do Not Make Duplicate Payments</p>
                <p className="mt-1 text-sm leading-6 text-amber-100/70">
                  If payment confirmation is delayed, users should first check the displayed
                  payment status on the kiosk or contact support before attempting another payment.
                </p>
              </div>
            </div>
          </section>

          {/* S4 — Pricing */}
          <section id="tc4" className="scroll-mt-28 border-b border-white/5 py-10 md:py-14" data-terms-reveal>
            <h2><span className="mr-2 font-mono text-sm font-normal text-cyan-400">04.</span> Pricing</h2>
            <p>
              The applicable price for each ARCADELX gaming session is displayed on the kiosk
              before payment is made. Prices may vary depending on:
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {["Location", "Game", "Promotional Offer", "Session Duration"].map((c) => (
                <span key={c} className="inline-flex items-center rounded-full border border-white/10 bg-white/[0.035] px-3 py-1.5 text-xs text-slate-300">{c}</span>
              ))}
            </div>
            <div className="mt-6 flex gap-3 rounded-2xl border border-cyan-400/20 bg-cyan-400/[0.035] p-5 text-cyan-200">
              <Info size={18} weight="duotone" />
              <p>
                Prices displayed are inclusive of or subject to applicable taxes as noted at
                the point of payment. Nilee Games may modify pricing, offers or session
                structures at any time. The applicable price is always displayed before
                payment is completed.
              </p>
            </div>
          </section>

          {/* S5 — Refund */}
          <section id="tc5" className="scroll-mt-28 border-b border-white/5 py-10 md:py-14" data-terms-reveal>
            <h2><span className="mr-2 font-mono text-sm font-normal text-cyan-400">05.</span> Refund &amp; Failed Transactions</h2>
            <div className="mt-7 grid gap-5 md:grid-cols-2">
              <div className="rounded-2xl border border-cyan-400/15 bg-cyan-400/[0.025] p-6">
                <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-500">Payment Issue</p>
                <p>
                  If money is deducted from your account but the gaming session is not activated
                  due to a technical failure or payment-system error, please report the issue promptly.
                </p>
                <p>
                  Transaction verification may be carried out before an eligible refund is
                  processed. Approved refunds are normally returned to the original payment method.
                </p>
                <p>Contact: <a href="mailto:info@nileegames.com" className="text-cyan-300 underline decoration-cyan-300/30 underline-offset-4 hover:text-white">info@nileegames.com</a></p>
              </div>
              <div className="rounded-2xl border border-fuchsia-400/15 bg-fuchsia-400/[0.025] p-6">
                <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-500">Refund Rules</p>
                <p>
                  Successfully completed gaming sessions are <strong>generally non-refundable</strong>.
                  Exceptions may apply under applicable law or where specifically approved.
                </p>
                <p>The following situations are <strong>generally not refundable</strong>:</p>
                <ul className="mt-4 space-y-3">
                  {[
                    "Change of mind after starting a session",
                    "Voluntary termination of the session by the user",
                    "Failure to follow kiosk instructions",
                    "Leaving the kiosk or location before completing the session",
                    "User behaviour causing interruption or termination",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm leading-6 text-slate-300">
                      <XCircle size={15} weight="duotone" className="mt-1 shrink-0 text-rose-300" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="mt-6 flex items-center gap-4 rounded-2xl border border-cyan-400/20 bg-gradient-to-br from-cyan-400/[0.06] to-fuchsia-500/[0.04] p-6">
              <EnvelopeSimple size={28} weight="duotone" className="shrink-0 text-cyan-300" />
              <div>
                <p className="text-xs uppercase tracking-[0.14em] text-slate-500">Refund &amp; Transaction Support</p>
                <a href="mailto:info@nileegames.com" className="mt-1 inline-flex items-center gap-2 text-sm text-cyan-300 transition-colors hover:text-white">
                  info@nileegames.com
                </a>
              </div>
            </div>
          </section>

          {/* S6 — Technical Interruption */}
          <section id="tc6" className="scroll-mt-28 border-b border-white/5 py-10 md:py-14" data-terms-reveal>
            <h2><span className="mr-2 font-mono text-sm font-normal text-cyan-400">06.</span> Technical Interruption</h2>
            <p>
              ARCADELX is an internet-connected and technology-dependent platform. Interruptions
              may occasionally occur due to circumstances including:
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {[
                { icon: <WifiX size={15} weight="duotone" />, label: "Internet / network failure" },
                { icon: <Lightning size={15} weight="duotone" />, label: "Power failure" },
                { icon: <HardDrive size={15} weight="duotone" />, label: "Hardware malfunction" },
                { icon: <Monitor size={15} weight="duotone" />, label: "Software error" },
                { icon: <CreditCard size={15} weight="duotone" />, label: "Payment gateway issues" },
                { icon: <Wrench size={15} weight="duotone" />, label: "Scheduled maintenance" },
                { icon: <CloudWarning size={15} weight="duotone" />, label: "Server / cloud interruption" },
                { icon: <ShieldWarning size={15} weight="duotone" />, label: "Other circumstances beyond reasonable control" },
              ].map(({ icon, label }) => (
                <div key={label} className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/[0.02] p-4 text-sm text-slate-300">
                  <span className="mt-0.5 shrink-0 text-cyan-300">{icon}</span>
                  <span>{label}</span>
                </div>
              ))}
            </div>
            <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.025] p-6">
              <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-500">Resolution</p>
              <p>
                If a technical failure prevents a paid session from being delivered, Nilee Games
                may, after verification, provide an appropriate resolution such as:
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {["Refund", "Replacement Session", "Other Appropriate Remedy"].map((c) => (
                  <span key={c} className="inline-flex rounded-full border border-cyan-400/15 bg-cyan-400/[0.035] px-3 py-1.5 text-xs text-cyan-100">{c}</span>
                ))}
              </div>
            </div>
          </section>

          {/* S7 — Safe Use */}
          <section id="tc7" className="scroll-mt-28 border-b border-white/5 py-10 md:py-14" data-terms-reveal>
            <h2><span className="mr-2 font-mono text-sm font-normal text-cyan-400">07.</span> Safe Use of ARCADELX</h2>
            <p>ARCADELX involves physical, movement-based gameplay. Users must follow all safety guidelines:</p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {[
                { icon: <MapPin size={17} weight="duotone" />, label: "Maintain sufficient space around you before starting" },
                { icon: <Monitor size={17} weight="duotone" />, label: "Follow all on-screen instructions" },
                { icon: <UserCircle size={17} weight="duotone" />, label: "Follow staff and location-partner instructions" },
                { icon: <Prohibit size={17} weight="duotone" />, label: "Avoid running outside the designated play area" },
                { icon: <ShieldWarning size={17} weight="duotone" />, label: "Keep bags, objects and bystanders away from the playing area" },
                { icon: <Shield size={17} weight="duotone" />, label: "Do not touch, move or damage the kiosk or camera" },
                { icon: <Siren size={17} weight="duotone" />, label: "Stop playing immediately if feeling uncomfortable, dizzy or unwell" },
              ].map(({ icon, label }) => (
                <div key={label} className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/[0.02] p-4 text-sm text-slate-300">
                  <span className="mt-0.5 shrink-0 text-cyan-300">{icon}</span>
                  <span>{label}</span>
                </div>
              ))}
            </div>
            <div className="mt-6 rounded-2xl border border-amber-400/15 bg-amber-400/[0.035] p-5 text-sm leading-6 text-amber-100/75">
              Users are responsible for using the kiosk responsibly and following all safety
              instructions. Nilee Games and the location partner are not liable for injuries
              resulting from failure to follow safety guidelines.
            </div>
          </section>

          {/* S8 — Prohibited Use */}
          <section id="tc8" className="scroll-mt-28 border-b border-white/5 py-10 md:py-14" data-terms-reveal>
            <h2><span className="mr-2 font-mono text-sm font-normal text-cyan-400">08.</span> Prohibited Use</h2>
            <p>Users must not engage in the following activities:</p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {[
                "Damage, tamper with or modify the kiosk",
                "Interfere with the camera, sensors, cables, software or equipment",
                "Bypass or manipulate the payment system",
                "Attempt unauthorized access to software, servers or systems",
                "Engage in abusive, threatening or inappropriate behaviour",
                "Conduct activities that may damage equipment or surrounding property",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/[0.02] p-4 text-sm text-slate-300">
                  <Prohibit size={15} weight="duotone" className="mt-0.5 shrink-0 text-rose-300" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
            <div className="mt-6 flex gap-3 rounded-2xl border border-rose-400/15 bg-rose-400/[0.035] p-5 text-sm leading-6 text-rose-100/75">
              <Warning size={18} weight="duotone" className="mt-0.5 shrink-0 text-rose-300" />
              <p>
                The Company may terminate a session where misuse, tampering or unsafe behaviour
                is detected.
              </p>
            </div>
          </section>

          {/* ═══ PART B — LOCATION / VENUE PARTNERS ═════════════ */}
          <div className="relative border-y border-white/5 py-14 md:py-16" data-terms-reveal id="partB">
            <div className="mb-5 inline-flex rounded-full border border-cyan-400/25 bg-cyan-400/[0.05] px-3 py-1">
              <span className="text-[10px] font-semibold uppercase tracking-[0.18em]">Part B</span>
            </div>
            <h2 className="text-2xl font-medium tracking-tight text-white sm:text-3xl md:text-4xl">
              Terms for Location&nbsp;/ Venue Partners
            </h2>
            <p className="mt-3 text-xs uppercase tracking-[0.16em] text-slate-500">Sections 9 – 15</p>
          </div>

          {/* S9 — Location Partners */}
          <section id="tc9" className="scroll-mt-28 border-b border-white/5 py-10 md:py-14" data-terms-reveal>
            <h2><span className="mr-2 font-mono text-sm font-normal text-cyan-400">09.</span> Location Partners</h2>
            <p>
              Nilee Games partners with a variety of commercial locations to deploy ARCADELX
              kiosks. Approved partner location types include:
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {[
                "Malls", "Restaurants", "Hotels", "Schools", "Corporate Offices",
                "Gyms", "Game Zones", "Entertainment Centres", "Events & Exhibitions",
                "Other Approved Commercial Locations",
              ].map((v) => (
                <span key={v} className="inline-flex items-center rounded-full border border-white/10 bg-white/[0.035] px-3 py-1.5 text-xs text-slate-300">{v}</span>
              ))}
            </div>
            <p>
              Location Partners are bound by both these Terms and any applicable commercial
              or partner agreement entered into with Nilee Games.
            </p>
          </section>

          {/* S10 — Installation */}
          <section id="tc10" className="scroll-mt-28 border-b border-white/5 py-10 md:py-14" data-terms-reveal>
            <h2><span className="mr-2 font-mono text-sm font-normal text-cyan-400">10.</span> Installation &amp; Location</h2>
            <p>
              Location Partners must ensure the following for successful and safe kiosk
              operation. Requirements may vary by ARCADELX model:
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {[
                { icon: <MapPin size={16} weight="duotone" />, label: "Suitable installation location as approved by Nilee Games" },
                { icon: <Lightning size={16} weight="duotone" />, label: "Reasonable and stable electricity access" },
                { icon: <WifiX size={16} weight="duotone" />, label: "Adequate internet connectivity" },
                { icon: <Buildings size={16} weight="duotone" />, label: "Sufficient operating space for safe user movement" },
                { icon: <Shield size={16} weight="duotone" />, label: "A safe and secure environment" },
                { icon: <Prohibit size={16} weight="duotone" />, label: "No relocation of the kiosk without prior written approval" },
                { icon: <Wrench size={16} weight="duotone" />, label: "No modification, dismantling, opening or repair without authorization" },
              ].map(({ icon, label }) => (
                <div key={label} className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/[0.02] p-4 text-sm text-slate-300">
                  <span className="mt-0.5 shrink-0 text-cyan-300">{icon}</span>
                  <span>{label}</span>
                </div>
              ))}
            </div>
          </section>

          {/* S11 — Ownership */}
          <section id="tc11" className="scroll-mt-28 border-b border-white/5 py-10 md:py-14" data-terms-reveal>
            <h2><span className="mr-2 font-mono text-sm font-normal text-cyan-400">11.</span> Ownership of Kiosk</h2>
            <div className="rounded-2xl border border-fuchsia-400/15 bg-fuchsia-400/[0.025] p-6 md:p-7">
              <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-fuchsia-300">Unless Expressly Agreed Otherwise in Writing</p>
              <p>
                The ARCADELX kiosk, hardware and all associated equipment remain the property
                of Nilee Games and Future Technologies Pvt. Ltd. and/or the applicable owner.
                The Location Partner receives agreed hosting or use rights only.
              </p>
              <ul className="mt-5 space-y-3">
                {[
                  "Partners cannot sell, lease, transfer, pledge, mortgage or dispose of the kiosk.",
                  "Partners cannot remove branding, serial numbers, kiosk IDs or security labels from the kiosk.",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm leading-6 text-slate-300">
                    <XCircle size={15} weight="duotone" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* S12 — Kiosk Security */}
          <section id="tc12" className="scroll-mt-28 border-b border-white/5 py-10 md:py-14" data-terms-reveal>
            <h2><span className="mr-2 font-mono text-sm font-normal text-cyan-400">12.</span> Kiosk Security &amp; Care</h2>
            <p>
              Location Partners must promptly inform Nilee Games of any incident affecting
              the kiosk, including:
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {[
                { icon: <ShieldWarning size={15} weight="duotone" />, label: "Physical damage" },
                { icon: <Warning size={15} weight="duotone" />, label: "Theft or attempted theft" },
                { icon: <Warning size={15} weight="duotone" />, label: "Tampering" },
                { icon: <HardDrive size={15} weight="duotone" />, label: "Hardware malfunction" },
                { icon: <Monitor size={15} weight="duotone" />, label: "Display damage" },
                { icon: <Monitor size={15} weight="duotone" />, label: "Camera or sensor damage" },
                { icon: <Lightning size={15} weight="duotone" />, label: "Electrical issues" },
                { icon: <Lock size={15} weight="duotone" />, label: "Unauthorized access" },
                { icon: <Siren size={15} weight="duotone" />, label: "Any other incident affecting the kiosk" },
              ].map(({ icon, label }) => (
                <div key={label} className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/[0.02] p-4 text-sm text-slate-300">
                  <span className="mt-0.5 shrink-0 text-cyan-300">{icon}</span>
                  <span>{label}</span>
                </div>
              ))}
            </div>
            <p>
              Where damage, loss or costs result from a partner's failure to maintain reasonable
              security or care of the kiosk, the partner may be responsible for applicable
              costs as provided in the partner agreement.
            </p>
          </section>

          {/* S13 — Revenue Sharing */}
          <section id="tc13" className="scroll-mt-28 border-b border-white/5 py-10 md:py-14" data-terms-reveal>
            <h2><span className="mr-2 font-mono text-sm font-normal text-cyan-400">13.</span> Revenue Sharing / Commercial Terms</h2>
            <div className="rounded-2xl border border-white/10 bg-white/[0.025] p-6 md:p-7">
              <p>
                The revenue-sharing percentage, settlement frequency, payment procedures and
                other commercial terms applicable to Location Partners are set out in the
                applicable commercial or partner agreement.
              </p>
              <p>Applicable commercial terms may also address:</p>
              <ul>
                {[
                  "Payment gateway charges",
                  "Applicable taxes",
                  "Refunds and their impact on settlement",
                  "Other applicable deductions",
                  "Security deposit, rental or other commercial consideration",
                ].map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="mt-5 flex gap-3 rounded-2xl border border-cyan-400/15 bg-cyan-400/[0.035] p-5 text-sm leading-6 text-cyan-100/80">
              <ClipboardText size={20} weight="duotone" />
              <p>
                <strong>Important:</strong> Where there is a conflict between these Terms
                and the applicable commercial or partner agreement regarding commercial
                settlement terms, the commercial agreement shall prevail.
              </p>
            </div>
          </section>

          {/* S14 — Partner Responsibilities */}
          <section id="tc14" className="scroll-mt-28 border-b border-white/5 py-10 md:py-14" data-terms-reveal>
            <h2><span className="mr-2 font-mono text-sm font-normal text-cyan-400">14.</span> Partner Responsibilities</h2>
            <p>Location Partners are responsible for the following:</p>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {[
                "Providing reasonable kiosk access for installation, maintenance and support",
                "Maintaining a suitable operating environment for the kiosk",
                "Providing reasonable supervision and security at the location",
                "Not making unauthorized modifications to the kiosk or its software",
                "Reporting operational issues promptly to Nilee Games",
                "Not interfering with transaction records or session data",
                "Not manipulating gaming sessions or payment processes",
                "Cooperating with maintenance and technical support activities",
                "Compliance with all applicable laws and regulations",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/[0.02] p-4 text-sm text-slate-300">
                  <CheckCircle size={15} weight="duotone" className="mt-0.5 shrink-0 text-emerald-300" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* S15 — Maintenance & Support */}
          <section id="tc15" className="scroll-mt-28 border-b border-white/5 py-10 md:py-14" data-terms-reveal>
            <h2><span className="mr-2 font-mono text-sm font-normal text-cyan-400">15.</span> Maintenance &amp; Technical Support</h2>
            <div className="rounded-2xl border border-white/10 bg-white/[0.025] p-6 md:p-7">
              <p>
                Technical support, software updates, maintenance and troubleshooting services
                may be provided by Nilee Games according to the applicable commercial or
                service agreement with the Location Partner.
              </p>
              <p>
                Nilee Games may remotely monitor system health, connectivity, software status
                and operational information for the purposes of maintenance, security and
                service improvement. Partners are deemed to consent to such monitoring by
                virtue of hosting an ARCADELX kiosk.
              </p>
            </div>
          </section>

          {/* ═══ PART C — GENERAL TERMS ══════════════════════════ */}
          <div className="relative border-y border-white/5 py-14 md:py-16" data-terms-reveal id="partC">
            <div className="mb-5 inline-flex rounded-full border border-cyan-400/25 bg-cyan-400/[0.05] px-3 py-1">
              <span className="text-[10px] font-semibold uppercase tracking-[0.18em]">Part C</span>
            </div>
            <h2 className="text-2xl font-medium tracking-tight text-white sm:text-3xl md:text-4xl">General Terms</h2>
            <p className="mt-3 text-xs uppercase tracking-[0.16em] text-slate-500">Sections 16 – 23</p>
          </div>

          {/* S16 — IP */}
          <section id="tc16" className="scroll-mt-28 border-b border-white/5 py-10 md:py-14" data-terms-reveal>
            <h2><span className="mr-2 font-mono text-sm font-normal text-cyan-400">16.</span> Intellectual Property</h2>
            <p>
              All intellectual property rights in and to ARCADELX belong to Nilee Games
              and Future Technologies Pvt. Ltd. and/or its licensors:
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {["ARCADELX Branding", "Logos", "Designs", "Software", "Games", "Graphics",
                "Animations", "Technology", "Content", "Documentation", "Associated IP"].map((c) => (
                <span key={c} className="inline-flex rounded-full border border-white/10 bg-white/[0.035] px-3 py-1.5 text-xs text-slate-300">{c}</span>
              ))}
            </div>
            <p>
              No user or Location Partner receives any ownership rights in ARCADELX intellectual
              property merely by using, accessing or hosting an ARCADELX kiosk.
            </p>
            <p>
              Unauthorized copying, reproduction, modification, reverse engineering or commercial
              exploitation of any ARCADELX intellectual property is strictly prohibited.
            </p>
          </section>

          {/* S17 — Data & Privacy */}
          <section id="tc17" className="scroll-mt-28 border-b border-white/5 py-10 md:py-14" data-terms-reveal>
            <h2><span className="mr-2 font-mono text-sm font-normal text-cyan-400">17.</span> Data &amp; Privacy</h2>
            <p>Information may be processed in connection with the use of ARCADELX for:</p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {[
                { icon: <CreditCard size={15} weight="duotone" />, label: "Payment processing" },
                { icon: <CheckCircle size={15} weight="duotone" />, label: "Transaction verification" },
                { icon: <Monitor size={15} weight="duotone" />, label: "Gaming session management" },
                { icon: <Shield size={15} weight="duotone" />, label: "System security" },
                { icon: <EnvelopeSimple size={15} weight="duotone" />, label: "Customer support" },
                { icon: <Database size={15} weight="duotone" />, label: "Operational analytics" },
                { icon: <Star size={15} weight="duotone" />, label: "Service improvement" },
              ].map(({ icon, label }) => (
                <div key={label} className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/[0.02] p-4 text-sm text-slate-300">
                  <span className="mt-0.5 shrink-0 text-cyan-300">{icon}</span>
                  <span>{label}</span>
                </div>
              ))}
            </div>
            <p>
              The collection, use and processing of personal data is governed by the ARCADELX
              Privacy Policy. Users are encouraged to read the Privacy Policy to understand
              how their information is handled.
            </p>
            <a href="/privacy-policy" className="mt-6 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/[0.04] px-4 py-2 text-sm text-cyan-300 transition-colors hover:border-cyan-300/40 hover:bg-cyan-400/[0.08] hover:text-white">
              Read ARCADELX Privacy Policy <ArrowUpRight size={14} weight="bold" />
            </a>
          </section>

          {/* S18 — Third-Party Services */}
          <section id="tc18" className="scroll-mt-28 border-b border-white/5 py-10 md:py-14" data-terms-reveal>
            <h2><span className="mr-2 font-mono text-sm font-normal text-cyan-400">18.</span> Third-Party Services</h2>
            <p>ARCADELX may rely on third-party infrastructure and service providers, including:</p>
            <div className="mt-6 flex flex-wrap gap-2">
              {["Payment Gateways", "Cloud Infrastructure", "Internet / Network Providers", "Other Technology Providers"].map((c) => (
                <span key={c} className="inline-flex items-center rounded-full border border-white/10 bg-white/[0.035] px-3 py-1.5 text-xs text-slate-300">{c}</span>
              ))}
            </div>
            <div className="mt-6 flex gap-3 rounded-2xl border border-cyan-400/20 bg-cyan-400/[0.035] p-5 text-cyan-200">
              <Info size={18} weight="duotone" />
              <p>
                Nilee Games is not liable for delays, failures or errors that are exclusively
                caused by third-party systems or providers beyond its reasonable control.
              </p>
            </div>
          </section>

          {/* S19 — Limitation of Liability */}
          <section id="tc19" className="scroll-mt-28 border-b border-white/5 py-10 md:py-14" data-terms-reveal>
            <h2><span className="mr-2 font-mono text-sm font-normal text-cyan-400">19.</span> Limitation of Liability</h2>
            <p>
              To the extent permitted by applicable law, Nilee Games shall not be liable for
              losses or damage arising from:
            </p>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {[
                "Misuse of the kiosk by any user",
                "Failure to follow safety instructions",
                "Unauthorized modification or tampering by any party",
                "User negligence",
                "Network or power interruptions",
                "Third-party payment gateway failures",
                "Events beyond reasonable control",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/[0.02] p-4 text-sm text-slate-300">
                  <Warning size={15} weight="duotone" className="mt-0.5 shrink-0 text-amber-300" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.02] p-5 text-sm leading-6 text-slate-400">
              Nothing in these Terms excludes or limits any liability that cannot be lawfully
              excluded or limited under applicable law.
            </div>
          </section>

          {/* S20 — Force Majeure */}
          <section id="tc20" className="scroll-mt-28 border-b border-white/5 py-10 md:py-14" data-terms-reveal>
            <h2><span className="mr-2 font-mono text-sm font-normal text-cyan-400">20.</span> Force Majeure</h2>
            <p>
              Nilee Games shall not be liable for failure or delay in performing its obligations
              where such failure or delay is caused by events beyond its reasonable control, including:
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {[
                "Natural disasters", "Fire", "Flood", "Government restrictions",
                "Strikes", "Infrastructure failures", "Internet outages",
                "Power failures", "Cyber incidents", "Pandemics", "Other unforeseen events",
              ].map((item) => (
                <div key={item} className="rounded-full border border-white/10 bg-white/[0.035] px-3 py-1.5 text-xs text-slate-300">{item}</div>
              ))}
            </div>
          </section>

          {/* S21 — Changes */}
          <section id="tc21" className="scroll-mt-28 border-b border-white/5 py-10 md:py-14" data-terms-reveal>
            <h2><span className="mr-2 font-mono text-sm font-normal text-cyan-400">21.</span> Changes to These Terms</h2>
            <p>Nilee Games may update or modify these Terms from time to time due to changes in:</p>
            <div className="mt-6 flex flex-wrap gap-2">
              {["Products", "Services", "Technology", "Legal Requirements", "Business Practices"].map((c) => (
                <span key={c} className="rounded-full border border-white/10 bg-white/[0.035] px-3 py-1.5 text-xs text-slate-300">{c}</span>
              ))}
            </div>
            <p>
              Updated Terms will be published on the ARCADELX website or notified through
              appropriate channels. The effective date of the updated Terms will be indicated.
              Continued use of ARCADELX after updated Terms are published constitutes
              acceptance of the revised Terms.
            </p>
          </section>

          {/* S22 — Termination */}
          <section id="tc22" className="scroll-mt-28 border-b border-white/5 py-10 md:py-14" data-terms-reveal>
            <h2><span className="mr-2 font-mono text-sm font-normal text-cyan-400">22.</span> Termination</h2>
            <p>
              Nilee Games may suspend or terminate access to ARCADELX where any of the
              following occur:
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {[
                "Fraudulent activity",
                "Payment manipulation",
                "Unauthorized system access",
                "Equipment tampering",
                "Misuse of ARCADELX",
                "Material breach of these Terms",
                "Safety, security or legal risk",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/[0.02] p-4 text-sm text-slate-300">
                  <XCircle size={15} weight="duotone" className="mt-0.5 shrink-0 text-rose-300" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
            <p>
              Termination of Location Partner access and any related commercial consequences
              are additionally governed by the applicable Partner Agreement.
            </p>
          </section>

          {/* S23 — Governing Law */}
          <section id="tc23" className="scroll-mt-28 border-b border-white/5 py-10 md:py-14" data-terms-reveal>
            <h2><span className="mr-2 font-mono text-sm font-normal text-cyan-400">23.</span> Governing Law &amp; Jurisdiction</h2>
            <p>
              These Terms are governed by the laws of India. Any disputes arising out of or
              in connection with these Terms shall be subject to:
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-white/[0.025] p-6">
                <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-500">Governing Law</p>
                <p className="mt-2 text-2xl font-medium text-white">India</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/[0.025] p-6">
                <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-500">Jurisdiction</p>
                <p className="mt-2 text-2xl font-medium text-white">Mumbai</p>
                <p className="mt-2 text-sm leading-6 text-slate-400">Maharashtra, India — Competent Courts, subject to applicable law</p>
              </div>
            </div>
          </section>

        </article>
      </div>

      {/* ── Legal Contact ─────────────────────────────────────── */}
      <div className="mx-auto max-w-3xl px-5 py-20 text-center sm:px-8" data-terms-reveal>
        <h2 className="text-3xl font-medium tracking-tight text-white sm:text-4xl">Questions About These Terms?</h2>
        <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-slate-400 md:text-base">
          If you have any questions regarding these Terms &amp; Conditions, please contact us:
        </p>
        <a href="mailto:info@nileegames.com" className="mt-5 inline-flex items-center gap-2 text-sm text-cyan-300 transition-colors hover:text-white">
          <EnvelopeSimple size={18} weight="duotone" />
          info@nileegames.com
        </a>
      </div>

      
    </main>
  );
}

