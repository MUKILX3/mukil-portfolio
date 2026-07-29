import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { getProject, projects, type Project } from "@/data/projects";
import { Reveal, TextReveal } from "@/components/motion/reveal";
import { StickyNote, WashiTape, Squiggle } from "@/components/notebook/paper";

export const Route = createFileRoute("/projects/$slug")({
  loader: ({ params }) => {
    const project = getProject(params.slug);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ params, loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Project not found — Mukil" }, { name: "robots", content: "noindex" }],
      };
    }
    const { project } = loaderData;
    const title = `${project.title} — ${project.category} | Mukil`;
    return {
      meta: [
        { title },
        { name: "description", content: project.description },
        { property: "og:title", content: title },
        { property: "og:description", content: project.description },
        { property: "og:type", content: "article" },
        { property: "og:url", content: `/projects/${params.slug}` },
      ],
      links: [{ rel: "canonical", href: `/projects/${params.slug}` }],
    };
  },
  component: ProjectDetail,
});

function ProjectDetail() {
  const { project } = Route.useLoaderData() as { project: Project };
  const others = projects.filter((p) => p.slug !== project.slug);

  return (
    <article className="pb-10">
      <div className="mx-auto max-w-6xl px-4 pt-8 sm:px-6">
        <Link to="/projects" className="label-mono inline-flex items-center gap-2 text-ink-soft hover:text-ink">
          <ArrowLeft className="h-3.5 w-3.5" /> All projects
        </Link>

        <p className="label-mono mt-8 text-marker">{project.category}</p>
        <h1 className="mt-3 font-display text-[clamp(2.2rem,8vw,5rem)] leading-[0.95] tracking-tight">
          <TextReveal text={project.title} />
        </h1>

        <div className="relative mt-10">
          <WashiTape className="-top-3 left-10" rotate={-7} />
          <WashiTape className="-top-3 right-14" rotate={6} />
          <div className="paper-card overflow-hidden rounded-xl p-3">
            <img
              src={project.cover}
              alt={`${project.title} hero render`}
              className="aspect-16/9 w-full rounded-lg object-cover"
            />
          </div>
        </div>

        <div className="mt-16 grid gap-12 md:grid-cols-[1.4fr_0.8fr]">
          <div>
            <Section title="Overview" body={project.overview} />
            <Section title="Project goal" body={project.goal} />

            <Reveal>
              <h2 className="handwritten mt-12 text-3xl text-ink-soft">creative process</h2>
              <ol className="mt-6 flex flex-col gap-4">
                {project.process.map((step, i) => (
                  <li key={step.step} className="paper-card rounded-xl p-5">
                    <div className="flex items-center gap-3">
                      <span className="label-mono grid h-7 w-7 place-items-center rounded-md bg-highlight">
                        {i + 1}
                      </span>
                      <span className="label-mono">{step.step}</span>
                    </div>
                    <p className="mt-3 text-sm leading-relaxed text-ink-soft">{step.text}</p>
                  </li>
                ))}
              </ol>
            </Reveal>
          </div>

          <aside className="flex flex-col gap-6">
            <div className="paper-card rounded-xl p-6">
              <p className="label-mono text-ink-soft">Software used</p>
              <ul className="mt-3 flex flex-wrap gap-2">
                {project.software.map((s) => (
                  <li key={s} className="label-mono rounded-lg border border-border px-3 py-2">
                    {s}
                  </li>
                ))}
              </ul>
            </div>
            <StickyNote tone="highlight" rotate={-3} className="rounded-sm">
              <span className="block">Behind the scenes</span>
            </StickyNote>
            <p className="handwritten -mt-2 text-2xl leading-snug text-ink">
              {project.behindTheScenes}
            </p>
          </aside>
        </div>

        <Reveal className="mt-16">
          <h2 className="handwritten text-3xl text-ink-soft">final renders</h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            {project.gallery.map((src, i) => (
              <div key={`${src}-${i}`} className="paper-card paper-lift rounded-xl p-3">
                <img
                  src={src}
                  alt={`${project.title} render ${i + 1}`}
                  loading="lazy"
                  className="aspect-4/3 w-full rounded-lg object-cover"
                />
              </div>
            ))}
          </div>
        </Reveal>

        {project.video ? (
          <Reveal className="mt-12">
            <h2 className="handwritten text-3xl text-ink-soft">motion</h2>
            <div className="paper-card mt-6 rounded-xl p-3">
              <video
                src={project.video}
                controls
                muted
                loop
                playsInline
                preload="none"
                poster={project.cover}
                className="w-full rounded-lg"
              />
            </div>
          </Reveal>
        ) : null}

        <Squiggle className="mt-20 text-border" />

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {others.map((p) => (
            <Link
              key={p.slug}
              to="/projects/$slug"
              params={{ slug: p.slug }}
              className="paper-card paper-lift flex items-center justify-between gap-4 rounded-xl p-6"
            >
              <span>
                <span className="label-mono block text-ink-soft">{p.category}</span>
                <span className="mt-1 block font-display text-xl">{p.title}</span>
              </span>
              <ArrowUpRight className="h-5 w-5 shrink-0" />
            </Link>
          ))}
        </div>
      </div>
    </article>
  );
}

function Section({ title, body }: { title: string; body: string }) {
  return (
    <Reveal className="mt-10 first:mt-0">
      <h2 className="handwritten text-3xl text-ink-soft">{title.toLowerCase()}</h2>
      <p className="mt-3 text-base leading-relaxed text-ink">{body}</p>
    </Reveal>
  );
}
