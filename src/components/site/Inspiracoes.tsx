import nails1 from "@/assets/nail1.jpeg";
import nails2 from "@/assets/nail2.jpeg";
import nails3 from "@/assets/nail3.jpeg";
import nails4 from "@/assets/nail4.jpeg";
import nails5 from "@/assets/nail5.jpeg";
import nails6 from "@/assets/nail6.jpeg";
import nails7 from "@/assets/nail7.jpeg";
import nails8 from "@/assets/nail8.jpeg";
import nails9 from "@/assets/nail9.jpeg";


type Item = {
  src: string;
  className: string;
  dimmed?: boolean;
};

const items: Item[] = [
  { src: nails1, className: "col-span-3 row-span-3 col-start-1 row-start-1 rotate-[-3deg]", dimmed: false },
  { src: nails9, className: "col-span-3 row-span-3 col-start-3 row-start-1 rotate-[2deg]", dimmed: true },
  { src: nails3, className: "col-span-4 row-span-4 col-start-5 row-start-2 rotate-[1deg]", dimmed: false },
  { src: nails4, className: "col-span-3 row-span-3 col-start-2 row-start-4 rotate-[-2deg]", dimmed: true },
  { src: nails5, className: "col-span-3 row-span-3 col-start-9 row-start-1 rotate-[3deg]", dimmed: true },
  { src: nails6, className: "col-span-3 row-span-3 col-start-9 row-start-4 rotate-[-2deg]", dimmed: false },
  { src: nails7, className: "col-span-3 row-span-3 col-start-1 row-start-7 rotate-[2deg]", dimmed: true },
  { src: nails8, className: "col-span-3 row-span-3 col-start-5 row-start-6 rotate-[-1deg]", dimmed: false },
  { src: nails9, className: "col-span-3 row-span-3 col-start-9 row-start-7 rotate-[2deg]", dimmed: true },
];

export function Inspiracoes() {
  return (
    <section id="inspiracoes" className="bg-brand-brown text-white">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <h2 className="font-serif text-4xl md:text-5xl">Inspirações</h2>
        <div className="mt-3 h-px w-full max-w-md bg-white/60" />

        <div className="mt-12 grid grid-cols-11 auto-rows-[70px] md:auto-rows-[90px] gap-3">
          {items.map((it, i) => (
            <figure
              key={i}
              className={`group relative overflow-hidden rounded-lg shadow-lg cursor-pointer ${it.className}`}
            >
              <img
                src={it.src}
                alt="Trabalho de unhas Izabeli"
                loading="lazy"
                className={`size-full object-cover transition-all duration-500 ease-out group-hover:scale-110 group-hover:saturate-150 group-hover:brightness-110 ${
                  it.dimmed ? "saturate-0 brightness-90 opacity-70" : "saturate-100"
                } group-hover:opacity-100`}
              />
              <div className="pointer-events-none absolute inset-0 ring-0 ring-brand-gold transition-all duration-300 group-hover:ring-2 group-hover:shadow-gold rounded-lg" />
            </figure>
          ))}
        </div>

        <div className="mt-10 h-px w-full max-w-md ml-auto bg-white/60" />
      </div>
    </section>
  );
}
