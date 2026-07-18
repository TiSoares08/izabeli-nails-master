import logo from "@/assets/logo.png";
import { Instagram, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const navLinks = [
  { href: "#sobre", label: "Sobre mim" },
  { href: "#tecnicas", label: "Técnicas" },
  { href: "#inspiracoes", label: "Inspirações" },
  { href: "#agendamento", label: "Agendamento" },
  { href: "#localizacao", label: "Localização" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50">
      <div className="bg-brand-brown-deep text-white/90 text-xs">
        <div className="container mx-auto flex items-center justify-between px-4 py-1.5">
          <span className="font-serif tracking-wide">Izabeli Silva</span>
          <div className="flex items-center gap-4">
            <a href="https://wa.me/5511930443624" className="hover:text-white transition-colors">
              (11) 93044-3624
            </a>
            <a
              href="https://instagram.com/izabelinails_"
              target="_blank"
              rel="noreferrer"
              className="hidden sm:flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Instagram className="size-3.5" /> izabelinails_
            </a>
          </div>
        </div>
      </div>

      <div
        className={`transition-all duration-300 ${
          scrolled
            ? "bg-brand-brown/90 backdrop-blur-xl shadow-soft"
            : "bg-brand-brown text-white"
        }`}
      >
        <div className="container mx-auto flex items-center justify-between gap-4 px-4 py-3 md:py-2">
          <a href="#top" className="flex items-center justify-center">
            <img src={logo} alt="Izabeli Silva Nail Designer" className="h-16 md:h-20 w-auto" />
            <span className="sr-only">Izabeli Silva — Nail Designer</span>
          </a>

          <nav className="hidden lg:flex items-center justify-center gap-8 text-sm tracking-wide text-white">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="group relative py-2 hover:text-brand-gold-soft transition-colors"
              >
                {l.label}
                <span className="absolute bottom-0 left-1/2 h-px w-0 -translate-x-1/2 bg-brand-gold-soft transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          <a
            href="#agendamento"
            className="hidden md:inline-flex rounded-full bg-brand-gold-soft px-5 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-brand-brown-deep shadow-gold transition-all duration-300 hover:-translate-y-0.5 hover:bg-white"
          >
            Agendar horário
          </a>

          <button
            type="button"
            className="lg:hidden text-white"
            aria-label="Abrir menu"
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>

        {open && (
          <div className="lg:hidden border-t border-white/10 bg-brand-brown-deep/95 backdrop-blur-xl">
            <nav className="container mx-auto flex flex-col px-4 py-4 gap-3 text-sm text-white">
              {navLinks.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="py-1 hover:text-brand-gold-soft transition-colors"
                >
                  {l.label}
                </a>
              ))}
              <a
                href="#agendamento"
                onClick={() => setOpen(false)}
                className="mt-2 inline-flex w-fit rounded-full bg-brand-gold-soft px-5 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-brand-brown-deep"
              >
                Agendar horário
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
