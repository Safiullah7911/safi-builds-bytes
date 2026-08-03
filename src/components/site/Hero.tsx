import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Download, Mail, Github, Linkedin, MapPin } from "lucide-react";
import profileAsset from "@/assets/My-profile.png";

const ROLES = ["Software Engineer", "Frontend Developer", "Full Stack Developer", "AI Developer"];

function Typewriter() {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const full = ROLES[index]!;
    const done = !deleting && text === full;
    const empty = deleting && text === "";

    if (done) {
      const t = setTimeout(() => setDeleting(true), 1600);
      return () => clearTimeout(t);
    }
    if (empty) {
      setDeleting(false);
      setIndex((i) => (i + 1) % ROLES.length);
      return;
    }
    const t = setTimeout(
      () => setText(deleting ? full.slice(0, text.length - 1) : full.slice(0, text.length + 1)),
      deleting ? 45 : 85,
    );
    return () => clearTimeout(t);
  }, [text, deleting, index]);

  return (
    <span className="text-gradient">
      {text}
      <span className="animate-caret ml-0.5 inline-block w-[3px] -translate-y-0.5 self-center bg-primary align-middle text-transparent">
        |
      </span>
    </span>
  );
}

export function Hero() {
  return (
    <section id="top" className="relative px-4 pb-24 pt-36 md:pt-44">
      <div className="mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium text-muted-foreground"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            Available for opportunities
            <span className="mx-1 h-3 w-px bg-border" />
            <MapPin size={12} /> Karachi, Pakistan
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 text-4xl font-bold leading-[1.05] sm:text-6xl lg:text-7xl"
          >
            Hi, I'm
            <br />
            <span className="text-gradient">Safiullah </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-5 font-display text-xl font-semibold sm:text-3xl"
          >
            <Typewriter />
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground"
          >
            Software Engineer, Full Stack Developer and AI Enthusiast crafting fast, accessible and
            beautifully engineered digital products with React, Next.js and modern web technology.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-9 flex flex-wrap items-center gap-3"
          >
            <a
              href="#projects"
              className="bg-gradient-brand group inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-white shadow-glow transition-transform hover:scale-[1.04]"
            >
              View Projects
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="/Safiullah-Cv.pdf"
              download
              className="glass inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-colors hover:text-primary"
            >
              <Download size={16} /> Download Resume
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-semibold transition-colors hover:border-primary hover:text-primary"
            >
              <Mail size={16} /> Contact Me
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-8 flex items-center gap-3"
          >
            {[
              { icon: Github, href: "https://github.com/", label: "GitHub" },
              { icon: Linkedin, href: "https://linkedin.com/", label: "LinkedIn" },
              { icon: Mail, href: "mailto:safiarain273@gmail.com", label: "Email" },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="glass grid h-10 w-10 place-items-center rounded-full text-muted-foreground transition-all hover:-translate-y-1 hover:text-primary"
              >
                <Icon size={16} />
              </a>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-sm"
        >
          <div className="glow-blob absolute inset-0 -z-10 scale-110 rounded-full opacity-80" />
          <motion.div
            animate={{ y: [0, -14, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="glass relative overflow-hidden rounded-[2rem] p-2 shadow-glow"
          >
            <div className="bg-gradient-brand absolute inset-0 opacity-15" />
            <img
              src={profileAsset}
              // href={/My-profile.png}
              
              alt="Safiullah Arain, Software Engineer, at his development workstation"
              width={640}
              height={640}
              className="relative w-full rounded-[1.6rem] object-cover"
            />
          </motion.div>

          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="glass absolute -bottom-5 -left-4 rounded-2xl px-4 py-3 shadow-soft"
          >
            <p className="font-display text-lg font-bold text-gradient">10+</p>
            <p className="text-[11px] text-muted-foreground">Projects Built</p>
          </motion.div>
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
            className="glass absolute -right-3 top-8 rounded-2xl px-4 py-3 shadow-soft"
          >
            <p className="font-display text-lg font-bold text-gradient">2+</p>
            <p className="text-[11px] text-muted-foreground">Years Learning</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
