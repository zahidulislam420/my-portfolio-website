"use client";

import { ArrowUpIcon } from "./icons";

/** Smoothly returns the visitor to the top of the page. */
export function BackToTop({ className = "" }: { className?: string }) {
  const scrollToTop = () => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" });
    // Move keyboard focus back to the top for screen-reader users.
    document.getElementById("site-top")?.focus?.();
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      className={`btn btn-outline !px-3.5 !py-2 text-xs ${className}`}
      aria-label="Back to top"
    >
      <ArrowUpIcon width={15} height={15} />
      Back to top
    </button>
  );
}
