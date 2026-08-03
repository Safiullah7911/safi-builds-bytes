import { motion } from "framer-motion";
import {
  GraduationCap,
  Rocket,
  Briefcase,
  BrainCircuit,
  Code2,
  Server,
  Binary,
  Network,
  Database,
  Wrench,
  Users,
  CheckCircle2,
} from "lucide-react";
import { Reveal, SectionHeading, Counter } from "./primitives";

export function About() {
  const cards = [
    { icon: Rocket, value: 2, suffix: "+", label: "Years Learning" },
    { icon: Code2, value: 10, suffix: "+", label: "Projects" },
    { icon: Briefcase, value: 3, suffix: " Months", label: "Internship" },
    { icon: GraduationCap, value: 0, suffix: "", label: "Software Engineering Student", static: true },
  ];

  return (
    <section id="about" className="relative px-4 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="About"
          title="Engineering clean, scalable software"
          subtitle="A short introduction to who I am and how I build."
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal className="glass rounded-3xl p-8 shadow-soft">
            <div className="space-y-5 text-base leading-relaxed text-muted-foreground">
              <p>
                Software Engineering student at{" "}
                <span className="font-semibold text-foreground">Iqra University, Karachi</span> with
                hands-on experience in software development, frontend engineering, networking,
                AI-powered applications and modern web technologies.
              </p>
              <p>
                Passionate about building scalable applications, solving real-world problems and
                continuously learning cutting-edge technologies.
              </p>
              <p>
                I enjoy creating clean UI, optimized web applications and AI-powered solutions that
                feel effortless to use.
              </p>
            </div>
            <div className="mt-8 flex flex-wrap gap-2">
              {["Clean UI", "Performance", "Accessibility", "AI Integration", "SEO"].map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-glass-border bg-primary/8 px-3.5 py-1.5 text-xs font-medium text-primary"
                >
                  {t}
                </span>
              ))}
            </div>
          </Reveal>

          <div className="grid grid-cols-2 gap-4">
            {cards.map((c, i) => (
              <Reveal key={c.label} delay={i * 0.08}>
                <div className="glass card-hover h-full rounded-3xl p-5">
                  <c.icon size={20} className="text-primary" />
                  <p className="mt-4 font-display text-2xl font-bold">
                    {c.static ? <BrainCircuit size={22} className="text-accent" /> : (
                      <Counter to={c.value} suffix={c.suffix} />
                    )}
                  </p>
                  <p className="mt-1 text-xs text-muted-foreground">{c.label}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const SKILL_GROUPS = [
  {
    icon: Code2,
    title: "Frontend",
    items: ["HTML5", "CSS3", "JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS", "Bootstrap"],
  },
  { icon: Server, title: "Backend", items: ["Node.js", "Express.js", "REST APIs"] },
  { icon: Binary, title: "Programming", items: ["Java", "C", "OOP"] },
  { icon: Network, title: "Networking", items: ["Cisco Packet Tracer", "Subnetting", "Computer Networking"] },
  { icon: Database, title: "Database", items: ["MongoDB", "MySQL"] },
  { icon: Wrench, title: "Tools", items: ["Git", "GitHub", "VS Code", "Figma", "GA4", "Google Tag Manager"] },
  {
    icon: Users,
    title: "Soft Skills",
    items: ["Leadership", "Communication", "Problem Solving", "Research", "Team Collaboration"],
  },
];

export function Skills() {
  return (
    <section id="skills" className="relative px-4 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Skills"
          title="The stack I build with"
          subtitle="Technologies, tools and strengths I use to ship production-ready work."
        />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SKILL_GROUPS.map((g, i) => (
            <Reveal key={g.title} delay={i * 0.06}>
              <div className="glass card-hover h-full rounded-3xl p-6">
                <div className="flex items-center gap-3">
                  <span className="bg-gradient-brand grid h-10 w-10 shrink-0 place-items-center rounded-xl text-white">
                    <g.icon size={18} />
                  </span>
                  <h3 className="text-lg font-semibold">{g.title}</h3>
                </div>
                <div className="mt-5 flex flex-wrap gap-2">
                  {g.items.map((s) => (
                    <span
                      key={s}
                      className="rounded-lg border border-glass-border bg-secondary/60 px-3 py-1.5 text-xs font-medium transition-colors hover:border-primary/50 hover:text-primary"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Experience() {
  const bullets = [
    "Worked on real client projects using React and Next.js.",
    "Optimized SEO through meta tags and structured content.",
    "Configured Google Tag Manager and Google Analytics 4.",
    "Improved website performance and responsiveness.",
    "Implemented AI-powered website features.",
    "Collaborated with senior developers in an agile workflow.",
    "Resolved production issues and optimized UI.",
  ];

  return (
    <section id="experience" className="relative px-4 py-24">
      <div className="mx-auto max-w-4xl">
        <SectionHeading eyebrow="Experience" title="Where I've worked" />
        <div className="relative mt-14 pl-8">
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.1, ease: "easeOut" }}
            className="bg-gradient-brand absolute left-0 top-2 h-full w-[2px] origin-top rounded-full"
          />
          <Reveal>
            <div className="glass relative rounded-3xl p-7 shadow-soft">
              <span className="bg-gradient-brand absolute -left-[2.15rem] top-8 h-4 w-4 rounded-full ring-4 ring-background" />
              <div className="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-4">
                <div className="min-w-0">
                  <h3 className="text-xl font-semibold">Software Development Intern</h3>
                  <p className="mt-1 text-sm font-medium text-primary">BawdicSoft</p>
                </div>
                <span className="shrink-0 rounded-full border border-glass-border px-3 py-1 text-xs text-muted-foreground">
                  May 2026 – July 2026
                </span>
              </div>
              <ul className="mt-6 space-y-3">
                {bullets.map((b) => (
                  <li key={b} className="flex gap-3 text-sm text-muted-foreground">
                    <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-accent" />
                    <span>{b}</span>
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
