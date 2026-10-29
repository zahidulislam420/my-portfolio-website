import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import {
  ArrowLeftIcon,
  ArrowRightIcon,
  ExternalLinkIcon,
  CheckIcon,
  CodeIcon,
} from "@/components/icons";
import { getProject, getProjectNeighbors, projects } from "@/data/projects";

type Props = { params: Promise<{ slug: string }> };

/** Prerender all three project detail pages at build time. */
export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return { title: "Project not found" };

  return {
    title: project.seo.title,
    description: project.seo.description,
    openGraph: {
      type: "article",
      title: project.seo.title,
      description: project.seo.description,
      images: [{ url: project.image.src, alt: project.image.alt }],
    },
    twitter: {
      card: "summary_large_image",
      title: project.seo.title,
      description: project.seo.description,
      images: [project.image.src],
    },
  };
}

function SectionBlock({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section aria-labelledby={id} className="border-t border-line/60 pt-10">
      <h2 id={id} className="text-2xl font-bold tracking-tight text-txt">
        {title}
      </h2>
      <div className="mt-5">{children}</div>
    </section>
  );
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const { prev, next } = getProjectNeighbors(slug);

  return (
    <article className="section">
      <div className="container-x max-w-5xl">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-8">
          <ol className="flex flex-wrap items-center gap-2 font-mono text-xs text-muted">
            <li>
              <Link href="/" className="transition-colors hover:text-txt">
                Home
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li>
              <Link href="/#projects" className="transition-colors hover:text-txt">
                Projects
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li aria-current="page" className="text-accent">
              {project.name}
            </li>
          </ol>
        </nav>

        {/* Header */}
        <header className="flex flex-col gap-5">
          <div className="flex flex-wrap items-center gap-3">
            <span className="chip border-accent/40 !text-accent">
              Project showcase
            </span>
            <ul className="flex flex-wrap gap-2" aria-label="Main technologies">
              {project.cardTech.map((tech) => (
                <li key={tech} className="chip">
                  {tech}
                </li>
              ))}
            </ul>
          </div>

          <h1 className="text-4xl font-extrabold tracking-tight text-txt sm:text-5xl">
            {project.name}
          </h1>
          <p className="max-w-3xl text-base leading-7 text-muted sm:text-lg sm:leading-8">
            {project.tagline}
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              Live Demo
              <ExternalLinkIcon width={16} height={16} />
              <span className="sr-only">(opens in a new tab)</span>
            </a>
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline"
            >
              GitHub Repository
              <ExternalLinkIcon width={16} height={16} />
              <span className="sr-only">(opens in a new tab)</span>
            </a>
            <Link href="/#projects" className="btn btn-outline">
              <ArrowLeftIcon width={16} height={16} />
              Back to Projects
            </Link>
          </div>
        </header>

        {/* Hero image */}
        <div className="relative mt-10 aspect-[16/9] overflow-hidden rounded-2xl border border-line bg-gradient-to-br from-surface-2 to-bg-soft">
          <Image
            src={project.image.src}
            alt={project.image.alt}
            fill
            priority
            sizes="(max-width: 1024px) 92vw, 768px"
            className="object-contain p-6 sm:p-10"
          />
        </div>

        <div className="mt-12 flex flex-col gap-12">
          {/* A. Overview */}
          <SectionBlock id="overview" title="Project overview">
            <div className="flex flex-col gap-4 text-base leading-7 text-muted">
              <p>{project.description}</p>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="card p-5">
                  <h3 className="font-mono text-xs uppercase tracking-widest text-accent">
                    The problem it addresses
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-muted">
                    {project.problem}
                  </p>
                </div>
                <div className="card p-5">
                  <h3 className="font-mono text-xs uppercase tracking-widest text-accent">
                    Intended users &amp; purpose
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-muted">
                    {project.audience}
                  </p>
                </div>
              </div>
            </div>
          </SectionBlock>

          {/* B. Technology stack */}
          <SectionBlock id="stack" title="Technology stack">
            <p className="mb-5 flex items-center gap-2 text-sm text-muted">
              <CodeIcon width={16} height={16} className="text-accent" />
              Verified against the project&apos;s source code and configuration.
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              {project.tech.map((group) => (
                <div key={group.label} className="card p-5">
                  <h3 className="font-semibold text-txt">{group.label}</h3>
                  <ul className="mt-3 flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <li key={item} className="chip">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </SectionBlock>

          {/* C. Key features */}
          <SectionBlock id="features" title="Key features">
            <ul className="grid gap-3 sm:grid-cols-2">
              {project.features.map((feature) => (
                <li
                  key={feature}
                  className="card flex items-start gap-3 p-4 text-sm leading-6 text-muted"
                >
                  <span
                    aria-hidden="true"
                    className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-md border border-accent/40 bg-accent/10 text-accent"
                  >
                    <CheckIcon width={13} height={13} />
                  </span>
                  {feature}
                </li>
              ))}
            </ul>
          </SectionBlock>

          {/* D + E. Live demo & repository */}
          <SectionBlock id="links" title="Live demo & source code">
            <div className="grid gap-4 sm:grid-cols-2">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="card card-hover flex items-center justify-between gap-3 p-5"
              >
                <span>
                  <span className="block font-mono text-xs uppercase tracking-widest text-accent">
                    Live demo
                  </span>
                  <span className="mt-1 block break-all text-sm text-txt">
                    {project.liveUrl.replace(/^https?:\/\//, "")}
                  </span>
                </span>
                <ExternalLinkIcon
                  width={18}
                  height={18}
                  className="shrink-0 text-accent"
                />
                <span className="sr-only">(opens in a new tab)</span>
              </a>
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="card card-hover flex items-center justify-between gap-3 p-5"
              >
                <span>
                  <span className="block font-mono text-xs uppercase tracking-widest text-accent">
                    GitHub repository
                  </span>
                  <span className="mt-1 block break-all text-sm text-txt">
                    {project.repoUrl.replace(/^https?:\/\//, "")}
                  </span>
                </span>
                <ExternalLinkIcon
                  width={18}
                  height={18}
                  className="shrink-0 text-accent"
                />
                <span className="sr-only">(opens in a new tab)</span>
              </a>
            </div>
            <p className="mt-4 text-xs text-muted">
              No separate backend repository exists for this project — the
              repository above contains the complete source.
            </p>
          </SectionBlock>

          {/* F. Challenges */}
          <SectionBlock id="challenges" title="Challenges faced">
            <div className="flex flex-col gap-4">
              {project.challenges.map((note) => (
                <div
                  key={note.title}
                  className={`p-5 ${
                    note.placeholder
                      ? "rounded-xl border border-dashed border-line bg-surface/40"
                      : "card"
                  }`}
                >
                  <div className="flex flex-wrap items-center gap-3">
                    <h3 className="font-semibold text-txt">{note.title}</h3>
                    {note.placeholder ? (
                      <span className="chip !border-amber-500/50 !text-amber-400">
                        To do — replace with your notes
                      </span>
                    ) : null}
                  </div>
                  <p className="mt-2 text-sm leading-6 text-muted">{note.body}</p>
                </div>
              ))}
            </div>
          </SectionBlock>

          {/* G. Solutions */}
          <SectionBlock id="solutions" title="Solutions implemented">
            <div className="flex flex-col gap-4">
              {project.solutions.map((note) => (
                <div
                  key={note.title}
                  className={`p-5 ${
                    note.placeholder
                      ? "rounded-xl border border-dashed border-line bg-surface/40"
                      : "card"
                  }`}
                >
                  <div className="flex flex-wrap items-center gap-3">
                    <h3 className="font-semibold text-txt">{note.title}</h3>
                    {note.placeholder ? (
                      <span className="chip !border-amber-500/50 !text-amber-400">
                        To do — replace with your notes
                      </span>
                    ) : null}
                  </div>
                  <p className="mt-2 text-sm leading-6 text-muted">{note.body}</p>
                </div>
              ))}
            </div>
          </SectionBlock>

          {/* H. Future improvements */}
          <SectionBlock id="future" title="Future improvements">
            <div className="card p-5">
              <p className="mb-4 text-sm text-muted">
                <span className="chip mr-2 !border-violet/50 !text-violet">
                  Proposed
                </span>
                Ideas for future work — these are <em>not</em> part of the
                current application.
              </p>
              <ul className="grid gap-2.5 sm:grid-cols-2">
                {project.future.map((idea) => (
                  <li
                    key={idea}
                    className="flex gap-2.5 text-sm leading-6 text-muted"
                  >
                    <span aria-hidden="true" className="text-violet">
                      →
                    </span>
                    {idea}
                  </li>
                ))}
              </ul>
            </div>
          </SectionBlock>

          {/* I. Navigation */}
          <nav
            aria-label="Project navigation"
            className="flex flex-col gap-4 border-t border-line/60 pt-10 sm:flex-row sm:items-center sm:justify-between"
          >
            <div className="flex-1">
              {prev ? (
                <Link
                  href={`/projects/${prev.slug}`}
                  className="group inline-flex flex-col gap-1"
                >
                  <span className="flex items-center gap-1.5 font-mono text-xs uppercase tracking-widest text-muted transition-colors group-hover:text-accent">
                    <ArrowLeftIcon width={14} height={14} />
                    Previous project
                  </span>
                  <span className="font-semibold text-txt group-hover:text-accent">
                    {prev.name}
                  </span>
                </Link>
              ) : null}
            </div>

            <Link href="/" className="btn btn-outline order-last sm:order-none">
              Return to Home
            </Link>

            <div className="flex-1 text-right">
              {next ? (
                <Link
                  href={`/projects/${next.slug}`}
                  className="group inline-flex flex-col items-end gap-1"
                >
                  <span className="flex items-center gap-1.5 font-mono text-xs uppercase tracking-widest text-muted transition-colors group-hover:text-accent">
                    Next project
                    <ArrowRightIcon width={14} height={14} />
                  </span>
                  <span className="font-semibold text-txt group-hover:text-accent">
                    {next.name}
                  </span>
                </Link>
              ) : null}
            </div>
          </nav>
        </div>
      </div>
    </article>
  );
}
