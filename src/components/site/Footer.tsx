import logo from "@/assets/logo.png";
import { Instagram } from "lucide-react";

const navLinks = [
  { href: "#sobre", label: "Sobre mim" },
  { href: "#tecnicas", label: "Técnicas" },
  { href: "#inspiracoes", label: "Inspirações" },
  { href: "#agendamento", label: "Agendamento" },
  { href: "#localizacao", label: "Localização" },
];

export function Footer() {
  return (
    <footer className="bg-brand-brown-deep text-white/80 text-sm">
      <div className="container mx-auto px-4 py-10 flex flex-col md:flex-row items-center justify-between gap-8">
        <a href="#top">
          <img src={logo} alt="Izabeli Nails" className="h-35 w-auto" />
        </a>

        <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-white transition-colors">
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex flex-col items-center md:items-end gap-2">
          <a
            href="https://instagram.com/izabelinails_"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 hover:text-white transition-colors"
          >
            <Instagram className="size-4" /> izabelinails_
          </a>
          <a href="https://wa.me/5511930443624" className="flex items-center gap-1.5 hover:text-white transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="size-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.118 1.528 5.845L.057 23.571a.75.75 0 0 0 .922.899l5.934-1.54A11.945 11.945 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75a9.726 9.726 0 0 1-4.989-1.377l-.356-.214-3.696.96.99-3.594-.232-.37A9.713 9.713 0 0 1 2.25 12C2.25 6.615 6.615 2.25 12 2.25S21.75 6.615 21.75 12 17.385 21.75 12 21.75z"/>
            </svg>
            (11) 93044-3624
          </a>
        </div>
      </div>

      <div className="border-t border-white/10 text-center py-4 text-xs text-white/40">
        © {new Date().getFullYear()} Nikki Goulart — Designer. Todos os direitos reservados.
      </div>
    </footer>
  );
}
