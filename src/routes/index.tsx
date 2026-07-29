import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Numeros } from "@/components/site/Numeros";
import { Tecnicas } from "@/components/site/Tecnicas";
import { Precos } from "@/components/site/Precos";
import { Inspiracoes } from "@/components/site/Inspiracoes";
import { Espaco } from "@/components/site/Espaco";
import { Feedbacks } from "@/components/site/Feedbacks";
import { FAQ } from "@/components/site/FAQ";
import { Curso } from "@/components/site/Curso";
import { Instagram } from "@/components/site/Instagram";
import { Agendamento } from "@/components/site/Agendamento";
import { Localizacao } from "@/components/site/Localizacao";
import { Footer } from "@/components/site/Footer";
import { CustomCursor } from "@/components/site/CustomCursor";
import { LoadingScreen } from "@/components/site/LoadingScreen";
import { BackToTop } from "@/components/site/BackToTop";
import { BannerUrgencia } from "@/components/site/BannerUrgencia";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Izabeli Nails — Nail Designer em Barueri" },
      { name: "description", content: "Alongamentos de unhas em Barueri com Izabeli Silva. Fibra de vidro, molde F1, banho de gel, esmaltação em gel e muito mais. Agende pelo WhatsApp." },
      { property: "og:title", content: "Izabeli Nails — Nail Designer em Barueri" },
      { property: "og:description", content: "Alongamentos de unhas em Barueri com Izabeli Silva. Fibra de vidro, molde F1, banho de gel e mais. Agende pelo WhatsApp." },
      { name: "twitter:title", content: "Izabeli Nails — Nail Designer em Barueri" },
      { name: "twitter:description", content: "Alongamentos de unhas em Barueri com Izabeli Silva. Fibra de vidro, molde F1, banho de gel e mais. Agende pelo WhatsApp." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background [cursor:none]">
      <BannerUrgencia />
      <LoadingScreen />
      <CustomCursor />
      <Header />
      <main>
        <Hero />
        <About />
        <Numeros />
        <Tecnicas />
        <Precos />
        <Inspiracoes />
        <Espaco />
        <Feedbacks />
        <Instagram />
        <FAQ />
        <Curso />
        <Agendamento />
        <Localizacao />
      </main>
      <Footer />

      <BackToTop />

      <a
        href="https://wa.me/5511930443624"
        target="_blank"
        rel="noreferrer"
        aria-label="Falar pelo WhatsApp"
        className="fixed bottom-6 right-6 z-50 flex items-center justify-center size-14 rounded-full bg-[#25D366] shadow-lg hover:scale-110 transition-transform duration-300"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="size-7" viewBox="0 0 24 24" fill="white">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
          <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.118 1.528 5.845L.057 23.571a.75.75 0 0 0 .922.899l5.934-1.54A11.945 11.945 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75a9.726 9.726 0 0 1-4.989-1.377l-.356-.214-3.696.96.99-3.594-.232-.37A9.713 9.713 0 0 1 2.25 12C2.25 6.615 6.615 2.25 12 2.25S21.75 6.615 21.75 12 17.385 21.75 12 21.75z"/>
        </svg>
      </a>
    </div>
  );
}
