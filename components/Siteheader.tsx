"use client";

import Image from "next/image";
import { useState } from "react";
import { ArrowRight, Play, Pulse, UsersThree, Cube, Plug } from "./Icon";

const links = [ "About", "Games", "Contact", "Support"];

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header
        className={[
          "sticky top-0 z-[100] w-full",
          "border-b border-white/[0.07]",
          "bg-[#020817] ",
        ].join(" ")}
      >
        {/* Top neon line */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/50 to-transparent" />

        <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-12">
          {/* Brand */}
          <a
            href="/"
            className="group flex shrink-0 items-center"
            aria-label="ArcadeLX home"
          >
            <Image
              className="h-auto w-[clamp(135px,10vw,190px)] transition-transform duration-300 group-hover:scale-[1.02]"
              src="/arcadelx_logo.png"
              alt="ArcadeLX"
              width={190}
              height={40}
              priority
            />
          </a>

          {/* Desktop navigation */}
          <nav
            className="hidden items-center gap-7 md:flex lg:gap-9"
            aria-label="Primary navigation"
          >
            {links.map((link) => {
              const isHome = link === "Home";

              return (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className={[
                    "group relative py-2",
                    "text-[11px] uppercase tracking-[0.16em]",
                    "transition-colors duration-200",
                    isHome
                      ? "text-cyan-300"
                      : "text-slate-400 hover:text-white",
                  ].join(" ")}
                >
                  <span>{link}</span>

                  <span
                    className={[
                      "absolute inset-x-0 bottom-0 h-px origin-left",
                      "bg-gradient-to-r from-cyan-300 to-fuchsia-400",
                      "transition-transform duration-300",
                      isHome
                        ? "scale-x-100"
                        : "scale-x-0 group-hover:scale-x-100",
                    ].join(" ")}
                  />
                </a>
              );
            })}
          </nav>

          {/* Desktop CTA */}
          
                      

          {/* Mobile menu button */}
          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.03] md:hidden"
            onClick={() => setMenuOpen((value) => !value)}
            aria-expanded={menuOpen}
            aria-controls="lx-mobile-nav"
            aria-label="Toggle navigation"
          >
            <span className="flex w-5 flex-col gap-[5px]">
              <span
                className={[
                  "block h-[2px] w-full origin-center rounded-full bg-white transition-transform duration-300",
                  menuOpen ? "translate-y-[7px] rotate-45" : "",
                ].join(" ")}
              />
              <span
                className={[
                  "block h-[2px] w-full rounded-full bg-white transition-opacity duration-200",
                  menuOpen ? "opacity-0" : "opacity-100",
                ].join(" ")}
              />
              <span
                className={[
                  "block h-[2px] w-full origin-center rounded-full bg-white transition-transform duration-300",
                  menuOpen ? "-translate-y-[7px] -rotate-45" : "",
                ].join(" ")}
              />
            </span>
          </button>
        </div>

        {/* Mobile menu */}
        <div
          className={[
            "overflow-hidden border-t border-white/[0.06] bg-[#050816]/95 backdrop-blur-2xl md:hidden",
            "transition-[max-height,opacity] duration-300",
            menuOpen
              ? "max-h-[500px] opacity-100"
              : "max-h-0 opacity-0",
          ].join(" ")}
        >
          <nav
            id="lx-mobile-nav"
            className="mx-auto max-w-7xl px-5 py-4 sm:px-8"
            aria-label="Mobile navigation"
          >
            <div className="flex flex-col">
              {links.map((link) => {
                const isHome = link === "Home";

                return (
                  <a
                    key={link}
                    href={`#${link.toLowerCase()}`}
                    onClick={closeMenu}
                    className={[
                      "flex items-center justify-between",
                      "border-b border-white/[0.05]",
                      "py-4 text-sm uppercase tracking-[0.12em]",
                      "transition-colors duration-200",
                      isHome
                        ? "text-cyan-300"
                        : "text-slate-300 hover:text-white",
                    ].join(" ")}
                  >
                    <span>{link}</span>

                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                      aria-hidden="true"
                      className="text-slate-600"
                    >
                      <path
                        d="M2.33333 7H11.6667M11.6667 7L7 2.33333M11.6667 7L7 11.6667"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>
                );
              })}
            </div>

            {/* Mobile CTA */}
            <a
              href="mailto:hello@arcadelx.com"
              onClick={closeMenu}
              className="mt-5 flex items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-[11px] font-semibold uppercase tracking-[0.08em] text-[#050816] hidden"
            >
              <span>Order now</span>

              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M2.33333 7H11.6667M11.6667 7L7 2.33333M11.6667 7L7 11.6667"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </nav>
        </div>
      </header>
    </>
  );
}

