import { services } from "../data/site";

export default function Services() {
  return (
    <section id="services" className="border-t border-ink/10 py-20 dark:border-paper/10 sm:py-28">
      <div className="section-shell">
        <p className="eyebrow-rule text-sm font-mono">For clients</p>
        <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
          What I Can Build
        </h2>
        <p className="mt-4 max-w-2xl text-base text-ink/70 dark:text-paper/70">
          Freelance work I'm currently set up to take on.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-xl border border-ink/10 border-t-2 border-t-accent p-6 dark:border-paper/10 dark:border-t-accent-light"
            >
              <h3 className="font-display text-lg font-semibold">{service.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink/70 dark:text-paper/70">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
