import { createFileRoute } from "@tanstack/react-router";

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
  { id: "work", n: "01", label: "Selected Work" },
  { id: "experience", n: "02", label: "Experience" },
  { id: "stack", n: "03", label: "Stack" },
  { id: "background", n: "04", label: "Background" },
  { id: "contact", n: "05", label: "Contact" },
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
  "IBM Full Stack Software Developer Professional Certificate",
  "5-Day AI Agents Intensive — Google AI",
  "Google AI Professional Certificate",
  "Certified Cyber Security Analyst — RedTeam360",
];

function SectionHeading({ n, title }: { n: string; title: string }) {
  return (
    <div className="mb-10 flex items-baseline gap-4 border-t border-border pt-4">
      <span className="label">{n}</span>
      <h2 className="font-display text-2xl tracking-tight md:text-3xl">{title}</h2>
    </div>
  );
}

function Portfolio() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="sticky top-0 z-30 border-b border-border/70 bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#top" className="font-display text-lg tracking-tight">
            Djurslinn<span className="text-primary">.</span>
          </a>
          <nav className="hidden gap-7 md:flex">
            {SECTIONS.map((s) => (
              <a key={s.id} href={`#${s.id}`} className="label link-underline hover:text-foreground">
                {s.label}
              </a>
            ))}
          </nav>
          <a
            href="mailto:djurslinnjameskm@gmail.com"
            className="label rounded-full border border-border px-4 py-2 transition-colors hover:border-primary hover:text-primary"
          >
            Get in touch
          </a>
        </div>
      </header>

      {/* Hero */}
      <section id="top" className="relative overflow-hidden">
        <div className="halo pointer-events-none absolute inset-x-0 top-0 h-[560px] opacity-70" />
        <div className="rule-grid pointer-events-none absolute inset-0 opacity-60" />
        <div className="relative mx-auto max-w-6xl px-6 pb-24 pt-20 md:pt-28">
          <p className="label rise">Kottayam, Kerala — Available for work</p>
          <h1 className="rise mt-6 font-display text-[clamp(2.75rem,9vw,7.5rem)] leading-[0.92] tracking-tight">
            Djurslinn James
          </h1>
          <div className="mt-8 grid gap-10 border-t border-border pt-8 md:grid-cols-12">
            <p className="rise max-w-xl text-base leading-relaxed text-muted-foreground md:col-span-7 md:text-lg">
              BCA graduate and <span className="text-foreground">full stack developer</span> building web
              applications and AI-powered products with Python, Django, React and SQL. I care about clear
              interfaces, dependable data models and shipping real things.
            </p>
            <dl className="rise grid grid-cols-2 gap-6 md:col-span-5 md:grid-cols-2">
              {[
                ["10+", "Projects built"],
                ["8.16", "CGPA / 10"],
                ["3", "Internships & simulations"],
                ["4", "Certifications"],
              ].map(([v, k]) => (
                <div key={k}>
                  <dt className="font-display text-4xl leading-none">{v}</dt>
                  <dd className="label mt-2">{k}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      <main className="mx-auto max-w-6xl px-6 pb-28">
        {/* Work */}
        <section id="work" className="scroll-mt-24 pt-16">
          <SectionHeading n="01" title="Selected Work" />
          <div className="grid gap-6 md:grid-cols-2">
            {PROJECTS.map((p) => (
              <article
                key={p.n}
                className="group relative flex flex-col rounded-lg border border-border bg-card p-7 transition-all duration-500 hover:-translate-y-1 hover:border-accent hover:shadow-[var(--shadow-lift)]"
              >
                <span className="label">{p.n}</span>
                <h3 className="mt-4 font-display text-2xl leading-tight md:text-3xl">{p.title}</h3>
                <p className="mt-2 font-mono text-xs text-primary">{p.stack}</p>
                <ul className="mt-6 space-y-3 border-t border-border pt-5 text-sm leading-relaxed text-muted-foreground">
                  {p.lines.map((l) => (
                    <li key={l} className="flex gap-3">
                      <span className="mt-2 h-px w-4 shrink-0 bg-accent" />
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
                className="group grid gap-4 border-b border-border py-8 transition-colors hover:bg-secondary/60 md:grid-cols-12 md:gap-8 md:px-4"
              >
                <p className="label md:col-span-3">{e.when}</p>
                <div className="md:col-span-4">
                  <h3 className="font-display text-xl leading-snug md:text-2xl">{e.role}</h3>
                  <p className="mt-1 text-sm text-primary">{e.org}</p>
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
          <dl className="grid gap-px overflow-hidden rounded-lg border border-border bg-border">
            {STACK.map((s) => (
              <div key={s.k} className="grid gap-2 bg-card px-6 py-6 md:grid-cols-12 md:items-baseline">
                <dt className="label md:col-span-3">{s.k}</dt>
                <dd className="text-sm leading-relaxed md:col-span-9 md:text-base">{s.v}</dd>
              </div>
            ))}
          </dl>
        </section>

        {/* Background */}
        <section id="background" className="scroll-mt-24 pt-24">
          <SectionHeading n="04" title="Background" />
          <div className="grid gap-12 md:grid-cols-12">
            <div className="space-y-8 md:col-span-7">
              <div className="border-l-2 border-accent pl-6">
                <p className="label">2023 — 2026</p>
                <h3 className="mt-2 font-display text-2xl">BCA — Bachelor of Computer Applications</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  St. Thomas College, Palai (MG University) · CGPA 8.16 / 10
                </p>
              </div>
              <div className="border-l-2 border-border pl-6">
                <p className="label">2021 — 2023</p>
                <h3 className="mt-2 font-display text-2xl">Higher Secondary — Science</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  St. Michael&apos;s HSS Kaduthuruthy, DHSE Kerala · 86.83%
                </p>
              </div>
              <div className="rounded-lg bg-secondary p-6 text-sm leading-relaxed text-muted-foreground">
                Volunteered at the college tech fest OS Exhibition — set up the lab and explained 50+ operating
                system features through live demos. Published 10+ full-stack and AI projects on GitHub.
              </div>
            </div>
            <div className="md:col-span-5">
              <p className="label">Certifications</p>
              <ul className="mt-4 space-y-4">
                {CERTS.map((c) => (
                  <li key={c} className="flex gap-4 border-b border-border pb-4 text-sm leading-relaxed">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    {c}
                  </li>
                ))}
              </ul>
              <p className="label mt-10">Languages</p>
              <p className="mt-3 text-sm text-muted-foreground">
                English (Proficient) · Malayalam (Native)
              </p>
              <p className="label mt-10">Soft skills</p>
              <p className="mt-3 text-sm text-muted-foreground">
                Problem solving · Team collaboration · Communication · Adaptability · Time management
              </p>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="scroll-mt-24 pt-24">
          <SectionHeading n="05" title="Contact" />
          <div className="relative overflow-hidden rounded-xl border border-border bg-card p-10 md:p-16">
            <div className="halo pointer-events-none absolute inset-x-0 -top-24 h-72 opacity-80" />
            <div className="relative">
              <p className="font-display text-[clamp(2rem,5vw,3.75rem)] leading-[1.05] tracking-tight">
                Let&apos;s build something
                <br />
                <span className="italic text-primary">worth shipping.</span>
              </p>
              <div className="mt-10 grid gap-6 border-t border-border pt-8 md:grid-cols-4">
                {[
                  { k: "Email", v: "djurslinnjameskm@gmail.com", href: "mailto:djurslinnjameskm@gmail.com" },
                  { k: "Phone", v: "+91 75599 47412", href: "tel:+917559947412" },
                  {
                    k: "LinkedIn",
                    v: "in/djurslinn-james",
                    href: "https://linkedin.com/in/djurslinn-james",
                  },
                  { k: "GitHub", v: "github.com/djurslinn", href: "https://github.com/djurslinn" },
                ].map((c) => (
                  <div key={c.k}>
                    <p className="label">{c.k}</p>
                    <a
                      href={c.href}
                      target={c.href.startsWith("http") ? "_blank" : undefined}
                      rel="noreferrer"
                      className="link-underline mt-2 inline-block break-all text-sm hover:text-primary"
                    >
                      {c.v}
                    </a>
                  </div>
                ))}
              </div>
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
