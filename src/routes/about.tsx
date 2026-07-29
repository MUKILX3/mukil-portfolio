import { createFileRoute } from "@tanstack/react-router";
import { About } from "@/components/sections/about";
import { Skills } from "@/components/sections/skills";
import { Tools } from "@/components/sections/tools";
import { TextReveal } from "@/components/motion/reveal";

const title = "About Mukil — 3D Artist & Visual Designer";
const description =
  "Mukil is a 3D artist and designer specialising in automotive CGI, product visualization, motion design and AI-assisted creative work.";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="pt-10">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <p className="handwritten text-3xl text-ink-soft">nice to meet you</p>
        <h1 className="mt-2 font-display text-[clamp(2.2rem,7vw,4.5rem)] leading-[1] tracking-tight">
          <TextReveal text="The artist behind the renders" />
        </h1>
      </div>
      <About />
      <Skills />
      <Tools />
    </div>
  );
}
