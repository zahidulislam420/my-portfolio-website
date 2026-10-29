import { profile, socials } from "@/data/profile";
import { GraduationCapIcon, MapPinIcon, SparklesIcon } from "./icons";
import { SectionHeading } from "./section-heading";

const highlights = [
  {
    icon: GraduationCapIcon,
    label: "Education",
    value: `${profile.education.shortDegree} — ${profile.education.institution}`,
    note: profile.education.status,
  },
  {
    icon: MapPinIcon,
    label: "Based in",
    value: profile.location,
    note: "Bangladesh (GMT+6)",
  },
  {
    icon: SparklesIcon,
    label: "Focus",
    value: "Modern, responsive web apps",
    note: "Frontend · Backend · APIs",
  },
];

/**
 * About — background and development journey.
 * Content is limited to verified information: CSE studies, the learning
 * journey and working style. No unverified hobbies or achievements.
 */
export function About() {
  return (
    <section
      id="about"
      className="section border-t border-line/60 bg-bg-soft/60"
      aria-labelledby="about-heading"
    >
      <div className="container-x">
        <SectionHeading
          headingId="about-heading"
          eyebrow="About me"
          title="Turning ideas into practical digital experiences"
          description="A quick look at who I am, what I'm learning and how I approach development work."
        />

        <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-14">
          <div className="flex flex-col gap-5 text-base leading-7 text-muted sm:text-[1.05rem] sm:leading-8">
            <p>
              I&apos;m {profile.fullName}, a Full Stack Developer based in{" "}
              {profile.location}. I&apos;m currently pursuing a{" "}
              {profile.education.degree} at {profile.education.institution},
              where I&apos;m building the computer science foundations behind
              everything I ship.
            </p>
            <p>
              My interest in programming grew into a daily practice of building
              things for the web. Over time I&apos;ve worked my way through{" "}
              <span className="text-txt">HTML, CSS and JavaScript</span> into
              modern frontend frameworks like <span className="text-txt">React</span> and{" "}
              <span className="text-txt">Next.js</span>, and on the backend
              into <span className="text-txt">Node.js</span>,{" "}
              <span className="text-txt">REST API integration</span> and
              database work — learning each piece by using it in real projects
              rather than only in tutorials.
            </p>
            <p>
              What I enjoy most is building practical web applications: taking
              an idea, shaping it into a working product, and polishing the
              details until it feels simple to use. I care about clean,
              maintainable code and responsive interfaces that hold up on a
              phone just as well as on a desktop.
            </p>
            <p>
              When something breaks, I treat debugging as part of the craft —
              reading the error carefully, narrowing down where the behaviour
              diverges from what I expected, and fixing the cause rather than
              the symptom. I&apos;m always looking for the next thing to learn
              and the next problem worth solving.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            {highlights.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.label} className="card flex items-start gap-4 p-5">
                  <span
                    aria-hidden="true"
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-line bg-surface-2 text-accent"
                  >
                    <Icon width={20} height={20} />
                  </span>
                  <div>
                    <p className="font-mono text-xs uppercase tracking-widest text-muted">
                      {item.label}
                    </p>
                    <p className="mt-1 font-semibold text-txt">{item.value}</p>
                    <p className="mt-0.5 text-sm text-muted">{item.note}</p>
                  </div>
                </div>
              );
            })}

            <a
              href={`mailto:${socials.email}`}
              className="btn btn-outline w-full"
            >
              Let&apos;s work together
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
