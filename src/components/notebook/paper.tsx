import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

export function WashiTape({
  className,
  rotate = -6,
  tone = "tape",
}: {
  className?: string;
  rotate?: number;
  tone?: "tape" | "sky" | "blossom" | "mint";
}) {
  const tones: Record<string, string> = {
    tape: "bg-tape",
    sky: "bg-sky/70",
    blossom: "bg-blossom/70",
    mint: "bg-mint/80",
  };
  return (
    <span
      aria-hidden
      style={{ transform: `rotate(${rotate}deg)` }}
      className={cn(
        "pointer-events-none absolute h-6 w-24 opacity-85 shadow-sm",
        "[mask-image:linear-gradient(90deg,transparent,#000_6%,#000_94%,transparent)]",
        tones[tone],
        className,
      )}
    />
  );
}

export function StickyNote({
  children,
  className,
  rotate = 3,
  tone = "highlight",
}: {
  children: ReactNode;
  className?: string;
  rotate?: number;
  tone?: "highlight" | "sky" | "blossom" | "mint" | "ink";
}) {
  const tones: Record<string, string> = {
    highlight: "bg-highlight text-ink",
    sky: "bg-sky text-primary-foreground",
    blossom: "bg-blossom text-primary-foreground",
    mint: "bg-mint text-ink",
    ink: "bg-primary text-primary-foreground",
  };
  return (
    <div
      style={{ rotate: `${rotate}deg` }}
      className={cn(
        "label-mono paper-lift px-4 py-3 leading-relaxed shadow-paper",
        tones[tone],
        className,
      )}
    >
      {children}
    </div>
  );
}

export function Polaroid({
  src,
  alt,
  caption,
  className,
  rotate = -3,
  tapeTone = "sky",
  priority,
}: {
  src: string;
  alt: string;
  caption?: string;
  className?: string;
  rotate?: number;
  tapeTone?: "tape" | "sky" | "blossom" | "mint";
  priority?: boolean;
}) {
  return (
    <figure
      style={{ rotate: `${rotate}deg` }}
      className={cn("paper-card paper-lift relative w-full p-3 pb-10", className)}
    >
      <WashiTape className="-top-3 left-1/2 -translate-x-1/2" tone={tapeTone} rotate={-4} />
      <img
        src={src}
        alt={alt}
        loading={priority ? "eager" : "lazy"}
        className="aspect-4/5 w-full object-cover"
      />
      {caption ? (
        <figcaption className="handwritten absolute inset-x-0 bottom-2 text-center text-lg text-ink-soft">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}

export function PaperLabel({
  children,
  tone = "highlight",
  className,
}: {
  children: ReactNode;
  tone?: "highlight" | "mint" | "blossom" | "sky" | "paper";
  className?: string;
}) {
  const tones: Record<string, string> = {
    highlight: "bg-highlight text-ink border-ink/20",
    mint: "bg-mint text-ink border-ink/20",
    blossom: "bg-blossom text-primary-foreground border-ink/20",
    sky: "bg-sky text-primary-foreground border-ink/20",
    paper: "bg-card text-ink border-ink/20",
  };
  return (
    <span
      className={cn(
        "label-mono inline-flex items-center gap-2 rounded-lg border px-3 py-2 shadow-paper",
        tones[tone],
        className,
      )}
    >
      {children}
    </span>
  );
}

/** Hand-drawn rectangle used around the hero name */
export function SketchFrame({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 600 200"
      preserveAspectRatio="none"
      className={cn("pointer-events-none absolute inset-0 h-full w-full", className)}
    >
      <path
        d="M8,14 C160,4 420,10 592,7 C596,60 594,140 590,192 C420,197 170,190 10,194 C6,140 4,66 8,14 Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

/** Curved hand-drawn arrow. Flip with scaleX via className. */
export function HandArrow({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 120 60"
      fill="none"
      className={cn("pointer-events-none h-10 w-20 text-ink", className)}
    >
      <path
        d="M4 46C26 50 62 44 96 20"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
      <path
        d="M78 16 L100 17 L94 38"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Squiggle({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 1200 24"
      preserveAspectRatio="none"
      className={cn("h-6 w-full text-border", className)}
    >
      <path
        d="M0 18 C 200 2, 400 22, 600 12 S 1000 2, 1200 16"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      />
    </svg>
  );
}
