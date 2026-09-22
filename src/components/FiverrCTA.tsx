import { site } from "../data/site";
import { FiverrIcon } from "./icons";

export default function FiverrCTA() {
  return (
    <section className="py-4">
      <div className="section-shell flex flex-col items-start justify-between gap-6 rounded-2xl border border-accent/30 bg-accent/5 p-8 dark:bg-accent/10 sm:flex-row sm:items-center sm:p-10">
        <div className="flex items-start gap-4">
          <div className="rounded-lg bg-accent/10 p-3 text-accent dark:text-accent-light">
            <FiverrIcon className="h-6 w-6" />
          </div>
          <div>
            <h2 className="font-display text-xl font-semibold sm:text-2xl">
              Need a Website or Web Application?
            </h2>
            <p className="mt-1.5 max-w-md text-sm text-ink/70 dark:text-paper/70">
              I'm available for freelance projects involving responsive websites, React
              interfaces, interactive web applications, and data-focused applications.
            </p>
          </div>
        </div>
        <a
          href={site.links.fiverr}
          target="_blank"
          rel="noreferrer"
          className="shrink-0 rounded-md border border-accent px-5 py-3 text-sm font-medium text-accent hover:bg-accent hover:text-paper dark:text-accent-light dark:hover:text-paper"
        >
          View My Fiverr Profile
        </a>
      </div>
    </section>
  );
}
