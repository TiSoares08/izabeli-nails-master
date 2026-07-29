import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { useReveal } from "@/hooks/useReveal";

const perguntas = [
  {
    q: "Quanto tempo dura um alongamento?",
    a: "Depende da técnica. Fibra de Vidro dura em média 30 dias, Molde F1 até 25 dias e Banho de Gel até 20 dias. Com os cuidados certos, pode durar ainda mais!",
  },
  {
    q: "Posso fazer com a unha quebrada ou curta?",
    a: "Sim! O alongamento é justamente para quem tem unhas curtas ou quebradiças. A técnica cria uma estrutura sobre a unha natural, deixando o comprimento e formato que você quiser.",
  },
  {
    q: "Dói fazer alongamento?",
    a: "Não dói. O processo é totalmente indolor. Você pode sentir um leve calor durante a aplicação do gel, mas nada desconfortável.",
  },
  {
    q: "Como funciona a manutenção?",
    a: "A manutenção é feita para reaplicar o produto na raiz que cresceu, corrigir o formato e renovar o acabamento. É mais rápida e mais barata que o serviço completo.",
  },
  {
    q: "Preciso tirar o esmalte antes de ir?",
    a: "Não precisa! Pode vir com esmalte, eu cuido de tudo no atendimento.",
  },
  {
    q: "Como funciona o curso de unhas?",
    a: "O curso é presencial aqui no espaço em Barueri. Ensino a técnica de alongamento em fibra de vidro do zero, com material incluso. Entre em contato pelo WhatsApp para saber as próximas datas e valores.",
  },
  {
    q: "Qual o endereço e como agendar?",
    a: "Fica na Rua Vitória, 216 - Vila São Jorge, Barueri - SP. O agendamento é feito direto pelo site ou pelo WhatsApp. Não atendo aos domingos.",
  },
];

export function FAQ() {
  const { ref, visible } = useReveal();
  const [aberto, setAberto] = useState<number | null>(null);

  return (
    <section ref={ref as React.Ref<HTMLElement>} id="faq" className={`relative bg-white overflow-hidden transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
      <div className="absolute -left-24 top-10 size-72 rounded-full bg-brand-gold/15 blur-3xl" />
      <div className="absolute -right-24 bottom-10 size-64 rounded-full bg-brand-brown/10 blur-3xl" />

      <div className="container relative mx-auto px-4 py-16 md:py-24">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="inline-flex items-center gap-2 rounded-full bg-brand-cream px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-brand-brown-deep shadow-sm mb-3">
            <span className="text-base">❓</span>
            Tire suas dúvidas
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-foreground">Perguntas Frequentes</h2>
          <div className="mx-auto mt-4 h-px w-48 bg-brand-gold/60" />
        </div>

        {/* Accordion */}
        <div className="max-w-2xl mx-auto flex flex-col gap-3">
          {perguntas.map((item, i) => {
            const isOpen = aberto === i;
            return (
              <div
                key={i}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? "border-brand-gold bg-brand-cream/60 shadow-soft"
                    : "border-brand-gold/30 bg-white hover:border-brand-gold/60"
                }`}
              >
                <button
                  type="button"
                  onClick={() => setAberto(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 px-6 py-4 text-left"
                >
                  <span className="text-sm font-semibold text-brand-brown-deep">{item.q}</span>
                  <ChevronDown
                    className={`size-4 shrink-0 text-brand-gold transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className={`transition-all duration-300 ease-in-out ${
                    isOpen ? "max-h-48 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="px-6 pb-5 text-sm leading-relaxed text-foreground/70">{item.a}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
