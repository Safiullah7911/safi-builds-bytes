import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Navbar } from "@/components/site/Navbar";
import { ScrollProgress, CursorGlow, AnimatedBackdrop } from "@/components/site/Ambience";
import { Hero } from "@/components/site/Hero";
import { About, Skills, Experience } from "@/components/site/AboutSkills";
import { Projects, Stats, Education, Testimonials, GithubActivity } from "@/components/site/Work";
import { Contact, Footer } from "@/components/site/ContactFooter";

const title = "Safiullah Arain — Software Engineer & Full Stack Developer";
const description =
  "Portfolio of Safiullah Arain, Software Engineer and Full Stack Developer in Karachi building fast, accessible React, Next.js and AI-powered web applications.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { name: "author", content: "Safiullah Arain" },
      {
        name: "keywords",
        content:
          "Safiullah Arain, Software Engineer, Full Stack Developer, React Developer, Next.js, AI Developer, Karachi",
      },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Safiullah Arain",
          jobTitle: "Software Engineer",
          email: "mailto:safiarain273@gmail.com",
          telephone: "+92-333-3139121",
          address: { "@type": "PostalAddress", addressLocality: "Karachi", addressCountry: "PK" },
          alumniOf: { "@type": "CollegeOrUniversity", name: "Iqra University" },
          knowsAbout: ["React", "Next.js", "TypeScript", "Node.js", "AI", "Computer Networking"],
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="relative min-h-dvh overflow-x-clip"
    >
      <AnimatedBackdrop />
      <CursorGlow />
      <ScrollProgress />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <About />
        <Stats />
        <Skills />
        <Experience />
        <Projects />
        <GithubActivity />
        <Education />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </motion.div>
  );
}
