import type { Metadata } from "next";
import Link from "next/link";

import { ArrowLeftIcon, ArrowRightIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "Page Not Found",
  description:
    "The page you are looking for does not exist or may have moved.",
};

export default function NotFound() {
  return (
    <section className="section flex items-center">
      <div className="container-x flex max-w-xl flex-col items-start gap-5">
        <p className="eyebrow">404 — page not found</p>
        <h1 className="text-4xl font-extrabold tracking-tight text-txt sm:text-5xl">
          This page doesn&apos;t exist
        </h1>
        <p className="text-base leading-7 text-muted">
          The link may be outdated, or the project you&apos;re looking for has
          moved. Try the projects section or head back to the homepage.
        </p>
        <div className="flex flex-wrap gap-3">
          <Link href="/#projects" className="btn btn-primary">
            View projects
            <ArrowRightIcon width={16} height={16} />
          </Link>
          <Link href="/" className="btn btn-outline">
            <ArrowLeftIcon width={16} height={16} />
            Back to home
          </Link>
        </div>
      </div>
    </section>
  );
}
