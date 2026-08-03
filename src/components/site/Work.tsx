import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ExternalLink,
  Github,
  Sparkles,
  GraduationCap,
  Award,
  Trophy,
  Quote,
  Star,
  GitBranch,
} from "lucide-react";
import { Reveal, SectionHeading, Counter } from "./primitives";

type Project = {
  title: string;
  blurb: string;
  tags: string[];
  category: "Web" | "AI" | "Java" | "Networking";
  soon?: boolean;
};

const PROJECTS: Project[] = [
  {
    title: "Networking Calculator",
    blurb: "Networking calculations, subnetting and Cisco concepts in one clean tool.",
    tags: ["Subnetting", "Cisco", "JavaScript"],
    category: "Networking",
  },
  {
    title: "Portfolio Website",
    blurb: "Modern responsive portfolio with premium motion design.",
    tags: ["React", "Next.js", "Framer Motion"],
    category: "Web",
  },
  {
    title: "AI Chatbot",
    blurb: "Modern AI assistant with streaming chat UI and OpenAI integration.",
    tags: ["OpenAI", "Chat UI", "Node.js"],
    category: "AI",
  },
  {
    title: "Calculator Project",
    blurb: "Desktop calculator application built with Java Swing.",
    tags: ["Java", "Desktop App"],
    category: "Java",
  },
  {
    title: "Quiz Game",
    blurb: "Object-oriented desktop quiz game with score tracking.",
    tags: ["Java", "OOP", "Desktop App"],
    category: "Java",
  },
  {
    title: "Future Projects",
    blurb: "New AI and full stack experiments currently in the works.",
    tags: ["Coming Soon"],
    category: "AI",
    soon: true,
  },
];

const FILTERS = ["All", "Web", "AI", "Java", "Networking"] as const;

export function Projects() {
  const [filter, setFilter] = useState<(typeof FILTERS)[number]>("All");
  const visible = PROJECTS.filter((p) => filter === "All" || p.category === filter);

  return (
    <section id="projects" className="relative px-4 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Projects"
          title="Selected work"
          subtitle="A mix of web, AI, Java and networking projects I've designed and built."
        />

        <Reveal className="mt-10 flex flex-wrap justify-center gap-2">
          {FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
                filter === f
                  ? "bg-gradient-brand text-white shadow-glow"
                  : "glass text-muted-foreground hover:text-foreground"
              }`}
            >
              {f}
            </button>
          ))}
        </Reveal>

        <motion.div layout className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {visible.map((p) => (
              <motion.article
                key={p.title}
                layout
                initial={{ opacity: 0, y: 24, scale: 0.97 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -12, scale: 0.97 }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                className="glass card-hover group relative flex flex-col overflow-hidden rounded-3xl p-6"
              >
                <div className="bg-gradient-brand absolute inset-x-0 top-0 h-[3px] scale-x-0 transition-transform duration-500 group-hover:scale-x-100" />
                <div className="bg-gradient-brand grid h-11 w-11 place-items-center rounded-2xl text-white">
                  <Sparkles size={18} />
                </div>
                <h3 className="mt-5 text-lg font-semibold">{p.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{p.blurb}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-lg border border-glass-border bg-secondary/60 px-2.5 py-1 text-[11px] font-medium"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                {p.soon ? (
                  <p className="mt-6 text-xs font-semibold uppercase tracking-widest text-accent">
                    Coming Soon
                  </p>
                ) : (
                  <div className="mt-6 flex gap-2">
                    <a
                      href="#contact"
                      className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3.5 py-2 text-xs font-semibold text-primary transition-colors hover:bg-primary/20"
                    >
                      <ExternalLink size={13} /> Live Demo
                    </a>
                    <a
                      href="https://github.com/"
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-full border border-glass-border px-3.5 py-2 text-xs font-semibold transition-colors hover:border-primary hover:text-primary"
                    >
                      <Github size={13} /> GitHub
                    </a>
                  </div>
                )}
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}

export function Stats() {
  const stats = [
    { to: 10, suffix: "+", label: "Projects Delivered" },
    { to: 2, suffix: "+", label: "Years Learning" },
    { to: 4, suffix: "", label: "Certifications" },
    { to: 3, suffix: "", label: "Months Internship" },
  ];
  return (
    <section className="relative px-4 py-14">
      <div className="glass mx-auto grid max-w-6xl gap-6 rounded-3xl p-8 shadow-soft sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((s, i) => (
          <Reveal key={s.label} delay={i * 0.08} className="text-center">
            <p className="font-display text-4xl font-bold text-gradient">
              <Counter to={s.to} suffix={s.suffix} />
            </p>
            <p className="mt-2 text-xs uppercase tracking-widest text-muted-foreground">{s.label}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export function Education() {
  const certs = ["HP Foundation", "CodeAlpha Internship", "Agile Project Management", "Cisco Networking"];
  const achievements = [
    "Software Development Intern",
    "Lead at University Events",
    "Multiple Academic Projects",
    "Portfolio Deployment",
  ];

  return (
    <section id="education" className="relative px-4 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Education"
          title="Learning & credentials"
          subtitle="Academic background, certifications and milestones."
        />
        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          <Reveal className="lg:col-span-1">
            <div className="glass card-hover h-full rounded-3xl p-7">
              <span className="bg-gradient-brand grid h-11 w-11 place-items-center rounded-2xl text-white">
                <GraduationCap size={19} />
              </span>
              <h3 className="mt-5 text-lg font-semibold">Iqra University</h3>
              <p className="mt-1 text-sm text-muted-foreground">Bachelor of Software Engineering</p>
              <p className="mt-4 inline-flex rounded-full border border-glass-border px-3 py-1 text-xs text-primary">
                2024 – Present
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="glass card-hover h-full rounded-3xl p-7">
              <span className="bg-gradient-brand grid h-11 w-11 place-items-center rounded-2xl text-white">
                <Award size={19} />
              </span>
              <h3 className="mt-5 text-lg font-semibold">Certifications</h3>
              <ul className="mt-4 space-y-3">
                {certs.map((c) => (
                  <li key={c} className="flex items-center gap-2.5 text-sm text-muted-foreground">
                    <Star size={13} className="shrink-0 text-accent" /> {c}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="glass card-hover h-full rounded-3xl p-7">
              <span className="bg-gradient-brand grid h-11 w-11 place-items-center rounded-2xl text-white">
                <Trophy size={19} />
              </span>
              <h3 className="mt-5 text-lg font-semibold">Achievements</h3>
              <ul className="mt-4 space-y-3">
                {achievements.map((a) => (
                  <li key={a} className="flex items-center gap-2.5 text-sm text-muted-foreground">
                    <Star size={13} className="shrink-0 text-accent" /> {a}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export function Testimonials() {
  const items = [
    { quote: "Placeholder testimonial — recommendations from colleagues will appear here.", name: "Senior Developer", role: "BawdicSoft" },
    { quote: "Placeholder testimonial — client feedback will appear here soon.", name: "Project Client", role: "Freelance" },
    { quote: "Placeholder testimonial — university mentor feedback coming soon.", name: "Faculty Mentor", role: "Iqra University" },
  ];
  return (
    <section className="relative px-4 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="Testimonials" title="Kind words" subtitle="Coming soon." />
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {items.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.08}>
              <figure className="glass card-hover h-full rounded-3xl p-7">
                <Quote size={20} className="text-primary" />
                <blockquote className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  {t.quote}
                </blockquote>
                <figcaption className="mt-6 text-sm font-semibold">
                  {t.name}
                  <span className="block text-xs font-normal text-muted-foreground">{t.role}</span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function GithubActivity() {
  const cells = Array.from({ length: 371 }, (_, i) => (i * 7919) % 5);
  return (
    <section className="relative px-4 pb-8">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="glass rounded-3xl p-7 shadow-soft">
            <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4">
              <div className="flex min-w-0 items-center gap-3">
                <GitBranch size={18} className="shrink-0 text-primary" />
                <h3 className="truncate text-lg font-semibold">GitHub Contributions</h3>
              </div>
              <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
                className="shrink-0 text-xs font-semibold text-primary hover:underline"
              >
                View profile
              </a>
            </div>
            <div className="mt-6 overflow-x-auto">
              <div className="grid w-max grid-flow-col grid-rows-7 gap-1">
                {cells.map((level, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: (i % 60) * 0.004 }}
                    className="h-2.5 w-2.5 rounded-[3px]"
                    style={{
                      background:
                        level === 0
                          ? "color-mix(in oklab, var(--foreground) 8%, transparent)"
                          : `color-mix(in oklab, var(--primary) ${level * 24}%, transparent)`,
                    }}
                  />
                ))}
              </div>
            </div>
            <p className="mt-4 text-xs text-muted-foreground">
              Placeholder activity graph — connects to a live GitHub profile.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
