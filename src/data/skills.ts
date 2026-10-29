/**
 * Technical skills, grouped by category.
 * Skills reflect the developer's own list; technologies that appear in the
 * shipped projects (Fit Log, DevStack, BazarDor) are marked with `evidence`
 * to distinguish verified project usage from the general skill set.
 * No proficiency percentages are used on purpose.
 */

export type Skill = {
  name: string;
  /** Icon file in /public/images/tech (optional — text-only skills are fine). */
  icon?: string;
  /** True when the skill is used in one of the showcased projects. */
  evidence?: boolean;
};

export type SkillCategory = {
  id: string;
  title: string;
  /** Key used by the category icon component. */
  icon: "frontend" | "backend" | "language" | "database" | "tools" | "concepts";
  skills: Skill[];
};

export const skillCategories: SkillCategory[] = [
  {
    id: "frontend",
    title: "Frontend Development",
    icon: "frontend",
    skills: [
      { name: "HTML5", icon: "html5.svg", evidence: true },
      { name: "CSS3", icon: "css3.svg", evidence: true },
      { name: "JavaScript", icon: "javascript.svg", evidence: true },
      { name: "TypeScript", icon: "typescript.svg", evidence: true },
      { name: "React", icon: "react.svg", evidence: true },
      { name: "Next.js", icon: "nextdotjs.svg", evidence: true },
      { name: "Tailwind CSS", icon: "tailwindcss.svg", evidence: true },
    ],
  },
  {
    id: "backend",
    title: "Backend Development",
    icon: "backend",
    skills: [
      { name: "Node.js", icon: "nodedotjs.svg", evidence: true },
      { name: "Express.js", icon: "express.svg" },
      { name: "REST API integration", evidence: true },
      { name: "Server-side development", evidence: true },
    ],
  },
  {
    id: "languages",
    title: "Programming Languages",
    icon: "language",
    skills: [
      { name: "C", icon: "c.svg" },
      { name: "C++", icon: "cplusplus.svg" },
      { name: "JavaScript", icon: "javascript.svg", evidence: true },
      { name: "TypeScript", icon: "typescript.svg", evidence: true },
    ],
  },
  {
    id: "database",
    title: "Database",
    icon: "database",
    skills: [{ name: "MongoDB", icon: "mongodb.svg" }],
  },
  {
    id: "tools",
    title: "Development Tools",
    icon: "tools",
    skills: [
      { name: "Git", icon: "git.svg", evidence: true },
      { name: "GitHub", icon: "github.svg", evidence: true },
      { name: "Visual Studio Code", icon: "visualstudiocode.svg", evidence: true },
      { name: "Figma", icon: "figma.svg" },
      { name: "npm", icon: "npm.svg", evidence: true },
      { name: "Vite", icon: "vite.svg", evidence: true },
    ],
  },
  {
    id: "concepts",
    title: "Development Concepts",
    icon: "concepts",
    skills: [
      { name: "Responsive Web Design", evidence: true },
      { name: "Component-Based Architecture", evidence: true },
      { name: "Object-Oriented Programming" },
      { name: "API Integration", evidence: true },
      { name: "CRUD Operations", evidence: true },
      { name: "Debugging", evidence: true },
      { name: "Version Control", evidence: true },
    ],
  },
];
