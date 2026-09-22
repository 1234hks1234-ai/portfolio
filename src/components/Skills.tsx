import { skillCategories } from "../data/skills";

export default function Skills() {
  return (
    <section id="skills" className="border-t border-ink/10 py-20 dark:border-paper/10 sm:py-28">
      <div className="section-shell">
        <p className="eyebrow-rule text-sm font-mono">What I use</p>
        <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
          Skills
        </h2>
        <p className="mt-4 max-w-2xl text-base text-ink/70 dark:text-paper/70">
          Technologies and concepts I've worked with through coursework and personal projects.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="rounded-xl border border-ink/10 p-6 dark:border-paper/10"
            >
              <h3 className="font-display text-base font-semibold">{category.title}</h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <li
                    key={skill}
                    className="rounded-full bg-paper-soft px-3 py-1 font-mono text-xs text-ink/75 dark:bg-ink-soft dark:text-paper/75"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
