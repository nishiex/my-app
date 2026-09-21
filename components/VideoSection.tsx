"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { Play, SpeakerHigh, ArrowsOut, Pause } from "./Icon";

type VideoItem = {
  id: number;
  title: string;
  duration: string;
  thumbnail: string;
  video: string;
};

const VIDEOS: VideoItem[] = [
  {
    id: 1,
    title: "ArcadeLX Overview",
    duration: "1:24",
    thumbnail: "/limitless-gaming-updated.png",
    video: "https://www.youtube.com/watch?v=vB_9_37kPGA",
  },
];

export default function VideoSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const playerRef = useRef<HTMLVideoElement | null>(null);
  const mediaRef = useRef<HTMLDivElement | null>(null);
  const [activeVideo, setActiveVideo] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [iframePlaying, setIframePlaying] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from("[data-video-reveal]", {
        y: 28,
        opacity: 0,
        duration: 0.75,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 82%",
          once: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const isYouTubeUrl = (url: string) => /(?:youtube\.com|youtu\.be)/i.test(url);

  const getYouTubeId = (url: string) => {
    const m =
      url.match(
        /(?:youtube\.com\/watch\?v=|youtube\.com\/embed\/|youtu\.be\/)([A-Za-z0-9_-]{11})/
      ) || url.match(/^([A-Za-z0-9_-]{11})$/);
    return m ? m[1] : null;
  };

  const changeVideo = (index: number) => {
    setActiveVideo(index);
    setIsPlaying(false);
    setIframePlaying(false);

    requestAnimationFrame(() => {
      const video = playerRef.current;

      if (!video) return;

      video.load();

      const playPromise = video.play();

      if (playPromise !== undefined) {
        playPromise.catch(() => {
          setIsPlaying(false);
        });
      }
    });
  };

  const togglePlay = async () => {
    const video = playerRef.current;
    const current = VIDEOS[activeVideo];

    if (isYouTubeUrl(current.video)) {
      const newState = !iframePlaying;
      setIframePlaying(newState);
      setIsPlaying(newState);
      return;
    }

    if (!video) return;

    if (video.paused) {
      try {
        await video.play();
        setIsPlaying(true);
      } catch {
        setIsPlaying(false);
      }
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  const handleIframePlay = () => {
    setIframePlaying(true);
    setIsPlaying(true);
  };

  const fullscreen = async () => {
    const el = mediaRef.current ?? (playerRef.current as any);

    if (!el) return;

    try {
      if (document.fullscreenElement) {
        await document.exitFullscreen();
      } else {
        await (el as any).requestFullscreen();
      }
    } catch {
      // Fullscreen may be unavailable in some browsers.
    }
  };

  const currentVideo = VIDEOS[activeVideo];

  return (
    <section
      ref={sectionRef}
      id="video"
      className="relative overflow-hidden bg-[#050816] py-16 sm:py-20 lg:py-24"
    >
      {/* Background */}
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_45%,rgba(0,183,255,0.10),transparent_30%),radial-gradient(circle_at_82%_50%,rgba(190,0,255,0.09),transparent_32%)]" />

        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent" />

        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-fuchsia-500/20 to-transparent" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        {/* Heading */}
        <div data-video-reveal className="mb-7">
          <h2 className="text-3xl font-meduim uppercase leading-none tracking-[-0.03em] text-white sm:text-4xl lg:text-5xl">
            VIDEO
          </h2>

          <p className="mt-2 text-[10px] font-semibold uppercase tracking-[0.08em] text-cyan-300">
            See ARCADELX in action
          </p>
        </div>

        {/* Main layout */}
        <div className="grid grid-cols-1 gap-4">
          {/* Video player */}
          <div
            data-video-reveal
            className="relative overflow-hidden rounded-xl border border-cyan-300/30 bg-[#03050d] p-2 shadow-[0_0_35px_rgba(0,190,255,0.08)]"
          >
            {/* Neon outer glow */}
            <div
              className="pointer-events-none absolute inset-0 rounded-xl bg-[linear-gradient(135deg,rgba(0,217,255,0.18),transparent_30%,transparent_70%,rgba(207,70,255,0.15))]"
              aria-hidden="true"
            />

            <div ref={mediaRef} className="relative aspect-video overflow-hidden rounded-lg bg-black">
              {isYouTubeUrl(currentVideo.video) ? (
                <>
                  {!iframePlaying ? (
                    <>
                      <img
                        src={currentVideo.thumbnail}
                        alt={currentVideo.title}
                        className="absolute inset-0 h-full w-full object-cover"
                      />

                      {!isPlaying && (
                        <button
                          type="button"
                          onClick={handleIframePlay}
                          aria-label="Play video"
                          className="group absolute left-1/2 top-1/2 z-10 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/60 bg-black/35 text-white backdrop-blur-md transition-all duration-300 hover:scale-110 hover:border-cyan-300 hover:bg-cyan-300/10 hover:shadow-[0_0_35px_rgba(103,232,249,0.3)]"
                        >
                          <Play
                            size={28}
                            weight="fill"
                            className="ml-1 transition-transform duration-300 group-hover:scale-110"
                          />
                        </button>
                      )}
                    </>
                  ) : (
                    <iframe
                      width="1053"
                      height="592"
                      className="absolute inset-0 h-full w-full"
                      src={`https://www.youtube.com/embed/${getYouTubeId(currentVideo.video)}`}
                      title="Innovative Motion-Sensing Gaming Console"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen
                    />
                  )}
                </>
              ) : (
                <>
                  <video
                    key={currentVideo.video}
                    ref={playerRef}
                    className="absolute inset-0 h-full w-full object-cover"
                    poster={currentVideo.thumbnail}
                    preload="metadata"
                    playsInline
                    onPlay={() => setIsPlaying(true)}
                    onPause={() => setIsPlaying(false)}
                    onEnded={() => setIsPlaying(false)}
                    controls
                  >
                    <source src={currentVideo.video} type="video/mp4" />
                    Your browser does not support the video element.
                  </video>

                  {/* Center play button for native video */}
                  {!isPlaying && (
                    <button
                      type="button"
                      onClick={togglePlay}
                      aria-label="Play video"
                      className="group absolute left-1/2 top-1/2 z-10 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/60 bg-black/35 text-white backdrop-blur-md transition-all duration-300 hover:scale-110 hover:border-cyan-300 hover:bg-cyan-300/10 hover:shadow-[0_0_35px_rgba(103,232,249,0.3)]"
                    >
                      <Play
                        size={28}
                        weight="fill"
                        className="ml-1 transition-transform duration-300 group-hover:scale-110"
                      />
                    </button>
                  )}
                </>
              )}

              {/* Custom bottom controls (only for native video) */}
              {!isYouTubeUrl(currentVideo.video) && (
                <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 flex items-center justify-between bg-gradient-to-t from-black/80 to-transparent px-3 pb-3 pt-10">
                  <div className="pointer-events-auto flex items-center gap-2">
                    <button
                      type="button"
                      onClick={togglePlay}
                      className="flex h-8 w-8 items-center justify-center rounded-md text-white transition-colors hover:bg-white/10"
                      aria-label={isPlaying ? "Pause video" : "Play video"}
                    >
                      {isPlaying ? (
                        <Pause size={15} />
                      ) : (
                        <Play size={15} />
                      )}
                    </button>

                    <button
                      type="button"
                      className="flex h-8 w-8 items-center justify-center rounded-md text-white transition-colors hover:bg-white/10"
                      aria-label="Toggle sound"
                    >
                      <SpeakerHigh size={15} />
                    </button>
                  </div>

                  <button
                    type="button"
                    onClick={fullscreen}
                    className="pointer-events-auto flex h-8 w-8 items-center justify-center rounded-md text-white transition-colors hover:bg-white/10"
                    aria-label="Fullscreen"
                  >
                    <ArrowsOut size={15} />
                  </button>
                </div>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
