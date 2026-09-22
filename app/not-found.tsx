import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight, ArrowLeft } from "@/components/Icon";

export const metadata: Metadata = {
  title: "404 · ARCADELX",
  description:
    "This level doesn't exist. The page you're looking for has moved, been removed, or never made the cut.",
};

export default function NotFound() {
  return (
    <section
      className="
        relative
        flex
        min-h-[80vh]
        items-center
        justify-center
        overflow-hidden
        bg-[#020817]
        px-6
        py-24
        text-white
      "
    >
      {/* =========================================================
          BACKGROUND GLOWS
      ========================================================= */}

      {/* Top purple glow */}
      <div
        className="
          nf-glow
          pointer-events-none
          absolute
          -top-48
          right-[-10%]
          h-[500px]
          w-[700px]
          rounded-full
          bg-purple-700/10
          blur-[140px]
        "
      />

      {/* Bottom blue glow */}
      <div
        className="
          nf-glow
          pointer-events-none
          absolute
          bottom-[-260px]
          left-[10%]
          h-[520px]
          w-[720px]
          rounded-full
          bg-blue-600/10
          blur-[150px]
        "
        style={{ animationDelay: "-3s" }}
      />

      {/* Subtle grid texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(148,163,184,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,0.05) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage:
            "radial-gradient(circle at center, black 0%, transparent 72%)",
          WebkitMaskImage:
            "radial-gradient(circle at center, black 0%, transparent 72%)",
        }}
      />

      {/* =========================================================
          CONTENT
      ========================================================= */}

      <div className="relative z-10 flex max-w-[720px] flex-col items-center text-center">
        {/* Eyebrow */}
        <div
          className="
            nf-rise
            mb-8
            flex
            items-center
            gap-3
            text-[11px]
            font-semibold
            uppercase
            tracking-[0.22em]
            text-cyan-400
          "
        >
          <span
            className="
              h-1.5
              w-1.5
              rounded-full
              bg-cyan-400
              shadow-[0_0_12px_rgba(34,211,238,0.9)]
            "
          />
          <span>ERROR · SIGNAL LOST</span>
        </div>

        {/* 404 mark */}
        <h1
          className="
            nf-gradient
            nf-rise
            bg-gradient-to-r
            from-cyan-400
            via-blue-500
            via-purple-500
            to-fuchsia-500
            bg-clip-text
            font-sans
            text-[120px]
            font-extralight
            leading-[0.85]
            tracking-[-0.06em]
            text-transparent
            sm:text-[168px]
            lg:text-[210px]
          "
          style={{ animationDelay: "0.05s" }}
        >
          404
        </h1>

        {/* Heading */}
        <h2
          className="
            nf-rise
            mt-4
            font-sans
            text-[26px]
            font-extralight
            uppercase
            leading-[0.95]
            tracking-[-0.03em]
            sm:text-[34px]
          "
          style={{ animationDelay: "0.15s" }}
        >
          This level doesn&apos;t exist
        </h2>

        {/* Description */}
        <p
          className="
            nf-rise
            mt-6
            max-w-[460px]
            text-[14px]
            leading-7
            text-slate-400
            sm:text-[15px]
          "
          style={{ animationDelay: "0.25s" }}
        >
          The page you&apos;re looking for has moved, been removed, or never
          made it past the loading screen. Let&apos;s get you back in the game.
        </p>

        {/* Actions */}
        <div
          className="nf-rise mt-10 flex flex-col items-center gap-6 sm:flex-row"
          style={{ animationDelay: "0.35s" }}
        >
          {/* Back Home */}
          <Link
            href="/"
            className="
              group
              relative
              flex
              h-[45px]
              items-center
              gap-3
              overflow-hidden
              rounded-full
              bg-gradient-to-r
              from-cyan-400
              via-blue-500
              to-fuchsia-500
              px-6
              text-[11px]
              font-bold
              uppercase
              tracking-[0.13em]
              text-white
              shadow-[0_0_28px_rgba(59,130,246,0.25)]
              transition-all
              duration-300
              hover:scale-[1.04]
              hover:shadow-[0_0_38px_rgba(217,70,239,0.4)]
            "
          >
            <span className="relative z-10">BACK TO HOME</span>
            <span
              className="
                relative
                z-10
                flex
                h-7
                w-7
                items-center
                justify-center
                rounded-full
                bg-white/20
                backdrop-blur-sm
                transition-transform
                duration-300
                group-hover:translate-x-1
              "
            >
              <ArrowRight size={15} />
            </span>
          </Link>

          {/* Explore games */}
          <Link
            href="/#games"
            className="
              group
              flex
              items-center
              gap-3
              text-[10px]
              font-semibold
              uppercase
              tracking-[0.18em]
              text-slate-300
              transition-colors
              hover:text-white
            "
          >
            <span
              className="
                flex
                h-8
                w-8
                items-center
                justify-center
                rounded-full
                border
                border-white/20
                bg-white/[0.03]
                transition-all
                duration-300
                group-hover:border-cyan-400/50
                group-hover:bg-cyan-400/10
              "
            >
              <ArrowLeft size={12} />
            </span>
            <span>EXPLORE GAMES</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
