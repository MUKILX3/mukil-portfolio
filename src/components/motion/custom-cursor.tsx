import { useEffect, useRef, useState } from "react";

/** Ink-dot custom cursor with a soft trailing ring. Desktop pointers only. */
export function CustomCursor() {
  const dot = useRef<HTMLDivElement>(null);
  const ring = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(false);
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;
    setEnabled(true);

    let x = window.innerWidth / 2;
    let y = window.innerHeight / 2;
    let rx = x;
    let ry = y;
    let frame = 0;

    const onMove = (e: PointerEvent) => {
      x = e.clientX;
      y = e.clientY;
      const target = e.target as HTMLElement | null;
      setActive(Boolean(target?.closest("a,button,[data-cursor='hover']")));
    };

    const loop = () => {
      rx += (x - rx) * 0.16;
      ry += (y - ry) * 0.16;
      if (dot.current) dot.current.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      if (ring.current) ring.current.style.transform = `translate3d(${rx}px, ${ry}px, 0)`;
      frame = requestAnimationFrame(loop);
    };

    window.addEventListener("pointermove", onMove);
    frame = requestAnimationFrame(loop);
    document.documentElement.style.cursor = "none";

    return () => {
      window.removeEventListener("pointermove", onMove);
      cancelAnimationFrame(frame);
      document.documentElement.style.cursor = "";
    };
  }, []);

  if (!enabled) return null;

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-[100]">
      <div
        ref={ring}
        className="absolute -ml-5 -mt-5 h-10 w-10 rounded-full border border-ink/40 transition-[width,height,margin,opacity] duration-200"
        style={active ? { width: 60, height: 60, marginLeft: -30, marginTop: -30, opacity: 0.6 } : undefined}
      />
      <div ref={dot} className="absolute -ml-1 -mt-1 h-2 w-2 rounded-full bg-marker" />
    </div>
  );
}
