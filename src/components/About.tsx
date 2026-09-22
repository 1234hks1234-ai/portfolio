import { site } from "../data/site";

export default function About() {
  const { education } = site;

  return (
    <section id="about" className="border-t border-ink/10 py-20 dark:border-paper/10 sm:py-28">
      <div className="section-shell grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <p className="eyebrow-rule text-sm font-mono">Who I am</p>
          <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            {site.about.heading}
          </h2>

          <div className="mt-6 space-y-4 text-base leading-relaxed text-ink/75 dark:text-paper/75 sm:text-lg">
            {site.about.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>

        <div className="self-start rounded-xl border border-ink/10 bg-paper-soft p-6 dark:border-paper/10 dark:bg-ink-soft">
          <h3 className="font-display text-sm font-semibold uppercase tracking-wide text-muted">
            Currently
          </h3>
          <dl className="mt-4 space-y-4 text-sm">
            <div>
              <dt className="text-muted">School</dt>
              <dd className="mt-0.5 font-medium">{education.school}</dd>
            </div>
            <div>
              <dt className="text-muted">Program</dt>
              <dd className="mt-0.5 font-medium">{education.degree}</dd>
            </div>
            <div>
              <dt className="text-muted">Progress</dt>
              <dd className="mt-0.5 font-medium">{education.progress}</dd>
            </div>
            <div>
              <dt className="text-muted">Graduation</dt>
              <dd className="mt-0.5 font-medium">{education.graduation}</dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}
