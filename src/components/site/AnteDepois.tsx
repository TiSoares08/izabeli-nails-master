import { useCallback, useEffect, useRef, useState } from "react";
import { Sparkles } from "lucide-react";
import { useReveal } from "@/hooks/useReveal";

import antes1 from "@/assets/nails-1.jpg";
import antes2 from "@/assets/nails-2.jpg";
import antes3 from "@/assets/nails-4.jpg";
import depois1 from "@/assets/nail1.jpeg";
import depois2 from "@/assets/nail2.jpeg";
import depois3 from "@/assets/nail3.jpeg";

const pares = [
  { antes: antes1, depois: depois1 },
  { antes: antes2, depois: depois2 },
  { antes: antes3, depois: depois3 },
];

function Slider({ antes, depois }: { antes: string; depois: string }) {
  const [pos, setPos] = useState(50);
  const dragging = useRef(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const calcPos = useCallback((clientX: number) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    setPos((x / rect.width) * 100);
  }, []);

  const onMouseDown = () => { dragging.current = true; };
  const onMouseMove = (e: React.MouseEvent) => { if (dragging.current) calcPos(e.clientX); };
  const onMouseUp = () => { dragging.current = false; };
  const onTouchMove = (e: React.TouchEvent) => calcPos(e.touches[0].clientX);

  useEffect(() => {
    const up = () => { dragging.current = false; };
    window.addEventListener("mouseup", up);
    return () => window.removeEventListener("mouseup", up);
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative aspect-square overflow-hidden rounded-2xl select-none cursor-col-resize shadow-soft"
      onMouseDown={onMouseDown}
      onMouseMove={onMouseMove}
      onMouseUp={onMouseUp}
      onTouchMove={onTouchMove}
    >
      {/* depois (fundo) */}
      <img src={depois} alt="Depois" className="absolute inset-0 size-full object-cover" draggable={false} />

      {/* antes (clip) */}
      <div className="absolute inset-0 overflow-hidden" style={{ width: `${pos}%` }}>
        <img src={antes} alt="Antes" className="absolute inset-0 size-full object-cover" style={{ width: containerRef.current?.offsetWidth ?? 400 }} draggable={false} />
      </div>

      {/* divisor */}
      <div className="absolute top-0 bottom-0 w-0.5 bg-white shadow-lg" style={{ left: `${pos}%` }}>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-9 rounded-full bg-white shadow-gold flex items-center justify-center">
          <svg viewBox="0 0 24 24" className="size-5 text-brand-brown-deep fill-current">
            <path d="M8 5l-7 7 7 7M16 5l7 7-7 7" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>

      {/* labels */}
      <span className="absolute bottom-3 left-3 rounded-full bg-black/50 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm">Antes</span>
      <span className="absolute bottom-3 right-3 rounded-full bg-brand-brown-deep/80 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm">Depois</span>
    </div>
  );
}

export function AnteDepois() {
  const { ref, visible } = useReveal();

  return (
    <section
      ref={ref as React.Ref<HTMLElement>}
      className={`bg-brand-cream transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
    >
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="text-center mb-12">
          <p className="inline-flex items-center gap-2 rounded-full bg-white/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-brand-brown-deep shadow-sm mb-3">
            <Sparkles className="size-3.5 text-brand-gold" />
            Transformações reais
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-foreground">Antes & Depois</h2>
          <div className="mx-auto mt-4 h-px w-48 bg-brand-gold/60" />
          <p className="mt-3 text-sm text-foreground/55">Arraste o divisor para comparar</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {pares.map((par, i) => (
            <Slider key={i} antes={par.antes} depois={par.depois} />
          ))}
        </div>
      </div>
    </section>
  );
}
