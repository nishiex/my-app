"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import gsap from "gsap";
import { Play, X } from "./Icon";

type VideoModalProps = {
  open: boolean;
  onClose: () => void;
  /** YouTube video id, e.g. "KA8HqOMtfV4". */
  videoId: string;
  /** Poster image shown before the video is played. */
  thumbnail?: string;
  title?: string;
};

export default function VideoModal({
  open,
  onClose,
  videoId,
  thumbnail,
  title = "ArcadeLX video",
}: VideoModalProps) {
  // `mounted` keeps the dialog in the DOM through its GSAP exit animation.
  const [mounted, setMounted] = useState(false);
  // `playing` swaps the thumbnail for the YouTube iframe.
  const [playing, setPlaying] = useState(false);
  const overlayRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  // Mount as soon as we open (and reset to the thumbnail state);
  // unmount happens after the exit tween.
  useEffect(() => {
    if (open) {
      setMounted(true);
      setPlaying(false);
    }
  }, [open]);

  // GSAP enter / exit animation.
  useEffect(() => {
    if (!mounted) return;

    const overlay = overlayRef.current;
    const panel = panelRef.current;
    if (!overlay || !panel) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    let tl: gsap.core.Timeline | null = null;

    if (open) {
      // ENTER
      if (reduceMotion) {
        gsap.set(overlay, { opacity: 1 });
        gsap.set(panel, { opacity: 1, scale: 1, y: 0 });
      } else {
        gsap.to(overlay, { opacity: 1, duration: 0.3, ease: "power2.out" });
        gsap.fromTo(
          panel,
          { opacity: 0, scale: 0.9, y: 24 },
          { opacity: 1, scale: 1, y: 0, duration: 0.5, ease: "back.out(1.5)" },
        );
      }
      closeRef.current?.focus();
    } else {
      // EXIT, then unmount (which stops the video)
      if (reduceMotion) {
        setMounted(false);
      } else {
        tl = gsap.timeline({ onComplete: () => setMounted(false) });
        tl.to(
          panel,
          { opacity: 0, scale: 0.92, y: 16, duration: 0.28, ease: "power2.in" },
          0,
        ).to(
          overlay,
          { opacity: 0, duration: 0.3, ease: "power2.in" },
          0,
        );
      }
    }

    return () => {
      tl?.kill();
      gsap.killTweensOf([overlay, panel]);
    };
  }, [open, mounted]);

  // While mounted: lock body scroll and close on Escape.
  useEffect(() => {
    if (!mounted) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    document.addEventListener("keydown", onKeyDown);

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = prevOverflow;
    };
  }, [mounted, onClose]);

  if (!mounted) return null;

  return createPortal(
    <div
      ref={overlayRef}
      role="dialog"
      aria-modal="true"
      aria-label={title}
      onClick={onClose}
      style={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4 backdrop-blur-md sm:p-6"
    >
      {/* Ambient glow to match the site's neon aesthetic */}
      <div
        className="pointer-events-none absolute inset-0 overflow-hidden"
        aria-hidden="true"
      >
        <div className="absolute left-1/2 top-1/2 h-[70vh] w-[70vh] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(59,130,246,0.16),rgba(168,85,247,0.10)_40%,transparent_65%)] blur-3xl" />
      </div>

      <div
        ref={panelRef}
        onClick={(e) => e.stopPropagation()}
        style={{ opacity: 0 }}
        className="relative w-full max-w-4xl"
      >
        {/* Close button */}
        <button
          ref={closeRef}
          type="button"
          onClick={onClose}
          aria-label="Close video"
          className="absolute -top-11 right-0 flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-white/[0.04] text-slate-300 backdrop-blur-sm transition-all duration-300 hover:border-cyan-400/50 hover:bg-cyan-400/10 hover:text-white sm:-top-12 sm:h-10 sm:w-10"
        >
          <X size={18} />
        </button>

        {/* Player frame — mirrors VideoSection styling */}
        <div className="relative overflow-hidden rounded-xl border border-cyan-300/30 bg-[#03050d] p-2 shadow-[0_0_45px_rgba(0,190,255,0.12)]">
          <div
            className="pointer-events-none absolute inset-0 rounded-xl bg-[linear-gradient(135deg,rgba(0,217,255,0.18),transparent_30%,transparent_70%,rgba(207,70,255,0.15))]"
            aria-hidden="true"
          />

          <div className="relative aspect-video overflow-hidden rounded-lg bg-black">
            {playing || !thumbnail ? (
              <iframe
                className="absolute inset-0 h-full w-full"
                src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
                title={title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            ) : (
              <>
                {/* Thumbnail */}
                <img
                  src={thumbnail}
                  alt={title}
                  className="absolute inset-0 h-full w-full object-cover"
                />

                <div
                  className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-black/10"
                  aria-hidden="true"
                />

                {/* Play button */}
                <button
                  type="button"
                  onClick={() => setPlaying(true)}
                  aria-label="Play video"
                  className="group absolute left-1/2 top-1/2 z-10 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/60 bg-black/35 text-white backdrop-blur-md transition-all duration-300 hover:scale-110 hover:border-cyan-300 hover:bg-cyan-300/10 hover:shadow-[0_0_35px_rgba(103,232,249,0.3)]"
                >
                  <Play
                    size={28}
                    weight="fill"
                    className="ml-1 transition-transform duration-300 group-hover:scale-110"
                  />
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>,
    document.body,
  );
}
