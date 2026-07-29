import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Skills } from "@/components/sections/skills";
import { Tools } from "@/components/sections/tools";
import { FeaturedProjects } from "@/components/sections/featured-projects";
import { ContactSection } from "@/components/sections/contact-section";
import { Squiggle } from "@/components/notebook/paper";

const title = "Mukil — 3D Artist & Automotive Visualization";
const description =
  "Portfolio of Mukil, a 3D artist and motion designer creating automotive CGI, product visualization and AI-assisted visuals.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Hero />
      <Squiggle className="text-border" />
      <About />
      <Skills />
      <Tools />
      <FeaturedProjects />
      <ContactSection />
    </>
  );
}
