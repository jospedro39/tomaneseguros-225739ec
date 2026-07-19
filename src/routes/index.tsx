import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Car,
  HeartPulse,
  Home,
  ShieldCheck,
  Building2,
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
import logo from "@/assets/tomane-logo-new.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Tomané Seguros — Proteção de Confiança em Mondim de Basto" },
      {
        name: "description",
        content:
          "Mediação de seguros em Mondim de Basto. Auto, Vida, Habitação, Saúde e Empresas. Excelência no serviço, parceiros para a vida.",
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
  { icon: Car, title: "Automóvel", desc: "Proteção completa para o seu veículo, com as melhores coberturas do mercado." },
  { icon: HeartPulse, title: "Vida", desc: "Segurança financeira para os seus. Tranquilidade em todas as fases da vida." },
  { icon: Home, title: "Habitação", desc: "Casa, recheio e responsabilidade civil. Proteja o seu lar sem preocupações." },
  { icon: ShieldCheck, title: "Saúde", desc: "Acesso rápido a cuidados de saúde privados, para si e para a sua família." },
  { icon: Building2, title: "Empresas", desc: "Soluções à medida do seu negócio: multirriscos, frota, acidentes de trabalho." },
];

const faqs = [
  {
    q: "Como pedir uma simulação?",
    a: `Basta contactar-nos por email para ${EMAIL} ou por telemóvel para ${PHONE_DISPLAY}. Também pode preencher o formulário nesta página — respondemos em menos de 24h úteis, sem qualquer compromisso.`,
  },
  {
    q: "Porquê escolher a Tomané Seguros?",
    a: "Somos um mediador local, sediado em Mondim de Basto, com atendimento próximo e personalizado. Conhecemos os nossos clientes pelo nome e desenhamos cada solução à medida do seu perfil — não vendemos apólices em série.",
  },
  {
    q: "Como funcionam os sinistros?",
    a: "Em caso de sinistro, ligue-nos diretamente. Acompanhamos todo o processo consigo — da participação à resolução — junto da seguradora. Não fica sozinho a lidar com a papelada nem com call centers.",
  },
  {
    q: "Posso transferir seguros atuais?",
    a: "Sim, e é mais simples do que parece. Analisamos gratuitamente as suas apólices atuais, comparamos com o mercado e tratamos de toda a transferência por si — sem interrupção de cobertura.",
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
          <img src={logo.url} alt="Tomané Seguros" className="h-11 w-11 object-contain" />
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
          <a href="#sobre" className="transition-colors hover:text-primary">Sobre</a>
          <a href="#faq" className="transition-colors hover:text-primary">FAQ</a>
          <a href="#contacto" className="transition-colors hover:text-primary">Contacto</a>
        </nav>
        <a
          href="#contacto"
          className="hidden rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-sm transition-all hover:opacity-90 sm:inline-block"
        >
          Simulação gratuita
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10" style={{ background: "var(--gradient-hero)" }} />
      <div
        className="absolute inset-0 -z-10 opacity-[0.07]"
        style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
          backgroundSize: "24px 24px",
        }}
      />
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 lg:grid-cols-[1.1fr_1fr] lg:py-28">
        <div className="text-primary-foreground">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-3 py-1 text-xs font-medium tracking-wide text-white/90">
            <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--primary-glow)]" />
            Mediador registado na ASF · Mondim de Basto
          </span>
          <h1 className="mt-6 font-display text-4xl font-semibold leading-[1.05] sm:text-5xl lg:text-6xl">
            Proteção de <span style={{ color: "var(--primary-glow)" }}>confiança</span> em Mondim de Basto.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/80">
            Excelência no serviço. Parceiros para a vida. Somos o seu mediador
            de proximidade — comparamos as melhores propostas do mercado e
            acompanhamos-lhe em cada passo, do orçamento à participação de sinistro.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#contacto"
              className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-primary shadow-lg transition-all hover:shadow-xl hover:bg-white/95"
            >
              Pedir uma Simulação Gratuita
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#servicos"
              className="inline-flex items-center gap-2 rounded-full border border-white/25 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
            >
              Ver os nossos seguros
            </a>
          </div>
          <dl className="mt-12 grid max-w-md grid-cols-2 gap-6 border-t border-white/15 pt-8">
            {[
              { k: "10 anos", v: "de experiência" },
              { k: "Local", v: "atendimento próximo" },
            ].map((s) => (
              <div key={s.v}>
                <dt className="font-display text-2xl font-semibold text-white">
                  {s.k}
                </dt>
                <dd className="mt-1 text-xs uppercase tracking-wider text-white/60">{s.v}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="relative flex justify-center">
          <div className="absolute -inset-6 rounded-full bg-white/10 opacity-40 blur-3xl" />
          <img
            src={logo.url}
            alt="Tó Mané Seguros — Excelência no Serviço. Parceiros para a Vida."
            className="relative w-full max-w-md rounded-3xl bg-white/95 object-contain p-8 shadow-2xl ring-1 ring-white/10"
          />
        </div>
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
          Trabalhamos com as principais seguradoras nacionais para lhe apresentar
          sempre a proposta mais equilibrada entre cobertura e preço.
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

function About() {
  const points = [
    { icon: Users, title: "Mediador dedicado", desc: "Um único ponto de contacto que conhece o seu perfil e as suas apólices." },
    { icon: Headphones, title: "Apoio em sinistro", desc: "Acompanhamento próximo e rápido em todo o processo, do início ao fim." },
    { icon: MapPinned, title: "Proximidade local", desc: "Sediados em Mondim de Basto, ao seu lado quando é preciso." },
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
              Há uma década que a Tó Mané Seguros ajuda famílias e empresas de
              Mondim de Basto e da região a tomar decisões informadas sobre a sua
              proteção. Somos mediadores independentes: comparamos, negociamos e
              escolhemos consigo a solução certa — sem letras pequenas.
            </p>
            <ul className="mt-8 space-y-4">
              {[
                "Análise personalizada do seu perfil de risco",
                "Comparação transparente entre seguradoras",
                "Revisão anual das suas apólices",
                "Apoio direto em caso de sinistro",
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
    await new Promise((r) => setTimeout(r, 700));
    setSubmitting(false);
    form.reset();
    toast.success("Pedido enviado! Entraremos em contacto em breve.");
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
            className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-md transition-all hover:opacity-90 disabled:opacity-60 sm:w-auto"
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
            <img src={logo.url} alt="Tó Mané Seguros" className="h-12 w-12 rounded-lg bg-white object-contain p-1" />
            <div className="leading-tight">
              <div className="font-display text-lg font-semibold">Tó Mané Seguros</div>
              <div className="text-[11px] uppercase tracking-widest text-white/60">
                Mondim de Basto
              </div>
            </div>
          </div>
          <p className="mt-5 max-w-md text-sm text-white/70">
            Mediador de seguros independente em Mondim de Basto. Ajudamos particulares
            e empresas a proteger o que é importante, com transparência e proximidade.
          </p>
          <p className="mt-6 text-xs text-white/50">
            Mediador registado na ASF sob o n.º XXXXXXXX — categoria de Mediador
            de Seguros. Informações verificáveis em www.asf.com.pt.
          </p>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-white">Contactos</h4>
          <ul className="mt-4 space-y-2 text-sm text-white/70">
            <li>+351 {PHONE_DISPLAY}</li>
            <li>{EMAIL}</li>
            <li>{ADDRESS}</li>
            <li>Seg–Sex · 9h–19h</li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-white">Redes sociais</h4>
          <div className="mt-4 flex gap-3">
            {[
              { Icon: Facebook, label: "Facebook" },
              { Icon: Instagram, label: "Instagram" },
            ].map(({ Icon, label }) => (
              <a
                key={label}
                href="#"
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
            <a href="#" className="hover:text-white">Política de Privacidade</a>
            <a href="#" className="hover:text-white">Livro de Reclamações</a>
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
