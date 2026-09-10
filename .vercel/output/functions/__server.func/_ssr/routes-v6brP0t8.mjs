import { r as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { _ as ChevronLeft, a as Phone, b as ArrowRight, c as Mail, d as GraduationCap, f as Github, g as ChevronRight, h as CodeXml, i as Sparkles, l as Linkedin, m as Database, n as Wrench, o as Moon, p as Download, r as Sun, s as Menu, t as X, u as Layers, v as Award, y as ArrowUpRight } from "../_libs/lucide-react.mjs";
import { n as SiInstagram, t as SiGithub } from "../_libs/react-icons.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-v6brP0t8.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var SECTIONS = [
	{
		id: "work",
		label: "Work"
	},
	{
		id: "experience",
		label: "Experience"
	},
	{
		id: "stack",
		label: "Stack"
	},
	{
		id: "education",
		label: "Education"
	},
	{
		id: "certifications",
		label: "Certifications"
	},
	{
		id: "contact",
		label: "Contact"
	}
];
var PROJECTS = [
	{
		n: "01",
		title: "Campus Placement Training System",
		stack: "Django · PostgreSQL · GenAI",
		url: "https://github.com/djurslinn/campus_placement_project",
		lines: [
			"Full-stack placement training platform supporting student training and coordinator insight.",
			"Progress dashboards that track performance and placement readiness in real time.",
			"AI-powered evaluation generating personalised feedback across resumes, interviews and assessments."
		]
	},
	{
		n: "02",
		title: "Turf Booking Web Application",
		stack: "PHP · MySQL · Chart.js",
		url: "https://github.com/djurslinn/turf-booking-system",
		lines: ["Real-time booking platform with secure authentication and a normalised schema handling concurrent reservations.", "Role-based dashboards with analytics surfacing booking trends over time."]
	},
	{
		n: "03",
		title: "SmartScout — Football Trial Analytics Platform",
		stack: "Django · React · Python · scikit-learn",
		url: "https://github.com/djurslinn/SmartScout",
		lines: ["Full-stack scouting platform that converts real-world drill evaluations into normalized scores, performance tiers, and position-specific player insights.", "ML-powered analytics with z-score consistency analysis, player recommendations, team building, interactive dashboards, and automated trial reports."]
	}
];
var EXPERIENCE = [
	{
		role: "UI/UX Design Intern",
		org: "Pacelab, Kochi",
		when: "05/2025 – 06/2025",
		lines: ["Designed 5+ UI pages and interactive Figma prototypes for a college book rental app.", "Built user workflows and empathy maps alongside a cross-functional team."]
	},
	{
		role: "Advanced Software Engineering Simulation",
		org: "Walmart Global Tech · Forage",
		when: "05/2026",
		lines: ["Implemented an optimised heap structure and designed UML/ER models for a logistics system."]
	},
	{
		role: "GenAI Data Analytics Simulation",
		org: "Tata · Forage",
		when: "04/2026",
		lines: ["Applied GenAI and prompt engineering to extract insights and generate recommendations."]
	}
];
var STACK = [
	{
		k: "Languages",
		v: "Python · Java · C/C++ · JavaScript · PHP"
	},
	{
		k: "Web & Frameworks",
		v: "Django · React.js · Next.js · REST APIs · HTML5 · CSS3"
	},
	{
		k: "Data",
		v: "MySQL · PostgreSQL · DBMS"
	},
	{
		k: "Tools",
		v: "Git · GitHub · VS Code · Android Studio · Figma"
	},
	{
		k: "Concepts",
		v: "OOP · DSA · SDLC · System Design · GenAI · Agentic AI"
	}
];
var CERTS = [
	{
		title: "IBM Full Stack Software Developer",
		issuer: "IBM · Coursera",
		url: "https://www.coursera.org/account/accomplishments/specialization/S1NMO0JE6Y8D"
	},
	{
		title: "5-Day AI Agents Intensive",
		issuer: "Google AI",
		url: "https://www.kaggle.com/certification/badges/djurslinnjameskm/105"
	},
	{
		title: "Google AI Professional Certificate",
		issuer: "Google",
		url: "https://www.coursera.org/account/accomplishments/specialization/BY0T8BCEVGE3"
	},
	{
		title: "Certified Cyber Security Analyst",
		issuer: "RedTeam360",
		url: "https://360.redteamacademy.com/course/certverify/E0I6WUNVV6"
	}
];
var STACK_ICONS = [
	CodeXml,
	Layers,
	Database,
	Wrench,
	Sparkles
];
var SOCIALS = [
	{
		k: "GitHub",
		href: "https://github.com/djurslinn",
		icon: SiGithub
	},
	{
		k: "LinkedIn",
		href: "https://linkedin.com/in/djurslinn-james",
		icon: Linkedin
	},
	{
		k: "Instagram",
		href: "https://instagram.com/djurslinn",
		icon: SiInstagram
	}
];
function NavBtn({ onClick, disabled, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		onClick,
		disabled,
		className: "grid size-9 place-items-center border border-border text-muted-foreground transition-all duration-300 hover:border-primary hover:text-primary disabled:opacity-25 disabled:cursor-not-allowed",
		children
	});
}
function ProjectCarousel() {
	const [idx, setIdx] = (0, import_react.useState)(0);
	const p = PROJECTS[idx];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "border border-border",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "relative overflow-hidden aspect-square sm:aspect-[16/9] md:aspect-[21/9]",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
				href: p.url,
				target: "_blank",
				rel: "noreferrer",
				style: { animation: "carousel-fade 0.4s cubic-bezier(0.22,1,0.36,1)" },
				className: "absolute inset-0 group flex flex-col bg-background p-8 md:p-12 transition-colors duration-500 hover:bg-secondary/60 overflow-y-auto",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex items-start justify-end",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "grid size-9 place-items-center border border-border text-muted-foreground transition-colors duration-300 group-hover:border-primary group-hover:text-primary",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "size-4 transition-transform duration-300 group-hover:rotate-45" })
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "mt-6 font-display text-2xl uppercase leading-tight tracking-[0.04em] md:text-4xl",
						children: p.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "label mt-3 text-primary",
						children: p.stack
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-8 space-y-3 border-t border-border pt-6 text-sm leading-relaxed text-muted-foreground",
						children: p.lines.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "mt-2.5 h-px w-5 shrink-0 bg-primary/70" }), l]
						}, l))
					})
				]
			}, idx)
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center justify-between border-t border-border px-8 py-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "label",
				children: [
					String(idx + 1).padStart(2, "0"),
					" / ",
					String(PROJECTS.length).padStart(2, "0")
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NavBtn, {
					onClick: () => setIdx((i) => i - 1),
					disabled: idx === 0,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, { className: "size-4" })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NavBtn, {
					onClick: () => setIdx((i) => i + 1),
					disabled: idx === PROJECTS.length - 1,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "size-4" })
				})]
			})]
		})]
	});
}
function CertCarousel() {
	const n = CERTS.length;
	const [center, setCenter] = (0, import_react.useState)(0);
	const [sliding, setSliding] = (0, import_react.useState)(false);
	const busyRef = (0, import_react.useRef)(false);
	const go = (dir) => {
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
	const cards = [
		-1,
		0,
		1
	].map((offset) => ({
		cert: CERTS[(center + offset + n) % n],
		active: offset === 0
	}));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "border border-border p-2",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid grid-cols-1 gap-2 md:grid-cols-3",
				children: cards.map(({ cert, active }, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: `
    ${index === 0 ? "flex" : "hidden md:flex"}
    relative min-h-[280px]
    flex-col items-center justify-center
    overflow-hidden
    p-8 text-center
    ${sliding ? "opacity-60" : "opacity-100"}
    transition-opacity duration-300
  `,
					children: [
						active && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "pointer-events-none absolute left-1 top-1 z-20 h-6 w-6 border-l-2 border-t-2 border-primary" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "pointer-events-none absolute right-1 top-1 z-20 h-6 w-6 border-r-2 border-t-2 border-primary" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "pointer-events-none absolute bottom-1 left-1 z-20 h-6 w-6 border-b-2 border-l-2 border-primary" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "pointer-events-none absolute bottom-1 right-1 z-20 h-6 w-6 border-b-2 border-r-2 border-primary" })
						] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
							className: "absolute inset-5 h-[calc(100%-2.5rem)] w-[calc(100%-2.5rem)] border border-border p-3",
							viewBox: "0 0 400 240",
							preserveAspectRatio: "none",
							"aria-hidden": "true",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
								d: "\r\n        M 38 0\r\n        H 362\r\n\r\n        C 362 22 378 38 400 38\r\n        V 202\r\n\r\n        C 378 202 362 218 362 240\r\n        H 38\r\n\r\n        C 38 218 22 202 0 202\r\n        V 38\r\n\r\n        C 22 38 38 22 38 0\r\n\r\n        Z\r\n      ",
								fill: "var(--background)",
								stroke: "var(--border)",
								strokeWidth: "1.5"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative z-10 flex flex-col items-center",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Award, { className: "size-6 text-gold" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "\r\n        mt-2 max-w-[85%]\r\n        font-display text-xl uppercase\r\n        leading-tight tracking-[0.04em]\r\n        md:text-2xl\r\n      ",
									children: cert.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-3 text-sm text-muted-foreground",
									children: cert.issuer
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: cert.url,
									target: "_blank",
									rel: "noreferrer",
									className: "\r\n        group mt-6 flex items-center gap-2\r\n        border border-border px-4 py-2\r\n        text-xs uppercase tracking-[0.1em]\r\n        transition-colors\r\n        hover:border-[var(--gold)]\r\n        hover:text-[var(--gold)]\r\n      ",
									children: ["View", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "\r\n          size-3.5\r\n          transition-transform duration-300\r\n          group-hover:-translate-y-0.5\r\n          group-hover:translate-x-0.5\r\n        " })]
								})
							]
						})
					]
				}, `${cert.title}-${index}`))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "flex items-center justify-between  px-5 py-4" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "\r\n          flex items-center justify-between\r\n          border-t border-border\r\n          px-5 py-4 \r\n        ",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "font-mono text-xs text-muted-foreground",
					children: [
						String(center + 1).padStart(2, "0"),
						" /",
						" ",
						String(n).padStart(2, "0")
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NavBtn, {
						onClick: () => go(-1),
						disabled: false,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, { className: "size-4" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NavBtn, {
						onClick: () => go(1),
						disabled: false,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "size-4" })
					})]
				})]
			})
		]
	});
}
function SectionHeading({ title }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "mb-12",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "flex items-baseline gap-6 border-t-2 border-primary pt-5",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display text-3xl uppercase leading-none tracking-[0.06em] md:text-5xl",
				children: title
			})
		})
	});
}
function useReveal() {
	(0, import_react.useEffect)(() => {
		const els = Array.from(document.querySelectorAll(".reveal"));
		const io = new IntersectionObserver((entries) => {
			entries.forEach((e) => {
				if (e.isIntersecting) {
					e.target.classList.add("in-view");
					io.unobserve(e.target);
				}
			});
		}, {
			threshold: .1,
			rootMargin: "0px 0px -8% 0px"
		});
		els.forEach((el, i) => {
			el.style.transitionDelay = `${i % 4 * 80}ms`;
			io.observe(el);
		});
		return () => io.disconnect();
	}, []);
}
function useTheme() {
	const [dark, setDark] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
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
	return {
		dark,
		toggle
	};
}
function Portfolio() {
	useReveal();
	const { dark, toggle } = useTheme();
	const [isMobileMenuOpen, setIsMobileMenuOpen] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative min-h-screen bg-background text-foreground",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "pointer-events-none fixed inset-0 z-10 opacity-[0.025] dark:opacity-[0.04]",
				style: {
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
					backgroundSize: "8px 8px"
				}
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "sticky top-0 z-40 border-b border-border bg-background/85 backdrop-blur-md",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex max-w-6xl items-center justify-between px-6 py-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#top",
							className: "flex items-center gap-3",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: "/dj.svg",
								alt: "Djurslinn James logo",
								className: "size-9 dark:brightness-0 dark:invert"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
							className: "hidden gap-7 lg:flex",
							children: SECTIONS.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: `#${s.id}`,
								className: "label link-underline hover:text-foreground",
								children: s.label
							}, s.id))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-3",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									onClick: toggle,
									"aria-label": "Toggle colour theme",
									className: "grid size-9 place-items-center border border-border text-foreground transition-colors duration-300 hover:border-primary hover:text-primary",
									children: dark ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sun, { className: "size-4 text-gold" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Moon, { className: "size-4 text-foreground" })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: "/Djurslinn_James_Resume.pdf",
									target: "_blank",
									rel: "noreferrer",
									className: "label hidden items-center gap-2 border border-foreground px-4 py-2.5 text-foreground transition-colors duration-300 hover:bg-foreground hover:text-background sm:inline-flex",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "size-3.5" }), "Download Resume"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									onClick: () => setIsMobileMenuOpen(!isMobileMenuOpen),
									className: "grid size-9 place-items-center border border-border text-foreground transition-colors duration-300 hover:border-primary hover:text-primary lg:hidden",
									children: isMobileMenuOpen ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "size-4" })
								})
							]
						})
					]
				}), isMobileMenuOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "border-t border-border bg-background lg:hidden shadow-xl",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
						className: "flex flex-col p-6 space-y-6",
						children: [SECTIONS.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: `#${s.id}`,
							onClick: () => setIsMobileMenuOpen(false),
							className: "font-display text-lg uppercase tracking-wider text-foreground hover:text-primary transition-colors",
							children: s.label
						}, s.id)), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: "/Djurslinn_James_Resume.pdf",
							target: "_blank",
							rel: "noreferrer",
							className: "label flex items-center justify-center gap-2 border border-foreground px-4 py-3 text-foreground transition-colors duration-300 hover:bg-foreground hover:text-background",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "size-4" }), "Download Resume"]
						})]
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				id: "top",
				className: "relative overflow-hidden border-b border-border",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "relative mx-auto grid max-w-6xl gap-10 px-6 pb-16 pt-16 md:grid-cols-12 md:gap-8 md:pb-20 md:pt-24",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "md:col-span-12",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "label rise flex items-center gap-2.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "ping-dot relative inline-block size-1.5 rounded-full bg-primary text-primary" }), "Software developer — Kerala, India"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
								className: "rise mt-7 font-display text-[clamp(3rem,11vw,8rem)] uppercase leading-[0.86] tracking-[0.01em]",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "inline-block",
										children: "Djurslinn".split("").map((char, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "fill-to-stroke inline-block cursor-default",
											children: char
										}, i))
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "inline-block",
										children: "James".split("").map((char, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "fill-to-stroke inline-block cursor-default",
											children: char
										}, i))
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-2 ml-auto flex items-center justify-end gap-2",
								children: SOCIALS.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: s.href,
									target: "_blank",
									rel: "noreferrer",
									"aria-label": s.k,
									className: "grid size-9 place-items-center border border-border text-muted-foreground transition-all duration-300 hover:-translate-y-0.5 hover:border-primary hover:text-primary",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(s.icon, { className: "size-4" })
								}, s.k))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "rise mt-8 h-px w-full bg-border",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "draw-line h-px w-2/3 bg-primary" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-8 grid gap-8 sm:grid-cols-12",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "rise text-sm leading-relaxed text-muted-foreground sm:col-span-7 md:col-span-8",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
										"I’m a ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "BCA graduate" }),
										" and ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "passionate software developer." }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
										"I enjoy ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "building practical projects" }),
										" and learning continuously.",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
										"I’m always exploring new technologies and improving my skills.",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
										"Curious about new ideas, challenges, and ways to build better solutions.",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Learning continuously, building constantly " }),
										"and open to new opportunities."
									] })
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "rise flex flex-col gap-3 sm:col-span-5 md:col-span-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
										href: "#work",
										className: "group inline-flex items-center justify-between border border-foreground px-5 py-3.5 text-sm font-semibold uppercase tracking-[0.12em] transition-colors duration-300 hover:bg-foreground hover:text-background",
										children: ["Selected work", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4 transition-transform duration-300 group-hover:translate-x-1" })]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
										href: "#contact",
										className: "group inline-flex items-center justify-between border border-border px-5 py-3.5 text-sm font-semibold uppercase tracking-[0.12em] text-muted-foreground transition-colors duration-300 hover:border-primary hover:text-primary",
										children: ["Let's talk", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "size-4 transition-transform duration-300 group-hover:-translate-y-0.5" })]
									})]
								})]
							})
						]
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "border-y border-border",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
						className: "mx-auto grid max-w-6xl grid-cols-2 md:grid-cols-4",
						children: [
							["100%", "Passionate developer"],
							["Every day", "Learning & evolving"],
							["60+", "Commits & counting"],
							["∞", "Problems to solve"]
						].map(([value, label], i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: `
          px-6 py-8
          ${i !== 0 ? "border-l border-border" : ""}
          ${i >= 2 ? "max-md:border-t" : ""}
        `,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
								className: "font-display text-3xl font-medium tracking-tight",
								children: value
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
								className: "mt-2 text-xs uppercase tracking-[0.12em] text-muted-foreground",
								children: label
							})]
						}, label))
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
				className: "mx-auto max-w-6xl px-6 pb-28",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						id: "work",
						className: "scroll-mt-24 pt-24",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, { title: "Selected Work" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProjectCarousel, {}) })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						id: "experience",
						className: "scroll-mt-24 pt-24",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, { title: "Experience" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "relative mt-8 ml-3 border-l border-border",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", { children: EXPERIENCE.map((e, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "reveal group relative pb-12 pl-8 last:pb-0 md:pl-10",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "\r\n              absolute -left-[5px] top-1.5\r\n              h-2.5 w-2.5 rounded-full\r\n              border border-border\r\n              bg-background\r\n              transition-all duration-300\r\n              group-hover:scale-125\r\n              group-hover:bg-primary\r\n            " }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "\r\n    grid gap-2 rounded-sm p-5\r\n    transition-all duration-300\r\n    hover:bg-secondary/80\r\n    md:grid-cols-12 md:gap-8\r\n  ",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "md:col-span-3",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "label transition-colors duration-300 group-hover:text-primary",
												children: e.when
											})
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "md:col-span-4",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
												className: "font-display text-xl uppercase leading-snug tracking-[0.04em] md:text-2xl",
												children: e.role
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "mt-1 text-sm font-medium text-primary",
												children: e.org
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "space-y-2 text-sm leading-relaxed text-muted-foreground md:col-span-5",
											children: e.lines.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: l }, l))
										})
									]
								})]
							}, e.role)) })
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						id: "stack",
						className: "scroll-mt-24 pt-24",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, { title: "Stack" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", { children: STACK.map((s, si) => {
							const Icon = STACK_ICONS[si % STACK_ICONS.length];
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "reveal group grid gap-3 border-b border-border py-6 transition-colors duration-500 hover:bg-secondary/50 md:grid-cols-12 md:items-center md:px-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dt", {
									className: "flex items-center gap-3 md:col-span-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "size-4 text-primary transition-transform duration-300 group-hover:rotate-12" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "label",
										children: s.k
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
									className: "flex flex-wrap gap-2 md:col-span-9",
									children: s.v.split(" · ").map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "border border-border px-3 py-1.5 text-sm text-muted-foreground transition-all duration-300 hover:border-primary hover:text-primary hover:-translate-y-0.5",
										children: t
									}, t))
								})]
							}, s.k);
						}) })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						id: "education",
						className: "scroll-mt-24 pt-24",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, { title: "Education" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid gap-10 md:grid-cols-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "reveal border-l border-primary pl-6",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "label flex items-center gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GraduationCap, { className: "size-4 text-primary" }), " 2023 — 2026"]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "mt-2 font-display text-xl uppercase tracking-[0.05em] md:text-2xl",
										children: "BCA — Bachelor of Computer Applications"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-1 text-sm text-muted-foreground",
										children: "St. Thomas College, Palai (MG University) · CGPA 8.16 / 10"
									})
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "reveal border-l border-gold pl-6",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "label flex items-center gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GraduationCap, { className: "size-4 text-gold" }), " 2021 — 2023"]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "mt-2 font-display text-xl uppercase tracking-[0.05em] md:text-2xl",
										children: "Higher Secondary — Science"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-1 text-sm text-muted-foreground",
										children: "St. Michael's HSS Kaduthuruthy, DHSE Kerala · 86.83%"
									})
								]
							})]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						id: "certifications",
						className: "scroll-mt-24 pt-24",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, { title: "Certifications" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CertCarousel, {})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						id: "contact",
						className: "scroll-mt-24 pt-24",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, { title: "Contact" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "reveal relative overflow-hidden border-t border-border pt-12",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "font-display text-[clamp(1.4rem,3.5vw,2.8rem)] uppercase leading-[0.95] tracking-[0.02em]",
									children: [
										"Let's build something",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "hollow-text",
											children: "worth shipping."
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: "mailto:djurslinnjameskm@gmail.com",
									className: "group mt-10 inline-flex items-center gap-3 border border-foreground px-7 py-4 text-sm font-semibold uppercase tracking-[0.14em] transition-colors duration-300 hover:bg-foreground hover:text-background",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "size-4" }),
										"Send me an email",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4 transition-transform duration-300 group-hover:translate-x-1" })
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-14 grid gap-8 border-t border-border pt-10 md:grid-cols-4",
									children: [
										{
											k: "Email",
											v: "djurslinnjameskm@gmail.com",
											href: "mailto:djurslinnjameskm@gmail.com",
											icon: Mail
										},
										{
											k: "Phone",
											v: "+91 75599 47412",
											href: "tel:+917559947412",
											icon: Phone
										},
										{
											k: "LinkedIn",
											v: "in/djurslinn-james",
											href: "https://linkedin.com/in/djurslinn-james",
											icon: Linkedin
										},
										{
											k: "GitHub",
											v: "github.com/djurslinn",
											href: "https://github.com/djurslinn",
											icon: Github
										}
									].map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "label flex items-center gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(c.icon, { className: "size-3.5 text-primary" }), c.k]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: c.href,
										target: c.href.startsWith("http") ? "_blank" : void 0,
										rel: "noreferrer",
										className: "link-underline mt-2 inline-block break-all text-sm font-medium hover:text-primary",
										children: c.v
									})] }, c.k))
								})
							]
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
				className: "border-t border-border",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex max-w-6xl flex-col gap-2 px-6 py-8 md:flex-row md:items-center md:justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "label",
						children: "© 2026 Djurslinn James"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "label",
						children: "Kottayam, Kerala — India"
					})]
				})
			})
		]
	});
}
//#endregion
export { Portfolio as component };
