import { CheckIcon } from "@/components/Icons";
import { CORE_PILLARS } from "@/lib/content";
import SectionHeading from "@/components/SectionHeading";

/**
 * The four pillars, laid out as one band: the hairlines are the gaps
 * themselves (gap-px over a translucent white), so no per-cell borders.
 */
export default function CorePillars() {
  return (
    <section
      id="core-pillars"
      className="scroll-mt-20 bg-brand-950 py-20 text-white sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-8">
        <SectionHeading
          eyebrow="What we stand on"
          title="Our core pillars"
          intro="Four things every client gets, whether we are training a single operator or an entire fleet."
          tone="inverted"
        />

        <ul className="mt-12 grid grid-cols-1 gap-px overflow-hidden rounded-2xl bg-white/15 sm:grid-cols-2">
          {CORE_PILLARS.map(({ id, index, title, body }) => (
            <li
              key={id}
              className="relative bg-brand-950 p-7 transition-colors hover:bg-brand-900 sm:p-8"
            >
              <span
                aria-hidden
                className="absolute right-6 top-7 font-mono text-xs text-white/25"
              >
                {index}
              </span>

              <div className="flex items-start gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-accent-400 bg-accent-400/15 text-accent-400">
                  <CheckIcon className="h-5 w-5" strokeWidth={2.4} />
                </span>
                <div className="min-w-0 pr-8">
                  <h3 className="font-display text-lg font-bold text-white">
                    {title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-brand-100">
                    {body}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
