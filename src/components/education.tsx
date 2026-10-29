import { profile } from "@/data/profile";
import { GraduationCapIcon, MapPinIcon } from "./icons";
import { SectionHeading } from "./section-heading";

/**
 * Education — a single verified entry (degree, institution, location, status).
 * Dates, results and earlier qualifications are intentionally omitted because
 * no accurate information is available.
 */
export function Education() {
  const { education } = profile;

  return (
    <section
      id="education"
      className="section border-t border-line/60 bg-bg-soft/60"
      aria-labelledby="education-heading"
    >
      <div className="container-x">
        <SectionHeading
          headingId="education-heading"
          eyebrow="Education"
          title="Academic background"
          description="Where I'm currently studying and what I'm working towards."
        />

        <div className="max-w-3xl">
          <div className="relative pl-8 sm:pl-10">
            {/* Timeline spine */}
            <span
              aria-hidden="true"
              className="absolute left-[7px] top-2 h-[calc(100%-1rem)] w-px bg-gradient-to-b from-accent via-accent-2/60 to-transparent sm:left-[9px]"
            />
            <span
              aria-hidden="true"
              className="absolute left-0 top-1.5 h-4 w-4 rounded-full border-2 border-accent bg-bg sm:left-0.5"
            />

            <article className="card p-6 sm:p-7">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div className="flex items-center gap-3">
                  <span
                    aria-hidden="true"
                    className="flex h-11 w-11 items-center justify-center rounded-xl border border-line bg-surface-2 text-accent"
                  >
                    <GraduationCapIcon width={21} height={21} />
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold text-txt">
                      {education.degree}
                    </h3>
                    <p className="mt-1 text-sm text-muted">
                      {education.institution}
                    </p>
                  </div>
                </div>

                <span className="chip border-accent/40 !text-accent">
                  <span
                    aria-hidden="true"
                    className="inline-block h-1.5 w-1.5 rounded-full bg-accent"
                  />
                  {education.status}
                </span>
              </div>

              <dl className="mt-5 grid gap-3 border-t border-line/70 pt-5 text-sm sm:grid-cols-2">
                <div className="flex items-center gap-2 text-muted">
                  <dt className="sr-only">Location</dt>
                  <MapPinIcon width={15} height={15} className="text-accent" />
                  <dd>{education.location}</dd>
                </div>
                <div className="flex items-center gap-2 text-muted">
                  <dt className="sr-only">Field of study</dt>
                  <GraduationCapIcon
                    width={15}
                    height={15}
                    className="text-accent"
                  />
                  <dd>Computer Science &amp; Engineering</dd>
                </div>
              </dl>

              <p className="mt-5 border-t border-line/70 pt-4 text-sm leading-6 text-muted">
                Coursework results, graduation dates and earlier qualifications
                will be added here as they become available.
              </p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
