import { createFileRoute } from "@tanstack/react-router";
import { FeaturedProjects } from "@/components/sections/featured-projects";
import { TextReveal } from "@/components/motion/reveal";

const title = "Projects — Flagship 3D Work by Mukil";
const description =
  "Three flagship case studies: automotive CGI, premium product visualization and CGI motion design.";

export const Route = createFileRoute("/projects/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "/projects" },
    ],
    links: [{ rel: "canonical", href: "/projects" }],
  }),
  component: ProjectsPage,
});

function ProjectsPage() {
  return (
    <div className="pt-10">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <p className="handwritten text-3xl text-ink-soft">selected work</p>
        <h1 className="mt-2 font-display text-[clamp(2.2rem,7vw,4.5rem)] leading-[1] tracking-tight">
          <TextReveal text="Flagship Projects" />
        </h1>
      </div>
      <FeaturedProjects />
    </div>
  );
}
