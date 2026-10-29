import { journey, professionalExperience } from "@/data/experience";
import { BriefcaseIcon, SparklesIcon } from "./icons";
import { SectionHeading } from "./section-heading";

/**
 * Experience section.
 * No verified employment history exists, so the section presents
 * "My Development Journey" instead. Real experience entries, added to
 * `professionalExperience` in the data file, render above the journey
 * automatically.
 */
export function Experience() {
  const hasJobHistory = professionalExperience.length > 0;

  return (
    <section
      id="experience"
      className="section border-t border-line/60"
      aria-labelledby="experience-heading"
    >
      <div className="container-x">
        <SectionHeading
          headingId="experience-heading"
          eyebrow={hasJobHistory ? "Experience" : "Currently growing as a developer"}
          title={hasJobHistory ? "Professional experience" : "My development journey"}
          description={
            hasJobHistory
              ? "Roles, internships and freelance work."
              : "No formal employment history yet — this is what I've been doing instead: shipping real projects, studying computer science and practicing every day."
          }
        />

        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
          {/* Verified professional experience (empty until real entries exist). */}
          {hasJobHistory ? (
            <ol className="flex flex-col gap-5">
              {professionalExperience.map((entry) => (
                <li key={`${entry.organization}-${entry.role}`} className="card p-6">
                  <div className="flex items-start gap-3">
                    <span
                      aria-hidden="true"
                      className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-line bg-surface-2 text-accent"
                    >
                      <BriefcaseIcon width={19} height={19} />
                    </span>
                    <div>
                      <h3 className="font-semibold text-txt">{entry.role}</h3>
                      <p className="text-sm text-accent">{entry.organization}</p>
                      <p className="mt-1 font-mono text-xs text-muted">
                        {entry.period}
                      </p>
                    </div>
                  </div>
                  <p className="mt-4 text-sm leading-6 text-muted">
                    {entry.summary}
                  </p>
                  {entry.responsibilities?.length ? (
                    <ul className="mt-3 flex flex-col gap-1.5 text-sm text-muted">
                      {entry.responsibilities.map((item) => (
                        <li key={item} className="flex gap-2">
                          <span aria-hidden="true" className="text-accent">
                            •
                          </span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  ) : null}
                  {entry.technologies?.length ? (
                    <ul className="mt-4 flex flex-wrap gap-2">
                      {entry.technologies.map((tech) => (
                        <li key={tech} className="chip">
                          {tech}
                        </li>
                      ))}
                    </ul>
                  ) : null}
                  {entry.link ? (
                    <a
                      href={entry.link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:underline"
                    >
                      {entry.link.label}
                      <span className="sr-only">(opens in a new tab)</span>
                    </a>
                  ) : null}
                </li>
              ))}
            </ol>
          ) : (
            <div className="card flex h-full flex-col justify-center p-7">
              <span
                aria-hidden="true"
                className="flex h-12 w-12 items-center justify-center rounded-xl border border-line bg-surface-2 text-accent"
              >
                <SparklesIcon width={22} height={22} />
              </span>
              <h3 className="mt-5 text-xl font-semibold text-txt">
                Currently growing as a developer
              </h3>
              <p className="mt-3 text-sm leading-6 text-muted">
                I haven&apos;t held a formal development role yet — instead I
                invest that time in building and deploying complete
                applications, studying toward my CSE degree and deliberately
                practicing the fundamentals. When a real role, internship or
                freelance project joins my record, it will appear here.
              </p>
              <a href="#projects" className="btn btn-outline mt-6 self-start">
                See what I&apos;ve built
              </a>
            </div>
          )}

          {/* Journey timeline */}
          <ol className="relative flex flex-col gap-5 border-l border-line pl-6 sm:pl-8">
            {journey.map((entry) => (
              <li key={entry.title} className="relative">
                <span
                  aria-hidden="true"
                  className="absolute -left-[1.9rem] top-1.5 h-3.5 w-3.5 rounded-full border-2 border-accent bg-bg sm:-left-[2.4rem]"
                />
                <div className="card p-5 sm:p-6">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h3 className="font-semibold text-txt">{entry.title}</h3>
                    <span className="font-mono text-xs uppercase tracking-widest text-accent">
                      {entry.period}
                    </span>
                  </div>
                  <p className="mt-2.5 text-sm leading-6 text-muted">
                    {entry.summary}
                  </p>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {entry.tags.map((tag) => (
                      <li key={tag} className="chip">
                        {tag}
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
