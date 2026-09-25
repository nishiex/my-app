"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  ArrowRight,
  ArrowUpRight,
  Buildings,
  CheckCircle,
  ChatText,
  Clock,
  EnvelopeSimple,
  MapPin,
  PaperPlaneRight,
  Person,
  Phone,
} from "../../components/Icon";

/* ── Contact channels ─────────────────────────────────────────────── */
const CHANNELS = [
  {
    icon: <EnvelopeSimple size={20} weight="duotone" />,
    label: "General Inquiries",
    value: "hello@arcadelx.com",
    href: "mailto:hello@arcadelx.com",
    accent: "cyan" as const,
  },
  {
    icon: <ChatText size={20} weight="duotone" />,
    label: "Orders & Support",
    value: "info@nileegames.com",
    href: "mailto:info@nileegames.com",
    accent: "fuchsia" as const,
  },
];

/* ── Subject options ──────────────────────────────────────────────── */
const SUBJECTS = [
  "General Inquiry",
  "Order & Pricing",
  "Partnership / Host a Kiosk",
  "Request a Demo",
  "Technical Support",
];

const ACCENT = {
  cyan: "border-cyan-400/20 bg-cyan-400/[0.05] text-cyan-300",
  fuchsia: "border-fuchsia-400/20 bg-fuchsia-400/[0.05] text-fuchsia-300",
} as const;

export default function ContactPage() {
  const root = useRef<HTMLElement>(null);

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    subject: SUBJECTS[0],
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sent, setSent] = useState(false);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      const reduce = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      if (!reduce) {
        gsap.from("[data-contact-hero] > *", {
          y: 24,
          opacity: 0,
          duration: 0.7,
          stagger: 0.1,
          ease: "power3.out",
          delay: 0.15,
        });
      }

      gsap.utils.toArray<HTMLElement>("[data-contact-reveal]").forEach((el) => {
        gsap.from(el, {
          y: reduce ? 0 : 22,
          opacity: reduce ? 1 : 0,
          duration: reduce ? 0 : 0.6,
          ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 88%", once: true },
        });
      });
    }, root);
    return () => ctx.revert();
  }, []);

  const update =
    (field: keyof typeof form) =>
    (
      e: React.ChangeEvent<
        HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
      >,
    ) => {
      setForm((prev) => ({ ...prev, [field]: e.target.value }));
      setErrors((prev) => {
        if (!prev[field]) return prev;
        const next = { ...prev };
        delete next[field];
        return next;
      });
    };

  const validate = () => {
    const next: Record<string, string> = {};
    if (!form.name.trim()) next.name = "Please enter your name.";
    if (!form.email.trim()) {
      next.email = "Please enter your email.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      next.email = "Please enter a valid email address.";
    }
    if (!form.message.trim()) next.message = "Please enter a message.";
    return next;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const found = validate();
    if (Object.keys(found).length) {
      setErrors(found);
      return;
    }

    // No backend on this static site: compose a pre-filled email to the
    // ARCADELX inbox so the message is actually delivered via the visitor's
    // own mail client, then show an on-page confirmation.
    const bodyLines = [
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      form.phone && `Phone: ${form.phone}`,
      form.company && `Company: ${form.company}`,
      "",
      form.message,
    ].filter(Boolean);

    const mailto =
      `mailto:hello@arcadelx.com` +
      `?subject=${encodeURIComponent(`[${form.subject}] — ${form.name}`)}` +
      `&body=${encodeURIComponent(bodyLines.join("\n"))}`;

    window.location.href = mailto;
    setSent(true);
  };

  return (
    <main
      className="min-h-screen overflow-x-hidden bg-[#050816] text-white"
      ref={root}
    >
      {/* ── Hero ──────────────────────────────────────────────── */}
      <section
        className="relative isolate flex min-h-[380px] items-center overflow-hidden border-b border-white/5 bg-[#050816]"
        aria-label="Contact ARCADELX hero"
      >
        <div
          className="pointer-events-none absolute inset-0 -z-10 overflow-hidden bg-[radial-gradient(circle_at_18%_30%,rgba(0,217,255,0.12),transparent_32%),radial-gradient(circle_at_82%_20%,rgba(236,72,153,0.10),transparent_30%),linear-gradient(180deg,#050816_0%,#070b1d_100%)]"
          aria-hidden="true"
        >
          <div className="absolute inset-0 opacity-[0.16] [background-image:linear-gradient(rgba(255,255,255,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.045)_1px,transparent_1px)] [background-size:56px_56px] [mask-image:linear-gradient(to_bottom,black,transparent)]" />
          <div className="absolute -left-24 top-10 size-80 rounded-full bg-cyan-400/10 blur-[100px]" />
          <div className="absolute -right-24 bottom-0 size-96 rounded-full bg-fuchsia-500/10 blur-[120px]" />
          <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent" />
        </div>

        <div
          className="relative z-10 mx-auto w-full max-w-7xl px-5 py-20 sm:px-8 lg:px-12"
          data-contact-hero
        >
          <p className="mb-6 flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-cyan-300">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_12px_rgba(34,211,238,0.9)]" />
            Get in touch · Contact
          </p>
          <h1 className="max-w-4xl text-4xl font-medium tracking-[-0.04em] text-white sm:text-5xl md:text-6xl lg:text-7xl">
            Let&apos;s bring{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-fuchsia-500 bg-clip-text text-transparent">
              ARCADELX
            </span>{" "}
            to your space.
          </h1>
          <p className="mt-6 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base md:text-lg">
            Questions about orders, pricing, hosting a kiosk at your venue, or a
            live demo? Send us a message and our team will get back to you.
          </p>
        </div>
      </section>

      {/* ── Body ──────────────────────────────────────────────── */}
      <div className="relative z-20 mx-auto -mt-10 grid w-full max-w-7xl grid-cols-1 gap-6 px-5 pb-24 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-10 lg:px-12">
        {/* Form card */}
        <div
          data-contact-reveal
          className="rounded-2xl border border-white/10 bg-white/[0.035] p-6 shadow-[0_20px_80px_rgba(0,0,0,0.35)] backdrop-blur-xl md:p-8"
        >
          {sent ? (
            <div className="flex min-h-[420px] flex-col items-center justify-center text-center">
              <span className="mb-6 grid size-16 place-items-center rounded-2xl border border-cyan-400/25 bg-cyan-400/[0.06] text-cyan-300 shadow-[0_0_35px_rgba(34,211,238,0.12)]">
                <CheckCircle size={34} weight="duotone" />
              </span>
              <h2 className="text-2xl font-medium tracking-tight text-white">
                Thanks — your message is on its way.
              </h2>
              <p className="mt-3 max-w-md text-sm leading-7 text-slate-400">
                Your email client should have opened with your message ready to
                send. If it didn&apos;t, reach us directly at{" "}
                <a
                  href="mailto:hello@arcadelx.com"
                  className="text-cyan-300 underline decoration-cyan-300/30 underline-offset-4 hover:text-white"
                >
                  hello@arcadelx.com
                </a>
                . We usually respond within 1–2 business days.
              </p>
              <button
                type="button"
                onClick={() => setSent(false)}
                className="mt-8 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.03] px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.1em] text-slate-300 transition-colors hover:border-cyan-300/40 hover:text-white"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate>
              <h2 className="text-xl font-medium tracking-tight text-white sm:text-2xl">
                Send us a message
              </h2>
              <p className="mt-2 text-sm leading-6 text-slate-400">
                Fill in the form and we&apos;ll get back to you shortly.
              </p>

              <div className="mt-7 grid gap-5 sm:grid-cols-2">
                <Field
                  label="Name"
                  required
                  error={errors.name}
                  icon={<Person size={15} weight="duotone" />}
                >
                  <input
                    type="text"
                    value={form.name}
                    onChange={update("name")}
                    placeholder="Your full name"
                    className={inputClass(!!errors.name)}
                    autoComplete="name"
                  />
                </Field>

                <Field
                  label="Email"
                  required
                  error={errors.email}
                  icon={<EnvelopeSimple size={15} weight="duotone" />}
                >
                  <input
                    type="email"
                    value={form.email}
                    onChange={update("email")}
                    placeholder="you@example.com"
                    className={inputClass(!!errors.email)}
                    autoComplete="email"
                  />
                </Field>

                <Field
                  label="Phone"
                  icon={<Phone size={15} weight="duotone" />}
                >
                  <input
                    type="tel"
                    value={form.phone}
                    onChange={update("phone")}
                    placeholder="Optional"
                    className={inputClass(false)}
                    autoComplete="tel"
                  />
                </Field>

                <Field
                  label="Company"
                  icon={<Buildings size={15} weight="duotone" />}
                >
                  <input
                    type="text"
                    value={form.company}
                    onChange={update("company")}
                    placeholder="Optional"
                    className={inputClass(false)}
                    autoComplete="organization"
                  />
                </Field>
              </div>

              <div className="mt-5">
                <label className="mb-2 flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-400">
                  <span className="text-cyan-300">
                    <ChatText size={15} weight="duotone" />
                  </span>
                  How can we help?
                </label>
                <div className="flex flex-wrap gap-2">
                  {SUBJECTS.map((s) => {
                    const active = form.subject === s;
                    return (
                      <button
                        key={s}
                        type="button"
                        onClick={() => setForm((p) => ({ ...p, subject: s }))}
                        aria-pressed={active}
                        className={[
                          "rounded-full border px-3.5 py-1.5 text-xs transition-all duration-200",
                          active
                            ? "border-cyan-400/40 bg-cyan-400/[0.08] text-cyan-200"
                            : "border-white/10 bg-white/[0.02] text-slate-400 hover:border-white/20 hover:text-slate-200",
                        ].join(" ")}
                      >
                        {s}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="mt-5">
                <Field label="Message" required error={errors.message}>
                  <textarea
                    value={form.message}
                    onChange={update("message")}
                    rows={5}
                    placeholder="Tell us a little about what you're looking for…"
                    className={`${inputClass(!!errors.message)} resize-y`}
                  />
                </Field>
              </div>

              <button
                type="submit"
                className="group mt-7 inline-flex h-12 w-full items-center justify-center gap-2.5 overflow-hidden rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-fuchsia-500 px-6 text-xs font-bold uppercase tracking-[0.13em] text-white shadow-[0_0_28px_rgba(59,130,246,0.25)] transition-all duration-300 hover:scale-[1.01] hover:shadow-[0_0_38px_rgba(217,70,239,0.4)] sm:w-auto sm:px-10"
              >
                <span>Send Message</span>
                <PaperPlaneRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </button>

              <p className="mt-4 text-[11px] leading-5 text-slate-500">
                By sending this message you agree to be contacted about your
                inquiry. We usually respond within 1–2 business days.
              </p>
            </form>
          )}
        </div>

        {/* Info column */}
        <div className="flex flex-col gap-4" data-contact-reveal>
          {CHANNELS.map((c) => (
            <a
              key={c.value}
              href={c.href}
              className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.025] p-5 backdrop-blur-xl transition-all duration-300 hover:border-cyan-300/30 hover:bg-white/[0.04]"
            >
              <span
                className={`grid size-12 shrink-0 place-items-center rounded-xl border ${ACCENT[c.accent]}`}
              >
                {c.icon}
              </span>
              <span className="min-w-0">
                <span className="block text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-500">
                  {c.label}
                </span>
                <span className="mt-1 flex items-center gap-1.5 text-sm text-white">
                  {c.value}
                  <ArrowUpRight
                    size={14}
                    className="text-slate-500 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-cyan-300"
                  />
                </span>
              </span>
            </a>
          ))}

          <div className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.025] p-5 backdrop-blur-xl">
            <span className="grid size-12 shrink-0 place-items-center rounded-xl border border-white/10 bg-white/[0.03] text-cyan-300">
              <MapPin size={20} weight="duotone" />
            </span>
            <div className="min-w-0">
              <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-500">
                Head Office
              </p>
              <p className="mt-1 text-sm leading-6 text-slate-200">
                Nilee Games and Future Technologies Pvt. Ltd.
              </p>
              <p className="text-sm leading-6 text-slate-400">
                Mumbai, Maharashtra, India
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.025] p-5 backdrop-blur-xl">
            <span className="grid size-12 shrink-0 place-items-center rounded-xl border border-white/10 bg-white/[0.03] text-fuchsia-300">
              <Clock size={20} weight="duotone" />
            </span>
            <div className="min-w-0">
              <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-500">
                Business Hours
              </p>
              <p className="mt-1 text-sm leading-6 text-slate-200">
                Monday – Saturday
              </p>
              <p className="text-sm leading-6 text-slate-400">
                10:00 AM – 7:00 PM IST
              </p>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-2xl border border-cyan-400/20 bg-gradient-to-br from-cyan-400/[0.06] to-fuchsia-500/[0.05] p-6">
            <div
              className="pointer-events-none absolute -right-6 -top-6 size-24 rounded-full bg-cyan-400/10 blur-2xl"
              aria-hidden="true"
            />
            <p className="text-sm font-medium text-white">
              Looking to host a kiosk?
            </p>
            <p className="mt-2 text-sm leading-6 text-slate-300">
              Malls, corporates, schools and gyms — turn any space into a gaming
              destination.
            </p>
            <a
              href="mailto:hello@arcadelx.com?subject=ARCADELX%20Partnership%20Inquiry"
              className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-cyan-300 transition-colors hover:text-white"
            >
              Become a partner
              <ArrowRight size={15} />
            </a>
          </div>
        </div>
      </div>

      {/* ── Closing band ──────────────────────────────────────── */}
      <section
        className="relative overflow-hidden border-t border-white/[0.06] bg-[#030817] py-16"
        aria-label="Response promise"
        data-contact-reveal
      >
        <div
          className="pointer-events-none absolute inset-0"
          aria-hidden="true"
        >
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-cyan-400/60 via-blue-400/30 to-fuchsia-500/60" />
          <div className="absolute left-[12%] top-1/2 h-48 w-48 -translate-y-1/2 rounded-full bg-cyan-400/[0.05] blur-3xl" />
          <div className="absolute right-[12%] top-1/2 h-56 w-56 -translate-y-1/2 rounded-full bg-fuchsia-500/[0.05] blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-3xl px-5 text-center sm:px-8">
          <h2 className="text-2xl font-medium tracking-tight text-white sm:text-3xl">
            Prefer to email us directly?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-7 text-slate-400">
            Drop us a line and a member of the ARCADELX team will get back to
            you as soon as possible.
          </p>
          <a
            href="mailto:hello@arcadelx.com"
            className="mt-6 inline-flex items-center gap-2 text-sm text-cyan-300 transition-colors hover:text-white"
          >
            <EnvelopeSimple size={18} weight="duotone" />
            hello@arcadelx.com
          </a>
        </div>
      </section>
    </main>
  );
}

/* ── Field helpers ────────────────────────────────────────────────── */
function inputClass(hasError: boolean) {
  return [
    "w-full rounded-xl border bg-white/[0.02] px-4 py-3 text-sm text-white",
    "outline-none transition-colors placeholder:text-slate-600",
    "focus:bg-white/[0.03]",
    hasError
      ? "border-rose-400/50 focus:border-rose-400/70"
      : "border-white/10 focus:border-cyan-300/40",
  ].join(" ");
}

function Field({
  label,
  required,
  error,
  icon,
  children,
}: {
  label: string;
  required?: boolean;
  error?: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-2 flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-400">
        {icon && <span className="text-cyan-300">{icon}</span>}
        {label}
        {required && <span className="text-fuchsia-400">*</span>}
      </span>
      {children}
      {error && (
        <span className="mt-1.5 block text-[11px] text-rose-300">{error}</span>
      )}
    </label>
  );
}

