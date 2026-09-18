"use client";

import Image from "next/image";
import { ArrowRight } from "./Icon";

export default function SiteFooter() {
  return (
    <footer
      id="support"
      className="relative overflow-hidden border-t border-white/[0.07] bg-[#03050d] text-white"
    >
      {/* Background glow */}
      <div
        className="pointer-events-none absolute inset-0 overflow-hidden"
        aria-hidden="true"
      >
        <div className="absolute left-[-8%] top-[-18%] h-72 w-72 rounded-full bg-cyan-400/[0.06] blur-3xl" />
        <div className="absolute right-[-8%] bottom-[-20%] h-80 w-80 rounded-full bg-fuchsia-500/[0.05] blur-3xl" />

        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/30 to-transparent" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 py-14 sm:px-8 md:py-16 lg:px-12">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-[1.25fr_0.8fr_0.95fr_1.15fr] lg:gap-12 xl:gap-16">
          {/* Brand */}
          <div>
            <a
              href="#home"
              aria-label="ArcadeLX home"
              className="inline-flex"
            >
              <Image
                src="/arcadelx_logo.png"
                alt="ArcadeLX"
                width={160}
                height={49}
                className="h-auto w-[145px] transition-transform duration-300 hover:scale-[1.02] sm:w-[160px]"
              />
            </a>

            <p className="mt-5 max-w-xs text-sm leading-7 text-slate-400">
              Live the gaming experience.
              <br />
              Designed for a more active tomorrow.
            </p>

            <a
              href="mailto:hello@arcadelx.com"
              className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-cyan-300 transition-colors duration-200 hover:text-white"
            >
              hello@arcadelx.com
                <ArrowRight
                  size={14}
                  className="transition-transform duration-200 group-hover:translate-x-1"
                />
            </a>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="mb-5 text-[10px] font-semibold uppercase tracking-[0.22em] text-slate-500">
              Quick links
            </h3>

            <nav className="flex flex-col gap-1" aria-label="Quick links">
              <a
                href="#home"
                className="group flex items-center gap-2 py-1.5 text-sm text-slate-400 transition-colors hover:text-white"
              >
                Home
              </a>

              <a
                href="#about"
                className="group flex items-center gap-2 py-1.5 text-sm text-slate-400 transition-colors hover:text-white"
              >
                About us
              </a>

              <a
                href="#games"
                className="group flex items-center gap-2 py-1.5 text-sm text-slate-400 transition-colors hover:text-white"
              >
                Games
              </a>

              <a
                href="#gallery"
                className="group flex items-center gap-2 py-1.5 text-sm text-slate-400 transition-colors hover:text-white"
              >
                Gallery
              </a>
            </nav>
          </div>

          {/* Support */}
          <div>
            <h3 className="mb-5 text-[10px] font-semibold uppercase tracking-[0.22em] text-slate-500">
              Support
            </h3>

            <nav className="flex flex-col gap-1" aria-label="Support links">
              <a
                href="#contact"
                className="py-1.5 text-sm text-slate-400 transition-colors hover:text-white"
              >
                Contact us
              </a>

              <a
                href="/privacy-policy"
                className="py-1.5 text-sm text-slate-400 transition-colors hover:text-white"
              >
                Privacy Policy
              </a>

              <a
                href="/terms-and-conditions"
                className="py-1.5 text-sm text-slate-400 transition-colors hover:text-white"
              >
                Terms &amp; Conditions
              </a>

              <a
                href="/refund-cancellation-policy"
                className="py-1.5 text-sm text-slate-400 transition-colors hover:text-white"
              >
                Refund &amp; Cancellation
              </a>

              <a
                href="#support"
                className="py-1.5 text-sm text-slate-400 transition-colors hover:text-white"
              >
                FAQs
              </a>

              <a
                href="#support"
                className="py-1.5 text-sm text-slate-400 transition-colors hover:text-white"
              >
                Warranty
              </a>

              <a
                href="#support"
                className="py-1.5 text-sm text-slate-400 transition-colors hover:text-white"
              >
                Customer support
              </a>
            </nav>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="mb-5 text-[10px] font-semibold uppercase tracking-[0.22em] text-slate-500">
              Stay updated
            </h3>

            <p className="max-w-xs text-sm leading-6 text-slate-400">
              Get the latest games, offers and news.
            </p>

            <form
              className="mt-5 flex w-full max-w-sm items-center overflow-hidden rounded-full border border-white/[0.1] bg-white/[0.025] p-1 backdrop-blur-xl transition-colors focus-within:border-cyan-300/30"
              onSubmit={(event) => event.preventDefault()}
            >
              <input
                type="email"
                aria-label="Your email address"
                placeholder="Your email address"
                className="min-w-0 flex-1 bg-transparent px-4 py-3 text-sm text-white outline-none placeholder:text-slate-600"
              />

              <button
                type="submit"
                aria-label="Subscribe"
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-[#050816] transition-all duration-200 hover:bg-cyan-100 hover:shadow-[0_0_22px_rgba(103,232,249,0.18)]"
              >
                <ArrowRight size={19} weight="bold" />
              </button>
            </form>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 flex flex-col gap-4 border-t border-white/[0.07] pt-6 sm:mt-14 sm:flex-row sm:items-center sm:justify-between">
          <small className="text-[11px] text-slate-500">
            © 2026 ArcadeLX. All rights reserved.
          </small>

          <span className="text-[9px] font-medium uppercase tracking-[0.2em] text-slate-600">
            Limitless Gaming Xperience
          </span>
        </div>
      </div>
    </footer>
  );
}
