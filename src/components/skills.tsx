import Image from "next/image";

import { skillCategories, type SkillCategory } from "@/data/skills";
import {
  BulbIcon,
  CodeIcon,
  DatabaseIcon,
  MonitorIcon,
  ServerIcon,
  WrenchIcon,
} from "./icons";
import { SectionHeading } from "./section-heading";

const categoryIcons = {
  frontend: MonitorIcon,
  backend: ServerIcon,
  language: CodeIcon,
  database: DatabaseIcon,
  tools: WrenchIcon,
  concepts: BulbIcon,
} satisfies Record<SkillCategory["icon"], typeof CodeIcon>;

/**
 * Technical skills — grouped cards with brand icons.
 * Deliberately shows no proficiency percentages or misleading meters.
 */
export function Skills() {
  return (
    <section
      id="skills"
      className="section border-t border-line/60"
      aria-labelledby="skills-heading"
    >
      <div className="container-x">
        <SectionHeading
          headingId="skills-heading"
          eyebrow="Technical skills"
          title="The tools I work with"
          description="Grouped by area, with the technologies I've used in shipped projects highlighted by their icons."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category) => {
            const Icon = categoryIcons[category.icon];
            return (
              <article
                key={category.id}
                className="card card-hover flex flex-col p-6"
              >
                <div className="mb-4 flex items-center gap-3">
                  <span
                    aria-hidden="true"
                    className="flex h-10 w-10 items-center justify-center rounded-xl border border-line bg-surface-2 text-accent"
                  >
                    <Icon width={19} height={19} />
                  </span>
                  <h3 className="font-semibold text-txt">{category.title}</h3>
                </div>

                <ul className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <li key={`${category.id}-${skill.name}`} className="chip">
                      {skill.icon ? (
                        <Image
                          src={`/images/tech/${skill.icon}`}
                          alt=""
                          width={14}
                          height={14}
                          aria-hidden="true"
                        />
                      ) : null}
                      {skill.name}
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>

        <p className="mt-6 text-sm text-muted">
          Icons are shown for technologies used in the projects on this page;
          skills without an icon are part of my broader skill set rather than
          demonstrated in a live project.
        </p>
      </div>
    </section>
  );
}
