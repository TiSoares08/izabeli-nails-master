import { Sparkles } from "lucide-react";
import { useReveal } from "@/hooks/useReveal";

const categorias = [
  {
    nome: "Alongamentos",
    emoji: "💅",
    itens: [
      { nome: "Fibra de Vidro",  primeiraVez: "R$ 200",  manutencao: "R$ 150", intervalo: "30 dias" },
      { nome: "Molde F1",        primeiraVez: "R$ 180",  manutencao: "R$ 140", intervalo: "25 dias" },
      { nome: "Banho de Gel",    primeiraVez: "R$ 150",  manutencao: "R$ 120", intervalo: "20 dias" },
    ],
  },
  {
    nome: "Esmaltação",
    emoji: "✨",
    itens: [
      { nome: "Mão em Gel",      primeiraVez: "R$ 100",  manutencao: "R$ 100", intervalo: "15 dias" },
      { nome: "Pé em Gel",       primeiraVez: "R$ 100",  manutencao: "R$ 100", intervalo: "20 dias" },
      { nome: "Mão Comum",       primeiraVez: "R$ 35",   manutencao: "R$ 35",  intervalo: "7 dias"  },
      { nome: "Pé Comum",        primeiraVez: "R$ 40",   manutencao: "R$ 40",  intervalo: "15 dias" },
      { nome: "Mão + Pé Comum",  primeiraVez: "R$ 70",   manutencao: "R$ 70",  intervalo: "7 dias"  },
    ],
  },
  {
    nome: "Pés & Extras",
    emoji: "🌸",
    itens: [
      { nome: "Plástica dos Pés", primeiraVez: "R$ 100", manutencao: "—",       intervalo: "1 mês"  },
      { nome: "Baby Boomer",      primeiraVez: "R$ 20",  manutencao: "—",       intervalo: "Adicional" },
      { nome: "Encapsulada",      primeiraVez: "R$ 10",  manutencao: "—",       intervalo: "Por dedo"  },
    ],
  },
];

export function Precos() {
  const { ref, visible } = useReveal();
  return (
    <section ref={ref as React.Ref<HTMLElement>} id="precos" className={`relative bg-brand-cream overflow-hidden transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
      <div className="absolute -right-24 top-0 size-72 rounded-full bg-brand-gold/20 blur-3xl" />
      <div className="absolute -left-24 bottom-0 size-72 rounded-full bg-brand-brown/10 blur-3xl" />

      <div className="container relative mx-auto px-4 py-16 md:py-24">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="inline-flex items-center gap-2 rounded-full bg-white/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-brand-brown-deep shadow-sm mb-3">
            <Sparkles className="size-3.5 text-brand-gold" />
            Transparência nos valores
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-foreground">Tabela de Preços</h2>
          <div className="mx-auto mt-4 h-px w-48 bg-brand-gold/60" />
          <p className="mt-4 text-sm text-foreground/60">Valores para 1ª vez e manutenção</p>
        </div>

        {/* Cards por categoria */}
        <div className="grid md:grid-cols-3 gap-6">
          {categorias.map((cat) => (
            <div key={cat.nome} className="rounded-3xl border border-brand-gold/40 bg-white shadow-soft overflow-hidden">
              {/* Header da categoria */}
              <div className="bg-brand-brown-deep px-6 py-4 flex items-center gap-3">
                <span className="text-2xl">{cat.emoji}</span>
                <h3 className="font-serif text-xl text-white">{cat.nome}</h3>
              </div>

              {/* Cabeçalho da tabela */}
              <div className="grid grid-cols-3 px-6 py-2 bg-brand-cream/60 text-xs font-semibold uppercase tracking-wider text-foreground/50">
                <span>Serviço</span>
                <span className="text-center">1ª vez</span>
                <span className="text-center">Manutenção</span>
              </div>

              {/* Itens */}
              <div className="divide-y divide-brand-gold/20">
                {cat.itens.map((item) => (
                  <div key={item.nome} className="grid grid-cols-3 items-center px-6 py-3.5 hover:bg-brand-cream/40 transition-colors">
                    <div>
                      <p className="text-sm font-medium text-foreground">{item.nome}</p>
                      <p className="text-xs text-foreground/45">{item.intervalo}</p>
                    </div>
                    <span className="text-center text-sm font-semibold text-brand-brown-deep">{item.primeiraVez}</span>
                    <span className="text-center text-sm font-semibold text-brand-brown">{item.manutencao}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Rodapé */}
        <p className="mt-8 text-center text-xs text-foreground/45">
          * Valores sujeitos a alteração. Consulte disponibilidade pelo WhatsApp.
        </p>
      </div>
    </section>
  );
}
