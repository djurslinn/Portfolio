import { createFileRoute } from "@tanstack/react-router";
import React, { useEffect, useRef, useState } from "react";
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
  Sun,
  Moon,
  ChevronLeft,
  ChevronRight,
  Download,
  Menu,
  X,
  Award,
} from "lucide-react";
import { SiGithub, SiInstagram, } from "react-icons/si";


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
    url: "https://github.com/djurslinn/campus_placement_project", //  project URL
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
    url: "https://github.com/djurslinn/turf-booking-system", // TODO: add project URL
    lines: [
      "Real-time booking platform with secure authentication and a normalised schema handling concurrent reservations.",
      "Role-based dashboards with analytics surfacing booking trends over time.",
    ],
  },

  {
    n: "03",

    title: "SmartScout — Football Trial Analytics Platform",

    stack: "Django · React · Python · scikit-learn",

    url: "https://github.com/djurslinn/SmartScout",

    lines: [
      "Full-stack scouting platform that converts real-world drill evaluations into normalized scores, performance tiers, and position-specific player insights.",

      "ML-powered analytics with z-score consistency analysis, player recommendations, team building, interactive dashboards, and automated trial reports.",
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
  { title: "IBM Full Stack Software Developer", issuer: "IBM · Coursera", url: "https://www.coursera.org/account/accomplishments/specialization/S1NMO0JE6Y8D" /* TODO: add cert URL */ },
  { title: "5-Day AI Agents Intensive", issuer: "Google AI", url: "https://www.kaggle.com/certification/badges/djurslinnjameskm/105" /* TODO: add cert URL */ },
  { title: "Google AI Professional Certificate", issuer: "Google", url: "https://www.coursera.org/account/accomplishments/specialization/BY0T8BCEVGE3" /* TODO: add cert URL */ },
  { title: "Certified Cyber Security Analyst", issuer: "RedTeam360", url: "https://360.redteamacademy.com/course/certverify/E0I6WUNVV6" /* TODO: add cert URL */ },
];

const STACK_ICONS = [Code2, Layers, Database, Wrench, Sparkles];

const SOCIALS = [
  { k: "GitHub", href: "https://github.com/djurslinn", icon: SiGithub },
  { k: "LinkedIn", href: "https://linkedin.com/in/djurslinn-james", icon: Linkedin },
  { k: "Instagram", href: "https://instagram.com/djurslinn", icon: SiInstagram },

];

/* ---------- primitives ---------- */


function useMediaQuery(query: string) {
  const [matches, setMatches] = useState(false);
  useEffect(() => {
    const media = window.matchMedia(query);
    setMatches(media.matches);
    const listener = (e: MediaQueryListEvent) => setMatches(e.matches);
    media.addEventListener("change", listener);
    return () => media.removeEventListener("change", listener);
  }, [query]);
  return matches;
}

function NavBtn({
  onClick,
  disabled,
  children,
}: {
  onClick: () => void;
  disabled: boolean;
  children: React.ReactNode;
}) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className="grid size-9 place-items-center border border-border text-muted-foreground transition-all duration-300 hover:border-primary hover:text-primary disabled:opacity-25 disabled:cursor-not-allowed"
    >
      {children}
    </button>
  );
}

function ProjectCarousel() {
  const [idx, setIdx] = useState(0);
  const p = PROJECTS[idx]!;
  return (
    <div className="border border-border">
      <div className="relative overflow-hidden aspect-square sm:aspect-[16/9] md:aspect-[21/9]">
        <a
          key={idx}
          href={p.url}
          target="_blank"
          rel="noreferrer"
          style={{ animation: "carousel-fade 0.4s cubic-bezier(0.22,1,0.36,1)" }}
          className="absolute inset-0 group flex flex-col bg-background p-8 md:p-12 transition-colors duration-500 hover:bg-secondary/60 overflow-y-auto"
        >
          <div className="flex items-start justify-end">
            <span className="grid size-9 place-items-center border border-border text-muted-foreground transition-colors duration-300 group-hover:border-primary group-hover:text-primary">
              <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:rotate-45" />
            </span>
          </div>
          <h3 className="mt-6 font-display text-2xl uppercase leading-tight tracking-[0.04em] md:text-4xl">
            {p.title}
          </h3>
          <p className="label mt-3 text-primary">{p.stack}</p>
          <ul className="mt-8 space-y-3 border-t border-border pt-6 text-sm leading-relaxed text-muted-foreground">
            {p.lines.map((l) => (
              <li key={l} className="flex gap-3">
                <span className="mt-2.5 h-px w-5 shrink-0 bg-primary/70" />
                {l}
              </li>
            ))}
          </ul>
        </a>
      </div>
      <div className="flex items-center justify-between border-t border-border px-8 py-4">
        <span className="label">
          {String(idx + 1).padStart(2, "0")} / {String(PROJECTS.length).padStart(2, "0")}
        </span>
        <div className="flex gap-2">
          <NavBtn onClick={() => setIdx((i) => i - 1)} disabled={idx === 0}>
            <ChevronLeft className="size-4" />
          </NavBtn>
          <NavBtn onClick={() => setIdx((i) => i + 1)} disabled={idx === PROJECTS.length - 1}>
            <ChevronRight className="size-4" />
          </NavBtn>
        </div>
      </div>
    </div>
  );
}

function CertCarousel() {
  const n = CERTS.length;
  const [center, setCenter] = useState(0);
  const [sliding, setSliding] = useState(false);
  const busyRef = useRef(false);

  const go = (dir: 1 | -1) => {
    if (busyRef.current || n <= 1) return;

    busyRef.current = true;
    setSliding(true);

    setTimeout(() => {
      setCenter((c) => (c + dir + n) % n);
      setSliding(false);

      setTimeout(() => {
        busyRef.current = false;
      }, 30);
    }, 280);
  };

  const cards = [-1, 0, 1].map((offset) => ({
    cert: CERTS[(center + offset + n) % n]!,
    active: offset === 0,
  }));

  return (
    <div className="border border-border p-2">
      {/* Cards */}
      <div className="grid grid-cols-1 gap-2 md:grid-cols-3">
        {cards.map(({ cert, active }, index) => (
          <div
            key={`${cert.title}-${index}`}
            className={`
    ${index === 0 ? "flex" : "hidden md:flex"}
    relative min-h-[280px]
    flex-col items-center justify-center
    overflow-hidden
    p-8 text-center
    ${sliding ? "opacity-60" : "opacity-100"}
    transition-opacity duration-300
  `}
          >
            {/* Active card focus */}
            {active && (
              <>
                {/* Top-left */}
                <span className="pointer-events-none absolute left-1 top-1 z-20 h-6 w-6 border-l-2 border-t-2 border-primary" />

                {/* Top-right */}
                <span className="pointer-events-none absolute right-1 top-1 z-20 h-6 w-6 border-r-2 border-t-2 border-primary" />

                {/* Bottom-left */}
                <span className="pointer-events-none absolute bottom-1 left-1 z-20 h-6 w-6 border-b-2 border-l-2 border-primary" />

                {/* Bottom-right */}
                <span className="pointer-events-none absolute bottom-1 right-1 z-20 h-6 w-6 border-b-2 border-r-2 border-primary" />
              </>
            )}
            {/* Certificate SVG Background */}
            <svg
              className="absolute inset-5 h-[calc(100%-2.5rem)] w-[calc(100%-2.5rem)] border border-border p-3"
              viewBox="0 0 400 240"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              {/* Certificate paper */}
              <path
                d="
        M 38 0
        H 362

        C 362 22 378 38 400 38
        V 202

        C 378 202 362 218 362 240
        H 38

        C 38 218 22 202 0 202
        V 38

        C 22 38 38 22 38 0

        Z
      "
                fill="var(--background)"
                stroke="var(--border)"
                strokeWidth="1.5"

              />


            </svg>

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center">
              <Award className="size-6 text-gold" />

              <h3
                className="
        mt-2 max-w-[85%]
        font-display text-xl uppercase
        leading-tight tracking-[0.04em]
        md:text-2xl
      "
              >
                {cert.title}
              </h3>

              <p className="mt-3 text-sm text-muted-foreground">
                {cert.issuer}
              </p>

              <a
                href={cert.url}
                target="_blank"
                rel="noreferrer"
                className="
        group mt-6 flex items-center gap-2
        border border-border px-4 py-2
        text-xs uppercase tracking-[0.1em]
        transition-colors
        hover:border-[var(--gold)]
        hover:text-[var(--gold)]
      "
              >
                View

                <ArrowUpRight
                  className="
          size-3.5
          transition-transform duration-300
          group-hover:-translate-y-0.5
          group-hover:translate-x-0.5
        "
                />
              </a>
            </div>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-between  px-5 py-4">
        {/* navigation */}
      </div>
      <div
        className="
          flex items-center justify-between
          border-t border-border
          px-5 py-4 
        "
      >
        <span className="font-mono text-xs text-muted-foreground">
          {String(center + 1).padStart(2, "0")} /{" "}
          {String(n).padStart(2, "0")}
        </span>

        <div className="flex gap-2">
          <NavBtn onClick={() => go(-1)} disabled={false}>
            <ChevronLeft className="size-4" />
          </NavBtn>

          <NavBtn onClick={() => go(1)} disabled={false}>
            <ChevronRight className="size-4" />
          </NavBtn>
        </div>
      </div>
    </div>
  );
}

function SectionHeading({ title }: { title: string }) {
  return (
    <div className="mb-12">
      <div className="flex items-baseline gap-6 border-t-2 border-primary pt-5">

        <h2 className="font-display text-3xl uppercase leading-none tracking-[0.06em] md:text-5xl">
          {title}
        </h2>
      </div>
    </div>
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


/* ---------- page ---------- */

function Portfolio() {
  useReveal();
  const { dark, toggle } = useTheme();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-background text-foreground">

      {/* Crosshatch Texture */}
      <div
        className="pointer-events-none fixed inset-0 z-10 opacity-[0.025] dark:opacity-[0.04]"
        style={{
          backgroundImage: `
      linear-gradient(
        45deg,
        var(--foreground) 1px,
        transparent 1px
      ),
      linear-gradient(
        -45deg,
        var(--foreground) 1px,
        transparent 1px
      )
    `,
          backgroundSize: "8px 8px",
        }}
      />

      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-border bg-background/85 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#top" className="flex items-center gap-3">
            <img
              src="/dj.svg"
              alt="Djurslinn James logo"
              className="size-9 dark:brightness-0 dark:invert"
            /></a>
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
              {dark ? <Sun className="size-4 text-gold" /> : <Moon className="size-4 text-foreground" />}
            </button>
            <a
              href="/Djurslinn_James_Resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="label hidden items-center gap-2 border border-foreground px-4 py-2.5 text-foreground transition-colors duration-300 hover:bg-foreground hover:text-background sm:inline-flex"
            >
              <Download className="size-3.5" />
              Download Resume
            </a>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="grid size-9 place-items-center border border-border text-foreground transition-colors duration-300 hover:border-primary hover:text-primary lg:hidden"
            >
              {isMobileMenuOpen ? <X className="size-4" /> : <Menu className="size-4" />}
            </button>
          </div>
        </div>

        {/* Mobile menu dropdown */}
        {isMobileMenuOpen && (
          <div className="border-t border-border bg-background lg:hidden shadow-xl">
            <nav className="flex flex-col p-6 space-y-6">
              {SECTIONS.map((s) => (
                <a
                  key={s.id}
                  href={`#${s.id}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="font-display text-lg uppercase tracking-wider text-foreground hover:text-primary transition-colors"
                >
                  {s.label}
                </a>
              ))}
              <a
                href="/Djurslinn_James_Resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="label flex items-center justify-center gap-2 border border-foreground px-4 py-3 text-foreground transition-colors duration-300 hover:bg-foreground hover:text-background"
              >
                <Download className="size-4" />
                Download Resume
              </a>
            </nav>
          </div>
        )}
      </header>

      {/* Hero */}
      <section id="top" className="relative overflow-hidden border-b border-border">
        <div className="relative mx-auto grid max-w-6xl gap-10 px-6 pb-16 pt-16 md:grid-cols-12 md:gap-8 md:pb-20 md:pt-24">
          <div className="md:col-span-12">
            <p className="label rise flex items-center gap-2.5">
              <span className="ping-dot relative inline-block size-1.5 rounded-full bg-primary text-primary" />
              Software developer — Kerala, India
            </p>
            <h1 className="rise mt-7 font-display text-[clamp(3rem,11vw,8rem)] uppercase leading-[0.86] tracking-[0.01em]">
              <span className="inline-block">
                {"Djurslinn".split("").map((char, i) => (
                  <span key={i} className="fill-to-stroke inline-block cursor-default">
                    {char}
                  </span>
                ))}
              </span>
              <br />
              <span className="inline-block">
                {"James".split("").map((char, i) => (
                  <span key={i} className="fill-to-stroke inline-block cursor-default">
                    {char}
                  </span>
                ))}
              </span>
            </h1>
            <div className="mt-2 ml-auto flex items-center justify-end gap-2">
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
            <div className="rise mt-8 h-px w-full bg-border">
              <div className="draw-line h-px w-2/3 bg-primary" />
            </div>
            <div className="mt-8 grid gap-8 sm:grid-cols-12">
              <p className="rise text-sm leading-relaxed text-muted-foreground sm:col-span-7 md:col-span-8">
                <p>
                  I’m a <strong>BCA graduate</strong> and <strong>passionate software developer.</strong><br />
                  I enjoy <strong>building practical projects</strong> and learning continuously.<br />
                  I’m always exploring new technologies and improving my skills.<br />
                  Curious about new ideas, challenges, and ways to build better solutions.<br />
                  <strong>Learning continuously, building constantly </strong>and open to new opportunities.
                </p>
              </p>
              <div className="rise flex flex-col gap-3 sm:col-span-5 md:col-span-4">
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
        </div>

        {/* Stat strip */}
        <div className="border-y border-border">
          <dl className="mx-auto grid max-w-6xl grid-cols-2 md:grid-cols-4">
            {[
              ["100%", "Passionate developer"],
              ["Every day", "Learning & evolving"],
              ["60+", "Commits & counting"],
              ["∞", "Problems to solve"],

            ].map(([value, label], i) => (
              <div
                key={label}
                className={`
          px-6 py-8
          ${i !== 0 ? "border-l border-border" : ""}
          ${i >= 2 ? "max-md:border-t" : ""}
        `}
              >
                <dt className="font-display text-3xl font-medium tracking-tight">
                  {value}
                </dt>
                <dd className="mt-2 text-xs uppercase tracking-[0.12em] text-muted-foreground">
                  {label}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <main className="mx-auto max-w-6xl px-6 pb-28">
        {/* Work */}
        <section id="work" className="scroll-mt-24 pt-24">
          <SectionHeading title="Selected Work" />
          <div>
            <ProjectCarousel />
          </div>
        </section>


        {/* Experience */}
        <section id="experience" className="scroll-mt-24 pt-24">
          <SectionHeading title="Experience" />

          <div className="relative mt-8 ml-3 border-l border-border">
            <ul>
              {EXPERIENCE.map((e, index) => (
                <li
                  key={e.role}
                  className="reveal group relative pb-12 pl-8 last:pb-0 md:pl-10"
                >
                  {/* Timeline Dot */}
                  <span
                    className="
              absolute -left-[5px] top-1.5
              h-2.5 w-2.5 rounded-full
              border border-border
              bg-background
              transition-all duration-300
              group-hover:scale-125
              group-hover:bg-primary
            "
                  />

                  <div
                    className="
    grid gap-2 rounded-sm p-5
    transition-all duration-300
    hover:bg-secondary/80
    md:grid-cols-12 md:gap-8
  "
                  >
                    {/* Date */}
                    <div className="md:col-span-3">
                      <p className="label transition-colors duration-300 group-hover:text-primary">
                        {e.when}
                      </p>
                    </div>

                    {/* Role + Organization */}
                    <div className="md:col-span-4">
                      <h3 className="font-display text-xl uppercase leading-snug tracking-[0.04em] md:text-2xl">
                        {e.role}
                      </h3>

                      <p className="mt-1 text-sm font-medium text-primary">
                        {e.org}
                      </p>
                    </div>

                    {/* Description */}
                    <div className="space-y-2 text-sm leading-relaxed text-muted-foreground md:col-span-5">
                      {e.lines.map((l) => (
                        <p key={l}>{l}</p>
                      ))}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Stack */}
        <section id="stack" className="scroll-mt-24 pt-24">
          <SectionHeading title="Stack" />
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
                  <dd className="flex flex-wrap gap-2 md:col-span-9">
                    {s.v.split(" · ").map((t) => (
                      <span
                        key={t}
                        className="border border-border px-3 py-1.5 text-sm text-muted-foreground transition-all duration-300 hover:border-primary hover:text-primary hover:-translate-y-0.5"
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
          <SectionHeading title="Education" />
          <div className="grid gap-10 md:grid-cols-2">
            <div className="reveal border-l border-primary pl-6">
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
            <div className="reveal border-l border-gold pl-6">
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
          </div>
        </section>

        {/* Certifications */}
        <section id="certifications" className="scroll-mt-24 pt-24">
          <SectionHeading title="Certifications" />
          <CertCarousel />
        </section>

        {/* Contact */}
        <section id="contact" className="scroll-mt-24 pt-24">
          <SectionHeading title="Contact" />
          <div className="reveal relative overflow-hidden border-t border-border pt-12">
            <p className="font-display text-[clamp(1.4rem,3.5vw,2.8rem)] uppercase leading-[0.95] tracking-[0.02em]">
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
