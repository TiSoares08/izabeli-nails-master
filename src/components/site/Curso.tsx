import { BookOpen, CheckCircle2, Clock, Gift, MapPin, Sparkles, Users } from "lucide-react";
import { useReveal } from "@/hooks/useReveal";

const cursos = [
  {
    nome: "VIP",
    tecnica: "Fibra de Vidro",
    preco: "R$ 1.200",
    topicos: [
      "Ensinamento desde o zero",
      "Aprendendo formatos",
      "Encapsulamento",
      "Aderência de fibra",
      "Etapas dos preparadores",
      "Finalização de cutícula e esmaltação",
    ],
    incluso: [
      "Certificado de conclusão",
      "Apostila de apoio",
      "Mimos especiais 🎁",
    ],
  },
  {
    nome: "Premium",
    tecnica: "Fibra de Vidro + Banho em Gel & Esmaltação em Gel",
    preco: "R$ 1.800",
    destaque: true,
    topicos: [
      "Aderência da Fibra de Vidro",
      "Aderência do Banho em Gel",
      "Encapsulamentos",
      "Etapas dos preparadores",
      "Cutilagem",
      "Esmaltação em Gel",
    ],
    incluso: [
      "Certificado de conclusão",
      "Apostila de apoio",
      "Kit de materiais para já atender 💼",
      "Mimos especiais 🎁",
    ],
  },
];

const detalhes = [
  { icon: Clock,    label: "Duração",  valor: "12 horas" },
  { icon: Users,    label: "Turma",    valor: "Até 4 alunas" },
  { icon: MapPin,   label: "Local",    valor: "Barueri - SP" },
  { icon: BookOpen, label: "Material", valor: "Incluso" },
];

export function Curso() {
  const { ref, visible } = useReveal();

  return (
    <section
      ref={ref as React.Ref<HTMLElement>}
      id="curso"
      className={`relative bg-brand-brown text-white overflow-hidden transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
    >
      <div className="absolute -right-32 top-0 size-96 rounded-full bg-brand-gold/10 blur-3xl" />
      <div className="absolute -left-32 bottom-0 size-96 rounded-full bg-white/5 blur-3xl" />

      <div className="container relative mx-auto px-4 py-16 md:py-24">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-brand-gold-soft mb-3">
              <Sparkles className="size-3.5 text-brand-gold" />
              Para quem quer aprender
            </p>
            <h2 className="font-serif text-4xl md:text-5xl">Curso de Unhas</h2>
            <div className="mt-4 h-px w-48 bg-white/40" />
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-white/70 md:text-right">
            Aprenda com quem vive isso todos os dias. Escolha o plano ideal para você.
          </p>
        </div>

        {/* Detalhes comuns */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
          {detalhes.map(({ icon: Icon, label, valor }) => (
            <div key={label} className="rounded-2xl bg-white/10 border border-white/15 p-4 flex flex-col gap-2">
              <Icon className="size-5 text-brand-gold" />
              <p className="text-xs text-white/50 uppercase tracking-wider">{label}</p>
              <p className="font-semibold text-white">{valor}</p>
            </div>
          ))}
        </div>

        {/* Cards dos cursos */}
        <div className="grid md:grid-cols-2 gap-6">
          {cursos.map((curso) => (
            <div
              key={curso.nome}
              className={`relative rounded-3xl border p-8 flex flex-col gap-6 ${
                curso.destaque
                  ? "border-brand-gold bg-white/15 shadow-gold"
                  : "border-white/20 bg-white/10"
              }`}
            >
              {curso.destaque && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-brand-gold px-4 py-1 text-xs font-bold uppercase tracking-widest text-brand-brown-deep">
                  Mais completo
                </span>
              )}

              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-white/50 mb-1">Plano</p>
                <h3 className="font-serif text-3xl text-brand-gold-soft">{curso.nome}</h3>
                <p className="mt-1 text-sm text-white/60">{curso.tecnica}</p>
              </div>

              <ul className="space-y-2.5 flex-1">
                {curso.topicos.map((t) => (
                  <li key={t} className="flex items-start gap-3 text-sm text-white/85">
                    <CheckCircle2 className="size-4 shrink-0 mt-0.5 text-brand-gold" />
                    {t}
                  </li>
                ))}
              </ul>

              {/* O que a aluna leva */}
              <div className="rounded-2xl bg-white/10 border border-white/15 p-4 space-y-2">
                <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-brand-gold-soft">
                  <Gift className="size-3.5" /> Ao finalizar você leva
                </p>
                {curso.incluso.map((item) => (
                  <p key={item} className="flex items-center gap-2 text-sm text-white/80">
                    <span className="size-1.5 rounded-full bg-brand-gold shrink-0" />
                    {item}
                  </p>
                ))}
              </div>

              <div className="border-t border-white/15 pt-5 flex items-center justify-between">
                <div>
                  <p className="text-xs text-white/40 uppercase tracking-wider mb-1">Investimento</p>
                  <p className="font-serif text-4xl text-brand-gold-soft">{curso.preco}</p>
                </div>
                <a
                  href={`https://wa.me/5511932792798?text=Ol%C3%A1%20Izabeli!%20Tenho%20interesse%20no%20curso%20${encodeURIComponent(curso.nome)}.%20Pode%20me%20passar%20mais%20informa%C3%A7%C3%B5es%3F`}
                  target="_blank"
                  rel="noreferrer"
                  className={`inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.16em] transition-all duration-300 hover:-translate-y-0.5 ${
                    curso.destaque
                      ? "bg-brand-gold-soft text-brand-brown-deep shadow-gold hover:bg-white"
                      : "bg-white/15 text-white border border-white/30 hover:bg-white/25"
                  }`}
                >
                  <Sparkles className="size-3.5" />
                  Quero este
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-14 h-px w-full max-w-md ml-auto bg-white/30" />
      </div>
    </section>
  );
}
