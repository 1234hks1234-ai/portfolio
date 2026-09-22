import { site } from "../data/site";
import { GitHubIcon, LinkedInIcon, FiverrIcon } from "./icons";

export default function Footer() {
  return (
    <footer className="border-t border-ink/10 py-10 dark:border-paper/10">
      <div className="section-shell flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
        <div>
          <p className="font-display text-base font-semibold">{site.name}</p>
          <p className="mt-1 text-sm text-muted">{site.role}</p>
        </div>

        <div className="flex items-center gap-3">
          <a
            href={site.links.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub profile"
            className="rounded-md p-2 text-ink/60 hover:bg-ink/5 hover:text-ink dark:text-paper/60 dark:hover:bg-paper/10 dark:hover:text-paper"
          >
            <GitHubIcon className="h-5 w-5" />
          </a>
          <a
            href={site.links.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn profile"
            className="rounded-md p-2 text-ink/60 hover:bg-ink/5 hover:text-ink dark:text-paper/60 dark:hover:bg-paper/10 dark:hover:text-paper"
          >
            <LinkedInIcon className="h-5 w-5" />
          </a>
          <a
            href={site.links.fiverr}
            target="_blank"
            rel="noreferrer"
            aria-label="Fiverr profile"
            className="rounded-md p-2 text-ink/60 hover:bg-ink/5 hover:text-ink dark:text-paper/60 dark:hover:bg-paper/10 dark:hover:text-paper"
          >
            <FiverrIcon className="h-5 w-5" />
          </a>
        </div>
      </div>

      <p className="section-shell mt-8 text-xs text-muted">
        © 2026 Khadija Saeed. All rights reserved.
      </p>
    </footer>
  );
}
