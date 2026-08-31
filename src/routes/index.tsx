import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Mail,
  Phone,
  Linkedin,
  Github,
  Code2,
  Layers,
  Database,
  Wrench,
  Sparkles,
  GraduationCap,
  Languages,
  HeartHandshake,
  Sun,
  Moon,
} from "lucide-react";
import { SiGithub, SiInstagram, SiBehance, SiWhatsapp } from "react-icons/si";

import certIbm from "../assets/cert-ibm.jpg";
import certAgents from "../assets/cert-google-agents.jpg";
import certGoogleAi from "../assets/cert-google-ai.jpg";
import certCyber from "../assets/cert-cyber.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Djurslinn James — Full Stack Developer Portfolio" },
      {
        name: "description",
        content:
          "Portfolio of Djurslinn James, BCA graduate and full stack developer in Kerala building web and AI-powered products with Django, React and PostgreSQL.",
      },
      { property: "og:title", content: "Djurslinn James — Full Stack Developer" },
      {
        property: "og:description",
        content:
          "Full stack developer building web and AI-powered products with Django, React, PHP and PostgreSQL.",
      },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Portfolio,
});

const SECTIONS = [
  { id: "work", label: "Work" },
  { id: "experience", label: "Experience" },
  { id: "stack", label: "Stack" },
  { id: "education", label: "Education" },
  { id: "certifications", label: "Certifications" },
  { id: "contact", label: "Contact" },
];

const PROJECTS = [
  {
    n: "01",
    title: "Campus Placement Training System",
    stack: "Django · PostgreSQL · GenAI",
    lines: [
      "Full-stack placement training platform supporting student training and coordinator insight.",
      "Progress dashboards that track performance and placement readiness in real time.",
      "AI-powered evaluation generating personalised feedback across resumes, interviews and assessments.",
    ],
  },
  {
    n: "02",
    title: "Turf Booking Web Application",
    stack: "PHP · MySQL · Chart.js",
    lines: [
      "Real-time booking platform with secure authentication and a normalised schema handling concurrent reservations.",
      "Role-based dashboards with analytics surfacing booking trends over time.",
    ],
  },
];

const EXPERIENCE = [
  {
    role: "UI/UX Design Intern",
    org: "Pacelab, Kochi",
    when: "05/2025 – 06/2025",
    lines: [
      "Designed 5+ UI pages and interactive Figma prototypes for a college book rental app.",
      "Built user workflows and empathy maps alongside a cross-functional team.",
    ],
  },
  {
    role: "Advanced Software Engineering Simulation",
    org: "Walmart Global Tech · Forage",
    when: "05/2026",
    lines: ["Implemented an optimised heap structure and designed UML/ER models for a logistics system."],
  },
  {
    role: "GenAI Data Analytics Simulation",
    org: "Tata · Forage",
    when: "04/2026",
    lines: ["Applied GenAI and prompt engineering to extract insights and generate recommendations."],
  },
];

const STACK = [
  { k: "Languages", v: "Python · Java · C/C++ · JavaScript · PHP" },
  { k: "Web & Frameworks", v: "Django · React.js · Next.js · REST APIs · HTML5 · CSS3" },
  { k: "Data", v: "MySQL · PostgreSQL · DBMS" },
  { k: "Tools", v: "Git · GitHub · VS Code · Android Studio · Figma" },
  { k: "Concepts", v: "OOP · DSA · SDLC · System Design · GenAI · Agentic AI" },
];

const CERTS = [
  { title: "IBM Full Stack Software Developer", issuer: "IBM · Coursera", img: certIbm },
  { title: "5-Day AI Agents Intensive", issuer: "Google AI", img: certAgents },
  { title: "Google AI Professional Certificate", issuer: "Google", img: certGoogleAi },
  { title: "Certified Cyber Security Analyst", issuer: "RedTeam360", img: certCyber },
];

const STACK_ICONS = [Code2, Layers, Database, Wrench, Sparkles];

const SOCIALS = [
  { k: "GitHub", href: "https://github.com/djurslinn", icon: SiGithub },
  { k: "LinkedIn", href: "https://linkedin.com/in/djurslinn-james", icon: Linkedin },
  { k: "Instagram", href: "https://instagram.com", icon: SiInstagram },
  { k: "Behance", href: "https://behance.net", icon: SiBehance },
  { k: "WhatsApp", href: "https://wa.me/917559947412", icon: SiWhatsapp },
];

/* ---------- primitives ---------- */

function SectionHeading({ n, title }: { n: string; title: string }) {
  return (
    <div className="reveal mb-12">
      <div className="flex items-baseline gap-6 border-t border-border pt-5">
        <span className="label">{n}</span>
        <h2 className="font-display text-3xl uppercase leading-none tracking-[0.06em] md:text-5xl">
          {title}
        </h2>
        <span
          aria-hidden
          className="hollow-text ml-auto hidden font-display text-3xl uppercase leading-none tracking-[0.14em] md:block md:text-5xl"
        >
          {title}
        </span>
      </div>
    </div>
  );
}

function Arc({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 200" className={className} fill="none" aria-hidden>
      <circle cx="100" cy="100" r="99" stroke="currentColor" strokeWidth="0.5" opacity="0.45" />
      <circle cx="100" cy="100" r="70" stroke="currentColor" strokeWidth="0.5" opacity="0.3" />
      <path d="M100 1 A99 99 0 0 1 199 100" stroke="currentColor" strokeWidth="1.4" />
      <line x1="0" y1="100" x2="200" y2="100" stroke="currentColor" strokeWidth="0.5" opacity="0.3" />
      <line x1="100" y1="0" x2="100" y2="200" stroke="currentColor" strokeWidth="0.5" opacity="0.3" />
    </svg>
  );
}

function useReveal() {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>(".reveal"));
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            (e.target as HTMLElement).classList.add("in-view");
            io.unobserve(e.target as HTMLElement);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -8% 0px" }
    );
    els.forEach((el, i) => {
      el.style.transitionDelay = `${(i % 4) * 80}ms`;
      io.observe(el);
    });
    return () => io.disconnect();
  }, []);
}

function useTheme() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("theme");
    const prefers = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const isDark = stored ? stored === "dark" : prefers;
    setDark(isDark);
    document.documentElement.classList.toggle("dark", isDark);
  }, []);

  const toggle = () => {
    setDark((d) => {
      const next = !d;
      document.documentElement.classList.toggle("dark", next);
      localStorage.setItem("theme", next ? "dark" : "light");
      return next;
    });
  };

  return { dark, toggle };
}

function Loader() {
  const [gone, setGone] = useState(false);
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    const a = setTimeout(() => setExiting(true), 1150);
    const b = setTimeout(() => setGone(true), 1900);
    return () => {
      clearTimeout(a);
      clearTimeout(b);
    };
  }, []);

  if (gone) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col justify-end bg-background px-6 pb-10 ${exiting ? "loader-exit" : ""}`}
    >
      <div className="mx-auto w-full max-w-6xl">
        <p className="label mb-4">Djurslinn James — Portfolio</p>
        <p className="font-display text-[clamp(2.5rem,10vw,7rem)] uppercase leading-none tracking-[0.02em]">
          Frozen<span className="hollow-text"> Lake</span>
        </p>
        <div className="mt-8 h-px w-full bg-border">
          <div className="loader-bar h-px w-full bg-primary" />
        </div>
      </div>
    </div>
  );
}

/* ---------- page ---------- */

function Portfolio() {
  useReveal();
  const { dark, toggle } = useTheme();

  return (
    <div className="relative min-h-screen bg-background text-foreground">
      <Loader />

      {/* Header */}
      <header className="sticky top-0 z-30 border-b border-border bg-background/85 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#top" className="font-display text-base uppercase tracking-[0.18em]">
            Djurslinn<span className="text-primary">.</span>
          </a>
          <nav className="hidden gap-7 lg:flex">
            {SECTIONS.map((s) => (
              <a key={s.id} href={`#${s.id}`} className="label link-underline hover:text-foreground">
                {s.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <button
              onClick={toggle}
              aria-label="Toggle colour theme"
              className="grid size-9 place-items-center border border-border text-foreground transition-colors duration-300 hover:border-primary hover:text-primary"
            >
              {dark ? <Sun className="size-4" /> : <Moon className="size-4" />}
            </button>
            <a
              href="mailto:djurslinnjameskm@gmail.com"
              className="label hidden items-center gap-2 border border-foreground px-4 py-2.5 text-foreground transition-colors duration-300 hover:bg-foreground hover:text-background sm:inline-flex"
            >
              <Mail className="size-3.5" />
              Get in touch
            </a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section id="top" className="relative overflow-hidden border-b border-border">
        <div className="fine-grid pointer-events-none absolute inset-0 opacity-70" />
        <Arc className="pointer-events-none absolute -right-24 -top-24 size-[420px] text-primary/35 spin-slow" />
        <div className="relative mx-auto grid max-w-6xl gap-10 px-6 pb-16 pt-16 md:grid-cols-12 md:gap-8 md:pb-20 md:pt-24">
          <div className="md:col-span-8">
            <p className="label rise flex items-center gap-2.5">
              <span className="ping-dot relative inline-block size-1.5 rounded-full bg-primary text-primary" />
              Full stack developer — Kerala, India
            </p>
            <h1 className="rise mt-7 font-display text-[clamp(3rem,11vw,8rem)] uppercase leading-[0.86] tracking-[0.01em]">
              Djurslinn
              <br />
              <span className="hollow-text">James</span>
            </h1>
            <div className="rise mt-8 h-px w-full bg-border">
              <div className="draw-line h-px w-2/3 bg-primary" />
            </div>
            <div className="mt-8 grid gap-8 sm:grid-cols-12">
              <p className="rise text-sm leading-relaxed text-muted-foreground sm:col-span-7">
                BCA graduate building web and AI-powered products with Django, React and PostgreSQL.
                Clear interfaces, dependable data models, shipped work.
              </p>
              <div className="rise flex flex-col gap-3 sm:col-span-5">
                <a
                  href="#work"
                  className="group inline-flex items-center justify-between border border-foreground px-5 py-3.5 text-sm font-semibold uppercase tracking-[0.12em] transition-colors duration-300 hover:bg-foreground hover:text-background"
                >
                  Selected work
                  <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
                <a
                  href="#contact"
                  className="group inline-flex items-center justify-between border border-border px-5 py-3.5 text-sm font-semibold uppercase tracking-[0.12em] text-muted-foreground transition-colors duration-300 hover:border-primary hover:text-primary"
                >
                  Let&apos;s talk
                  <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5" />
                </a>
              </div>
            </div>
          </div>

          {/* Right rail — index + meta */}
          <aside className="rise flex flex-col justify-between gap-8 border-border md:col-span-4 md:border-l md:pl-8">
            <div>
              <p className="label">Index</p>
              <ul className="mt-4 space-y-2">
                {SECTIONS.map((s, i) => (
                  <li key={s.id}>
                    <a
                      href={`#${s.id}`}
                      className="group flex items-baseline justify-between border-b border-border py-2 text-sm uppercase tracking-[0.1em] transition-colors duration-300 hover:text-primary"
                    >
                      <span>{s.label}</span>
                      <span className="label transition-transform duration-300 group-hover:-translate-y-0.5">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex items-center gap-2">
              {SOCIALS.map((s) => (
                <a
                  key={s.k}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.k}
                  className="grid size-9 place-items-center border border-border text-muted-foreground transition-all duration-300 hover:-translate-y-0.5 hover:border-primary hover:text-primary"
                >
                  <s.icon className="size-4" />
                </a>
              ))}
            </div>
          </aside>
        </div>

        {/* Stat strip */}
        <dl className="relative mx-auto grid max-w-6xl grid-cols-2 border-t border-border px-6 md:grid-cols-4">
          {[
            ["10+", "Projects built"],
            ["8.16", "CGPA / 10"],
            ["3", "Internships"],
            ["4", "Certifications"],
          ].map(([v, k], i) => (
            <div
              key={k}
              className={`py-6 ${i > 0 ? "md:border-l md:border-border md:pl-8" : ""} ${i % 2 === 1 ? "max-md:border-l max-md:border-border max-md:pl-6" : ""} ${i > 1 ? "max-md:border-t" : ""}`}
            >
              <dt className="font-display text-3xl leading-none tracking-[0.02em]">{v}</dt>
              <dd className="label mt-2">{k}</dd>
            </div>
          ))}
        </dl>
      </section>

      <main className="mx-auto max-w-6xl px-6 pb-28">
        {/* Work */}
        <section id="work" className="scroll-mt-24 pt-24">
          <SectionHeading n="01" title="Selected Work" />
          <div className="grid gap-px bg-border md:grid-cols-2">
            {PROJECTS.map((p) => (
              <article
                key={p.n}
                className="reveal group relative flex flex-col bg-background p-8 transition-colors duration-500 hover:bg-secondary/60"
              >
                <div className="flex items-start justify-between">
                  <span className="label">{p.n}</span>
                  <span className="grid size-9 place-items-center border border-border text-muted-foreground transition-colors duration-300 group-hover:border-primary group-hover:text-primary">
                    <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:rotate-45" />
                  </span>
                </div>
                <h3 className="mt-6 font-display text-2xl uppercase leading-tight tracking-[0.04em] md:text-3xl">
                  {p.title}
                </h3>
                <p className="label mt-3 text-primary">{p.stack}</p>
                <ul className="mt-7 space-y-3 border-t border-border pt-6 text-sm leading-relaxed text-muted-foreground">
                  {p.lines.map((l) => (
                    <li key={l} className="flex gap-3">
                      <span className="mt-2.5 h-px w-5 shrink-0 bg-primary/70" />
                      {l}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        {/* Experience */}
        <section id="experience" className="scroll-mt-24 pt-24">
          <SectionHeading n="02" title="Experience" />
          <ul>
            {EXPERIENCE.map((e) => (
              <li
                key={e.role}
                className="reveal group grid gap-4 border-b border-border py-8 transition-colors duration-500 hover:bg-secondary/50 md:grid-cols-12 md:gap-8 md:px-4"
              >
                <p className="label md:col-span-3">{e.when}</p>
                <div className="md:col-span-4">
                  <h3 className="font-display text-xl uppercase leading-snug tracking-[0.04em] md:text-2xl">
                    {e.role}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-primary">{e.org}</p>
                </div>
                <div className="space-y-2 text-sm leading-relaxed text-muted-foreground md:col-span-5">
                  {e.lines.map((l) => (
                    <p key={l}>{l}</p>
                  ))}
                </div>
              </li>
            ))}
          </ul>
        </section>

        {/* Stack */}
        <section id="stack" className="scroll-mt-24 pt-24">
          <SectionHeading n="03" title="Stack" />
          <dl>
            {STACK.map((s, si) => {
              const Icon = STACK_ICONS[si % STACK_ICONS.length]!;
              return (
                <div
                  key={s.k}
                  className="reveal group grid gap-3 border-b border-border py-6 transition-colors duration-500 hover:bg-secondary/50 md:grid-cols-12 md:items-center md:px-4"
                >
                  <dt className="flex items-center gap-3 md:col-span-3">
                    <Icon className="size-4 text-primary transition-transform duration-300 group-hover:rotate-12" />
                    <span className="label">{s.k}</span>
                  </dt>
                  <dd className="flex flex-wrap gap-x-4 gap-y-2 md:col-span-9">
                    {s.v.split(" · ").map((t) => (
                      <span
                        key={t}
                        className="text-sm text-muted-foreground transition-colors duration-300 hover:text-foreground"
                      >
                        {t}
                      </span>
                    ))}
                  </dd>
                </div>
              );
            })}
          </dl>
        </section>

        {/* Education */}
        <section id="education" className="scroll-mt-24 pt-24">
          <SectionHeading n="04" title="Education" />
          <div className="grid gap-10 md:grid-cols-12">
            <div className="reveal space-y-8 md:col-span-7">
              <div className="border-l border-primary pl-6">
                <p className="label flex items-center gap-2">
                  <GraduationCap className="size-4 text-primary" /> 2023 — 2026
                </p>
                <h3 className="mt-2 font-display text-xl uppercase tracking-[0.05em] md:text-2xl">
                  BCA — Bachelor of Computer Applications
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  St. Thomas College, Palai (MG University) · CGPA 8.16 / 10
                </p>
              </div>
              <div className="border-l border-gold pl-6">
                <p className="label flex items-center gap-2">
                  <GraduationCap className="size-4 text-gold" /> 2021 — 2023
                </p>
                <h3 className="mt-2 font-display text-xl uppercase tracking-[0.05em] md:text-2xl">
                  Higher Secondary — Science
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  St. Michael&apos;s HSS Kaduthuruthy, DHSE Kerala · 86.83%
                </p>
              </div>
              <p className="border-t border-border pt-6 text-sm leading-relaxed text-muted-foreground">
                Volunteered at the college tech fest OS Exhibition — set up the lab and explained 50+
                operating system features through live demos. Published 10+ full-stack and AI projects on
                GitHub.
              </p>
            </div>
            <div className="reveal md:col-span-5 md:border-l md:border-border md:pl-8">
              <p className="label flex items-center gap-2">
                <Languages className="size-4 text-primary" /> Languages
              </p>
              <p className="mt-3 text-sm text-muted-foreground">
                English (Proficient) · Malayalam (Native)
              </p>
              <p className="label mt-10 flex items-center gap-2">
                <HeartHandshake className="size-4 text-primary" /> Soft skills
              </p>
              <p className="mt-3 text-sm text-muted-foreground">
                Problem solving · Team collaboration · Communication · Adaptability · Time management
              </p>
              <Arc className="mt-12 hidden size-40 text-primary/40 md:block" />
            </div>
          </div>
        </section>

        {/* Certifications */}
        <section id="certifications" className="scroll-mt-24 pt-24">
          <SectionHeading n="05" title="Certifications" />
          <div className="grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-4">
            {CERTS.map((c, ci) => (
              <article
                key={c.title}
                className="reveal group bg-background p-5 transition-colors duration-500 hover:bg-secondary/60"
              >
                <div className="overflow-hidden border border-border">
                  <img
                    src={c.img}
                    alt={`${c.title} certificate illustration`}
                    loading="lazy"
                    className="aspect-4/3 w-full object-cover grayscale transition-all duration-700 group-hover:scale-[1.04] group-hover:grayscale-0"
                  />
                </div>
                <p className="label mt-5">{String(ci + 1).padStart(2, "0")}</p>
                <h3 className="mt-2 font-display text-base uppercase leading-snug tracking-[0.05em]">
                  {c.title}
                </h3>
                <p className="mt-2 text-xs text-muted-foreground">{c.issuer}</p>
              </article>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="scroll-mt-24 pt-24">
          <SectionHeading n="06" title="Contact" />
          <div className="reveal relative overflow-hidden border-t border-border pt-12">
            <Arc className="pointer-events-none absolute -right-16 -top-10 size-64 text-primary/30 spin-slow" />
            <p className="font-display text-[clamp(2.2rem,7vw,5rem)] uppercase leading-[0.92] tracking-[0.02em]">
              Let&apos;s build something
              <br />
              <span className="hollow-text">worth shipping.</span>
            </p>
            <a
              href="mailto:djurslinnjameskm@gmail.com"
              className="group mt-10 inline-flex items-center gap-3 border border-foreground px-7 py-4 text-sm font-semibold uppercase tracking-[0.14em] transition-colors duration-300 hover:bg-foreground hover:text-background"
            >
              <Mail className="size-4" />
              Send me an email
              <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <div className="mt-14 grid gap-8 border-t border-border pt-10 md:grid-cols-4">
              {[
                {
                  k: "Email",
                  v: "djurslinnjameskm@gmail.com",
                  href: "mailto:djurslinnjameskm@gmail.com",
                  icon: Mail,
                },
                { k: "Phone", v: "+91 75599 47412", href: "tel:+917559947412", icon: Phone },
                {
                  k: "LinkedIn",
                  v: "in/djurslinn-james",
                  href: "https://linkedin.com/in/djurslinn-james",
                  icon: Linkedin,
                },
                {
                  k: "GitHub",
                  v: "github.com/djurslinn",
                  href: "https://github.com/djurslinn",
                  icon: Github,
                },
              ].map((c) => (
                <div key={c.k}>
                  <p className="label flex items-center gap-2">
                    <c.icon className="size-3.5 text-primary" />
                    {c.k}
                  </p>
                  <a
                    href={c.href}
                    target={c.href.startsWith("http") ? "_blank" : undefined}
                    rel="noreferrer"
                    className="link-underline mt-2 inline-block break-all text-sm font-medium hover:text-primary"
                  >
                    {c.v}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-6 py-8 md:flex-row md:items-center md:justify-between">
          <p className="label">© 2026 Djurslinn James</p>
          <p className="label">Kottayam, Kerala — India</p>
        </div>
      </footer>
    </div>
  );
}
