import { site } from "../data/site";
import { GitHubIcon, LinkedInIcon, ArrowUpRightIcon } from "./icons";

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-32 pb-24 sm:pt-40 sm:pb-32">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.05] dark:opacity-[0.08]"
        style={{
          backgroundImage:
            "linear-gradient(currentColor 1px, transparent 1px), linear-gradient(90deg, currentColor 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="section-shell">
        <p className="eyebrow-rule text-sm font-mono">Portfolio</p>

        <h1 className="mt-6 max-w-3xl font-display text-4xl font-bold leading-[1.1] tracking-tight sm:text-6xl">
          {site.name}
        </h1>

        <p className="mt-4 max-w-2xl font-display text-xl text-accent-dark dark:text-accent-light sm:text-2xl">
          {site.role}
        </p>

        <p className="mt-6 max-w-2xl text-base leading-relaxed text-ink/75 dark:text-paper/75 sm:text-lg">
          {site.tagline}
        </p>

        <div className="mt-9 flex flex-wrap items-center gap-4">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-md bg-accent px-5 py-3 text-sm font-medium text-paper transition-colors hover:bg-accent-dark"
          >
            View My Projects
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-md border border-ink/15 px-5 py-3 text-sm font-medium text-ink transition-colors hover:border-accent hover:text-accent dark:border-paper/20 dark:text-paper dark:hover:border-accent-light dark:hover:text-accent-light"
          >
            Contact Me
          </a>
        </div>

        <div className="mt-10 flex items-center gap-4">
          <a
            href={site.links.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub profile"
            className="rounded-md border border-ink/15 p-2.5 text-ink/70 transition-colors hover:border-accent hover:text-accent dark:border-paper/20 dark:text-paper/70 dark:hover:border-accent-light dark:hover:text-accent-light"
          >
            <GitHubIcon className="h-5 w-5" />
          </a>
          <a
            href={site.links.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn profile"
            className="rounded-md border border-ink/15 p-2.5 text-ink/70 transition-colors hover:border-accent hover:text-accent dark:border-paper/20 dark:text-paper/70 dark:hover:border-accent-light dark:hover:text-accent-light"
          >
            <LinkedInIcon className="h-5 w-5" />
          </a>
          <span className="hidden items-center gap-1.5 text-sm text-muted sm:inline-flex">
            <ArrowUpRightIcon className="h-4 w-4" />
            Links go live once profiles are added
          </span>
        </div>
      </div>
    </section>
  );
}
