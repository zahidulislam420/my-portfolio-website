"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { navLinks, profile, socials } from "@/data/profile";
import { BackToTop } from "./back-to-top";
import { MailIcon } from "./icons";

const socialLinks = [
  { label: "GitHub", href: socials.github, icon: "/images/tech/github.svg" },
  {
    label: "LinkedIn",
    href: socials.linkedin,
    icon: "/images/tech/linkedin.svg",
  },
  { label: "X (Twitter)", href: socials.twitter, icon: "/images/tech/x.svg" },
  {
    label: "WhatsApp",
    href: socials.whatsapp,
    icon: "/images/tech/whatsapp.svg",
  },
];

export function Footer() {
  const pathname = usePathname();
  const year = new Date().getFullYear();
  const onHome = pathname === "/";

  return (
    <footer className="border-t border-line bg-bg-soft">
      <div className="container-x py-12">
        <div className="grid gap-10 md:grid-cols-3">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2.5">
              <span
                aria-hidden="true"
                className="flex h-9 w-9 items-center justify-center rounded-xl border border-line bg-surface font-mono text-sm font-bold text-accent"
              >
                MZ
              </span>
              <div>
                <p className="text-sm font-semibold text-txt">
                  {profile.fullName}
                </p>
                <p className="text-xs text-muted">{profile.designation}</p>
              </div>
            </div>
            <p className="max-w-xs text-sm leading-6 text-muted">
              Building modern, responsive and user-friendly web applications
              from {profile.location}.
            </p>
            <div className="flex items-center gap-2">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${link.label} profile (opens in a new tab)`}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-line bg-surface text-muted transition-colors hover:border-accent hover:text-txt"
                >
                  <Image src={link.icon} alt="" width={15} height={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <nav aria-label="Footer">
            <h2 className="font-mono text-xs uppercase tracking-widest text-muted">
              Quick links
            </h2>
            <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2.5">
              {navLinks.map((link) => (
                <li key={link.id}>
                  {onHome ? (
                    <a
                      href={`#${link.id}`}
                      className="text-sm text-muted transition-colors hover:text-txt"
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link
                      href={`/#${link.id}`}
                      className="text-sm text-muted transition-colors hover:text-txt"
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
              <li>
                <Link
                  href="/projects/fit-log"
                  className="text-sm text-muted transition-colors hover:text-txt"
                >
                  Project details
                </Link>
              </li>
            </ul>
          </nav>

          {/* Contact */}
          <div>
            <h2 className="font-mono text-xs uppercase tracking-widest text-muted">
              Contact
            </h2>
            <ul className="mt-4 flex flex-col gap-2.5 text-sm">
              <li>
                <a
                  href={`mailto:${socials.email}`}
                  className="flex items-center gap-2 text-muted transition-colors hover:text-txt"
                >
                  <MailIcon width={15} height={15} className="text-accent" />
                  <span className="break-all">{socials.email}</span>
                </a>
              </li>
              <li>
                <a
                  href={`tel:+${socials.phoneRaw.replace(/^0/, "880")}`}
                  className="text-muted transition-colors hover:text-txt"
                >
                  {socials.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={socials.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted transition-colors hover:text-txt"
                >
                  WhatsApp
                  <span className="sr-only">(opens in a new tab)</span>
                </a>
              </li>
            </ul>

            <div className="mt-5">
              <BackToTop />
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-line pt-6 text-xs text-muted sm:flex-row">
          <p>
            © {year} {profile.fullName}. All rights reserved.
          </p>
          <p className="font-mono">
            Designed &amp; developed with{" "}
            <span aria-hidden="true">❤</span>
            <span className="sr-only">care</span> in Dhaka
          </p>
        </div>
      </div>
    </footer>
  );
}
