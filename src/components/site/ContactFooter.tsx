import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Github, Linkedin, MessageCircle, Send, Check } from "lucide-react";
import { Reveal, SectionHeading } from "./primitives";

const DETAILS = [
  { icon: Mail, label: "Email", value: "safiarain273@gmail.com", href: "mailto:safiarain273@gmail.com" },
  // { icon: Phone, label: "Phone", value: "+92 333 3139121", href: "tel:+923333139121" },
  { icon: MessageCircle, label: "WhatsApp", value: "+92 333 3139121", href: "https://wa.me/923333139121" },
  { icon: Linkedin, label: "LinkedIn", value: "Safiullah Arain", href: "https://linkedin.com/" },
  { icon: Github, label: "GitHub", value: "@safiullah7911", href: "https://github.com/" },
  { icon: MapPin, label: "Location", value: "Karachi, Pakistan", href: "#contact" },
];

export function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
    window.location.href = `mailto:safiarain273@gmail.com?subject=${encodeURIComponent(
      `Portfolio enquiry from ${form.name}`,
    )}&body=${body}`;
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  const field =
    "w-full rounded-2xl border border-glass-border bg-secondary/50 px-4 py-3 text-sm outline-none transition-all placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/25";

  return (
    <section id="contact" className="relative px-4 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Contact"
          title="Let's build something great"
          subtitle="Open to internships, freelance work and full-time engineering roles."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            {DETAILS.map((d, i) => (
              <Reveal key={d.label} delay={i * 0.06}>
                <a
                  href={d.href}
                  target={d.href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  className="glass card-hover grid grid-cols-[auto_minmax(0,1fr)] items-center gap-4 rounded-2xl p-4"
                >
                  <span className="bg-gradient-brand grid h-10 w-10 shrink-0 place-items-center rounded-xl text-white">
                    <d.icon size={16} />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-[11px] uppercase tracking-widest text-muted-foreground">
                      {d.label}
                    </span>
                    <span className="block truncate text-sm font-medium">{d.value}</span>
                  </span>
                </a>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.1}>
            <form onSubmit={submit} className="glass rounded-3xl p-7 shadow-soft">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-2 block text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                    Name
                  </label>
                  <input
                    id="name"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Your name"
                    className={field}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="mb-2 block text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="you@example.com"
                    className={field}
                  />
                </div>
              </div>
              <div className="mt-4">
                <label htmlFor="message" className="mb-2 block text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={6}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Tell me about your project…"
                  className={field}
                />
              </div>
              <motion.button
                whileTap={{ scale: 0.97 }}
                type="submit"
                className="bg-gradient-brand mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold text-white shadow-glow transition-transform hover:scale-[1.02]"
              >
                {sent ? (
                  <>
                    <Check size={16} /> Message ready
                  </>
                ) : (
                  <>
                    <Send size={16} /> Send Message
                  </>
                )}
              </motion.button>
              <p className="mt-3 text-center text-xs text-muted-foreground">
                Prefer WhatsApp?{" "}
                <a href="https://wa.me/923333139121" className="font-semibold text-primary hover:underline">
                  +92 333 3139121
                </a>
              </p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="relative px-4 pb-10 pt-14">
      <div className="glass mx-auto max-w-6xl rounded-3xl p-8">
        <div className="grid gap-8 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-2">
              <span className="bg-gradient-brand grid h-9 w-9 place-items-center rounded-xl font-display text-sm font-bold text-white">
                SA
              </span>
              <span className="font-display text-base font-semibold">Safiullah Arain</span>
            </div>
            <p className="mt-4 max-w-sm text-sm text-muted-foreground">
              Software Engineer & Full Stack Developer building fast, accessible and AI-powered web
              experiences from Karachi, Pakistan.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold">Navigate</h3>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              {["About", "Skills", "Experience", "Projects", "Contact"].map((l) => (
                <li key={l}>
                  <a href={`#${l.toLowerCase()}`} className="transition-colors hover:text-primary">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold">Get in touch</h3>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="mailto:safiarain273@gmail.com" className="transition-colors hover:text-primary">
                  safiarain273@gmail.com
                </a>
              </li>
              <li>
                <a href="https://wa.me/923333139121" className="transition-colors hover:text-primary">
                  +92 333 3139121
                </a>
              </li>
              <li>Karachi, Pakistan</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 border-t border-glass-border pt-6 text-xs text-muted-foreground">
          <p className="min-w-0">© {new Date().getFullYear()} Safiullah Arain. All rights reserved.</p>
          <p className="shrink-0">Designed & built with care.</p>
        </div>
      </div>
    </footer>
  );
}
