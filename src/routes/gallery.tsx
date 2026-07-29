import { createFileRoute } from "@tanstack/react-router";
import { GalleryGrid } from "@/components/sections/gallery-grid";
import { TextReveal } from "@/components/motion/reveal";

const title = "Gallery — Mukil's 3D Work Archive";
const description =
  "Browse the full archive of Mukil's 3D work: automotive CGI, product renders, motion design loops, branding and experiments.";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "/gallery" },
    ],
    links: [{ rel: "canonical", href: "/gallery" }],
  }),
  component: GalleryPage,
});

function GalleryPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 pt-10 pb-20 sm:px-6">
      <p className="handwritten text-3xl text-ink-soft">the archive</p>
      <h1 className="mt-2 font-display text-[clamp(2.2rem,7vw,4.5rem)] leading-[1] tracking-tight">
        <TextReveal text="Gallery" />
      </h1>
      <p className="mt-4 max-w-xl text-sm leading-relaxed text-ink-soft">
        Everything else — stills, breakdowns and loops. Hover a video card for a preview, click
        anything to open it full size.
      </p>
      <div className="mt-12">
        <GalleryGrid />
      </div>
    </div>
  );
}
