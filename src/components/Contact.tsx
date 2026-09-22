import { site } from "../data/site";
import { MailIcon, GitHubIcon, LinkedInIcon, FiverrIcon } from "./icons";

const contactLinks = [
  {
    label: "Email",
    value: site.links.email || "Add your email in src/data/site.ts",
    href: site.links.email ? `mailto:${site.links.email}` : undefined,
    icon: MailIcon,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/your-profile",
    href: site.links.linkedin,
    icon: LinkedInIcon,
  },
  {
    label: "GitHub",
    value: "github.com/your-username",
    href: site.links.github,
    icon: GitHubIcon,
  },
  {
    label: "Fiverr",
    value: "fiverr.com/your-profile",
    href: site.links.fiverr,
    icon: FiverrIcon,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="border-t border-ink/10 py-20 dark:border-paper/10 sm:py-28">
      <div className="section-shell">
        <p className="eyebrow-rule text-sm font-mono">Get in touch</p>
        <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
          Let's Work Together
        </h2>
        <p className="mt-4 max-w-xl text-base text-ink/70 dark:text-paper/70">
          Have a project idea or need help with a website? Feel free to get in touch.
        </p>

        <ul className="mt-10 grid gap-4 sm:grid-cols-2">
          {contactLinks.map(({ label, value, href, icon: Icon }) => (
            <li key={label}>
              <a
                href={href || undefined}
                target={href && href !== "#" ? "_blank" : undefined}
                rel={href && href !== "#" ? "noreferrer" : undefined}
                aria-disabled={!href || href === "#"}
                className="flex items-center gap-4 rounded-xl border border-ink/10 p-5 transition-colors hover:border-accent/50 dark:border-paper/10"
              >
                <span className="rounded-lg bg-paper-soft p-2.5 text-ink/70 dark:bg-ink-soft dark:text-paper/70">
                  <Icon className="h-5 w-5" />
                </span>
                <span>
                  <span className="block text-sm font-medium">{label}</span>
                  <span className="block text-xs text-muted">{value}</span>
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
