"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function LenisProvider() {
  useEffect(() => {
    let lenis: any = null;
    let rafId: number | null = null;

    const handleScroll = () => {
      try {
        ScrollTrigger.update();
      } catch (e) {
        // noop
      }
    };

    const handleRefresh = () => {
      try {
        if (lenis && typeof lenis.resize === "function") {
          lenis.resize();
        } else if (lenis && typeof lenis.update === "function") {
          lenis.update();
        }
      } catch (e) {
        // noop
      }
    };

    const handleAnchorClick = (event: MouseEvent) => {
      try {
        const target = event.target as HTMLElement | null;
        if (!target) return;

        const anchor = (target.closest && (target.closest("a") as HTMLAnchorElement | null)) || null;
        if (!anchor) return;

        const href = anchor.getAttribute("href");
        if (!href || !href.startsWith("#")) return;

        const id = href.slice(1);
        const el = id ? document.getElementById(id) : document.documentElement;

        // If the target exists, animate via Lenis; otherwise fall back to native
        if (el && lenis && typeof lenis.scrollTo === "function") {
          event.preventDefault();
          lenis.scrollTo(el);
        }
      } catch (e) {
        // noop
      }
    };

    const init = async () => {
      try {
        // Attempt both package names to be resilient across installs
                let mod = null;
        try {
          mod = await import("lenis");
        } catch (e) {
          // Lenis package not found at runtime; skip initialization
          mod = null;
        }

        if (!mod) {
          // Lenis is not installed — skip smooth scrolling setup.
          return;
        }

        const Lenis = (mod.default ?? (mod as any).Lenis ?? mod) as any;
        lenis = new Lenis({
          duration: 1.2,
          easing: (t: number) => Math.min(1, 1 - Math.pow(1 - t, 4)),
          smooth: true,
          direction: "vertical",
          gestureDirection: "vertical",
          smoothTouch: true,
        });
        try { (window as any).__LENIS = lenis; } catch(e){}

        gsap.registerPlugin(ScrollTrigger);

        // Proxy documentElement so ScrollTrigger reads Lenis's scroll position
        ScrollTrigger.scrollerProxy(document.documentElement, {
                    scrollTop(value?: number) {
            if (!lenis) return 0;
            if (arguments.length && typeof value !== "undefined") {
              lenis.scrollTo(value as number);
              return;
            }
            return (lenis as any).scroll ?? document.documentElement.scrollTop;
          },getBoundingClientRect() {
            return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
          },
          pinType: document.documentElement.style.transform ? "transform" : "fixed",
        });

        // Keep ScrollTrigger in sync
        lenis.on?.("scroll", handleScroll);

        // Tell Lenis to recalc when ScrollTrigger refreshes
        ScrollTrigger.addEventListener?.("refresh", handleRefresh);

        // Intercept in-page hash links and animate via Lenis
        document.addEventListener("click", handleAnchorClick);

        // Drive Lenis using requestAnimationFrame (required by the user)
        const raf = (time: number) => {
          lenis?.raf(time);
          rafId = requestAnimationFrame(raf);
        };
        rafId = requestAnimationFrame(raf);

        // Ensure ScrollTrigger has correct initial measurements
        ScrollTrigger.refresh();
      } catch (err) {
        // If Lenis couldn't be loaded, silently no-op (app still works)
        // console.warn('LenisProvider init failed', err);
      }
    };

    init();

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      try {
        document.removeEventListener("click", handleAnchorClick);
        lenis?.off?.("scroll", handleScroll);
        lenis?.destroy?.();
        try { (window as any).__LENIS = null; } catch(e) {}
      } catch (e) {
        // noop
      }

      try {
        ScrollTrigger.removeEventListener?.("refresh", handleRefresh);

        // Reset scrollerProxy to default behavior
        ScrollTrigger.scrollerProxy(document.documentElement, {
          scrollTop(value?: number) {
            if (arguments.length && typeof value !== "undefined") { window.scrollTo(0, value); return; } else { return window.scrollY; }
          },
          getBoundingClientRect() {
            return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
          },
        });

        ScrollTrigger.refresh();
      } catch (e) {
        // noop
      }
    };
  }, []);

  return null;
}










