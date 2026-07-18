import espaco1 from "@/assets/Espaco1.jpeg";
import espaco2 from "@/assets/Espaco2.jpeg";
import espaco3 from "@/assets/Espaco3.jpeg";
import espaco4 from "@/assets/Espaco4.jpeg";
import espaco5 from "@/assets/Espaco5.jpeg";
import espaco6 from "@/assets/Espaco6.jpeg";

export function Espaco() {
  return (
    <section id="espaco" className="relative bg-brand-cream overflow-hidden">
      <div className="absolute -left-24 top-0 size-72 rounded-full bg-brand-gold/20 blur-3xl" />
      <div className="absolute -right-24 bottom-0 size-72 rounded-full bg-brand-brown/10 blur-3xl" />

      <div className="container relative mx-auto px-4 py-16 md:py-24">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full bg-white/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-brand-brown-deep shadow-sm mb-3">
              <span className="size-1.5 rounded-full bg-brand-gold inline-block" />
              Ambiente exclusivo
            </p>
            <h2 className="font-serif text-4xl md:text-5xl text-foreground">Nosso Espaço</h2>
            <div className="mt-4 h-px w-48 bg-brand-gold/60" />
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-foreground/65 md:text-right">
            Um ambiente pensado para você se sentir à vontade, confortável e especial do início ao fim do atendimento.
          </p>
        </div>

        {/* Gallery grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 grid-rows-[auto] gap-3 md:gap-4">

          {/* Foto 1 — grande, ocupa 2 linhas na esquerda */}
          <div className="group relative col-span-1 row-span-2 overflow-hidden rounded-3xl shadow-soft">
            <img
              src={espaco1}
              alt="Espaço Izabeli Nails"
              loading="lazy"
              className="size-full object-cover transition-all duration-700 group-hover:scale-105 group-hover:brightness-110 saturate-90 group-hover:saturate-110"
              style={{ minHeight: "320px" }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-brown-deep/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />
            <div className="absolute inset-0 ring-0 ring-brand-gold/60 group-hover:ring-2 transition-all duration-300 rounded-3xl" />
          </div>

          {/* Foto 2 */}
          <div className="group relative overflow-hidden rounded-3xl shadow-soft">
            <img
              src={espaco2}
              alt="Espaço Izabeli Nails"
              loading="lazy"
              className="size-full object-cover aspect-[4/3] transition-all duration-700 group-hover:scale-105 group-hover:brightness-110 saturate-90 group-hover:saturate-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-brown-deep/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />
            <div className="absolute inset-0 ring-0 ring-brand-gold/60 group-hover:ring-2 transition-all duration-300 rounded-3xl" />
          </div>

          {/* Foto 3 */}
          <div className="group relative overflow-hidden rounded-3xl shadow-soft">
            <img
              src={espaco3}
              alt="Espaço Izabeli Nails"
              loading="lazy"
              className="size-full object-cover aspect-[4/3] transition-all duration-700 group-hover:scale-105 group-hover:brightness-110 saturate-90 group-hover:saturate-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-brown-deep/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />
            <div className="absolute inset-0 ring-0 ring-brand-gold/60 group-hover:ring-2 transition-all duration-300 rounded-3xl" />
          </div>

          {/* Foto 4 */}
          <div className="group relative overflow-hidden rounded-3xl shadow-soft">
            <img
              src={espaco4}
              alt="Espaço Izabeli Nails"
              loading="lazy"
              className="size-full object-cover aspect-[4/3] transition-all duration-700 group-hover:scale-105 group-hover:brightness-110 saturate-90 group-hover:saturate-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-brown-deep/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />
            <div className="absolute inset-0 ring-0 ring-brand-gold/60 group-hover:ring-2 transition-all duration-300 rounded-3xl" />
          </div>

          {/* Foto 5 — larga, ocupa 2 colunas */}
          <div className="group relative col-span-2 md:col-span-1 overflow-hidden rounded-3xl shadow-soft">
            <img
              src={espaco5}
              alt="Espaço Izabeli Nails"
              loading="lazy"
              className="size-full object-cover aspect-[16/7] md:aspect-[4/3] transition-all duration-700 group-hover:scale-105 group-hover:brightness-110 saturate-90 group-hover:saturate-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-brown-deep/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />
            <div className="absolute inset-0 ring-0 ring-brand-gold/60 group-hover:ring-2 transition-all duration-300 rounded-3xl" />
          </div>

          {/* Foto 6 — larga, ocupa toda a largura */}
          <div className="group relative col-span-2 md:col-span-3 overflow-hidden rounded-3xl shadow-soft">
            <img
              src={espaco6}
              alt="Espaço Izabeli Nails"
              loading="lazy"
              className="w-full object-cover aspect-[21/7] transition-all duration-700 group-hover:scale-105 group-hover:brightness-110 saturate-90 group-hover:saturate-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-brown-deep/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />
            {/* Badge central no hover */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <span className="rounded-full bg-white/20 backdrop-blur-sm border border-white/40 px-6 py-2 text-white text-sm font-semibold tracking-widest uppercase">
                Izabeli Nails • Barueri
              </span>
            </div>
            <div className="absolute inset-0 ring-0 ring-brand-gold/60 group-hover:ring-2 transition-all duration-300 rounded-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
