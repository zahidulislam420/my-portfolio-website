/**
 * Experience section data.
 *
 * `professionalExperience` stays empty on purpose: no employment, internship or
 * freelance history has been verified. When real experience becomes available,
 * add entries here and they will render above the journey timeline — no
 * component changes needed.
 */

export type ExperienceEntry = {
  role: string;
  organization: string;
  period: string;
  summary: string;
  responsibilities?: string[];
  technologies?: string[];
  link?: { label: string; href: string };
};

export const professionalExperience: ExperienceEntry[] = [
  // Example shape (uncomment and edit once verified):
  // {
  //   role: "Frontend Developer Intern",
  //   organization: "Example Company",
  //   period: "Jan 2025 – Apr 2025",
  //   summary: "One-line description of the role.",
  //   responsibilities: ["Built ...", "Maintained ..."],
  //   technologies: ["React", "TypeScript", "Tailwind CSS"],
  //   link: { label: "Company website", href: "https://example.com" },
  // },
];

export type JourneyEntry = {
  title: string;
  period: string;
  summary: string;
  tags: string[];
};

/**
 * "My Development Journey" — a truthful alternative to a job timeline, based
 * on coursework, self-directed learning and the projects shipped so far.
 */
export const journey: JourneyEntry[] = [
  {
    title: "Building and shipping real projects",
    period: "Recent work",
    summary:
      "Designed, built and deployed three complete web applications — Fit Log, DevStack and BazarDor — each with its own repository, documentation and live site, covering workout tracking, developer tooling and a Bengali market-price dashboard.",
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "Studying Computer Science & Engineering",
    period: "Ongoing",
    summary:
      "Currently pursuing a B.Sc. in CSE at Sonargaon University, building the computer science foundations that support everyday development work — from programming fundamentals to building full applications.",
    tags: ["Coursework", "Programming fundamentals"],
  },
  {
    title: "Learning the full stack, step by step",
    period: "Continuous",
    summary:
      "Growing from frontend interfaces (HTML, CSS, JavaScript, React) into backend and data work with Node.js, REST API integration and databases — practicing by turning ideas into working, responsive products.",
    tags: ["Frontend", "Backend", "REST APIs", "Databases"],
  },
  {
    title: "Practicing clean, maintainable code",
    period: "Ongoing",
    summary:
      "Focusing on component-based architecture, responsive layouts and a systematic approach to debugging — reading errors carefully, narrowing down the cause, and iterating until the fix holds up.",
    tags: ["Clean code", "Debugging", "Responsive design"],
  },
];
