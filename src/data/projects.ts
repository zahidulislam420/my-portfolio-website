/**
 * Central project data — drives both the homepage project cards and the
 * individual /projects/[slug] detail pages.
 *
 * Everything here was verified against the actual repositories (source code,
 * README, commit history) and the deployed sites in October 2026:
 * - Fit Log   → github.com/zahidulislam420/Fit-log   · fit-log-project-chi.vercel.app
 * - DevStack  → github.com/zahidulislam420/DevStack  · devstack-project.netlify.app
 * - BazarDor  → github.com/zahidulislam420/bazardor  · bazar-dor-two-eta.vercel.app
 */

export type TechGroup = {
  label: string;
  items: string[];
};

export type ProjectNote = {
  title: string;
  body: string;
  /** True for clearly-labelled editable placeholders (no verified notes exist). */
  placeholder?: boolean;
};

export type Project = {
  slug: string;
  name: string;
  /** Short description used on the homepage card. */
  tagline: string;
  /** Longer description for the detail page. */
  description: string;
  problem: string;
  audience: string;
  image: { src: string; alt: string };
  liveUrl: string;
  repoUrl: string;
  /** Main technologies shown as badges on the card. */
  cardTech: string[];
  /** Categorised stack for the detail page. */
  tech: TechGroup[];
  features: string[];
  challenges: ProjectNote[];
  solutions: ProjectNote[];
  /** Proposed future enhancements — never presented as existing functionality. */
  future: string[];
  seo: { title: string; description: string };
};

/** Placeholder note used where the repository documents no real challenge log. */
const editablePlaceholder = (project: string): ProjectNote => ({
  title: "Editable placeholder — add your own notes",
  placeholder: true,
  body: `No written challenge log was found in the ${project} repository, so this section is intentionally left as a placeholder instead of a made-up story. Replace it with obstacles you actually hit while building ${project} — for example responsive layout issues, state management, API errors or deployment — together with how you resolved them.`,
});

const editableSolutionPlaceholder = (project: string): ProjectNote => ({
  title: "Editable placeholder — add your own notes",
  placeholder: true,
  body: `Once real challenges are recorded above, document here how each one was actually solved in the ${project} codebase, pointing at the concrete implementation (component, function or configuration) that carries the fix.`,
});

export const projects: Project[] = [
  {
    slug: "fit-log",
    name: "Fit Log",
    tagline:
      "A dark, responsive workout library and daily planning app — browse exercises, build today's plan and track what you complete.",
    description:
      "Fit Log is a workout companion for organizing a daily gym routine in one place. It combines a browsable exercise library with detail pages for every lift, a daily plan with a five-lift cap, a saved list for later, and running totals for exercises, minutes and calories. Workout data comes from an external REST API, while the plan and saved list persist in the browser so they survive page reloads.",
    problem:
      "Workout details and daily plans tend to live in scattered notes and apps, which makes it hard to keep a simple routine in one view. Fit Log gathers discovery, planning and progress tracking into a single fast interface.",
    audience:
      "Anyone who wants to discover exercises and organize a daily workout routine — from beginners picking their first lifts to regular gym-goers tracking today's session.",
    image: {
      src: "/images/projects/fit-log.png",
      alt: "Fit Log hero banner showing a fitness trainer with the tagline 'Train with intent. Log every set.'",
    },
    liveUrl: "https://fit-log-project-chi.vercel.app/",
    repoUrl: "https://github.com/zahidulislam420/Fit-log",
    cardTech: ["Next.js", "TypeScript", "Tailwind CSS", "REST API"],
    tech: [
      {
        label: "Frontend",
        items: ["Next.js (App Router)", "React", "TypeScript", "Tailwind CSS"],
      },
      {
        label: "Data & integration",
        items: [
          "REST API (api.abcz.workers.dev)",
          "LocalStorage for plan & saved state",
        ],
      },
      {
        label: "Tooling",
        items: ["React Toastify", "Git & GitHub", "Vercel (deployment)"],
      },
    ],
    features: [
      "Workout library of 12 exercises with images, muscle groups, equipment, duration, calories and ratings.",
      "Sorting the library by duration, calories or rating.",
      "Dedicated detail page per workout with sets, reps, difficulty and step-by-step instructions.",
      "Today's plan with a cap of five lifts, plus running totals for exercises, minutes and calories.",
      "Save-for-later list with its own tab on the My Plan page.",
      "Mark planned workouts as done or remove them from the plan.",
      "Toast notifications for adding, saving, completing and removing workouts.",
      "Plan and saved workouts persist in localStorage across reloads.",
      "Custom 404 page and a fully responsive mobile/tablet/desktop layout.",
    ],
    challenges: [editablePlaceholder("Fit Log")],
    solutions: [editableSolutionPlaceholder("Fit Log")],
    future: [
      "Weekly or monthly plan views beyond the single-day plan.",
      "Progress visualization over time (volume, minutes, completed sessions).",
      "Search and filtering by muscle group, equipment or difficulty.",
      "A workout history log with dates.",
      "Stronger error and empty states for failed API requests.",
      "Automated tests and an accessibility pass.",
    ],
    seo: {
      title: "Fit Log — Workout Library & Daily Planning App",
      description:
        "Fit Log is a dark, responsive workout app built with Next.js, TypeScript and Tailwind CSS: browse 12 exercises, build today's plan (max five lifts), save workouts for later and track completed sessions.",
    },
  },
  {
    slug: "devstack",
    name: "DevStack",
    tagline:
      "An interactive technology stack explorer — compare frontend, backend, database and tooling options, then assemble your own stack.",
    description:
      "DevStack helps developers explore and evaluate technologies before starting a project. A catalog of technologies is presented as informative cards — each showing category, difficulty level, developer rating and a short overview — and a sticky 'Your Stack' sidebar lets users add, remove and clear selections while building a customized stack for their project requirements.",
    problem:
      "Choosing a technology stack is overwhelming when every option is described in isolation. DevStack puts the main options side by side so developers can compare them at a glance and assemble a stack that fits their next project.",
    audience:
      "Developers — especially those planning a new project or learning the ecosystem — who want a quick, visual way to compare technologies and decide what to build with.",
    image: {
      src: "/images/projects/devstack.png",
      alt: "DevStack illustration showing frontend, backend, database and tooling blocks stacked together",
    },
    liveUrl: "https://devstack-project.netlify.app/",
    repoUrl: "https://github.com/zahidulislam420/DevStack",
    cardTech: ["React", "TypeScript", "Vite", "Tailwind CSS"],
    tech: [
      {
        label: "Frontend",
        items: ["React", "TypeScript", "HTML5", "CSS3", "Tailwind CSS"],
      },
      {
        label: "Build & tooling",
        items: ["Vite", "npm", "ESLint", "React Router"],
      },
      {
        label: "Data & feedback",
        items: [
          "Local JSON technology catalog",
          "Technology icons from a public icon CDN",
          "React Toastify notifications",
        ],
      },
      {
        label: "Deployment",
        items: ["Netlify"],
      },
    ],
    features: [
      "Catalog of 12 technologies across six categories: Frontend, Backend, Database, Language, Styling and DevOps.",
      "Technology cards showing category, difficulty level, developer rating, badge and description for easy comparison.",
      "'Your Stack' sidebar that updates in real time as technologies are added or removed.",
      "Remove individual technologies or clear the whole stack with 'Remove All'.",
      "Duplicate protection — adding a technology that is already in the stack shows a warning toast instead.",
      "Loading and error states for the catalog.",
      "Sticky navbar with a working mobile menu, hero section and footer.",
      "Fully responsive layout from mobile to desktop.",
    ],
    challenges: [editablePlaceholder("DevStack")],
    solutions: [editableSolutionPlaceholder("DevStack")],
    future: [
      "Expanding the technology catalog beyond the current 12 entries.",
      "Search and per-category filtering of the catalog.",
      "Side-by-side comparison of two technologies.",
      "Exporting or sharing a built stack (JSON or shareable link).",
      "Persisting the built stack across sessions.",
      "Automated tests and improved documentation.",
    ],
    seo: {
      title: "DevStack — Interactive Technology Stack Explorer",
      description:
        "DevStack is an interactive stack builder built with React, TypeScript, Vite and Tailwind CSS: explore 12 technologies across frontend, backend, database and tooling categories, compare them and assemble your own stack.",
    },
  },
  {
    slug: "bazardor",
    name: "BazarDor",
    tagline:
      "দেশের প্রতিটি বাজারের আজকের দাম এক নজরে — a Bengali-first market price dashboard for everyday commodities.",
    description:
      "BazarDor (বাজার দর) is a Bengali-language commodity price dashboard showing today's rates for 33 essential goods across 8 categories, sourced from a public REST API with automatic mirror fallback and cached for about an hour. Every product card carries a price-movement badge, the home page ranks the day's top risers and fallers, and each product detail page breaks its price down across 12 bazaars in 6 divisions with minimum, maximum and average values. Authentication (email/password plus Google and GitHub sign-in) protects the detail pages, and the whole interface is Bengali-first — including Bengali numerals throughout.",
    problem:
      "Commodity prices change daily and are usually scattered across notices and local sources. BazarDor brings today's rates for everyday essentials into one Bengali-language dashboard, with a per-market breakdown so shoppers can see what each local bazaar is charging before they buy.",
    audience:
      "Bengali-speaking shoppers, households and anyone tracking daily commodity prices across Bangladesh who want today's rates — and where they changed — at a glance.",
    image: {
      src: "/images/projects/bazardor.svg",
      alt: "BazarDor illustration of a market basket filled with vegetables and commodities",
    },
    liveUrl: "https://bazar-dor-two-eta.vercel.app/",
    repoUrl: "https://github.com/zahidulislam420/bazardor",
    cardTech: ["Next.js 16", "TypeScript", "Tailwind CSS", "Better Auth"],
    tech: [
      {
        label: "Frontend",
        items: [
          "Next.js 16 (App Router, Cache Components)",
          "React 19",
          "TypeScript (strict)",
          "Tailwind CSS v4",
          "Hind Siliguri (Bengali typeface)",
        ],
      },
      {
        label: "Data & integrations",
        items: [
          "Public commodity REST API",
          "Automatic mirror fallback with timeout",
          "Cached fetchers (cacheLife/cacheTag, ~1 hour)",
        ],
      },
      {
        label: "Backend & auth",
        items: [
          "Better Auth (email/password + Google & GitHub OAuth)",
          "Turso / libSQL database (Kysely)",
          "Route protection via proxy.ts + server-side session checks",
        ],
      },
      {
        label: "Tooling",
        items: ["react-hot-toast", "Git & GitHub", "Vercel (deployment)"],
      },
    ],
    features: [
      "Bengali-first interface with Bengali numerals used throughout.",
      "33 essential products across 8 categories, loaded from a public REST API with automatic mirror fallback and hourly caching.",
      "Scrolling price ticker in the header plus top risers and top fallers sections (six each).",
      "Price-movement badges: a rise is marked red ▲ and a fall green ▼ — the consumer-goods convention used by this design.",
      "Category pages with a sort dropdown (default, price low→high, price high→low), loading skeleton and empty state.",
      "Product detail pages with min/max/average prices and a bazar-wise table covering 12 bazaars across 6 divisions.",
      "Full authentication: email/password plus Google and GitHub sign-in, protected detail pages with redirect-back and an explanatory toast.",
      "Profile page with name editing that updates everywhere it is displayed.",
      "Custom 404 page, error boundary and loading states.",
      "Responsive from 360px to 1440px with visible focus rings, ARIA labels and reduced-motion support.",
      "Data note: prices are provided by an external API and cached for about an hour — they are not entered or owned by this site.",
    ],
    challenges: [
      {
        title: "Next.js 16 async request APIs under Cache Components",
        body: "With Next.js 16, params and searchParams are Promises and synchronous access is fully removed. Under Cache Components, awaiting them directly in a page body fails the build with a 'URL data outside of Suspense' error — this affected the category, product, signin and redirect routes.",
      },
      {
        title: "Session and cookie reads are uncached data",
        body: "Any page calling getSession()/requireSession() reads cookies, which is uncached request data — the session guard was being prerendered and broke the build. Better Auth also compares session expiry against new Date(), which Next flags as unstable during prerendering.",
      },
      {
        title: "Route protection after middleware was renamed",
        body: "Next.js 16 renamed middleware.ts to proxy.ts, and the proxy runs before rendering — but on its own it is not a security boundary, since server functions and route handlers can bypass matchers.",
      },
      {
        title: "Post-sign-in redirects behaved differently in dev and production",
        body: "After signing in, users did not always land back on the protected page they came from: the redirect worked in one environment but not the other, and signed-in visitors could still land on the auth pages.",
      },
      {
        title: "Price badges contradicted their own arrows",
        body: "The change badges initially used the stock-market convention (green up, red down) while the design specifies the consumer-goods convention — a price rise is the unwelcome direction, so it should read red ▲ and a fall green ▼. Every badge looked like it disagreed with its own glyph.",
      },
      {
        title: "Tricky REST API contract",
        body: "The API's documented slug path (/products/{slug}) returns 404; the working form is /products?slug=… which returns an array — and an unknown slug yields [] with HTTP 200, so checking the status code alone is not enough. Query filters such as limit/sort are unsupported, so all sorting and paging had to be done locally.",
      },
      {
        title: "Better Auth + libSQL setup",
        body: "Better Auth cannot infer a database driver from a raw @libsql/client (it throws 'Failed to initialize database adapter') and its CLI cannot load a TypeScript config file in this project.",
      },
    ],
    solutions: [
      {
        title: "Pass params into Suspense children",
        body: "Page props are typed with the generated helpers and the params/searchParams promises are passed into Suspense children instead of being awaited in the page body — documented in the repo's docs/00-overview.md §5 and fixed in commit 'fix: resolve uncached url and session data outside Suspense'.",
      },
      {
        title: "connection() stops the prerender",
        body: "The session guard starts with await connection() so the protected output is evaluated per request instead of at prerender time — fixed in commit 'fix: stop prerendering the session guard with connection()'. Date-dependent helpers are wrapped in 'use cache'.",
      },
      {
        title: "Defense in depth for protected routes",
        body: "proxy.ts handles redirects and preserves the intended destination, while a server-side auth.api.getSession() check guards the page itself — so protection holds even when a matcher is bypassed.",
      },
      {
        title: "Consistent redirect handling",
        body: "Three focused fixes made the post-sign-in redirect work in both environments, returned users to the protected page after signing in, and sent already signed-in visitors away from the auth pages (commits 8dbf03a, 42fb808, 5164ae4).",
      },
      {
        title: "Glyph and colour read from one source",
        body: "Badge, ticker and section headings now derive both glyph and colour from the same change.dir value (up → red, down → green), so they can never disagree again — fixed across three components in commit 'fix: colour a price rise as red and a fall as green'.",
      },
      {
        title: "Defensive API client",
        body: "A single typed client module resolves the slug form that actually works, treats [] as 'not found', and falls back across two mirror base URLs with an 8-second timeout so one outage cannot take the site down.",
      },
      {
        title: "Explicit Kysely dialect + migration script",
        body: "An explicit Kysely LibsqlDialect is passed to Better Auth, and scripts/migrate.mjs applies schema.sql (idempotently) instead of relying on the CLI, with a documented .env setup for local and Turso production databases.",
      },
    ],
    future: [
      "Historical price trends and simple charts per commodity.",
      "Richer market-to-market comparisons across divisions.",
      "Saved/favourite products and price alerts.",
      "Forgot-password and email verification flows (explicitly out of scope so far).",
      "Offline support or a lighter data snapshot for slow connections.",
      "Automated tests for the API client, sort logic and Bengali formatters.",
    ],
    seo: {
      title: "BazarDor — বাজার দর | Bengali Market Price Dashboard",
      description:
        "BazarDor (বাজার দর) is a Bengali-first market price dashboard built with Next.js 16, TypeScript and Tailwind CSS: today's rates for 33 commodities across 8 categories, price movement badges and a 12-bazaar breakdown.",
    },
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export function getProjectNeighbors(slug: string): {
  prev: Project | null;
  next: Project | null;
} {
  const index = projects.findIndex((project) => project.slug === slug);
  if (index === -1) return { prev: null, next: null };
  return {
    prev: index > 0 ? projects[index - 1] : null,
    next: index < projects.length - 1 ? projects[index + 1] : null,
  };
}
