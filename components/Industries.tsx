import { INDUSTRIES } from "@/lib/content";
import SectionHeading from "./SectionHeading";
import { CheckIcon } from "./Icons";

export default function Industries() {
  return (
    <section id="industries" className="scroll-mt-20 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <SectionHeading
            eyebrow="Who we train"
            title="Trusted across public and private sectors"
            intro="We work with the organisations that keep Botswana moving — from national departments and parastatals to mines, contractors and private fleets."
          />

          <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {INDUSTRIES.map((industry) => (
              <li
                key={industry}
                className="flex items-center gap-3 rounded-xl border border-hairline bg-surface px-4 py-3.5"
              >
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-brand-900/10 text-brand-800 dark:bg-accent-400/15 dark:text-accent-400">
                  <CheckIcon className="h-4 w-4" />
                </span>
                <span className="text-sm font-medium text-body">
                  {industry}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
