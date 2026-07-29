import { useEffect, useRef, useState } from "react";
import { useReveal } from "@/hooks/useReveal";

const numeros = [
  { valor: 500, prefixo: "+", sufixo: "",  label: "Clientes atendidas" },
  { valor: 5,   prefixo: "",  sufixo: "",  label: "Anos de experiência" },
  { valor: 10,  prefixo: "+", sufixo: "",  label: "Técnicas dominadas" },
  { valor: 100, prefixo: "",  sufixo: "%", label: "Dedicação em cada atendimento" },
];

function CountUp({ to, prefixo, sufixo, active }: { to: number; prefixo: string; sufixo: string; active: boolean }) {
  const [count, setCount] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    if (!active || started.current) return;
    started.current = true;
    const duration = 1800;
    const steps = 60;
    const increment = to / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= to) { setCount(to); clearInterval(timer); }
      else setCount(Math.floor(current));
    }, duration / steps);
    return () => clearInterval(timer);
  }, [active, to]);

  return <span>{prefixo}{count}{sufixo}</span>;
}

export function Numeros() {
  const { ref, visible } = useReveal();
  return (
    <section ref={ref as React.Ref<HTMLElement>} className={`bg-brand-brown text-white transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
          {numeros.map((n) => (
            <div key={n.label} className="flex flex-col items-center text-center gap-2">
              <span className="font-serif text-5xl md:text-6xl text-brand-gold-soft">
                <CountUp to={n.valor} prefixo={n.prefixo} sufixo={n.sufixo} active={visible} />
              </span>
              <div className="h-px w-10 bg-brand-gold/50" />
              <span className="text-sm text-white/75 leading-snug max-w-[120px]">{n.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
