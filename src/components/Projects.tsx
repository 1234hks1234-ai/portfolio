import { useState } from "react";
import { projects, type Project } from "../data/projects";
import { projectImages } from "../data/projectImages";
import ProjectModal from "./ProjectModal";
import { ArrowUpRightIcon, GitHubIcon } from "./icons";

export default function Projects() {
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="border-t border-ink/10 py-20 dark:border-paper/10 sm:py-28">
      <div className="section-shell">
        <p className="eyebrow-rule text-sm font-mono">Selected work</p>
        <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
          Projects
        </h2>
        <p className="mt-4 max-w-2xl text-base text-ink/70 dark:text-paper/70">
          A couple of projects I've built to learn by doing. Click a card for the full breakdown.
        </p>

        <div className="mt-10 grid gap-8 lg:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.slug}
              className="group flex flex-col overflow-hidden rounded-2xl border border-ink/10 transition-colors hover:border-accent/50 dark:border-paper/10"
            >
              <button
                type="button"
                onClick={() => setActiveProject(project)}
                className="block aspect-video w-full overflow-hidden border-b border-ink/10 bg-paper-soft dark:border-paper/10 dark:bg-ink-soft"
                aria-label={`View details for ${project.title}`}
              >
                {projectImages[project.slug] ? (
                  <img
                    src={projectImages[project.slug]}
                    alt={`${project.title} screenshot`}
                    className="h-full w-full object-cover object-top transition-transform duration-300 group-hover:scale-[1.02]"
                  />
                ) : (
                  <span className="flex h-full w-full items-center justify-center font-display text-lg text-ink/40 dark:text-paper/30">
                    {project.imagePlaceholder}
                  </span>
                )}
              </button>

              <div className="flex flex-1 flex-col p-6">
                <h3 className="font-display text-lg font-semibold leading-snug">
                  {project.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/70 dark:text-paper/70">
                  {project.summary}
                </p>

                <ul className="mt-4 flex flex-wrap gap-2">
                  {project.technologies.slice(0, 5).map((tech) => (
                    <li
                      key={tech}
                      className="rounded-full bg-paper-soft px-2.5 py-1 font-mono text-[11px] text-ink/70 dark:bg-ink-soft dark:text-paper/70"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex flex-wrap items-center gap-3 pt-2">
                  <button
                    type="button"
                    onClick={() => setActiveProject(project)}
                    className="text-sm font-medium text-accent underline-offset-4 hover:underline dark:text-accent-light"
                  >
                    Project details
                  </button>
                  <span className="text-ink/20 dark:text-paper/20">/</span>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 text-sm font-medium text-ink/75 hover:text-accent dark:text-paper/75 dark:hover:text-accent-light"
                  >
                    Live Demo
                    <ArrowUpRightIcon className="h-3.5 w-3.5" />
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 text-sm font-medium text-ink/75 hover:text-accent dark:text-paper/75 dark:hover:text-accent-light"
                  >
                    <GitHubIcon className="h-3.5 w-3.5" />
                    GitHub
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {activeProject && (
        <ProjectModal project={activeProject} onClose={() => setActiveProject(null)} />
      )}
    </section>
  );
}
