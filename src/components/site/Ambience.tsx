import { useEffect, useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 140, damping: 24, restDelta: 0.001 });
  return (
    <motion.div
      style={{ scaleX }}
      className="bg-gradient-brand fixed inset-x-0 top-0 z-[60] h-[3px] origin-left"
    />
  );
}

export function CursorGlow() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;
    let raf = 0;
    let x = window.innerWidth / 2;
    let y = window.innerHeight / 2;
    let tx = x;
    let ty = y;

    const onMove = (e: MouseEvent) => {
      tx = e.clientX;
      ty = e.clientY;
    };
    const loop = () => {
      x += (tx - x) * 0.12;
      y += (ty - y) * 0.12;
      if (ref.current) ref.current.style.transform = `translate3d(${x - 160}px, ${y - 160}px, 0)`;
      raf = requestAnimationFrame(loop);
    };
    window.addEventListener("mousemove", onMove);
    raf = requestAnimationFrame(loop);
    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden
      className="glow-blob pointer-events-none fixed left-0 top-0 z-0 hidden h-80 w-80 rounded-full opacity-60 md:block"
    />
  );
}

export function AnimatedBackdrop() {
  const particles = Array.from({ length: 26 }, (_, i) => ({
    left: (i * 37) % 100,
    top: (i * 61) % 100,
    delay: (i % 9) * 0.7,
    size: 2 + (i % 3),
    dur: 7 + (i % 6),
  }));

  const beams = [12, 28, 46, 64, 82, 93];

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {/* aurora mesh */}
      <div className="aurora-sheet animate-aurora absolute -inset-[20%] opacity-40 dark:opacity-50" />

      <div className="glow-blob animate-float-slow absolute -left-32 top-[-10%] h-[38rem] w-[38rem] rounded-full opacity-70" />
      <div
        className="glow-blob animate-float-slow absolute -right-40 top-1/3 h-[34rem] w-[34rem] rounded-full opacity-50"
        style={{ animationDelay: "3s" }}
      />
      <div
        className="glow-blob animate-float-slow absolute bottom-[-15%] left-1/3 h-[30rem] w-[30rem] rounded-full opacity-40"
        style={{ animationDelay: "6s" }}
      />

      {/* drifting technical grid */}
      <div className="animate-grid-drift absolute inset-0 bg-[linear-gradient(to_right,color-mix(in_oklab,var(--foreground)_6%,transparent)_1px,transparent_1px),linear-gradient(to_bottom,color-mix(in_oklab,var(--foreground)_6%,transparent)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />

      {/* vertical light beams */}
      {beams.map((left, i) => (
        <span
          key={left}
          className="animate-beam absolute top-0 h-24 w-px bg-gradient-to-b from-transparent via-primary/50 to-transparent"
          style={{ left: `${left}%`, animationDelay: `${i * 1.15}s`, animationDuration: `${6 + i}s` }}
        />
      ))}

      {/* slow rotating conic halo */}
      <div className="animate-spin-slow absolute left-1/2 top-1/2 h-[60rem] w-[60rem] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-[0.07] [background:conic-gradient(from_0deg,transparent,var(--primary),transparent_45%,var(--accent),transparent)]" />

      {particles.map((p, i) => (
        <motion.span
          key={i}
          className="absolute rounded-full bg-primary/60"
          style={{ left: `${p.left}%`, top: `${p.top}%`, width: p.size, height: p.size }}
          animate={{ y: [0, -60, 0], opacity: [0, 0.9, 0] }}
          transition={{ duration: p.dur, repeat: Infinity, delay: p.delay, ease: "easeInOut" }}
        />
      ))}

      {/* film grain */}
      <div className="noise-overlay absolute inset-0 opacity-[0.035] mix-blend-overlay" />
    </div>
  );
}

