import { Box, Camera, Play, Film, PenLine, Asterisk } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";

const skills = [
  { label: "3D Modelling", image: "/buttons/yellow.png", Icon: Box },
  { label: "Rendering", image: "/buttons/green.png", Icon: Camera },
  { label: "Motion Design", image: "/buttons/pink.png", Icon: Play },
  { label: "Video Editing", image: "/buttons/blue.png", Icon: Film },
  { label: "Graphic Design", image: "/buttons/yellow.png", Icon: PenLine },
  { label: "Branding", image: "/buttons/green.png", Icon: Asterisk },
];

export function Skills() {
  return (
    <section className="px-4 py-8">
      <div
        className="
          mx-auto
          w-fit
          grid
          grid-cols-3
          gap-x-3
          gap-y-3
        "
      >
        {skills.map((skill, i) => (
          <Reveal key={skill.label} delay={i * 0.05}>
            <div className="relative w-[185px] sm:w-[270px] h-[64px] sm:h-[90px]">
              <img
                src={skill.image}
                alt={skill.label}
                className="absolute inset-0 w-full h-full object-contain select-none pointer-events-none"
              />

              <div className="absolute inset-0 grid grid-cols-[32px_1fr] sm:grid-cols-[48px_1fr] items-center px-4 sm:px-6">
                <skill.Icon
                  className="w-4 h-4 sm:w-6 sm:h-6 text-black justify-self-center"
                  strokeWidth={2.2}
                />

                <span
                  className="
                    text-center
                    label-mono
                    text-[11px]
                    sm:text-[15px]
                    tracking-[0.12em]
                    sm:tracking-[0.08em]
                    whitespace-nowrap
                    text-black
                  "
                >
                  {skill.label}
                </span>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
