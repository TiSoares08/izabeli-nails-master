import about1 from "@/assets/izabeli2.jpeg";
import about2 from "@/assets/izabeli1.jpeg";
import about3 from "@/assets/izabeli3.jpeg";
import about4 from "@/assets/izabeli4.jpeg";
import { useEffect, useState } from "react";
import { useReveal } from "@/hooks/useReveal";

const images = [about1, about2, about3, about4];

export function About() {
  const { ref, visible } = useReveal();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section ref={ref as React.Ref<HTMLElement>} id="sobre" className={`relative bg-brand-brown text-white overflow-hidden transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
      <div className="container mx-auto grid md:grid-cols-2 gap-10 md:gap-16 items-center px-4 py-16 md:py-24">
        {/* Photo of Izabeli that blends into the brown background */}
        <div className="relative">
          <div className="relative aspect-[4/5] w-full max-w-md mx-auto overflow-hidden rounded-sm">
            {images.map((src, i) => (
              <img
                key={i}
                src={src}
                alt="Izabeli — nail designer"
                width={1024}
                height={1280}
                loading="eager"
                className="absolute inset-0 size-full object-cover transition-opacity duration-1000"
                style={{ opacity: i === current ? 1 : 0 }}
              />
            ))}
            {/* Right + bottom feather into brand brown */}
            <div
              aria-hidden
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(90deg, transparent 55%, var(--brand-brown) 100%), linear-gradient(180deg, transparent 65%, var(--brand-brown) 100%)",
              }}
            />
          </div>
        </div>

        <div className="text-center md:text-left">
          <h2 className="font-serif text-4xl md:text-5xl">Sobre Mim</h2>
          <div className="mx-auto md:mx-0 mt-4 h-px w-full max-w-xs bg-white/60" />
          <p className="mt-8 text-lg md:text-xl font-serif text-brand-gold-soft">
            Olá, eu sou Izabeli Silva!
          </p>
          <div className="mt-4 flex flex-col gap-4 text-sm md:text-base leading-relaxed text-white/90 font-light">
            <p>
              Tenho 22 anos e atuo na área da beleza há 5 anos, sempre buscando oferecer o melhor para minhas clientes. Sou especialista em alongamento de unhas e esmaltação, dedicada a transformar unhas em verdadeiras obras de arte com cuidado, qualidade e atenção aos detalhes.
            </p>
            <p>
              Atendo em Barueri e região, trabalhando com técnicas modernas e utilizando produtos da Uze Nails, reconhecidos pela alta qualidade e durabilidade. Meu objetivo é garantir resultados elegantes, duradouros e que valorizem o estilo único de cada cliente.
            </p>
            <p>
              Além dos atendimentos, também ministro cursos de alongamento em fibra de vidro, compartilhando conhecimento e ajudando novas profissionais a se desenvolverem e crescerem na área da beleza.
            </p>
            <p>
              Será um prazer cuidar das suas unhas e proporcionar uma experiência especial para você!
            </p>
          </div>
          <div className="mt-10 mx-auto md:mx-0 h-px w-full max-w-xs bg-white/60" />
        </div>
      </div>
    </section>
  );
}
