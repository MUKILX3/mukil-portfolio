import portrait from "@/assets/about-photo.jpg";
import workspace from "@/assets/workspace.jpg";
import { Polaroid, HandArrow } from "@/components/notebook/paper";
import { Reveal } from "@/components/motion/reveal";

export function About() {
  return (
    <section id="about" className="relative px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <p className="handwritten text-3xl text-ink-soft">about me!</p>

        <div className="mt-10 grid items-center gap-10 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.3fr)_minmax(0,1fr)]">
          <Reveal>
            <Polaroid src={portrait} alt="Mukil portrait" caption="that's me!" rotate={-4} tapeTone="sky" />
          </Reveal>

          <Reveal delay={0.1} className="text-center">
            <p className="handwritten text-[1.7rem] leading-[1.6] text-ink sm:text-3xl">
              I&apos;m a 3D artist and designer who loves turning ideas into{" "}
              <span className="ink-underline relative">stunning visuals</span>. ✨
            </p>
            <p className="handwritten mt-8 text-[1.7rem] leading-[1.6] text-ink sm:text-3xl">
              From automotive renders to motion design, I help brands stand out and{" "}
              <span className="rounded-[45%] border-2 border-mint px-3 py-1">connect</span>. 🚀
            </p>
            <HandArrow className="mx-auto mt-6 hidden rotate-[100deg] text-ink-soft lg:block" />
          </Reveal>

          <Reveal delay={0.2}>
            <Polaroid
              src={workspace}
              alt="Mukil's 3D workspace at night"
              caption="my workspace"
              rotate={3}
              tapeTone="tape"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
