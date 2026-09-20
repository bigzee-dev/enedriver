import { CITY, COUNTRY } from "@/lib/constants";
import { ABOUT_STORY } from "@/lib/content";

/**
 * The company story. An asymmetric split — a sticky heading rail on the left,
 * the copy running long on the right — so three dense paragraphs still read
 * like an editorial page rather than a wall of text.
 */
export default function Information() {
  const [lead, ...paragraphs] = ABOUT_STORY;

  return (
    <section
      id="our-story"
      className="bg-surface w-6xl mx-auto scroll-mt-20 py-20 sm:py-24 sm:pb-6"
    >
      <div className="max-w-4xl px-4 sm:px-8">
        <div className="grid ">
          <div className="space-y-6">
            <span className="eyebrow text-accent-400 uppercase">
              Company Overview
            </span>
            <div className="mt-4 flex items-center gap-4">
              <span
                aria-hidden
                className="hidden h-8 w-1 shrink-0 rounded bg-accent-400 sm:block"
              />
              <h2
                className={`font-display text-3xl font-semibold tracking-wide sm:text-4xl $text-brand-900 dark:text-accent-400`}
              >
                Trust us through your journey
              </h2>
            </div>

            <p className="text-lg leading-relaxed text-heading sm:text-xl">
              {lead}
            </p>
            {paragraphs.map((paragraph) => (
              <p
                key={paragraph.slice(0, 32)}
                className="text-base leading-relaxed text-body"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
