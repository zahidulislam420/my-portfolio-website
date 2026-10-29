"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useState } from "react";

import { navLinks, profile } from "@/data/profile";
import { CloseIcon, DownloadIcon, MenuIcon } from "./icons";

/**
 * Sticky, responsive navigation.
 * - On the homepage, links are plain anchors so native smooth scrolling applies.
 * - On other routes (project pages) links point back to /#section.
 * - The active section is tracked with IntersectionObserver on the homepage.
 */
export function Navbar() {
  const pathname = usePathname();
  const onHome = pathname === "/";
  // The menu remembers the path it was opened on, so it closes itself as soon
  // as the route changes — no effect needs to call setState for that.
  const [openPath, setOpenPath] = useState<string | null>(null);
  const [activeSection, setActiveSection] = useState<string>("home");

  const menuOpen = openPath === pathname;
  const closeMenu = useCallback(() => setOpenPath(null), []);

  // Close the menu with Escape while it is open.
  useEffect(() => {
    if (!menuOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeMenu();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [menuOpen, closeMenu]);

  // Prevent background scrolling while the mobile menu is open.
  useEffect(() => {
    if (!menuOpen) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [menuOpen]);

  // Track which section is currently in view (homepage only).
  useEffect(() => {
    if (!onHome) return;

    const sections = navLinks
      .map((link) => document.getElementById(link.id))
      .filter((node): node is HTMLElement => node !== null);

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) => a.boundingClientRect.top - b.boundingClientRect.top,
          );
        if (visible.length > 0) {
          setActiveSection(visible[0].target.id);
        }
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [onHome]);

  // Only the homepage has in-page sections; elsewhere nothing is active.
  const active = onHome ? activeSection : "";

  const linkClass = (id: string, variant: "desktop" | "mobile") => {
    const size =
      variant === "desktop"
        ? "text-sm font-medium py-1"
        : "block py-3.5 text-base font-medium";
    const tone = active === id ? "text-accent" : "text-muted hover:text-txt";
    return `relative transition-colors duration-200 ${size} ${tone}`;
  };

  const renderLink = (
    id: string,
    label: string,
    variant: "desktop" | "mobile",
    onClick?: () => void,
  ) => {
    const className = linkClass(id, variant);
    const current =
      active === id ? ({ "aria-current": "location" } as const) : {};

    // Same-page anchors use native <a> for reliable smooth scrolling;
    // cross-route links use next/link so navigation stays client-side.
    return onHome ? (
      <a href={`#${id}`} className={className} onClick={onClick} {...current}>
        {label}
      </a>
    ) : (
      <Link
        href={`/#${id}`}
        className={className}
        onClick={onClick}
        {...current}
      >
        {label}
      </Link>
    );
  };

  return (
    <header
      id="site-top"
      tabIndex={-1}
      className="sticky top-0 z-50 border-b border-line/70 bg-bg/85 backdrop-blur-md"
    >
      <div className="container-x flex h-16 items-center justify-between gap-4">
        <a
          href={onHome ? "#home" : "/#home"}
          className="group flex items-center gap-2.5"
          aria-label={`${profile.fullName} — back to homepage top`}
        >
          <span
            aria-hidden="true"
            className="flex h-9 w-9 items-center justify-center rounded-xl border border-line bg-surface font-mono text-sm font-bold text-accent transition-colors group-hover:border-accent"
          >
            MZ
          </span>
          <span className="hidden text-sm font-semibold tracking-tight text-txt sm:block">
            {profile.shortName}
          </span>
        </a>

        <nav
          aria-label="Primary"
          className="hidden items-center gap-6 lg:flex xl:gap-7"
        >
          {navLinks.map((link) => (
            <span key={link.id}>
              {renderLink(link.id, link.label, "desktop")}
            </span>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={profile.resume.downloadUrl}
            download
            className="btn btn-primary hidden !px-4 !py-2 text-xs sm:inline-flex"
          >
            <DownloadIcon width={15} height={15} />
            Resume
          </a>

          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-line bg-surface text-txt transition-colors hover:border-accent lg:hidden"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            onClick={() =>
              setOpenPath((current) => (current === pathname ? null : pathname))
            }
          >
            {menuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        hidden={!menuOpen}
        className="fixed inset-x-0 top-16 bottom-0 z-40 overflow-y-auto border-t border-line bg-bg/97 backdrop-blur-lg lg:hidden"
      >
        <nav
          aria-label="Mobile"
          className="container-x flex flex-col gap-1 py-6"
        >
          {navLinks.map((link) => (
            <div key={link.id} className="border-b border-line/60 last:border-0">
              {renderLink(link.id, link.label, "mobile", closeMenu)}
            </div>
          ))}
          <a
            href={profile.resume.downloadUrl}
            download
            onClick={closeMenu}
            className="btn btn-primary mt-6 w-full"
          >
            <DownloadIcon width={16} height={16} />
            {profile.resume.label}
          </a>
        </nav>
      </div>
    </header>
  );
}
