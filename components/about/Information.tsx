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
    <section id="our-story" className="scroll-mt-20 py-20 sm:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-8">
        <div className="grid ">
          <div className="space-y-6">
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
