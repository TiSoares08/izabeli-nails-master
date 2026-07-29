import { X } from "lucide-react";
import { useState } from "react";

export function BannerUrgencia() {
  const [fechado, setFechado] = useState(false);
  if (fechado) return null;

  return (
    <div className="relative z-40 bg-brand-brown-deep text-white text-xs text-center py-2 px-10">
      🗓️ <span className="font-semibold">Últimas vagas esta semana!</span> — Agende agora e garanta seu horário.{" "}
      <a href="#agendamento" className="underline underline-offset-2 hover:text-brand-gold-soft transition-colors font-medium">
        Agendar
      </a>
      <button
        type="button"
        aria-label="Fechar aviso"
        onClick={() => setFechado(true)}
        className="absolute right-3 top-1/2 -translate-y-1/2 text-white/60 hover:text-white transition-colors"
      >
        <X className="size-3.5" />
      </button>
    </div>
  );
}
