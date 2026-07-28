import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { u as useEmblaCarousel } from "../_libs/embla-carousel-react.mjs";
import { c as createClient } from "../_libs/supabase__supabase-js.mjs";
import { I as Instagram, X, M as Menu, S as Sparkles, a as MessageCircle, A as ArrowDown, C as Clock, b as ChevronLeft, c as ChevronRight, Q as Quote, d as Star, e as CalendarDays, f as MapPin } from "../_libs/lucide-react.mjs";
import "../_libs/embla-carousel-reactive-utils.mjs";
import "../_libs/embla-carousel.mjs";
import "../_libs/supabase__postgrest-js.mjs";
import "../_libs/supabase__realtime-js.mjs";
import "../_libs/supabase__phoenix.mjs";
import "../_libs/supabase__storage-js.mjs";
import "../_libs/iceberg-js.mjs";
import "../_libs/supabase__auth-js.mjs";
import "tslib";
import "../_libs/supabase__functions-js.mjs";
const logo = "/assets/logo-DR90PYsD.png";
const navLinks$1 = [
  { href: "#sobre", label: "Sobre mim" },
  { href: "#tecnicas", label: "Técnicas" },
  { href: "#inspiracoes", label: "Inspirações" },
  { href: "#agendamento", label: "Agendamento" },
  { href: "#localizacao", label: "Localização" }
];
function Header() {
  const [open, setOpen] = reactExports.useState(false);
  const [scrolled, setScrolled] = reactExports.useState(false);
  reactExports.useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "sticky top-0 z-50", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-brand-brown-deep text-white/90 text-xs", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto flex items-center justify-between px-4 py-1.5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-serif tracking-wide", children: "Izabeli Silva" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://wa.me/5511930443624", className: "hover:text-white transition-colors", children: "(11) 93044-3624" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "a",
          {
            href: "https://instagram.com/izabelinails_",
            target: "_blank",
            rel: "noreferrer",
            className: "hidden sm:flex items-center gap-1.5 hover:text-white transition-colors",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Instagram, { className: "size-3.5" }),
              " izabelinails_"
            ]
          }
        )
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: `transition-all duration-300 ${scrolled ? "bg-brand-brown/90 backdrop-blur-xl shadow-soft" : "bg-brand-brown text-white"}`,
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto flex items-center justify-between gap-4 px-4 py-3 md:py-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "#top", className: "flex items-center justify-center", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: logo, alt: "Izabeli Silva Nail Designer", className: "h-16 md:h-20 w-auto" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "sr-only", children: "Izabeli Silva — Nail Designer" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { className: "hidden lg:flex items-center justify-center gap-8 text-sm tracking-wide text-white", children: navLinks$1.map((l) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "a",
              {
                href: l.href,
                className: "group relative py-2 hover:text-brand-gold-soft transition-colors",
                children: [
                  l.label,
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute bottom-0 left-1/2 h-px w-0 -translate-x-1/2 bg-brand-gold-soft transition-all duration-300 group-hover:w-full" })
                ]
              },
              l.href
            )) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "a",
              {
                href: "#agendamento",
                className: "hidden md:inline-flex rounded-full bg-brand-gold-soft px-5 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-brand-brown-deep shadow-gold transition-all duration-300 hover:-translate-y-0.5 hover:bg-white",
                children: "Agendar horário"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                className: "lg:hidden text-white",
                "aria-label": "Abrir menu",
                onClick: () => setOpen((o) => !o),
                children: open ? /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "size-6" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Menu, { className: "size-6" })
              }
            )
          ] }),
          open && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:hidden border-t border-white/10 bg-brand-brown-deep/95 backdrop-blur-xl", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("nav", { className: "container mx-auto flex flex-col px-4 py-4 gap-3 text-sm text-white", children: [
            navLinks$1.map((l) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              "a",
              {
                href: l.href,
                onClick: () => setOpen(false),
                className: "py-1 hover:text-brand-gold-soft transition-colors",
                children: l.label
              },
              l.href
            )),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "a",
              {
                href: "#agendamento",
                onClick: () => setOpen(false),
                className: "mt-2 inline-flex w-fit rounded-full bg-brand-gold-soft px-5 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-brand-brown-deep",
                children: "Agendar horário"
              }
            )
          ] }) })
        ]
      }
    )
  ] });
}
const heroImage = "/assets/IZABELI%20NAILS-BPxDVZVR.png";
function Hero() {
  const [hover, setHover] = reactExports.useState(false);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "top", className: "relative overflow-hidden bg-white", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "img",
        {
          src: heroImage,
          alt: "Izabeli Nails — Alongamentos de unhas em Barueri",
          className: "block w-full h-auto scale-[1.01] transition-transform duration-[2500ms] ease-out hover:scale-[1.025]"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/10 pointer-events-none" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white to-transparent pointer-events-none" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 pointer-events-none", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto h-full px-4 relative", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "absolute pointer-events-auto max-w-xs",
          style: { left: "0.3%", top: "63%" },
          onMouseEnter: () => setHover(true),
          onMouseLeave: () => setHover(false),
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-3 inline-flex items-center gap-2 rounded-full border border-brand-gold/60 bg-white/75 px-4 py-2 text-xs font-medium text-brand-brown-deep shadow-soft backdrop-blur-md", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "size-3.5 text-brand-gold" }),
              "5 anos realçando a beleza das unhas"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "a",
                {
                  href: "#agendamento",
                  className: `inline-flex items-center gap-2 rounded-full border-2 px-6 py-3 text-xs md:text-sm tracking-wide font-semibold uppercase transition-all duration-300 ${hover ? "bg-brand-brown text-white border-brand-brown shadow-gold -translate-y-0.5 scale-[1.03]" : "bg-brand-gold-soft/90 text-brand-brown-deep border-brand-gold"}`,
                  children: [
                    "Agendar horário",
                    /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: `size-4 transition-transform duration-300 ${hover ? "translate-x-1" : ""}` })
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "a",
                {
                  href: "https://wa.me/5511930443624?text=Oi%20Izabeli!%20Tenho%20interesse%20no%20curso%20de%20unhas.",
                  target: "_blank",
                  rel: "noreferrer",
                  className: "inline-flex items-center rounded-full border border-white/70 bg-white/70 px-5 py-3 text-xs md:text-sm font-medium text-brand-brown-deep shadow-soft backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-white",
                  children: "Curso disponível"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: `pointer-events-none absolute left-1/2 top-full z-20 mt-3 w-64 -translate-x-1/2 transition-all duration-300 ${hover ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"}`,
                children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative rounded-xl bg-white p-4 text-center text-sm text-foreground shadow-soft border border-brand-gold/40", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -top-1.5 left-1/2 size-3 -translate-x-1/2 rotate-45 bg-white border-l border-t border-brand-gold/40" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-center gap-2 text-brand-brown-deep font-medium", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "size-4 text-brand-gold" }),
                    "Agende pelo WhatsApp"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-xs text-foreground/70", children: "Clique e escolha seu melhor horário 💅" })
                ] })
              }
            )
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "a",
        {
          href: "#sobre",
          className: "absolute bottom-5 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-1 text-xs uppercase tracking-[0.2em] text-brand-brown-deep md:flex animate-bounce pointer-events-auto",
          children: [
            "Conheça",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowDown, { className: "size-4" })
          ]
        }
      )
    ] }) })
  ] });
}
const about1 = "/assets/izabeli2-zUefU3Qj.jpeg";
const about2 = "/assets/izabeli1-V8Bw5x5D.jpeg";
const about3 = "/assets/izabeli3-C-6lWqCu.jpeg";
const about4 = "/assets/izabeli4-C9Nl8xDw.jpeg";
const images = [about1, about2, about3, about4];
function About() {
  const [current, setCurrent] = reactExports.useState(0);
  reactExports.useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3e3);
    return () => clearInterval(interval);
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "sobre", className: "relative bg-brand-brown text-white overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto grid md:grid-cols-2 gap-10 md:gap-16 items-center px-4 py-16 md:py-24", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative aspect-[4/5] w-full max-w-md mx-auto overflow-hidden rounded-sm", children: [
      images.map((src, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        "img",
        {
          src,
          alt: "Izabeli — nail designer",
          width: 1024,
          height: 1280,
          loading: "eager",
          className: "absolute inset-0 size-full object-cover transition-opacity duration-1000",
          style: { opacity: i === current ? 1 : 0 }
        },
        i
      )),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          "aria-hidden": true,
          className: "absolute inset-0",
          style: {
            background: "linear-gradient(90deg, transparent 55%, var(--brand-brown) 100%), linear-gradient(180deg, transparent 65%, var(--brand-brown) 100%)"
          }
        }
      )
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center md:text-left", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-serif text-4xl md:text-5xl", children: "Sobre Mim" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto md:mx-0 mt-4 h-px w-full max-w-xs bg-white/60" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-8 text-lg md:text-xl font-serif text-brand-gold-soft", children: "Olá, eu sou Izabeli Silva!" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 flex flex-col gap-4 text-sm md:text-base leading-relaxed text-white/90 font-light", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Tenho 22 anos e atuo na área da beleza há 5 anos, sempre buscando oferecer o melhor para minhas clientes. Sou especialista em alongamento de unhas e esmaltação, dedicada a transformar unhas em verdadeiras obras de arte com cuidado, qualidade e atenção aos detalhes." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Atendo em Barueri e região, trabalhando com técnicas modernas e utilizando produtos da Uze Nails, reconhecidos pela alta qualidade e durabilidade. Meu objetivo é garantir resultados elegantes, duradouros e que valorizem o estilo único de cada cliente." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Além dos atendimentos, também ministro cursos de alongamento em fibra de vidro, compartilhando conhecimento e ajudando novas profissionais a se desenvolverem e crescerem na área da beleza." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Será um prazer cuidar das suas unhas e proporcionar uma experiência especial para você!" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10 mx-auto md:mx-0 h-px w-full max-w-xs bg-white/60" })
    ] })
  ] }) });
}
const filtros = ["Todos", "Alongamentos", "Esmaltação", "Pés", "Adicionais"];
const tecnicas = [
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
  { nome: "Manutenção", preco: "A partir de R$ 120,00", duracao: "01:30 Horas", manutencao: "Conforme técnica", categoria: "Alongamentos" }
];
function Tecnicas() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ align: "start", loop: true });
  const [selected, setSelected] = reactExports.useState(0);
  const [snaps, setSnaps] = reactExports.useState([]);
  const [filtro, setFiltro] = reactExports.useState("Todos");
  const tecnicasFiltradas = reactExports.useMemo(
    () => tecnicas.filter((t) => filtro === "Todos" || t.categoria === filtro),
    [filtro]
  );
  const onSelect = reactExports.useCallback(() => {
    if (!emblaApi) return;
    setSelected(emblaApi.selectedScrollSnap());
  }, [emblaApi]);
  reactExports.useEffect(() => {
    if (!emblaApi) return;
    setSnaps(emblaApi.scrollSnapList());
    emblaApi.on("select", onSelect);
    onSelect();
  }, [emblaApi, onSelect, tecnicasFiltradas.length]);
  reactExports.useEffect(() => {
    emblaApi?.reInit();
    emblaApi?.scrollTo(0);
    setSelected(0);
  }, [emblaApi, filtro]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "tecnicas", className: "bg-white", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4 py-16 md:py-24", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-8 flex flex-col gap-5 md:flex-row md:items-end md:justify-between", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-2 text-xs font-semibold uppercase tracking-[0.25em] text-brand-gold", children: "Procedimentos" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-serif text-4xl md:text-5xl text-foreground", children: "Técnicas" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-3 h-px w-full max-w-md bg-foreground/30" })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-8 flex flex-wrap gap-3", children: filtros.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        type: "button",
        onClick: () => setFiltro(item),
        className: `rounded-full border px-5 py-2 text-xs font-semibold uppercase tracking-[0.16em] transition-all duration-300 ${filtro === item ? "border-brand-brown-deep bg-brand-brown-deep text-white shadow-gold" : "border-brand-gold/50 bg-brand-cream text-brand-brown-deep hover:-translate-y-0.5 hover:border-brand-gold hover:bg-white"}`,
        children: item
      },
      item
    )) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-hidden", ref: emblaRef, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-6 -ml-2 pl-2 py-4", children: tecnicasFiltradas.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        "article",
        {
          className: "group relative flex-[0_0_85%] sm:flex-[0_0_45%] md:flex-[0_0_32%] lg:flex-[0_0_24%] min-w-0",
          children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative h-full overflow-hidden rounded-2xl border-2 border-brand-gold bg-white p-6 transition-all duration-300 hover:-translate-y-2 hover:rotate-[1deg] hover:shadow-gold", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-br from-brand-cream via-white to-brand-gold/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "pointer-events-none absolute -top-px -left-px size-6 border-l-2 border-t-2 border-brand-gold rounded-tl-2xl" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "pointer-events-none absolute -bottom-px -right-px size-6 border-r-2 border-b-2 border-brand-gold rounded-br-2xl" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-4 flex justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-flex size-10 items-center justify-center rounded-full bg-brand-gold-soft text-brand-brown-deep transition-transform duration-300 group-hover:scale-110", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "size-4" }) }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-center font-serif text-xl text-foreground", children: t.nome }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto mt-2 h-px w-16 bg-brand-gold" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("dl", { className: "mt-6 space-y-3 text-sm text-foreground/85", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center text-lg font-semibold text-brand-brown-deep", children: t.preco }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "mt-0.5 size-4 text-brand-gold" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("dt", { className: "inline", children: "Duração: " }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("dd", { className: "inline", children: t.duracao })
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("dt", { className: "inline font-medium", children: "Manutenção: " }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("dd", { className: "inline", children: t.manutencao })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "a",
                {
                  href: `#agendamento`,
                  onClick: () => sessionStorage.setItem("procedimento", t.nome),
                  className: "mt-6 inline-flex w-full justify-center rounded-full border border-brand-gold bg-white/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-brand-brown-deep transition-all duration-300 hover:bg-brand-brown-deep hover:text-white",
                  children: "Quero agendar"
                }
              )
            ] })
          ] })
        },
        t.nome
      )) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          type: "button",
          "aria-label": "Anterior",
          onClick: () => emblaApi?.scrollPrev(),
          className: "hidden md:flex absolute -left-4 top-1/2 -translate-y-1/2 size-10 items-center justify-center rounded-full bg-white border border-brand-gold text-brand-brown-deep shadow-sm hover:bg-brand-cream transition",
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronLeft, { className: "size-5" })
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          type: "button",
          "aria-label": "Próximo",
          onClick: () => emblaApi?.scrollNext(),
          className: "hidden md:flex absolute -right-4 top-1/2 -translate-y-1/2 size-10 items-center justify-center rounded-full bg-white border border-brand-gold text-brand-brown-deep shadow-sm hover:bg-brand-cream transition",
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "size-5" })
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8 flex justify-center gap-2", children: snaps.map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        "aria-label": `Ir para slide ${i + 1}`,
        onClick: () => emblaApi?.scrollTo(i),
        className: `size-2.5 rounded-full transition-all ${i === selected ? "bg-brand-brown-deep scale-125" : "bg-foreground/25"}`
      },
      i
    )) })
  ] }) });
}
const nails1 = "/assets/nail1-DCFnzDrm.jpeg";
const nails3 = "/assets/nail3-DAR7PHPP.jpeg";
const nails4 = "/assets/nail4-q_RJma07.jpeg";
const nails5 = "/assets/nail5-CEdeOixB.jpeg";
const nails6 = "/assets/nail6-DffiURta.jpeg";
const nails7 = "/assets/nail7-C6u-pnGy.jpeg";
const nails8 = "/assets/nail8-CGv0fq9R.jpeg";
const nails9 = "/assets/nail9-CTK7UOuE.jpeg";
const items = [
  { src: nails1, className: "col-span-3 row-span-3 col-start-1 row-start-1 rotate-[-3deg]", dimmed: false },
  { src: nails9, className: "col-span-3 row-span-3 col-start-3 row-start-1 rotate-[2deg]", dimmed: true },
  { src: nails3, className: "col-span-4 row-span-4 col-start-5 row-start-2 rotate-[1deg]", dimmed: false },
  { src: nails4, className: "col-span-3 row-span-3 col-start-2 row-start-4 rotate-[-2deg]", dimmed: true },
  { src: nails5, className: "col-span-3 row-span-3 col-start-9 row-start-1 rotate-[3deg]", dimmed: true },
  { src: nails6, className: "col-span-3 row-span-3 col-start-9 row-start-4 rotate-[-2deg]", dimmed: false },
  { src: nails7, className: "col-span-3 row-span-3 col-start-1 row-start-7 rotate-[2deg]", dimmed: true },
  { src: nails8, className: "col-span-3 row-span-3 col-start-5 row-start-6 rotate-[-1deg]", dimmed: false },
  { src: nails9, className: "col-span-3 row-span-3 col-start-9 row-start-7 rotate-[2deg]", dimmed: true }
];
function Inspiracoes() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "inspiracoes", className: "bg-brand-brown text-white", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4 py-16 md:py-24", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-serif text-4xl md:text-5xl", children: "Inspirações" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-3 h-px w-full max-w-md bg-white/60" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-12 grid grid-cols-11 auto-rows-[70px] md:auto-rows-[90px] gap-3", children: items.map((it, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "figure",
      {
        className: `group relative overflow-hidden rounded-lg shadow-lg cursor-pointer ${it.className}`,
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              src: it.src,
              alt: "Trabalho de unhas Izabeli",
              loading: "lazy",
              className: `size-full object-cover transition-all duration-500 ease-out group-hover:scale-110 group-hover:saturate-150 group-hover:brightness-110 ${it.dimmed ? "saturate-0 brightness-90 opacity-70" : "saturate-100"} group-hover:opacity-100`
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute inset-0 ring-0 ring-brand-gold transition-all duration-300 group-hover:ring-2 group-hover:shadow-gold rounded-lg" })
        ]
      },
      i
    )) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10 h-px w-full max-w-md ml-auto bg-white/60" })
  ] }) });
}
const espaco1 = "/assets/Espaco1-B_0sdMrx.jpeg";
const espaco2 = "/assets/Espaco2-mwNe5RBb.jpeg";
const espaco3 = "/assets/Espaco3-OXUpiz34.jpeg";
const espaco4 = "/assets/Espaco4-CcDQILO3.jpeg";
const espaco5 = "/assets/Espaco5-DVw0W6vE.jpeg";
const espaco6 = "/assets/Espaco6-B_jrCv4h.jpeg";
function Espaco() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "espaco", className: "relative bg-brand-cream overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -left-24 top-0 size-72 rounded-full bg-brand-gold/20 blur-3xl" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -right-24 bottom-0 size-72 rounded-full bg-brand-brown/10 blur-3xl" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container relative mx-auto px-4 py-16 md:py-24", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "inline-flex items-center gap-2 rounded-full bg-white/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-brand-brown-deep shadow-sm mb-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "size-1.5 rounded-full bg-brand-gold inline-block" }),
            "Ambiente exclusivo"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-serif text-4xl md:text-5xl text-foreground", children: "Nosso Espaço" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 h-px w-48 bg-brand-gold/60" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "max-w-sm text-sm leading-relaxed text-foreground/65 md:text-right", children: "Um ambiente pensado para você se sentir à vontade, confortável e especial do início ao fim do atendimento." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 md:grid-cols-3 grid-rows-[auto] gap-3 md:gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "group relative col-span-1 row-span-2 overflow-hidden rounded-3xl shadow-soft", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              src: espaco1,
              alt: "Espaço Izabeli Nails",
              loading: "lazy",
              className: "size-full object-cover transition-all duration-700 group-hover:scale-105 group-hover:brightness-110 saturate-90 group-hover:saturate-110",
              style: { minHeight: "320px" }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-brand-brown-deep/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 ring-0 ring-brand-gold/60 group-hover:ring-2 transition-all duration-300 rounded-3xl" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "group relative overflow-hidden rounded-3xl shadow-soft", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              src: espaco2,
              alt: "Espaço Izabeli Nails",
              loading: "lazy",
              className: "size-full object-cover aspect-[4/3] transition-all duration-700 group-hover:scale-105 group-hover:brightness-110 saturate-90 group-hover:saturate-110"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-brand-brown-deep/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 ring-0 ring-brand-gold/60 group-hover:ring-2 transition-all duration-300 rounded-3xl" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "group relative overflow-hidden rounded-3xl shadow-soft", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              src: espaco3,
              alt: "Espaço Izabeli Nails",
              loading: "lazy",
              className: "size-full object-cover aspect-[4/3] transition-all duration-700 group-hover:scale-105 group-hover:brightness-110 saturate-90 group-hover:saturate-110"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-brand-brown-deep/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 ring-0 ring-brand-gold/60 group-hover:ring-2 transition-all duration-300 rounded-3xl" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "group relative overflow-hidden rounded-3xl shadow-soft", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              src: espaco4,
              alt: "Espaço Izabeli Nails",
              loading: "lazy",
              className: "size-full object-cover aspect-[4/3] transition-all duration-700 group-hover:scale-105 group-hover:brightness-110 saturate-90 group-hover:saturate-110"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-brand-brown-deep/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 ring-0 ring-brand-gold/60 group-hover:ring-2 transition-all duration-300 rounded-3xl" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "group relative col-span-2 md:col-span-1 overflow-hidden rounded-3xl shadow-soft", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              src: espaco5,
              alt: "Espaço Izabeli Nails",
              loading: "lazy",
              className: "size-full object-cover aspect-[16/7] md:aspect-[4/3] transition-all duration-700 group-hover:scale-105 group-hover:brightness-110 saturate-90 group-hover:saturate-110"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-brand-brown-deep/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 ring-0 ring-brand-gold/60 group-hover:ring-2 transition-all duration-300 rounded-3xl" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "group relative col-span-2 md:col-span-3 overflow-hidden rounded-3xl shadow-soft", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              src: espaco6,
              alt: "Espaço Izabeli Nails",
              loading: "lazy",
              className: "w-full object-cover aspect-[21/7] transition-all duration-700 group-hover:scale-105 group-hover:brightness-110 saturate-90 group-hover:saturate-110"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-brand-brown-deep/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded-full bg-white/20 backdrop-blur-sm border border-white/40 px-6 py-2 text-white text-sm font-semibold tracking-widest uppercase", children: "Izabeli Nails • Barueri" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 ring-0 ring-brand-gold/60 group-hover:ring-2 transition-all duration-300 rounded-3xl" })
        ] })
      ] })
    ] })
  ] });
}
const feedbacks = [
  {
    nome: "Camila Montanari",
    handle: "@camimontanari",
    texto: "Queria deixar registrado aqui o quanto eu sou apaixonada no seu trabalho Iza!! Ir fazer a unha é sempre meu dia favorito do mês. Obrigada por cuidar das minhas unhas com tanto capricho e carinho. Recomendo seu trabalho pra todas as minhas amigas de coração 💖",
    iniciais: "CM"
  },
  {
    nome: "Debora Moura",
    handle: "@deboramoura",
    texto: "O que falar dessa Nails? Que é a melhor?Seria piegas, porém não é só sobre uma manicure perfeita, é muito mais. É elevar sua autoestima, é sobre acolhimento, saber que além de sair com as unhas lindas, você sai leve, pronta pra receber muitos elogios.Não troco e não me arrisco a ir em outro lugar, já tenho minha preferida!",
    iniciais: "DM"
  },
  {
    nome: "Barbara",
    handle: "@barbara",
    texto: "Iza!! Passando para agradecer todo o carinho e o cuidado que você tem não só com nossas unhas, mas com a gente como pessoas. Você sabe que o milagre que você fez na minha unha me arranjou até um namorado hahaha.Não é todo mundo que topa fazer os desenhos que eu geralmente escolho, mas você topa e faz ainda melhor do que eu imaginava.Obrigada de verdade pelo que você faz pela nossa autoestima. A gente sempre sai da sua cadeira maravilhada com o que você faz. ❤️",
    iniciais: "BA"
  }
];
const palette = ["bg-brand-brown", "bg-brand-brown-deep", "bg-brand-gold"];
function Feedbacks() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "feedbacks", className: "bg-white", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4 py-16 md:py-24", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-serif text-4xl md:text-5xl text-foreground", children: "Feedbacks" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-3 h-px w-full max-w-md bg-brand-gold" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-12 grid md:grid-cols-3 gap-8", children: feedbacks.map((f, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "article",
      {
        className: "group relative pt-6",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative rounded-2xl bg-white border border-brand-gold/40 p-7 pb-10 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-gold", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Quote, { className: "size-8 text-brand-gold/70" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-4 text-foreground/85 leading-relaxed italic", children: [
              '"',
              f.texto,
              '"'
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-5 flex items-center gap-0.5 text-brand-gold", children: Array.from({ length: 5 }).map((_, s) => /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "size-4 fill-current" }, s)) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute -bottom-3 right-10 size-6 rotate-45 bg-white border-r border-b border-brand-gold/40" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex items-center gap-3 pl-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: `flex size-12 items-center justify-center rounded-full text-white font-serif text-lg shadow-md ${palette[i % palette.length]}`,
                children: f.iniciais
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-medium text-foreground", children: f.nome }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-foreground/60", children: f.handle })
            ] })
          ] })
        ]
      },
      f.nome
    )) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-12 h-px w-full max-w-md ml-auto bg-brand-gold" })
  ] }) });
}
const supabase = createClient(
  "https://msqriuvzpixjjrhuqifb.supabase.co",
  "sb_publishable_EUqQjxVU0__VY1GdHP5W3A_9491tpx_"
);
const CALENDAR_ID = "d37a20d8a576cb4b734b65708c3ad1be49159f2ed14c468f6ffa1b9fbda1ef45@group.calendar.google.com";
const API_KEY = "AIzaSyDv3mrRzqfB-MGevAfVDMc10SssEOYl9Ac";
const DURACOES_MAP = {
  "Banho de Gel": { "Primeira vez": 90, "Manutenção": 120 },
  "Fibra de Vidro": { "Primeira vez": 200, "Manutenção": 100 },
  "Molde F1": { "Primeira vez": 90, "Manutenção": 90 },
  "Mão Esmaltação em Gel": { "Primeira vez": 70, "Manutenção": 70 },
  "Pé Esmaltação em Gel": { "Primeira vez": 70, "Manutenção": 70 },
  "Mão Comum": { "Primeira vez": 30, "Manutenção": 30 },
  "Pé Comum": { "Primeira vez": 40, "Manutenção": 40 },
  "Mão + Pé Comum": { "Primeira vez": 70, "Manutenção": 70 },
  "Plástica dos Pés": { "Primeira vez": 90, "Manutenção": 90 }
};
const PROCEDIMENTOS = {
  "Banho de Gel": { duracao: DURACOES_MAP["Banho de Gel"], preco: { "Primeira vez": 150, "Manutenção": 120 } },
  "Fibra de Vidro": { duracao: DURACOES_MAP["Fibra de Vidro"], preco: { "Primeira vez": 200, "Manutenção": 150 } },
  "Molde F1": { duracao: DURACOES_MAP["Molde F1"], preco: { "Primeira vez": 180, "Manutenção": 140 } },
  "Mão Esmaltação em Gel": { duracao: DURACOES_MAP["Mão Esmaltação em Gel"], preco: { "Primeira vez": 100, "Manutenção": 100 } },
  "Pé Esmaltação em Gel": { duracao: DURACOES_MAP["Pé Esmaltação em Gel"], preco: { "Primeira vez": 100, "Manutenção": 100 } },
  "Mão Comum": { duracao: DURACOES_MAP["Mão Comum"], preco: { "Primeira vez": 35, "Manutenção": 35 } },
  "Pé Comum": { duracao: DURACOES_MAP["Pé Comum"], preco: { "Primeira vez": 40, "Manutenção": 40 } },
  "Mão + Pé Comum": { duracao: DURACOES_MAP["Mão + Pé Comum"], preco: { "Primeira vez": 70, "Manutenção": 70 } },
  "Plástica dos Pés": { duracao: DURACOES_MAP["Plástica dos Pés"] }
};
const procedimentos = Object.keys(PROCEDIMENTOS);
const HORARIOS = [
  "09:00",
  "09:30",
  "10:00",
  "10:30",
  "11:00",
  "11:30",
  "13:00",
  "13:30",
  "14:00",
  "14:30",
  "15:00",
  "15:30",
  "16:00",
  "16:30",
  "17:00",
  "17:30",
  "18:00",
  "18:30"
];
function toMin(h) {
  const [hh, mm] = h.split(":").map(Number);
  return hh * 60 + mm;
}
function horariosDisponiveis(intervalos, duracaoMin) {
  const FIM_EXPEDIENTE = toMin("19:00");
  return HORARIOS.filter((h) => {
    const inicioMin = toMin(h);
    const fimMin = inicioMin + duracaoMin;
    if (fimMin > FIM_EXPEDIENTE) return false;
    return !intervalos.some((iv) => inicioMin < iv.fim && fimMin > iv.inicio);
  });
}
function intervalosDoGcal(events, dia) {
  return events.filter((ev) => {
    const start = new Date(ev.start?.dateTime ?? ev.start?.date);
    return start.toLocaleDateString("pt-BR", { timeZone: "America/Sao_Paulo" }).split("/").reverse().join("-") === dia;
  }).map((ev) => {
    const startLocal = new Date(new Date(ev.start.dateTime).toLocaleString("en-US", { timeZone: "America/Sao_Paulo" }));
    const endLocal = new Date(new Date(ev.end.dateTime).toLocaleString("en-US", { timeZone: "America/Sao_Paulo" }));
    return {
      inicio: startLocal.getHours() * 60 + startLocal.getMinutes(),
      fim: endLocal.getHours() * 60 + endLocal.getMinutes()
    };
  });
}
function formatDate(date) {
  return date.toLocaleDateString("pt-BR", { timeZone: "America/Sao_Paulo" }).split("/").reverse().join("-");
}
function Calendar({
  selected,
  onSelect,
  ocupadosPorDia
}) {
  const today = /* @__PURE__ */ new Date();
  today.setHours(0, 0, 0, 0);
  const [view, setView] = reactExports.useState(new Date(today.getFullYear(), today.getMonth(), 1));
  const year = view.getFullYear();
  const month = view.getMonth();
  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const monthLabel = view.toLocaleDateString("pt-BR", { month: "long", year: "numeric" });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-brand-gold/40 bg-brand-cream/60 p-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: () => setView(new Date(year, month - 1, 1)), className: "p-1 hover:text-brand-brown transition-colors", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronLeft, { className: "size-4" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-semibold capitalize text-brand-brown-deep", children: monthLabel }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: () => setView(new Date(year, month + 1, 1)), className: "p-1 hover:text-brand-brown transition-colors", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "size-4" }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-7 text-center text-xs text-foreground/50 mb-1", children: ["D", "S", "T", "Q", "Q", "S", "S"].map((d, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: d }, i)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-7 text-center text-sm gap-y-1", children: [
      Array.from({ length: firstDay }).map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", {}, `e-${i}`)),
      Array.from({ length: daysInMonth }).map((_, i) => {
        const date = new Date(year, month, i + 1);
        const key = formatDate(date);
        const isPast = date < today;
        const isSunday = date.getDay() === 0;
        const isSelected = key === selected;
        const intervalos = ocupadosPorDia[key] ?? [];
        const allBlocked = horariosDisponiveis(intervalos, 30).length === 0;
        const disabled = isPast || isSunday || allBlocked;
        return /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            disabled,
            onClick: () => onSelect(key),
            className: `mx-auto flex size-8 items-center justify-center rounded-full text-xs transition-all ${isSelected ? "bg-brand-brown-deep text-white font-semibold" : disabled ? "text-foreground/25 cursor-not-allowed" : "hover:bg-brand-gold/30 text-foreground cursor-pointer"}`,
            children: i + 1
          },
          key
        );
      })
    ] })
  ] });
}
function Agendamento() {
  const [form, setForm] = reactExports.useState({
    nome: "",
    telefone: "",
    procedimento: procedimentos[0],
    tipo: "Primeira vez",
    data: "",
    horario: "",
    observacoes: ""
  });
  reactExports.useEffect(() => {
    const el = document.getElementById("agendamento");
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const saved = sessionStorage.getItem("procedimento");
          if (saved) {
            setForm((prev) => ({ ...prev, procedimento: saved }));
            sessionStorage.removeItem("procedimento");
          }
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  const [events, setEvents] = reactExports.useState([]);
  const [intervalosSupabase, setIntervalosSupabase] = reactExports.useState({});
  const [loadingEvents, setLoadingEvents] = reactExports.useState(true);
  reactExports.useEffect(() => {
    const now = /* @__PURE__ */ new Date();
    const future = /* @__PURE__ */ new Date();
    future.setMonth(future.getMonth() + 2);
    const fetchSupabase = async () => {
      const { data } = await supabase.from("agendamentos").select("data, horario, duracao").gte("data", formatDate(now)).lte("data", formatDate(future));
      const map = {};
      (data ?? []).forEach((row) => {
        if (!map[row.data]) map[row.data] = [];
        map[row.data].push({ inicio: toMin(row.horario), fim: toMin(row.horario) + (row.duracao ?? 60) });
      });
      setIntervalosSupabase(map);
      setLoadingEvents(false);
    };
    fetchSupabase();
    const calendarUrl = `https://www.googleapis.com/calendar/v3/calendars/${encodeURIComponent(CALENDAR_ID)}/events?key=${API_KEY}&timeMin=${now.toISOString()}&timeMax=${future.toISOString()}&singleEvents=true&orderBy=startTime`;
    fetch(calendarUrl).then((r) => r.json()).then((data) => setEvents(data.items ?? [])).catch(() => setEvents([]));
  }, []);
  const intervalosMesclados = { ...intervalosSupabase };
  events.forEach((ev) => {
    const start = new Date(ev.start?.dateTime ?? ev.start?.date);
    const dia = formatDate(start);
    const ivGcal = intervalosDoGcal(events, dia);
    if (!intervalosMesclados[dia]) intervalosMesclados[dia] = [];
    ivGcal.forEach((iv) => {
      if (!intervalosMesclados[dia].some((x) => x.inicio === iv.inicio && x.fim === iv.fim))
        intervalosMesclados[dia].push(iv);
    });
  });
  const update = (field, value) => setForm((current) => ({ ...current, [field]: value }));
  const tipo = form.tipo;
  const duracao = PROCEDIMENTOS[form.procedimento]?.duracao[tipo] ?? 60;
  const preco = PROCEDIMENTOS[form.procedimento]?.preco?.[tipo];
  const intervalosNoDia = form.data ? intervalosMesclados[form.data] ?? [] : [];
  const horariosDodia = horariosDisponiveis(intervalosNoDia, duracao);
  const handleSubmit = async (event) => {
    event.preventDefault();
    const dataFormatada = form.data ? (/* @__PURE__ */ new Date(form.data + "T12:00:00")).toLocaleDateString("pt-BR") : "";
    await supabase.from("agendamentos").insert({
      nome: form.nome,
      telefone: form.telefone,
      procedimento: form.procedimento,
      data: form.data,
      horario: form.horario,
      duracao,
      observacoes: form.observacoes
    });
    fetch("https://msqriuvzpixjjrhuqifb.supabase.co/functions/v1/criar-evento-calendar", {
      method: "POST",
      keepalive: true,
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${"sb_publishable_EUqQjxVU0__VY1GdHP5W3A_9491tpx_"}`
      },
      body: JSON.stringify({
        nome: form.nome,
        telefone: form.telefone,
        procedimento: `${form.procedimento} (${form.tipo})`,
        data: form.data,
        horario: form.horario,
        duracao,
        observacoes: form.observacoes
      })
    });
    setIntervalosSupabase((prev) => {
      const novos = { ...prev };
      if (!novos[form.data]) novos[form.data] = [];
      novos[form.data].push({ inicio: toMin(form.horario), fim: toMin(form.horario) + duracao });
      return novos;
    });
    update("horario", "");
    const precoLinha = preco !== void 0 ? `
💰 *Valor:* R$ ${preco},00` : "";
    const mensagem = `Olá Izabeli! Gostaria de agendar um horário.

📋 *Procedimento:* ${form.procedimento}
✨ *Tipo:* ${form.tipo}${precoLinha}
📅 *Data:* ${dataFormatada}
🕐 *Horário:* ${form.horario}
👤 *Nome:* ${form.nome}
📱 *Telefone:* ${form.telefone}${form.observacoes ? `
📝 *Observações:* ${form.observacoes}` : ""}`;
    window.open(
      `https://wa.me/5511932792798?text=${encodeURIComponent(mensagem)}`,
      "_blank",
      "noopener,noreferrer"
    );
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "agendamento", className: "relative overflow-hidden bg-brand-cream", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -left-20 top-10 size-56 rounded-full bg-brand-gold/20 blur-3xl" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -right-20 bottom-10 size-72 rounded-full bg-brand-brown/15 blur-3xl" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container relative mx-auto grid gap-10 px-4 py-16 md:grid-cols-[0.9fr_1.1fr] md:items-center md:py-24", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mb-3 inline-flex items-center gap-2 rounded-full bg-white/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-brand-brown-deep shadow-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "size-3.5 text-brand-gold" }),
          "Atendimento com horário marcado"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-serif text-4xl text-foreground md:text-5xl", children: "Agende seu horário" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 h-px w-64 bg-foreground/30" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 max-w-md text-sm leading-relaxed text-foreground/75", children: "Escolha o dia e horário disponível e envie direto pelo WhatsApp. Rápido e fácil!" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8 rounded-3xl border border-brand-gold/40 bg-white/65 p-5 shadow-soft backdrop-blur-md", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 text-brand-brown-deep", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-flex size-11 items-center justify-center rounded-full bg-brand-gold-soft", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CalendarDays, { className: "size-5" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold", children: "Barueri - SP" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-foreground/65", children: "Domingos não são atendidos." })
          ] })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleSubmit, className: "rounded-3xl border border-brand-gold/50 bg-white p-6 shadow-soft md:p-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-4 sm:grid-cols-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "space-y-2 text-sm font-medium text-brand-brown-deep", children: [
            "Nome",
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                value: form.nome,
                onChange: (e) => update("nome", e.target.value),
                placeholder: "Seu nome",
                required: true,
                className: "w-full rounded-2xl border border-brand-gold/40 bg-brand-cream/60 px-4 py-3 text-sm outline-none transition focus:border-brand-gold focus:bg-white"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "space-y-2 text-sm font-medium text-brand-brown-deep", children: [
            "Telefone",
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                value: form.telefone,
                onChange: (e) => {
                  const digits = e.target.value.replace(/\D/g, "").slice(0, 11);
                  const fmt = digits.replace(/^(\d{2})(\d)/, "($1) $2").replace(/(\d{5})(\d{1,4})$/, "$1-$2");
                  update("telefone", fmt);
                },
                placeholder: "(11) 00000-0000",
                required: true,
                minLength: 14,
                maxLength: 15,
                className: "w-full rounded-2xl border border-brand-gold/40 bg-brand-cream/60 px-4 py-3 text-sm outline-none transition focus:border-brand-gold focus:bg-white"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "space-y-2 text-sm font-medium text-brand-brown-deep sm:col-span-2", children: [
            "Procedimento",
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "select",
              {
                value: form.procedimento,
                onChange: (e) => {
                  update("procedimento", e.target.value);
                  update("horario", "");
                },
                className: "w-full rounded-2xl border border-brand-gold/40 bg-brand-cream/60 px-4 py-3 text-sm outline-none transition focus:border-brand-gold focus:bg-white",
                children: procedimentos.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: item }, item))
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2 text-sm font-medium text-brand-brown-deep sm:col-span-2", children: [
            "Tipo de atendimento",
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-3", children: ["Primeira vez", "Manutenção"].map((t) => {
              const p = PROCEDIMENTOS[form.procedimento]?.preco?.[t];
              return /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "button",
                {
                  type: "button",
                  onClick: () => {
                    update("tipo", t);
                    update("horario", "");
                  },
                  className: `flex-1 rounded-2xl border py-3 px-2 text-sm font-medium transition-all ${form.tipo === t ? "bg-brand-brown-deep text-white border-brand-brown-deep" : "bg-brand-cream/60 border-brand-gold/40 text-brand-brown-deep hover:bg-brand-gold/20"}`,
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: t === "Primeira vez" ? "✨ Primeira vez" : "🔄 Manutenção" }),
                    p !== void 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: `block text-xs mt-0.5 ${form.tipo === t ? "text-white/80" : "text-brand-brown"}`, children: [
                      "R$ ",
                      p,
                      ",00"
                    ] })
                  ]
                },
                t
              );
            }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2 text-sm font-medium text-brand-brown-deep sm:col-span-2", children: [
            "Escolha o dia",
            loadingEvents ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-2xl border border-brand-gold/40 bg-brand-cream/60 p-6 text-center text-sm text-foreground/50", children: "Carregando disponibilidade..." }) : /* @__PURE__ */ jsxRuntimeExports.jsx(
              Calendar,
              {
                selected: form.data,
                onSelect: (d) => {
                  update("data", d);
                  update("horario", "");
                },
                ocupadosPorDia: intervalosMesclados
              }
            )
          ] }),
          form.data && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2 text-sm font-medium text-brand-brown-deep sm:col-span-2", children: [
            "Horários disponíveis",
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-4 gap-2", children: horariosDodia.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "col-span-4 text-center text-xs text-foreground/50 py-2", children: "Nenhum horário disponível para este procedimento neste dia." }) : horariosDodia.map((h) => {
              const selecionado = form.horario === h;
              return /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  onClick: () => update("horario", h),
                  className: `rounded-xl py-2 text-xs font-medium transition-all ${selecionado ? "bg-brand-brown-deep text-white" : "bg-brand-cream border border-brand-gold/40 hover:bg-brand-gold/20 text-brand-brown-deep"}`,
                  children: h
                },
                h
              );
            }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "space-y-2 text-sm font-medium text-brand-brown-deep sm:col-span-2", children: [
            "Observações",
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "textarea",
              {
                value: form.observacoes,
                onChange: (e) => update("observacoes", e.target.value),
                placeholder: "Ex: tenho preferência por tal técnica, quero tirar dúvida, etc.",
                rows: 3,
                className: "w-full resize-none rounded-2xl border border-brand-gold/40 bg-brand-cream/60 px-4 py-3 text-sm outline-none transition focus:border-brand-gold focus:bg-white"
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            type: "submit",
            disabled: !form.data || !form.horario,
            className: "mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand-brown-deep px-6 py-3.5 text-sm font-semibold uppercase tracking-[0.18em] text-white shadow-gold transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-brown disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:translate-y-0",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "size-4" }),
              "Agendar no WhatsApp"
            ]
          }
        )
      ] })
    ] })
  ] });
}
function Localizacao() {
  const address = "Rua Vitória, 216 - Vila São Jorge, Barueri - SP, 06402-030";
  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(address)}&output=embed`;
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "localizacao", className: "bg-brand-brown text-white", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4 py-16 md:py-24", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-serif text-4xl md:text-5xl", children: "Localização" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-3 h-px w-full max-w-md bg-white/60" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-12 grid md:grid-cols-2 gap-10 items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-hidden rounded-xl shadow-soft ring-1 ring-white/20", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        "iframe",
        {
          title: "Localização Izabeli Nails",
          src: mapSrc,
          width: "100%",
          height: "380",
          loading: "lazy",
          referrerPolicy: "no-referrer-when-downgrade",
          className: "w-full h-[380px] border-0"
        }
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-6 text-base md:text-lg", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mt-1 inline-flex size-9 shrink-0 items-center justify-center rounded-full bg-white/15", children: /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "size-5" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-light leading-relaxed", children: [
            "Rua Vitória, 216 - Vila São Jorge",
            /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
            "Barueri - SP, 06402-030"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "a",
          {
            href: "https://wa.me/5511930443624",
            target: "_blank",
            rel: "noreferrer",
            className: "group flex items-center gap-4 hover:text-brand-gold-soft transition-colors",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-flex size-9 shrink-0 items-center justify-center rounded-full bg-white/15 group-hover:bg-brand-gold/30 transition", children: /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "size-5" }) }),
              "(11) 93044-3624"
            ]
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "a",
          {
            href: "https://instagram.com/izabelinails_",
            target: "_blank",
            rel: "noreferrer",
            className: "group flex items-center gap-4 hover:text-brand-gold-soft transition-colors",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-flex size-9 shrink-0 items-center justify-center rounded-full bg-white/15 group-hover:bg-brand-gold/30 transition", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Instagram, { className: "size-5" }) }),
              "izabelinails_"
            ]
          }
        ) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-14 h-px w-full max-w-md ml-auto bg-white/60" })
  ] }) });
}
const navLinks = [
  { href: "#sobre", label: "Sobre mim" },
  { href: "#tecnicas", label: "Técnicas" },
  { href: "#inspiracoes", label: "Inspirações" },
  { href: "#agendamento", label: "Agendamento" },
  { href: "#localizacao", label: "Localização" }
];
function Footer() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("footer", { className: "bg-brand-brown-deep text-white/80 text-sm", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4 py-10 flex flex-col md:flex-row items-center justify-between gap-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#top", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: logo, alt: "Izabeli Nails", className: "h-35 w-auto" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { className: "flex flex-wrap justify-center gap-x-6 gap-y-2", children: navLinks.map((l) => /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: l.href, className: "hover:text-white transition-colors", children: l.label }, l.href)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center md:items-end gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "a",
          {
            href: "https://instagram.com/izabelinails_",
            target: "_blank",
            rel: "noreferrer",
            className: "flex items-center gap-1.5 hover:text-white transition-colors",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Instagram, { className: "size-4" }),
              " izabelinails_"
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "https://wa.me/5511930443624", className: "flex items-center gap-1.5 hover:text-white transition-colors", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", className: "size-4", viewBox: "0 0 24 24", fill: "currentColor", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.118 1.528 5.845L.057 23.571a.75.75 0 0 0 .922.899l5.934-1.54A11.945 11.945 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75a9.726 9.726 0 0 1-4.989-1.377l-.356-.214-3.696.96.99-3.594-.232-.37A9.713 9.713 0 0 1 2.25 12C2.25 6.615 6.615 2.25 12 2.25S21.75 6.615 21.75 12 17.385 21.75 12 21.75z" })
          ] }),
          "(11) 93044-3624"
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-t border-white/10 text-center py-4 text-xs text-white/40", children: [
      "© ",
      (/* @__PURE__ */ new Date()).getFullYear(),
      " Nikki Goulart — Designer. Todos os direitos reservados."
    ] })
  ] });
}
function Index() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Header, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Hero, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(About, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Tecnicas, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Inspiracoes, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Espaco, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Feedbacks, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Agendamento, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Localizacao, {})
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://wa.me/5511930443624", target: "_blank", rel: "noreferrer", "aria-label": "Falar pelo WhatsApp", className: "fixed bottom-6 right-6 z-50 flex items-center justify-center size-14 rounded-full bg-[#25D366] shadow-lg hover:scale-110 transition-transform duration-300", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", className: "size-7", viewBox: "0 0 24 24", fill: "white", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.118 1.528 5.845L.057 23.571a.75.75 0 0 0 .922.899l5.934-1.54A11.945 11.945 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75a9.726 9.726 0 0 1-4.989-1.377l-.356-.214-3.696.96.99-3.594-.232-.37A9.713 9.713 0 0 1 2.25 12C2.25 6.615 6.615 2.25 12 2.25S21.75 6.615 21.75 12 17.385 21.75 12 21.75z" })
    ] }) })
  ] });
}
export {
  Index as component
};
