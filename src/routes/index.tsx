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
  Linkedin,
  Check,
  Users,
  Clock,
  Award,
} from "lucide-react";
import { z } from "zod";
import { toast } from "sonner";
import { Toaster } from "@/components/ui/sonner";
import heroImg from "@/assets/hero.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Tomané Seguros — Mediação de Seguros com proximidade" },
      {
        name: "description",
        content:
          "Mediação de seguros personalizada. Auto, Vida, Habitação, Saúde e Empresas. Peça já a sua simulação gratuita.",
      },
    ],
  }),
  component: Index,
});

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
  {
    icon: Car,
    title: "Automóvel",
    desc: "Proteção completa para o seu veículo, com as melhores coberturas do mercado.",
  },
  {
    icon: HeartPulse,
    title: "Vida",
    desc: "Segurança financeira para os seus. Tranquilidade em todas as fases da vida.",
  },
  {
    icon: Home,
    title: "Habitação",
    desc: "Casa, recheio e responsabilidade civil. Proteja o seu lar sem preocupações.",
  },
  {
    icon: ShieldCheck,
    title: "Saúde",
    desc: "Acesso rápido a cuidados de saúde privados, para si e para a sua família.",
  },
  {
    icon: Building2,
    title: "Empresas",
    desc: "Soluções à medida do seu negócio: multirriscos, frota, acidentes de trabalho.",
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
      </main>
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#top" className="flex items-center gap-2">
          <span className="grid h-9 w-9 place-items-center rounded-lg bg-primary text-primary-foreground">
            <ShieldCheck className="h-5 w-5" />
          </span>
          <span className="font-display text-lg font-semibold tracking-tight">
            Tomané <span className="text-muted-foreground">Seguros</span>
          </span>
        </a>
        <nav className="hidden items-center gap-8 text-sm font-medium text-muted-foreground md:flex">
          <a href="#servicos" className="transition-colors hover:text-foreground">Serviços</a>
          <a href="#sobre" className="transition-colors hover:text-foreground">Sobre</a>
          <a href="#contacto" className="transition-colors hover:text-foreground">Contacto</a>
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
      <div
        className="absolute inset-0 -z-10"
        style={{ background: "var(--gradient-hero)" }}
      />
      <div className="absolute inset-0 -z-10 opacity-[0.06]" style={{
        backgroundImage:
          "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
        backgroundSize: "24px 24px",
      }} />
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 lg:grid-cols-[1.1fr_1fr] lg:py-28">
        <div className="text-primary-foreground">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-3 py-1 text-xs font-medium tracking-wide text-white/90">
            <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: "var(--gold)" }} />
            Mediadores registados no ASF
          </span>
          <h1 className="mt-6 font-display text-4xl font-semibold leading-[1.05] sm:text-5xl lg:text-6xl">
            Proteja o que <span style={{ color: "var(--gold)" }}>realmente</span> importa.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/80">
            Somos os seus mediadores de seguros de confiança. Comparamos as melhores
            propostas do mercado e acompanhamos-lhe em cada passo — do orçamento
            à participação de sinistro.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#contacto"
              className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-primary shadow-lg transition-all hover:shadow-xl"
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
          <dl className="mt-12 grid max-w-lg grid-cols-3 gap-6 border-t border-white/15 pt-8">
            {[
              { k: "+20", v: "anos de experiência" },
              { k: "+2 500", v: "clientes protegidos" },
              { k: "24h", v: "resposta garantida" },
            ].map((s) => (
              <div key={s.v}>
                <dt className="font-display text-2xl font-semibold" style={{ color: "var(--gold)" }}>
                  {s.k}
                </dt>
                <dd className="mt-1 text-xs uppercase tracking-wider text-white/60">{s.v}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="relative">
          <div
            className="absolute -inset-4 rounded-3xl opacity-40 blur-2xl"
            style={{ background: "var(--gold)" }}
          />
          <img
            src={heroImg}
            alt="Família protegida com mediação de seguros Tomané"
            width={1600}
            height={1200}
            className="relative rounded-3xl object-cover shadow-2xl"
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
        <p className="text-sm font-semibold uppercase tracking-wider text-primary-glow">
          Os nossos seguros
        </p>
        <h2 className="mt-3 font-display text-3xl font-semibold sm:text-4xl">
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
            className="group relative overflow-hidden rounded-2xl border border-border bg-card p-7 transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-elegant)]"
          >
            <div
              className="grid h-12 w-12 place-items-center rounded-xl text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground"
              style={{ backgroundColor: "var(--accent)" }}
            >
              <s.icon className="h-6 w-6" strokeWidth={1.75} />
            </div>
            <h3 className="mt-6 font-display text-xl font-semibold">{s.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
            <a
              href="#contacto"
              className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-primary transition-colors hover:text-primary-glow"
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
    {
      icon: Users,
      title: "Um mediador dedicado",
      desc: "Um único ponto de contacto que conhece o seu perfil e as suas apólices.",
    },
    {
      icon: Clock,
      title: "Apoio em sinistro",
      desc: "Acompanhamento próximo e rápido em todo o processo, do início ao fim.",
    },
    {
      icon: Award,
      title: "Independência total",
      desc: "Não trabalhamos para uma seguradora. Trabalhamos para si.",
    },
  ];

  return (
    <section id="sobre" className="border-y border-border" style={{ background: "var(--gradient-subtle)" }}>
      <div className="mx-auto grid max-w-7xl gap-16 px-6 py-24 lg:grid-cols-2 lg:items-center">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-primary-glow">
            Sobre a Tomané Seguros
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold sm:text-4xl">
            Proximidade que faz a diferença.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            Há mais de duas décadas que a Tomané Seguros ajuda famílias e empresas
            a tomar decisões informadas sobre a sua proteção. Somos mediadores
            independentes: comparamos, negociamos e escolhemos consigo a solução
            certa — sem letras pequenas.
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

        <div className="grid gap-4 sm:grid-cols-2">
          {points.map((p, i) => (
            <div
              key={p.title}
              className={`rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-soft)] ${
                i === 0 ? "sm:translate-y-6" : ""
              } ${i === 2 ? "sm:col-span-2" : ""}`}
            >
              <p.icon className="h-6 w-6 text-primary" strokeWidth={1.75} />
              <h3 className="mt-4 font-display text-lg font-semibold">{p.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
            </div>
          ))}
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
      for (const issue of parsed.error.issues) {
        fe[String(issue.path[0])] = issue.message;
      }
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
          <p className="text-sm font-semibold uppercase tracking-wider text-primary-glow">
            Fale connosco
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold sm:text-4xl">
            Peça a sua simulação gratuita.
          </h2>
          <p className="mt-4 text-muted-foreground">
            Preencha o formulário e um dos nossos mediadores contactá-lo-á em
            menos de 24h úteis. Sem compromisso, sem pressão.
          </p>
          <div className="mt-8 space-y-4 text-sm">
            <a href="tel:+351210000000" className="flex items-center gap-3 text-foreground hover:text-primary">
              <Phone className="h-4 w-4 text-primary" /> +351 210 000 000
            </a>
            <a href="mailto:geral@tomaneseguros.pt" className="flex items-center gap-3 text-foreground hover:text-primary">
              <Mail className="h-4 w-4 text-primary" /> geral@tomaneseguros.pt
            </a>
            <div className="flex items-center gap-3 text-muted-foreground">
              <MapPin className="h-4 w-4 text-primary" /> Av. da República, 100 — Lisboa
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

function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2">
            <span className="grid h-9 w-9 place-items-center rounded-lg bg-white/10">
              <ShieldCheck className="h-5 w-5" />
            </span>
            <span className="font-display text-lg font-semibold">Tomané Seguros</span>
          </div>
          <p className="mt-4 max-w-md text-sm text-white/70">
            Mediadores de seguros independentes. Ajudamos particulares e empresas
            a proteger o que é importante, com transparência e proximidade.
          </p>
          <p className="mt-6 text-xs text-white/50">
            Mediador registado na ASF sob o n.º XXXXXXXX — categoria de Mediador de
            Seguros. Informações verificáveis em www.asf.com.pt.
          </p>
        </div>

        <div>
          <h4 className="text-sm font-semibold">Contactos</h4>
          <ul className="mt-4 space-y-2 text-sm text-white/70">
            <li>+351 210 000 000</li>
            <li>geral@tomaneseguros.pt</li>
            <li>Av. da República, 100 — Lisboa</li>
            <li>Seg–Sex · 9h–19h</li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold">Redes sociais</h4>
          <div className="mt-4 flex gap-3">
            {[Facebook, Instagram, Linkedin].map((Icon, i) => (
              <a
                key={i}
                href="#"
                aria-label="Rede social"
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
          <p>© {new Date().getFullYear()} Tomané Seguros. Todos os direitos reservados.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white">Política de Privacidade</a>
            <a href="#" className="hover:text-white">Livro de Reclamações</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
