import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Car,
  HeartPulse,
  Home,
  ShieldCheck,
  Building2,
  Scale,
  Activity,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Check,
  Users,
  Headphones,
  MapPinned,
  MessageCircle,
  ExternalLink,
  Shield,
  Award,
} from "lucide-react";
import { z } from "zod";
import { toast } from "sonner";
import { Toaster } from "@/components/ui/sonner";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

// Nome do ficheiro que carregaste para a pasta public
const LOGO_SRC = "/ChatGPT Image 19_07_2026, 17_59_56.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Tomané Seguros — Proteção de Confiança" },
      {
        name: "description",
        content:
          "Mediação de seguros em Mondim de Basto e atendimento nacional. Parceria Portinsurance. Auto, Vida, Habitação, Saúde, Empresas, Responsabilidade Civil e Acidentes Pessoais.",
      },
    ],
  }),
  component: Index,
});

const PHONE = "965264599";
const PHONE_DISPLAY = "965 264 599";
const EMAIL = "tomaneseguros@gmail.com";
const ADDRESS = "Rua de São Sebastião nº 1, 4880-200 Mondim de Basto";

const contactSchema = z.object({
  name: z.string().trim().min(2, "Indique o seu nome").max(100),
  email: z.string().trim().email("Email inválido").max(255),
  phone: z
    .string()
    .trim()
    .min(9, "Telefone inválido")
    .max(20)
    .regex(/^[+0-9\s()-]+$/, "Telefone inválido"),
  service: z.string().min(1, "Escolha um seguro"),
  message: z.string().trim().max(1000).optional().or(z.literal("")),
});

const services = [
  { icon: Car, title: "Automóvel", desc: "Proteção completa para o seu veículo, com as melhores coberturas e capital ajustado." },
  { icon: HeartPulse, title: "Vida", desc: "Segurança financeira para os seus e otimização/transferência de seguros de crédito habitação." },
  { icon: Home, title: "Multiriscos Habitação", desc: "Proteção integral para a sua casa e recheio contra danos, furtos e imprevistos." },
  { icon: ShieldCheck, title: "Saúde", desc: "Acesso rápido a cuidados de saúde privados, clínicas e redes de excelência." },
  { icon: Building2, title: "Empresas", desc: "Soluções à medida do seu negócio: multirriscos, frotas e acidentes de trabalho." },
  { icon: Scale, title: "Responsabilidade Civil", desc: "Proteção contra indemnizações por danos causados a terceiros na vida privada ou profissional." },
  { icon: Activity, title: "Acidentes Pessoais", desc: "Salvaguarda a integridade física e financeira em caso de imprevistos do quotidiano ou desporto." },
];

const WEB3FORMS_ACCESS_KEY = "adfdd2d5-94b0-45f7-8269-84b90297adf2";

const faqs = [
  {
    q: "Como pedir uma simulação?",
    a: `Basta contactar-nos por email para ${EMAIL} ou por telemóvel para ${PHONE_DISPLAY}. Também pode preencher o formulário nesta página — respondemos em menos de 24h úteis, sem qualquer compromisso.`,
  },
  {
    q: "Porquê escolher a Tomané Seguros?",
    a: "Somos um mediador de confiança, associado à Portinsurance, com atendimento próximo e personalizado. Unimos a força de uma grande rede nacional à atenção individualizada que merece.",
  },
  {
    q: "Como funcionam os sinistros?",
    a: "Em caso de sinistro, ligue-nos diretamente. Acompanhamos todo o processo consigo — da participação à resolução — junto da seguradora. Não fica sozinho a lidar com burocracias.",
  },
  {
    q: "Posso transferir o meu seguro de vida do crédito habitação?",
    a: "Sim! Pode retirar o seguro de vida do banco e transferi-lo para as soluções mediadas por nós, conseguindo uma poupança muito significativa na prestação mensal, mantendo ou melhorando as garantias exigidas.",
  },
  {
    q: "Quais são os documentos necessários para pedir uma simulação?",
    a: "Para uma simulação rápida, apenas necessitamos do seu contacto e do tipo de seguro pretendido. Caso avance para uma proposta formal, solicitaremos a documentação específica do risco em causa.",
  },
  {
    q: "Com que seguradoras trabalham?",
    a: "Trabalhamos em estreita parceria com a Portinsurance, o que nos dá acesso a um leque alargado das seguradoras de referência no mercado nacional, permitindo-nos comparar e encontrar a proposta ideal.",
  },
  {
    q: "Como posso agendar uma reunião?",
    a: `Pode contactar-nos diretamente pelo número ${PHONE_DISPLAY} ou enviar uma mensagem pelo formulário ou WhatsApp. Teremos todo o gosto em recebê-lo em Mondim de Basto ou atendê-lo à distância.`,
  },
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Toaster richColors position="top-center" />
      <Header />
      <main>
        <Hero />
        <Services />
        <PartnersSection />
        <About />
        <Contact />
        <FAQ />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
        <a href="#top" className="flex items-center gap-3">
          <img src={LOGO_SRC} alt="Tomané Seguros" className="h-11 w-11 object-contain" />
          <div className="hidden sm:block leading-tight">
            <div className="font-display text-base font-semibold tracking-tight text-primary">
              Tó Mané Seguros
            </div>
            <div className="text-[11px] uppercase tracking-widest text-muted-foreground">
              Mondim de Basto
            </div>
          </div>
        </a>
        <nav className="hidden items-center gap-8 text-sm font-medium text-muted-foreground md:flex">
          <a href="#servicos" className="transition-colors hover:text-primary">Serviços</a>
          <a href="#parceiros" className="transition-colors hover:text-primary">Parceiros</a>
          <a href="#sobre" className="transition-colors hover:text-primary">Sobre</a>
          <a href="#faq" className="transition-colors hover:text-primary">FAQ</a>
          <a href="#contacto" className="transition-colors hover:text-primary">Contacto</a>
        </nav>
        <a
          href="#contacto"
          className="hidden rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-sm transition-all hover:opacity-95 sm:inline-block"
        >
          Simulação gratuita
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden" style={{ backgroundColor: "#001f3f" }}>
      <div
        className="absolute inset-0 -z-10 opacity-[0.06]"
        style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
          backgroundSize: "26px 26px",
        }}
      />
      <div className="mx-auto flex max-w-4xl flex-col items-center px-6 py-24 text-center lg:py-32">
        <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/5 px-3 py-1 text-xs font-medium tracking-wide text-white backdrop-blur">
          <span className="h-1.5 w-1.5 rounded-full bg-white" />
          Parceiro Portinsurance · Atendimento Nacional
        </span>
        <h1 className="mt-6 font-display text-5xl font-black leading-[1.02] text-white sm:text-6xl lg:text-7xl">
          Proteção de confiança, onde quer que esteja.
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white sm:text-xl">
          Excelência no serviço. Parceiros para a vida. Comparamos as melhores
          propostas do mercado e acompanhamos-lhe em cada passo — do orçamento
          à participação de sinistro.
        </p>
        <p className="mt-8 font-display text-xl italic text-white/85 sm:text-2xl">
          Segurança e proximidade para a sua família e empresa.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#contacto"
            className="group inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 text-sm font-bold text-[#001f3f] shadow-[0_15px_40px_-10px_rgba(0,0,0,0.5)] transition-all hover:bg-white/95"
          >
            Pedir uma Simulação Gratuita
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="#servicos"
            className="inline-flex items-center gap-2 rounded-full border border-white/40 px-7 py-4 text-sm font-semibold text-white transition-colors hover:bg-white/10"
          >
            Ver os nossos seguros
          </a>
        </div>
        <p className="mt-14 text-xs uppercase tracking-[0.25em] text-white/70">
          A confiança de famílias e empresas de norte a sul
        </p>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="servicos" className="mx-auto max-w-7xl px-6 py-24">
      <div className="max-w-2xl">
        <p className="text-sm font-semibold uppercase tracking-wider" style={{ color: "var(--primary-glow)" }}>
          Os nossos seguros
        </p>
        <h2 className="mt-3 font-display text-3xl font-semibold text-primary sm:text-4xl">
          Soluções desenhadas para cada momento da sua vida.
        </h2>
        <p className="mt-4 text-muted-foreground">
          Trabalhamos em articulação com a Portinsurance e as principais seguradoras do mercado para lhe garantir a proposta ideal.
        </p>
      </div>

      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s) => (
          <article
            key={s.title}
            className="group relative overflow-hidden rounded-2xl border border-border bg-card p-7 transition-all hover:-translate-y-1 hover:border-[color:var(--primary-glow)] hover:shadow-[var(--shadow-elegant)]"
          >
            <div className="grid h-12 w-12 place-items-center rounded-xl bg-accent text-primary transition-all group-hover:bg-primary group-hover:text-primary-foreground">
              <s.icon className="h-6 w-6" strokeWidth={1.75} />
            </div>
            <h3 className="mt-6 font-display text-xl font-semibold text-primary">{s.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
            <a
              href="#contacto"
              className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-primary transition-colors hover:opacity-80"
            >
              Pedir simulação <ArrowRight className="h-3.5 w-3.5" />
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}

function PartnersSection() {
  return (
    <section id="parceiros" className="border-y border-border bg-card py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center text-center">
          <p className="text-sm font-semibold uppercase tracking-wider" style={{ color: "var(--primary-glow)" }}>
            Rede de Parcerias
          </p>
          <h2 className="mt-3 font-display text-2xl font-semibold text-primary sm:text-3xl">
            A garantia e o suporte de uma grande marca nacional
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">
            A nossa mediação está estreitamente ligada à{" "}
            <a
              href="https://portinsurance.pt"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-primary underline hover:opacity-80 inline-flex items-center gap-1"
            >
              Portinsurance <ExternalLink className="h-3.5 w-3.5" />
            </a>
            , permitindo-nos aceder às melhores condições negociais junto das seguradoras de referência no mercado nacional.
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          <div className="flex flex-col items-center text-center rounded-xl border border-border bg-background p-6">
            <div className="grid h-12 w-12 place-items-center rounded-full bg-accent text-primary mb-4">
              <Shield className="h-6 w-6" />
            </div>
            <h3 className="font-display text-base font-semibold text-primary">Solidez e Confiança</h3>
            <p className="mt-2 text-xs text-muted-foreground">Parceria estratégica que assegura acesso a produtos de referência e estabilidade.</p>
          </div>
          <div className="flex flex-col items-center text-center rounded-xl border border-border bg-background p-6">
            <div className="grid h-12 w-12 place-items-center rounded-full bg-accent text-primary mb-4">
              <Award className="h-6 w-6" />
            </div>
            <h3 className="font-display text-base font-semibold text-primary">Diversidade de Oferta</h3>
            <p className="mt-2 text-xs text-muted-foreground">Comparação independente entre várias seguradoras para encontrar o melhor preço e cobertura.</p>
          </div>
          <div className="flex flex-col items-center text-center rounded-xl border border-border bg-background p-6">
            <div className="grid h-12 w-12 place-items-center rounded-full bg-accent text-primary mb-4">
              <Users className="h-6 w-6" />
            </div>
            <h3 className="font-display text-base font-semibold text-primary">Acompanhamento Humano</h3>
            <p className="mt-2 text-xs text-muted-foreground">O suporte de uma grande rede combinado com a proximidade e atenção local.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function About() {
  const points = [
    { icon: Users, title: "Mediador dedicado", desc: "Um único ponto de contacto que conhece o seu perfil e as suas apólices." },
    { icon: Headphones, title: "Apoio em sinistro", desc: "Acompanhamento próximo e rápido em todo o processo, do início ao fim." },
    { icon: MapPinned, title: "Rede e Proximidade", desc: "A solidez da Portinsurance unida ao atendimento personalizado." },
  ];

  return (
    <section id="sobre" className="border-y border-border" style={{ background: "var(--gradient-subtle)" }}>
      <div className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider" style={{ color: "var(--primary-glow)" }}>
              Sobre a Tó Mané Seguros
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold text-primary sm:text-4xl">
              Excelência no serviço. Parceiros para a vida.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Há uma década que ajudamos particulares e empresas a proteger o que mais
              importa. Como parceiros da{" "}
              <a
                href="https://portinsurance.pt"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary underline hover:opacity-80 inline-flex items-center gap-1"
              >
                Portinsurance <ExternalLink className="h-3.5 w-3.5" />
              </a>
              , unimos a proximidade local à capacidade de negociação e robustez de uma
              das maiores redes de mediação nacional.
            </p>
            <ul className="mt-8 space-y-4">
              {[
                "Análise personalizada do seu perfil de risco",
                "Acesso às melhores condições do mercado nacional",
                "Transferência vantajosa de seguros de vida (crédito habitação)",
                "Apoio direto e humano em caso de sinistro",
              ].map((t) => (
                <li key={t} className="flex items-start gap-3">
                  <span className="mt-0.5 grid h-5 w-5 flex-shrink-0 place-items-center rounded-full bg-primary text-primary-foreground">
                    <Check className="h-3 w-3" strokeWidth={3} />
                  </span>
                  <span className="text-sm text-foreground">{t}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="grid gap-5 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
            {points.map((p) => (
              <div
                key={p.title}
                className="flex flex-col rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-soft)] transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-elegant)]"
              >
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-accent text-primary">
                  <p.icon className="h-5 w-5" strokeWidth={1.75} />
                </div>
                <h3 className="mt-5 font-display text-base font-semibold text-primary">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [submitting, setSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    const parsed = contactSchema.safeParse(data);
    if (!parsed.success) {
      const fe: Record<string, string> = {};
      for (const issue of parsed.error.issues) fe[String(issue.path[0])] = issue.message;
      setErrors(fe);
      return;
    }
    setErrors({});
    setSubmitting(true);
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: `Novo pedido de simulação — ${parsed.data.service}`,
          from_name: "Site Tomané Seguros",
          to: EMAIL,
          nome: parsed.data.name,
          email: parsed.data.email,
          telefone: parsed.data.phone,
          seguro: parsed.data.service,
          mensagem: parsed.data.message || "(sem mensagem)",
        }),
      });
      const json = await res.json().catch(() => ({}));
      if (!res.ok || !json.success) throw new Error(json.message || "Falha ao enviar");
      form.reset();
      toast.success("Pedido enviado com sucesso! Entraremos em contacto em breve.");
    } catch {
      toast.error("Não foi possível enviar. Tente novamente ou contacte-nos por telefone.");
    } finally {
      setSubmitting(false);
    }
  };

  const fieldClass =
    "w-full rounded-lg border border-input bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20";
  const labelClass = "text-sm font-medium text-foreground";
  const errClass = "mt-1 text-xs text-destructive";

  return (
    <section id="contacto" className="mx-auto max-w-7xl px-6 py-24">
      <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr]">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wider" style={{ color: "var(--primary-glow)" }}>
            Fale connosco
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold text-primary sm:text-4xl">
            Peça a sua simulação gratuita.
          </h2>
          <p className="mt-4 text-muted-foreground">
            Preencha o formulário e um dos nossos mediadores contactá-lo-á em
            menos de 24h úteis. Sem compromisso, sem pressão.
          </p>
          <div className="mt-8 space-y-4 text-sm">
            <a href={`tel:+351${PHONE}`} className="flex items-center gap-3 text-foreground hover:text-primary">
              <Phone className="h-4 w-4" style={{ color: "var(--primary-glow)" }} /> +351 {PHONE_DISPLAY}
            </a>
            <a href={`mailto:${EMAIL}`} className="flex items-center gap-3 text-foreground hover:text-primary">
              <Mail className="h-4 w-4" style={{ color: "var(--primary-glow)" }} /> {EMAIL}
            </a>
            <div className="flex items-start gap-3 text-muted-foreground">
              <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0" style={{ color: "var(--primary-glow)" }} /> {ADDRESS}
            </div>
          </div>
        </div>

        <form
          onSubmit={onSubmit}
          noValidate
          className="rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-soft)] sm:p-8"
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label className={labelClass} htmlFor="name">Nome</label>
              <input id="name" name="name" className={`${fieldClass} mt-2`} maxLength={100} />
              {errors.name && <p className={errClass}>{errors.name}</p>}
            </div>
            <div>
              <label className={labelClass} htmlFor="phone">Telefone</label>
              <input id="phone" name="phone" className={`${fieldClass} mt-2`} maxLength={20} />
              {errors.phone && <p className={errClass}>{errors.phone}</p>}
            </div>
            <div className="sm:col-span-2">
              <label className={labelClass} htmlFor="email">Email</label>
              <input id="email" name="email" type="email" className={`${fieldClass} mt-2`} maxLength={255} />
              {errors.email && <p className={errClass}>{errors.email}</p>}
            </div>
            <div className="sm:col-span-2">
              <label className={labelClass} htmlFor="service">Seguro pretendido</label>
              <select id="service" name="service" defaultValue="" className={`${fieldClass} mt-2`}>
                <option value="" disabled>Selecione uma opção</option>
                {services.map((s) => (
                  <option key={s.title} value={s.title}>{s.title}</option>
                ))}
                <option value="Outro">Outro</option>
              </select>
              {errors.service && <p className={errClass}>{errors.service}</p>}
            </div>
            <div className="sm:col-span-2">
              <label className={labelClass} htmlFor="message">Mensagem (opcional)</label>
              <textarea id="message" name="message" rows={4} maxLength={1000} className={`${fieldClass} mt-2 resize-none`} />
            </div>
          </div>
          <button
            type="submit"
            disabled={submitting}
            className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-md transition-all hover:opacity-95 disabled:opacity-60 sm:w-auto"
          >
            {submitting ? "A enviar..." : "Enviar pedido"}
            <ArrowRight className="h-4 w-4" />
          </button>
          <p className="mt-4 text-xs text-muted-foreground">
            Ao enviar, concorda com o tratamento dos seus dados para efeitos de contacto comercial.
          </p>
        </form>
      </div>
    </section>
  );
}

function FAQ() {
  return (
    <section id="faq" className="border-t border-border" style={{ background: "var(--gradient-subtle)" }}>
      <div className="mx-auto max-w-4xl px-6 py-24">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-wider" style={{ color: "var(--primary-glow)" }}>
            Perguntas Frequentes
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold text-primary sm:text-4xl">
            As respostas que procura.
          </h2>
          <p className="mt-4 text-muted-foreground">
            Tudo o que precisa de saber antes de dar o próximo passo connosco.
          </p>
        </div>

        <Accordion type="single" collapsible className="mt-12 space-y-3">
          {faqs.map((f, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="rounded-xl border border-border bg-card px-5 shadow-[var(--shadow-soft)]"
            >
              <AccordionTrigger className="text-left font-display text-base font-semibold text-primary hover:no-underline">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3">
            <img src={LOGO_SRC} alt="Tó Mané Seguros" className="h-12 w-12 rounded-lg bg-white object-contain p-1" />
            <div className="leading-tight">
              <div className="font-display text-lg font-semibold">Tó Mané Seguros</div>
              <div className="text-[11px] uppercase tracking-widest text-white/60">
                Parceiro Portinsurance
              </div>
            </div>
          </div>
          <p className="mt-5 max-w-md text-sm text-white/70">
            Mediador de seguros independente em articulação com a{" "}
            <a href="https://portinsurance.pt" target="_blank" rel="noopener noreferrer" className="underline hover:text-white">
              Portinsurance
            </a>
            . Protegemos o que é importante com transparência e proximidade.
          </p>
          <p className="mt-6 text-xs text-white/50">
            Mediador registado na ASF sob o n.º 316444484 — categoria de Mediador
            de Seguros. Informações verificáveis em www.asf.com.pt.
          </p>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-white">Contactos</h4>
          <ul className="mt-4 space-y-2 text-sm text-white/70">
            <li>
              <a href={`tel:+351${PHONE}`} className="hover:text-white transition-colors">
                +351 {PHONE_DISPLAY}
              </a>
            </li>
            <li>
              <a href={`mailto:${EMAIL}`} className="hover:text-white transition-colors">
                {EMAIL}
              </a>
            </li>
            <li>{ADDRESS}</li>
            <li>Seg–Sab · 9h–19h</li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-white">Redes sociais</h4>
          <div className="mt-4 flex gap-3">
            {[
              { Icon: Facebook, label: "Facebook", href: "https://www.facebook.com/tomaneseguros/?locale=pt_BR" },
              { Icon: Instagram, label: "Instagram", href: "https://www.instagram.com/tomanemouragoncalves?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" },
            ].map(({ Icon, label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="grid h-10 w-10 place-items-center rounded-full border border-white/15 text-white/80 transition-colors hover:bg-white/10 hover:text-white"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-3 px-6 py-6 text-xs text-white/50 sm:flex-row">
          <p>© {new Date().getFullYear()} Tó Mané Seguros. Todos os direitos reservados.</p>
          <div className="flex gap-4">
            <a href="/politica_de_privacidade.pdf" target="_blank" rel="noopener noreferrer" className="hover:text-white">Política de Privacidade</a>
            <a href="https://www.livroreclamacoes.pt" target="_blank" rel="noopener noreferrer" className="hover:text-white">Livro de Reclamações</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function WhatsAppButton() {
  const msg = encodeURIComponent("Olá! Gostaria de pedir uma simulação de seguro.");
  return (
    <a
      href={`https://wa.me/351${PHONE}?text=${msg}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar via WhatsApp"
      className="group fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-3.5 text-sm font-semibold text-white shadow-[0_10px_30px_-10px_rgba(37,211,102,0.7)] transition-all hover:scale-105 hover:shadow-[0_15px_40px_-10px_rgba(37,211,102,0.9)]"
    >
      <MessageCircle className="h-6 w-6" strokeWidth={2} />
      <span className="hidden sm:inline">WhatsApp</span>
    </a>
  );
}
