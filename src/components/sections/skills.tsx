import { Box, Camera, Play, Film, PenLine, Asterisk } from "lucide-react";
import { PaperLabel } from "@/components/notebook/paper";
import { Reveal } from "@/components/motion/reveal";

const skills = [
  { label: "3D Modelling", tone: "highlight" as const, Icon: Box },
  { label: "Rendering", tone: "mint" as const, Icon: Camera },
  { label: "Motion Design", tone: "blossom" as const, Icon: Play },
  { label: "Video Editing", tone: "sky" as const, Icon: Film },
  { label: "Graphic Design", tone: "paper" as const, Icon: PenLine },
  { label: "Branding", tone: "mint" as const, Icon: Asterisk },
];

export function Skills() {
  return (
    <section className="px-4 py-6 sm:px-6">
      <div className="mx-auto flex max-w-3xl flex-wrap justify-center gap-4">
        {skills.map(({ label, tone, Icon }, i) => (
          <Reveal key={label} delay={i * 0.05}>
            <div className="paper-lift">
              <PaperLabel tone={tone} className="px-4 py-3 text-[0.72rem]">
                <Icon className="h-4 w-4" strokeWidth={2} />
                {label}
              </PaperLabel>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
