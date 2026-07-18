import heroImage from "@/assets/IZABELI NAILS.png";
import { useState } from "react";
import { ArrowDown, MessageCircle, Sparkles } from "lucide-react";

export function Hero() {
  const [hover, setHover] = useState(false);

  return (
    <section id="top" className="relative overflow-hidden bg-white">
      <div className="relative">
        <img
          src={heroImage}
          alt="Izabeli Nails — Alongamentos de unhas em Barueri"
          className="block w-full h-auto scale-[1.01] transition-transform duration-[2500ms] ease-out hover:scale-[1.025]"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/10 pointer-events-none" />
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white to-transparent pointer-events-none" />
      </div>

      <div className="absolute inset-0 pointer-events-none">
        <div className="container mx-auto h-full px-4 relative">
          <div
            className="absolute pointer-events-auto max-w-xs"
            style={{ left: "0.3%", top: "63%" }}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
          >
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-brand-gold/60 bg-white/75 px-4 py-2 text-xs font-medium text-brand-brown-deep shadow-soft backdrop-blur-md">
              <Sparkles className="size-3.5 text-brand-gold" />
              5 anos realçando a beleza das unhas
            </div>

            <div className="flex flex-wrap gap-3">
              <a
                href="#agendamento"
                className={`inline-flex items-center gap-2 rounded-full border-2 px-6 py-3 text-xs md:text-sm tracking-wide font-semibold uppercase transition-all duration-300 ${
                  hover
                    ? "bg-brand-brown text-white border-brand-brown shadow-gold -translate-y-0.5 scale-[1.03]"
                    : "bg-brand-gold-soft/90 text-brand-brown-deep border-brand-gold"
                }`}
              >
                Agendar horário
                <MessageCircle className={`size-4 transition-transform duration-300 ${hover ? "translate-x-1" : ""}`} />
              </a>

              <a
                href="https://wa.me/5511930443624?text=Oi%20Izabeli!%20Tenho%20interesse%20no%20curso%20de%20unhas."
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center rounded-full border border-white/70 bg-white/70 px-5 py-3 text-xs md:text-sm font-medium text-brand-brown-deep shadow-soft backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-white"
              >
                Curso disponível
              </a>
            </div>

            <div
              className={`pointer-events-none absolute left-1/2 top-full z-20 mt-3 w-64 -translate-x-1/2 transition-all duration-300 ${
                hover ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"
              }`}
            >
              <div className="relative rounded-xl bg-white p-4 text-center text-sm text-foreground shadow-soft border border-brand-gold/40">
                <div className="absolute -top-1.5 left-1/2 size-3 -translate-x-1/2 rotate-45 bg-white border-l border-t border-brand-gold/40" />
                <div className="flex items-center justify-center gap-2 text-brand-brown-deep font-medium">
                  <MessageCircle className="size-4 text-brand-gold" />
                  Agende pelo WhatsApp
                </div>
                <p className="mt-1 text-xs text-foreground/70">Clique e escolha seu melhor horário 💅</p>
              </div>
            </div>
          </div>

          <a
            href="#sobre"
            className="absolute bottom-5 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-1 text-xs uppercase tracking-[0.2em] text-brand-brown-deep md:flex animate-bounce pointer-events-auto"
          >
            Conheça
            <ArrowDown className="size-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
