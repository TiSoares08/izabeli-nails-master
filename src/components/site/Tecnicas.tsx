import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight, Clock, Sparkles } from "lucide-react";
import { useCallback, useEffect, useMemo, useState } from "react";

type Categoria = "Todos" | "Alongamentos" | "Esmaltação" | "Pés" | "Adicionais";

type Tecnica = {
  nome: string;
  preco: string;
  duracao: string;
  manutencao: string;
  categoria: Exclude<Categoria, "Todos">;
};

const filtros: Categoria[] = ["Todos", "Alongamentos", "Esmaltação", "Pés", "Adicionais"];

const tecnicas: Tecnica[] = [
  { nome: "Fibra de Vidro", preco: "R$ 200,00", duracao: "2 Horas", manutencao: "R$150,00 a cada 30 dias", categoria: "Alongamentos" },
  { nome: "Molde F1", preco: "R$ 180,00", duracao: "01:30 Horas", manutencao: "R$140,00 a cada 25 dias", categoria: "Alongamentos" },
  { nome: "Banho de Gel", preco: "R$ 150,00", duracao: "01:30 Horas", manutencao: "R$120,00 a cada 20 dias", categoria: "Alongamentos" },
  { nome: "Baby Boomer", preco: "R$ 20,00", duracao: "Adicional", manutencao: "Conforme aplicação", categoria: "Adicionais" },
  { nome: "Encapsulada", preco: "R$ 10,00", duracao: "Por dedo", manutencao: "Conforme aplicação", categoria: "Adicionais" },
  { nome: "Mão Esmaltação em Gel", preco: "R$ 80,00", duracao: "01:00 Hora", manutencao: "A cada 15 dias", categoria: "Esmaltação" },
  { nome: "Pé Esmaltação em Gel", preco: "R$ 80,00", duracao: "01:00 Hora", manutencao: "A cada 20 dias", categoria: "Pés" },
  { nome: "Mão Comum", preco: "R$ 35,00", duracao: "30 min", manutencao: "A cada 7 dias", categoria: "Esmaltação" },
  { nome: "Pé Comum", preco: "R$ 40,00", duracao: "40 min", manutencao: "A cada 15 dias", categoria: "Pés" },
  { nome: "Mão + Pé Comum", preco: "R$ 65,00", duracao: "01:20 Horas", manutencao: "A cada 7 dias", categoria: "Pés" },
  { nome: "Plástica dos Pés", preco: "R$ 100,00", duracao: "01:10 Hora", manutencao: "A cada 1 mês", categoria: "Pés" },
  { nome: "Manutenção", preco: "A partir de R$ 120,00", duracao: "01:30 Horas", manutencao: "Conforme técnica", categoria: "Alongamentos" },
];

export function Tecnicas() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ align: "start", loop: true });
  const [selected, setSelected] = useState(0);
  const [snaps, setSnaps] = useState<number[]>([]);
  const [filtro, setFiltro] = useState<Categoria>("Todos");

  const tecnicasFiltradas = useMemo(
    () => tecnicas.filter((t) => filtro === "Todos" || t.categoria === filtro),
    [filtro],
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelected(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    setSnaps(emblaApi.scrollSnapList());
    emblaApi.on("select", onSelect);
    onSelect();
  }, [emblaApi, onSelect, tecnicasFiltradas.length]);

  useEffect(() => {
    emblaApi?.reInit();
    emblaApi?.scrollTo(0);
    setSelected(0);
  }, [emblaApi, filtro]);

  return (
    <section id="tecnicas" className="bg-white">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="mb-8 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.25em] text-brand-gold">Procedimentos</p>
            <h2 className="font-serif text-4xl md:text-5xl text-foreground">Técnicas</h2>
            <div className="mt-3 h-px w-full max-w-md bg-foreground/30" />
          </div>
         
        </div>

        <div className="mb-8 flex flex-wrap gap-3">
          {filtros.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setFiltro(item)}
              className={`rounded-full border px-5 py-2 text-xs font-semibold uppercase tracking-[0.16em] transition-all duration-300 ${
                filtro === item
                  ? "border-brand-brown-deep bg-brand-brown-deep text-white shadow-gold"
                  : "border-brand-gold/50 bg-brand-cream text-brand-brown-deep hover:-translate-y-0.5 hover:border-brand-gold hover:bg-white"
              }`}
            >
              {item}
            </button>
          ))}
        </div>

        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-6 -ml-2 pl-2 py-4">
              {tecnicasFiltradas.map((t) => (
                <article
                  key={t.nome}
                  className="group relative flex-[0_0_85%] sm:flex-[0_0_45%] md:flex-[0_0_32%] lg:flex-[0_0_24%] min-w-0"
                >
                  <div className="relative h-full overflow-hidden rounded-2xl border-2 border-brand-gold bg-white p-6 transition-all duration-300 hover:-translate-y-2 hover:rotate-[1deg] hover:shadow-gold">
                    <div className="absolute inset-0 bg-gradient-to-br from-brand-cream via-white to-brand-gold/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    <span className="pointer-events-none absolute -top-px -left-px size-6 border-l-2 border-t-2 border-brand-gold rounded-tl-2xl" />
                    <span className="pointer-events-none absolute -bottom-px -right-px size-6 border-r-2 border-b-2 border-brand-gold rounded-br-2xl" />

                    <div className="relative">
                      <div className="mb-4 flex justify-center">
                        <span className="inline-flex size-10 items-center justify-center rounded-full bg-brand-gold-soft text-brand-brown-deep transition-transform duration-300 group-hover:scale-110">
                          <Sparkles className="size-4" />
                        </span>
                      </div>

                      <h3 className="text-center font-serif text-xl text-foreground">{t.nome}</h3>
                      <div className="mx-auto mt-2 h-px w-16 bg-brand-gold" />

                      <dl className="mt-6 space-y-3 text-sm text-foreground/85">
                        <div className="text-center text-lg font-semibold text-brand-brown-deep">{t.preco}</div>
                        <div className="flex items-start gap-2">
                          <Clock className="mt-0.5 size-4 text-brand-gold" />
                          <div><dt className="inline">Duração: </dt><dd className="inline">{t.duracao}</dd></div>
                        </div>
                        <div><dt className="inline font-medium">Manutenção: </dt><dd className="inline">{t.manutencao}</dd></div>
                      </dl>

                      <a
                        href={`#agendamento`}
                        onClick={() => sessionStorage.setItem("procedimento", t.nome)}
                        className="mt-6 inline-flex w-full justify-center rounded-full border border-brand-gold bg-white/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-brand-brown-deep transition-all duration-300 hover:bg-brand-brown-deep hover:text-white"
                      >
                        Quero agendar
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <button
            type="button"
            aria-label="Anterior"
            onClick={() => emblaApi?.scrollPrev()}
            className="hidden md:flex absolute -left-4 top-1/2 -translate-y-1/2 size-10 items-center justify-center rounded-full bg-white border border-brand-gold text-brand-brown-deep shadow-sm hover:bg-brand-cream transition"
          >
            <ChevronLeft className="size-5" />
          </button>
          <button
            type="button"
            aria-label="Próximo"
            onClick={() => emblaApi?.scrollNext()}
            className="hidden md:flex absolute -right-4 top-1/2 -translate-y-1/2 size-10 items-center justify-center rounded-full bg-white border border-brand-gold text-brand-brown-deep shadow-sm hover:bg-brand-cream transition"
          >
            <ChevronRight className="size-5" />
          </button>
        </div>

        <div className="mt-8 flex justify-center gap-2">
          {snaps.map((_, i) => (
            <button
              key={i}
              aria-label={`Ir para slide ${i + 1}`}
              onClick={() => emblaApi?.scrollTo(i)}
              className={`size-2.5 rounded-full transition-all ${
                i === selected ? "bg-brand-brown-deep scale-125" : "bg-foreground/25"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
