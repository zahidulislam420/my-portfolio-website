import Image from "next/image";
import Link from "next/link";

import { projects, type Project } from "@/data/projects";
import { ArrowRightIcon, ExternalLinkIcon } from "./icons";
import { SectionHeading } from "./section-heading";

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="card card-hover flex flex-col overflow-hidden">
      {/* Project-specific visual */}
      <div className="relative aspect-[16/10] overflow-hidden border-b border-line bg-gradient-to-br from-surface-2 to-bg-soft">
        <Image
          src={project.image.src}
          alt={project.image.alt}
          fill
          sizes="(max-width: 640px) 92vw, (max-width: 1024px) 46vw, 30vw"
          className="object-contain p-5 transition-transform duration-500 hover:scale-105"
        />
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-lg font-semibold text-txt">{project.name}</h3>
        <p className="mt-2 flex-1 text-sm leading-6 text-muted">
          {project.tagline}
        </p>

        <ul className="mt-4 flex flex-wrap gap-2" aria-label={`${project.name} technologies`}>
          {project.cardTech.map((tech) => (
            <li key={tech} className="chip">
              {tech}
            </li>
          ))}
        </ul>

        <ul className="mt-4 flex flex-col gap-1.5 text-sm text-muted">
          {project.features.slice(0, 3).map((feature) => (
            <li key={feature} className="flex gap-2">
              <span aria-hidden="true" className="text-accent">
                ✓
              </span>
              {feature}
            </li>
          ))}
        </ul>

        <div className="mt-6 flex flex-wrap items-center gap-3 border-t border-line/70 pt-5">
          <Link href={`/projects/${project.slug}`} className="btn btn-primary !px-4 !py-2.5 text-sm">
            View Details
            <ArrowRightIcon width={15} height={15} />
          </Link>
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline !px-4 !py-2.5 text-sm"
          >
            Live Demo
            <ExternalLinkIcon width={14} height={14} />
            <span className="sr-only">(opens in a new tab)</span>
          </a>
          <a
            href={project.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${project.name} GitHub repository (opens in a new tab)`}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-line bg-surface text-muted transition-colors hover:border-accent hover:text-txt"
          >
            <Image
              src="/images/tech/github.svg"
              alt=""
              width={16}
              height={16}
            />
          </a>
        </div>
      </div>
    </article>
  );
}

/**
 * Projects grid — cards link to the dedicated /projects/[slug] detail pages.
 */
export function Projects() {
  return (
    <section
      id="projects"
      className="section border-t border-line/60 bg-bg-soft/60"
      aria-labelledby="projects-heading"
    >
      <div className="container-x">
        <SectionHeading
          headingId="projects-heading"
          eyebrow="Featured projects"
          title="Things I've built and shipped"
          description="Three complete applications — each with its own repository, documentation and live deployment. Open a card for the full breakdown."
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
