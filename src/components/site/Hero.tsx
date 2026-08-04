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

          <h1 className="mt-6 text-4xl font-bold leading-[1.05] sm:text-6xl lg:text-7xl">
            {["Hi,", "I'm"].map((w, i) => (
              <motion.span
                key={w}
                initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 0.8, delay: 0.1 + i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                className="mr-3 inline-block"
              >
                {w}
              </motion.span>
            ))}
            <br />
            <motion.span
              initial={{ opacity: 0, y: 40, filter: "blur(12px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.9, delay: 0.34, ease: [0.22, 1, 0.36, 1] }}
              className="text-gradient animate-shimmer inline-block"
            >
              Safiullah
            </motion.span>
          </h1>


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
              { icon: Github, href: "https://github.com/Safiullah7911", label: "GitHub" },
              { icon: Linkedin, href: "https://www.linkedin.com/in/safiullah-arain-a8604a399/", label: "LinkedIn" },
              { icon: Mail, href: "https://mail.google.com/mail/?view=cm&fs=1&to=safiarain273@gmail.com", label: "Email" },
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
          {/* orbiting tech ring */}
          <div className="pointer-events-none absolute inset-0 -z-10 grid place-items-center">
            <div className="animate-spin-slow relative h-[125%] w-[125%] rounded-full border border-dashed border-primary/20">
              {["React", "Next.js", "TS", "Node"].map((t, i) => (
                <span
                  key={t}
                  className="glass absolute left-1/2 top-1/2 rounded-full px-2.5 py-1 text-[10px] font-semibold text-muted-foreground"
                  style={{
                    transform: `rotate(${i * 90}deg) translateY(-50%) translate(0, -${11}rem) rotate(-${i * 90}deg)`,
                  }}
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
          <motion.div
            animate={{ y: [0, -14, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            whileHover={{ scale: 1.03, rotate: -1.5 }}
            className="glass relative overflow-hidden rounded-[2rem] p-2 shadow-glow"
          >
            <div className="bg-gradient-brand absolute inset-0 opacity-15" />
            <img
              src={profileAsset}
              alt="Safiullah Arain, Software Engineer, at his development workstation"
              width={640}
              height={640}
              className="relative w-full rounded-[1.6rem] object-cover"
            />
            <motion.div
              aria-hidden
              initial={{ x: "-120%" }}
              animate={{ x: ["-120%", "220%"] }}
              transition={{ duration: 4.5, repeat: Infinity, repeatDelay: 2.5, ease: "easeInOut" }}
              className="absolute inset-y-0 w-1/3 -skew-x-12 bg-gradient-to-r from-transparent via-white/25 to-transparent"
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

      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="mx-auto mt-20 hidden w-fit flex-col items-center gap-2 text-xs text-muted-foreground md:flex"
      >
        Scroll to explore
        <span className="relative grid h-9 w-5 place-items-start justify-center rounded-full border border-border p-1">
          <motion.span
            className="h-1.5 w-1.5 rounded-full bg-primary"
            animate={{ y: [0, 14, 0], opacity: [1, 0.2, 1] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          />
        </span>
      </motion.a>
    </section>
  );

}
