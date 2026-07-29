import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  as?: "div" | "section" | "li" | "span";
};

/** Scroll-triggered fade + rise reveal. */
export function Reveal({ children, className, delay = 0, y = 28 }: RevealProps) {
  const reduced = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduced ? false : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

/** Word-by-word text reveal for headlines. */
export function TextReveal({
  text,
  className,
  wordClassName,
  delay = 0,
}: {
  text: string;
  className?: string;
  wordClassName?: string;
  delay?: number;
}) {
  const reduced = useReducedMotion();
  const words = text.split(" ");
  return (
    <motion.span
      className={cn("inline", className)}
      initial={reduced ? undefined : "hidden"}
      whileInView="visible"
      viewport={{ once: true, margin: "-40px" }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: 0.05, delayChildren: delay } },
      }}
    >
      {words.map((word, i) => (
        <span key={`${word}-${i}`} className="inline-block overflow-hidden pb-[0.08em] align-bottom">
          <motion.span
            className={cn("inline-block", wordClassName)}
            variants={{
              hidden: { y: "110%", opacity: 0 },
              visible: { y: "0%", opacity: 1, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
            }}
          >
            {word}
          </motion.span>
          {i < words.length - 1 ? <span>&nbsp;</span> : null}
        </span>
      ))}
    </motion.span>
  );
}
