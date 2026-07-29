import { CalendarDays, CalendarPlus, CheckCircle2, ChevronLeft, ChevronRight, MessageCircle, Sparkles } from "lucide-react";
import { Disponibilidade } from "@/components/site/Disponibilidade";
import { FormEvent, useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

const CALENDAR_ID = import.meta.env.VITE_GOOGLE_CALENDAR_ID as string;
const API_KEY = import.meta.env.VITE_GOOGLE_API_KEY as string;

// Duração em minutos por procedimento e tipo
const DURACOES_MAP: Record<string, { "Primeira vez": number; "Manutenção": number }> = {
  "Banho de Gel":          { "Primeira vez": 90,  "Manutenção": 120 },
  "Fibra de Vidro":        { "Primeira vez": 200, "Manutenção": 100 },
  "Molde F1":              { "Primeira vez": 90,  "Manutenção": 90  },
  "Mão Esmaltação em Gel": { "Primeira vez": 70,  "Manutenção": 70  },
  "Pé Esmaltação em Gel":  { "Primeira vez": 70,  "Manutenção": 70  },
  "Mão Comum":             { "Primeira vez": 30,  "Manutenção": 30  },
  "Pé Comum":              { "Primeira vez": 40,  "Manutenção": 40  },
  "Mão + Pé Comum":        { "Primeira vez": 70,  "Manutenção": 70  },
  "Plástica dos Pés":      { "Primeira vez": 90,  "Manutenção": 90  },
};

type TipoProcedimento = { "Primeira vez": number; "Manutenção": number };

const PROCEDIMENTOS: Record<string, { duracao: TipoProcedimento; preco?: { "Primeira vez"?: number; "Manutenção"?: number } }> = {
  "Banho de Gel":          { duracao: DURACOES_MAP["Banho de Gel"],          preco: { "Primeira vez": 150, "Manutenção": 120 } },
  "Fibra de Vidro":        { duracao: DURACOES_MAP["Fibra de Vidro"],        preco: { "Primeira vez": 200, "Manutenção": 150 } },
  "Molde F1":              { duracao: DURACOES_MAP["Molde F1"],              preco: { "Primeira vez": 180, "Manutenção": 140 } },
  "Mão Esmaltação em Gel": { duracao: DURACOES_MAP["Mão Esmaltação em Gel"], preco: { "Primeira vez": 100, "Manutenção": 100 } },
  "Pé Esmaltação em Gel":  { duracao: DURACOES_MAP["Pé Esmaltação em Gel"],  preco: { "Primeira vez": 100, "Manutenção": 100 } },
  "Mão Comum":             { duracao: DURACOES_MAP["Mão Comum"],             preco: { "Primeira vez": 35,  "Manutenção": 35  } },
  "Pé Comum":              { duracao: DURACOES_MAP["Pé Comum"],              preco: { "Primeira vez": 40,  "Manutenção": 40  } },
  "Mão + Pé Comum":        { duracao: DURACOES_MAP["Mão + Pé Comum"],        preco: { "Primeira vez": 70,  "Manutenção": 70  } },
  "Plástica dos Pés":      { duracao: DURACOES_MAP["Plástica dos Pés"] },
 
};

const procedimentos = Object.keys(PROCEDIMENTOS);

// Todos os slots possíveis do dia (de 09:00 até 17:00)
const HORARIOS = [
  "09:00", "09:30",
  "10:00", "10:30",
  "11:00", "11:30",
  "13:00", "13:30",
  "14:00", "14:30",
  "15:00", "15:30",
  "16:00", "16:30",
  "17:00", "17:30",
  "18:00", "18:30",
];

// Converte "HH:MM" em minutos desde meia-noite
function toMin(h: string) {
  const [hh, mm] = h.split(":").map(Number);
  return hh * 60 + mm;
}

// Intervalos ocupados no dia: lista de { inicio, fim } em minutos
type Intervalo = { inicio: number; fim: number };

function slotsOcupados(inicio: string, duracaoMin: number): string[] {
  const inicioMin = toMin(inicio);
  const fimMin = inicioMin + duracaoMin;
  return HORARIOS.filter((h) => {
    const hMin = toMin(h);
    return hMin >= inicioMin && hMin < fimMin;
  });
}

function horariosDisponiveis(intervalos: Intervalo[], duracaoMin: number): string[] {
  const FIM_EXPEDIENTE = toMin("19:00");
  return HORARIOS.filter((h) => {
    const inicioMin = toMin(h);
    const fimMin = inicioMin + duracaoMin;
    if (fimMin > FIM_EXPEDIENTE) return false;
    return !intervalos.some((iv) => inicioMin < iv.fim && fimMin > iv.inicio);
  });
}

function intervalosDoSupabase(rows: { horario: string; duracao?: number }[]): Intervalo[] {
  return rows.map((r) => ({
    inicio: toMin(r.horario),
    fim: toMin(r.horario) + (r.duracao ?? 60),
  }));
}

function intervalosDoGcal(events: any[], dia: string): Intervalo[] {
  return events
    .filter((ev) => {
      const start = new Date(ev.start?.dateTime ?? ev.start?.date);
      return start.toLocaleDateString("pt-BR", { timeZone: "America/Sao_Paulo" }).split("/").reverse().join("-") === dia;
    })
    .map((ev) => {
      const startLocal = new Date(new Date(ev.start.dateTime).toLocaleString("en-US", { timeZone: "America/Sao_Paulo" }));
      const endLocal   = new Date(new Date(ev.end.dateTime).toLocaleString("en-US", { timeZone: "America/Sao_Paulo" }));
      return {
        inicio: startLocal.getHours() * 60 + startLocal.getMinutes(),
        fim:    endLocal.getHours()   * 60 + endLocal.getMinutes(),
      };
    });
}

function formatDate(date: Date) {
  return date.toLocaleDateString("pt-BR", { timeZone: "America/Sao_Paulo" }).split("/").reverse().join("-");
}

function Calendar({
  selected,
  onSelect,
  ocupadosPorDia,
}: {
  selected: string;
  onSelect: (d: string) => void;
  ocupadosPorDia: Record<string, Intervalo[]>;
}) {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const [view, setView] = useState(new Date(today.getFullYear(), today.getMonth(), 1));

  const year = view.getFullYear();
  const month = view.getMonth();
  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const monthLabel = view.toLocaleDateString("pt-BR", { month: "long", year: "numeric" });

  return (
    <div className="rounded-2xl border border-brand-gold/40 bg-brand-cream/60 p-4">
      <div className="flex items-center justify-between mb-3">
        <button type="button" onClick={() => setView(new Date(year, month - 1, 1))} className="p-1 hover:text-brand-brown transition-colors">
          <ChevronLeft className="size-4" />
        </button>
        <span className="text-sm font-semibold capitalize text-brand-brown-deep">{monthLabel}</span>
        <button type="button" onClick={() => setView(new Date(year, month + 1, 1))} className="p-1 hover:text-brand-brown transition-colors">
          <ChevronRight className="size-4" />
        </button>
      </div>
      <div className="grid grid-cols-7 text-center text-xs text-foreground/50 mb-1">
        {["D", "S", "T", "Q", "Q", "S", "S"].map((d, i) => <span key={i}>{d}</span>)}
      </div>
      <div className="grid grid-cols-7 text-center text-sm gap-y-1">
        {Array.from({ length: firstDay }).map((_, i) => <span key={`e-${i}`} />)}
        {Array.from({ length: daysInMonth }).map((_, i) => {
          const date = new Date(year, month, i + 1);
          const key = formatDate(date);
          const isPast = date < today;
          const isSunday = date.getDay() === 0;
          const isSelected = key === selected;
          const intervalos = ocupadosPorDia[key] ?? [];
          const allBlocked = horariosDisponiveis(intervalos, 30).length === 0;
          const disabled = isPast || isSunday || allBlocked;

          return (
            <button
              key={key}
              type="button"
              disabled={disabled}
              onClick={() => onSelect(key)}
              className={`mx-auto flex size-8 items-center justify-center rounded-full text-xs transition-all ${
                isSelected
                  ? "bg-brand-brown-deep text-white font-semibold"
                  : disabled
                  ? "text-foreground/25 cursor-not-allowed"
                  : "hover:bg-brand-gold/30 text-foreground cursor-pointer"
              }`}
            >
              {i + 1}
            </button>
          );
        })}
      </div>
    </div>
  );
}

type Confirmacao = {
  nome: string;
  procedimento: string;
  tipo: string;
  data: string;
  horario: string;
  preco?: number;
};

export function Agendamento() {
  const [confirmacao, setConfirmacao] = useState<Confirmacao | null>(null);
  const [form, setForm] = useState({
    nome: "",
    telefone: "",
    procedimento: procedimentos[0],
    tipo: "Primeira vez",
    data: "",
    horario: "",
    observacoes: "",
  });

  useEffect(() => {
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
  const [events, setEvents] = useState<any[]>([]);
  const [intervalosSupabase, setIntervalosSupabase] = useState<Record<string, Intervalo[]>>({});
  const [loadingEvents, setLoadingEvents] = useState(true);

  useEffect(() => {
    const now = new Date();
    const future = new Date();
    future.setMonth(future.getMonth() + 2);

    // Busca agendamentos do Supabase
    const fetchSupabase = async () => {
      const { data } = await supabase
        .from("agendamentos")
        .select("data, horario, duracao")
        .gte("data", formatDate(now))
        .lte("data", formatDate(future));
      const map: Record<string, Intervalo[]> = {};
      (data ?? []).forEach((row: { data: string; horario: string; duracao?: number }) => {
        if (!map[row.data]) map[row.data] = [];
        map[row.data].push({ inicio: toMin(row.horario), fim: toMin(row.horario) + (row.duracao ?? 60) });
      });
      setIntervalosSupabase(map);
      setLoadingEvents(false);
    };
    fetchSupabase();

    // Busca também do Google Calendar
    const calendarUrl = `https://www.googleapis.com/calendar/v3/calendars/${encodeURIComponent(CALENDAR_ID)}/events?key=${API_KEY}&timeMin=${now.toISOString()}&timeMax=${future.toISOString()}&singleEvents=true&orderBy=startTime`;
    fetch(calendarUrl)
      .then((r) => r.json())
      .then((data) => setEvents(data.items ?? []))
      .catch(() => setEvents([]));
  }, []);

  const intervalosMesclados: Record<string, Intervalo[]> = { ...intervalosSupabase };
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

  const update = (field: keyof typeof form, value: string) =>
    setForm((current) => ({ ...current, [field]: value }));

  const tipo = form.tipo as "Primeira vez" | "Manutenção";
  const duracao = PROCEDIMENTOS[form.procedimento]?.duracao[tipo] ?? 60;
  const preco = PROCEDIMENTOS[form.procedimento]?.preco?.[tipo];
  const intervalosNoDia = form.data ? (intervalosMesclados[form.data] ?? []) : [];
  const horariosDodia = horariosDisponiveis(intervalosNoDia, duracao);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const dataFormatada = form.data
      ? new Date(form.data + "T12:00:00").toLocaleDateString("pt-BR")
      : "";

    // Salva no Supabase para bloquear o horário imediatamente
    await supabase.from("agendamentos").insert({
      nome: form.nome,
      telefone: form.telefone,
      procedimento: form.procedimento,
      data: form.data,
      horario: form.horario,
      duracao,
      observacoes: form.observacoes,
    });

    // Cria evento no Google Calendar via Edge Function (keepalive garante que termina mesmo abrindo WhatsApp)
    fetch("https://msqriuvzpixjjrhuqifb.supabase.co/functions/v1/criar-evento-calendar", {
      method: "POST",
      keepalive: true,
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${import.meta.env.VITE_SUPABASE_EDGE_TOKEN as string}`,
      },
      body: JSON.stringify({
        nome: form.nome,
        telefone: form.telefone,
        procedimento: `${form.procedimento} (${form.tipo})`,
        data: form.data,
        horario: form.horario,
        duracao: duracao,
        observacoes: form.observacoes,
      }),
    });

    setIntervalosSupabase((prev) => {
      const novos = { ...prev };
      if (!novos[form.data]) novos[form.data] = [];
      novos[form.data].push({ inicio: toMin(form.horario), fim: toMin(form.horario) + duracao });
      return novos;
    });

    const precoLinha = preco !== undefined ? `\n💰 *Valor:* R$ ${preco},00` : "";
    const mensagem = `Olá Izabeli! Gostaria de agendar um horário.\n\n📋 *Procedimento:* ${form.procedimento}\n✨ *Tipo:* ${form.tipo}${precoLinha}\n📅 *Data:* ${dataFormatada}\n🕐 *Horário:* ${form.horario}\n👤 *Nome:* ${form.nome}\n📱 *Telefone:* ${form.telefone}${form.observacoes ? `\n📝 *Observações:* ${form.observacoes}` : ""}`;

    window.open(
      `https://wa.me/5511932792798?text=${encodeURIComponent(mensagem)}`,
      "_blank",
      "noopener,noreferrer",
    );

    setConfirmacao({
      nome: form.nome,
      procedimento: form.procedimento,
      tipo: form.tipo,
      data: dataFormatada,
      horario: form.horario,
      preco,
    });
  };

  if (confirmacao) {
    return (
      <section id="agendamento" className="relative overflow-hidden bg-brand-cream">
        <div className="absolute -left-20 top-10 size-56 rounded-full bg-brand-gold/20 blur-3xl" />
        <div className="absolute -right-20 bottom-10 size-72 rounded-full bg-brand-brown/15 blur-3xl" />
        <div className="container relative mx-auto flex min-h-[60vh] items-center justify-center px-4 py-16">
          <div className="w-full max-w-md rounded-3xl border border-brand-gold/50 bg-white p-8 shadow-soft text-center animate-in fade-in slide-in-from-bottom-4 duration-500">
            <CheckCircle2 className="mx-auto size-16 text-brand-gold mb-4" strokeWidth={1.5} />
            <h3 className="font-serif text-3xl text-foreground">Agendamento enviado!</h3>
            <p className="mt-2 text-sm text-foreground/60">Sua solicitação foi enviada pelo WhatsApp. Aguarde a confirmação da Izabeli 💅</p>

            <div className="mt-6 rounded-2xl bg-brand-cream/70 border border-brand-gold/30 p-5 text-left space-y-2.5 text-sm">
              <div className="flex justify-between">
                <span className="text-foreground/50">Nome</span>
                <span className="font-medium text-foreground">{confirmacao.nome}</span>
              </div>
              <div className="h-px bg-brand-gold/20" />
              <div className="flex justify-between">
                <span className="text-foreground/50">Procedimento</span>
                <span className="font-medium text-foreground">{confirmacao.procedimento}</span>
              </div>
              <div className="h-px bg-brand-gold/20" />
              <div className="flex justify-between">
                <span className="text-foreground/50">Tipo</span>
                <span className="font-medium text-foreground">{confirmacao.tipo}</span>
              </div>
              <div className="h-px bg-brand-gold/20" />
              <div className="flex justify-between">
                <span className="text-foreground/50">Data</span>
                <span className="font-medium text-foreground">{confirmacao.data}</span>
              </div>
              <div className="h-px bg-brand-gold/20" />
              <div className="flex justify-between">
                <span className="text-foreground/50">Horário</span>
                <span className="font-medium text-foreground">{confirmacao.horario}</span>
              </div>
              {confirmacao.preco !== undefined && (
                <>
                  <div className="h-px bg-brand-gold/20" />
                  <div className="flex justify-between">
                    <span className="text-foreground/50">Valor</span>
                    <span className="font-semibold text-brand-brown-deep">R$ {confirmacao.preco},00</span>
                  </div>
                </>
              )}
            </div>

            {(() => {
              const [ano, mes, dia] = confirmacao.data.split("/").reverse();
              const [hh, mm] = confirmacao.horario.split(":");
              const start = `${ano}${mes}${dia}T${hh}${mm}00`;
              const duracaoMin = PROCEDIMENTOS[confirmacao.procedimento]?.duracao[confirmacao.tipo as "Primeira vez" | "Manutenção"] ?? 60;
              const endDate = new Date(Number(ano), Number(mes) - 1, Number(dia), Number(hh), Number(mm) + duracaoMin);
              const end = `${endDate.getFullYear()}${String(endDate.getMonth()+1).padStart(2,"0")}${String(endDate.getDate()).padStart(2,"0")}T${String(endDate.getHours()).padStart(2,"0")}${String(endDate.getMinutes()).padStart(2,"0")}00`;
              const gcalUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(`Izabeli Nails — ${confirmacao.procedimento}`)}&dates=${start}/${end}&details=${encodeURIComponent(`Procedimento: ${confirmacao.procedimento} (${confirmacao.tipo})\nEndereço: Rua Vitória, 216 - Barueri SP`)}&location=${encodeURIComponent("Rua Vitória, 216 - Barueri, SP")}`;
              return (
                <a
                  href={gcalUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand-brown-deep px-6 py-3 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-brand-brown"
                >
                  <CalendarPlus className="size-4" />
                  Salvar no Google Calendar
                </a>
              );
            })()}

            <button
              type="button"
              onClick={() => {
                setConfirmacao(null);
                setForm({ nome: "", telefone: "", procedimento: procedimentos[0], tipo: "Primeira vez", data: "", horario: "", observacoes: "" });
              }}
              className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-full border border-brand-gold/50 bg-brand-cream px-6 py-3 text-sm font-semibold text-brand-brown-deep transition-all hover:bg-brand-gold/20"
            >
              Fazer novo agendamento
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="agendamento" className="relative overflow-hidden bg-brand-cream">
      <div className="absolute -left-20 top-10 size-56 rounded-full bg-brand-gold/20 blur-3xl" />
      <div className="absolute -right-20 bottom-10 size-72 rounded-full bg-brand-brown/15 blur-3xl" />

      <div className="container relative mx-auto grid gap-10 px-4 py-16 md:grid-cols-[0.9fr_1.1fr] md:items-center md:py-24">
        <div>
          <p className="mb-3 inline-flex items-center gap-2 rounded-full bg-white/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-brand-brown-deep shadow-sm">
            <Sparkles className="size-3.5 text-brand-gold" />
            Atendimento com horário marcado
          </p>
          <h2 className="font-serif text-4xl text-foreground md:text-5xl">Agende seu horário</h2>
          <div className="mt-4 h-px w-64 bg-foreground/30" />
          <p className="mt-6 max-w-md text-sm leading-relaxed text-foreground/75">
            Escolha o dia e horário disponível e envie direto pelo WhatsApp. Rápido e fácil!
          </p>
          <div className="mt-8 rounded-3xl border border-brand-gold/40 bg-white/65 p-5 shadow-soft backdrop-blur-md">
            <div className="flex items-center gap-3 text-brand-brown-deep">
              <span className="inline-flex size-11 items-center justify-center rounded-full bg-brand-gold-soft">
                <CalendarDays className="size-5" />
              </span>
              <div>
                <p className="font-semibold">Barueri - SP</p>
                <p className="text-sm text-foreground/65">Domingos não são atendidos.</p>
              </div>
            </div>
          </div>
          <div className="mt-4">
            <Disponibilidade />
          </div>
        </div>

        <form onSubmit={handleSubmit} className="rounded-3xl border border-brand-gold/50 bg-white p-6 shadow-soft md:p-8">
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="space-y-2 text-sm font-medium text-brand-brown-deep">
              Nome
              <input
                value={form.nome}
                onChange={(e) => update("nome", e.target.value)}
                placeholder="Seu nome"
                required
                className="w-full rounded-2xl border border-brand-gold/40 bg-brand-cream/60 px-4 py-3 text-sm outline-none transition focus:border-brand-gold focus:bg-white"
              />
            </label>
            <label className="space-y-2 text-sm font-medium text-brand-brown-deep">
              Telefone
              <input
                value={form.telefone}
                onChange={(e) => {
                  const digits = e.target.value.replace(/\D/g, "").slice(0, 11);
                  const fmt = digits
                    .replace(/^(\d{2})(\d)/, "($1) $2")
                    .replace(/(\d{5})(\d{1,4})$/, "$1-$2");
                  update("telefone", fmt);
                }}
                placeholder="(11) 00000-0000"
                required
                minLength={14}
                maxLength={15}
                className="w-full rounded-2xl border border-brand-gold/40 bg-brand-cream/60 px-4 py-3 text-sm outline-none transition focus:border-brand-gold focus:bg-white"
              />
            </label>
            <label className="space-y-2 text-sm font-medium text-brand-brown-deep sm:col-span-2">
              Procedimento
              <select
                value={form.procedimento}
                onChange={(e) => { update("procedimento", e.target.value); update("horario", ""); }}
                className="w-full rounded-2xl border border-brand-gold/40 bg-brand-cream/60 px-4 py-3 text-sm outline-none transition focus:border-brand-gold focus:bg-white"
              >
                {procedimentos.map((item) => <option key={item}>{item}</option>)}
              </select>
            </label>
            <div className="space-y-2 text-sm font-medium text-brand-brown-deep sm:col-span-2">
              Tipo de atendimento
              <div className="flex gap-3">
                {(["Primeira vez", "Manutenção"] as const).map((t) => {
                  const p = PROCEDIMENTOS[form.procedimento]?.preco?.[t];
                  return (
                    <button
                      key={t}
                      type="button"
                      onClick={() => { update("tipo", t); update("horario", ""); }}
                      className={`flex-1 rounded-2xl border py-3 px-2 text-sm font-medium transition-all ${
                        form.tipo === t
                          ? "bg-brand-brown-deep text-white border-brand-brown-deep"
                          : "bg-brand-cream/60 border-brand-gold/40 text-brand-brown-deep hover:bg-brand-gold/20"
                      }`}
                    >
                      <span>{t === "Primeira vez" ? "✨ Primeira vez" : "🔄 Manutenção"}</span>
                      {p !== undefined && (
                        <span className={`block text-xs mt-0.5 ${
                          form.tipo === t ? "text-white/80" : "text-brand-brown"
                        }`}>
                          R$ {p},00
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
            <div className="space-y-2 text-sm font-medium text-brand-brown-deep sm:col-span-2">
              Escolha o dia
              {loadingEvents ? (
                <div className="rounded-2xl border border-brand-gold/40 bg-brand-cream/60 p-6 text-center text-sm text-foreground/50">
                  Carregando disponibilidade...
                </div>
              ) : (
                <Calendar
                  selected={form.data}
                  onSelect={(d) => { update("data", d); update("horario", ""); }}
                  ocupadosPorDia={intervalosMesclados}
                />
              )}
            </div>
            {form.data && (
              <div className="space-y-2 text-sm font-medium text-brand-brown-deep sm:col-span-2">
                Horários disponíveis
                <div className="grid grid-cols-4 gap-2">
                  {horariosDodia.length === 0 ? (
                    <p className="col-span-4 text-center text-xs text-foreground/50 py-2">Nenhum horário disponível para este procedimento neste dia.</p>
                  ) : (
                    horariosDodia.map((h) => {
                      const selecionado = form.horario === h;
                      return (
                        <button
                          key={h}
                          type="button"
                          onClick={() => update("horario", h)}
                          className={`rounded-xl py-2 text-xs font-medium transition-all ${
                            selecionado
                              ? "bg-brand-brown-deep text-white"
                              : "bg-brand-cream border border-brand-gold/40 hover:bg-brand-gold/20 text-brand-brown-deep"
                          }`}
                        >
                          {h}
                        </button>
                      );
                    })
                  )}
                </div>
              </div>
            )}
            <label className="space-y-2 text-sm font-medium text-brand-brown-deep sm:col-span-2">
              Observações
              <textarea
                value={form.observacoes}
                onChange={(e) => update("observacoes", e.target.value)}
                placeholder="Ex: tenho preferência por tal técnica, quero tirar dúvida, etc."
                rows={3}
                className="w-full resize-none rounded-2xl border border-brand-gold/40 bg-brand-cream/60 px-4 py-3 text-sm outline-none transition focus:border-brand-gold focus:bg-white"
              />
            </label>
          </div>
          <button
            type="submit"
            disabled={!form.data || !form.horario}
            className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand-brown-deep px-6 py-3.5 text-sm font-semibold uppercase tracking-[0.18em] text-white shadow-gold transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-brown disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:translate-y-0"
          >
            <MessageCircle className="size-4" />
            Agendar no WhatsApp
          </button>
        </form>
      </div>
    </section>
  );
}
