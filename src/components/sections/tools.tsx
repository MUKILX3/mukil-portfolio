import { tools } from "@/data/tools";
import { Reveal } from "@/components/motion/reveal";
import { HandArrow } from "@/components/notebook/paper";

export function Tools() {
  return (
    <section className="px-4 py-14 sm:px-6">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 lg:flex-row lg:items-center lg:gap-6">
        <div className="flex shrink-0 items-center gap-3">
          <span className="handwritten text-2xl text-ink-soft">tools i use</span>
          <HandArrow className="h-8 w-16 -rotate-6 text-ink-soft" />
        </div>

        <Reveal className="min-w-0 flex-1">
          <ul className="flex flex-wrap justify-center gap-3 rounded-3xl border border-border bg-card/80 p-4 shadow-paper backdrop-blur-sm">
            {tools.map(({ name, Icon, mark }) => (
              <li key={name}>
                <div
                  title={name}
                  data-cursor="hover"
                  className="group grid h-12 w-12 place-items-center rounded-xl border border-border bg-secondary transition-all duration-300 hover:-translate-y-1.5 hover:border-marker/50 hover:shadow-lift"
                >
                  {Icon ? (
                    <Icon className="h-5 w-5 text-ink transition-colors group-hover:text-marker" />
                  ) : (
                    <span className="font-display text-sm text-ink transition-colors group-hover:text-marker">
                      {mark}
                    </span>
                  )}
                  <span className="sr-only">{name}</span>
                </div>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
