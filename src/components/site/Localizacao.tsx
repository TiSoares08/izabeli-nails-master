import { Instagram, MapPin, MessageCircle } from "lucide-react";
import espaco1 from "@/assets/Espaco6.jpeg";
import espaco2 from "@/assets/Espaco2.jpeg";
import espaco3 from "@/assets/Espaco3.jpeg";
import espaco4 from "@/assets/Espaco4.jpeg";

const espacoFotos = [espaco1, espaco2, espaco3, espaco4];

export function Localizacao() {
  const address = "Rua Vitória, 216 - Vila São Jorge, Barueri - SP, 06402-030";
  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(address)}&output=embed`;

  return (
    <section id="localizacao" className="bg-brand-brown text-white">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <h2 className="font-serif text-4xl md:text-5xl">Localização</h2>
        <div className="mt-3 h-px w-full max-w-md bg-white/60" />

        <div className="mt-12 grid md:grid-cols-2 gap-10 items-center">
          <div className="overflow-hidden rounded-xl shadow-soft ring-1 ring-white/20">
            <iframe
              title="Localização Izabeli Nails"
              src={mapSrc}
              width="100%"
              height="380"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-[380px] border-0"
            />
          </div>

          <ul className="space-y-6 text-base md:text-lg">
            <li className="flex items-start gap-4">
              <span className="mt-1 inline-flex size-9 shrink-0 items-center justify-center rounded-full bg-white/15">
                <MapPin className="size-5" />
              </span>
              <span className="font-light leading-relaxed">
                Rua Vitória, 216 - Vila São Jorge<br />Barueri - SP, 06402-030
              </span>
            </li>
            <li>
              <a
                href="https://wa.me/5511930443624"
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-4 hover:text-brand-gold-soft transition-colors"
              >
                <span className="inline-flex size-9 shrink-0 items-center justify-center rounded-full bg-white/15 group-hover:bg-brand-gold/30 transition">
                  <MessageCircle className="size-5" />
                </span>
                (11) 93044-3624
              </a>
            </li>
            <li>
              <a
                href="https://instagram.com/izabelinails_"
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-4 hover:text-brand-gold-soft transition-colors"
              >
                <span className="inline-flex size-9 shrink-0 items-center justify-center rounded-full bg-white/15 group-hover:bg-brand-gold/30 transition">
                  <Instagram className="size-5" />
                </span>
                izabelinails_
              </a>
            </li>
          </ul>
        </div>

        {/* Meu Espaço */}
        <div className="mt-20">
          <h3 className="font-serif text-3xl md:text-4xl">Meu Espaço</h3>
          <div className="mt-3 h-px w-full max-w-sm bg-white/60" />
          <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-3">
            {espacoFotos.map((src, i) => (
              <figure key={i} className="group relative overflow-hidden rounded-xl aspect-square shadow-soft ring-1 ring-white/10">
                <img
                  src={src}
                  alt={`Espaço Izabeli Nails ${i + 1}`}
                  loading="lazy"
                  className="size-full object-cover transition-all duration-500 group-hover:scale-110 group-hover:brightness-110"
                />
                <div className="pointer-events-none absolute inset-0 ring-0 ring-brand-gold transition-all duration-300 group-hover:ring-2 group-hover:shadow-gold rounded-xl" />
              </figure>
            ))}
          </div>
        </div>

        <div className="mt-14 h-px w-full max-w-md ml-auto bg-white/60" />
      </div>
    </section>
  );
}
