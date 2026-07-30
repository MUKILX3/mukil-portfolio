import { Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { ArrowUpRight, ArrowDown } from "lucide-react";
import portrait from "@/assets/hero-photo.jpg";
import { site } from "@/data/site";
import { HandArrow, SketchFrame, PaperLabel } from "@/components/notebook/paper";
import { Magnetic } from "@/components/motion/magnetic";
import { TextReveal } from "@/components/motion/reveal";

const floatingLabels = [
  {
    text: "3D VISUALIZATION",
    tone: "mint" as const,
    className: "left-[-1%] top-[41%] sm:left-[12%]",
    tilt: "-4deg",
  },
  {
    text: "AUTOMOTIVE CGI",
    tone: "highlight" as const,
    className: "right-[-3%] top-[43%] sm:right-[10%]",
    tilt: "8deg",
  },
  {
    text: "Motion Design",
    tone: "highlight" as const,
    className: "left-0 top-[9%] xl:left-[2%]",
    tilt: "-6deg",
  },
  {
    text: "AI WORKFLOWS",
    tone: "mint" as const,
    className: "right-0 top-[8%] xl:right-[2%]",
    tilt: "9deg",
  },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden px-4 pt-14 pb-20 sm:px-6 sm:pt-20">
      <div className="mx-auto max-w-5xl">
       <div className="hidden lg:block">
           {floatingLabels.map((label) => (
              <div
              key={label.text}
      style={{ "--tilt": label.tilt } as React.CSSProperties}
      className={`float-soft absolute z-10 ${label.className}`}
            >
      <PaperLabel tone={label.tone}>{label.text}</PaperLabel>
    </div>
  ))}
</div>

          <p className="handwritten text-center text-3xl text-ink-soft">
            <span className="ink-underline relative">my name is</span>
          </p>

          <div className="relative mx-auto mt-8 w-fit max-w-full">
            <SketchFrame className="text-marker" />
            <div className="px-6 py-6 sm:px-14 sm:py-8">
              <h1 className="text-center font-hand text-[clamp(3.5rem,15vw,9rem)] leading-[0.85] tracking-tight text-ink">
                MUKIL
              </h1>
              <p className="label-mono mt-4 text-center text-[0.62rem] text-ink-soft sm:text-xs">
                {site.subtitle}
              </p>
            </div>
          </div>

          <HandArrow className="absolute left-[13%] top-[70%] hidden rotate-[8deg] text-ink lg:block" />
          <HandArrow className="absolute right-[13%] top-[70%] hidden -scale-x-100 rotate-[8deg] text-ink lg:block" />

          <div className="mt-14 flex items-center justify-center gap-4 sm:gap-10">
            <Avatar className="hidden sm:block" rotate={-6} />
            <div className="max-w-xl px-2">
              <h2 className="text-center font-sans text-[clamp(1.75rem,5vw,3.1rem)] font-medium leading-[1.15] tracking-tight text-ink">
                <TextReveal text="I create visuals that" />
                <span className="marker-underline">
                  <TextReveal text="move" />
                </span>
                <TextReveal text="brands forward." delay={0.15} />
              </h2>
            </div>
            <Avatar className="hidden sm:block" rotate={6} />
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Magnetic>
              <Link
                to="/projects"
                className="label-mono inline-flex items-center gap-3 rounded-xl bg-primary px-6 py-4 text-primary-foreground shadow-paper transition-colors hover:bg-primary/90"
              >
                <span className="grid h-6 w-6 place-items-center rounded-md bg-sky">
                  <ArrowUpRight className="h-3.5 w-3.5 text-primary-foreground" />
                </span>
                View My Work
              </Link>
            </Magnetic>
            <Magnetic>
              <Link
                to="/contact"
                className="label-mono inline-flex items-center gap-2 rounded-xl border border-ink/25 bg-card px-6 py-4 text-ink shadow-paper transition-colors hover:bg-secondary"
              >
                Let&apos;s Collaborate
              </Link>
            </Magnetic>
          </div>

          <div className="mt-14 flex justify-center md:justify-end">
            <div className="flex items-center gap-2 text-ink-soft">
              <span className="handwritten text-xl">scroll down</span>
              <motion.span
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
              >
                <ArrowDown className="h-4 w-4" />
              </motion.span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Avatar({ className, rotate }: { className?: string; rotate: number }) {
  return (
    <motion.div
      style={{ rotate }}
      whileHover={{ scale: 1.06, rotate: 0 }}
      transition={{ type: "spring", stiffness: 220, damping: 16 }}
      className={`h-16 w-16 shrink-0 overflow-hidden rounded-full border-[3px] border-marker shadow-paper lg:h-20 lg:w-20 ${className ?? ""}`}
    >
      <img src={portrait} alt="Mukil portrait" className="h-full w-full object-cover" />
    </motion.div>
  );
}
