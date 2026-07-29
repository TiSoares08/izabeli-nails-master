import { useEffect, useRef } from "react";

export function CustomCursor() {
  const dot = useRef<HTMLDivElement>(null);
  const ring = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let rx = 0, ry = 0;
    let mx = 0, my = 0;
    let raf: number;

    const onMove = (e: MouseEvent) => { mx = e.clientX; my = e.clientY; };

    const tick = () => {
      rx += (mx - rx) * 0.12;
      ry += (my - ry) * 0.12;
      if (dot.current) { dot.current.style.transform = `translate(${mx}px,${my}px) translate(-50%,-50%)`; }
      if (ring.current) { ring.current.style.transform = `translate(${rx}px,${ry}px) translate(-50%,-50%)`; }
      raf = requestAnimationFrame(tick);
    };

    const onEnter = () => { ring.current?.classList.add("scale-150", "opacity-40"); };
    const onLeave = () => { ring.current?.classList.remove("scale-150", "opacity-40"); };

    document.addEventListener("mousemove", onMove);
    document.querySelectorAll("a,button").forEach((el) => {
      el.addEventListener("mouseenter", onEnter);
      el.addEventListener("mouseleave", onLeave);
    });

    raf = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(raf);
      document.removeEventListener("mousemove", onMove);
    };
  }, []);

  return (
    <>
      {/* ponto central */}
      <div
        ref={dot}
        className="pointer-events-none fixed left-0 top-0 z-[9999] size-2 rounded-full bg-brand-gold"
        style={{ willChange: "transform" }}
      />
      {/* anel com lag */}
      <div
        ref={ring}
        className="pointer-events-none fixed left-0 top-0 z-[9998] size-8 rounded-full border border-brand-gold/60 transition-[opacity,scale] duration-300"
        style={{ willChange: "transform" }}
      />
    </>
  );
}
