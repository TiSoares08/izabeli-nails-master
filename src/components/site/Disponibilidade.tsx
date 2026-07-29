const DIAS = [
  { label: "Seg", horas: "09h – 19h", aberto: true },
  { label: "Ter", horas: "09h – 19h", aberto: true },
  { label: "Qua", horas: "09h – 19h", aberto: true },
  { label: "Qui", horas: "09h – 19h", aberto: true },
  { label: "Sex", horas: "09h – 19h", aberto: true },
  { label: "Sáb", horas: "09h – 19h", aberto: true },
  { label: "Dom", horas: "Fechado",   aberto: false },
];

export function Disponibilidade() {
  const hoje = new Date().getDay(); // 0 = dom

  return (
    <div className="rounded-3xl border border-brand-gold/40 bg-white/70 p-5 shadow-soft backdrop-blur-md">
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-brand-brown-deep">
        Disponibilidade semanal
      </p>
      <div className="grid grid-cols-7 gap-1 text-center">
        {DIAS.map((dia, i) => {
          const isHoje = i === (hoje === 0 ? 6 : hoje - 1);
          return (
            <div
              key={dia.label}
              className={`flex flex-col items-center gap-1 rounded-2xl px-1 py-2 text-xs transition-all ${
                isHoje
                  ? "bg-brand-brown-deep text-white"
                  : dia.aberto
                  ? "bg-brand-cream/80 text-brand-brown-deep"
                  : "bg-foreground/5 text-foreground/30"
              }`}
            >
              <span className="font-semibold">{dia.label}</span>
              <span className={`text-[10px] leading-tight ${isHoje ? "text-white/80" : dia.aberto ? "text-brand-brown/70" : ""}`}>
                {dia.horas}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
