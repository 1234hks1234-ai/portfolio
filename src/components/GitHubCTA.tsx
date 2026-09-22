import { site } from "../data/site";
import { GitHubIcon } from "./icons";

export default function GitHubCTA() {
  return (
    <section className="border-t border-ink/10 py-16 dark:border-paper/10 sm:py-20">
      <div className="section-shell flex flex-col items-start justify-between gap-6 rounded-2xl border border-ink/10 bg-paper-soft p-8 dark:border-paper/10 dark:bg-ink-soft sm:flex-row sm:items-center sm:p-10">
        <div className="flex items-start gap-4">
          <div className="rounded-lg bg-ink/5 p-3 text-ink/70 dark:bg-paper/10 dark:text-paper/70">
            <GitHubIcon className="h-6 w-6" />
          </div>
          <div>
            <h2 className="font-display text-xl font-semibold sm:text-2xl">Explore My Code</h2>
            <p className="mt-1.5 max-w-md text-sm text-ink/70 dark:text-paper/70">
              See my projects, experiments, and ongoing learning through my GitHub repositories.
            </p>
          </div>
        </div>
        <a
          href={site.links.github}
          target="_blank"
          rel="noreferrer"
          className="shrink-0 rounded-md bg-accent px-5 py-3 text-sm font-medium text-paper hover:bg-accent-dark"
        >
          Visit GitHub
        </a>
      </div>
    </section>
  );
}
