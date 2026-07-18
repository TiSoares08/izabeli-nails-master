import { Quote, Star } from "lucide-react";

const feedbacks = [
  {
    nome: "Camila Montanari",
    handle: "@camimontanari",
    texto:
      "Queria deixar registrado aqui o quanto eu sou apaixonada no seu trabalho Iza!! Ir fazer a unha é sempre meu dia favorito do mês. Obrigada por cuidar das minhas unhas com tanto capricho e carinho. Recomendo seu trabalho pra todas as minhas amigas de coração 💖",
    iniciais: "CM",
  },
  {
    nome: "Debora Moura",
    handle: "@deboramoura",
    texto:
       "O que falar dessa Nails? Que é a melhor?Seria piegas, porém não é só sobre uma manicure perfeita, é muito mais. É elevar sua autoestima, é sobre acolhimento, saber que além de sair com as unhas lindas, você sai leve, pronta pra receber muitos elogios.Não troco e não me arrisco a ir em outro lugar, já tenho minha preferida!",
    iniciais: "DM",
  },
  {
    nome: "Barbara",
    handle: "@barbara",
    texto:
       "Iza!! Passando para agradecer todo o carinho e o cuidado que você tem não só com nossas unhas, mas com a gente como pessoas. Você sabe que o milagre que você fez na minha unha me arranjou até um namorado hahaha.Não é todo mundo que topa fazer os desenhos que eu geralmente escolho, mas você topa e faz ainda melhor do que eu imaginava.Obrigada de verdade pelo que você faz pela nossa autoestima. A gente sempre sai da sua cadeira maravilhada com o que você faz. ❤️",
    iniciais: "BA",
  },
];

const palette = ["bg-brand-brown", "bg-brand-brown-deep", "bg-brand-gold"];

export function Feedbacks() {
  return (
    <section id="feedbacks" className="bg-white">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <h2 className="font-serif text-4xl md:text-5xl text-foreground">Feedbacks</h2>
        <div className="mt-3 h-px w-full max-w-md bg-brand-gold" />

        <div className="mt-12 grid md:grid-cols-3 gap-8">
          {feedbacks.map((f, i) => (
            <article
              key={f.nome}
              className="group relative pt-6"
            >
              <div className="relative rounded-2xl bg-white border border-brand-gold/40 p-7 pb-10 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-gold">
                <Quote className="size-8 text-brand-gold/70" />
                <p className="mt-4 text-foreground/85 leading-relaxed italic">
                  "{f.texto}"
                </p>
                <div className="mt-5 flex items-center gap-0.5 text-brand-gold">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star key={s} className="size-4 fill-current" />
                  ))}
                </div>

                {/* speech-bubble tail */}
                <span className="absolute -bottom-3 right-10 size-6 rotate-45 bg-white border-r border-b border-brand-gold/40" />
              </div>

              <div className="mt-6 flex items-center gap-3 pl-2">
                <div
                  className={`flex size-12 items-center justify-center rounded-full text-white font-serif text-lg shadow-md ${palette[i % palette.length]}`}
                >
                  {f.iniciais}
                </div>
                <div>
                  <div className="font-medium text-foreground">{f.nome}</div>
                  <div className="text-xs text-foreground/60">{f.handle}</div>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 h-px w-full max-w-md ml-auto bg-brand-gold" />
      </div>
    </section>
  );
}
