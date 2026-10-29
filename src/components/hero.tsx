import Image from "next/image";

import { profile, socials } from "@/data/profile";
import { ArrowRightIcon, DownloadIcon, MailIcon, MapPinIcon } from "./icons";

const primaryLinks = [
  { label: "GitHub", href: socials.github, icon: "/images/tech/github.svg" },
  {
    label: "LinkedIn",
    href: socials.linkedin,
    icon: "/images/tech/linkedin.svg",
  },
];

const secondaryLinks = [
  { label: "X (Twitter)", href: socials.twitter, icon: "/images/tech/x.svg" },
];

/**
 * Hero — identity, intro, CTAs and portrait.
 * Entrance animations are CSS-only and respect prefers-reduced-motion.
 */
export function Hero() {
  return (
    <section
      id="home"
      className="section relative overflow-hidden"
      aria-labelledby="hero-heading"
    >
      <div className="container-x grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
        <div className="flex flex-col items-start gap-6">
          <p className="animate-fade-up eyebrow flex items-center gap-2">
            <span
              aria-hidden="true"
              className="inline-block h-2 w-2 rounded-full bg-accent"
            />
            {profile.greeting}
          </p>

          <h1
            id="hero-heading"
            className="animate-fade-up fade-delay-100 text-4xl font-extrabold leading-[1.08] tracking-tight text-txt sm:text-5xl lg:text-6xl"
          >
            {profile.fullName}
          </h1>

          <p className="animate-fade-up fade-delay-200 text-xl font-semibold sm:text-2xl">
            <span className="bg-gradient-to-r from-accent via-accent-2 to-violet bg-clip-text text-transparent">
              {profile.designation}
            </span>
          </p>

          <p className="animate-fade-up fade-delay-200 max-w-xl text-base leading-7 text-muted sm:text-lg sm:leading-8">
            {profile.intro}
          </p>

          <p className="animate-fade-up fade-delay-300 flex items-center gap-2 text-sm text-muted">
            <MapPinIcon width={16} height={16} className="text-accent" />
            {profile.location}
          </p>

          <div className="animate-fade-up fade-delay-300 flex flex-wrap items-center gap-3">
            <a href="#projects" className="btn btn-primary">
              View My Projects
              <ArrowRightIcon width={16} height={16} />
            </a>
            <a
              href={profile.resume.downloadUrl}
              download
              className="btn btn-outline"
            >
              <DownloadIcon width={16} height={16} />
              {profile.resume.label}
            </a>
          </div>

          <div className="animate-fade-up fade-delay-400 flex flex-wrap items-center gap-3">
            {primaryLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline !px-4 !py-2.5 text-sm"
              >
                <Image
                  src={link.icon}
                  alt=""
                  width={16}
                  height={16}
                  aria-hidden="true"
                />
                {link.label}
                <span className="sr-only">(opens in a new tab)</span>
              </a>
            ))}
            {secondaryLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${link.label} (opens in a new tab)`}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-line bg-surface text-muted transition-colors hover:border-accent hover:text-txt"
              >
                <Image src={link.icon} alt="" width={15} height={15} />
              </a>
            ))}
            <a
              href={`mailto:${socials.email}`}
              aria-label={`Email ${socials.email}`}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-line bg-surface text-muted transition-colors hover:border-accent hover:text-txt"
            >
              <MailIcon width={16} height={16} />
            </a>
          </div>
        </div>

        <div className="animate-fade-in fade-delay-200 mx-auto w-full max-w-md lg:max-w-none">
          <div className="relative rounded-[1.75rem] border border-line bg-surface p-2 shadow-[0_30px_80px_-40px_rgba(34,211,238,0.45)]">
            <div className="relative aspect-square overflow-hidden rounded-[1.4rem] bg-surface-2">
              <Image
                src={profile.photo.src}
                alt={profile.photo.alt}
                fill
                priority
                sizes="(max-width: 1024px) 80vw, 40vw"
                className="object-cover"
              />
            </div>
            {/* Accent corner detail */}
            <span
              aria-hidden="true"
              className="absolute -right-1.5 -top-1.5 h-16 w-16 rounded-2xl border-2 border-accent/60 bg-bg"
            />
            <span
              aria-hidden="true"
              className="absolute -bottom-3 left-6 rounded-full border border-line bg-surface px-4 py-1.5 font-mono text-xs font-semibold text-accent"
            >
              {"</>"} full stack
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
