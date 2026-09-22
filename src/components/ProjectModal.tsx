import { useEffect, useRef } from "react";
import type { Project } from "../data/projects";
import { projectImages } from "../data/projectImages";
import { CloseIcon, ArrowUpRightIcon, GitHubIcon } from "./icons";

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    closeButtonRef.current?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[60] flex items-start justify-center overflow-y-auto bg-ink/60 p-4 pt-10 backdrop-blur-sm sm:pt-16"
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
      onClick={onClose}
    >
      <div
        className="w-full max-w-2xl rounded-2xl border border-ink/10 bg-paper p-6 shadow-xl dark:border-paper/10 dark:bg-ink sm:p-8"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-accent/10 font-mono text-sm text-accent dark:text-accent-light">
            {project.title.slice(0, 2).toUpperCase()}
          </div>
          <button
            ref={closeButtonRef}
            type="button"
            onClick={onClose}
            aria-label="Close project details"
            className="rounded-md p-2 text-ink/60 hover:bg-ink/5 hover:text-ink dark:text-paper/60 dark:hover:bg-paper/10 dark:hover:text-paper"
          >
            <CloseIcon className="h-5 w-5" />
          </button>
        </div>

        <h3
          id="project-modal-title"
          className="mt-5 font-display text-2xl font-semibold tracking-tight"
        >
          {project.title}
        </h3>

        <div className="mt-6 space-y-5 text-sm leading-relaxed text-ink/75 dark:text-paper/75">
          <div>
            <h4 className="font-display text-xs font-semibold uppercase tracking-wide text-muted">
              Overview
            </h4>
            <p className="mt-1.5">{project.summary}</p>
          </div>

          <div>
            <h4 className="font-display text-xs font-semibold uppercase tracking-wide text-muted">
              Problem
            </h4>
            <p className="mt-1.5">{project.problem}</p>
          </div>

          <div>
            <h4 className="font-display text-xs font-semibold uppercase tracking-wide text-muted">
              Solution
            </h4>
            <p className="mt-1.5">{project.solution}</p>
          </div>

          <div>
            <h4 className="font-display text-xs font-semibold uppercase tracking-wide text-muted">
              Features
            </h4>
            <ul className="mt-2 grid gap-1.5 sm:grid-cols-2">
              {project.features.map((feature) => (
                <li key={feature} className="flex items-start gap-2">
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-xs font-semibold uppercase tracking-wide text-muted">
              Technologies
            </h4>
            <ul className="mt-2 flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <li
                  key={tech}
                  className="rounded-full bg-paper-soft px-3 py-1 font-mono text-xs dark:bg-ink-soft"
                >
                  {tech}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-xs font-semibold uppercase tracking-wide text-muted">
              Screenshots
            </h4>
            {projectImages[project.slug] ? (
              <div className="mt-2 overflow-hidden rounded-lg border border-ink/10 dark:border-paper/10">
                <img
                  src={projectImages[project.slug]}
                  alt={`${project.title} screenshot`}
                  className="w-full object-cover object-top"
                />
              </div>
            ) : (
              <div className="mt-2 flex aspect-video items-center justify-center rounded-lg border border-dashed border-ink/15 bg-paper-soft text-xs text-muted dark:border-paper/15 dark:bg-ink-soft">
                Screenshot placeholder — add project images to src/assets
              </div>
            )}
          </div>
        </div>

        <div className="mt-7 flex flex-wrap gap-3">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 rounded-md bg-accent px-4 py-2.5 text-sm font-medium text-paper hover:bg-accent-dark"
          >
            Live Demo
            <ArrowUpRightIcon className="h-4 w-4" />
          </a>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 rounded-md border border-ink/15 px-4 py-2.5 text-sm font-medium hover:border-accent hover:text-accent dark:border-paper/20 dark:hover:border-accent-light dark:hover:text-accent-light"
          >
            <GitHubIcon className="h-4 w-4" />
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
}
