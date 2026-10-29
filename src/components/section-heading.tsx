type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  /** Optional id for the h2, for aria-labelledby on the wrapping section. */
  headingId?: string;
};

/**
 * Shared heading block so every section starts with the same rhythm:
 * mono eyebrow → heading → optional description.
 */
export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  headingId,
}: SectionHeadingProps) {
  const alignment =
    align === "center" ? "mx-auto items-center text-center" : "items-start";

  return (
    <div className={`mb-10 flex max-w-3xl flex-col gap-3 ${alignment}`}>
      <p className="eyebrow">{eyebrow}</p>
      <h2 id={headingId} className="text-3xl font-bold tracking-tight text-txt sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="text-base leading-7 text-muted sm:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}
