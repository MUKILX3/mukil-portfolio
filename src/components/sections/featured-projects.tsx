import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { projects, type Project } from "@/data/projects";
import { Reveal } from "@/components/motion/reveal";
import { WashiTape, StickyNote } from "@/components/notebook/paper";
import { cn } from "@/lib/utils";

export function FeaturedProjects() {
  return (
    <section className="px-4 py-16 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <p className="handwritten text-3xl text-ink-soft">featured projects</p>

        <div className="mt-8 flex flex-col gap-12">
          {projects.map((project, i) => (
            <Reveal key={project.slug} delay={i * 0.05}>
              <ProjectCard project={project} flip={i % 2 === 1} />
            </Reveal>
          ))}
        </div>

        <div className="mt-14 flex justify-center">
          <Link
            to="/gallery"
            className="label-mono inline-flex items-center gap-2 rounded-xl border border-ink/25 bg-card px-6 py-4 shadow-paper transition-transform duration-300 hover:-translate-y-1"
          >
            Browse the full gallery
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, flip }: { project: Project; flip: boolean }) {
  const dark = project.theme === "ink";
  return (
    <article className="relative">
      <div
        className={cn(
          "relative grid overflow-visible rounded-2xl shadow-paper md:grid-cols-2",
          dark ? "bg-primary text-primary-foreground" : "bg-highlight text-ink",
        )}
      >
        <div className={cn("order-2 p-7 sm:p-10", flip ? "md:order-2" : "md:order-1")}>
          <div className="flex items-center gap-4">
            <span
              className={cn(
                "grid h-11 w-11 place-items-center rounded-md font-display text-lg",
                dark ? "bg-sky text-primary-foreground" : "bg-sky text-primary-foreground",
              )}
            >
              {project.index}
            </span>
            <span className="label-mono opacity-70">{project.category}</span>
          </div>

          <h3 className="mt-6 font-display text-3xl leading-tight sm:text-4xl">{project.title}</h3>
          <p className="mt-4 max-w-md text-sm leading-relaxed opacity-80">{project.description}</p>

          <p className="label-mono mt-6 opacity-60">{project.software.join(" · ")}</p>

          <Link
            to="/projects/$slug"
            params={{ slug: project.slug }}
            className="label-mono mt-8 inline-flex items-center gap-2 border-b-2 border-current pb-1 transition-transform duration-300 hover:translate-x-1"
          >
            View Project <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>

        <div className={cn("relative order-1 p-6 sm:p-8", flip ? "md:order-1" : "md:order-2")}>
          <WashiTape className="-top-2 left-8" rotate={-8} />
          <WashiTape className="-top-2 right-10" rotate={7} />
          <div className="paper-card overflow-hidden rounded-sm bg-card p-2">
            <img
              src={project.cover}
              alt={`${project.title} — ${project.category}`}
              loading="lazy"
              className="aspect-16/10 w-full rounded-sm object-cover"
            />
          </div>
        </div>
      </div>

      <StickyNote
        tone={dark ? "sky" : "blossom"}
        rotate={flip ? -4 : 4}
        className="absolute -bottom-6 right-4 hidden w-40 rounded-sm lg:block"
      >
        {project.notes.map((note) => (
          <span key={note} className="block">
            {note}
          </span>
        ))}
      </StickyNote>
    </article>
  );
}
