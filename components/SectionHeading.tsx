export default function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
  tone = "default",
}: {
  eyebrow: string;
  title: string;
  intro?: string;
  align?: "left" | "center";
  tone?: "default" | "inverted";
}) {
  const centered = align === "center";
  const eyebrowColor =
    tone === "inverted"
      ? "text-accent-400"
      : "text-brand-700 dark:text-accent-400";
  const titleColor = tone === "inverted" ? "text-white" : "";
  const introColor = tone === "inverted" ? "text-brand-100" : "text-muted";

  return (
    <div className={`max-w-2xl ${centered ? "mx-auto text-center" : ""}`}>
      <span className={`eyebrow ${eyebrowColor}`}>{eyebrow}</span>
      <div
        className={`mt-3 flex items-center gap-4 ${
          centered ? "justify-center" : ""
        }`}
      >
        {!centered && (
          <span
            aria-hidden
            className="hidden h-8 w-1 shrink-0 rounded bg-accent-400 sm:block"
          />
        )}
        <h2
          className={`font-display text-3xl font-semibold tracking-wide sm:text-4xl ${titleColor}`}
        >
          {title}
        </h2>
      </div>
      {intro && (
        <p
          className={`font-sans mt-4 text-base leading-relaxed sm:text-base ${introColor}`}
        >
          {intro}
        </p>
      )}
    </div>
  );
}
