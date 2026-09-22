import { whyWorkWithMe } from "../data/site";

export default function WhyWorkWithMe() {
  return (
    <section className="border-t border-ink/10 py-20 dark:border-paper/10 sm:py-28">
      <div className="section-shell">
        <p className="eyebrow-rule text-sm font-mono">How I work</p>
        <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
          Why Work With Me
        </h2>

        <div className="mt-10 grid gap-x-8 gap-y-6 sm:grid-cols-2">
          {whyWorkWithMe.map((item) => (
            <div key={item.title} className="border-l-2 border-accent/40 pl-5">
              <h3 className="font-display text-base font-semibold">{item.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-ink/70 dark:text-paper/70">
                {item.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
